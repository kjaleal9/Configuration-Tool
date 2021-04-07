const numField2 = document.getElementById('num-field-two');
const pumpSelect = document.getElementById('pumps');
const directionButton = document.getElementById('direction-button');
const typeButton = document.getElementById('type-button');
const baseButton = document.getElementById('base-button');
const pClearButton = document.getElementById('pump-clear-button');
const pumpBase = document.getElementById('base');
const rArrow = document.getElementById('right-arrow');
const lArrow = document.getElementById('left-arrow');
const pumpArray = document.querySelector('#pump-types').children;
const pumpField = document.querySelector('#pump-types');

const {pumpTypesArray,pumpDirectionArr} = require('./data/pumpTypes.js');

let pumpValue = +numField2.innerText;
let base = false;
let pumpTypesPtr = 0;
let pumpDirectionPtr = 0;
let amount;

initializePump();

const subtractPumpValue = amount => {
  pumpValue -= +amount;
  numField2.innerText = pumpValue.toString();
};

const addPumpValue = amount => {
  pumpValue += +amount;
  numField2.innerText = pumpValue.toString();
};

function clearPump() {
  pumpBase.style.display = 'none';
  rArrow.style.display = 'none';
  lArrow.style.display = 'none';
  for (let pump of pumpArray) {
    if (pump !== 'None') {
      pump.style.display = 'none';
    }
  }
  pumpValue = 0;
  numField2.innerText = '0';
  pumpTypesPtr = 0;
  pumpDirectionPtr = 0;
  pumpSelect.selectedIndex = 0;
  base = false;
}

function changePumpDirection() {
  pumpDirectionPtr++;

  if (pumpDirectionPtr === pumpDirectionArr.length) {
    pumpDirectionPtr = 0;
  }

  switch (pumpDirectionArr[pumpDirectionPtr]) {
    case 'None':
      rArrow.style['display'] = 'none';
      lArrow.style['display'] = 'none';
      subtractPumpValue(lArrow.getAttribute('key'));
      break;
    case 'Right':
      rArrow.style['display'] = 'block';
      lArrow.style['display'] = 'none';
      amount = rArrow.getAttribute('key');
      addPumpValue(amount);
      break;
    case 'Left':
      lArrow.style['display'] = 'block';
      rArrow.style['display'] = 'none';
      amount = lArrow.getAttribute('key');
      subtractPumpValue(4);
      addPumpValue(amount);
      break;
  }
}

function showBase() {
  base = !base;
  base
    ? ((pumpBase.style.display = 'block'), addPumpValue(1))
    : ((pumpBase.style.display = 'none'), subtractPumpValue(1));
}

function changePumpType() {
  const oldPump = pumpTypesArray[pumpTypesPtr];
  subtractPumpValue(oldPump.value);
  pumpField.removeChild(pumpField.lastChild);
  pumpTypesPtr++;

  if (pumpTypesArray[pumpTypesPtr] === undefined) {
    pumpTypesPtr = 0;
  }

  const newPump = pumpTypesArray[pumpTypesPtr];
  const { value, path } = newPump;
  addPumpValue(value);
  var newElement = document.createElementNS(
    'http://www.w3.org/2000/svg',
    'path'
  );
  newElement.setAttribute('d', path);
  newElement.classList.add('pump');
  pumpField.appendChild(newElement);
}

function initializePump() {
  clearPump();

  pumpSelect.style.display = 'none';
  directionButton.addEventListener('click', changePumpDirection);
  typeButton.addEventListener('click', changePumpType);
  baseButton.addEventListener('click', showBase);
  pClearButton.addEventListener('click', clearPump);
}
