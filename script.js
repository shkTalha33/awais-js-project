document.getElementById("login").onclick = function () {
    var useremail = "admin@user.com";
    var passcode = 123456;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
    var uname = document.getElementById("userr").value
    sessionStorage.setItem('username',uname)
  
    if (useremail == email) {
      if (passcode == password) {
        window.location.href= "home.html"
      } else {
        Toastify({
          text: "Please Enter Correct Password",
          duration: 3000,
          // destination: "https://github.com/apvarun/toastify-js",
          // newWindow: true,
          close: true,
          gravity: "bottom", // `top` or `bottom`
          position: "left", // `left`, `center` or `right`
          stopOnFocus: true, // Prevents dismissing of toast on hover
          style: {
            background: "rgb(12,2,6)",
  background: "linear-gradient(90deg, rgba(12,2,6,1) 0%, rgba(222,13,28,1) 64%)",
          },
        }).showToast();
      }
    } else {
      Toastify({
        text: "Please Enter Correct Email",
        duration: 3000,
        // destination: "https://github.com/apvarun/toastify-js",
        // newWindow: true,
        close: true,
        gravity: "bottom", // `top` or `bottom`
        position: "left", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "rgb(12,2,6)",
  background: "linear-gradient(90deg, rgba(12,2,6,1) 0%, rgba(222,13,28,1) 64%)",
        },
      }).showToast();
    }
  };
  document.getElementById("forgot").onclick= function(){
    Toastify({
      text: "Email : admin@user.com Password : 123456",
      duration: 3000,
      // destination: "https://github.com/apvarun/toastify-js",
      // newWindow: true,
      close: true,
      gravity: "top", // `top` or `bottom`
      position: "center", // `left`, `center` or `right`
      stopOnFocus: true, // Prevents dismissing of toast on hover
      style: {
        background: "rgb(12,2,6)",
        background: "linear-gradient(90deg, rgba(12,2,6,1) 0%, rgba(151,222,13,1) 0%)",
      },
    }).showToast();
  }
  