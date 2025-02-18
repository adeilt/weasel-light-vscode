var theme = {
  name: "Weasel",
  type: "light",
  colors: {
    /* base */
    focusBorder: "#bd8500",
    /* editor */
    "editor.foreground": "#499504ff",
    "editor.background": "#fffbe8",
    "editorCursor.foreground": "#000000",
    "editor.lineHighlightBackground": "#e8dfc4ff",
    "editor.selectionBackground": "#dcd6c5",
    "editor.selectionHighlightBorder": "#E5C07B",
    "editor.selectionHighlightBackground": "#fdf2db",
    "editor.wordHighlightBackground": "#efe7d577",
    "editor.wordHighlightStrongBackground": "#efdbb977",
    "editor.findMatchBackground": "#ddf3be",
    "editor.findMatchHighlightBackground": "#ddf3be",
    "editor.findRangeHighlightBackground": "#ddf3be",
    "editor.findMatchBorder": "#E5C07B",
    "editor.findMatchHighlightBorder": "#E5C07B",
    "editor.findRangeHighlightBorder": "#E5C07B",
    "editorWhitespace.foreground": "#a8a8a8",
    "editorWidget.background": "#eee8d5",
    "editorGroupHeader.tabsBackground": "#d9d2c2",
    "editorIndentGuide.background": "#f7f2e4",
    "editorIndentGuide.activeBackground": "#ccbba1",
    /* list and tree */
    "list.focusBackground": "#dfca8866",
    "list.activeSelectionBackground": "#dfca88",
    "list.inactiveSelectionBackground": "#d1cbb8",
    "list.activeSelectionForeground": "#6c6c6c",
    "list.hoverBackground": "#dfca8844",
    "list.highlightForeground": "#b58900",
    "list.focusOutline": "#dfca8844",
    "tab.activeBackground": "#fffbe8",
    "tab.inactiveBackground": "#d3cbb7",
    "tab.border": "#ddd6c1",
    "tab.inactiveForeground": "#586e75",
    "panel.border": "#ddd6c1",
    "sideBar.background": "#eee8d5",
    "sideBarTitle.foreground": "#586e75",
    "titleBar.activeBackground": "#eee8d5",
    "notification.background": "#999178",
    "activityBar.background": "#ddd6c1",
    "activityBar.foreground": "#584c27",
    "activityBar.dropBackground": "#eee8d5",
    "activityBarBadge.background": "#b58900",
    "button.background": "#b58900",
    "button.foreground": "#ffffff",
    "button.hoverBackground": "#cc9a00",
    "notification.buttonBackground": "#b58900",
    "notification.buttonForeground": "#ffffff",
    "notification.buttonHoverBackground": "#cc9a00",
    "statusBar.foreground": "#586e75",
    "statusBar.background": "#eee8d5",
    "statusBar.debuggingForeground": "#fffbe8",
    "statusBar.debuggingBackground": "#499504",
    "statusBar.noFolderBackground": "#eee8d5",
    "statusBarItem.hoverBackground": "#eae0c0",
    "statusBarItem.activeBackground": "#ded0a0",
    "statusBarItem.prominentBackground": "#ddd6c1",
    /* terminal */
    "terminal.background": "#fffbe8",
    "terminal.foreground": "#616161",
    "terminal.ansiBrightBlue": "#839496",
    "terminal.ansiBrightCyan": "#2aa198",
    "terminal.ansiBrightGreen": "#586e75",
    "terminal.ansiBrightMagenta": "#6c71c4",
    "terminal.ansiBrightRed": "#dc322f",
    "terminal.ansiBrightWhite": "#808080",
    "terminal.ansiBrightYellow": "#657b83",
    "terminal.ansiBlack": "#353b43",
    "terminal.ansiBlue": "#75bfef",
    "terminal.ansiCyan": "#93a1a1",
    "terminal.ansiGreen": "#859900",
    "terminal.ansiMagenta": "#d33682",
    "terminal.ansiRed": "#e6848a",
    "terminal.ansiWhite": "#606060",
    "terminal.ansiYellow": "#a8cb8f",
    "terminal.selectionBackground": "#eee8d4",
    /* window */
  },
  tokenColors: [
    {
      settings: {
        foreground: "#3e4b53",
        background: "#fffbe8",
      },
    },
    {
      name: "console.error",
      scope: "console.error",
      settings: {
        foreground: "#ca0000ff",
      },
    },
    {
      name: "console.input",
      scope: "console.input",
      settings: {
        foreground: "#00ae50ff",
      },
    },
    {
      name: "console.prompt",
      scope: "console.prompt",
      settings: {
        foreground: "#b651bcff",
        fontStyle: "bold",
      },
    },
    {
      name: "console.warning",
      scope: "console.warning",
      settings: {
        foreground: "#cd6600ff",
      },
    },
    {
      name: "console.debug",
      scope: "console.debug",
      settings: {
        foreground: "#5d6666ff",
      },
    },
    {
      name: "hyperlink",
      scope: "hyperlink",
      settings: {
        foreground: "#0d1171ff",
      },
    },
    {
      name: "Unstaged files",
      scope: "markup.deleted",
      settings: {
        foreground: "#ffffffff",
        background: "#ff3d3dff",
      },
    },
    {
      name: "Staged files",
      scope: "markup.inserted",
      settings: {
        foreground: "#000000ff",
        background: "#73ff65ff",
      },
    },
    {
      name: "markup.changed",
      scope: "markup.changed",
      settings: {
        foreground: "#f8f8f8ff",
        background: "#4a410dff",
      },
    },
    {
      name: "markup.underline",
      scope: "markup.underline",
      settings: {
        fontStyle: "underline",
      },
    },
    {
      name: "markup.bold",
      scope: "markup.bold",
      settings: {
        fontStyle: "bold",
      },
    },
    {
      name: "markup.italic",
      scope: "markup.italic",
      settings: {
        fontStyle: "italic",
      },
    },
    {
      name: "property",
      scope: "property",
      settings: {
        foreground: "#934b3cff",
      },
    },
    {
      name: "Comment",
      scope: "comment",
      settings: {
        foreground: "#95a3abff",
      },
    },
    {
      name: "Constant",
      scope: "constant",
      settings: {
        foreground: "#9b1cebff",
      },
    },
    {
      name: "Constant.other.placeholder.py",
      scope: "constant.other.placeholder.py",
      settings: {
        foreground: "#7b0000ff",
      },
    },
    {
      name: "Entity",
      scope: "entity",
      settings: {
        foreground: "#cc3611ff",
      },
    },
    {
      name: "Entity.name.type",
      scope: "entity.name.type",
      settings: {
        foreground: "#6c65b0ff",
      },
    },
    {
      name: "Entity.other.inherited-class",
      scope: "entity.other.inherited-class",
      settings: {
        foreground: "#000000ff",
      },
    },
    {
      name: "Entity.name.function",
      scope: "entity.name.function",
      settings: {
        foreground: "#db7800ff",
      },
    },
    {
      name: "Entity.name.function.argument",
      scope: "entity.name.function.argument",
      settings: {
        foreground: "#a28d00ff",
      },
    },
    {
      name: "Entity.name.tag",
      scope: "entity.name.tag",
      settings: {
        foreground: "#2369b6ff",
      },
    },
    {
      name: "Entity.other.attribute-name",
      scope: "entity.other.attribute-name",
      settings: {
        foreground: "#cb2d01ff",
      },
    },
    {
      name: "Keywords",
      scope: "keyword",
      settings: {
        fontStyle: "bold",
        foreground: "#577909",
      },
    },
    {
      name: "Keyword Control",
      scope: "keyword.control",
      settings: {
        foreground: "#577909",
      },
    },
    {
      name: "Storage",
      scope: "storage",
      settings: {
        fontStyle: "bold",
        foreground: "#577909",
      },
    },
    {
      name: "Storage JS TS",
      scope: "token.storage.js,token.storage.ts",
      settings: {
        fontStyle: "bold",
        foreground: "#577909",
      },
    },
    {
      name: "Source Js Keyword Operator Delete,source Js Keyword Operator In,source Js Keyword Operator Of,source Js Keyword Operator Instanceof,source Js Keyword Operator New,source Js Keyword Operator Typeof,source Js Keyword Operator Void",
      scope:
        "keyword.operator.expression.delete.js,keyword.operator.expression.in.js,keyword.operator.expression.of.js,keyword.operator.expression.instanceof.js,keyword.operator.new.js,keyword.operator.expression.typeof.js,keyword.operator.expression.void.js",
      settings: {
        fontStyle: "bold",
        foreground: "#577909",
      },
    },
    {
      name: "Selector",
      scope: "meta.selector",
      settings: {
        fontStyle: "bold",
        foreground: "#577909",
      },
    },
    {
      name: "String",
      scope: "string | punctuation.definition.string",
      settings: {
        foreground: "#2aa198",
      },
    },
    {
      name: "Strings, Inherited Class",
      scope: "string, entity.other.inherited-class",
      settings: {
        foreground: "#2aa198",
      },
    },
    {
      name: "Number",
      scope: "Number",
      settings: {
        foreground: "#9b3affff",
      },
    },
    {
      name: "Build-in constant",
      scope: "",
      settings: {
        foreground: "#9b3affff",
      },
    },
    {
      name: "Support",
      scope: "support",
      settings: {
        foreground: "#3c7a03ff",
      },
    },
    {
      name: "Variables",
      scope: "variable",
      settings: {
        foreground: "#499504",
      },
    },
    {
      name: "Variable.parameter",
      scope: "variable.parameter",
      settings: {
        foreground: "#a57800ff",
      },
    },
    {
      name: "Operators",
      scope: "keyword.operator",
      settings: {
        fontStyle: "normal",
        foreground: "#577909",
      },
    },
    {
      name: "operator logical",
      scope: "keyword.operator.logical.js,keyword.operator.logical.ts",
      settings: {
        foreground: "#ca004b",
      },
    },
    {
      name: "keyword.operator",
      scope:
        "keyword.operator.arithmetic.js,keyword.operator.comparison.js,keyword.operator.arithmetic.ts,keyword.operator.comparison.ts",
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "Invalid - Deprecated",
      scope: "invalid.deprecated",
      settings: {
        foreground: "#333333ff",
        fontStyle: "underline,bold",
      },
    },
    {
      name: "Invalid - Illegal",
      scope: "invalid.illegal",
      settings: {
        foreground: "#333333ff",
        background: "#990000ff",
      },
    },
    {
      name: "String embedded-source",
      scope: "string source",
      settings: {
        foreground: "#080808ff",
        background: "#f3f3f3ff",
      },
    },
    {
      name: "String constant",
      scope: "String constant",
      settings: {
        foreground: "#696969ff",
      },
    },
    {
      name: "String variable",
      scope: "string variable",
      settings: {
        foreground: "#234a97ff",
      },
    },
    {
      name: "String.regexp",
      scope: "string.regexp",
      settings: {
        foreground: "#cf5628ff",
      },
    },
    {
      name: "String.regexp.«special»",
      scope: [
        "string.regexp.character-class",
        "string.regexp constant.character.escaped",
        "string.regexp source.ruby.embedded",
        "string.regexp string.regexp.arbitrary-repitition",
      ],
      settings: {
        foreground: "#cf5628ff",
      },
    },
    {
      name: "String.regexp constant.character.escape",
      scope: "string.regexp constant.character.escape",
      settings: {
        foreground: "#811f24ff",
      },
    },
    {
      name: "Embedded Source",
      scope: "text source",
      settings: {
        foreground: "#080808ff",
        background: "#fffae8ff",
      },
    },
    {
      name: "Function name",
      scope: "function name",
      settings: {
        foreground: "#ae7a00ff",
      },
    },
    {
      name: "Function argument",
      scope: "function argument",
      settings: {
        foreground: "#99a600ff",
      },
    },
    {
      name: "Support.function",
      scope: "support.function",
      settings: {
        foreground: "#ca004bff",
      },
    },
    {
      name: "Support.constant",
      scope: "support.constant",
      settings: {
        foreground: "#c44f00ff",
      },
    },
    {
      name: "Support.variable",
      scope: "support.variable",
      settings: {
        foreground: "#295502ff",
      },
    },
    {
      name: "Classes",
      scope: "entity.name.type.namespace",
      settings: {
        foreground: "#e5c07b",
      },
    },
    {
      name: "Classes",
      scope: "support.class, entity.name.type.class",
      settings: {
        foreground: "#e5c07b",
      },
    },
    {
      name: "Class name",
      scope: "entity.name.class.identifier.namespace.type",
      settings: {
        foreground: "#e5c07b",
      },
    },
    {
      name: "Class name",
      scope: "entity.name.class",
      settings: {
        foreground: "#61afef",
      },
    },
    {
      name: "Type Name",
      scope: "entity.name.type",
      settings: {
        foreground: "#e5c07b",
      },
    },
    {
      name: "css color standard name",
      scope:
        "support.constant.color.w3c-standard-color-name.css,support.constant.color.w3c-standard-color-name.scss",
      settings: {
        foreground: "#d19a66",
      },
    },
    {
      name: "css attribute-name.id",
      scope:
        "support.constant.color.w3c-standard-color-name.css,entity.other.attribute-name.class.css",
      settings: {
        foreground: "#d19a66",
      },
    },
    {
      name: "css property-name",
      scope: "support.type.vendored.property-name.css",
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "js template-expression",
      scope:
        "punctuation.definition.template-expression.begin.js,punctuation.definition.template-expression.end.js,punctuation.definition.template-expression.begin.ts,punctuation.definition.template-expression.end.ts",
      settings: {
        foreground: "#499504",
      },
    },
    {
      name: "js module",
      scope:
        "support.module.node.js,support.type.object.module.js,support.module.node.js,support.module.node.ts,support.type.object.module.ts,support.module.node.ts",
      settings: {
        foreground: "#e5c07b",
      },
    },
    {
      name: "js variable readwrite",
      scope:
        "variable.other.readwrite.js,meta.object-literal.key.js,support.variable.property.js,support.variable.object.process.js,variable.other.readwrite.ts,meta.object-literal.key.ts,support.variable.property.ts,support.variable.object.process.ts",
      settings: {
        foreground: "#499504",
      },
    },
    {
      name: "js json",
      scope: "support.constant.json.js,support.constant.json.ts",
      settings: {
        foreground: "#d19a66",
      },
    },
    {
      name: "js Keyword",
      scope:
        "keyword.operator.expression.instanceof.js,keyword.operator.expression.instanceof.ts",
      settings: {
        fontStyle: "normal",
        foreground: "#577909",
      },
    },
    {
      name: "js Keyword",
      scope:
        "keyword.operator.expression.typeof.js,keyword.operator.expression.typeof.ts",
      settings: {
        fontStyle: "normal",
        foreground: "#577909",
      },
    },
    {
      name: "js console",
      scope: "support.type.object.console.js,support.type.object.console.ts",
      settings: {
        foreground: "#499504",
      },
    },
    {
      name: "js console function",
      scope:
        "entity.name.function.js,support.function.console.js,entity.name.function.ts,support.function.console.ts",
      settings: {
        foreground: "#61afef",
      },
    },
    {
      name: "js operator",
      scope: "keyword.operator.js,keyword.operator.ts",
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "js dom",
      scope: "support.type.object.dom.js,support.type.object.dom.ts",
      settings: {
        foreground: "#56b6c2",
      },
    },
    {
      name: "js dom variable",
      scope:
        "support.variable.dom.js,support.variable.property.dom.js,support.variable.dom.ts,support.variable.property.dom.ts,",
      settings: {
        foreground: "#499504",
      },
    },
    {
      name: "js ts this",
      scope:
        "var.this.js,var.this.ts,variable.language.this.js,variable.language.this.ts",
      settings: {
        foreground: "#e5c07b",
      },
    },
    {
      name: "Markup.list",
      scope: "markup.list",
      settings: {
        foreground: "#7d451cff",
      },
    },
    {
      name: "Markup.heading",
      scope: "markup.heading | markup.heading entity.name",
      settings: {
        foreground: "#142b5aff",
      },
    },
    {
      name: "Markup.quote",
      scope: "markup.quote",
      settings: {
        foreground: "#0b6125ff",
        background: "#bbbbbb30",
      },
    },
    {
      name: "Markup.italic",
      scope: "Markup.italic",
      settings: {
        foreground: "#080808ff",
      },
    },
    {
      name: "Markup.bold",
      scope: "markup.bold",
      settings: {
        foreground: "#080808ff",
        fontStyle: "bold",
      },
    },
    {
      name: "Markup.underline",
      scope: "markup.underline",
      settings: {
        foreground: "#080808ff",
        fontStyle: "underline",
      },
    },
    {
      name: "Markup.link",
      scope: "markup.link",
      settings: {
        foreground: "#234a97ff",
        fontStyle: "underline",
      },
    },
    {
      name: "Markup.raw",
      scope: "markup.raw",
      settings: {
        foreground: "#234a97ff",
        background: "#bbbbbb30",
      },
    },
    {
      name: "Markup.deleted",
      scope: "markup.deleted",
      settings: {
        foreground: "#47565fff",
        background: "#fffcf4ff",
      },
    },
    {
      name: "Markup.inserted",
      scope: "markup.inserted",
      settings: {
        foreground: "#cc0000ff",
        background: "#fffae8ff",
      },
    },
    {
      name: "Markup.changed",
      scope: "markup.changed",
      settings: {
        foreground: "#ffffffff",
        background: "#f5c411ff",
      },
    },
  ],
};

