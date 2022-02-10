$(document).ready(function (e) {
  $("#saveProjectChanges").click(function (e) {
    e.preventDefault();

    const title = $("#title").val();
    const description = $("#description").val();

    console.log(title, description);
    // var imagePath = $('#imagePath').prop('files')[0];

    const rawFormData = {
      title: title,
      description: description,
    };
    const formData = objectToFormData(rawFormData);
    // formData.append("imagePath", imagePath);

    var totalfiles = document.getElementById("images").files.length;
    for (var index = 0; index < totalfiles; index++) {
      formData.append("images", document.getElementById("images").files[index]);
    }
    // console.log(formData);

    const _item_id = $("#_item_id").val();

    var currentHtml = $(this).html();

    $(this).html("Please wait...");

    var productLink =
      _item_id == ""
        ? `${BASE_URL + ENDPOINTS.project}`
        : `${BASE_URL + ENDPOINTS.project}/${_item_id}`;
    var productMethod = _item_id == "" ? "POST" : "PUT";

    var titleMessage = _item_id == "" ? "New Project" : "Update Project";

    custom_axios_with_login_headers_form_data(
      productMethod,
      productLink,
      formData
    )
      .then((response) => {
        var data = response.data;

        simpleAlert(titleMessage, data.message);
        window.setTimeout((e) => {
          quickNavigate("project?action=view");
        }, 2000);

        $(this).html(currentHtml);
      })
      .catch((error) => {
        if (error.response.data)
          simpleAlert("Error!", error.response.data.message);
        else simpleAlert("Error!", "Please try again an error occurred");
        $(this).html(currentHtml);
      });
  });
});
