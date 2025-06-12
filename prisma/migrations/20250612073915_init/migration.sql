-- CreateTable
CREATE TABLE `actor` (
    `actor_id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(45) NOT NULL,
    `last_name` VARCHAR(45) NOT NULL,
    `last_update` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `idx_actor_last_name`(`last_name`),
    PRIMARY KEY (`actor_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `address` (
    `address_id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `address` VARCHAR(50) NOT NULL,
    `address2` VARCHAR(50) NULL,
    `district` VARCHAR(20) NOT NULL,
    `city_id` SMALLINT UNSIGNED NOT NULL,
    `postal_code` VARCHAR(10) NULL,
    `phone` VARCHAR(20) NOT NULL,
    `last_update` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `idx_fk_city_id`(`city_id`),
    PRIMARY KEY (`address_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category` (
    `category_id` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(25) NOT NULL,
    `last_update` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `city` (
    `city_id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `city` VARCHAR(50) NOT NULL,
    `country_id` SMALLINT UNSIGNED NOT NULL,
    `last_update` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `idx_fk_country_id`(`country_id`),
    PRIMARY KEY (`city_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `country` (
    `country_id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `country` VARCHAR(50) NOT NULL,
    `last_update` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`country_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `customer` (
    `customer_id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `store_id` TINYINT UNSIGNED NOT NULL,
    `first_name` VARCHAR(45) NOT NULL,
    `last_name` VARCHAR(45) NOT NULL,
    `email` VARCHAR(50) NULL,
    `address_id` SMALLINT UNSIGNED NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `create_date` DATETIME(0) NOT NULL,
    `last_update` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `idx_fk_address_id`(`address_id`),
    INDEX `idx_fk_store_id`(`store_id`),
    INDEX `idx_last_name`(`last_name`),
    PRIMARY KEY (`customer_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `film` (
    `film_id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(128) NOT NULL,
    `description` TEXT NULL,
    `release_year` YEAR NULL,
    `language_id` TINYINT UNSIGNED NOT NULL,
    `original_language_id` TINYINT UNSIGNED NULL,
    `rental_duration` TINYINT UNSIGNED NOT NULL DEFAULT 3,
    `rental_rate` DECIMAL(4, 2) NOT NULL DEFAULT 4.99,
    `length` SMALLINT UNSIGNED NULL,
    `replacement_cost` DECIMAL(5, 2) NOT NULL DEFAULT 19.99,
    `rating` ENUM('G', 'PG', 'PG_13', 'R', 'NC_17') NULL DEFAULT 'G',
    `special_features` VARCHAR(191) NULL,
    `last_update` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `idx_fk_language_id`(`language_id`),
    INDEX `idx_fk_original_language_id`(`original_language_id`),
    INDEX `idx_title`(`title`),
    PRIMARY KEY (`film_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `film_actor` (
    `actor_id` SMALLINT UNSIGNED NOT NULL,
    `film_id` SMALLINT UNSIGNED NOT NULL,
    `last_update` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `idx_fk_film_id`(`film_id`),
    PRIMARY KEY (`actor_id`, `film_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `film_category` (
    `film_id` SMALLINT UNSIGNED NOT NULL,
    `category_id` TINYINT UNSIGNED NOT NULL,
    `last_update` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_film_category_category`(`category_id`),
    PRIMARY KEY (`film_id`, `category_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `film_text` (
    `film_id` SMALLINT UNSIGNED NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `description` TEXT NULL,

    FULLTEXT INDEX `idx_title_description`(`title`, `description`),
    PRIMARY KEY (`film_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `inventory` (
    `inventory_id` MEDIUMINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `film_id` SMALLINT UNSIGNED NOT NULL,
    `store_id` TINYINT UNSIGNED NOT NULL,
    `last_update` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `idx_fk_film_id`(`film_id`),
    INDEX `idx_store_id_film_id`(`store_id`, `film_id`),
    PRIMARY KEY (`inventory_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `language` (
    `language_id` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` CHAR(20) NOT NULL,
    `last_update` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    PRIMARY KEY (`language_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment` (
    `payment_id` SMALLINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `customer_id` SMALLINT UNSIGNED NOT NULL,
    `staff_id` TINYINT UNSIGNED NOT NULL,
    `rental_id` INTEGER NULL,
    `amount` DECIMAL(5, 2) NOT NULL,
    `payment_date` DATETIME(0) NOT NULL,
    `last_update` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `fk_payment_rental`(`rental_id`),
    INDEX `idx_fk_customer_id`(`customer_id`),
    INDEX `idx_fk_staff_id`(`staff_id`),
    PRIMARY KEY (`payment_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rental` (
    `rental_id` INTEGER NOT NULL AUTO_INCREMENT,
    `rental_date` DATETIME(0) NOT NULL,
    `inventory_id` MEDIUMINT UNSIGNED NOT NULL,
    `customer_id` SMALLINT UNSIGNED NOT NULL,
    `return_date` DATETIME(0) NULL,
    `staff_id` TINYINT UNSIGNED NOT NULL,
    `last_update` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `idx_fk_customer_id`(`customer_id`),
    INDEX `idx_fk_inventory_id`(`inventory_id`),
    INDEX `idx_fk_staff_id`(`staff_id`),
    UNIQUE INDEX `rental_date`(`rental_date`, `inventory_id`, `customer_id`),
    PRIMARY KEY (`rental_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `staff` (
    `staff_id` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(45) NOT NULL,
    `last_name` VARCHAR(45) NOT NULL,
    `address_id` SMALLINT UNSIGNED NOT NULL,
    `picture` BLOB NULL,
    `email` VARCHAR(50) NULL,
    `store_id` TINYINT UNSIGNED NOT NULL,
    `active` BOOLEAN NOT NULL DEFAULT true,
    `username` VARCHAR(16) NOT NULL,
    `password` VARCHAR(40) NULL,
    `last_update` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `idx_fk_address_id`(`address_id`),
    INDEX `idx_fk_store_id`(`store_id`),
    PRIMARY KEY (`staff_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `store` (
    `store_id` TINYINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `manager_staff_id` TINYINT UNSIGNED NOT NULL,
    `address_id` SMALLINT UNSIGNED NOT NULL,
    `last_update` TIMESTAMP(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `idx_unique_manager`(`manager_staff_id`),
    INDEX `idx_fk_address_id`(`address_id`),
    PRIMARY KEY (`store_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `address` ADD CONSTRAINT `fk_address_city` FOREIGN KEY (`city_id`) REFERENCES `city`(`city_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `city` ADD CONSTRAINT `fk_city_country` FOREIGN KEY (`country_id`) REFERENCES `country`(`country_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customer` ADD CONSTRAINT `fk_customer_address` FOREIGN KEY (`address_id`) REFERENCES `address`(`address_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `customer` ADD CONSTRAINT `fk_customer_store` FOREIGN KEY (`store_id`) REFERENCES `store`(`store_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `film` ADD CONSTRAINT `fk_film_language` FOREIGN KEY (`language_id`) REFERENCES `language`(`language_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `film` ADD CONSTRAINT `fk_film_language_original` FOREIGN KEY (`original_language_id`) REFERENCES `language`(`language_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `film_actor` ADD CONSTRAINT `fk_film_actor_actor` FOREIGN KEY (`actor_id`) REFERENCES `actor`(`actor_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `film_actor` ADD CONSTRAINT `fk_film_actor_film` FOREIGN KEY (`film_id`) REFERENCES `film`(`film_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `film_category` ADD CONSTRAINT `fk_film_category_category` FOREIGN KEY (`category_id`) REFERENCES `category`(`category_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `film_category` ADD CONSTRAINT `fk_film_category_film` FOREIGN KEY (`film_id`) REFERENCES `film`(`film_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventory` ADD CONSTRAINT `fk_inventory_film` FOREIGN KEY (`film_id`) REFERENCES `film`(`film_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inventory` ADD CONSTRAINT `fk_inventory_store` FOREIGN KEY (`store_id`) REFERENCES `store`(`store_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `fk_payment_customer` FOREIGN KEY (`customer_id`) REFERENCES `customer`(`customer_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `fk_payment_rental` FOREIGN KEY (`rental_id`) REFERENCES `rental`(`rental_id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `payment` ADD CONSTRAINT `fk_payment_staff` FOREIGN KEY (`staff_id`) REFERENCES `staff`(`staff_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rental` ADD CONSTRAINT `fk_rental_customer` FOREIGN KEY (`customer_id`) REFERENCES `customer`(`customer_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rental` ADD CONSTRAINT `fk_rental_inventory` FOREIGN KEY (`inventory_id`) REFERENCES `inventory`(`inventory_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rental` ADD CONSTRAINT `fk_rental_staff` FOREIGN KEY (`staff_id`) REFERENCES `staff`(`staff_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `staff` ADD CONSTRAINT `fk_staff_address` FOREIGN KEY (`address_id`) REFERENCES `address`(`address_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `staff` ADD CONSTRAINT `fk_staff_store` FOREIGN KEY (`store_id`) REFERENCES `store`(`store_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `store` ADD CONSTRAINT `fk_store_address` FOREIGN KEY (`address_id`) REFERENCES `address`(`address_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `store` ADD CONSTRAINT `fk_store_staff` FOREIGN KEY (`manager_staff_id`) REFERENCES `staff`(`staff_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
