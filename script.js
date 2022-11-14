const form = document.getElementById('login')
const email = document.getElementById('email')
const username = document.getElementById('username')
const password = document.getElementById('password')
const confirmpassword = document.getElementById('confirmpassword')
const errorElement = document.getElementById('error1')

var validEmailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
var vaildPasswordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;


var isValid1 = false
var isValid2 = false
var isValid3 = false 
var isValid4 = false


form.addEventListener('submit', (e) => {
    e.preventDefault();

    let messages = []

    //email errors


    if (email.value.match(validEmailRegex)) {
        isValid1 = true
    } else (messages.push('Invalid email'))

    //username errors

    if (username.value === '' || username.value == null, username.value.length <= 2) {
        messages.push('Username must contain more 3 or more characters')
        } else if (username.value.length >= 16) {
            messages.push('Username must contain less than 16 characters')
        } else (isValid2=true)

    //password errors

    if (password.value.match(vaildPasswordRegex) || password.value.length >= 7) {
        isValid3 = true
    } else messages.push('Invalid password. password must be atleasr 8 characters and contain atleast 1 Uppercase, lowercase and special character.')

    if (password.value != confirmpassword.value) {
        messages.push('passwords do not match')
    } else (isValid4 = true)
                
    if (isValid1 && isValid2 && isValid3 && isValid4 == true){
        location.replace("./success.html")
    }
    
    // ------------------------------------------------------------ //
    if (messages.length >0) {
        e.preventDefault()
        errorElement.innerText = messages.join(` | `)
    }
})

