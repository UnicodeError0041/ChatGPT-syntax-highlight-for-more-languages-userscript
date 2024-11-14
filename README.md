# ChatGPT-syntax-highlight-for-more-languages-userscript

[![Add to tampermonkey](https://img.shields.io/badge/add%20to-tampermonkey-green)](https://github.com/UnicodeError0041/ChatGPT-syntax-highlight-for-more-languages-userscript/raw/main/ChatGPT-syntax-highlight-for-more-languages.user.js)

With this script, more languages will be syntax highlighted in the ChatGPT web app.

## Supported languages

This script uses the [highlight.js](https://github.com/highlightjs/highlight.js) library to highlight code syntax. It supports:

1. Core highlight.js languages: Languages included directly in the main highlight.js package (like Python, JavaScript, and HTML). [Here](https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md) is a list of supported languages.

2. Additional highlight.js community-supported languages: These are separate, third-party modules maintained by the community and loaded dynamically as needed (listed in the [Acknowledgements](#acknowledgements) section).

> 📃 **Note:** The code will only be highlighted after ChatGPT finished it's response.

> 📃 **Note:** This script does not load in every syntax rule instantly. Most of them will only load when needed.

## Setup

1. Install the [TamperMonkey](https://tampermonkey.net) extension for your browser.
2. Download the script by clicking [here](https://github.com/UnicodeError0041/ChatGPT-syntax-highlight-for-more-languages-userscript/raw/main/ChatGPT-syntax-highlight-for-more-languages.user.js).

## Disable Additional Languages

If you prefer not to load the additional community-supported languages, you can disable this feature by setting the `ALLOW_THIRD_PARTY_LANGUAGE_HIGHLIGHTS` constant at the top of the script to `false`.

This will restrict syntax highlighting to only the core languages bundled with highlight.js.

## Adding languages

In the `getImportLink()` function there is a long switch statement.
Just add another case like so:

```javascript
case "name1": // Names ChatGPT uses to refer to the language
case "name2":
    link = "https://CDN/to/the/grammarjs/file";
    break;
```

## Acknowledgements

This project uses the following resources to highlight the syntax of ChatGPT responses:

-   [highlight.js](https://highlightjs.org/) (BSD-3-Clause License)
-   [4D syntax rules](https://github.com/highlightjs/highlightjs-4d) (MIT License)
-   [ABAP syntax rules](https://github.com/highlightjs/highlightjs-sap-abap) (MIT License)
-   [Apex syntax rules](https://github.com/highlightjs/highlightjs-apex/) (MIT License)
-   [COBOL syntax rules](https://github.com/otterkit/highlightjs-cobol) (Apache License 2.0)
-   [CODEOWNERS syntax rules](https://github.com/highlightjs/highlightjs-codeowners) (MIT License)
-   [Chaor syntax rules](https://github.com/chaos-lang/highlightjs-chaos) (MIT License)
-   [cURL syntax rules](https://github.com/highlightjs/highlightjs-curl) (Apache License 2.0)
-   [Cypher (Neo4j) syntax rules](https://github.com/highlightjs/highlightjs-cypher) (Creative Commons Zero v1.0 Universal)
-   [Dafny syntax rules](https://github.com/ConsenSys/highlightjs-dafny) (Apache License 2.0)
-   [Grammatical Framework syntax rules](https://github.com/johnjcamilleri/highlightjs-gf) (MIT License)
-   [Lean syntax rules](https://github.com/leanprover-community/highlightjs-lean) (BSD-3-Clause License)
-   [LookML syntax rules](https://github.com/spectacles-ci/highlightjs-lookml) (BSD-3-Clause License)
-   [Luau syntax rules](https://github.com/highlightjs/highlightjs-luau) (MIT License)
-   [Maculay2 syntax rules](https://github.com/d-torrance/highlightjs-macaulay2) (BSD-3-Clause License)
-   [Object Constraint Language syntax rules](https://github.com/nhomble/highlightjs-ocl) (MIT License)
-   [Q# syntax rules](https://github.com/fedonman/highlightjs-qsharp) (MIT License)
-   [Razor CSHTML syntax rules](https://github.com/highlightjs/highlightjs-cshtml-razor) (Creative Commons Zero v1.0 Universal)
-   [Rebol & Red syntax rules](https://github.com/oldes/highlightjs-redbol) (Creative Commons Zero v1.0 Universal)
-   [ReScript syntax rules](https://github.com/tsnobip/highlightjs-rescript) (MIT License)
-   [Splunk SPL syntax rules](https://github.com/swsoyee/highlightjs-spl) (MIT License)
-   [Svelte syntax rules](https://github.com/AlexxNB/highlightjs-svelte) (MIT License)
-   [VBA syntax rules](https://github.com/dullin/highlightjs-vba) (MIT License)
-   [ZenScript syntax rules](https://github.com/highlightjs/highlightjs-zenscript) (MIT License)
