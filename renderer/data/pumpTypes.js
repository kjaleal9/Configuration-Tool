const pumpTypesArray = [
  { name: 'None', value: 0, path: 'M 0 0' },
  {
    name: 'Pump1',
    value: 8,
    path: 'M 25 100 L 24 44 L 49.5 100 L 50.5 100 L 75 45 L 75 100',
  },
  {
    name: 'Pump2',
    value: 16,
    path:
      'M 50 25 A 20 25 0 0 1 50 75 A 20 25 0 0 0 50 125 M 0 75 A 25 20 0 0 1 50 75 A 25 20 0 0 0 100 75',
  },
  {
    name: 'Pump3',
    value: 32,
    path:
      'M 0 75 A 25 25 0 0 1 50 75 A 25 25 0 0 1 0 75 M 50 75 A 25 25 0 0 1 100 75 A 25 25 0 0 1 50 75',
  },
  {
    name: 'Pump4',
    value: 64,
    path: 'M 15 75 A 35 35 0 0 1 85 75 A 35 35 0 0 1 15 75',
  },
  {
    name: 'Pump5',
    value: 128,
    path:
      'M 50 25 A 25 25 0 0 1 50 75 A 25 25 0 0 1 50 25 M 50 75 A 25 25 0 0 1 50 125 A 25 25 0 0 1 50 75',
  },
  {
    name: 'Pump6',
    value: 256,
    path: 'M 10 45 L 100 70 M 10 105 L 100 80',
  },
];

const pumpDirectionArr = ['None', 'Right', 'Left'];

module.exports = { pumpTypesArray, pumpDirectionArr };
