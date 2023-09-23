const feedback = document.getElementById("confirmPassword-feedback");


document.getElementById('btn').addEventListener('click', (event)=>{
    event.preventDefault();

    let name = document.getElementById('name').value ;
    let email = document.getElementById('email').value ;
    let password = document.getElementById('password').value ;
    const confirmPassword = document.getElementById('confirmPassword').value

    if(!name || !email || !password || !confirmPassword){
        document.getElementById('err').innerHTML = "Error: All fields are mandatory!" ;
        return ;
    } else {
        document.getElementById('err').innerHTML = '';
    }

    if(password != confirmPassword){
        feedback.innerHTML = "Password did not match.";
    } else {
        localStorage.setItem('name',name) ;
        localStorage.setItem('email',email) ;
        localStorage.setItem('password',password) ;
    
        let accessToken = generateAccessToken() ;
        localStorage.setItem('accessToken', accessToken) ;

        window.location.href = "profile.html";   

    }

})

function generateAccessToken() {
    let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token = '';
    for(let i = 0; i<16; i++){
        token += chars.charAt(Math.floor(Math.random() * chars.length)) ;
    }
    return token ;
}

document.addEventListener("DOMContentLoaded", function() {
    var accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      window.location.href = "profile.html";
    }

  });




  /// show password

  const passwordInput = document.getElementById("password");
    const showPasswordCheckbox = document.getElementById("showPassword");

    showPasswordCheckbox.addEventListener("change", function () {
      if (showPasswordCheckbox.checked) {
        passwordInput.type = "text"; // Show the password
      } else {
        passwordInput.type = "password"; // Hide the password
      }
    });