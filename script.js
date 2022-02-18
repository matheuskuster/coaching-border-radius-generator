const radius = document.querySelector('.radius');
const resume = document.querySelector('.resume');

const values = {
  borderTopLeft: 20,
  borderBottomLeft: 20,
  borderTopRight: 20,
  borderBottomRight: 20,
}

const inputs = {
  borderTopLeft: document.querySelector('#border-top-left'),
  borderBottomLeft: document.querySelector('#border-bottom-left'),
  borderTopRight: document.querySelector('#border-top-right'),
  borderBottomRight: document.querySelector('#border-bottom-right'),
}

function startInputListeners() {
  for (const key in inputs) {
    inputs[key].addEventListener('change', (event) => {
      console.log(event.target.value);
      values[key] = event.target.value
      render()
    })
  }
}

function setInitialValues() {
  for (const key in values) {
    inputs[key].value = values[key];
  } 
}

function copyToClipboard() {
  navigator.clipboard.writeText(String(radius.getAttribute('style')));
  alert('Copiado!');
}

function render() {
  const style = `
    border-top-left-radius: ${values.borderTopLeft}px;
    border-bottom-left-radius: ${values.borderBottomLeft}px;
    border-top-right-radius: ${values.borderTopRight}px;
    border-bottom-right-radius: ${values.borderBottomRight}px;
  `;

  radius.setAttribute('style', style);

  const htmlForResume = style.replace(/;/g, '</p>').replace(/border/g, '<p>border');
  resume.innerHTML = htmlForResume;
}

function init() {
  setInitialValues();
  render();
  startInputListeners();
}

init();
