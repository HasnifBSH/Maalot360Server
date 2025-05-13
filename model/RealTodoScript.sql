CREATE SCHEMA 'maalot360db';

CREATE TABLE `maalot360db`.`realTodo` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `createdDate` DATETIME DEFAULT CURRENT_TIMESTAMP,
    `description` TEXT NOT NULL,
    `isCompleted` TINYINT(1) DEFAULT 0, -- Assuming 0 is for not completed and 1 is for completed
    `ownerId` INT NOT NULL,
    `userId` INT NOT NULL
);