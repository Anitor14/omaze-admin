$(document).ready(function (e) {

    transactionRecent();
    transactionStats();
    loadUserInfo();
    loadTransactions();

    if (page === "dashboard/main") {
        loadPageStatistics("all");
    }
    else if (page == "dashboard/referals") {
        $(".homecard").hide();
    }
    else {
        loadPageStatistics("");
    }

    if (page === "dashboard/referals") userReferrals();

    // if (page == "dashboard/deposits") {
    //     loadUserTransactions("deposits");
    // }

    if (DASHBOARD_PAGES.includes(page)) {
        if (getLocal(KEYS.token) == undefined || getLocal(KEYS.token) == null) {
            quickNavigate("../login");
        }
    }

    function savingPlans() {
        custom_axios_with_login_headers("GET", BASE_URL + ENDPOINTS.transactions.savings.plans, {}).then(function (response) {
            if (response.data.data.data.length > 0) {
                let data = response.data.data.data;
                data.map((plan) => {
                    $("#savingPlans").append(`<option>${plan.name}</option>`);
                });
            }
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    function investmentPlans() {
        custom_axios_with_login_headers("GET", BASE_URL + ENDPOINTS.transactions.investments.plans, {}).then(function (response) {
            if (response.data.data.data.length > 0) {
                let data = response.data.data.data;
                data.map((plan) => {
                    $("#investmentPlans").append(`<option>${plan.name}</option>`);
                });
            }
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    function activeInvestments() {
        custom_axios_with_login_headers("GET", BASE_URL + ENDPOINTS.transactions.investments.active, {}).then(function (response) {
            if (response.data.data.length > 0) {
                let data = response.data.data;
                data.map((plans) => {
                    $('#table-invest').append(`<tr>` +
                        `<td>${plans.plan}</td>` +
                        `<td>${plans.amount}</td>` +
                        `<td>${plans.percentage} per day</td>` +
                        `<td>${plans.status}</td>` +
                        `</tr>`)
                });
            }
            else {
                $('#table-invest').html('<tr><td></td><td></td><td></td><td></td><td></td><td></td></tr>');
            }
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    function activeSavings() {
        custom_axios_with_login_headers("GET", BASE_URL + ENDPOINTS.transactions.savings.active, {}).then(function (response) {
            console.log(response.data.data);
            if (response.data.data.length > 0) {
                let data = response.data.data;
                console.log(data);
                data.map((plans) => {
                    $('#table-savings').append(`<tr>` +
                        `<td>${plans.plan}</td>` +
                        `<td>${plans.amount}</td>` +
                        `<td>${plans.percentage} per day</td>` +
                        `<td>${plans.status}</td>` +
                        `</tr>`)
                });
            }
            else {
                $('#table-savings').html('<tr>' +
                    '<td></td>' +
                    '<td></td>' +
                    '<td></td>' +
                    '<td></td>' +
                    '<td></td>' +
                    '<td></td>' +
                    '</tr>')
            }
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    function loadPageStatistics(package) {

        const endpoint = ENDPOINTS.transactions.all;
        custom_axios_with_login_headers("GET", BASE_URL + endpoint, {}).then(function (response) {

            let totalDepositedInvestment = 0;
            let totalDepositedSavings = 0;
            let totalWithdrawalInvestment = 0;
            let totalWithdrawalSavings = 0;

            let totalDeposited = 0;
            let totalWithdrawal = 0;

            if (response.data.results > 0) {
                response.data.data.data.forEach(function (item, index) {
                    if (package == "all") {
                        if (item.type == "deposit") totalDeposited += item.amount;
                        if (item.type == "withdrawal") totalWithdrawal += item.amount;
                    }
                    else if (item.transType == "Investment" || item.packageType == "Investment") {
                        if (item.type == "deposit") totalDepositedInvestment += item.amount;
                        if (item.type == "withdrawal") totalWithdrawalInvestment += item.amount;
                    }
                    else if (item.transType == "Savings" || item.packageType == "Savings") {
                        if (item.type == "deposit") totalDepositedSavings += item.amount;
                        if (item.type == "withdrawal") totalWithdrawalSavings += item.amount;
                    }
                });
            }

            $(".total-deposited").html("$" + Math.round(totalDeposited * 100) / 100);
            $(".total-withdrawn").html("$" + Math.round(totalWithdrawal * 100) / 100);

            $(".investment-deposited").html("$" + Math.round(totalDepositedInvestment * 100) / 100);
            $(".investment-withdrawn").html("$" + Math.round(totalWithdrawalInvestment * 100) / 100);

            $(".savings-deposited").html("$" + Math.round(totalDepositedSavings * 100) / 100);
            $(".savings-withdrawn").html("$" + Math.round(totalWithdrawalSavings * 100) / 100);

        })
            .catch(function (error) {
                console.log(error);
            });

    }

    function loadTransactions() {
        const product = searchParam('type');
        const endpoint = ((page === "dashboard/deposits") ? ENDPOINTS.transactions.deposit : ENDPOINTS.transactions.withdrawal);
        custom_axios_with_login_headers("GET", BASE_URL + endpoint, {}).then(function (response) {
            // console.log(response);
            if (response.data.results > 0) {
                response.data.data.data.forEach(function (item, index) {
                    if (page === "dashboard/deposits") showDeposits(product, item, index);
                    if (page === "dashboard/withdrawal") showWithdrawals(product, item, index);
                });
            }
            else {
                $('#user-trans-table').html('<tr> <td></td><td></td><td></td><td></td><td></td><td></td></tr>');
            }
        })
            .catch(function (error) {
                console.log(error);
            });
    }

    function showDeposits(product, item, index) {
        if (item.depositType == product || item.transType == product) {
            $('#user-trans-table').append('<tr>' +
                '<td>' + (index + 1) + '</td>' +
                '<td>' + convertDate(item.createdAt) + '</td>' +
                '<td>' + item.amount + '</td>' +
                '<td>' + item.type + '</td>' +
                '<td>' + ((item.nariaValue == undefined) ? "($)" + item.amount : item.nariaValue) + '</td>' +
                '<td>' + item.status + '</td>' +
                '</tr>');
        }
    }

    function showWithdrawals(product, item, index) {
        $('#user-trans-table').append('<tr>' +
            '<td>' + (index + 1) + '</td>' +
            '<td>' + convertDate(item.createdAt) + '</td>' +
            '<td>' + item.amount + '</td>' +
            '<td>' + item.type + '</td>' +
            '<td>' + ((item.nariaValue == undefined) ? "($)" + item.amount : item.nariaValue) + '</td>' +
            '<td>' + item.status + '</td>' +
            '</tr>');
    }

    if (page === "dashboard/investments") {
        activeInvestments();
        investmentPlans();
    }

    if (page === "dashboard/savings") {
        activeSavings();
        savingPlans();
    }

    $(".startSaving").click(function (e) {

        e.preventDefault();

        const amount = $("#saveAmount").val();
        const plan = $("#savingPlans").val();

        if (amount == "" || plan == "") {
            simpleAlert("Error!", "Please fill up all fields");
            $(this).html('Save Changes');
            return;
        }

        $(this).html('Loading .........');

        custom_axios_with_login_headers("POST", BASE_URL + ENDPOINTS.transactions.savings.start, { plan, amount }).then(function (response) {
            customAlert((response.status == 201) ? "Success" : "Error!", response.data.message, () => {
                if (response.status == 201) quickNavigateSelf("force");
            }, () => {
                if (response.status == 201) quickNavigateSelf("force");
            });
        }).catch(function (error) {
            console.log(error);
            $(".startSaving").html('Save Changes');
            if (error.response.data) simpleAlert("Error!", error.response.data.message);
            else simpleAlert("Error!", "Please try again an error occurred");
        });

    });

    $(".startInvestment").click(function (e) {

        e.preventDefault();

        const amount = $("#investAmount").val();
        const plan = $("#investmentPlans").val();

        if (amount == "" || plan == "") {
            simpleAlert("Error!", "Please fill up all fields");
            $(this).html('Save Changes');
            return;
        }

        $(this).html('Loading .........');

        custom_axios_with_login_headers("POST", BASE_URL + ENDPOINTS.transactions.investments.start, { plan, amount }).then(function (response) {
            customAlert((response.status == 201) ? "Success" : "Error!", response.data.message, () => {
                if (response.status == 201) quickNavigateSelf("force");
            }, () => {
                if (response.status == 201) quickNavigateSelf("force");
            });
        }).catch(function (error) {
            console.log(error);
            $(".startInvestment").html('Save Changes');
            if (error.response.data) simpleAlert("Error!", error.response.data.message);
            else simpleAlert("Error!", "Please try again an error occurred");
        });

    });

    $(".makeDeposit").click(function (e) {

        e.preventDefault();

        const amount = $('#depAmount').val();
        const transType = $('#depTransType').val();

        if (amount == '' || transType == '') {
            simpleAlert("Error!", "Please fill Up all fields");
            $(this).html('Submit');
            return;
        }

        if (!VALID_TRANSACTION_TYPES.includes(transType)) {
            simpleAlert("Error!", "Invalid Transaction Selected");
            $(this).html('Submit');
            return;
        }

        $(this).html('Loading .........');

        processPaystack(KEYS.paystack.test, getLocal(KEYS.usermail), amount, (transaction) => {
            custom_axios_with_login_headers("POST", BASE_URL + ENDPOINTS.transactions.deposit, { amount, transType }).then(function (response) {
                customAlert((response.status == 201) ? "Success" : "Error!", response.data.message, () => {
                    if (response.status == 201) quickNavigateSelf();
                }, () => {
                    if (response.status == 201) quickNavigateSelf();
                });
            })
                .catch(function (error) {
                    $(".makeDeposit").html('Submit');
                    if (error.response.data) simpleAlert("Error!", error.response.data.message);
                    else simpleAlert("Error!", "Please try again an error occurred");
                });

        }, (error) => {
            console.log(error);
            if (error.response.data) simpleAlert("Error!", error.response.data.message);
            else simpleAlert("Error!", "Please try again an error occurred");
        });

    });

    $(".makeWithdrawal").click(function (e) {

        e.preventDefault();

        const amount = $('#amount').val();
        const transType = searchParam('type');

        if (amount == '' || transType == '') {
            simpleAlert("Error!", "Please fill Up all fields");
            $(this).html('Submit');
            return;
        }

        if (!VALID_TRANSACTION_TYPES.includes(transType)) {
            simpleAlert("Error!", "Invalid Transaction Selected");
            $(this).html('Submit');
            return;
        }

        const method = "Manual";

        $(this).html('Loading .........');

        custom_axios_with_login_headers("POST", BASE_URL + ENDPOINTS.transactions.withdrawal, { amount, transType, method }).then(function (response) {
            customAlert((response.status == 201) ? "Success" : "Error!", response.data.message, () => {
                if (response.status == 201) quickNavigate("/capitalfx/dashboard/withdrawal");
            }, () => {
                if (response.status == 201) quickNavigate("/capitalfx/dashboard/withdrawal")
            });
        })
            .catch(function (error) {
                $(".makeWithdrawal").html('Submit');
                if (error.response.data) simpleAlert("Error!", error.response.data.message);
                else simpleAlert("Error!", "Please try again an error occurred");
            });

    });

});