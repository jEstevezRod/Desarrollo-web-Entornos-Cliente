<?php
/**
 * Created by PhpStorm.
 * User: Jesus
 * Date: 02/12/2017
 * Time: 12:27
 */

$valor3= '18600';

$numCP = ['0','1','2','3','4','5'];
foreach ($numCP as $num) {
    if (strpos($valor3, $num)) {
        echo'está';
    }
}