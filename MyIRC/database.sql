CREATE DATABASE MyIRC;
USE MyIRC;
CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    username varchar(50),
    password varchar(255),
    admin boolean NOT NULL default 0,
    PRIMARY KEY (id)
);

CREATE TABLE rooms (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name varchar(100)
);

CREATE TABLE messages (
    id int NOT NULL PRIMARY KEY AUTO_INCREMENT,
    id_user int NOT NULL,
    id_room int NOT NULL,
    content text(1000),
    time timestamp,
    constraint fk_id_user
    foreign key (id_user) references users (id),
    constraint fk_id_room
    foreign key (id_room) references rooms (id)
);

INSERT INTO users (username, password, admin) VALUES ('admin', 'admin', 1);
INSERT INTO rooms (name) VALUES ('Accueil');