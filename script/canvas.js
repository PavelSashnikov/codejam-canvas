var canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const frame4x4 = document.getElementById('4x4');
const frame32x32 = document.getElementById('32x32');
const erase = document.getElementById('erase');
const rs = document.getElementById('rs');
const img = document.createElement('img');
                img.src = './img/image.png';


function drawPic(frame, size, getColor) {
    const width = frame[0].length;
    const height = frame.length;

    for (let row = 0; row < width; row++) {
        for (let col = 0; col < height; col++) {
            ctx.fillStyle = getColor(frame[row][col]);
            ctx.fillRect(col * size, row * size, size, size);
        }
    }

}

frame4x4.addEventListener('click', () => {
    drawPic(frame4, 128, function (color) {
        return '#' + color;
    })
})

frame32x32.addEventListener('click', () => {
    drawPic(frame32, 16, function(color) {
        return 'rgba(' + color + ')';
    })
})

erase.addEventListener('click', () => {
    ctx.clearRect(0, 0, 512, 512);
})

rs.addEventListener('click', () => {
    ctx.drawImage(img, 0, 0, 512, 512);
})