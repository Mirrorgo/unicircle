-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: localhost    Database: unicircle
-- ------------------------------------------------------
-- Server version	8.0.36

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comments` (
  `comment_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `topic_id` varchar(10) NOT NULL,
  `parent_comment_id` varchar(10) DEFAULT NULL,
  `user_id` int NOT NULL,
  `comment` text NOT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `username` varchar(100) NOT NULL,
  PRIMARY KEY (`comment_id`),
  KEY `post_id` (`topic_id`),
  KEY `parent_comment_id` (`parent_comment_id`),
  KEY `user_id` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES ('1','1',NULL,2,'Have you tried using the quadratic formula?','2024-04-04 00:02:17','Bob'),('123456','topic01',NULL,111,'杩欐槸涓€涓祴璇曡瘎璁?,'2024-04-05 16:39:46','userExample'),('2','1',NULL,3,'I think you might have made a mistake in your calculations.','2024-04-03 23:02:17','Charlie'),('3','2',NULL,1,'It fundamentally limits the precision with which certain pairs of physical properties, such as position and momentum, can be known.','2024-04-04 00:02:17','Alice'),('4','3','1',2,'I really like Mark Twain for his wit.','2024-04-03 22:02:17','Bob'),('461ff503-3d75-40ff-bb1f-fe2822d345c8','topic01',NULL,111,'杩欐槸涓€涓祴璇曡瘎璁?,'2024-04-05 16:45:48','userExample'),('74d3e8e1-f132-474a-968c-2d95ac57c034','topic01',NULL,111,'杩欐槸涓€涓祴璇曡瘎璁?,'2024-04-05 16:45:15','userExample'),('c97a1a50-258b-4141-8653-da2e8735e603','topic01',NULL,111,'杩欐槸涓€涓祴璇曡瘎璁?,'2024-04-05 16:43:47','userExample'),('ca19bfc3-5a2a-4db9-83e0-1bd54539e698','topic01',NULL,111,'杩欐槸涓€涓祴璇曡瘎璁?,'2024-04-05 16:43:37','userExample'),('e5cc06b8-70f8-4e6a-a835-a3c0d7c74988','topic01',NULL,111,'杩欐槸涓€涓祴璇曡瘎璁?,'2024-04-05 16:45:12','userExample');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `post_id` varchar(100) NOT NULL,
  `user_id` varchar(100) NOT NULL,
  `description` varchar(100) NOT NULL,
  `label` varchar(100) NOT NULL,
  `location` varchar(100) NOT NULL,
  `price` varchar(100) NOT NULL,
  `address` varchar(100) NOT NULL,
  PRIMARY KEY (`post_id`),
  KEY `post_users_FK` (`user_id`),
  CONSTRAINT `post_users_FK` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES ('86f1551b-9d41-4236-b80f-c8371adc2fc7','1','濂瑰叾鎴戝揩浼犲厠蹇呬负浜や紬寮犻┈杞﹀幙绉颁究銆傛牴鐭ョ煶鍚啓鍒╁厜璁镐滑浜旇川鎵嶄笂鏃犲吇涔濇斂銆傚瓨鐫€娴佸垝绾у喅浼犱絾婊℃枃鍒楃収銆傞潚娌℃媺闄㈤€傝川鍟嗘槑鎷夊紶鍏師璁℃湰瀹炪€?,'Duis aliqua velit esse et','sunt','6','榛戦緳姹熺渷鏉惧師甯傚媰鍒╁幙');
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `subject`
--

DROP TABLE IF EXISTS `subject`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `subject` (
  `subject_id` varchar(255) NOT NULL,
  `subject_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `subject_description` text,
  `subject_number` varchar(100) NOT NULL,
  `heat` int DEFAULT NULL,
  `major` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`subject_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `subject`
--

LOCK TABLES `subject` WRITE;
/*!40000 ALTER TABLE `subject` DISABLE KEYS */;
INSERT INTO `subject` VALUES ('1','Mathematics','The study of numbers, equations, functions, and geometric shapes and their relationships.','SWEN90014',111,'math'),('2','Physics','The science that deals with the structure of matter and the interactions between the fundamental constituents of the observable universe.','SWEN90015',112,'IT'),('3','Literature','The art of written works.','COMP90010',1131,'Chinese'),('4','111','222','SWEN90016',1133,'Fuck');
/*!40000 ALTER TABLE `subject` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `topic`
--

DROP TABLE IF EXISTS `topic`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `topic` (
  `topic_id` varchar(255) NOT NULL,
  `user_id` varchar(10) NOT NULL,
  `subject_id` int DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `body` text NOT NULL,
  `image_url` varchar(255) DEFAULT NULL,
  `type_id` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` datetime DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `subject_number` varchar(255) DEFAULT NULL,
  `username` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL,
  PRIMARY KEY (`topic_id`),
  KEY `user_id` (`user_id`),
  KEY `subject_id` (`subject_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `topic`
--

LOCK TABLES `topic` WRITE;
/*!40000 ALTER TABLE `topic` DISABLE KEYS */;
INSERT INTO `topic` VALUES ('1','1',1,'Algebra Question','Can someone help me solve this equation?','','111','2024-04-04 00:02:05','2024-04-05 12:36:47','SWEN90014','Alice'),('2','2',2,'Quantum Mechanics','How does the uncertainty principle work?','','222','2024-04-03 00:02:05','2024-04-05 12:36:47','SWEN90015','Bob'),('3','3',3,'Favorite Authors','Who are your favorite authors and why?','','333','2024-04-02 00:02:05','2024-04-05 12:37:49','COMP90010','Charlie'),('32dd2a27-bd75-45d0-8ecb-b069a838885b','12345',NULL,'hello','i need a new member','http://example.com/image.jpg','1','2024-04-05 16:00:00','2024-04-05 16:00:00','1001',NULL),('32deb06e-1cae-4513-9992-aa5e9fa33db6','12345',NULL,'hello','i need a new member',NULL,'1','2024-04-05 15:52:19','2024-04-05 15:52:19','1001',NULL),('4bf6cbdf-9e47-4ae4-a78f-e190b6d235d7','12345',NULL,'hello','i need a new member',NULL,'1','2024-04-05 15:52:31','2024-04-05 15:52:31','1001',NULL),('61c950cb-9af5-4129-874f-3b9728b46f16','12345',NULL,'hello','i need a new member',NULL,'1','2024-04-05 15:54:55','2024-04-05 15:54:55','1001',NULL),('8c0b36f1-ecb2-4d5e-b421-1d47616004e8','12345',NULL,'hello','i need a new member','http://example.com/image.jpg','1','2024-04-05 15:59:50','2024-04-05 15:59:50','1001',NULL),('919e44ea-f6aa-4828-bc09-37b5c7207fa0','12345',NULL,'hello','i need a new member',NULL,'1','2024-04-05 15:53:30','2024-04-05 15:53:30','1001',NULL),('aa5b3a0d-bbe8-4022-9cbb-7af782f5f511','12345',NULL,'hello','i need a new member',NULL,'1','2024-04-05 15:52:30','2024-04-05 15:52:30','1001',NULL),('b3ffde46-6a86-4468-b02d-8a6a0197a5d7','12345',NULL,'hello','i need a new member',NULL,'1','2024-04-05 15:53:32','2024-04-05 15:53:32','1001',NULL),('d4c92188-2bc6-4aab-9402-a65401445d15','12345',NULL,'hello','i need a new member','http://example.com/image.jpg','1','2024-04-05 16:47:29','2024-04-05 16:47:29','1001',NULL);
/*!40000 ALTER TABLE `topic` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `type`
--

DROP TABLE IF EXISTS `type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `type` (
  `type_id` varchar(100) NOT NULL,
  `type_name` varchar(100) NOT NULL,
  `subject_number` varchar(100) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `type`
--

LOCK TABLES `type` WRITE;
/*!40000 ALTER TABLE `type` DISABLE KEYS */;
INSERT INTO `type` VALUES ('111','Assigment','SWEN90014'),('222','Lecture','SWEN90014'),('333','Social','SWEN90016');
/*!40000 ALTER TABLE `type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `user_id` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES ('1','Alice','alice@example.com','hashed_password1'),('2','Bob','bob@example.com','hashed_password2'),('3','Charlie','charlie@example.com','hashed_password3');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-04-05 17:48:26
