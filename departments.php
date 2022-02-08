<?php
require_once "header.php";

$action = isset($_GET["action"]) ? addslashes($_GET["action"]) : "";

?>

<!-- content -->
<div class="content ">

    <?php if ($action == "new") : ?>

        <div class="row"> 
            <div class="order-2 order-lg-1 col-lg-12 bd-content">

                <h4>Add A New  Department</h4>

                <div class="card">
                    <div class="card-body">

                        <div class="row">
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label for="title" class="form-label">Department</label>
                                    <input type="text" class="form-control" id="department-title">
                                </div>
                            </div>
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label for="category" class="form-label">Category Name</label>
                                    <input type="text" class="form-control" id="category">
                                </div>
                            </div>

                            <!-- <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="price" class="form-label">Collection Price</label>
                                    <input type="number" class="form-control" id="price">
                                </div>
                            </div> -->

                        </div>

                        <div>
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" id="description" rows="3"></textarea>
                        </div>

                    </div>

                    <div>
                        <button style="float: right !important; margin-right: 15px !important;" type="button" class="btn btn-primary" id="addDepartment">Save Changes</button>
                    </div>

                </div>


            </div>
        </div>

    <?php elseif ($action == "view") : ?>

        <div class="row">
            <div class="order-2 order-lg-2 col-lg-12 bd-content">

                <h4>Departments </h4>

                <div class="card">
                    <div class="card-body">
                        <table class="table table-bordered table-striped table-responsive-stack">
                            <thead>
                                <tr>
                                    <th>Department</th>
                                    <th>Category</th>
                                </tr>
                            </thead>
                            <tbody class="department-table">
                          
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>

        </div>

    <?php endif; ?>

</div>
<!-- ./ content -->


</div>
<!-- ./ layout-wrapper -->

<?php
require_once "footer.php";
?>