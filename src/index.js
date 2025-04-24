let ctmIsActive = false;





document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    document.getElementById('contextMenu').style.visibility = 'visible';
    ctmIsActive = true;
    document.getElementById('contextMenu').style.left = `${e.pageX}px`;
    document.getElementById('contextMenu').style.top = `${e.pageY}px`;
    document.getElementById('contextMenu').style.zIndex = 1000;
});

document.addEventListener('click', (e) => {
    if (ctmIsActive) {
        document.getElementById('contextMenu').style.visibility = 'hidden';
        ctmIsActive = false;
    }
});