const form = document.querySelector(".login-form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const userEmail = this.elements.email.value.trim();
  const userPassword = this.elements.password.value.trim();

  if (userEmail === "" || userPassword === "") {
    alert("All form fields must be filled in");
  } else {
    const formFields = {
      email: userEmail,
      password: userPassword,
    };

    console.log(formFields);
    this.reset;
  }
});
