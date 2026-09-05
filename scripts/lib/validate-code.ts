import ts from 'typescript';

/**
 * Safety net for AI-generated .tsx/.ts source code.
 *
 * Context: on 2026-09-03 the Builder Agent generated a page containing an
 * unescaped Hebrew גרשיים (gershayim) inside a double-quoted JS string
 * literal: `"...הלילה והסופ"ש."`. The JSON wrapper around the LLM response
 * parsed fine (JSON.parse doesn't care about JS string syntax inside a JSON
 * *value*), so the bug slipped straight past the agent and into `main`,
 * where it broke `next build` for every deployment until a human fixed it.
 *
 * Every agent that writes LLM-generated code to disk (builder, seo-booster,
 * blog, social) MUST call `validateTsxSyntax` (and, for content agents that
 * assemble strings from Hebrew text, `findUnescapedHebrewQuotes`) BEFORE
 * writing the file. If validation fails, do not write the file — log the
 * error and mark the job/trend as failed instead. This does not rely on the
 * model "remembering" instructions; it catches the mistake mechanically,
 * every time, regardless of what the model does.
 */
export function validateTsxSyntax(
    code: string,
    fileName = 'generated.tsx'
): { valid: boolean; errors: string[] } {
    const sourceFile = ts.createSourceFile(
        fileName,
        code,
        ts.ScriptTarget.Latest,
        /* setParentNodes */ true,
        ts.ScriptKind.TSX
    );

    // parseDiagnostics is a stable-in-practice internal field that holds
    // syntax errors found while parsing (as opposed to type errors, which
    // would require a full program/checker). It's exactly what we need here
    // since these are AI-generation syntax bugs, not type bugs.
    const diagnostics: readonly ts.Diagnostic[] =
        (sourceFile as unknown as { parseDiagnostics?: ts.Diagnostic[] }).parseDiagnostics || [];

    if (diagnostics.length === 0) {
        return { valid: true, errors: [] };
    }

    const errors = diagnostics.map((d) => {
        const pos = typeof d.start === 'number' ? d.start : 0;
        const { line, character } = sourceFile.getLineAndCharacterOfPosition(pos);
        const message = ts.flattenDiagnosticMessageText(d.messageText, '\n');
        return `Line ${line + 1}, Col ${character + 1}: ${message}`;
    });

    return { valid: false, errors };
}

/**
 * Explicit guardrail for the exact bug class that caused the outage:
 * a bare Hebrew גרשיים sitting between two Hebrew letters inside a
 * double-quoted string (e.g. סופ"ש, בע"מ, ק"מ, סל"ד, ת"א, צה"ל, ח"כ...),
 * without a preceding backslash. This pattern is invisible to a human
 * skimming the text (it just looks like correct Hebrew) but breaks a
 * double-quoted JS string literal every time.
 *
 * Flag matches even beyond builder.ts's page.tsx output, since any agent
 * (seo-booster, blog, social) could introduce the same pattern.
 */
export function findUnescapedHebrewQuotes(code: string): string[] {
    const pattern = /"[^"\\]*[\u0590-\u05FF]"[\u0590-\u05FF][^"]*"/g;
    return code.match(pattern) || [];
}

/**
 * Convenience wrapper: run both checks and return one combined verdict.
 * Use this at every writeFileSync call site that writes AI-generated code.
 */
export function assertSafeToWrite(
    code: string,
    fileName: string
): { ok: true } | { ok: false; reason: string } {
    const syntax = validateTsxSyntax(code, fileName);
    if (!syntax.valid) {
        return {
            ok: false,
            reason: `Syntax error(s) in generated code for ${fileName}:\n${syntax.errors.join('\n')}`,
        };
    }

    const badQuotes = findUnescapedHebrewQuotes(code);
    if (badQuotes.length > 0) {
        return {
            ok: false,
            reason:
                `Unescaped Hebrew גרשיים found in a double-quoted string in ${fileName} ` +
                `(this exact pattern broke production on 2026-09-03):\n` +
                badQuotes.map((m) => `  ${m}`).join('\n'),
        };
    }

    return { ok: true };
}
