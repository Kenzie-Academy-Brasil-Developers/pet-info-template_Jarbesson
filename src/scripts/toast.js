export const toast = (message, color) => {
    Toastify({
        text: message,
        duration: 3000,
        newWindow: true,
        // close: true,
        gravity: "top", // `top` or `bottom`
        position: "right", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
            background: color,
            color: 'black',
            border: '1px solid black'
        },
    }).showToast();
}



