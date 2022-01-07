-- DropForeignKey
ALTER TABLE `role_for_the_movie` DROP FOREIGN KEY `role_for_the_movie_moviesId_fkey`;

-- DropForeignKey
ALTER TABLE `role_for_the_movie` DROP FOREIGN KEY `role_for_the_movie_personId_fkey`;

-- AddForeignKey
ALTER TABLE `role_for_the_movie` ADD CONSTRAINT `role_for_the_movie_moviesId_fkey` FOREIGN KEY (`moviesId`) REFERENCES `movies`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `role_for_the_movie` ADD CONSTRAINT `role_for_the_movie_personId_fkey` FOREIGN KEY (`personId`) REFERENCES `person`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
