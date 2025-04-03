document.getElementById("run-code").addEventListener("click", function() {
  // Get the HTML, CSS, and JS code from textareas
  const htmlCode = document.getElementById("html-code").value;
  const cssCode = document.getElementById("css-code").value;
  const jsCode = document.getElementById("js-code").value;

  // Combine the HTML, CSS, and JS into a single code string for the iframe
  const combinedCode = `
    <html>
      <head>
        <style>
          ${cssCode}
        </style>
      </head>
      <body>
        ${htmlCode}
        <script>
          ${jsCode}
        </script>
      </body>
    </html>
  `;

  // Get the preview iframe
  const iframe = document.getElementById("preview");

  // Write the combined code into the iframe document
  const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(combinedCode);
  iframeDocument.close();
});
