CREATE DATABASE  IF NOT EXISTS `forgottenkingdom` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
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
  `enemy_id` int NOT NULL AUTO_INCREMENT,
  `enemy_name` varchar(45) NOT NULL,
  `HP` int NOT NULL,
  `attack` int NOT NULL,
  `level` int NOT NULL,
  `world_id` int NOT NULL,
  PRIMARY KEY (`enemy_id`),
  UNIQUE KEY `enemy_id_UNIQUE` (`enemy_id`),
  KEY `enemy-player_idx` (`world_id`),
  CONSTRAINT `enemy-player` FOREIGN KEY (`world_id`) REFERENCES `players` (`player_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enemies`
--

LOCK TABLES `enemies` WRITE;
/*!40000 ALTER TABLE `enemies` DISABLE KEYS */;
/*!40000 ALTER TABLE `enemies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `enemy_types`
--

DROP TABLE IF EXISTS `enemy_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `enemy_types` (
  `enemy_type_id` varchar(45) NOT NULL,
  `enemy_name` varchar(45) DEFAULT NULL,
  `HP` int NOT NULL,
  `attack` int NOT NULL,
  `level` int NOT NULL,
  PRIMARY KEY (`enemy_type_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `enemy_types`
--

LOCK TABLES `enemy_types` WRITE;
/*!40000 ALTER TABLE `enemy_types` DISABLE KEYS */;
/*!40000 ALTER TABLE `enemy_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `players`
--

DROP TABLE IF EXISTS `players`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `players` (
  `player_id` int NOT NULL AUTO_INCREMENT,
  `player_name` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `password` varchar(45) NOT NULL,
  `HP` int NOT NULL,
  `money` int NOT NULL DEFAULT '0',
  `world_name` varchar(45) NOT NULL,
  `tool_id` int DEFAULT NULL,
  `stone_count` int NOT NULL DEFAULT '0',
  `wood_count` int NOT NULL DEFAULT '0',
  `coal_count` int NOT NULL DEFAULT '0',
  `iron_count` int NOT NULL DEFAULT '0',
  `wheat_count` int NOT NULL DEFAULT '0',
  `fish_count` int NOT NULL DEFAULT '0',
  PRIMARY KEY (`player_id`),
  UNIQUE KEY `player_id_UNIQUE` (`player_id`),
  KEY `player-tool_idx` (`tool_id`),
  CONSTRAINT `player-tool` FOREIGN KEY (`tool_id`) REFERENCES `tools` (`tool_id`)
) ENGINE=InnoDB AUTO_INCREMENT=57 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `players`
--

LOCK TABLES `players` WRITE;
/*!40000 ALTER TABLE `players` DISABLE KEYS */;
INSERT INTO `players` VALUES (38,'Arminka','example@example.com','name',100,0,'valami',NULL,0,0,0,0,0,0),(39,'Arminka','example@example.com','name',100,0,'valami',NULL,0,0,0,0,0,0),(40,'Arminka','example@example.com','name',100,0,'valami',NULL,0,0,0,0,0,0),(41,'Arminka','example@example.com','name',100,0,'valami',NULL,0,0,0,0,0,0),(42,'Arminka','example@example.com','name',100,0,'valami',NULL,0,0,0,0,0,0),(43,'Arminka','example@example.com','password',100,0,'valami',NULL,0,0,0,0,0,0),(44,'Roland','roland@roland.com','valami01',100,0,'valami',NULL,0,0,0,0,0,0),(45,'Roland','roland@roland.com','valami01',100,0,'valami',NULL,0,0,0,0,0,0),(46,'Roland','roland@roland.com','valami01',100,0,'valami',NULL,0,0,0,0,0,0),(47,'Roland','roland@roland.com','valami01',100,0,'valami',NULL,0,0,0,0,0,0),(48,'Roland','roland@roland.com','valami01',100,0,'valami',NULL,0,0,0,0,0,0),(49,'Roland','roland@roland.com','valami01',100,0,'valami',NULL,0,0,0,0,0,0),(50,'Roland','roland@rolad.com','valami01',100,0,'valami',NULL,0,0,0,0,0,0),(51,'Roland','roland@rola.com','valami01',100,0,'valami',NULL,0,0,0,0,0,0),(52,'Roland','roland@rola.com','valami01',100,0,'valami',NULL,0,0,0,0,0,0),(53,'Roland','roland@rola.com','valami01',100,0,'valami',NULL,0,0,0,0,0,0),(54,'Roland','roland@rol.com','valami01',100,0,'valami',NULL,0,0,0,0,0,0),(55,'Roland','roland@rl.com','valami01',100,0,'valami',NULL,0,0,0,0,0,0),(56,'null','undefined','undefined',100,0,'valami',NULL,0,0,0,0,0,0);
/*!40000 ALTER TABLE `players` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quest_improvements`
--

DROP TABLE IF EXISTS `quest_improvements`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quest_improvements` (
  `quest_id` int NOT NULL,
  `player_id` int NOT NULL,
  `is_completed` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`quest_id`,`player_id`),
  KEY `improv-player_idx` (`player_id`),
  CONSTRAINT `improv-player` FOREIGN KEY (`player_id`) REFERENCES `players` (`player_id`),
  CONSTRAINT `improv-quest` FOREIGN KEY (`quest_id`) REFERENCES `quests` (`quest_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quest_improvements`
--

LOCK TABLES `quest_improvements` WRITE;
/*!40000 ALTER TABLE `quest_improvements` DISABLE KEYS */;
/*!40000 ALTER TABLE `quest_improvements` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quests`
--

DROP TABLE IF EXISTS `quests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quests` (
  `quest_id` int NOT NULL AUTO_INCREMENT,
  `quest_name` varchar(45) NOT NULL,
  `description` varchar(45) NOT NULL,
  `ismainstory` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`quest_id`),
  UNIQUE KEY `quest_id_UNIQUE` (`quest_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
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
  `resident_id` int NOT NULL AUTO_INCREMENT,
  `resident_name` varchar(45) NOT NULL,
  `building_name` varchar(45) NOT NULL,
  `building_level` int NOT NULL DEFAULT '0',
  `building_type` varchar(45) NOT NULL,
  `job_name` varchar(45) NOT NULL,
  `world_id` int NOT NULL,
  `quest_id` int DEFAULT NULL,
  PRIMARY KEY (`resident_id`),
  UNIQUE KEY `resident_id_UNIQUE` (`resident_id`),
  KEY `resident-player_idx` (`world_id`),
  KEY `resident-quest_idx` (`quest_id`),
  CONSTRAINT `resident-player` FOREIGN KEY (`world_id`) REFERENCES `players` (`player_id`),
  CONSTRAINT `resident-quest` FOREIGN KEY (`quest_id`) REFERENCES `quests` (`quest_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
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
  `tool_id` int NOT NULL AUTO_INCREMENT,
  `tool_attack` int NOT NULL,
  `tool_level` int NOT NULL,
  PRIMARY KEY (`tool_id`),
  UNIQUE KEY `tool_id_UNIQUE` (`tool_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
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

-- Dump completed on 2023-11-15 14:31:01
