-- MariaDB dump 10.18  Distrib 10.5.7-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: iot
-- ------------------------------------------------------
-- Server version	10.5.7-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `contents_eng`
--

DROP TABLE IF EXISTS `contents_eng`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contents_eng` (
  `id_content_ENG` int(11) NOT NULL AUTO_INCREMENT,
  `text` text DEFAULT NULL,
  `picture_URL` text DEFAULT NULL,
  PRIMARY KEY (`id_content_ENG`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contents_eng`
--

LOCK TABLES `contents_eng` WRITE;
/*!40000 ALTER TABLE `contents_eng` DISABLE KEYS */;
/*!40000 ALTER TABLE `contents_eng` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `contents_fra`
--

DROP TABLE IF EXISTS `contents_fra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `contents_fra` (
  `id_content_FRA` int(11) NOT NULL AUTO_INCREMENT,
  `text` text DEFAULT NULL,
  `picture_URL` text DEFAULT NULL,
  PRIMARY KEY (`id_content_FRA`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `contents_fra`
--

LOCK TABLES `contents_fra` WRITE;
/*!40000 ALTER TABLE `contents_fra` DISABLE KEYS */;
INSERT INTO `contents_fra` VALUES (1,'Ceci est le titre de la page','https://www.vinci-energies.be/content/uploads/sites/6/2016/09/VF-logo-sidebar.png');
/*!40000 ALTER TABLE `contents_fra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id_product` int(11) NOT NULL AUTO_INCREMENT,
  `brand` text DEFAULT NULL,
  `name` text DEFAULT NULL,
  `power_supply` text DEFAULT NULL,
  `price` text DEFAULT NULL,
  `data` text DEFAULT NULL,
  `solution_type` text DEFAULT NULL,
  PRIMARY KEY (`id_product`)
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Adeunis','Analog','Pile interchangeable','89','2 Entrées 0-10V / 4-20mA','\r'),(2,'Adeunis','Analog PWR','Alimentation externe','99','2 Entrées 0-10V / 4-20mA','\r'),(3,'Adeunis','Comfort ','Pile interchangeable','89','\"Température ; Humidité ; Bouton ; Contact sec\"','\"Santé et environnement de travail  ;\"\r'),(4,'Adeunis','Comfort et ouverture/fermeture','Pile interchangeable','119','\"Température ; Humidité ; Bouton ; Ouverture/fermeture\"','\"Santé et environnement de travail  ;\"\r'),(5,'Adeunis','Contact Sensor (Dry Contacts)','Pile interchangeable','109','Ouverture/fermeture ','\"Fréquentation et affluence  ;   Rondes digitalisées  ;\"\r'),(6,'Adeunis','Current Sensor 100A (Analog)','Pile interchangeable','134','Intensité de courant 100A','\"Consommations énergétiques   ;   Décret tertiare  ;   Rondes digitalisées  ;\"\r'),(7,'Adeunis','Current Sensor 50A (Analog)','Pile interchangeable','129','Intensité de courant 50A','\"Consommations énergétiques   ;   Décret tertiare  ;   Rondes digitalisées  ;\"\r'),(8,'Adeunis','Delta P','Pile interchangeable','139','\"Pression différentielle ; 2 E/S contact sec ; 0-10V\"','\"Santé et environnement de travail  ;   Traitement de l\'air  ;\"\r'),(9,'Adeunis','Double Level Sensor (Dry Contacts)','Pile interchangeable','119','Double niveau fluide','\"Inondation   ;\"\r'),(10,'Adeunis','Dry Contacts','Pile interchangeable','79','4 Entrées/Sorties contact sec','\"Rondes digitalisées  ;   Gestion des collectes  ;\"\r'),(11,'Adeunis','Field Test Device (FTD)','Batterie rechargeable','189','Qualité réseau LoRaWAN','\r'),(12,'Adeunis','Modbus','Alimentation externe','189','Modbus RTU','\"Consommations énergétiques   ;   Décret tertiare  ;   Rondes digitalisées  ;\"\r'),(13,'Adeunis','Motion','Pile interchangeable','99','\"Présence ; Luminosité ; Bouton ; Contact sec\"','\"Disponibilité des espaces collaboratifs   ;   Fréquentation et affluence  ;   Etude d\'occupation  ;   Nettoyage à l\'usage  ;\"\r'),(14,'Adeunis','Motion et ouverture/fermeture','Pile interchangeable','129','\"Présence ; Luminosité ; Bouton ; Ouverture/fermeture\"','\"Disponibilité des espaces collaboratifs   ;   Fréquentation et affluence  ;   Etude d\'occupation  ;   Nettoyage à l\'usage  ;\"\r'),(15,'Adeunis','Pulse','Pile soudée','89','Impulsions de comptage ','\"Consommations énergétiques   ;   Décret tertiare  ;   Rondes digitalisées  ;\"\r'),(16,'Adeunis','Pulse ATEX','Pile soudée','99','Impulsions de comptage gaz','\"Consommations énergétiques   ;   Décret tertiare  ;   Rondes digitalisées  ;\"\r'),(17,'Adeunis','Pulse ATEX Binder','Pile soudée','129','Impulsions de comptage gaz avec connecteur Binder DIN 6p','\"Consommations énergétiques   ;   Décret tertiare  ;   Rondes digitalisées  ;\"\r'),(18,'Adeunis','Pulse ATEX Gazpar','Pile soudée','129','Impulsions de comptage gaz avec connecteur Gazpar 2p','\"Consommations énergétiques   ;   Décret tertiare  ;   Rondes digitalisées  ;\"\r'),(19,'Adeunis','Temp','Pile interchangeable','109','Température déportée + ambiance','\"Santé et environnement de travail  ;   Légionelle ECS  ;\"\r'),(20,'Adeunis','Temp 2S ','Pile interchangeable','139','Température déportée x 2','\"Légionelle ECS  ;\"\r'),(21,'Adeunis','TIC','Auto alimenté','179','Télé Information Client compteurs électriques','\"Consommations énergétiques   ;   Décret tertiare  ;   Rondes digitalisées  ;\"\r'),(22,'Adeunis','Water Leak Cable (Dry Contacts)','Pile interchangeable','149','Eau au sol, le long d\'un mur ou autour d\'un tuyau','\"Inondation   ;\"\r'),(23,'Adeunis','Water Leak Spot (Dry Contacts)','Pile interchangeable','189','Eau au sol, à un endroit précis','\"Inondation   ;\"\r'),(24,'Axioma','Qalcosonic W1','Pile soudée','75','Compteur d\'eau à ultrasons LoRaWAN intégré','\"Consommations énergétiques   ;   Décret tertiare  ;   Rondes digitalisées  ;\"\r'),(25,'Bosch','Parking Lot Sensor (PLS)','Pile soudée','198','Présence véhicule','\"Disponibilité des places de parking  ;   Fréquentation et affluence  ;\"\r'),(26,'Elsys','ELT Ultrasonic','Pile interchangeable','275','Distance','\"Inondation   ;   Rondes digitalisées  ;   Gestion des collectes  ;\"\r'),(27,'Elsys','EMS','Pile interchangeable','55','Température, humidité, accélération, ouverture, fuite','\"Fréquentation et affluence  ;   Santé et environnement de travail  ;   Inondation   ;\"\r'),(28,'Elsys','EMS Door','Pile interchangeable','51','Accélération, ouverture','\"Fréquentation et affluence  ;\"\r'),(29,'Elsys','ERS','Pile interchangeable','76','Température, humidité, luminosité, mouvement','\"Disponibilité des espaces collaboratifs   ;   Fréquentation et affluence  ;   Etude d\'occupation  ;   Santé et environnement de travail  ;   Nettoyage à l\'usage  ;\"\r'),(30,'Elsys','ERS CO2','Pile interchangeable','168','Température, humidité, luminosité, mouvement, CO2','\"Disponibilité des espaces collaboratifs   ;   Fréquentation et affluence  ;   Etude d\'occupation  ;   Santé et environnement de travail  ;   Nettoyage à l\'usage  ;   Traitement de l\'air  ;\"\r'),(31,'Elsys','ERS CO2 Lite','Pile interchangeable','155','Température, humidité, CO2','\"Santé et environnement de travail  ;   Traitement de l\'air  ;\"\r'),(32,'Elsys','ERS COV','Pile interchangeable','177','Température, humidité, luminosité, mouvement, COV','\"Disponibilité des espaces collaboratifs   ;   Fréquentation et affluence  ;   Etude d\'occupation  ;   Santé et environnement de travail  ;   Nettoyage à l\'usage  ;   Traitement de l\'air  ;\"\r'),(33,'Elsys','ERS Desk','Pile interchangeable','81','Température, humidité, luminosité, mouvement, occupation','\"Disponibilité des espaces collaboratifs   ;   Fréquentation et affluence  ;   Etude d\'occupation  ;   Santé et environnement de travail  ;   Nettoyage à l\'usage  ;\"\r'),(34,'Elsys','ERS Eye','Pile interchangeable','140','Température, humidité, luminosité, mouvement, occupation','\"Disponibilité des espaces collaboratifs   ;   Fréquentation et affluence  ;   Etude d\'occupation  ;   Santé et environnement de travail  ;   Nettoyage à l\'usage  ;\"\r'),(35,'Elsys','ERS Lite','Pile interchangeable','53','Température, humidité','\"Santé et environnement de travail  ;\"\r'),(36,'Elsys','ERS Sound','Pile interchangeable','152','Température, humidité, luminosité, mouvement, son','\"Disponibilité des espaces collaboratifs   ;   Fréquentation et affluence  ;   Etude d\'occupation  ;   Santé et environnement de travail  ;   Nettoyage à l\'usage  ;\"\r'),(37,'Eurecam','Eurecam','','630','','\r'),(38,'GreenCityzen','HummBox','','','','\r'),(39,'GreenMe','GreenMe V2','Alimentation externe','172','','\r'),(40,'GreenMe','GreenMe V2 avec option CO2','Alimentation externe','252','','\r'),(41,'Ineo Sense','ACS Padlock','Pile interchangeable','219','Ouverture/fermeture d\'un accès restreint','\r'),(42,'Ineo Sense','ACS Report LED','Pile interchangeable','178,5','Indicateur lumineux','\r'),(43,'Ineo Sense','ACS Switch','Pile interchangeable','64,8','Ouverture/fermeture, position','\r'),(44,'Ineo Sense','ACS Switch Buzz','Pile interchangeable','91','Alerte, inclinaison, mouvement','\r'),(45,'Ineo Sense','ACS Switch Hygro','Pile interchangeable','83','Température, humidité','\"Santé et environnement de travail  ;\"\r'),(46,'Ineo Sense','ACS Switch PIR','Pile interchangeable','86,7','Présence','\"Disponibilité des espaces collaboratifs   ;   Fréquentation et affluence  ;   Etude d\'occupation  ;\"\r'),(47,'Ineo Sense','ACS Switch Range','Pile interchangeable','92','Distance','\"Disponibilité des espaces collaboratifs   ;   Disponibilité des places de parking  ;   Fréquentation et affluence  ;   Rondes digitalisées  ;   Gestion des collectes  ;\"\r'),(48,'Ineo Sense','ESG Logger NRJ','Pile interchangeable','390','Consommation électrique 3 phases','\"Consommations énergétiques   ;\"\r'),(49,'Ineo Sense','TRK Tracer GPS','Pile interchangeable','96','Position GPS','\r'),(50,'Lucy Zodion','Ki. Node One','Alimentation externe','99','Contrôle éclairage urbain','\"Consommations énergétiques   ;   Rondes digitalisées  ;\"\r'),(51,'Lucy Zodion','Ki. Node Two (GPS, Bluetooth)','Alimentation externe','123','Contrôle éclairage urbain','\"Consommations énergétiques   ;   Rondes digitalisées  ;\"\r'),(52,'MCF88','Energy Meter plug with On/Off','Alimentation externe','176','Prise contrôlée à distance, consommation électrique','\"Consommations énergétiques   ;\"\r'),(53,'MCF88','Indoor environmental sensor','Pile interchangeable','147','Température, humidité, pression','\"Santé et environnement de travail  ;\"\r'),(54,'MCF88','Indoor environmental sensor with VOC & LUX','Pile interchangeable','170','Température, humidité, luminosité, COV','\"Santé et environnement de travail  ;   Traitement de l\'air  ;\"\r'),(55,'MCF88','Indoor environmental sensor with VOC, LUX & CO2','Pile interchangeable','350','Température, humidité, luminosité, COV, CO2','\"Santé et environnement de travail  ;   Traitement de l\'air  ;\"\r'),(56,'MCF88','Mono-Phase Energy Metering with I/O','Alimentation externe','141','1 Entrée/Sortie 230Vac, consommation électrique 1 phase','\"Consommations énergétiques   ;\"\r'),(57,'MCF88','Multi I/O module','Alimentation externe','299','16 Entrées / 8 Sorties contact sec','\r'),(58,'MCF88','Outdoor environmental sensor','Pile interchangeable','233','Température, humidité, pression','\"Santé et environnement de travail  ;\"\r'),(59,'MCF88','Outdoor PM and environmental sensor','Batterie rechargeable','563','Température, humidité, pression, PM','\"Santé et environnement de travail  ;   Traitement de l\'air  ;\"\r'),(60,'MCF88','Weather Station','Batterie rechargeable','2375','Température, humidité, pression, pluie, rosée, vent','\"Santé et environnement de travail  ;\"\r'),(61,'MCF88','Weather Station Basic','Alimentation externe','1938','Température, humidité, pression, pluie, rosée, vent','\"Santé et environnement de travail  ;\"\r'),(62,'MCF88','Weather Station Basic with PM sensor','Batterie rechargeable','2250','Température, humidité, pression, pluie, rosée, vent, PM','\"Santé et environnement de travail  ;\"\r'),(63,'MCF88','Weather Station with PM sensor','Alimentation externe','2688','Température, humidité, pression, pluie, rosée, vent, PM','\"Santé et environnement de travail  ;\"\r'),(64,'MCF88','Wireless actuator','Alimentation externe','113','1 Entrée/Sortie 230Vac','\r'),(65,'Multitech','LoRaWAN Gateway Conduit Ethernet','Alimentation externe','471','','\r'),(66,'Multitech','LoRaWAN Gateway Conduit Ethernet + 4G','Alimentation externe','657','','\r'),(67,'Multitech','LoRaWAN Gateway Conduit AP Ethernet','Alimentation externe','247','','\r'),(68,'Multitech','LoRaWAN Gateway Conduit AP Ethernet + 4G','Alimentation externe','365','','\r'),(69,'Multitech','LoRaWAN Gateway Conduit IP67 Ethernet','Alimentation externe','970','','\r'),(70,'Multitech','LoRaWAN Gateway Conduit IP67 Ethernet + 4G','Alimentation externe','1109','','\r'),(71,'NKE','Bob','Pile soudée','580','Vibration (maintenance prédictive)','\r'),(72,'Skiply','Smilio A – 3 smileys','Pile interchangeable','139','Satisfaction','\"Satisfaction des usagers  ;\"\r'),(73,'Skiply','Smilio A – Annulation (2 boutons)','Pile interchangeable','109','Annulation d\'action, badgeage','\"Rondes digitalisées  ;   Rondes digitalisées  ;\"\r'),(74,'Skiply','Smilio A – Multiservices (5 boutons)','Pile interchangeable','109','Multiservices','\"Rondes digitalisées  ;   Rondes digitalisées  ;\"\r'),(75,'Skiply','Smilio A – Pointage (5 boutons)','Pile interchangeable','109','Preuve de présence','\"Rondes digitalisées  ;   Rondes digitalisées  ;\"\r'),(76,'Skiply','Smilio A - Validation (3 boutons)','Pile interchangeable','109','Demande/annulation d\'une action, badgeage','\"Rondes digitalisées  ;   Rondes digitalisées  ;\"\r'),(77,'Strega','Vanne connectée autonome Full All-in-one DN15','Pile interchangeable','306','Ouverture/fermeture vanne','\"Consommations énergétiques   ;\"\r'),(78,'Strega','Vanne connectée autonome Full All-in-one DN20','Pile interchangeable','314','Ouverture/fermeture vanne','\"Consommations énergétiques   ;\"\r'),(79,'Strega','Vanne connectée autonome Full All-in-one DN25','Pile interchangeable','326','Ouverture/fermeture vanne','\"Consommations énergétiques   ;\"\r'),(80,'Strega','Vanne connectée autonome Full All-in-one DN50','Pile interchangeable','558','Ouverture/fermeture vanne','\"Consommations énergétiques   ;\"\r'),(81,'Strega','Vanne connectée autonome Full All-in-one DN80','Pile interchangeable','820','Ouverture/fermeture vanne','\"Consommations énergétiques   ;\"\r'),(82,'Strega','Vanne connectée autonome Full Remote DN15','Pile interchangeable','306','Ouverture/fermeture vanne','\"Consommations énergétiques   ;\"\r'),(83,'Strega','Vanne connectée autonome Full Remote DN20','Pile interchangeable','314','Ouverture/fermeture vanne','\"Consommations énergétiques   ;\"\r'),(84,'Strega','Vanne connectée autonome Full Remote DN25','Pile interchangeable','326','Ouverture/fermeture vanne','\"Consommations énergétiques   ;\"\r'),(85,'Strega','Vanne connectée autonome Full Remote DN50','Pile interchangeable','558','Ouverture/fermeture vanne','\"Consommations énergétiques   ;\"\r'),(86,'Strega','Vanne connectée autonome Full Remote DN80','Pile interchangeable','820','Ouverture/fermeture vanne','\"Consommations énergétiques   ;\"\r'),(87,'Tekelek','Tekelek TEK-766 Oil/Liquid','Pile soudée','144','Niveau de liquide','\"Rondes digitalisées  ;   Gestion des collectes  ;\"\r'),(88,'Tekelek','Tekelek TEK-790 GPL','Pile soudée','211','Niveau de gaz liquide','\"Rondes digitalisées  ;   Gestion des collectes  ;\"\r'),(89,'Tekelek','Tekelek TEK-839 Waste/Bin','Pile soudée','300','Niveau de solides','\"Rondes digitalisées  ;   Gestion des collectes  ;\"\r'),(90,'Wattsense','Box (avec abonnement 1 an jusqu\'à 100 capteurs IoT)','Alimentation externe','719','','\r'),(91,'Wattsense','Hub','Alimentation externe','895','','\r'),(92,'z','Lecteur optique (fiabilité mesure...)','','','Impulsions de comptage ','\"Consommations énergétiques   ;   Décret tertiare  ;   Rondes digitalisées  ;\"\r');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id_user` int(11) NOT NULL AUTO_INCREMENT,
  `username` text NOT NULL,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `password` text NOT NULL,
  `status` text NOT NULL,
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'KN22','Karim','NANAA','toto22','admin');
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

-- Dump completed on 2020-11-17 17:58:20
