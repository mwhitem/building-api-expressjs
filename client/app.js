let btn = document.getElementById('btn');
let user = document.getElementById('input-user');
let message = document.getElementById('input-message');
let divContainer = document.getElementById('chirp');

btn.addEventListener("click", () => { 
    let div = document.createElement('div');

    div.innerText = (`@${user.value}: ${message.value} x`);
div.addEventListener('dblclick', () => {
    div.remove();
})
    divContainer.appendChild(div)
    document.body.appendChild(divContainer);
})
    
