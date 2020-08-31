const ports = document.getElementsByClassName('port');
const numField = document.getElementById('numField');
const rotateButton = document.getElementById('rotateButton');
const clearButton = document.getElementById('clearButton');
const valve = document.getElementById('valve');

let value = parseInt(numField.innerText)
let flipped = 'false';

const subtractValue = element => {
    value = value - parseInt(element.attributes['id'].value);
    numField.innerText = value.toString();
};

const addValue = element => {
    value = value + parseInt(element.attributes['id'].value);
    numField.innerText = value.toString();
};

const toggleColor = element => {
    element.attributes['stroke'].value === '#d3d3d3'
        ? ((element.attributes['stroke'].value = 'black'), addValue(element))
        : ((element.attributes['stroke'].value = '#d3d3d3'),
          subtractValue(element));
};

const flipValve = () => {
    console.log(flipped);
    flipped
        ? (valve.setAttribute('transform', 'rotate(90) translate(25 -125)'),
          (flipped = !flipped))
        : (valve.setAttribute('transform', 'rotate(0) translate(0 0)'),
          (flipped = !flipped));
};

const clearValve 

for (port of ports) {
    port.addEventListener('click', e => {
        toggleColor(e.target);
    });
}

rotateButton.addEventListener('click', e => flipValve(e.target));
clearButton.addEventListener('click', e => clearValve(e.target));
