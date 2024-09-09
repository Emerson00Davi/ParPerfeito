DROP DATABASE db_par_perfeito;

CREATE DATABASE db_par_perfeito;

USE db_par_perfeito;

CREATE TABLE tb_admin_par_perfeito(
	codAdmin INT,
    emailAdmin VARCHAR(255),
    senhaAdmin VARCHAR(255),
    PRIMARY KEY(codAdmin)
);



CREATE TABLE tb_plano(
	codPlano INT NOT NULL AUTO_INCREMENT,
    nomePlano VARCHAR(255),
    descricaoPlano VARCHAR(255),
    valorPlano DECIMAL(9,2),
    PRIMARY KEY(codPlano)
);

CREATE TABLE tb_pessoa( 
	codPessoa INT NOT NULL AUTO_INCREMENT,
    nomePessoa VARCHAR(255) NOT NULL,
    cpfPessoa VARCHAR(255) NOT NULL UNIQUE,
    emailPessoa VARCHAR(255) NOT NULL UNIQUE,
    senhaPessoa VARCHAR(255) NOT NULL,
    dataNasc VARCHAR(255),
    situacaoPlano BOOLEAN,
    codPlano INT,
    usuarioInsta  VARCHAR(255),
    preferencia  VARCHAR(255),
    turma  VARCHAR(255),
    descricao VARCHAR(10000),
    interesse VARCHAR(255),
    FOREIGN KEY (codPlano) REFERENCES tb_plano(codPlano),
    PRIMARY KEY(codPessoa) 
);

CREATE TABLE  tb_caracteristica(
	codCaracteristica INT NOT NULL AUTO_INCREMENT,
    descricaoCaracteristica VARCHAR(255),
    PRIMARY KEY(codCaracteristica)
);

/*CREATE TABLE PessoaTemPlano(
	codPessoa INT,
    codPlano INT,
    FOREIGN KEY (codPessoa) REFERENCES Pessoa(codPessoa),
    FOREIGN KEY (codPlano) REFERENCES Plano(codPlano),
    PRIMARY KEY(codPlano,codPessoa)
);*/

CREATE TABLE tb_pessoa_tem_caracteristica(
	codPessoa INT,
    codCaracteristica INT,
    FOREIGN KEY (codPessoa) REFERENCES tb_pessoa(codPessoa),
    FOREIGN KEY (codCaracteristica) REFERENCES tb_caracteristica(codCaracteristica),
    PRIMARY KEY (codPessoa,codCaracteristica)
);

CREATE TABLE tb_aptidao(	
	codPessoa1 INT,
    codPessoa2 INT,
    pontuacao INT,
    FOREIGN KEY (codPessoa1) REFERENCES tb_pessoa(codPessoa),
    FOREIGN KEY (codPessoa2) REFERENCES tb_pessoa(codPessoa),
    PRIMARY KEY (codPessoa1, codPessoa2)
);

