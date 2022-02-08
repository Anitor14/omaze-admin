<?php

    $projectName = "Shemparonelli";

    $curPageName = substr($_SERVER["SCRIPT_NAME"],strrpos($_SERVER["SCRIPT_NAME"],"/")+1);
    $curPageName = substr($curPageName, 0, -4);

    $curPageNameLower = strtolower($curPageName);

    define("CURRENT_PAGE", $curPageNameLower);

    function checkSetActive($page) {  
        return ( CURRENT_PAGE == $page ) ? "active" : "";
    }

?>