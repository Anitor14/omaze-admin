// const BASE_URL = "https://evening-mountain-86930.herokuapp.com/";
const BASE_URL = "http://localhost:4000/api/v1/";

const KEYS = {
    token: "yuduis787878755tokk88",
    usermail: "yuduis787878755tokk88emailuudsdhs8878",
    paystack: {
        test: "pk_test_a91f18d0340283decdb520066905d6630bc708b3",
        live: "pk_test_a91f18d0340283decdb520066905d6630bc708b3",
    },  
    flutterwave: {
        test: "pk_test_a91f18d0340283decdb520066905d6630bc708b3",
        live: "pk_test_a91f18d0340283decdb520066905d6630bc708b3",
    },
};

const AUTH_PAGE = ["authenticate"];

const state = Object.freeze({
    LIVE: "live",
    TEST: "test",
});

const DASHBOARD_PAGES = [
    "dashboard/main",
    "dashboard/deposit",
    "dashboard/deposits",
    "dashboard/investments",
    "dashboard/savings",
    "dashboard/referals",
    "dashboard/user-settings",
    "dashboard/withdraw",
    "dashboard/withdrawal",
];

const INVESTMENT_PAGES = [
    "dashboard/deposit",
    "dashboard/deposits",
    "dashboard/investments",
    "dashboard/withdraw",
    "dashboard/withdrawal",
];

const SAVINGS_PAGES = [
    "dashboard/deposit",
    "dashboard/deposits",
    "dashboard/savings",
    "dashboard/withdraw",
    "dashboard/withdrawal",
];

const VALID_TRANSACTION_TYPES = ["Investment", "Savings"];

const ENDPOINTS = Object.freeze({
    paystack_bank: "https://api.paystack.co/bank",
    auth: {
        login: "users/login",
        register: "users/signup",
    },

    deleteItems: "admin/items/delete",
    
    product: "admin/product",
    categories: "admin/category",
    collections: "admin/collection",
    project:"admin/project",

    variants: {
        addVariants: "users/variants",
        getCategories: "variants",
    },
    user: {
        self: "users/me",
        referrals: "users/myReferrals",
        updateAccount: "users/updateMe",
        updateDocument: "users/updateDoc",
        updatePassword: "users/updatePassword",
    },
    transactions: {
        stats: "transactions/stats",
        recent: "transactions/recent",
        deposit: "transactions/deposit",
        withdrawal: "transactions/withdrawal",
        all: "transactions/all-transactions",
        investments: {
            active: "transactions/active-investments",
            plans: "transactions/investment-plans",
            start: "transactions/start-investment",
        },
        savings: {
            active: "transactions/active-savings",
            plans: "transactions/saving-plans",
            start: "transactions/start-saving",
        },
    },
});

// const REMOVAL_COUNT = 12;
// const REMOVAL_COUNT = 13;
const REMOVAL_COUNT = 1;

const SUCCESS_CODES = [200, 201];