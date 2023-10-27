CREATE DATABASE  IF NOT EXISTS `forgottenkingdom` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `forgottenkingdom`;
-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: forgottenkingdom
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `enemies`
--

DROP TABLE IF EXISTS `enemies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enemies` (
  `enemy_id` int NOT NULL,
  `enemy_name` varchar(45) DEFAULT NULL,
  `HP` int NOT NULL,
  `attack` int NOT NULL,
  `level` int NOT NULL,
  `world_id` int NOT NULL,
  PRIMARY KEY (`enemy_id`),
  KEY `enemy-world_idx` (`world_id`),
  CONSTRAINT `enemy-world` FOREIGN KEY (`world_id`) REFERENCES `players` (`world_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enemies`
--

LOCK TABLES `enemies` WRITE;
/*!40000 ALTER TABLE `enemies` DISABLE KEYS */;
/*!40000 ALTER TABLE `enemies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players` (
  `player_id` int NOT NULL,
  `player_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `world_id` int NOT NULL,
  `tool_id` int DEFAULT NULL,
  `HP` int NOT NULL DEFAULT '0',
  `stone_count` int NOT NULL DEFAULT '0',
  `wood_count` int NOT NULL DEFAULT '0',
  `coal_count` int NOT NULL DEFAULT '0',
  `iron_count` int NOT NULL DEFAULT '0',
  `wheat_count` int NOT NULL DEFAULT '0',
  `fish_count` int NOT NULL DEFAULT '0',
  `money_count` int NOT NULL DEFAULT '0',
  `world_name` varchar(45) NOT NULL,
  PRIMARY KEY (`player_id`),
  UNIQUE KEY `world_id_UNIQUE` (`world_id`),
  KEY `player-tool` (`tool_id`),
  CONSTRAINT `player-tool` FOREIGN KEY (`tool_id`) REFERENCES `tools` (`tool_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `questimprovement`
--

DROP TABLE IF EXISTS `questimprovement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `questimprovement` (
  `quest_id` int NOT NULL,
  `player_id` int NOT NULL,
  `IsCompleted` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`quest_id`,`player_id`),
  KEY `improvement-player_idx` (`player_id`),
  CONSTRAINT `improvement-player` FOREIGN KEY (`player_id`) REFERENCES `players` (`player_id`),
  CONSTRAINT `improvement-quest` FOREIGN KEY (`quest_id`) REFERENCES `quests` (`quest_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `questimprovement`
--

LOCK TABLES `questimprovement` WRITE;
/*!40000 ALTER TABLE `questimprovement` DISABLE KEYS */;
/*!40000 ALTER TABLE `questimprovement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quests`
--

DROP TABLE IF EXISTS `quests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quests` (
  `quest_id` int NOT NULL,
  `quest_name` varchar(45) NOT NULL,
  `description` varchar(45) DEFAULT NULL,
  `IsMainStory` tinyint NOT NULL,
  PRIMARY KEY (`quest_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quests`
--

LOCK TABLES `quests` WRITE;
/*!40000 ALTER TABLE `quests` DISABLE KEYS */;
/*!40000 ALTER TABLE `quests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `residents`
--

DROP TABLE IF EXISTS `residents`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `residents` (
  `npc_id` int NOT NULL,
  `npc_name` varchar(45) NOT NULL,
  `buidling_id` int NOT NULL,
  `job_name` varchar(45) NOT NULL,
  `quest_id` int DEFAULT NULL,
  `building_name` varchar(45) NOT NULL,
  `building_type` varchar(45) NOT NULL,
  `building_level` int NOT NULL DEFAULT '1',
  PRIMARY KEY (`npc_id`),
  KEY `resident-quest_idx` (`quest_id`),
  KEY `building-world_idx` (`buidling_id`),
  CONSTRAINT `building-world` FOREIGN KEY (`buidling_id`) REFERENCES `players` (`world_id`),
  CONSTRAINT `resident-quest` FOREIGN KEY (`quest_id`) REFERENCES `quests` (`quest_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `residents`
--

LOCK TABLES `residents` WRITE;
/*!40000 ALTER TABLE `residents` DISABLE KEYS */;
/*!40000 ALTER TABLE `residents` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tools`
--

DROP TABLE IF EXISTS `tools`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tools` (
  `tool_id` int NOT NULL,
  `tool_attack` int NOT NULL,
  `tool_level` varchar(45) NOT NULL,
  PRIMARY KEY (`tool_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tools`
--

LOCK TABLES `tools` WRITE;
/*!40000 ALTER TABLE `tools` DISABLE KEYS */;
/*!40000 ALTER TABLE `tools` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-10-27 16:41:50
