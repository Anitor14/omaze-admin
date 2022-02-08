<?php
require_once "header.php";

$action = isset($_GET["action"]) ? addslashes($_GET["action"]) : "";

?>

<!-- content -->
<div class="content ">

    <?php if ($action == "new") : ?>


        <div class="row">
            <div class="order-2 order-lg-1 col-lg-12 bd-content">

                <h4>Add New Variant</h4>

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
                                    <label for="collection" class="form-label">Product Collection</label>
                                    <select id="collection" class="form-control">
                                        <option value="default">Women</option>
                                        <option value="default">Men</option>
                                        <option value="default">Kids</option>
                                    </select>
                                </div>
                            </div>

                            <div class="col-md-6">
                                <div class="mb-3">
                                    <label for="category" class="form-label">Product Category</label>
                                    <select id="category" class="form-control">
                                        <option value="default">Basics</option>
                                        <option value="default">Blazer</option>
                                        <option value="default">Knitwear</option>
                                        <option value="default">Jeans</option>
                                        <option value="default">Jackets</option>
                                        <option value="default">Girl</option>
                                        <option value="default">Boy</option>
                                    </select>
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

                        </div>

                        <div>
                            <label for="description" class="form-label">Description</label>
                            <textarea class="form-control" id="description" rows="3"></textarea>
                        </div>

                    </div>

                    <div>
                        <button style="float: right !important; margin-right: 15px !important;" type="button" class="btn btn-primary" id="addProduct">Save Changes</button>
                    </div>

                </div>


            </div>
        </div>

    <?php elseif ($action == "view") : ?>

        <div class="row">
            <div class="order-2 order-lg-2 col-lg-12 bd-content">

                <h4>Products </h4>

                <div class="card">
                    <div class="card-body">
                        <table class="table table-bordered table-striped table-responsive-stack">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Category</th>
                                    <th>Department</th>
                                    <!-- <th>price</th> -->
                                </tr>
                            </thead>
                            <tbody class='product-table'>
                    
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