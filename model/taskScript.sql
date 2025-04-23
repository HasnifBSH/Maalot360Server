--יצירת טבלה
CREATE TABLE `maalot360db`.`task` (
`id`INT NOT NULL AUTO_INCREMENT,
`name`VARCHAR(45) NOT NULL,
`desc`VARCHAR(2000) NOT NULL,
`lessonId` INT,
`finalDate` DATETIME,
`instructionsFile` VARCHAR(45),
`type` VARCHAR(45),
PRIMARY KEY (`id`),
UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);

-- הכנסת ערכים לטבלה
INSERT INTO `maalot360db`.`task` (`name`, `desc`, `lessonId`, `finalDate`, `instructionsFile`, `type`) VALUES ('b','c','3', '1998-12-28', '10', '1');

--שליפה של ערכים מהטבלה
SELECT * FROM `maalot360db`.`task`;
