-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: vacationdb
-- ------------------------------------------------------
-- Server version	8.0.23

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
-- Table structure for table `car_rental`
--

DROP TABLE IF EXISTS `car_rental`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `car_rental` (
  `Car_Rentalid` int NOT NULL AUTO_INCREMENT,
  `Car_Name` varchar(45) DEFAULT NULL,
  `Vacation_location_id` int NOT NULL,
  PRIMARY KEY (`Car_Rentalid`),
  KEY `fk_Car_Rental_Vacation_location1_idx` (`Vacation_location_id`),
  CONSTRAINT `fk_Car_Rental_Vacation_location1` FOREIGN KEY (`Vacation_location_id`) REFERENCES `vacation_location` (`Vacation_locationid`)
) ENGINE=InnoDB AUTO_INCREMENT=110 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `car_rental`
--

LOCK TABLES `car_rental` WRITE;
/*!40000 ALTER TABLE `car_rental` DISABLE KEYS */;
INSERT INTO `car_rental` VALUES (100,'Toyota Corolla',1),(101,'Chevy Blazer',2),(102,'BMW X5',3),(103,'Honda Civic',4),(104,'Hyundai Elantra',5),(105,'GMC Yukon',6),(106,'Lambourghini uris',7),(107,'Tesla Model Y',8),(108,'Mclaern 570s',9),(109,'Rolls Royce Phantom',10);
/*!40000 ALTER TABLE `car_rental` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-23 21:53:14
