function showPreview() {
    let htmlCode = document.getElementById("html-code").value;
    let cssCode = "<style>" + document.getElementById("css-code").value + "</style>";
    let jsCode = "<script>" + document.getElementById("js-code").value + "</script>";
    let frame = document.getElementById("preview-window").contentWindow.document;
    frame.open();
    frame.write(htmlCode + cssCode + jsCode);
    frame.close();
}