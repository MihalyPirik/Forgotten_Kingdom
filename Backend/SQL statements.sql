-- SELECT

-- 1. Lekérdezi az adott felhasználó adatait (login)
SELECT `player_id`, `player_name`, `email`, `password`, `HP`, `money`, `world_name`, `stone`, `wood`, `coal`, `iron`, `wheat`, `fish`, `objX`, `objY`, `blockX`, `blockY` FROM `players` AS `Player` WHERE `Player`.`email` = 'teszt@teszt.hu';

-- 2. Lekérdezi az adott játékos összes adatát
SELECT `player_name`, `HP`, `money`, `world_name`, `stone`, `wood`, `coal`, `iron`, `wheat`, `fish`, `objX`, `objY`, `blockX`, `blockY` FROM `players` AS `Player` WHERE `Player`.`player_id` = 'da8fea31-c732-11ee-b1e4-00155ddb1e0d';

-- 3. Lekérdezi az adott játékos összes küldetését
SELECT `QuestStatistics`.`is_completed`, `QuestStatistics`.`is_active`, `QuestStatistics`.`player_id`, `QuestStatistics`.`quest_id`, `Quest`.`quest_id` AS `Quest.quest_id`, `Quest`.`quest_name` AS `Quest.quest_name`, `Quest`.`description` AS `Quest.description`, `Quest`.`ismainstory` AS `Quest.ismainstory` FROM `quest_statistics` AS `QuestStatistics` LEFT OUTER JOIN `quests` AS `Quest` ON `QuestStatistics`.`quest_id` = `Quest`.`quest_id` WHERE `QuestStatistics`.`player_id` = 'da8fea31-c732-11ee-b1e4-00155ddb1e0d';

-- 4. Lekérdezi az adott játékos összes aktív küldetését
SELECT `QuestStatistics`.`is_completed`, `QuestStatistics`.`is_active`, `QuestStatistics`.`player_id`, `QuestStatistics`.`quest_id`, `Quest`.`quest_id` AS `Quest.quest_id`, `Quest`.`quest_name` AS `Quest.quest_name`, `Quest`.`description` AS `Quest.description`, `Quest`.`ismainstory` AS `Quest.ismainstory` FROM `quest_statistics` AS `QuestStatistics` LEFT OUTER JOIN `quests` AS `Quest` ON `QuestStatistics`.`quest_id` = `Quest`.`quest_id` WHERE `QuestStatistics`.`player_id` = 'da8fea31-c732-11ee-b1e4-00155ddb1e0d' AND `QuestStatistics`.`is_active` = 1;

-- 5. Lekérdezi az adott játékos raktárát
SELECT `stone`, `wood`, `coal`, `iron`, `wheat`, `fish` FROM `players` AS `Player` WHERE `Player`.`player_id` = 'da8fea31-c732-11ee-b1e4-00155ddb1e0d';

-- 6. Lekérdezi az adott játékos összes szörnyét
SELECT `Enemy`.`enemy_id`, `Enemy`.`objX`, `Enemy`.`objY`, `Enemy`.`blockX`, `Enemy`.`blockY`, `Enemy`.`HP`, `EnemyType`.`enemy_type_id` AS `EnemyType.enemy_type_id`, `EnemyType`.`enemy_name` AS `EnemyType.enemy_name`, `EnemyType`.`HP` AS `EnemyType.HP`, `EnemyType`.`attack` AS `EnemyType.attack`, `EnemyType`.`level` AS `EnemyType.level` FROM `enemies` AS `Enemy` LEFT OUTER JOIN `enemy_types` AS `EnemyType` ON `Enemy`.`enemy_type_id` = `EnemyType`.`enemy_type_id`;

-- 7. Lekérdezi az adott játékos összes szörnyét egy adott területen
SELECT `Enemy`.`enemy_id`, `Enemy`.`objX`, `Enemy`.`objY`, `Enemy`.`blockX`, `Enemy`.`blockY`, `Enemy`.`HP`, `EnemyType`.`enemy_type_id` AS `EnemyType.enemy_type_id`, `EnemyType`.`enemy_name` AS `EnemyType.enemy_name`, `EnemyType`.`HP` AS `EnemyType.HP`, `EnemyType`.`attack` AS `EnemyType.attack`, `EnemyType`.`level` AS `EnemyType.level` FROM `enemies` AS `Enemy` LEFT OUTER JOIN `enemy_types` AS `EnemyType` ON `Enemy`.`enemy_type_id` = `EnemyType`.`enemy_type_id` WHERE `Enemy`.`blockX` = '1' AND `Enemy`.`blockY` = '1';

