$(document).ready(function (e) {
    
    let documentFile = [];

    $(".updateUserProfile").click(function () {

        const firstName = $("#firstName").val();
        const lastName = $("#lastName").val();

        if (firstName == '' || lastName == '') {
            simpleAlert("Error!", "Please fill Up all fields");
            return;
        }

        $(this).html('Loading .........')

        custom_axios_with_login_headers("PATCH", BASE_URL + ENDPOINTS.user.updateAccount, {
            firstName,
            lastName
        })
            .then(function (response) {
                customAlert("Success", "Updated Succesfully", function () {
                    quickNavigateSelf("HARD_RELOAD");
                }, function () {
                    quickNavigateSelf("HARD_RELOAD");
                })
            })
            .catch(function (error) {
                $(".updateUserProfile").html('Submit');
                if (error.response.data) simpleAlert("Error!", error.response.data.message);
                else simpleAlert("Error!", "Please try again an error occurred");

            });
    });

    $(".updateUserPassword").click(function () {

        const password = $("#password").val();
        const passwordConfirm = $("#passwordConfirm").val();
        const passwordCurrent = $("#passwordCurrent").val();

        if (password == '' || passwordConfirm == '') {
            simpleAlert("Error!", "Please fill Up all fields");
            return;
        }

        $(this).html('Loading .........')

        custom_axios_with_login_headers("PATCH", BASE_URL + ENDPOINTS.user.updatePassword, {
            password,
            passwordConfirm,
            passwordCurrent
        })
            .then(function (response) {
                customAlert("Success", "Updated Succesfully", function () {
                    logoutAction();
                }, function () {
                    logoutAction();
                })
            })
            .catch(function (error) {
                $(".updateUserPassword").html('Submit');
                if (error.response.data) simpleAlert("Error!", error.response.data.message);
                else simpleAlert("Error!", "Please try again an error occurred");

            });
    });

    $("#document").change(function (e) {
        documentFile = e.target.files;
    });

    $(".updateUserDocument").click(function () {

        const documentType = $("#documentType").val();
        const documentNumber = $("#documentNumber").val();

        if (documentType == '' || documentNumber == '') {
            simpleAlert("Error!", "Please fill Up all fields");
            return;
        }

        if (documentFile.length <= 0) {
            simpleAlert("Error!", "Please select document to upload");
            return;
        }

        const documentName = documentFile[0].name;

        console.log(documentFile[0]);

        //create a storage reference
        // var storage = firebase.storage().ref(documentFile[0].name);
        var upload = storage.put(documentFile[0]);

        $(".progressField").show(200);
        $(this).html('Loading .........');

        //update progress bar
        upload.on("state_changed", function progress(snapshot) {
            $("#progressField").html( "Progress: " + Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100) );
        },
            function error(e) {
                console.log(e);
                $(".updateUserDocument").html('Submit');
                simpleAlert("Error!", "error uploading file");
            },
            function complete() {

                $("#progressField").html(`${documentFile[0].name} upoaded <br />`)

                custom_axios_with_login_headers("PATCH", BASE_URL + ENDPOINTS.user.updateDocument, {
                    documentType,
                    documentNumber,
                    documentName
                })
                    .then(function (response) {
                        customAlert("Success", "Updated Succesfully", function () {
                            quickNavigateSelf("HARD_RELOAD");
                        }, function () {
                            quickNavigateSelf("HARD_RELOAD");
                        })
                    })
                    .catch(function (error) {
                        $(".updateUserDocument").html('Submit');
                        if (error.response.data) simpleAlert("Error!", error.response.data.message);
                        else simpleAlert("Error!", "Please try again an error occurred");

                    });
            });

    });

});