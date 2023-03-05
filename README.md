# Weasel Light

Forked from Tiny Light. Differences:

- foregrounds darkened
- borders darkened
- lightly contrasting backgrounds for various things
- alpha channel removed from all foregrounds

## Making changes

- Run `npm install` to install Prettier and the `vsce` vscode extension packager.
- Edit `package.json` to change the name, description, etc.
- Rename `weasel-light.json` to match the (hopefully changed) reference in `package.json`.
- Edit the colors!
- To package the theme into a `.vsix` file, run `npm install` and then `npm run build`.

## See also

See this included doc for more information about usage: [vsc-extension-quickstart.md](vsc-extension-quickstart.md).

## Attribution

- Forked from Tiny Light: https://github.com/luqimin/tinylight-vscode
