$(function () {
  $("form").validate({
    rules: {
      studiosName: "required",
      emailAddress: {
        required: true,
        email: true,
      },
      gameUrl: "required",
      message: "required",
    },
    messages: {
      studiosName: "Please enter the studios name",
      emailAddress: "Please enter a valid email address",
      gameUrl: "Please enter your games URL",
      message: "Please enter your message",
    },
    submitHandler: function (form) {
      form.submit()
    },
  })
})
