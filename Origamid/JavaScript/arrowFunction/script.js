const nomeMaiusculo = function (nome) {
  return nome.toUpperCase();
};

var nome = "Haroldo";
var sobrenome = "Mayworm";
const somaNome = () => {
  return `Meu nome é ${nome} ${sobrenome}!`;
};

// Somente uma linha de return, podemos abreviar ainda mais o codigo
const somaNome2 = () => `Meu nome é ${nome} ${sobrenome}!`;
// console.log(somaNome2);

const contarLetras = (word) => word.length;
// console.log(contarLetras('jogador'));


class Menu {
  constructor(menu) {
    this.menuElement = document.querySelector(menu);
  }
  AtivarEvento() {
    this.menuElement.addEventListener("click", function(event) {
      event.target.classList.add("ativo");
    });
  }
}
const menu = new Menu(".principal");
menu.AtivarEvento();