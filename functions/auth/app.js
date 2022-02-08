$(document).ready(function (e) {
  
  $(".signIn").click(function (e) {

    e.preventDefault();

    const email = $("#email").val();
    const password = $("#password").val();
    if (email == "" || password == "") {
      simpleAlert("Error!", "Please fill Up all fields");
      return;
    }

    $(this).html("Loading....");

    custom_axios("POST", BASE_URL + ENDPOINTS.auth.login, { email, password })
      .then(function (response) {
        saveLocal(KEYS.token, response.data.token);
        saveLocal(KEYS.usermail, response.data.data.user.email);
        quickNavigate("main");
      })
      .catch(function (error) {
        $(".signIn").html("Sign In");
        if (error.response.data)
          simpleAlert("Error!", error.response.data.message);
        else simpleAlert("Error!", "Please try again an error occurred");
      });
  });

});
