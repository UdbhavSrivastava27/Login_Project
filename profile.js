document.addEventListener("DOMContentLoaded", ()=>{


    let seconds = document.querySelectorAll('.container2');
            seconds.forEach(second => {
            second.style.display = '';
            });

        const data = `  <label for="name">Full Name : ${localStorage.getItem('name')}</label>
                        <label for="email">Email :${localStorage.getItem('email')}</label>
                        <label for="token" name="token">Token : ${localStorage.getItem('accessToken')}</label>
                        <label for="password" name="password">Password : ${localStorage.getItem('password')}</label>
                        <input type="submit" value="Logout" id="logbtn">
                    `

        document.getElementById('result').innerHTML = data;

}) ;

function handleLogout() {

    localStorage.clear();
  
    window.location.href = "index.html";   

  }

  document.addEventListener('click', (event) => {
    if (event.target.matches('#logbtn')) {
      handleLogout();
    }
  });

  document.addEventListener("DOMContentLoaded", function() {
    var accessToken = localStorage.getItem("accessToken");
    if (accessToken === null) {
      window.location.href = "index.html";
    }

  });