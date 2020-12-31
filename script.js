const canvas = document.getElementById('canvas');
const ctx = canvas.getContext("2d");

ctx.fillText('Canvas text', 100, 50);

ctx.fillStyle = "#42e9f5";
ctx.fillRect(0, 0, 50, 50);

ctx.beginPath();
ctx.moveTo(canvas.width / 2, canvas.height / 2);
