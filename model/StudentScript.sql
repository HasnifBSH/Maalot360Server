CREATE SCHEMA 'maalot360db';
CREATE TABLE `maalot360db`.`student` (
    `id` INT AUTO_INCREMENT PRIMARY KEY,
    `fname` VARCHAR(100) NOT NULL,
    `lname` VARCHAR(100) NOT NULL,
    `address` VARCHAR(255),
    `email` VARCHAR(255) NOT NULL,
    `phone` VARCHAR(20),
    `userId` INT NOT NULL,
    `isActive` TINYINT(1) DEFAULT 1 -- Assuming 1 is for active, and 0 is for inactive
);


INSERT INTO `maalot360db`.`student` (fname, lname, address, email, phone, userId, isActive) VALUES
('חני', 'לוי', 'נחל אילון, בית שמש, ישראל', 'chana@example.com', '123-456-7890', 1, 1),
('חני', 'לוי', 'נחל אילון, בית שמש, ישראל', 'chana@example.com', '123-456-7890', 1, 1),
('חני', 'לוי', 'נחל אילון, בית שמש, ישראל', 'chana@example.com', '123-456-7890', 1, 1),
('חני', 'לוי', 'נחל אילון, בית שמש, ישראל', 'chana@example.com', '123-456-7890', 1, 1),
('חני', 'לוי', 'נחל אילון, בית שמש, ישראל', 'chana@example.com', '123-456-7890', 1, 1);


