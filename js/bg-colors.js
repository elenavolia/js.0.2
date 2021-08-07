//рэндомно меняющийся фон

const colors = ['teal', 'tomato', 'orange', 'green', 'deeppink', 'skyblue', 'navy', 'blue', 'yellow', 'peach', 'gold', 'pink', 'maroon', 'salmon', 'rosybrown', 'brown', 'ivory', 'silver', 'red', 'purple', 'violet', 'scarlet', 'amber', 'beige', 'lilac', 'azure', 'apricot', 'aqua', 'aquamarine', 'berry', 'burgundy', 'cambridgeblue', 'cerise', 'charcoal', 'chartreuse', 'chlorine', 'chocolate', 'cocoa', 'coral', 'cornflower', 'cornsilk', 'cream', 'cyan', 'emerald', 'fallow', 'forest', 'fuchsia', 'garnet', 'indigo', 'jade', 'lavender', 'lemon', 'lime', 'magenta', 'mauve', 'mazarine', 'mint', 'murrey', 'orangey', 'pastel', 'petunia', 'pistachio', 'plum', 'pumpkin', 'raspberry', 'rose', 'sand', 'seagreen', 'seafoam', 'slate', 'tan', 'turquoise', 'wheat'] ;
const max = colors.length - 1;
const min = 0;

const index = Math.round(Math.random() * (max - min) + min);
const color = colors[index];
console.log(color);
document.body.style.backgroundColor = color;