const form = document.getElementById('login')
const username = document.getElementById('username')
const password = document.getElementById('password')
const errorElement = document.getElementById('error1')

form.addEventListener('submit', (e) => {
    e.preventDefault();

    let messages = []
    if (username.value === '' || username.value == null) {
        messages.push('Invalid Username')
    }

    if (password.value.length <= 6) {
        messages.push('Invalid Password')
    }

    if (messages.length >0) {
        e.preventDefault()
        errorElement.innerText = messages.join(', ')
    }
})

