const numField2 = document.getElementById('num-field-two');
const pumpSelect = document.getElementById('pumps');
const directionButton = document.getElementById('direction-button');
const typeButton = document.getElementById('type-button');
const baseButton = document.getElementById('base-button');
const spinButton = document.getElementById('spin-button');
const pumpBase = document.getElementById('base');
const pumpArray = document.querySelector('#pump-types').children;

let pumpValue = +numField2.innerText;
let base = false;
let pumpTypesArray = ['None', 'Pump1', 'Pump2', 'Pump3', 'Pump4', 'Pump5', 'Pump6'];

let arrayIndex = 0;
let prevPumpType;
let nextPumpType;
let amount;

initializePump();
clearPump();

const subtractPumpValue = amount => {
	pumpValue -= +amount;
	numField2.innerText = pumpValue.toString();
};

const addPumpValue = amount => {
	pumpValue += +amount;
	numField2.innerText = pumpValue.toString();
};

function initializePump() {
	for (let pump of pumpTypesArray) {
		let optionEl = document.createElement('option');
		optionEl.innerText = pump;
		optionEl.setAttribute('value', pump);

		pumpSelect.appendChild(optionEl);
	}
}

function showBase() {
	base = !base;
	base
		? ((pumpBase.style.display = 'block'), addPumpValue(1))
		: ((pumpBase.style.display = 'none'), subtractPumpValue(1));
}

function clearPump() {
	pumpBase.style.display = 'none';
	for (let pump of pumpArray) {
		if (pump !== 'None') {
			pump.style.display = 'none';
		}
	}
	pumpValue = 0;
	numField2.innerText = '0';
	arrayIndex = 0;
	base = false;
}

function changePumpType() {
	prevPumpType = pumpSelect.children[arrayIndex];
	prevPumpType.removeAttribute('selected');
	let oldPump = document.getElementById(`${prevPumpType.innerHTML}`);
	if (oldPump !== null) {
		oldPump.style['display'] = 'none';
		amount = oldPump.getAttribute('key');
		subtractPumpValue(amount);
	}

	arrayIndex += 1;

	if (arrayIndex === pumpTypesArray.length) {
		arrayIndex = 0;
		pumpSelect.selectedIndex = arrayIndex;
	} else {
		nextPumpType = pumpSelect.children[arrayIndex];
		nextPumpType.setAttribute('selected', 'selected');
		let newPump = document.getElementById(`${nextPumpType.innerHTML}`);
		newPump.style['display'] = 'block';
		pumpSelect.selectedIndex = arrayIndex;
		amount = newPump.getAttribute('key');
		addPumpValue(amount);
	}
}

function changeSelect(e) {
	clearPump();

	let selection = pumpSelect.value;
	if (selection === 'None') {
		clearPump();
		arrayIndex = 0;
	} else {
		let newPump = document.getElementById(`${selection}`);
		newPump.style['display'] = 'block';
		arrayIndex = pumpSelect.selectedIndex;
		amount = newPump.getAttribute('key');
		addPumpValue(amount);
	}
}
function spinPump() {
	let selectedPump = document.getElementById(`${pumpSelect.value}`);
	selectedPump.classList.toggle('spin');
}

pumpSelect.addEventListener('change', e => changeSelect(e));
directionButton.addEventListener('click', showBase);
typeButton.addEventListener('click', changePumpType);
baseButton.addEventListener('click', showBase);
spinButton.addEventListener('click', spinPump);
