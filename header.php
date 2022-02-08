<?php
require_once "define.php";
?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> <?= $projectName ?> </title>

    <!-- Favicon -->
    <!-- <link rel="shortcut icon" href="assets/images/favicon.png" /> -->

    <!-- Google fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com/">
    <script src='https://cdn.firebase.com/js/client/2.2.1/firebase.js'></script>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&amp;display=swap" rel="stylesheet">

    <!-- Bootstrap icons -->
    <link rel="stylesheet" href="dist/icons/bootstrap-icons-1.4.0/bootstrap-icons.min.css" type="text/css">
    <!-- Bootstrap Docs -->
    <link rel="stylesheet" href="dist/css/bootstrap-docs.css" type="text/css">

    <!-- Slick -->
    <link rel="stylesheet" href="libs/slick/slick.css" type="text/css">

    <!-- Main style file -->
    <link rel="stylesheet" href="dist/css/app.min.css" type="text/css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.css">

    <link rel="stylesheet" href="https://cdn.datatables.net/1.10.9/css/jquery.dataTables.min.css">

    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <style>
        .item-action-buttons {
            display: none !important;
        }

        .custom-profile-avatar {
            background-color: #ff6e40;
            color: white;
            border-radius: 100%;
            padding: 20px;
        }

        .paginate_button {
            border-radius: 0 !important;
        }
    </style>

</head>

<body>

    <!-- preloader -->
    <div class="preloader">
        <div class="preloader-icon"></div>
    </div>
    <!-- ./ preloader -->

    <!-- sidebars -->

    <!-- ./ sidebars -->

    <!-- menu -->
    <div class="menu">
        <div class="menu-header">
            <a href="main" class="menu-header-logo"></a>
            <a href="main" class="btn btn-sm menu-close-btn">
                <i class="bi bi-x"></i>
            </a>
        </div>
        <div class="menu-body">
            <div class="dropdown">
                <a href="#" class="d-flex align-items-center" data-bs-toggle="dropdown">
                    <div class="avatar me-3">
                        <div class="custom-profile-avatar rounded-circle-text"></div>
                    </div>
                    <div>
                        <div class="fw-bold admin-profile-name"></div>
                        <small class="text-muted admin-profile-role"></small>
                    </div>
                </a>
                <div class="dropdown-menu dropdown-menu-end">
                    <a href="settings" class="dropdown-item d-flex align-items-center" data-sidebar-target="#settings">
                        <i class="bi bi-gear dropdown-item-icon"></i> Settings
                    </a>
                    <a href="javascript:void(0);" class="dropdown-item d-flex align-items-center text-danger logout-trigger">
                        <i class="bi bi-box-arrow-right dropdown-item-icon"></i> Logout
                    </a>
                </div>
            </div>
            <ul>
                <li class="menu-divider">-</li>
                <li>
                    <a class="<?= checkSetActive("main") ?>" href="main">
                        <span class="nav-link-icon">
                            <i class="bi bi-bar-chart"></i>
                        </span>
                        <span>Dashboard</span>
                    </a>
                </li>
                <li>
                    <a class="<?= checkSetActive("orders") ?>" href="#">
                        <span class="nav-link-icon">
                            <i class="bi bi-receipt"></i>
                        </span>
                        <span>Orders</span>
                    </a>
                    <ul>
                        <li>
                            <a href="orders?status=pending">Pending</a>
                        </li>
                        <li>
                            <a href="orders?status=completed">Completed</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a class="<?= checkSetActive("product") ?>" href="#">
                        <span class="nav-link-icon">
                            <i class="bi bi-truck"></i>
                        </span>
                        <span>Products</span>
                    </a>
                    <ul>
                        <li>
                            <a href="product?action=new">Create</a>
                        </li>
                        <li>
                            <a href="product?action=view">View</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a class="<?= checkSetActive("variant") ?>" href="#">
                        <span class="nav-link-icon">
                            <i class="bi bi-truck"></i>
                        </span>
                        <span>Variants</span>
                    </a>
                    <ul>
                        <li>
                            <a href="variant?action=new">Create</a>
                        </li>
                        <li>
                            <a href="variant?action=view">View</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a class="<?= checkSetActive("collections") ?>" href="#">
                        <span class="nav-link-icon">
                            <i class="bi bi-wallet2"></i>
                        </span>
                        <span>Collections</span>
                    </a>
                    <ul>
                        <li>
                            <a href="collections?action=new">New</a>
                        </li>
                        <li>
                            <a href="collections?action=view">View</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a class="<?= checkSetActive("categories") ?>" href="#">
                        <span class="nav-link-icon">
                            <i class="bi bi-wallet2"></i>
                        </span>
                        <span>Categories</span>
                    </a>
                    <ul>
                        <li>
                            <a href="categories?action=new">New</a>
                        </li>
                        <li>
                            <a href="categories?action=view">View</a>
                        </li>
                    </ul>
                </li>
                <li>
                    <a class="<?= checkSetActive("customers") ?>" href="customers">
                        <span class="nav-link-icon">
                            <i class="bi bi-person-badge"></i>
                        </span>
                        <span>Customers</span>
                    </a>
                </li>
                <li class="menu-divider">Pages</li>
                <li>
                    <a class="<?= checkSetActive("settings") ?>" href="settings">
                        <span class="nav-link-icon">
                            <i class="bi bi-gear"></i>
                        </span>
                        <span>Settings</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    <!-- ./  menu -->

    <!-- layout-wrapper -->
    <div class="layout-wrapper">

        <!-- header -->
        <div class="header">
            <div class="menu-toggle-btn">
                <!-- Menu close button for mobile devices -->
                <a href="#">
                    <i class="bi bi-list"></i>
                </a>
            </div>
            <!-- Logo -->
            <a href="main" class="logo"></a>
            <!-- ./ Logo -->
            <div class="page-title">Overview</div>
            <form class="search-form">
                <div class="input-group">
                    <button class="btn btn-outline-light" type="button" id="button-addon1">
                        <i class="bi bi-search"></i>
                    </button>
                    <input type="text" class="form-control" placeholder="Search..." aria-label="Example text with button addon" aria-describedby="button-addon1">
                    <a href="#" class="btn btn-outline-light close-header-search-bar">
                        <i class="bi bi-x"></i>
                    </a>
                </div>
            </form>
            <div class="header-bar ms-auto">
                <ul class="navbar-nav justify-content-end">
                    <li class="nav-item ms-3">
                        <button class="btn btn-primary btn-icon prompt-add-product">
                            <i class="bi bi-plus-circle"></i> Add Product
                        </button>
                    </li>
                </ul>
            </div>
            <!-- Header mobile buttons -->
            <div class="header-mobile-buttons">
                <a href="#" class="search-bar-btn">
                    <i class="bi bi-search"></i>
                </a>
                <a href="#" class="actions-btn">
                    <i class="bi bi-three-dots"></i>
                </a>
            </div>
            <!-- ./ Header mobile buttons -->
        </div>
        <!-- ./ header -->