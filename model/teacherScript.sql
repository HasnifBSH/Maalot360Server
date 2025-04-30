-- id
-- fname
-- lname
-- address
-- Email
-- phone
-- languages
-- payPerHour
-- moreDetails
-- userId
-- isActive

CREATE TABLE `maalot360db`.`teacher` (
`id`INT NOT NULL AUTO_INCREMENT,
`fname` VARCHAR(45) NOT NULL,
`lname` VARCHAR(45) NOT NULL,
`address` VARCHAR(45) NOT NULL,
`Email` VARCHAR(45) NOT NULL,
`phone` VARCHAR(45) NOT NULL,
`languages` VARCHAR(500) NOT NULL,
`payPerHour` INT NOT NULL,
`moreDetails` VARCHAR(45) NOT NULL,
`userId` INT NOT NULL,
`isActive` TINYINT NOT NULL,
PRIMARY KEY (`id`),
UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);


-- הכנסת ערכים לטבלה
INSERT INTO `maalot360db`.`teacher` (`fname`, `lname`, `address`, `Email`, `phone`, `languages`, `payPerHour`, `moreDetails`, `userId`, `isActive`)
VALUES ('John', 'Doe', '123 Main St','john.doe@example.com', '555-1234', 'English', 50, 'Experienced teacher', 1, 1);

--שליפה של ערכים מהטבלה
SELECT * FROM `maalot360db`.`teacher`;

