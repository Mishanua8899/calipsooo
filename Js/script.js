let button = document.querySelector('.buy_product');
let notification = document.querySelector('.notification');
function OnClick() {
    button.addEventListener('click', function (e) {
        e.preventDefault()
        notification.classList.toggle('move')
    })
}

function removeClass() {
    notification.classList.remove('move')
}

OnClick();
removeClass();