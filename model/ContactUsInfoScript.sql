CREATE SCHEMA 'maalot360db';
CREATE TABLE `maalot360db`.`ContactUsInfo` (

    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `fname` VARCHAR(100) NOT NULL,
    `lname` VARCHAR(100) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(20) NOT NULL,
    `courseId` INT NOT NULL,
    `courseName` VARCHAR(255) NOT NULL,
    message TEXT,
    `dateCreated` DATETIME DEFAULT CURRENT_TIMESTAMP,
    status TINYINT(1) DEFAULT 0 -- Assuming 0 is 'not read' and 1 is 'read'
  );




-- INSERT INTO `maalot360db`.`todos` (`title`, `createDate`, `isCompleted`, `userId`) VALUES ('a', '1998-03-03', '0', '1');
-- INSERT INTO `maalot360db`.`todos` (`title`, `createDate`, `isCompleted`, `userId`) VALUES ('b', '1998-12-28', '0', '1');

