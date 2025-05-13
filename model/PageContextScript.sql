CREATE SCHEMA 'maalot360db';

CREATE TABLE `maalot360db`.`PageContext` (

    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `elementTag` VARCHAR(100) NOT NULL,
    `elementType` ENUM('empty', 'contains') NOT NULL,
    `text` TEXT,
    `src` VARCHAR(255),
    `pageName` ENUM('ContactUs', 'About') NOT NULL
  );
