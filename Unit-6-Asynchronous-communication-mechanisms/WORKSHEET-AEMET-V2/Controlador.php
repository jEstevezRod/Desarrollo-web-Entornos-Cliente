<?php
/**
 * Created by PhpStorm.
 * User: Jesus
 * Date: 01/12/2017
 * Time: 19:43
 */

//$valueObtained = @$_GET['CP'];
//$valueObtained = 18600;

//$NameObtained = @$_GET['NAME'];

//$ineidObtained = @$_GET['AEMET'];
//$ineidObtained = "18140";
//$urldatos = @$_GET['DATES'];


// https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/"+ CODIGOPOSTAL +"/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqZXNlc3Ryb2QxQGdtYWlsLmNvbSIsImp0aSI6IjE5ZjQ2NzgwLTZkYjAtNDc2YS05ZTIzLTU3Yzk5ZDY1NWU3NiIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNTEyMTU4NDYwLCJ1c2VySWQiOiIxOWY0Njc4MC02ZGIwLTQ3NmEtOWUyMy01N2M5OWQ2NTVlNzYiLCJyb2xlIjoiIn0.U2j91Zca3D3HLguNxVwxzkAv3r1CHZMyXt_5QCkPkV8

$valor = @$_GET['value'];

function prov(){
    $mbd = new PDO('mysql:host=localhost:3306;dbname=postal', 'root', 'nedflanders');
    $sth = $mbd->prepare('select provincia from provincia');
    $sth->execute();
    $result = $sth->fetchAll();
    echo json_encode($result);
}

if (isset($valor) and $valor == "1"){
    prov()
}

/*

function master($parm)
{
    if ((strpos($parm, '0')) or (strpos($parm, '1')) or (strpos($parm, '2')) or (strpos($parm, '3')) or (strpos($parm, '4')) or (strpos($parm, '5'))) {
        $codigpos = $parm;
        $mbd = new PDO('mysql:host=localhost:3306;dbname=postal', 'root', 'nedflanders');
        $sth = $mbd->prepare('select poblacion.poblacion, poblacion.lat, poblacion.lon, poblacion.poblacionid, poblacion.provinciaid from poblacion inner join codigopostal on poblacion.poblacionid=codigopostal.poblacionid and poblacion.provinciaid=codigopostal.provinciaid where codigopostal.codigopostalid=:valor');
        $sth->bindParam(':valor', $codigpos);
        $sth->execute();
        $result = $sth->fetch();
        echo json_encode($result);
    } else {
        $poblacion = $parm;
        $mbd = new PDO('mysql:host=localhost:3306;dbname=postal', 'root', 'nedflanders');
        $sth = $mbd->prepare('select codigopostal.codigopostalid, poblacion.lat, poblacion.lon, poblacion.poblacionid, poblacion.provinciaid  from codigopostal inner join poblacion on codigopostal.provinciaid=poblacion.provinciaid and codigopostal.poblacionid=poblacion.poblacionid where poblacion.poblacion=:valor');
        $sth->bindParam(':valor', $poblacion);
        $sth->execute();
        $result = $sth->fetchAll();
        echo json_encode($result);
    }
}


function aemet($paramer)
{
    $usevar = $paramer;
    $url = "https://opendata.aemet.es/opendata/api/prediccion/especifica/municipio/diaria/" . $usevar . "/?api_key=eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJqZXNlc3Ryb2QxQGdtYWlsLmNvbSIsImp0aSI6IjE5ZjQ2NzgwLTZkYjAtNDc2YS05ZTIzLTU3Yzk5ZDY1NWU3NiIsImlzcyI6IkFFTUVUIiwiaWF0IjoxNTEyMTU4NDYwLCJ1c2VySWQiOiIxOWY0Njc4MC02ZGIwLTQ3NmEtOWUyMy01N2M5OWQ2NTVlNzYiLCJyb2xlIjoiIn0.U2j91Zca3D3HLguNxVwxzkAv3r1CHZMyXt_5QCkPkV8";
    $json = file_get_contents($url);
    echo ($json);
}

function aemetDATOS($parameter) {
    $url = $parameter;
    $json = file_get_contents($url);
    echo $json;
}





if (isset($ineidObtained)){
    aemet($ineidObtained);
};

if (isset($urldatos)){
    aemetDATOS($urldatos);
}

if (isset($valueObtained)) {
    master($valueObtained);
} else if (isset($NameObtained)) {
    master($NameObtained);
}

*/

?>
