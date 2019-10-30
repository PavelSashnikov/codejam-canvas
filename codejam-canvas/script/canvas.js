const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const img = document.createElement('img');
img.src = './img/image.png';
const choice = document.querySelector('.choice ul');


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

choice.onclick = function (event) {
    const target = event.target;
    if (target.dataset.pic === '4x4') {
        drawPic(frame4, 128, function (color) {
            return '#' + color;
        })
    } else if (target.dataset.pic === '32x32') {
        drawPic(frame32, 16, function(color) {
            return 'rgba(' + color + ')';
        })
    } else if (target.dataset.pic === 'rs') {
        ctx.drawImage(img, 0, 0, 512, 512);
    } else if (target.dataset.pic === 'erase') {
        ctx.clearRect(0, 0, 512, 512);
    }
};