function darken_foregrounds(theme) {
  for (const key in theme) {
    if (typeof theme[key] === "object" && theme[key] !== null) {
      if (Array.isArray(theme[key])) {
        //array
        theme[key] = theme[key].map((item) => darken_foregrounds(item));
      } else {
        // object
        theme[key] = darken_foregrounds(theme[key]);
      }
    } else {
      if (key.toLowerCase().includes("foreground") && theme[key][0] === "#") {
        let colors = colortext_to_rgb(theme[key].slice(1, 7));

        colors.r = Math.floor(colors.r * 0.85);
        colors.g = Math.floor(colors.g * 0.85);
        colors.b = Math.floor(colors.b * 0.85);

        theme[key] = `#${rgb_to_colortext(colors)}`;
      }
      if (key.toLowerCase().includes("border") && theme[key][0] === "#") {
        let colors = colortext_to_rgb(theme[key].slice(1, 7));

        colors.r = Math.floor(colors.r * 0.5);
        colors.g = Math.floor(colors.g * 0.5);
        colors.b = Math.floor(colors.b * 0.5);

        theme[key] = `#${rgb_to_colortext(colors)}`;
      }
    }
  }
  return theme;
}

function colortext_to_rgb(color_text) {
  let color = parseInt(color_text, 16);

  let r = (color >> 16) & 0xff;
  let g = (color >> 8) & 0xff;
  let b = color & 0xff;

  return { r, g, b };
}

function rgb_to_colortext({ r, g, b }) {
  return `${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`;
}

const fs = require("fs");

fs.writeFile(
  "themes/tiny-light.json",
  JSON.stringify(theme, null, 2),
  () => {}
);

var darkened = darken_foregrounds(theme);
var serialized = JSON.stringify(darkened, null, 2);

fs.writeFile("themes/weasel-light.json", serialized, () => {});

console.log("file written");
