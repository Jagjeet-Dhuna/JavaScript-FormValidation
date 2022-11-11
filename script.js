const form = document.getElementById('login')
const email = document.getElementById('email')
const username = document.getElementById('username')
const password = document.getElementById('password')
const confirmpassword = document.getElementById('confirmpassword')
const errorElement = document.getElementById('error1')

var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


var isValid1 = false
var isValid2 = false
var isValid3 = false 


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let messages = []

    //email errors

    if (email.value.match(validRegex)) {
        set.isValid1 = true
    } else {
        messages.push('Invalid email address')
    }

    //username errors
    if (username.value === '' || username.value == null, username.value.length <= 2) {
        messages.push('Username must contain more 3 or more characters')
        } else if (username.value.length >= 16) {
            messages.push('Username must contain less than 16 characters')
        } else (isValid2=true)

    //password errors

    if (password.value != confirmpassword.value){
        messages.push('passwords do not match')
        } else if (password.value.length <= 2) {
            messages.push('Invalid Password')
        } else (isValid3=true)
        
    if (isValid2 && isValid3 == true){
        location.replace("./home.html")
    }
    //location.replace("./home.html")
    //messages.push('SUCCESS!')
    
    // error message thing
    if (messages.length >0) {
        e.preventDefault()
        errorElement.innerText = messages.join(` | `)
    }
})

