{
    let script = document.createElement("script");
    let baseURI = new URL(document.currentScript.src, document.baseURI);
    script.src = new URL("general-common.js", baseURI);
    document.head.append(script);
    window.addEventListener("load", () => window.startMain());
}