-- 8. Lekérdezi az összes falusit az adott játékosnál
SELECT `Resident`.`resident_id`, `Resident`.`resident_name`, `Resident`.`profession`, `Resident`.`objX`, `Resident`.`objY`, `Resident`.`blockX`, `Resident`.`blockY`, `Resident`.`quest_id`, `Quest`.`quest_id` AS `Quest.quest_id`, `Quest`.`quest_name` AS `Quest.quest_name`, `Quest`.`description` AS `Quest.description`, `Quest`.`ismainstory` AS `Quest.ismainstory` FROM `residents` AS `Resident` LEFT OUTER JOIN `quests` AS `Quest` ON `Resident`.`quest_id` = `Quest`.`quest_id` WHERE `Resident`.`world_id` = '22f13800-d165-11ee-bd96-8fe2447f8a0c';

-- 9. Lekérdezi az összes falusit az adott játékosnál egy adott területen
SELECT `Resident`.`resident_id`, `Resident`.`resident_name`, `Resident`.`profession`, `Resident`.`objX`, `Resident`.`objY`, `Resident`.`blockX`, `Resident`.`blockY`, `Resident`.`quest_id`, `Quest`.`quest_id` AS `Quest.quest_id`, `Quest`.`quest_name` AS `Quest.quest_name`, `Quest`.`description` AS `Quest.description`, `Quest`.`ismainstory` AS `Quest.ismainstory` FROM `residents` AS `Resident` LEFT OUTER JOIN `quests` AS `Quest` ON `Resident`.`quest_id` = `Quest`.`quest_id` WHERE `Resident`.`world_id` = '22f13800-d165-11ee-bd96-8fe2447f8a0c' AND `Resident`.`blockX` = '0' AND `Resident`.`blockY` = '0';

-- 10. Lekérdezi az összes ajánlatot
SELECT `Market`.`offer_id`, `Market`.`offeredType`, `Market`.`offeredAmount`, `Market`.`soughtType`, `Market`.`soughtAmount`, `Market`.`createdAt`, `Market`.`updatedAt`, `Player`.`player_id` AS `Player.player_id`, `Player`.`player_name` AS `Player.player_name` FROM `offers` AS `Market` LEFT OUTER JOIN `players` AS `Player` ON `Market`.`player_id` = `Player`.`player_id`;

-- INSERT

-- 1. létrehoz egy új játékost
INSERT INTO `players` (`player_id`,`player_name`,`email`,`password`,`HP`,`money`,`world_name`,`stone`,`wood`,`coal`,`iron`,`wheat`,`fish`,`objX`,`objY`,`blockX`,`blockY`) VALUES (1,'asd','asd@asd.hu','asdasd',100,'asd',100,100,100,100,100,100,100,1,1,1,1);

-- 2. Létrehoz egy szörnyet
INSERT INTO `enemies` (`enemy_id`,`objX`,`objY`,`blockX`,`blockY`,`HP`,`world_id`,`enemy_type_id`) VALUES (?,?,?,?,?,?,?,?);

-- 3. Létrehoz egy falusit
INSERT INTO `residents` (`resident_id`,`resident_name`,`profession`,`objX`,`objY`,`blockX`,`blockY`,`world_id`,`quest_id`) VALUES (?,?,?,?,?,?,?,?,?);

-- 4. Létrehoz egy ajánlatot
INSERT INTO `offers` (`offer_id`,`offeredType`,`offeredAmount`,`soughtType`,`soughtAmount`,`createdAt`,`updatedAt`,`player_id`) VALUES (?,?,?,?,?,?,?,?);

-- UPDATE

-- 1. Módosítja az adott felhasználót
UPDATE `players` SET `player_name`=?,`email`=?,`password`=? WHERE `player_id` = ?;

-- 2. Módosítja az adott játékost
UPDATE `players` SET `player_name`=?,`HP`=?,`money`=?,`world_name`=?,`stone`=?,`wood`=?,`coal`=?,`iron`=?,`wheat`=?,`fish`=?,`objX`=?,`objY`=?,`blockX`=?,`blockY`=? WHERE `player_id` = ?;

-- 3. Módosítja az adott szörnyet
UPDATE `enemies` SET `objX`=?,`objY`=?,`blockX`=?,`blockY`=? WHERE `enemy_id` = ?;

-- 4. Módosítja az adott falusit
UPDATE `residents` SET `objX`=?,`objY`=?,`blockX`=?,`blockY`=?,`resident_name`=?,`profession`=? WHERE `resident_id` = ?;

-- 5. Módosítja az adott ajánlatot
UPDATE `offers` SET `offeredType`=?,`offeredAmount`=?,`soughtType`=?,`soughtAmount`=?,`updatedAt`=? WHERE `player_id` = ? AND `offer_id` = ?;