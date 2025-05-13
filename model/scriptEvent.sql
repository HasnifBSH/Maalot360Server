CREATE SCHEMA  `maalot360db`;

CREATE TABLE `maalot360db`.`event` (
  `id` INT NOT NULL AUTO_INCREMENT, -- קוד אוטומטי
  `eventDate` DATE NOT NULL, -- תאריך
  `eventMessage` VARCHAR(255) NOT NULL, -- פירוט האירוע
  `type` ENUM('מפגש', 'מפגש מרחוק', 'הגשה', 'תזכורת', 'ביטול מפגש') NOT NULL, -- סוג האירוע
  `importance` TINYINT NOT NULL CHECK (`importance` BETWEEN 1 AND 3), -- רמת חשיבות (1 עד 3)
  `visible` BOOLEAN NOT NULL DEFAULT TRUE, -- האם להציג את האירוע בלוח
  PRIMARY KEY (`id`), -- מפתח ראשי
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) -- אינדקס ייחודי
);

