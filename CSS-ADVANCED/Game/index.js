const stickman = document.querySelector(".stickman");

const MAX_RANGE = {
    top: '20px',
    bottom: '100px',
    left: '50px',
    right: '50px'
}

const keys = {
    a: false,
    d: false,
    w: false,
    s: false,
}

// function moveUpOnKeyPress(e) {
//     let keyboardKey = e.key.toLowerCase();
//     console.log(keyboardKey);

//     switch(keyboardKey) {

//         case 'a': {
//             let previousPosition = stickman.style.right || '50px';
//             let previousPositionNumber = Number(previousPosition.slice(0, -2));
//             stickman.style.right = `${previousPositionNumber + 5}px`;
//         };
//         break;

//         case 'd': {
//             let previousPosition = stickman.style.right || '50px';
//             let previousPositionNumber = Number(previousPosition.slice(0, -2));
//             stickman.style.right = `${previousPositionNumber - 5}px`;
//         };
//         break;

//         case 'w': {
//             let previousPosition = stickman.style.bottom || '100px';
//             let previousPositionNumber = Number(previousPosition.slice(0, -2));
//             stickman.style.bottom = `${previousPositionNumber + 5}px`;
//         };
//         break;

//         case 's': {
//             let previousPosition = stickman.style.bottom || '100px';
//             let previousPositionNumber = Number(previousPosition.slice(0, -2));
//             stickman.style.bottom = `${previousPositionNumber - 5}px`;
//         };
//         break;
//     }
// }

function keyUpEventHandler(e) {
    let keyboardKey = e.key.toLowerCase();
    if (keys[keyboardKey]) keys[keyboardKey] = false;
}

function keyDownEventHandler(e) {
    let keyboardKey = e.key.toLowerCase();

    if (keys[keyboardKey] == false) keys[keyboardKey] = true;

    if (keys.a == true) {
        let previousPosition = stickman.style.right || '50px';
        let previousPositionNumber = Number(previousPosition.slice(0, -2));
        stickman.style.right = `${previousPositionNumber + 10}px`;
    }

    if (keys.d == true) {
        let previousPosition = stickman.style.right || '50px';
        let previousPositionNumber = Number(previousPosition.slice(0, -2));
        stickman.style.right = `${previousPositionNumber - 10}px`;
    }

    if (keys.w == true) {
        let previousPosition = stickman.style.bottom || '100px';
        let previousPositionNumber = Number(previousPosition.slice(0, -2));
        stickman.style.bottom = `${previousPositionNumber + 10}px`;
    }

    if (keys.s == true) {
        let previousPosition = stickman.style.bottom || '100px';
        let previousPositionNumber = Number(previousPosition.slice(0, -2));
        stickman.style.bottom = `${previousPositionNumber - 10}px`;
    }
}

document.addEventListener('keypress', keyDownEventHandler);
document.addEventListener('keyup', keyUpEventHandler);