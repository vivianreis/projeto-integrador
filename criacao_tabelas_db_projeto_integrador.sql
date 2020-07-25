create database db_projeto_integrador;


 CREATE TABLE tb_categoria ( 
 id bigint NOT NULL auto_increment, 
 nome varchar(255) NOT NULL,
 setor varchar(255) NOT NULL,
 PRIMARY KEY (id) 
 ); 

CREATE TABLE tb_produto ( 
id bigint NOT NULL AUTO_INCREMENT,
 nome varchar(255) NOT NULL, 
 preco DECIMAL(6,2) NOT NULL, 
 quantidade DECIMAL(6,2),
 categoria_id bigint,
 PRIMARY KEY (id),
 FOREIGN KEY (categoria_id) REFERENCES tb_categoria(id)
 ); 
 
CREATE TABLE tb_usuario (
 id bigint NOT NULL AUTO_INCREMENT, 
 nome varchar(255) NOT NULL,
 email varchar(255) NOT NULL, 
 senha varchar(8) NOT NULL,
 PRIMARY KEY (id) 
 ); 
 