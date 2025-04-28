<?php			
	include_once "../repo/usuario_crud.php";

	$idUsuario = $_POST['idUsuario'];

	$quantidade = excluirUsuario($idUsuario);	

	echo $quantidade;
?>	


	