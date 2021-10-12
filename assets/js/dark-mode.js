const html = document.querySelector("html")
const checkbox = document.querySelector("input[name=theme]")

const getStyle = (element, style) => 
    window
        .getComputedStyle(element)
        .getPropertyValue(style)

const initialColors = {
  bodyColor: getStyle(html, "--body-color"),
  bodyDColor: getStyle(html, "--bodyd-color"),
  hfColor: getStyle(html, "--hf-color"),
  titleColor: getStyle(html, "--title-color"),
  textColor: getStyle(html, "--text-color"),
  textLColor: getStyle(html, "--textol-color"),
}

const darkMode = {
  bodyColor:"#171717" ,
  bodyDColor: "#27292D" ,
  hfColor:"#070707" ,
  titleColor: "#dddddd",
  textColor: "#bbbbbb"
}

const transformKey = key => 
    "--" + key.replace(/([A-Z])/, "-$1").toLowerCase()


const changeColors = (colors) => {
    Object.keys(colors).map(key => 
        html.style.setProperty(transformKey(key), colors[key]) 
    )
}


checkbox.addEventListener("change", ({target}) => {
    target.checked ? changeColors(darkMode) : changeColors(initialColors)
})
