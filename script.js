function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")
  const img = document.querySelector("#profile img")
  let userElement = document.getElementById("users")

  if (html.classList.contains("light")) {
    console.log(userElement)
    img.setAttribute("src", "./assets/avatar-light.png")
    userElement.textContent = "@perrarolf"
  } else {
    img.setAttribute("src", "./assets/avatar.png")
    userElement.textContent = "@graziugione"
  }
}
