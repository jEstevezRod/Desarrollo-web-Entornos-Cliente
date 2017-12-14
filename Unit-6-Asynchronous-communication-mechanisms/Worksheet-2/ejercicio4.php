<?php
$variable = $_GET['datos'];


$listaAlternativa= ['123', '_10', 'Second'];
$nombresAlternativos = [];

if (($variable == 'Pablo') || ($variable == 'Jose') || ($variable == 'Fran') || ($variable == 'Jesus')){
    foreach ($listaAlternativa as $Alternativa) {
        $nuevoNombre = $variable . $Alternativa;
        array_push($nombresAlternativos, $nuevoNombre);
  };
echo '{
	     "validar": "si",
         "alternativo": ' . json_encode(array_values($nombresAlternativos)) . '
       }';

} else {
    echo '{
      	 "validar": "no"
      }';
}
?>