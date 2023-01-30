# Obsidian Backslash Macro

Replace LaTeX macros with (Unicode) characters. Inspired by DrRacket.

## How to Install

This plugin is [pending approval](https://github.com/obsidianmd/obsidian-releases/pull/1589) to be added to the Obsidian Community plugins list.

The plugin can be installed manually:

1. Download `manifest.json` and `main.js` from the latest release that can be found [here](https://github.com/Bjarno/obsidian-backslash-latex/releases).
2. Make a new folder in `.obsidian/plugins` called `backslash-latex-macro`.
3. Store the downloaded files in that folder.

Alternatively, it can be installed using [BRAT](https://github.com/TfTHacker/obsidian42-brat) by specifying `Bjarno/obsidian-backslash-latex` as a new plugin repository.


## How to Use

> Note: Keybindings can be changed in Obsidian settings.

### Replace Backslash Macro with Symbol

1. Type a LaTeX command that can be typeset into a single symbol (e.g., `\rightarrow`)
2. Press `ALT+\` (Windows, Linux) or `CTRL+\` (Mac) to replace this with the corresponding symbol (→)

The full list of supported symbols can be found [here](https://docs.racket-lang.org/drracket/Keyboard_Shortcuts.html#%28part._.La.Te.X_and_.Te.X_inspired_keybindings%29).

### Insert Lambda

1. Press `CTRL+\` (Windows, Linux) or `CMD+\` (Mac) to immediately insert a λ (lambda).
