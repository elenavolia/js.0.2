//рэндомно меняющийся фон

const colors = ['teal', 'tomato', 'orange', 'green', 'deeppink', 'skyblue', 'navy'];
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);
const color = colors[index];
console.log(color);
document.body.style.backgroundColor = color;