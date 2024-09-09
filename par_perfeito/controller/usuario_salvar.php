<?php		
	include_once "../repo/usuario_crud.php";

	$idUsuario = $_POST['idUsuario'];
	$email = $_POST['email'];
	$senha = $_POST['senha'];
    $nome = $_POST['nome'];
    $cpf = $_POST['cpf'];
    $data_nasc = $_POST['data_nasc'];
    $usuario_insta = 'usuario'; //$_POST['usuario_insta'];
    $preferencia = $_POST['preferencia'];
    $turma = $_POST['turma'];
    $descricao = $_POST['descricao'];
    $situacao_plano = false; //$_POST['situacao_plano'];
    $codPlano = 1 ;//$_POST['codPlano'];
	$interesse = $_POST['interesse'];
  


	

	
	
	

	$quantidade = salvar_usuario($idUsuario, $nome, $cpf, 
		$email, $senha, $data_nasc, 
		$situacao_plano, $codPlano, 
		$usuario_insta, $preferencia, 
		$turma, $descricao, $interesse);

	if($quantidade > 0){
		echo  "<script>alert('Cadastro realizado com sucesso!');</script>";
		echo  "<script>window.location.replace('../page/tabela_teste.php');</script>";
	}else{
		echo  "<script>alert('Erro ao cadastro e registro');</script>";
		echo  "<script>window.location.replace('../page/tabela_teste.php');</script>";
	}
		//echo  "<script>window.location.replace('usuarioFormulario.php');</script>";		
?>	


	