console.log('Oh, Hello... [343 guilty spark]');

function draw() {
    let canvas = document.getElementById('canvas');

    // Check to see if canvas is supported,
    if (canvas.getContext) {
        let ctx = canvas.getContext('2d');



    } else {
        console.log('Canvas is not a support html tag');
    }
}


window.onload = function(e) {
    draw();
}
