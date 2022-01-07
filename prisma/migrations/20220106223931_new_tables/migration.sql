/*
  Warnings:

  - You are about to drop the `movie_person_role` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `movie_person_role` DROP FOREIGN KEY `Movie_person_role_moviesId_fkey`;

-- DropForeignKey
ALTER TABLE `movie_person_role` DROP FOREIGN KEY `Movie_person_role_personId_fkey`;

-- DropForeignKey
ALTER TABLE `movie_person_role` DROP FOREIGN KEY `Movie_person_role_rolesId_fkey`;

-- DropTable
DROP TABLE `movie_person_role`;

-- CreateTable
CREATE TABLE `role_for_the_movie` (
    `id` INTEGER NOT NULL,
    `rolesId` INTEGER NOT NULL,
    `moviesId` INTEGER NOT NULL,
    `personId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `role_for_the_movie` ADD CONSTRAINT `role_for_the_movie_rolesId_fkey` FOREIGN KEY (`rolesId`) REFERENCES `roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `role_for_the_movie` ADD CONSTRAINT `role_for_the_movie_moviesId_fkey` FOREIGN KEY (`moviesId`) REFERENCES `movies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `role_for_the_movie` ADD CONSTRAINT `role_for_the_movie_personId_fkey` FOREIGN KEY (`personId`) REFERENCES `person`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
