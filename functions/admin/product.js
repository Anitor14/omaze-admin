$(document).ready(function (e) {
  $("#saveProductChanges").click(function (e) {
    e.preventDefault();

    const title = $("#title").val();
    const productPrice = $("#price").val();
    const collections = $("#collection").val();
    const category = $("#category").val();
    const color = $("#color").val();
    const size = $("#size").val();
    const quantity = $("#quantity").val();
    const description = $("#description").val();

    // var imagePath = $('#imagePath').prop('files')[0];

    const rawFormData = {
      title: title,
      price: productPrice,
      collections: collections,
      category: category,
      hasVariant: false,
      quantity: quantity,
      color: color,
      size: size,
      description: description,
    };

    const formData = objectToFormData(rawFormData);

    var totalfiles = document.getElementById("images").files.length;
    for (var index = 0; index < totalfiles; index++) {
      formData.append("images", document.getElementById("images").files[index]);
    }
    // formData.append("imagePath", imagePath);

    const _item_id = $("#_item_id").val();

    var currentHtml = $(this).html();

    $(this).html("Please wait...");

    var productLink =
      _item_id == ""
        ? `${BASE_URL + ENDPOINTS.product}`
        : `${BASE_URL + ENDPOINTS.product}/${_item_id}`;
    var productMethod = _item_id == "" ? "POST" : "PUT";

    var titleMessage = _item_id == "" ? "New Product" : "Update Product";

    custom_axios_with_login_headers_form_data(
      productMethod,
      productLink,
      formData
    )
      .then((response) => {
        var statusCode, data;

        if (_item_id == "") {
          statusCode = response.data.status;
          data = response.data.data;
        } else {
          statusCode = response.status;
          data = response.data;
        }

        if (SUCCESS_CODES.includes(statusCode)) {
          simpleAlert(titleMessage, data.message);
          window.setTimeout((e) => {
            quickNavigate("product?action=view");
          }, 2000);
        }

        $(this).html(currentHtml);
      })
      .catch((error) => {
        // console.error(error);
        if (error.response.data)
          simpleAlert("Error!", error.response.data.message);
        else simpleAlert("Error!", "Please try again an error occurred");
        $(this).html(currentHtml);
      });
  });
});
