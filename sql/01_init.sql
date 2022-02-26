DROP DATABASE IF EXISTS intellirndb;
DROP USER IF EXISTS 'intellirnapp'@'%';

CREATE DATABASE IF NOT EXISTS intellirndb;
CREATE USER IF NOT EXISTS 'intellirnapp'@'%' IDENTIFIED BY 'intellirnpassword';
GRANT ALL ON intellirndb.* TO 'intellirnapp'@'%';

USE intellirndb;

CREATE TABLE survey (
    id BIGINT NOT NULL AUTO_INCREMENT,
    survey_url VARCHAR(255) NOT NULL,
    title VARCHAR(255),
    description VARCHAR(255),
    image_url VARCHAR(255),
    creation_date date,
    last_update_date date,
    PRIMARY KEY (id)
);

CREATE TABLE question (
    id BIGINT NOT NULL,
    survey_id BIGINT NOT NULL,
    content VARCHAR(255),
    image_url VARCHAR(255),
    stem VARCHAR(255),
    uid BIGINT,
    PRIMARY KEY (survey_id, id),
    CONSTRAINT fk_question_survey FOREIGN KEY (survey_id) REFERENCES survey (id) ON DELETE CASCADE
);

CREATE TABLE education (
    id BIGINT NOT NULL AUTO_INCREMENT,
    education_url VARCHAR(255) NOT NULL,
    title VARCHAR(255),
    description MEDIUMTEXT,
    image_url VARCHAR(255),
    video_url VARCHAR(255),
    creation_date DATE,
    last_update_date DATE,
    PRIMARY KEY (id)
);

CREATE TABLE admin (
    id BIGINT NOT NULL AUTO_INCREMENT,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    middle_name VARCHAR(255),
    email VARCHAR(255),
    password VARCHAR(255),
    PRIMARY KEY (id)
);
