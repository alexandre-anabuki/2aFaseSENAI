CREATE DATABASE escola;

USE escola;

CREATE TABLE sala(
id_sala INT NOT NULL AUTO_INCREMENT,
nome_sala VARCHAR(45),
capacidade_sala INT,
PRIMARY KEY (id_sala)
);

CREATE TABLE turma(
id_turma INT NOT NULL AUTO_INCREMENT,
nome_turma VARCHAR(45),
periodo VARCHAR(45),
PRIMARY KEY (id_turma)
);

CREATE TABLE professor(
id_professor INT NOT NULL AUTO_INCREMENT,
nome_prof VARCHAR(45),
formacao_prof VARCHAR(45),
PRIMARY KEY (id_professor),
turma_id INT,
FOREIGN KEY (turma_id)
REFERENCES turma (id_turma)
);

CREATE TABLE aula(
id_aula INT NOT NULL AUTO_INCREMENT,
nome_aula VARCHAR(45),
PRIMARY KEY (id_aula),
professor_id INT,
FOREIGN KEY (professor_id)
REFERENCES professor (id_professor)
);

ALTER TABLE turma
ADD COLUMN sala_id INT,
ADD FOREIGN KEY (sala_id)
REFERENCES sala (id_sala);

DROP TABLE turma;

DROP DATABASE escola;