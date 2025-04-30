create table `maalot360db`.`taskForStudent` (
    `id` int AUTO_INCREMENT primary key,
    `taskId` int not null,
    `studentId` int not null,
    `studentName` varchar(255) not null,
    `fileName` varchar(255) not null,
    `content` text not null,
    `url` varchar(255) not null,
    `status` varchar(25) not null,
    `grade` int not null,
    `descriptionGrade` text not null,
    -- foreign key (taskId) references task(id),
    -- foreign key (studentId) references student(id)
);

INSERT INTO `maalot360db`.`taskForStudent` (`taskId`, `studentId`, `studentName`, `fileName`, `content`, `url`, `status`, `grade`, `descriptionGrade`) VALUES (1, 1, 'John Doe', 'assignment1.txt', 'This is the content of the assignment.', 'http://example.com/assignment1', 0, 0, 'No grade yet.');
INSERT INTO `maalot360db`.`taskForStudent` (`taskId`, `studentId`, `studentName`, `fileName`, `content`, `url`, `status`, `grade`, `descriptionGrade`) VALUES (2, 2, 'Jane Smith', 'assignment2.txt', 'This is the content of the assignment.', 'http://example.com/assignment2', 1, 85, 'Good job!');

