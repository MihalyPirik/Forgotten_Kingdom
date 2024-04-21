-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: localhost
-- Létrehozás ideje: 2024. Ápr 21. 13:56
-- Kiszolgáló verziója: 10.5.21-MariaDB-0+deb11u1
-- PHP verzió: 8.2.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Adatbázis: `forgottenkingdom`
--
CREATE DATABASE IF NOT EXISTS `forgottenkingdom` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `forgottenkingdom`;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `enemies`
--

CREATE TABLE `enemies` (
  `enemy_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `objX` double NOT NULL DEFAULT 0,
  `objY` double NOT NULL DEFAULT 0,
  `blockX` int(11) NOT NULL DEFAULT 0,
  `blockY` int(11) NOT NULL DEFAULT 0,
  `HP` int(11) DEFAULT NULL,
  `world_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `enemy_type_id` int(11) DEFAULT NULL,
  `isInterior` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `enemy_types`
--

CREATE TABLE `enemy_types` (
  `enemy_type_id` int(11) NOT NULL,
  `enemy_name` varchar(255) NOT NULL,
  `HP` double NOT NULL,
  `attack` double NOT NULL,
  `level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `enemy_types`
--

INSERT INTO `enemy_types` (`enemy_type_id`, `enemy_name`, `HP`, `attack`, `level`) VALUES
(1, 'Skeleton', 30, 5, 1),
(2, 'Goblin', 60, 10, 1),
(3, 'Troll', 90, 15, 1);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `inventory`
--

CREATE TABLE `inventory` (
  `amount` int(11) DEFAULT NULL,
  `item` varchar(255) NOT NULL,
  `player_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `items`
--

CREATE TABLE `items` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `items`
--

INSERT INTO `items` (`name`) VALUES
('Coal'),
('Fish'),
('Iron'),
('Stone'),
('Wheat'),
('Wood');

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `offers`
--

CREATE TABLE `offers` (
  `offer_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `offeredType` varchar(255) NOT NULL,
  `offeredAmount` int(11) NOT NULL,
  `soughtType` varchar(255) NOT NULL,
  `soughtAmount` int(11) NOT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `player_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `players`
--

CREATE TABLE `players` (
  `player_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `player_name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `HP` double NOT NULL DEFAULT 100,
  `money` double NOT NULL DEFAULT 100,
  `world_name` varchar(255) DEFAULT 'New World',
  `objX` double NOT NULL DEFAULT 0,
  `objY` double NOT NULL DEFAULT 0,
  `blockX` int(11) NOT NULL DEFAULT 0,
  `blockY` int(11) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `quests`
--

CREATE TABLE `quests` (
  `quest_name` varchar(255) NOT NULL,
  `mainstory_group` varchar(255) DEFAULT NULL,
  `is_mainstory` int(11) NOT NULL DEFAULT 0,
  `category` enum('Collector','Conversation','Exploring','Killer') NOT NULL,
  `blockX` int(11) DEFAULT NULL,
  `blockY` int(11) DEFAULT NULL,
  `target_amount` int(11) DEFAULT NULL,
  `target_resident` varchar(255) DEFAULT NULL,
  `item` varchar(255) DEFAULT NULL,
  `enemy_type` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `quests`
--

INSERT INTO `quests` (`quest_name`, `mainstory_group`, `is_mainstory`, `category`, `blockX`, `blockY`, `target_amount`, `target_resident`, `item`, `enemy_type`) VALUES
('Eight', NULL, 8, 'Collector', NULL, NULL, 100, NULL, 'Iron', NULL),
('Fifth', NULL, 5, 'Killer', NULL, NULL, 10, NULL, NULL, 2),
('First', NULL, 1, 'Conversation', NULL, NULL, 1, 'Arthur', NULL, NULL),
('Fourth', NULL, 4, 'Collector', NULL, NULL, 100, NULL, 'Stone', NULL),
('Ninth', NULL, 9, 'Exploring', 3, 0, 1, NULL, NULL, NULL),
('Second', NULL, 2, 'Killer', NULL, NULL, 10, NULL, NULL, 1),
('Seventh', NULL, 7, 'Killer', NULL, NULL, 10, NULL, NULL, 3),
('Sixth', NULL, 6, 'Collector', NULL, NULL, 100, NULL, 'Wood', NULL),
('Tenth', NULL, 10, 'Exploring', 0, 0, 1, NULL, NULL, NULL),
('Third', NULL, 3, 'Conversation', NULL, NULL, 1, 'Ulric', NULL, NULL);

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `quest_stat`
--

CREATE TABLE `quest_stat` (
  `is_completed` tinyint(1) DEFAULT 0,
  `is_active` tinyint(1) NOT NULL DEFAULT 0,
  `currentProgress` int(11) DEFAULT 0,
  `quest_id` varchar(255) NOT NULL,
  `player_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `residents`
--

CREATE TABLE `residents` (
  `resident_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `resident_name` varchar(255) NOT NULL,
  `profession` enum('Kereskedő','Kovács','Farmer','Szörnyvadász','Lovag','Mágus','Halász','Favágó','Boszorkány') NOT NULL,
  `objX` double NOT NULL DEFAULT 0,
  `objY` double NOT NULL DEFAULT 0,
  `blockX` int(11) NOT NULL DEFAULT 0,
  `blockY` int(11) NOT NULL DEFAULT 0,
  `quest_id` varchar(255) DEFAULT NULL,
  `world_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `isInterior` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tools`
--

CREATE TABLE `tools` (
  `tool_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `player_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `tool_type_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tool_types`
--

CREATE TABLE `tool_types` (
  `tool_type_id` int(11) NOT NULL,
  `tool_name` varchar(255) NOT NULL,
  `level` int(11) NOT NULL,
  `attack` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- A tábla adatainak kiíratása `tool_types`
--

INSERT INTO `tool_types` (`tool_type_id`, `tool_name`, `level`, `attack`) VALUES
(1, 'Kard 1', 1, 10),
(3, 'Kard 2', 2, 20),
(4, 'Kard 3', 3, 30);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `enemies`
--
ALTER TABLE `enemies`
  ADD PRIMARY KEY (`enemy_id`),
  ADD KEY `world_id` (`world_id`),
  ADD KEY `enemy_type_id` (`enemy_type_id`);

--
-- A tábla indexei `enemy_types`
--
ALTER TABLE `enemy_types`
  ADD PRIMARY KEY (`enemy_type_id`);

--
-- A tábla indexei `inventory`
--
ALTER TABLE `inventory`
  ADD PRIMARY KEY (`item`,`player_id`),
  ADD KEY `player_id` (`player_id`);

--
-- A tábla indexei `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`name`);

--
-- A tábla indexei `offers`
--
ALTER TABLE `offers`
  ADD PRIMARY KEY (`offer_id`),
  ADD KEY `player_id` (`player_id`);

--
-- A tábla indexei `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`player_id`),
  ADD UNIQUE KEY `players_email_unique` (`email`);

--
-- A tábla indexei `quests`
--
ALTER TABLE `quests`
  ADD PRIMARY KEY (`quest_name`),
  ADD KEY `item` (`item`),
  ADD KEY `enemy_type` (`enemy_type`);

--
-- A tábla indexei `quest_stat`
--
ALTER TABLE `quest_stat`
  ADD PRIMARY KEY (`quest_id`,`player_id`),
  ADD KEY `player_id` (`player_id`);

--
-- A tábla indexei `residents`
--
ALTER TABLE `residents`
  ADD PRIMARY KEY (`resident_id`),
  ADD KEY `world_id` (`world_id`);

--
-- A tábla indexei `tools`
--
ALTER TABLE `tools`
  ADD PRIMARY KEY (`tool_id`),
  ADD UNIQUE KEY `tools_player_id_tool_type_id_unique` (`player_id`,`tool_type_id`),
  ADD KEY `tool_type_id` (`tool_type_id`);

--
-- A tábla indexei `tool_types`
--
ALTER TABLE `tool_types`
  ADD PRIMARY KEY (`tool_type_id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `enemy_types`
--
ALTER TABLE `enemy_types`
  MODIFY `enemy_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT a táblához `tool_types`
--
ALTER TABLE `tool_types`
  MODIFY `tool_type_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `enemies`
--
ALTER TABLE `enemies`
  ADD CONSTRAINT `enemies_ibfk_7` FOREIGN KEY (`world_id`) REFERENCES `players` (`player_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `enemies_ibfk_8` FOREIGN KEY (`enemy_type_id`) REFERENCES `enemy_types` (`enemy_type_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Megkötések a táblához `inventory`
--
ALTER TABLE `inventory`
  ADD CONSTRAINT `inventory_ibfk_1` FOREIGN KEY (`item`) REFERENCES `items` (`name`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `inventory_ibfk_2` FOREIGN KEY (`player_id`) REFERENCES `players` (`player_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `offers`
--
ALTER TABLE `offers`
  ADD CONSTRAINT `offers_ibfk_1` FOREIGN KEY (`player_id`) REFERENCES `players` (`player_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `quests`
--
ALTER TABLE `quests`
  ADD CONSTRAINT `quests_ibfk_7` FOREIGN KEY (`item`) REFERENCES `items` (`name`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `quests_ibfk_8` FOREIGN KEY (`enemy_type`) REFERENCES `enemy_types` (`enemy_type_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Megkötések a táblához `quest_stat`
--
ALTER TABLE `quest_stat`
  ADD CONSTRAINT `quest_stat_ibfk_1` FOREIGN KEY (`quest_id`) REFERENCES `quests` (`quest_name`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `quest_stat_ibfk_2` FOREIGN KEY (`player_id`) REFERENCES `players` (`player_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `residents`
--
ALTER TABLE `residents`
  ADD CONSTRAINT `residents_ibfk_1` FOREIGN KEY (`world_id`) REFERENCES `players` (`player_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `tools`
--
ALTER TABLE `tools`
  ADD CONSTRAINT `tools_ibfk_7` FOREIGN KEY (`player_id`) REFERENCES `players` (`player_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tools_ibfk_8` FOREIGN KEY (`tool_type_id`) REFERENCES `tool_types` (`tool_type_id`) ON DELETE SET NULL ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
