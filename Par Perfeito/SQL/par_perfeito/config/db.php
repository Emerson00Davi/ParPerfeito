<?php 
    $conexao = NULL;

    function criar_conexao(){
        $pdo = new PDO('mysql:host=localhost; dbname=db_par_perfeito', 'root', '');
        return $pdo;
    }

    function encerrar_conexao(){
        $pdo = NULL;
    }
?>