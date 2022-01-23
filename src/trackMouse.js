function trackMousePos(buttonMouse) {
    buttonMouse.addEventListener('click', () => {
        if (display) {
            display = false;
        } else {
            display = true;
        }
    })
}

export default trackMousePos;