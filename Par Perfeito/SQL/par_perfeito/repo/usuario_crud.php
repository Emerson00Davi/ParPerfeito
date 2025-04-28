<?php
include_once "../config/db.php";

// Função para salvar usuário (inserção ou atualização)
function salvar_usuario($idUsuario, $nome, $cpf, $email, $senha, $data_nasc, $situacao_plano, $codPlano, $usuario_insta, $preferencia, $turma, $descricao) {
    $pdo = criar_conexao();

    if ($idUsuario > 0) { // Atualização
        $sql = "UPDATE tb_pessoa SET 
            nomePessoa = :nome, 
            cpfPessoa = :cpf, 
            emailPessoa = :email, 
            senhaPessoa = :senha, 
            dataNasc = :data_nasc, 
            situacaoPlano = :situacao_plano, 
            codPlano = :codPlano, 
            usuarioInsta = :usuario_insta, 
            preferencia = :preferencia, 
            turma = :turma, 
            descricao = :descricao 
        WHERE codPessoa = :idUsuario;";
    } else { // Inserção
        $sql = "INSERT INTO tb_pessoa (
            nomePessoa, cpfPessoa, emailPessoa, senhaPessoa, dataNasc, 
            codPlano, usuarioInsta, preferencia, turma, descricao
        ) VALUES (
            :nome, :cpf, :email, :senha, :data_nasc, :codPlano, 
            :usuario_insta, :preferencia, :turma, :descricao
        );";
    }

    try {
        $sentenca = $pdo->prepare($sql);

        // Vinculando parâmetros
        $sentenca->bindValue(':nome', $nome);
        $sentenca->bindValue(':cpf', $cpf);
        $sentenca->bindValue(':email', $email);
        $sentenca->bindValue(':senha', $senha);
        $sentenca->bindValue(':data_nasc', $data_nasc);
        $sentenca->bindValue(':situacao_plano', $situacao_plano);
        $sentenca->bindValue(':codPlano', $codPlano);
        $sentenca->bindValue(':usuario_insta', $usuario_insta);
        $sentenca->bindValue(':preferencia', $preferencia);
        $sentenca->bindValue(':turma', $turma);
        $sentenca->bindValue(':descricao', $descricao);

        if ($idUsuario > 0) {
            $sentenca->bindValue(':idUsuario', $idUsuario);
        }

        $sentenca->execute();
        $pdo = null;

        return $sentenca->rowCount();
    } catch (PDOException $e) {
        echo "Erro ao salvar usuário: " . $e->getMessage();
        return 0;
    }
}



// Função para excluir usuário
function excluir_usuario($idUsuario) {
    $conexao = criar_conexao();

    $sql = "DELETE FROM tb_pessoa WHERE codPessoa = :idUsuario;";
    $sentenca = $conexao->prepare($sql);
    $sentenca->bindValue(':idUsuario', $idUsuario);
    $sentenca->execute();
    $conexao = null;

    return $sentenca->rowCount();
}

// Função para buscar usuário por ID
function buscar_usuario_por_id($idUsuario) {
    $sql = "SELECT * FROM tb_pessoa WHERE codPessoa = :idUsuario;";
    $conexao = criar_conexao();
    $sentenca = $conexao->prepare($sql);
    $sentenca->bindValue(':idUsuario', $idUsuario);
    $sentenca->execute();
    $conexao = null;

    return $sentenca->fetch();
}


function listarUsuario(){
    $sql = "SELECT * FROM tb_pessoa;";

    $conexao = criar_conexao();
    $sentenca = $conexao->prepare($sql);

    $sentenca->execute(); 
    $conexao = null;
    return $sentenca->fetchAll();
}
// Função para autenticar usuário
function autenticar_usuario($email, $senha) {
    try {
        $sql = "SELECT * FROM tb_pessoa WHERE emailPessoa = :email AND senhaPessoa = :senha;";
        $conexao = criar_conexao();
        $sentenca = $conexao->prepare($sql);
        $sentenca->bindValue(':email', $email);
        $sentenca->bindValue(':senha', $senha);
        $sentenca->execute();
        $conexao = null;

        return $sentenca->fetch();
    } catch (PDOException $erro) {
        echo "Erro: " . $erro->getMessage(); // ou criarArquivoErro($erro);
        die();
    }
}
?>
