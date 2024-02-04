-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Gép: localhost
-- Létrehozás ideje: 2024. Feb 04. 19:44
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
  `enemy_type_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `world_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `enemy_types`
--

CREATE TABLE `enemy_types` (
  `enemy_type_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `enemy_name` varchar(255) NOT NULL,
  `HP` double NOT NULL,
  `attack` double NOT NULL,
  `level` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `players`
--

CREATE TABLE `players` (
  `player_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `player_name` varchar(255) DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `HP` double NOT NULL DEFAULT 0,
  `money` double NOT NULL DEFAULT 0,
  `world_name` varchar(255) DEFAULT NULL,
  `stone` int(11) NOT NULL DEFAULT 0,
  `wood` int(11) NOT NULL DEFAULT 0,
  `coal` int(11) NOT NULL DEFAULT 0,
  `iron` int(11) NOT NULL DEFAULT 0,
  `wheat` int(11) NOT NULL DEFAULT 0,
  `fish` int(11) NOT NULL DEFAULT 0,
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
  `quest_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `quest_name` varchar(255) DEFAULT 'Küldetés',
  `description` varchar(255) NOT NULL,
  `ismainstory` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `quest_statistics`
--

CREATE TABLE `quest_statistics` (
  `is_completed` tinyint(1) NOT NULL DEFAULT 0,
  `player_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `quest_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `residents`
--

CREATE TABLE `residents` (
  `resident_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `resident_name` varchar(255) NOT NULL,
  `profession` varchar(255) DEFAULT NULL,
  `objX` double NOT NULL DEFAULT 0,
  `objY` double NOT NULL DEFAULT 0,
  `blockX` int(11) NOT NULL DEFAULT 0,
  `blockY` int(11) NOT NULL DEFAULT 0,
  `world_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL,
  `quest_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tools`
--

CREATE TABLE `tools` (
  `player_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `tool_type_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `tool_types`
--

CREATE TABLE `tool_types` (
  `tool_type_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `tool_name` varchar(255) NOT NULL,
  `level` int(11) NOT NULL,
  `attack` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `enemies`
--
ALTER TABLE `enemies`
  ADD PRIMARY KEY (`enemy_id`),
  ADD UNIQUE KEY `enemies_world_id_enemy_type_id_unique` (`enemy_type_id`,`world_id`),
  ADD KEY `world_id` (`world_id`);

--
-- A tábla indexei `enemy_types`
--
ALTER TABLE `enemy_types`
  ADD PRIMARY KEY (`enemy_type_id`);

--
-- A tábla indexei `players`
--
ALTER TABLE `players`
  ADD PRIMARY KEY (`player_id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- A tábla indexei `quests`
--
ALTER TABLE `quests`
  ADD PRIMARY KEY (`quest_id`);

--
-- A tábla indexei `quest_statistics`
--
ALTER TABLE `quest_statistics`
  ADD PRIMARY KEY (`player_id`,`quest_id`),
  ADD KEY `quest_id` (`quest_id`);

--
-- A tábla indexei `residents`
--
ALTER TABLE `residents`
  ADD PRIMARY KEY (`resident_id`),
  ADD UNIQUE KEY `resident_name` (`resident_name`),
  ADD KEY `world_id` (`world_id`),
  ADD KEY `quest_id` (`quest_id`);

--
-- A tábla indexei `tools`
--
ALTER TABLE `tools`
  ADD PRIMARY KEY (`player_id`,`tool_type_id`),
  ADD KEY `tool_type_id` (`tool_type_id`);

--
-- A tábla indexei `tool_types`
--
ALTER TABLE `tool_types`
  ADD PRIMARY KEY (`tool_type_id`);

--
-- Megkötések a kiírt táblákhoz
--

--
-- Megkötések a táblához `enemies`
--
ALTER TABLE `enemies`
  ADD CONSTRAINT `enemies_ibfk_1` FOREIGN KEY (`enemy_type_id`) REFERENCES `enemy_types` (`enemy_type_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `enemies_ibfk_2` FOREIGN KEY (`world_id`) REFERENCES `players` (`player_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `quest_statistics`
--
ALTER TABLE `quest_statistics`
  ADD CONSTRAINT `quest_statistics_ibfk_1` FOREIGN KEY (`player_id`) REFERENCES `players` (`player_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `quest_statistics_ibfk_2` FOREIGN KEY (`quest_id`) REFERENCES `quests` (`quest_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Megkötések a táblához `residents`
--
ALTER TABLE `residents`
  ADD CONSTRAINT `residents_ibfk_1` FOREIGN KEY (`world_id`) REFERENCES `players` (`player_id`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `residents_ibfk_2` FOREIGN KEY (`quest_id`) REFERENCES `quests` (`quest_id`) ON DELETE SET NULL ON UPDATE CASCADE;

--
-- Megkötések a táblához `tools`
--
ALTER TABLE `tools`
  ADD CONSTRAINT `tools_ibfk_1` FOREIGN KEY (`player_id`) REFERENCES `players` (`player_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `tools_ibfk_2` FOREIGN KEY (`tool_type_id`) REFERENCES `tool_types` (`tool_type_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
