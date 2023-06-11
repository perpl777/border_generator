window.addEventListener("load", borderBox);

function borderBox() {
  const preview = document.getElementById("element");
  const resultCSS = document.getElementById("result-css");
  const inputs = document.querySelectorAll(".border-property");
  const btnCopy = document.getElementById("btn-copy");

  inputs.forEach(inp => inp.addEventListener("input", generateBorder));
  btnCopy.addEventListener("click", copyCSS);

  function generateBorder() {
    const borderSize = document.getElementById("size").value;
    const borderColor = document.getElementById("border-color").value;
    var borderStyle = document.getElementsByName('border-style');

    let border = '';

    for (var i = 0; i < borderStyle.length; i++) {
      if (borderStyle[i].checked) {
        border = `${borderSize}px ${borderStyle[i].value} ${hexToRGBA(borderColor)}`;
      }
    }

    preview.style.border = border;
    resultCSS.textContent = `border: ${border};`

    
  }

  function hexToRGBA(color) {
    const red = parseInt(color.substr(1, 2), 16);
    const green = parseInt(color.substr(3, 2), 16);
    const blue = parseInt(color.substr(5, 2), 16);

    return `rgba(${red}, ${green}, ${blue})`
  }

  function copyCSS() {
    resultCSS.select();
    document.execCommand("copy");
    alert("CSS copied to clipboard")
  }

}