# KiCanvas Embed

KiCanvas Embed is an Obsidian plugin that renders KiCad schematics and boards directly inside your notes by using the [KiCanvas](https://kicanvas.org/) web component.

## Features

- Render `.kicad_sch` and `.kicad_pcb` files from your vault inside a note.
- Resolve both direct vault paths and paths relative to the current note.
- Support per-block options for `controls`, `controlslist`, `zoom`, `theme`, and `height`.
- Configure default viewer behavior from the plugin settings.

## Usage

Use a `kicanvas` code block and point it at a KiCad file in your vault:

````
```kicanvas
Electronics/Power Supply/main.kicad_sch
```
````

You can also use key-value syntax:

````
```kicanvas
src: Electronics/Power Supply/main.kicad_pcb
controls: full
theme: kicad
height: 80vh
```
````

Supported keys:

- `src`
- `controls`
- `controlslist`
- `zoom`
- `theme`
- `height`

## Installation

### Community Plugins / BRAT

This repository is structured for the standard Obsidian release flow and BRAT-style installs. Releases publish the standard plugin assets:

- `manifest.json`
- `main.js`
- `styles.css`

### Manual install

Copy these files into your vault at `.obsidian/plugins/kicanvas-embed/`:

- `manifest.json`
- `main.js`
- `styles.css`

Then enable **KiCanvas Embed** in Obsidian.

## Development

```bash
npm install
npm run build
```

The build downloads the current `kicanvas.js` bundle from `https://kicanvas.org/kicanvas/kicanvas.js`, converts it into a generated TypeScript module under `vendor/`, and bundles it into `main.js`.

Create a release by pushing a Git tag that matches the plugin version in `manifest.json`. The GitHub Actions workflow builds the plugin and creates a draft release with:

- `main.js`
- `manifest.json`
- `styles.css`

## Privacy and Behavior

- No telemetry
- No ads
- No account requirement
- No paid features
- No network access during normal plugin use beyond loading local vault resources

## Acknowledgements

- [KiCanvas](https://kicanvas.org/) by Alicia Sykes and contributors
- [Obsidian](https://obsidian.md/)
