<?php
require_once "header.php";
?>

<!-- content -->
<div class="content ">

    <div class="row flex-column-reverse flex-md-row">
        <div class="col-md-8">
            <div class="tab-content" id="myTabContent">
                <div class="tab-pane fade show active" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                    <div class="mb-4">
                        <div class="d-flex flex-column flex-md-row text-center text-md-start mb-3">
                            <!-- <figure class="me-4 flex-shrink-0">
                                <img width="100" class="rounded-pill" src="../../assets/images/user/man_avatar3.jpg" alt="...">
                            </figure> -->
                            <div class="flex-fill">
                                <!-- <h5 class="mb-3">Adek Kembar</h5> -->
                                <!-- <button class="btn btn-primary me-2">Change Avatar</button>
                                <button class="btn btn-outline-danger btn-icon" data-bs-toggle="tooltip" title="Remove Avatar">
                                    <i class="bi bi-trash me-0"></i>
                                </button>
                                <p class="small text-muted mt-3">For best results, use an image at least
                                    256px by 256px in either .jpg or .png format</p> -->
                            </div>
                        </div>
                        <div class="card mb-4">
                            <div class="card-body">
                                <h6 class="card-title mb-4">Basic Information</h6>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div class="mb-3">
                                            <label class="form-label">First Name</label>
                                            <input type="text" id="firstName" class="form-control">
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Last Name</label>
                                            <input type="text" id="lastName" class="form-control">
                                        </div>
                                        <div class="mb-3">
                                            <label class="form-label">Email Address</label>
                                            <input type="text" id="emailAddress" class="form-control" readonly>
                                        </div>
                                        <div class="mb-3">
                                            <button style="float: right !important; margin-right: 15px !important;" type="button" class="btn btn-primary updateUserProfile">Save Changes</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="tab-pane fade" id="password" role="tabpanel" aria-labelledby="password-tab">
                    <div class="card">
                        <div class="card-body">
                            <h6 class="card-title mb-4">Change Password</h6>
                            <div class="mb-3">
                                <label class="form-label">Old Password</label>
                                <input type="password" id="passwordCurrent" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">New Password</label>
                                <input type="password" id="password" class="form-control">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">New Password Repeat</label>
                                <input type="password" id="passwordConfirm" class="form-control">
                            </div>
                            <div class="mb-3">
                                <button style="float: right !important; margin-right: 15px !important;" type="button" class="btn btn-primary updateUserPassword">Save Changes</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-4">
            <div class="card sticky-top mb-4 mb-md-0">
                <div class="card-body">
                    <ul class="nav nav-pills flex-column gap-2" id="myTab" role="tablist">
                        <li class="nav-item" role="presentation">
                            <a class="nav-link active" id="profile-tab" data-bs-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="true">
                                <i class="bi bi-person me-2"></i> Profile
                            </a>
                        </li>
                        <li class="nav-item" role="presentation">
                            <a class="nav-link" id="password-tab" data-bs-toggle="tab" href="#password" role="tab" aria-controls="password" aria-selected="false">
                                <i class="bi bi-lock me-2"></i> Password
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

</div>
<!-- ./ content -->

<?php
require_once "footer.php";
?>