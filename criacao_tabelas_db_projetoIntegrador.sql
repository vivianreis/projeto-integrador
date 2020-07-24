create database db_projeto_Integrador;
use db_projeto_Integrador;

CREATE TABLE tb_usuario (
	id INT NOT NULL AUTO_INCREMENT,
	nome varchar(255) NOT NULL,
	email varchar(255) NOT NULL,
	senha varchar(8) NOT NULL, 
	PRIMARY KEY (id)
);

CREATE TABLE tb_produto (
	id INT NOT NULL AUTO_INCREMENT,
	categoria_id INT NOT NULL,
	nome varchar(255) NOT NULL,
	preco DECIMAL(6,2) NOT NULL,
	quantidade DECIMAL(6,2) NOT NULL,
	disponivel BOOLEAN NOT NULL,
	PRIMARY KEY (id)
);

CREATE TABLE tb_categoria (
	id INT NOT NULL AUTO_INCREMENT,
	nome varchar(255) NOT NULL,
	setor varchar(255) NOT NULL,
	PRIMARY KEY (id)
);

ALTER TABLE tb_categoria ADD CONSTRAINT tb_categoria_fk0 FOREIGN KEY (id) REFERENCES tb_produto(categoria_id);