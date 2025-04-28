<?php			
	include_once "../repo/usuario_crud.php";
	
    $email = $_POST['email'];
    $senha = $_POST['senha'];

    $registro = autenticar_usuario($email, $senha);
 
    if($registro != null){		
		echo "<script>location.href='index.php';</script>"; 
	}else{
		echo "<script>alert('Login ou senha inválido!'); location.href='login.php';</script>"; 			
	}
?>	