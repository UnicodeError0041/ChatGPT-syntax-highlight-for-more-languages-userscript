# ChatGPT-syntax-highlight-for-more-languages-userscript

[![Add to tampermonkey](https://img.shields.io/badge/add%20to-tampermonkey-green)](https://github.com/UnicodeError0041/ChatGPT-syntax-highlight-for-more-languages-userscript/raw/main/ChatGPT-syntax-highlight-for-more-languages.user.js)

With this script, more languages will be syntax highlighted in the ChatGPT web app. This script uses [highlight.js](https://github.com/highlightjs/highlight.js) to highlight text in the chat.

## Supported languages

This script supports [all languages from highlight.js](https://github.com/highlightjs/highlight.js/blob/main/SUPPORTED_LANGUAGES.md), except the languages in 3rd party repos.

Some of the languages in this list are 3rd party languages and this script only supports a few of them (these are listed in the [Acknowledgements](#acknowledgements) section). But in theory, all non-3rd party languages from the list should appear correctly (which are the most commonly used ones).

> 📃 **Note:** The code will only be highlighted after chatGPT finished it's response.

> 📃 **Note:** This script does not load in every syntax rule instantly. Most of them will only load when needed.

## Setup

1. Install the [TamperMonkey](https://tampermonkey.net) extension for your browser.
2. Download the script by clicking [here](https://github.com/UnicodeError0041/ChatGPT-syntax-highlight-for-more-languages-userscript/raw/main/ChatGPT-syntax-highlight-for-more-languages.user.js).

## 3rd party languages

> 📃 **Note:** By third party languages I refer to the languages not bundled with the core [highlight.js](https://github.com/highlightjs/highlight.js) library.

Support of third-party languages can be disabled, by setting the `ALLOW_THIRD_PARTY_LANGUAGE_HIGHLIGHTS` constant at the top of the script to `false`.

This way only languages of the core [highlight.js](https://github.com/highlightjs/highlight.js) library will be highlighted.

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
