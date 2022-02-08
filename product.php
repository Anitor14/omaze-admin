<?php
require_once "header.php";

$action = isset($_GET["action"]) ? addslashes($_GET["action"]) : "";

?>

<!-- content -->
<div class="content ">

    <?php if ($action == "new" || $action == "edit") : ?>

        <div class="row">
            <div class="order-2 order-lg-1 col-lg-12 bd-content">

                <h4 class="edit-product-main">Add New Product</h4>

                <form enctype="multipart/form-data">
                    <input type="hidden" class="form-control" id="_item_id">
                    <div class="card">
                        <div class="card-body">

                            <div class="row">

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="title" class="form-label">Product Title</label>
                                        <input type="text" class="form-control" id="title">
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="price" class="form-label">Price</label>
                                        <input type="number" class="form-control" id="price">
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="collection" class="form-label">Product Collection (leave at default if none) </label>
                                        <select id="collection" name="collection" class="form-control"></select>
                                    </div>
                                </div>

                                <div class="col-md-6">
                                    <div class="mb-3">
                                        <label for="category" class="form-label">Product Category</label>
                                        <select id="category" name="category" class="form-control"></select>
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label for="color" class="form-label">Color</label>
                                        <input type="color" class="form-control" id="color">
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label for="size" class="form-label">Size</label>
                                        <input type="text" class="form-control" id="size">
                                    </div>
                                </div>

                                <div class="col-md-4">
                                    <div class="mb-3">
                                        <label for="quantity" class="form-label">Quantity</label>
                                        <input type="number" class="form-control" id="quantity">
                                    </div>
                                </div>

                                <div class="col-md-12">
                                    <div class="mb-3">
                                        <label for="images" class="form-label">Product Images</label>
                                        <input type="file" class="form-control" id="images" name="images" accept="image/*" multiple />
                                    </div>
                                </div>

                            </div>

                            <div>
                                <label for="description" class="form-label">Description</label>
                                <textarea class="form-control" id="description" rows="3"></textarea>
                            </div>

                        </div>

                        <div>
                            <button style="float: right !important; margin-right: 15px !important;" type="button" class="btn btn-primary" id="saveProductChanges">Save Changes</button>
                        </div>

                    </div>
                </form>
            </div>
        </div>

    <?php elseif ($action == "view") : ?>

        <div class="row">
            <div class="order-2 order-lg-2 col-lg-12 bd-content">

                <h4>Products </h4>

                <div class="card">
                    <div class="card-body">
                        <table class="display data_table" cellspacing="0" width="100%">
                            <thead>
                                <tr>
                                    <th>S/No</th>
                                    <th>Product Title</th>
                                    <th>Collection</th>
                                    <th>Category</th>
                                    <th>hasVariant</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tfoot>
                                <tr>
                                    <th>S/No</th>
                                    <th>Product Title</th>
                                    <th>Collection</th>
                                    <th>Category</th>
                                    <th>hasVariant</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Action</th>
                                </tr>
                            </tfoot>

                            <tbody id="tableProducts">
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