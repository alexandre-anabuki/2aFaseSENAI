CREATE DATABASE fabrica;

CREATE TABLE categoria(
id_categoria INT NOT NULL AUTO_INCREMENT,
descricao VARCHAR(45),
PRIMARY KEY (id_categoria)
);

CREATE TABLE fornecedor(
id_fornecedor INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
nacionalidade VARCHAR(45),
PRIMARY KEY (id_fornecedor)
);

CREATE TABLE peca(
id_peca INT NOT NULL AUTO_INCREMENT,
nome VARCHAR(45),
peso FLOAT,
ano_fabricacao YEAR,
PRIMARY KEY (id_peca),
fornecedor_id INT,
categoria_id INT,
FOREIGN KEY (fornecedor_id)
REFERENCES fornecedor (id_fornecedor),
FOREIGN KEY (categoria_id)
REFERENCES categoria (id_categoria)
);
