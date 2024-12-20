function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "./imgs/foto-arthur-light.png")
    img.setAttribute("alt" ,"Foto do Arthur com óculos escuro em preto e branco")
  } else {
    img.setAttribute("src", "./imgs/foto-arthur.png")
    img.setAttribute("alt", "Foto do Arthur com óculos escuro")
  }
}
