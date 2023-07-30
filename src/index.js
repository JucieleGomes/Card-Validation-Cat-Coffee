import validator from './validator.js';

const visa = 'Imagens/visa.png';
const master = 'Imagens/master.png';
const amex = 'Imagens/american-express.png';


function preenchimentoCompleto() {
  if (document.getElementById('cardNumberInput').value.length < 16) {
    alert('Por favor, insira todos os 16 dígitos do cartão');
  } else {
    const cardNumber = document.getElementById('cardNumberInput').value;
    const ehValido = validator.isValid(cardNumber);
    if (ehValido) {
      showFlag()
      alert('Cartão válido!');
    } else {
      alert('Cartão inválido!');
    }
  }

}

const button = document.querySelector('.submitButton');
button.addEventListener('click', preenchimentoCompleto);

const cardNumberInput = document.getElementById('cardNumberInput');

button.addEventListener('click', function() {
  const cartaoMascarado = validator.maskify(cardNumberInput.value);
  cardNumberInput.value = cartaoMascarado;
});


function showFlag() {
  const cartaoInserido= document.getElementById('cardNumberInput').value;
  const firstDigits = cartaoInserido.substring(0, 4);
  const img = document.createElement("img");
 

  if (/^4/.test(firstDigits)) {
    img.src = visa;
  } else if (/^(55|51)/.test(firstDigits)) {
    img.src = master;
  } else if (/^34/.test(firstDigits)) {
    img.src = amex;
  }

  const src = document.getElementById("imageCard");
  src.appendChild(img);
}








