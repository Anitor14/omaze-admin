<?php
    require_once "header.php";

    $status = isset($_GET["status"]) ? addslashes($_GET["status"]) : "";

?>

<!-- content -->
<div class="content ">

    <div class="row">
        <div class="order-2 order-lg-2 col-lg-12 bd-content">

            <h4>Orders ( <?= $status ?> ) </h4>

            <div class="card">
                <div class="card-body">
                    <table class="table table-bordered table-striped table-responsive-stack">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Color</th>
                                <th>Taste</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>Apple</td>
                                <td>Green and Red</td>
                                <td>Sweet and Tart</td>
                            </tr>
                            <tr>
                                <td>Banana</td>
                                <td>Yellow</td>
                                <td>Sweet and Mushy</td>
                            </tr>
                            <tr>
                                <td>Mango</td>
                                <td>Yellowish Green</td>
                                <td>Tangy</td>
                            </tr>
                            <tr>
                                <td>Orange</td>
                                <td>Orange</td>
                                <td>Sweet and Tangy</td>
                            </tr>
                            <tr>
                                <td>Blueberry</td>
                                <td>Blue</td>
                                <td>Mild Sweetness</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>

        </div>

    </div>

</div>
<!-- ./ content -->


</div>
<!-- ./ layout-wrapper -->

<?php
require_once "footer.php";
?>