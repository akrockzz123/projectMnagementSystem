CREATE DATABASE IF NOT EXISTS pmd;
use pmd;
CREATE TABLE IF NOT EXISTS user(
    user_id int PRIMARY KEY AUTO_INCREMENT,
    username varchar(50) NOT NULL,
    email varchar(50) NOT NULL,
    role ENUM("Admin","User") NOT NULL DEFAULT "User",
    status ENUM("Active","Inactive") NOT NULL DEFAULT "Active"
);