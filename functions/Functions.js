function loadPayStackBanks() {
  custom_axios("GET", ENDPOINTS.paystack_bank, {}).then(function (response) {
    $.each(response.data.data, function (i, row) {
      $("#bankName").append(
        "<option>" + response.data.data[i].name + "</option>"
      );
    });
  });
}

function loadUserInfo() {
  custom_axios_with_login_headers("GET", BASE_URL + ENDPOINTS.user.self, {})
    .then(function (response) {
      const firstName = response.data.data.data.firstName;
      const lastName = response.data.data.data.lastName;
      const firstLetter = firstName.charAt(0);

      const phoneNumber = response.data.data.data.phoneNumber;
      const email = response.data.data.data.email;

      const userId = response.data.data.data._id;

      const fullName = `${lastName} ${firstName}`;

      $(".rounded-circle-text").html(firstLetter.toUpperCase());

      $("#firstName").val(firstName);
      $("#lastName").val(lastName);
      $("#emailAddress").val(email);

      $(".admin-profile-name").html(fullName);
      $(".admin-profile-role").html("Administrator");

      // $("#phoneNumber").val(phoneNumber ? phoneNumber : 0);
      // $("#email").val(email);
    })
    .catch((error) => console.log(error));
}

function loadCollections(page) {
  custom_axios_with_login_headers("GET", BASE_URL + ENDPOINTS.collections, {}).then(function (response) {
    const data = response.data.collections;
    if (page == "product" || page == "categories") {
      var output = "";
      data.map((collection) => {
        output += `<option value="${collection._id}">${collection.title}</option>`;
      });
      $("#collection").html(output);
    }
  }).catch((error) => console.error(error));
}

function loadCategories(page) {
  custom_axios_with_login_headers("GET", BASE_URL + ENDPOINTS.categories, {}).then(function (response) {
    const data = response.data.categories;
    if (page == "product") {
      var output = "";
      data.map((category) => {
        output += `<option value="${category._id}">${category.title}</option>`;
      });
      $("#category").html(output);
    }
  }).catch((error) => console.error(error));
}

function loadSingleCategory(page) {

  const _id = searchParam("_id");
  $("#_item_id").val(_id);

  custom_axios_with_login_headers("GET", `${BASE_URL + ENDPOINTS.categories}/${_id}`, {}).then(function (response) {

    const data = response.data.categories;

    $("#title").val(data.title);
    $("#description").val(data.description);

    $('select[name^="collection"] option:selected').attr("selected", null);
    $('select[name^="collection"] option[value="' + data.collections._id + '"]').attr("selected", "selected");

    if (_id != "") {
      $(".edit-category-main").html(`Edit '${data.title}' Category`);
    }

  }).catch((error) => console.error(error));

}

function loadSingleCollection(page) {

  const _id = searchParam("_id");
  $("#_item_id").val(_id);

  custom_axios_with_login_headers("GET", `${BASE_URL + ENDPOINTS.collections}/${_id}`, {}).then(function (response) {

    const data = response.data.collections;

    $("#title").val(data.title);
    $("#description").val(data.description);

    if (_id != "") {
      $(".edit-collection-main").html(`Edit '${data.title}' Collection`);
    }

  }).catch((error) => console.error(error));

}

function loadSingleProduct(page) {

  const _id = searchParam("_id");
  $("#_item_id").val(_id);

  custom_axios_with_login_headers("GET", `${BASE_URL + ENDPOINTS.product}/${_id}`, {}).then(function (response) {

    const data = response.data.products;

    $("#title").val(data.title);
    $("#price").val(data.price);
    $("#color").val(data.color);
    $("#size").val(data.size);
    $("#quantity").val(data.quantity);
    $("#description").val(data.description);

    $('select[name^="collection"] option:selected').attr("selected", null);
    $('select[name^="collection"] option[value="' + data.collections._id + '"]').attr("selected", "selected");

    $('select[name^="category"] option:selected').attr("selected", null);
    $('select[name^="category"] option[value="' + data.category._id + '"]').attr("selected", "selected");

    if (_id != "") {
      $(".edit-product-main").html(`Edit '${data.title}' Product`);
    }

  }).catch((error) => console.error(error));

}

function loadSingleProject(page) {

  const _id = searchParam("_id");
  $("#_item_id").val(_id);

  custom_axios_with_login_headers("GET", `${BASE_URL + ENDPOINTS.project}/${_id}`, {}).then(function (response) {

    const data = response.data.projects;

    $("#title").val(data.title);
    $("#description").val(data.description);

    if (_id != "") {
      $(".edit-project-main").html(`Edit '${data.title}' Collection`);
    }

  }).catch((error) => console.error(error));

}

