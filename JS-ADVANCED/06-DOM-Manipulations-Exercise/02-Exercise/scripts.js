function notify(message) {
    let notificationDiv = document.querySelector('#notification');

    notificationDiv.innerHTML = message;
    notificationDiv.style.display = 'block';

    setInterval(() => {
        notificationDiv.style.display = 'none';
    },2000)

}