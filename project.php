<?php
require_once "header.php";

$action = isset($_GET["action"]) ? addslashes($_GET["action"]) : "";

?>

<!-- content -->
<div class="content ">

    <?php if ($action == "new" || $action == "edit") : ?>

        <div class="row">
            <div class="order-2 order-lg-1 col-lg-12 bd-content">

                <h4 class="edit-project-main">Add New Project</h4>

                <input type="hidden" class="form-control" id="_item_id">

                <div class="card">
                    <div class="card-body">

                        <div class="row">
                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label for="images" class="form-label">Featured Image</label>
                                    <input type="file" class="form-control" id="images" name="images" accept="image/*" multiple/>
                                </div>
                            </div>

                            <div class="col-md-12">
                                <div class="mb-3">
                                    <label for="title" class="form-label">Project Title</label>
                                    <input type="text" class="form-control" id="title">
                                </div>
                            </div>
                        </div>

                        <div>
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" id="description" rows="3"></textarea>
                        </div>
                        
                    </div>

                    <div>
                        <button style="float: right !important; margin-right: 15px !important;" type="button" class="btn btn-primary" id="saveProjectChanges">Save Changes</button>
                    </div>

                </div>


            </div>
        </div>

    <?php elseif ($action == "view") : ?>

        <div class="row">
            <div class="order-2 order-lg-2 col-lg-12 bd-content">

                <h4></h4>

                <div class="card">
                    <div class="card-body">
                        <table class="display data_table" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th>S/No</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tfoot>
                                <tr>
                                    <th>S/No</th>
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>

                            <tbody id="tableProjects">
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