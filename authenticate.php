<?php
    require_once "define.php";
?>

<!doctype html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> Authenticate | <?= $projectName ?> </title>

    <!-- Favicon -->
    <!-- <link rel="shortcut icon" href="assets/images/favicon.png" /> -->

    <!-- Themify icons -->
    <link rel="stylesheet" href="dist/icons/themify-icons/themify-icons.css" type="text/css">

    <!-- Main style file -->
    <link rel="stylesheet" href="dist/css/app.min.css" type="text/css">

    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jquery-confirm/3.3.2/jquery-confirm.min.css">

    <style>
        .item-action-buttons {
            display: none !important;
        }
    </style>

</head>

<body class="auth">

    <!-- begin::preloader-->
    <div class="preloader">
        <div class="preloader-icon"></div>
    </div>
    <!-- end::preloader -->


    <div class="form-wrapper">
        <div class="container">
            <div class="card">
                <div class="row g-0">
                    <div class="col">
                        <div class="row">
                            <div class="col-md-10 offset-md-1">
                                <div class="d-block d-lg-none text-center text-lg-start">
                                    <span><?= $projectName ?></span>
                                    <!-- <img width="120" src="https://vetra.laborasyon.com/assets/images/logo.svg" alt="logo"> -->
                                </div>
                                <div class="my-5 text-center text-lg-start">
                                    <h1 class="display-8">Sign In</h1>
                                    <p class="text-muted">Sign in to <?= $projectName ?> Admin to continue</p>
                                </div>
                                <form class="form mb-5">
                                    <div class="mb-3">
                                        <input type="email" class="form-control" placeholder="Enter email" id="email" autofocus required>
                                    </div>
                                    <div class="mb-3">
                                        <input type="password" class="form-control" placeholder="Enter password" id="password" required>
                                    </div>
                                    <!-- <div class="form-alert text-danger font-weight-bold text-capitalize ">
                                        There was an error
                                    </div> -->
                                    <div class="text-center text-lg-start">
                                        <!-- <p class="small">Can't access your account? <a href="#">Reset your password now</a>.</p> -->
                                        <button class="signIn btn btn-primary">Sign In</button>
                                    </div>
                                </form>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <!-- Bundle scripts -->
    <script src="libs/bundle.js"></script>
    

    <!-- Main Javascript file -->
    <?php
        require_once "footer.php";
    ?>
</body>

</html>