import fs from "node:fs";

const kicanvasUrl = "https://kicanvas.org/kicanvas/kicanvas.js";
const response = await fetch(kicanvasUrl, {
  headers: {
    "User-Agent": "obsidian-kicanvas-embed-build"
  }
});

if (!response.ok)
{
  throw new Error(`Failed to download ${kicanvasUrl}: ${response.status} ${response.statusText}`);
}

const bundle = await response.text();

fs.mkdirSync("vendor", { recursive: true });
fs.writeFileSync("vendor/kicanvas.ts", `// @ts-nocheck\n${bundle}\nexport {};\n`);

if (fs.existsSync("kicanvas.js"))
{
  fs.rmSync("kicanvas.js");
}

console.log(`Downloaded KiCanvas bundle from ${kicanvasUrl} and embedded it into main.js`);
