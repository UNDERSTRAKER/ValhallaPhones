const navLinks = [
  { name: "Equipo de Trabajo", text: `It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).`, presionado: false },


  {
    name: "Inicios", text: `Lorem Ipsum is simply dummy text of the printing
  and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since
  the 1500s, when an unknown printer took a galley of type and scrambled it to make a type
  specimen book. It has survived not only five centuries, but also the leap into electronic
  typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
  release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop
  publishing software like Aldus PageMaker including versions of Lorem Ipsum.`, presionado: true
  },


  {
    name: "Métodos de Pago", text: `
    Telefono: 3007033817
    Telefono: 3185356763
    Email: felipepadilla473@gmail.com

  `, presionado: false
  },
]

const secondNav = document.getElementById("second-nav");

function createNavElemtent() {
  navLinks.forEach((navItem) => {
    const newHtmlElem = document.createElement("button");
    newHtmlElem.textContent = navItem.name;
    newHtmlElem.classList.add("btn");
    newHtmlElem.classList.add("btn-outline-dark");
    newHtmlElem.addEventListener("click", () => {
      handleSecondNavClick(navItem)
    });
    secondNav.children[0].appendChild(newHtmlElem);


    // btnCustom(navItem, newHtmlElem); no supe como hacer qque cuando se diera click cambiara el color


  });

}

createNavElemtent();

function handleSecondNavClick(item) {
  const paragraph = secondNav.querySelector("p");
  paragraph.textContent = item.text;
}

/*function btnCustom(navItem, newHtmlElem) {
  if (navItem.presionado === true) {
    navItem.presionado[0] || navItem.presionado[1]
    newHtmlElem.style.backgroundColor = "#CE6B13";
    newHtmlElem.style.border = "none"
    newHtmlElem.style.padding = "10px"
    newHtmlElem.style.paddingLeft = "20px"
    newHtmlElem.style.paddingRight = "20px"
    newHtmlElem.style.borderRadius = "10px"
    newHtmlElem.style.color = "white"
    newHtmlElem.style.fontWeight = "bold"

  }
}*/



