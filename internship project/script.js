document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('button.choose-plan');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Plan chosen: ' + button.parentElement.querySelector('h2').innerText);
        });
    });
});
