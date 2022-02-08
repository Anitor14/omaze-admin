$(document).ready(function (e) {

    $("#saveCategoriesChanges").click(function (e) {

        e.preventDefault();

        const title = $("#title").val();
        const description = $("#description").val();
        const collections = $("#collection").val();

        // var imagePath = $('#imagePath').prop('files')[0];

        const rawFormData = {
            title: title,
            description: description,
            collections: collections
        };

        const formData = objectToFormData(rawFormData);
        // formData.append("imagePath", imagePath);

        var totalfiles = document.getElementById('images').files.length;
        for (var index = 0; index < totalfiles; index++) {
            formData.append("images", document.getElementById('images').files[index]);
        }

        const _item_id = $("#_item_id").val();

        var currentHtml = $(this).html();

        $(this).html("Please wait...");

        var productLink = ((_item_id == "") ? `${BASE_URL + ENDPOINTS.categories}` : `${BASE_URL + ENDPOINTS.categories}/${_item_id}`);
        var productMethod = ((_item_id == "") ? "POST" : "PUT");

        var titleMessage = ((_item_id == "") ? "New Category" : "Update Category");

        custom_axios_with_login_headers_form_data(productMethod, productLink, formData).then((response) => {

            var data = response.data;

            simpleAlert(titleMessage, data.message);
            window.setTimeout((e) => {
                quickNavigate("categories?action=view");
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