import validator from './validator.js';


function preenchimentoCompleto() {
  if (document.getElementById('cardNumberInput').value.length < 16) {
    alert('Por favor, insira todos os 16 dígitos do cartão');
  } else {
    const cardNumber = document.getElementById('cardNumberInput').value;
    const ehValido = validator.isValid(cardNumber);
    
    if (ehValido) {
      alert('Cartão válido!');
    } else {
      alert('Cartão inválido!');
    }
  }
}

const button = document.querySelector('.submitButton');
button.addEventListener('click', preenchimentoCompleto);

const cardNumberInput = document.getElementById('cardNumberInput');
cardNumberInput.addEventListener('input', function() {
  const cartaoMascarado = validator.maskify(cardNumberInput.value);
  cardNumberInput.value = cartaoMascarado;
});











