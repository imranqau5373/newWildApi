function loginOnApi(){
  debugger;
  var data = {
    username : $('#inputUsername').val(),
    password : $('#inputPassword').val()
  }
  if(data.username == ""){
    alert('Please enter user email.');
    return;
  }
  else if (data.password == ""){
    alert('Please enter user password or password is too short.');
    return;
  }

  var loginData = 'username='+data.username+'&password='+data.password;

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://frozen-savannah-60393.herokuapp.com/login",
  "method": "POST",
  "headers": {
    "content-type": "application/x-www-form-urlencoded"

  },
  "processData": false,
  "data": loginData 
}

$.ajax(settings).done(function (response) {
  if(response.access_token)
  {
    localStorage.setItem("access_token", response.access_token);
    window.location.href = "/new-Intro.html";
  }
  else{
      alert(response.error_description);
  }

});
    

}

function logout(){
  debugger;
  localStorage.removeItem("access_token");
  window.location.href = "/api-login.html";
}
