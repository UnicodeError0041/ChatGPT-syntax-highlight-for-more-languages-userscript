// ==UserScript==
// @name         ChatGPT syntax highlight for more languages
// @namespace    http://tampermonkey.net/
// @version      2024-06-29
// @description  With this script, more languages will be syntax higlighted in the ChatGPT chat
// @downloadURL  https://github.com/UnicodeError0041/ChatGPT-syntax-highlight-for-more-languages-userscript/raw/main/ChatGPT-syntax-highlight-for-more-languages.user.js
// @updateURL    https://github.com/UnicodeError0041/ChatGPT-syntax-highlight-for-more-languages-userscript/raw/main/ChatGPT-syntax-highlight-for-more-languages.user.js
// @author       UnicodeError0041
// @match        https://chatgpt.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=chatgpt.com
// @grant        GM_addElement
// @grant        unsafeWindow
// @require      https://unpkg.com/@highlightjs/cdn-assets@11.9.0/highlight.js
// ==/UserScript==

/*
 * This userscript incorporates highlight.js, which is released under the BSD 3-Clause License.
 * See https://github.com/highlightjs/highlight.js for details.
 *
 * sources for specific syntax rules can be seen in the getImportLink function
 */

const ALLOW_THIRD_PARTY_LANGUAGE_HIGHLIGHTS = true;

