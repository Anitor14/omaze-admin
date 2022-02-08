function currentPage() {
    return window.location.pathname.slice(REMOVAL_COUNT);
}

async function custom_axios(method, url, data) {
    return await axios({ method: method, url: url, data: data });
}

async function custom_axios_with_login_headers(method, url, data) {
    var headers = { 'Authorization': `Bearer ${getLocal(KEYS.token)}` };
    return await axios({
        method: method,
        url: url,
        headers: headers,
        data: data,
    });
}

async function custom_axios_with_login_headers_form_data(method, url, data) {
    var headers = { 'Authorization': `Bearer ${getLocal(KEYS.token)}`, 'Content-Type': 'multipart/form-data' };
    return await axios({
        method: method,
        url: url,
        headers: headers,
        data: data,
    });
}

function saveLocal(key, value) {
    window.localStorage.setItem(key, value);
}

function getLocal(key) {
    return window.localStorage.getItem(key);
}

function checkLocal(key) {
    return (getLocal(key) ? true : false)
}

function removeLocal(key) {
    window.localStorage.removeItem(key);
}

function quickNavigate(route) {
    window.location.assign(route);
}

function quickNavigateSelf(sane) {
    window.location.reload(sane ? true : "");
}

function searchParam(type) {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    return urlParams.get(type);
}

function simpleAlert(title, content) {
    $.alert({
        title: title,
        content: content,
    });
}

function convertDate(date) {
    var newDate = new Date(date);
    return `${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`;
}

function webOrigin() {
    return window.location.origin;
}

function customAlert(title, content, cbConfirm, cbCancel) {
    $.confirm({
        title: title,
        content: content,
        buttons: {
            confirm: function () {
                cbConfirm();
            },
            cancel: function () {
                cbCancel();
            },
        },
    });
}

function processPaystack(key, email, amount, cbSuccess, cbFail) {
    const paystack = new PaystackPop();
    paystack.newTransaction({
        key: key,
        email: email,
        amount: amount + "00",
        // currency: "USD",
        currency: "NGN",
        onSuccess: (transaction) => {
            cbSuccess(transaction);
        },
        onCancel: (error) => {
            cbFail(error);
        },
    });
}

function setupDataTable() {
    $('.data_table').DataTable({
        select: false,
        "columnDefs": [{
            className: "Name",
            "targets": [0],
            "visible": false,
            "searchable": false
        }]
    });
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function removeFromModel() {
}

function objectToFormData(item) {
    var form_data = new FormData();
    for (var key in item) {
        form_data.append(key, item[key]);
    }
    return form_data;
}