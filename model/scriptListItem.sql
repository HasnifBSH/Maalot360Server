

CREATE SCHEMA   `maalot360db`;

CREATE TABLE `maalot360db`.`ListItem` (
  `id` INT NOT NULL AUTO_INCREMENT, -- קוד אוטומטי
  `listName` VARCHAR(100) NOT NULL, -- שם הרשימה
  `itemName` VARCHAR(100) NOT NULL, -- שם הפריט
  `itemValue` VARCHAR(255) DEFAULT NULL, -- ערך הפריט
  PRIMARY KEY (`id`), -- מפתח ראשי
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) -- אינדקס ייחודי
);