(function () {
    "use strict";

    let languageScripts = {};

    unsafeWindow.hljs = hljs;

    function getImportLink(langName) {
        if (!ALLOW_THIRD_PARTY_LANGUAGE_HIGHLIGHTS) {
            return `https://unpkg.com/@highlightjs/cdn-assets@11.9.0/languages/${langName}.min.js`;
        }
        let link;
        switch (langName) {
            case "4d": // source: https://github.com/highlightjs/highlightjs-4d (MIT License)
                link = "https://unpkg.com/highlightjs-4d@1.0.4/dist/4d.min.js";
                break;
            case "abap": // source: https://github.com/highlightjs/highlightjs-sap-abap
            case "sap-abap":
                link =
                    "https://cdn.jsdelivr.net/gh/highlightjs/highlightjs-sap-abap/src/abap.min.js";
                break;
            case "apex": // source: https://github.com/highlightjs/highlightjs-apex
                link = "https://unpkg.com/highlightjs-apex/dist/apex.min.js";
                break;
            case "cobol": // source: https://github.com/otterkit/highlightjs-cobol
            case "standard-cobol":
                link = "https://unpkg.com/highlightjs-cobol/dist/cobol.min.js";
                break;
            case "codeowners": // source: https://github.com/highlightjs/highlightjs-codeowners
                link =
                    "https://unpkg.com/highlightjs-codeowners/dist/ccodeowners.min.js";
                break;
            case "chaos": // source: https://github.com/chaos-lang/highlightjs-chaos
            case "kaos":
                link =
                    "https://unpkg.com/highlightjs-chaos@0.0.1/dist/chaos.min.js";
                break;
            case "curl": // source: https://github.com/highlightjs/highlightjs-curl
                link =
                    "https://unpkg.com/highlightjs-curl@1.3.0/dist/curl.min.js";
                break;
            case "cypher": // source: https://github.com/highlightjs/highlightjs-cypher
                link =
                    "https://unpkg.com/highlightjs-cypher/dist/cypher.min.js";
                break;
            case "dafny": // source: https://github.com/ConsenSys/highlightjs-dafny
                link =
                    "https://cdn.jsdelivr.net/gh/ConsenSys/highlightjs-dafny/dist/dafny.min.js";
                break;
            case "gf": // source: https://github.com/johnjcamilleri/highlightjs-gf
                link = "https://unpkg.com/highlightjs-gf/dist/gf.min.js";
                break;
            case "lean": // source: https://github.com/leanprover-community/highlightjs-lean
                link = "https://unpkg.com/highlightjs-lean/dist/lean.min.js";
                break;
            case "lookml": // source: https://github.com/spectacles-ci/highlightjs-lookml
                link =
                    "https://unpkg.com/highlightjs-lookml/dist/lookml.min.js";
                break;
            case "luau": // source: https://github.com/highlightjs/highlightjs-luau
                link = "https://unpkg.com/highlightjs-luau/dist/luau.min.js";
                break;
            case "macaulay2": // source: https://github.com/d-torrance/highlightjs-macaulay2
                link =
                    "https://unpkg.com/highlightjs-macaulay2/dist/macaulay2.min.js";
                break;
            case "ocl": // source: https://github.com/nhomble/highlightjs-ocl
                link =
                    "https://unpkg.com/highlightjs-ocl@1.0.3/dist/ocl.min.js";
                break;
            case "qsharp": // source: https://github.com/fedonman/highlightjs-qsharp
                link =
                    "https://unpkg.com/highlightjs-qsharp/dist/qsharp.min.js";
                break;
            case "cshtml": // source: https://github.com/highlightjs/highlightjs-cshtml-razor
            case "razor":
            case "razor-cshtml":
                link =
                    "https://unpkg.com/highlightjs-cshtml-razor/dist/cshtml-razor.min.js";
                break;
            case "redbol": // source: https://github.com/oldes/highlightjs-redbol
            case "rebol":
            case "red":
            case "red-system":
                link =
                    "https://unpkg.com/highlightjs-redbol@2.1.2/dist/redbol.min.js";
                break;
            case "rescript": // source: https://github.com/tsnobip/highlightjs-rescript
            case "res":
                link =
                    "https://unpkg.com/highlightjs-rescript@0.1.2/dist/rescript.min.js";
                break;
            case "spl": // source: https://github.com/swsoyee/highlightjs-spl
                link = "https://unpkg.com/highlightjs-spl/dist/spl.min.js";
                break;
            case "svelte": // source: https://github.com/AlexxNB/highlightjs-svelte
                link =
                    "https://unpkg.com/highlightjs-svelte/dist/svelte.min.js";
                break;
            case "vba": // source: https://github.com/dullin/highlightjs-vba
                link = "https://unpkg.com/highlightjs-vba/dist/vba.min.js";
                break;
            case "zenscript": // source: https://github.com/highlightjs/highlightjs-zenscript
            case "zs":
                link =
                    "https://unpkg.com/highlightjs-zenscript@2.0.0/dist/zenscript.min.js";
                break;
            default:
                link = `https://unpkg.com/@highlightjs/cdn-assets@11.9.0/languages/${langName}.min.js`;
                break;
        }
        return link;
    }

    function isTyping() {
        return (
            document.querySelector("[data-testid|='fruitjuice']").dataset
                .testid === "fruitjuice-stop-button"
        );
    }

    function getCodeLanguage(el) {
        const classes = Array.from(el.classList);
        return classes[classes.length - 1].split("-")[1];
    }

    function containsUnescapedHTML(el) {
        for (let node of el.childNodes) {
            // console.log(node);
            if (node.nodeType === Node.ELEMENT_NODE) return true;
        }
        return false;
    }

    function importLanguage(langName) {
        if (languageScripts[langName] !== undefined) {
            return languageScripts[langName];
        }

        let link = getImportLink(langName);

        const returned = GM_addElement("script", {
            src: link,
            type: "text/javascript",
        });

        languageScripts[langName] = returned;

        return returned;
    }

    function highlightElement(el) {
        if (el.dataset.willHighlight || isTyping()) {
            return;
        }

        el.dataset.willHighlight = true;
        const langName = getCodeLanguage(el);

        if (containsUnescapedHTML(el)) {
            return;
        }

        if (hljs.listLanguages().includes(langName)) {
            hljs.highlightElement(el);
        } else {
            importLanguage(langName).addEventListener("load", e =>
                hljs.highlightElement(el)
            );
        }
    }

    function highlightCode() {
        document.querySelectorAll("code.hljs").forEach(highlightElement);
    }

    highlightCode();

    new MutationObserver(highlightCode).observe(document.body, {
        childList: true,
        subtree: true,
    });

    new MutationObserver(() => {
        if (!isTyping()) {
            highlightCode();
        }
    }).observe(document.querySelector("[data-testid|='fruitjuice']"), {
        attributes: true,
    });
})();
