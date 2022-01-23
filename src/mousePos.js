const buttonMouse = document.createElement('button');
buttonMouse.innerText = 'mouse';
document.body.append(buttonMouse);

let display = false;

function displayMousePos() {
    window.addEventListener('mousemove', (e) => {
        if (display) {
            console.log(e.clientX, e.clientY);
        }
    });
}

export default displayMousePos;