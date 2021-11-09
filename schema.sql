DROP DATABASE IF EXISTS ecommerce_info;
CREATE DATABASE ecommerce_info;
USE ecommerce_info;
CREATE TABLE artists (
    id INTEGER NOT NULL,
    artist_name VARCHAR(30) NOT NULL
);
CREATE TABLE songs (
    id INTEGER NOT NULL,
    song_title VARCHAR(30) NOT NULL,
    genre_type VARCHAR(20)
);
CREATE TABLE genre (
    id INTEGER NOT NULL,
    genre_name VARCHAR(20) NOT NULL
);
CREATE TABLE region (
    id INTEGER NOT NULL,
    region_name VARCHAR(30),
    language VARCHAR(20)
);
