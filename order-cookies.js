import axios from 'axios'

function orderCookies(event) {
    event.preventDefault()

 const formData = {
        qty: document.querySelector('#qty-field').value,
        cookieType: document.querySelector('#cookie-type-field').value
    }

    axios.post('/order-cookies', formData)
    .then((response) => {
        document.querySelector('#order-status').innerText = response.data.msg
        document.querySelector('#order-total').innerHTML = '$' + response.data.total
    })
}



document.querySelector("#order-form").addEventListener('submit', orderCookies)