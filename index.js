const button = document.querySelector('button');
const output = document.querySelector('.output');

button.addEventListener('click', function() {
    output.innerHTML = 'Я вас очень люблю &#128150';
});
