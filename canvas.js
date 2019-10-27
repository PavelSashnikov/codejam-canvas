var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');

var oneB = 512 / 4;

ctx.fillStyle = 'rgb(19, 211, 221';
ctx.fillRect(0, 0, 512, 512);
ctx.fillStyle = 'rgb(217, 228, 10)';
ctx.fillRect(oneB, 0, oneB*2, oneB);
ctx.fillRect(0, oneB, oneB, oneB*2);
ctx.fillRect(oneB, oneB*3, oneB*2, oneB);
ctx.fillRect(oneB*3, oneB, oneB, oneB*2);
ctx.fillStyle = 'rgb(247, 199, 65)';
ctx.fillRect(oneB, oneB, oneB*2, oneB*2);