function loadProducts(page, dat) {
  custom_axios_with_login_headers("GET", BASE_URL + ENDPOINTS.product, {}).then(function (response) {
    const data = response.data.products;
    if (page == "product") {
      var output = "";
      var index = 1;
      data.map((product) => {
        product.model = "product";
        output += `<tr>
            <td>${index++}</td>
            <td>${product.title}</td>
            <td>${product.collections ? product.collections.title : "No Collection"}</td>
            <td>${product.category ? product.category.title : "No Category"}</td>
            <td>${product.hasVariant ? "Has Variant" : "No Variant"}</td>
            <td>${numberWithCommas(product.price)}</td>
            <td>${product.quantity ? numberWithCommas(product.quantity) : ""}</td>
            <td>
              <a class="btn btn-warning" href="product?action=edit&_id=${product._id}">Edit</a>
              <button class="btn btn-danger remove-item" onclick="deleteItemAction('${product._id}', '${product.title}', '${product.model}', '${page}')">Delete</button>
              <a class="btn btn-success" href="#"> Variant</a>
            </td>
        </tr>`;
      });
      $("#tableProducts").html(output);
      if(!dat) setupDataTable();
    }
  }).catch((error) => console.error(error));
}

function loadPageCollections(page) {
  custom_axios_with_login_headers("GET", BASE_URL + ENDPOINTS.collections, {}).then(function (response) {
    const data = response.data.collections;
    if (page == "collections") {
      var output = "";
      var index = 1;
      data.map((collection) => {
        output += `<tr>
            <td>${index++}</td>
            <td>${collection.title}</td>
            <td>${collection.description}</td>
            <td>${collection.isDefault ? "Yes" : "No"}</td>
            <td>
              <a class="btn btn-warning" href="collections?action=edit&_id=${collection._id}">Edit</button>
              <a class="btn btn-danger remove-item" href="javascript:void(0);" data-id="${collection._id}" data-model="collection" data-title="${collection.title}">Delete</button>
            </td>
        </tr>`;
      });
      $("#tableCollections").html(output);
      setupDataTable();
    }
  }).catch((error) => console.error(error));
}

function loadPageCategories(page) {
  custom_axios_with_login_headers("GET", BASE_URL + ENDPOINTS.categories, {}).then(function (response) {
    const data = response.data.categories;
    if (page == "categories") {
      var output = "";
      var index = 1;
      data.map((category) => {
        output += `<tr>
            <td>${index++}</td>
            <td>${category.title}</td>
            <td>${category.description}</td>
            <td>${category.isDefault ? "Yes" : "No"}</td>
            <td>
              <a class="btn btn-warning" href="categories?action=edit&_id=${category._id}">Edit</button>
              <a class="btn btn-danger remove-item" href="javascript:void(0);" data-id="${category._id}" data-model="category" data-title="${category.title}">Delete</button>
            </td>
        </tr>`;
      });
      $("#tableCategories").html(output);
      setupDataTable();
    }
  }).catch((error) => console.error(error));
}

function loadPageProjects(page) {
  custom_axios_with_login_headers("GET", BASE_URL + ENDPOINTS.project, {}).then(function (response) {
    const data = response.data.projects;
    if (page == "project") {
      var output = "";
      var index = 1;
      data.map((project) => {
        output += `<tr>
            <td>${index++}</td>
            <td>${project.title}</td>
            <td>${project.description}</td>
            <td>
              <a class="btn btn-warning" href="collections?action=edit&_id=${project._id}">Edit</button>
              <a class="btn btn-danger remove-item" href="javascript:void(0);" data-id="${project._id}" data-model="collection" data-title="${project.title}">Delete</button>
            </td>
        </tr>`;
      });
      $("#tableProjects").html(output);
      setupDataTable();
    }
  }).catch((error) => console.error(error));
}

function logoutAction() {
  removeLocal(KEYS.token);
  removeLocal(KEYS.usermail);
  quickNavigate("authenticate");
}

function deleteItemAction(id, title, model, pg) {

  const rawFormData = {
    model: model,
  };

  const formData = objectToFormData(rawFormData);

  customAlert("Remove Item", `Are you sure you want to delete ${title} from ${model}?`, () => {
    
    custom_axios_with_login_headers("DELETE", `${BASE_URL + ENDPOINTS.deleteItems}/${id}`, { model: model }).then(function (response) {
      console.log(response);
      determineAfterDelete(pg);
    }).catch((error) => console.error(error));

  }, () => {
    console.log("Delete Cancelled");
  });

}

function determineAfterDelete(page) {
  if (page == "product") {
    loadProducts(page, "gibberish");
  }
}

const page = currentPage();
const paramType = searchParam("type");
