CREATE SCHEMA 'maalot360db';


CREATE TABLE `maalot360db`.`todos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `title` VARCHAR(45) NOT NULL,
  `createDate` DATETIME NULL,
  `isCompleted` INT NULL,
  `userId` INT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);


INSERT INTO `maalot360db`.`todos` (`title`, `createDate`, `isCompleted`, `userId`) VALUES ('a', '1998-03-03', '0', '1');
INSERT INTO `maalot360db`.`todos` (`title`, `createDate`, `isCompleted`, `userId`) VALUES ('b', '1998-12-28', '0', '1');


