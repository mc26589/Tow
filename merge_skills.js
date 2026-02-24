const fs = require('fs');

const skills = [
    "algorithmic-art", "canvas-design", "doc-coauthoring",
    "frontend-design", "mcp-builder", "remotion-best-practices",
    "skill-creator", "slack-gif-creator", "theme-factory",
    "web-artifacts-builder", "webapp-testing"
];

const basePath = "c:\\Users\\dalia-stein\\Desktop\\GRAR\\.agent";

for (let skill of skills) {
    let localF = `${basePath}\\skills\\${skill}\\SKILL.md`;
    let remoteF = `${basePath}\\tmp-skills\\skills\\${skill}\\SKILL.md`;
    if (!fs.existsSync(localF) || !fs.existsSync(remoteF)) {
        console.log(`Skipping ${skill} - file not found`);
        continue;
    }

    let lContent = fs.readFileSync(localF, 'utf-8');
    let rContent = fs.readFileSync(remoteF, 'utf-8');

    let rYamlMatch = /^-{3}\r?\n([\s\S]*?)\r?\n-{3}/.exec(rContent);
    let lYamlMatch = /^-{3}\r?\n([\s\S]*?)\r?\n-{3}/.exec(lContent);

    if (!lYamlMatch || !rYamlMatch) {
        console.log(`Failed regex for ${skill}`);
        continue;
    }

    let rYaml = rYamlMatch[1];
    let lYaml = lYamlMatch[1].trim();

    let newYaml = lYaml;
    let riskMatch = rYaml.match(/risk:\s*(.*)/);
    let srcMatch = rYaml.match(/source:\s*(.*)/);
    if (riskMatch && !lYaml.includes('risk:')) newYaml += `\nrisk: ${riskMatch[1]}`;
    if (srcMatch && !lYaml.includes('source:')) newYaml += `\nsource: ${srcMatch[1]}`;

    let finalContent = lContent.replace(lYamlMatch[0], `---\n${newYaml}\n---`);

    let whenMatch = rContent.match(/## When to Use[\s\S]*$/);
    if (whenMatch && !finalContent.includes('## When to Use')) {
        finalContent = finalContent.trim() + "\n\n" + whenMatch[0].trim() + "\n";
    }

    fs.writeFileSync(localF, finalContent);
    console.log(`Merged ${skill}`);
}
