// Add interactivity to the button
document.getElementById('clickMe').addEventListener('click', function () {
    const message = document.getElementById('message');
    message.textContent = 'You clicked the button! Great job!';
    message.style.color = '#0078d7';
});