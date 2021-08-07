//рэндомно меняющийся фон

const colors = ['teal', 'tomato', 'orange', 'green', 'deeppink', 'skyblue', 'navy', 'blue', 'yellow', 'gold', 'pink', 'maroon', 'salmon', 'rosybrown', 'brown', 'ivory', 'silver', 'red', 'purple', 'violet', 'beige', 'aqua', 'aquamarine', 'chartreuse', 'chocolate', 'coral', 'cornsilk', 'cyan', 'fuchsia', 'indigo', 'lavender', 'lime', 'magenta', 'plum', 'seagreen', 'tan', 'turquoise', 'wheat'];
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);
const color = colors[index];
console.log(color);
document.body.style.backgroundColor = color;