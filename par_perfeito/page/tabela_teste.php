<?php		
		include_once "../repo/usuario_crud.php";
		$registros = listarUsuario();
	?>

	<html>

	<head>
	    <meta charset="utf-8" />
	    <title> Usuário </title>
	  
	</head>

	<body>
		
	    <div class="container">
			<h1>Usuários</h1>
			<hr/>
<!-- <a href="usuarioFormulario.php" class="btn btn-primary float-right mb-2">Cadastrar</a> -->
	        <table id="tabela" class="table">
	            <thead class="thead-dark">
	                <tr>
						<th></th>
	                    <th>Usuário</th>
						<th></th>
	                </tr>
	            </thead>
	            <tbody>
	                <?php	
						foreach($registros as $registro){
							echo "<tr>";
							echo "<td> ";
							echo "<td>{$registro['nomePessoa']} </td>";						
							echo "</tr>";
						} 
					?>
	            </tbody>
	        </table>
	    </div>
		
	</body>

	</html>