CREATE SCHEMA  `maalot360db`;

CREATE TABLE  `maalot360db`.`guideStep` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `guide` ENUM('אורח', 'משתלמת', 'מרצה', 'מנהלת') NOT NULL,
  `stepNumber` INT NOT NULL,
  `stepName` VARCHAR(100) NOT NULL,
  `video` VARCHAR(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC)
);