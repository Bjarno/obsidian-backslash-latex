import { Plugin } from 'obsidian';


export default class BackSlashLatexMacroPlugin extends Plugin {

	readonly REPLACE = {
		"Downarrow": "⇓",
		"nwarrow": "↖",
		"downarrow": "↓",
		"Rightarrow": "⇒",
		"rightarrow": "→",
		"rightharpoonup": "⇀",
		"leftharpoonup": "↼",
		"rightharpoondown": "⇁",
		"leftharpoondown": "↽",
		"rightleftharpoons": "⇌",
		"mapsto": "↦",
		"searrow": "↘",
		"swarrow": "↙",
		"leftarrow": "←",
		"uparrow": "↑",
		"Leftarrow": "⇐",
		"longrightarrow": "⟶",
		"Uparrow": "⇑",
		"Leftrightarrow": "⇔",
		"updownarrow": "↕",
		"leftrightarrow": "↔",
		"nearrow": "↗",
		"Updownarrow": "⇕",
		"leadsto": "↝",
		"aleph": "א",
		"prime": "′",
		"emptyset": "∅",
		"nabla": "∇",
		"diamondsuit": "♦",
		"spadesuit": "♠",
		"clubsuit": "♣",
		"heartsuit": "♥",
		"sharp": "♯",
		"flat": "♭",
		"natural": "♮",
		"surd": "√",
		"neg": "¬",
		"triangle": "△",
		"forall": "∀",
		"all": "∀",
		"exists": "∃",
		"infty": "∞",
		"circ": "∘",
		"partial": "∂",
		"alpha": "α",
		"theta": "θ",
		"tau": "τ",
		"beta": "β",
		"vartheta": "ϑ",
		"pi": "π",
		"upsilon": "υ",
		"gamma": "γ",
		"varpi": "ϖ",
		"phi": "ϕ",
		"delta": "δ",
		"kappa": "κ",
		"rho": "ρ",
		"varphi": "φ",
		"epsilon": "ϵ",
		"lambda": "λ",
		"varrho": "ϱ",
		"chi": "χ",
		"varepsilon": "ε",
		"mu": "μ",
		"sigma": "σ",
		"psi": "ψ",
		"zeta": "ζ",
		"nu": "ν",
		"varsigma": "ς",
		"omega": "ω",
		"eta": "η",
		"xi": "ξ",
		"iota": "ι",
		"Gamma": "Γ",
		"Lambda": "Λ",
		"Sigma": "Σ",
		"Psi": "Ψ",
		"Delta": "Δ",
		"Xi": "Ξ",
		"Upsilon": "Υ",
		"Omega": "Ω",
		"Theta": "Θ",
		"Pi": "Π",
		"Phi": "Φ",
		"pm": "±",
		"cap": "∩",
		"diamond": "◇",
		"lozenge": "◊",
		"square": "□",
		"oplus": "⊕",
		"mp": "∓",
		"cup": "∪",
		"bigtriangleup": "△",
		"ominus": "⊖",
		"times": "×",
		"uplus": "⊎",
		"bigtriangledown": "▽",
		"otimes": "⊗",
		"div": "÷",
		"sqcap": "⊓",
		"triangleright": "▹",
		"oslash": "⊘",
		"ast": "∗",
		"sqcup": "⊔",
		"vee": "∨",
		"wedge": "∧",
		"lor": "∨",
		"land": "∧",
		"lnot": "¬",
		"triangleleft": "◃",
		"odot": "⊙",
		"star": "★",
		"dagger": "†",
		"bullet": "•",
		"ddagger": "‡",
		"wr": "≀",
		"amalg": "⨿",
		"leq": "≤",
		"geq": "≥",
		"equiv": "≡",
		"models": "⊨",
		"prec": "≺",
		"succ": "≻",
		"precdot": "⋖",
		"succdot": "⋗",
		"sim": "∼",
		"perp": "⊥",
		"bot": "⊥",
		"top": "⊤",
		"preceq": "≼",
		"succeq": "≽",
		"simeq": "≃",
		"ll": "≪",
		"gg": "≫",
		"asymp": "≍",
		"parallel": "∥",
		"subset": "⊂",
		"supset": "⊃",
		"approx": "≈",
		"bowtie": "⋈",
		"subseteq": "⊆",
		"supseteq": "⊇",
		"cong": "≅",
		"sqsubsetb": "⊏",
		"sqsupsetb": "⊐",
		"neq": "≠",
		"smile": "⌣",
		"sqsubseteq": "⊑",
		"sqsupseteq": "⊒",
		"doteq": "≐",
		"frown": "⌢",
		"in": "∈",
		"ni": "∋",
		"notin": "∉",
		"propto": "∝",
		"vdash": "⊢",
		"dashv": "⊣",
		"cdot": "·",
		"sum": "∑",
		"prod": "∏",
		"coprod": "∐",
		"int": "∫",
		"oint": "∮",
		"sqrt": "√",
		"skull": "☠",
		"smiley": "☺",
		"blacksmiley": "☻",
		"frownie": "☹",
		"S": "§",
		"l": "ł",
		"newpage": "^L",
		"vdots": "⋮",
		"ddots": "⋱",
		"cdots": "⋯",
		"hdots": "⋯",
		"ldots": "…",
		"langle": "⟨",
		"rangle": "⟩",
		"amp": "&",
		"invamp": "⅋",
		"multimap": "⊸",
		"rightlollipop": "⊸",
		"leftmultimap": "⟜",
		"multimapinv": "⟜",
		"leftlollipop": "⟜"
	}

	async onload() {
		const platform = process.platform;
		const insertModifier = (platform === 'darwin') ? "Meta" : "Ctrl";
		const completeModifier = (platform === 'darwin') ? "Ctrl" : "Alt";

		this.addCommand({
			id: 'insert-lambda',
			name: 'Add Lambda Symbol (λ)',
			hotkeys: [
				{modifiers: [insertModifier], key: "\\"},
			],
			editorCallback: (editor) => {
				editor.replaceSelection("λ");
			}
		})

		this.addCommand({
			id: 'complete',
			name: 'Replace Backslash Macro with Symbol',
			hotkeys: [
				{modifiers: [completeModifier], key: "\\"},
			],
			editorCallback: (editor) => {
				const cursor = editor.getCursor();
				const line = editor.getLine(cursor.line);
				const pos = cursor.ch;
				const lineUtil = line.substring(0, pos);
				const lastBackslash = lineUtil.lastIndexOf("\\");
				if (lastBackslash === -1) { return; }
				const keyWord = lineUtil.substring(lastBackslash + 1);
				if (keyWord === "") { return; }
				const replaceBy = this.REPLACE[keyWord];
				if (replaceBy) {
					const from = {line: cursor.line, ch: cursor.ch - keyWord.length - 1};
					const to = cursor;
					editor.replaceRange(replaceBy, from, to, null);
				}
			}
		});
	}

	onunload() {

	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}
}
