$(document).ready(function (e) {

    console.log(page);

    if(AUTH_PAGE.includes(page)) {
        if(checkLocal(KEYS.token)) {
            quickNavigate("main");
        }
    }
    else {
        if(!checkLocal(KEYS.token)) {
            quickNavigate("authenticate");
        }
    }

    if(checkLocal(KEYS.token)) {
        // call all logged in pages here
        
        const param = searchParam("action");

        loadUserInfo();

        if(page == "product") {
            if(param == "new") {
                loadCollections(page);
                loadCategories(page);
            }
            else if(param == "view") {
                loadProducts(page);
            }
            else if (param == "edit") {
                loadCollections(page);
                loadCategories(page);
                loadSingleProduct(page);
            }
        }

        if(page == "collections") {
            
            if(param == "view") {
                loadPageCollections(page);
            }
            else if (param == "edit") {
                loadSingleCollection(page);
            }
        }

        if(page == "categories") {
            
            if(param == "new") {
                loadCollections(page);
            }
            else if(param == "view") {
                loadPageCategories(page);
            }
            else if (param == "edit") {
                loadCollections(page);
                loadSingleCategory(page);
            }
        }
    }

    if (document.getElementById("bankName") !== null) {
        loadPayStackBanks();
    }

    $(".logout-trigger").click(function (e) {
        customAlert("Logout Prompt", "Are you sure you want to logout", () => {
            logoutAction();
        }, () => {
            console.log("Logout Cancelled");
        });
    });

    $(".prompt-add-product").click(function (e) {
        quickNavigate("product?action=new");
    });

    $(".remove-item").on('click', function (e) {

        alert();
        
        var title = $(this).attr("data-title");
        var model = $(this).attr("data-model");
        var id = $(this).attr("data-id");

        customAlert("Remove Item", `Are you sure you want to delete ${title} from ${model}?`, () => {
            removeFromModel();
        }, () => {
            console.log("Delete Cancelled");
        });

    });

});