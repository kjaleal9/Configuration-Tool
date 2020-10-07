const ports = document.getElementsByClassName('port');
const numField1 = document.getElementById('num-field-one');
const valveSelect = document.getElementById('valves');
const rotateButton = document.getElementById('rotate-button');
const vTypeButton = document.getElementById('v-type-button');
const clearButton = document.getElementById('clear-button');
const valve = document.getElementById('Valve1');

const valveTypesArr = ['Valve1', 'Valve2'];

let valveValue = +numField1.innerText;

let rotated = false;
let valveTypesPtr = 0;

initializeValve();

const subtractValveValue = element => {
	valveValue -= +element.attributes['id'].value;
	numField1.innerText = valveValue.toString();
};

const addValveValue = element => {
	valveValue += +element.attributes['id'].value;
	numField1.innerText = valveValue.toString();
};

function rotateValve() {
	rotated = !rotated;
	rotated
		? valve.setAttribute('transform', 'rotate(90) translate(25 -125)')
		: valve.setAttribute('transform', 'rotate(0) translate(0 0)');
}

function changeValveSelect() {
	clearValve();

	switch(valveTypesArr[valveTypesPtr]){

	}

	let selection = valveSelect.value;
	let newValve = document.getElementById(`${selection}`);
	newValve.style['display'] = 'block';
	valveTypesPtr = valveSelect.selectedIndex;
	amount = newValve.getAttribute('key');
}

function clearValve() {
	numField1.innerText = '0';
	valveValue = 0;
	for (port of ports) {
		port.attributes['stroke'].value = '#d3d3d3';
	}
}

function toggleColor(e) {
	const element = e.target;
	element.attributes['stroke'].value === '#d3d3d3'
		? ((element.attributes['stroke'].value = 'black'), addValveValue(element))
		: ((element.attributes['stroke'].value = '#d3d3d3'), subtractValveValue(element));
}

for (port of ports) {
	port.addEventListener('click', toggleColor);
}

function initializeValve() {
	clearValve();

	for (let valve of valveTypesArr) {
		let newEl = document.createElement('option');
		newEl.innerText = valve;
		newEl.setAttribute('value', valve);
		valveSelect.appendChild(newEl);
	}

	valveSelect.addEventListener('change', changeValveSelect)
	rotateButton.addEventListener('click', rotateValve);
	vTypeButton.addEventListener('click', changeValveType);
	clearButton.addEventListener('click', clearValve);
}
