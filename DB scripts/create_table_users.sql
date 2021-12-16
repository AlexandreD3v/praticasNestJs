CREATE TABLE `users-api`.`users` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL,
  `phone` VARCHAR(45) NULL,
  `cpf` VARCHAR(45) NULL,
  `logradouro` VARCHAR(45) NULL,
  `city` VARCHAR(45) NULL,
  `state` VARCHAR(45) NULL,
  `is_ative` TINYINT NULL,
  PRIMARY KEY (`id`));