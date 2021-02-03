-- MariaDB dump 10.18  Distrib 10.5.7-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: iotdb
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
-- Table structure for table `cont_cadran`
--

DROP TABLE IF EXISTS `cont_cadran`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cont_cadran` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name_FR` text DEFAULT NULL,
  `name_en` text DEFAULT NULL,
  `color` text DEFAULT NULL,
  `picture_back` text DEFAULT NULL,
  `logo` text DEFAULT NULL,
  `circles` text DEFAULT NULL,
  `problem_fr` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cont_cadran`
--

LOCK TABLES `cont_cadran` WRITE;
/*!40000 ALTER TABLE `cont_cadran` DISABLE KEYS */;
/*!40000 ALTER TABLE `cont_cadran` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cont_offre_fra`
--

DROP TABLE IF EXISTS `cont_offre_fra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cont_offre_fra` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text DEFAULT NULL,
  `text` text DEFAULT NULL,
  `picture` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cont_offre_fra`
--

LOCK TABLES `cont_offre_fra` WRITE;
/*!40000 ALTER TABLE `cont_offre_fra` DISABLE KEYS */;
/*!40000 ALTER TABLE `cont_offre_fra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cont_solution_fra`
--

DROP TABLE IF EXISTS `cont_solution_fra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cont_solution_fra` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text DEFAULT NULL,
  `text_db` text DEFAULT NULL,
  `picture_db` text DEFAULT NULL,
  `problem` text DEFAULT NULL,
  `arg` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cont_solution_fra`
--

LOCK TABLES `cont_solution_fra` WRITE;
/*!40000 ALTER TABLE `cont_solution_fra` DISABLE KEYS */;
/*!40000 ALTER TABLE `cont_solution_fra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cost`
--

DROP TABLE IF EXISTS `cost`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cost` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text DEFAULT NULL,
  `price` text DEFAULT NULL,
  `type` text DEFAULT NULL,
  `company` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cost`
--

LOCK TABLES `cost` WRITE;
/*!40000 ALTER TABLE `cost` DISABLE KEYS */;
INSERT INTO `cost` VALUES (1,'LoRaWan','2','OPEX','Orange\r'),(2,'Box','448','CAPEX','Wattsense\r'),(3,'IoT','14','OPEX','Wattsense\r'),(4,'S','32','OPEX','Wattsense\r'),(5,'M','51','OPEX','Wattsense\r'),(6,'L','135','OPEX','Wattsense\r'),(7,'Satellite','14,4','OPEX','Wattsense\r'),(8,'S','10','OPEX','IoThink\r'),(9,'M','16','OPEX','IoThink\r'),(10,'L','21','OPEX','IoThink\r'),(11,'XL','25','OPEX','IoThink\r');
/*!40000 ALTER TABLE `cost` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `data`
--

DROP TABLE IF EXISTS `data`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `data` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text DEFAULT NULL,
  `points` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data`
--

LOCK TABLES `data` WRITE;
/*!40000 ALTER TABLE `data` DISABLE KEYS */;
INSERT INTO `data` VALUES (1,'2 Entrées 0-10V / 4-20mA','2\r'),(2,'Température','\r'),(3,'Humidité','\r'),(4,'Bouton','\r'),(5,'Contact sec','\r'),(6,'Ouverture/fermeture','\r'),(7,'Intensité de courant 100A','\r'),(8,'Intensité de courant 50A','\r'),(9,'Pression différentielle','\r'),(10,'2 E/S contact sec','\r'),(11,'0-10V','\r'),(12,'Double niveau fluide','\r'),(13,'4 Entrées/Sorties contact sec','\r'),(14,'Qualité réseau LoRaWAN','\r'),(15,'Modbus RTU','\r'),(16,'Présence','\r'),(17,'Bouton','\r'),(18,'Luminosité','\r'),(19,'Impulsions de comptage ','\r'),(20,'Impulsions de comptage gaz','\r'),(21,'Impulsions de comptage gaz avec connecteur Binder DIN 6p','\r'),(22,'Impulsions de comptage gaz avec connecteur Gazpar 2p','\r'),(23,'Température déportée + ambiance','\r'),(24,'Température déportée x 2','\r'),(25,'Télé Information Client compteurs électriques','\r'),(26,'Eau au sol, le long d\'un mur ou autour d\'un tuyau','\r'),(27,'Eau au sol, à un endroit précis','\r'),(28,'Compteur d\'eau à ultrasons LoRaWAN intégré','\r'),(29,'Présence véhicule','\r'),(30,'Distance','\r'),(31,'Accélération','\r'),(32,'Fuite','\r'),(33,'Mouvement','\r'),(34,'CO2','\r'),(35,'COV','\r'),(36,'Occupation','\r'),(37,'Son','\r'),(38,'Ouverture/fermeture d\'un accès restreint','\r'),(39,'Indicateur lumineux','\r'),(40,'Position','\r'),(41,'Alerte','\r'),(42,'Inclinaison','\r'),(43,'Consommation électrique 3 phases','\r'),(44,'Position GPS','\r'),(45,'Contrôle éclairage urbain','\r'),(46,'Prise contrôlée à distance','\r'),(47,'Consommation électrique','\r'),(48,'Pression','\r'),(49,'1 Entrée/Sortie 230Vac','\r'),(50,'16 Entrées / 8 Sorties contact sec','\r'),(51,'PM','\r'),(52,'Pluie','\r'),(53,'Rosée','\r'),(54,'Vent','\r'),(55,'Vibration (maintenance prédictive)','\r'),(56,'Satisfaction','\r'),(57,'Annulation d\'action','\r'),(58,'Badgeage','\r'),(59,'Multiservices','\r'),(60,'Preuve de présence','\r'),(61,'Demande/annulation d\'une action','\r'),(62,'Ouverture/fermeture vanne','\r'),(63,'Niveau de liquide','\r'),(64,'Niveau de gaz liquide','\r'),(65,'Niveau de solides','\r'),(66,'Impulsions de comptage ','\r');
/*!40000 ALTER TABLE `data` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `data_binding`
--

DROP TABLE IF EXISTS `data_binding`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `data_binding` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_product` int(11) DEFAULT NULL,
  `id_data` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_product` (`id_product`),
  KEY `FK_data` (`id_data`),
  CONSTRAINT `FK_data` FOREIGN KEY (`id_data`) REFERENCES `data` (`id`),
  CONSTRAINT `FK_product` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data_binding`
--

LOCK TABLES `data_binding` WRITE;
/*!40000 ALTER TABLE `data_binding` DISABLE KEYS */;
/*!40000 ALTER TABLE `data_binding` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `fk_binding`
--

DROP TABLE IF EXISTS `fk_binding`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `fk_binding` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_cadran` int(11) DEFAULT NULL,
  `id_offre` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_cadran` (`id_cadran`),
  KEY `id_offre` (`id_offre`),
  CONSTRAINT `fk_binding_ibfk_1` FOREIGN KEY (`id_cadran`) REFERENCES `cont_cadran` (`id`),
  CONSTRAINT `fk_binding_ibfk_2` FOREIGN KEY (`id_offre`) REFERENCES `cont_offre_fra` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fk_binding`
--

LOCK TABLES `fk_binding` WRITE;
/*!40000 ALTER TABLE `fk_binding` DISABLE KEYS */;
/*!40000 ALTER TABLE `fk_binding` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offre_binding`
--

DROP TABLE IF EXISTS `offre_binding`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `offre_binding` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_offre` int(11) DEFAULT NULL,
  `id_solution` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_offre` (`id_offre`),
  KEY `id_solution` (`id_solution`),
  CONSTRAINT `offre_binding_ibfk_1` FOREIGN KEY (`id_offre`) REFERENCES `cont_offre_fra` (`id`),
  CONSTRAINT `offre_binding_ibfk_2` FOREIGN KEY (`id_solution`) REFERENCES `cont_solution_fra` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offre_binding`
--

LOCK TABLES `offre_binding` WRITE;
/*!40000 ALTER TABLE `offre_binding` DISABLE KEYS */;
/*!40000 ALTER TABLE `offre_binding` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `products` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `brand` text DEFAULT NULL,
  `name` text DEFAULT NULL,
  `ref` text DEFAULT NULL,
  `ref_dataprint` text DEFAULT NULL,
  `power_supply` text DEFAULT NULL,
  `price` text DEFAULT NULL,
  `data` text DEFAULT NULL,
  `solution` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Adeunis','Analog','ARF8190BA','ARF8190BA','Pile interchangeable','89','2 Entrées 0-10V / 4-20mA','\r'),(2,'Adeunis','Analog PWR','ARF8200AA','ARF8200AA','Alimentation externe','99','2 Entrées 0-10V / 4-20mA','\r'),(3,'Adeunis','Comfort ','ARF8275AA','ARF8275AA','Pile interchangeable','89','\"Température ; Humidité ; Bouton ; Contact sec\"','\"Santé et environnement de travail  ;\"\r'),(4,'Adeunis','Comfort et ouverture/fermeture','ARF8275AA-B01','ARF8275AAB01','Pile interchangeable','119','\"Température ; Humidité ; Bouton ; Ouverture/fermeture\"','\"Santé et environnement de travail  ;\"\r'),(5,'Adeunis','Contact Sensor (Dry Contacts)','ARF8170BA-B01','ARF8170BAB01','Pile interchangeable','109','Ouverture/fermeture ','\"Fréquentation et affluence  ;   Rondes digitalisées  ;\"\r'),(6,'Adeunis','Current Sensor 100A (Analog)','ARF8190BA-B02','ARF8190BAB02','Pile interchangeable','134','Intensité de courant 100A','\"Consommations énergétiques   ;   Décret tertiare  ;   Rondes digitalisées  ;\"\r'),(7,'Adeunis','Current Sensor 50A (Analog)','ARF8190BA-B01','ARF8190BAB01','Pile interchangeable','129','Intensité de courant 50A','\"Consommations énergétiques   ;   Décret tertiare  ;   Rondes digitalisées  ;\"\r'),(8,'Adeunis','Delta P','ARF8283AA','ARF8283AA','Pile interchangeable','139','\"Pression différentielle ; 2 E/S contact sec ; 0-10V\"','\"Santé et environnement de travail  ;   Traitement de l\'air  ;\"\r'),(9,'Adeunis','Double Level Sensor (Dry Contacts)','ARF8170BA-B02','ARF8170BAB02','Pile interchangeable','119','Double niveau fluide','\"Inondation   ;\"\r'),(10,'Adeunis','Dry Contacts','ARF8170BA','ARF8170BA','Pile interchangeable','79','4 Entrées/Sorties contact sec','\"Rondes digitalisées  ;   Gestion des collectes  ;\"\r'),(11,'Adeunis','Field Test Device (FTD)','ARF8123AA','ARF8123AA','Batterie rechargeable','189','Qualité réseau LoRaWAN','\r'),(12,'Adeunis','Modbus','ARF8240AA','ARF8240AA','Alimentation externe','189','Modbus RTU','\"Consommations énergétiques   ;   Décret tertiare  ;   Rondes digitalisées  ;\"\r'),(13,'Adeunis','Motion','ARF8276AA','ARF8276AA','Pile interchangeable','99','\"Présence ; Luminosité ; Bouton ; Contact sec\"','\"Disponibilité des espaces collaboratifs   ;   Fréquentation et affluence  ;   Etude d\'occupation  ;   Nettoyage à l\'usage  ;\"\r'),(14,'Adeunis','Motion et ouverture/fermeture','ARF8276AA-B01','ARF8276AAB01','Pile interchangeable','129','\"Présence ; Luminosité ; Bouton ; Ouverture/fermeture\"','\"Disponibilité des espaces collaboratifs   ;   Fréquentation et affluence  ;   Etude d\'occupation  ;   Nettoyage à l\'usage  ;\"\r'),(15,'Adeunis','Pulse','ARF8230AA','ARF8230AA','Pile soudée','89','Impulsions de comptage ','\"Consommations énergétiques   ;   Décret tertiare  ;   Rondes digitalisées  ;\"\r'),(16,'Adeunis','Pulse ATEX','ARF8230FA','ARF8230FA','Pile soudée','99','Impulsions de comptage gaz','\"Consommations énergétiques   ;   Décret tertiare  ;   Rondes digitalisées  ;\"\r'),(17,'Adeunis','Pulse ATEX Binder','ARF8230FA-B01','ARF8230FAB01','Pile soudée','129','Impulsions de comptage gaz avec connecteur Binder DIN 6p','\"Consommations énergétiques   ;   Décret tertiare  ;   Rondes digitalisées  ;\"\r'),(18,'Adeunis','Pulse ATEX Gazpar','ARF8230FA-B02','ARF8230FAB02','Pile soudée','129','Impulsions de comptage gaz avec connecteur Gazpar 2p','\"Consommations énergétiques   ;   Décret tertiare  ;   Rondes digitalisées  ;\"\r'),(19,'Adeunis','Temp','ARF8180BCA','ARF8180BCA','Pile interchangeable','109','Température déportée + ambiance','\"Santé et environnement de travail  ;   Légionelle ECS  ;\"\r'),(20,'Adeunis','Temp 2S ','ARF8180BCB','ARF8180BCB','Pile interchangeable','139','Température déportée x 2','\"Légionelle ECS  ;\"\r'),(21,'Adeunis','TIC','ARF8250AA','ARF8250AAV2','Auto alimenté','179','Télé Information Client compteurs électriques','\"Consommations énergétiques   ;   Décret tertiare  ;   Rondes digitalisées  ;\"\r'),(22,'Adeunis','Water Leak Cable (Dry Contacts)','ARF8170BA-B03','ARF8170BAB03','Pile interchangeable','149','Eau au sol, le long d\'un mur ou autour d\'un tuyau','\"Inondation   ;\"\r'),(23,'Adeunis','Water Leak Spot (Dry Contacts)','ARF8170BA-B04','ARF8170BAB04','Pile interchangeable','189','Eau au sol, à un endroit précis','\"Inondation   ;\"\r'),(24,'Axioma','Qalcosonic W1, 1.6m3/h, R400, L110, DN15','','AXQW16110DN15T3','','75','Compteur d\'eau à ultrasons LoRaWAN intégré','\"Consommations énergétiques   ;   Décret tertiare  ;   Rondes digitalisées  ;\"\r'),(25,'Axioma','Qalcosonic W1, 2.5m3/h, R400, L110, DN15','','AXQW25110DN15T3','','75','','\r'),(26,'Axioma','Qalcosonic W1, 2.5m3/h, R400, L110, DN20','','AXQW25110DN20T3','','75','','\r'),(27,'Axioma','Qalcosonic W1, 2.5m3/h, R400, L170, DN15','','AXQW25170DN15T3','','75','','\r'),(28,'Axioma','Qalcosonic W1, 4m3/h, R400, L110, DN20','','AXQW4110DN20T3','','75','','\r'),(29,'Bosch','Parking Lot Sensor (PLS)','TPS 110 EU','BOSTPS110EU','Pile soudée','198','Présence véhicule','\"Disponibilité des places de parking  ;   Fréquentation et affluence  ;\"\r'),(30,'Elsys','ELT Ultrasonic','','ELSELT2MAXBO','Pile interchangeable','275','Distance','\"Inondation   ;   Rondes digitalisées  ;   Gestion des collectes  ;\"\r'),(31,'Elsys','EMS','','ELSEMS','Pile interchangeable','55','Température, humidité, accélération, ouverture, fuite','\"Fréquentation et affluence  ;   Santé et environnement de travail  ;   Inondation   ;\"\r'),(32,'Elsys','EMS Door','','ELSEMSDOOR','Pile interchangeable','51','Accélération, ouverture','\"Fréquentation et affluence  ;\"\r'),(33,'Elsys','ERS','','ELSERS','Pile interchangeable','76','Température, humidité, luminosité, mouvement','\"Disponibilité des espaces collaboratifs   ;   Fréquentation et affluence  ;   Etude d\'occupation  ;   Santé et environnement de travail  ;   Nettoyage à l\'usage  ;\"\r'),(34,'Elsys','ERS CO2','','ELSERSCO2','Pile interchangeable','168','Température, humidité, luminosité, mouvement, CO2','\"Disponibilité des espaces collaboratifs   ;   Fréquentation et affluence  ;   Etude d\'occupation  ;   Santé et environnement de travail  ;   Nettoyage à l\'usage  ;   Traitement de l\'air  ;\"\r'),(35,'Elsys','ERS CO2 Lite','','ELSERSCO2LITE','Pile interchangeable','155','Température, humidité, CO2','\"Santé et environnement de travail  ;   Traitement de l\'air  ;\"\r'),(36,'Elsys','ERS COV','','ELSERSCOV','Pile interchangeable','177','Température, humidité, luminosité, mouvement, COV','\"Disponibilité des espaces collaboratifs   ;   Fréquentation et affluence  ;   Etude d\'occupation  ;   Santé et environnement de travail  ;   Nettoyage à l\'usage  ;   Traitement de l\'air  ;\"\r'),(37,'Elsys','ERS Desk','','ELSERSDESK','Pile interchangeable','81','Température, humidité, luminosité, mouvement, occupation','\"Disponibilité des espaces collaboratifs   ;   Fréquentation et affluence  ;   Etude d\'occupation  ;   Santé et environnement de travail  ;   Nettoyage à l\'usage  ;\"\r'),(38,'Elsys','ERS Eye','','ELSERSEYE','Pile interchangeable','140','Température, humidité, luminosité, mouvement, occupation','\"Disponibilité des espaces collaboratifs   ;   Fréquentation et affluence  ;   Etude d\'occupation  ;   Santé et environnement de travail  ;   Nettoyage à l\'usage  ;\"\r'),(39,'Elsys','ERS Lite','','ELSERSLITE','Pile interchangeable','53','Température, humidité','\"Santé et environnement de travail  ;\"\r'),(40,'Elsys','ERS Sound','','ELSERSSOUND','Pile interchangeable','152','Température, humidité, luminosité, mouvement, son','\"Disponibilité des espaces collaboratifs   ;   Fréquentation et affluence  ;   Etude d\'occupation  ;   Santé et environnement de travail  ;   Nettoyage à l\'usage  ;\"\r'),(41,'Eurecam','Eurecam','','IACSPADNFVIX8X5','','630','','\r'),(42,'GreenCityzen','HummBox','','','','','','\r'),(43,'GreenMe','GreenMe V2','','','Alimentation externe','172','','\r'),(44,'GreenMe','GreenMe V2 avec option CO2','','','Alimentation externe','252','','\r'),(45,'Ineo Sense','ACS Padlock','','ACS-PAD-NFVI-X8X-510','Pile interchangeable','219','Ouverture/fermeture d\'un accès restreint','\r'),(46,'Ineo Sense','ACS Report LED','','ACS-REP-LDMMIR-X89-640','Pile interchangeable','178,5','Indicateur lumineux','\r'),(47,'Ineo Sense','ACS Switch','','ACS-INO-MMIR-X89-610','Pile interchangeable','64,8','Ouverture/fermeture, position','\r'),(48,'Ineo Sense','ACS Switch Buzz','','ACS-IWO-BZBLMM-X89-510','Pile interchangeable','91','Alerte, inclinaison, mouvement','\r'),(49,'Ineo Sense','ACS Switch Hygro','','ACS-INO-MMTHIR-X89-610','Pile interchangeable','83','Température, humidité','\"Santé et environnement de travail  ;\"\r'),(50,'Ineo Sense','ACS Switch PIR','','ACS-INO-PIMMIR-X89-411','Pile interchangeable','86,7','Présence','\"Disponibilité des espaces collaboratifs   ;   Fréquentation et affluence  ;   Etude d\'occupation  ;\"\r'),(51,'Ineo Sense','ACS Switch Range','','ACS-INO-TOMMIR-X89-610','Pile interchangeable','92','Distance','\"Disponibilité des espaces collaboratifs   ;   Disponibilité des places de parking  ;   Fréquentation et affluence  ;   Rondes digitalisées  ;   Gestion des collectes  ;\"\r'),(52,'Ineo Sense','ESG Logger NRJ','','ESG-LOG-CUPB-X89-520','Pile interchangeable','390','Consommation électrique 3 phases','\"Consommations énergétiques   ;\"\r'),(53,'Ineo Sense','TRK Tracer GPS','','TRK-INO-GPMAIR-X89-610','Pile interchangeable','96','Position GPS','\r'),(54,'Lucy Zodion','Ki. Node One','','','Alimentation externe','99','Contrôle éclairage urbain','\"Consommations énergétiques   ;   Rondes digitalisées  ;\"\r'),(55,'Lucy Zodion','Ki. Node Two (GPS, Bluetooth)','','','Alimentation externe','123','Contrôle éclairage urbain','\"Consommations énergétiques   ;   Rondes digitalisées  ;\"\r'),(56,'MCF88','Energy Meter plug with On/Off','MCF-LW12PLG','MCFMCFLW12PLG','Alimentation externe','176','Prise contrôlée à distance, consommation électrique','\"Consommations énergétiques   ;\"\r'),(57,'MCF88','Indoor environmental sensor','MCF-LW12TER','MCFMCFLW12TER','Pile interchangeable','147','Température, humidité, pression','\"Santé et environnement de travail  ;\"\r'),(58,'MCF88','Indoor environmental sensor with VOC & LUX','MCF-LW12VOC','MCFMCFLW12VOC','Pile interchangeable','170','Température, humidité, luminosité, COV','\"Santé et environnement de travail  ;   Traitement de l\'air  ;\"\r'),(59,'MCF88','Indoor environmental sensor with VOC, LUX & CO2','MCF-LW12CO2','MCFMCFLW12CO2','Pile interchangeable','350','Température, humidité, luminosité, COV, CO2','\"Santé et environnement de travail  ;   Traitement de l\'air  ;\"\r'),(60,'MCF88','Mono-Phase Energy Metering with I/O','MCF-LW12MET','MCFMCFLW12MET','Alimentation externe','141','1 Entrée/Sortie 230Vac, consommation électrique 1 phase','\"Consommations énergétiques   ;\"\r'),(61,'MCF88','Multi I/O module','MCF-LW13MIO','MCFMCFLW13MIO','Alimentation externe','299','16 Entrées / 8 Sorties contact sec','\r'),(62,'MCF88','Outdoor environmental sensor','MCF-LW12TERWP','MCFMCFLW12TERWP','Pile interchangeable','233','Température, humidité, pression','\"Santé et environnement de travail  ;\"\r'),(63,'MCF88','Outdoor PM and environmental sensor','MCF-LW12TERPM','MCFMCFLW12TERPM','Batterie rechargeable','563','Température, humidité, pression, PM','\"Santé et environnement de travail  ;   Traitement de l\'air  ;\"\r'),(64,'MCF88','Weather Station','MCF-LWWS00','MCFMCFLWWS00','Batterie rechargeable','2375','Température, humidité, pression, pluie, rosée, vent','\"Santé et environnement de travail  ;\"\r'),(65,'MCF88','Weather Station Basic','MCF-LWWS02','MCFMCFLWWS02','Alimentation externe','1938','Température, humidité, pression, pluie, rosée, vent','\"Santé et environnement de travail  ;\"\r'),(66,'MCF88','Weather Station Basic with PM sensor','MCF-LWWS03','MCFMCFLWWS03','Batterie rechargeable','2250','Température, humidité, pression, pluie, rosée, vent, PM','\"Santé et environnement de travail  ;\"\r'),(67,'MCF88','Weather Station with PM sensor','MCF-LWWS01','MCFMCFLWWS01','Alimentation externe','2688','Température, humidité, pression, pluie, rosée, vent, PM','\"Santé et environnement de travail  ;\"\r'),(68,'MCF88','Wireless actuator','MCF-LW13IO','MCFMCFLW13IO','Alimentation externe','113','1 Entrée/Sortie 230Vac','\r'),(69,'Multitech','LoRaWAN Gateway Conduit Ethernet','','MTCDT-246A-DK','Alimentation externe','471','','\r'),(70,'Multitech','LoRaWAN Gateway Conduit Ethernet + 4G','','MTCDTL4E1246ADK','Alimentation externe','657','','\r'),(71,'Multitech','LoRaWAN Gateway Conduit AP Ethernet','','MTCAP868041A','Alimentation externe','247','','\r'),(72,'Multitech','LoRaWAN Gateway Conduit AP Ethernet + 4G','','MTCAPL4E186841A','Alimentation externe','365','','\r'),(73,'Multitech','LoRaWAN Gateway Conduit IP67 Ethernet','','MTCDTIP266A868','Alimentation externe','970','','\r'),(74,'Multitech','LoRaWAN Gateway Conduit IP67 Ethernet + 4G','','MTCDTIPL4E1266A','Alimentation externe','1109','','\r'),(75,'NKE','Bob','','EOS600011040EUN','Pile soudée','580','Vibration (maintenance prédictive)','\r'),(76,'Skiply','Smilio A – 3 smileys','','SKISKPF170068','Pile interchangeable','139','14','\"Satisfaction des usagers  ;\"\r'),(77,'Skiply','Smilio A – Annulation (2 boutons)','','SKISKPF170065','Pile interchangeable','109','Annulation d\'action, badgeage','\"Rondes digitalisées  ;   Rondes digitalisées  ;\"\r'),(78,'Skiply','Smilio A – Multiservices (5 boutons)','','SKISKPF170067','Pile interchangeable','109','Multiservices','\"Rondes digitalisées  ;   Rondes digitalisées  ;\"\r'),(79,'Skiply','Smilio A – Pointage (5 boutons)','','SKPF000105','Pile interchangeable','109','Preuve de présence','\"Rondes digitalisées  ;   Rondes digitalisées  ;\"\r'),(80,'Skiply','Smilio A - Validation (3 boutons)','','SKISKPF170066','Pile interchangeable','109','Demande/annulation d\'une action, badgeage','\"Rondes digitalisées  ;   Rondes digitalisées  ;\"\r'),(81,'Strega','Vanne connectée autonome Full All-in-one DN15','SVF-DN15-868-BSP-A','STRSVFDN15868BA','Pile interchangeable','306','Ouverture/fermeture vanne','\"Consommations énergétiques   ;\"\r'),(82,'Strega','Vanne connectée autonome Full All-in-one DN20','SVF-DN20-868-BSP-A','STRSVFDN20868BA','Pile interchangeable','314','Ouverture/fermeture vanne','\"Consommations énergétiques   ;\"\r'),(83,'Strega','Vanne connectée autonome Full All-in-one DN25','SVF-DN25-868-BSP-A','STRSVFDN25868BA','Pile interchangeable','326','Ouverture/fermeture vanne','\"Consommations énergétiques   ;\"\r'),(84,'Strega','Vanne connectée autonome Full All-in-one DN50','SVF-DN50-868-BSP-A','STRSVFDN50868BA','Pile interchangeable','558','Ouverture/fermeture vanne','\"Consommations énergétiques   ;\"\r'),(85,'Strega','Vanne connectée autonome Full All-in-one DN80','SVF-DN80-868-BSP-A','STRSVFDN80868BA','Pile interchangeable','820','Ouverture/fermeture vanne','\"Consommations énergétiques   ;\"\r'),(86,'Strega','Vanne connectée autonome Full Remote DN15','SVF-DN15-868-BSP-S','STRSVFDN15868BS','Pile interchangeable','306','Ouverture/fermeture vanne','\"Consommations énergétiques   ;\"\r'),(87,'Strega','Vanne connectée autonome Full Remote DN20','SVF-DN20-868-BSP-S','STRSVFDN20868BS','Pile interchangeable','314','Ouverture/fermeture vanne','\"Consommations énergétiques   ;\"\r'),(88,'Strega','Vanne connectée autonome Full Remote DN25','SVF-DN25-868-BSP-S','STRSVFDN25868BS','Pile interchangeable','326','Ouverture/fermeture vanne','\"Consommations énergétiques   ;\"\r'),(89,'Strega','Vanne connectée autonome Full Remote DN50','SVF-DN50-868-BSP-S','STRSVFDN50868BS','Pile interchangeable','558','Ouverture/fermeture vanne','\"Consommations énergétiques   ;\"\r'),(90,'Strega','Vanne connectée autonome Full Remote DN80','SVF-DN80-868-BSP-S','STRSVFDN80868BS','Pile interchangeable','820','Ouverture/fermeture vanne','\"Consommations énergétiques   ;\"\r'),(91,'Tekelek','Tekelek TEK-766 Oil/Liquid','','TEK766','Pile soudée','144','Niveau de liquide','\"Rondes digitalisées  ;   Gestion des collectes  ;\"\r'),(92,'Tekelek','Tekelek TEK-790 GPL','','TEK790','Pile soudée','211','Niveau de gaz liquide','\"Rondes digitalisées  ;   Gestion des collectes  ;\"\r'),(93,'Tekelek','Tekelek TEK-839 Waste/Bin','','TEKBINLORA','Pile soudée','300','Niveau de solides','\"Rondes digitalisées  ;   Gestion des collectes  ;\"\r'),(94,'Wattsense','Box (avec abonnement 1 an jusqu\'à 100 capteurs IoT)','','WATBOX','Alimentation externe','719','','\r'),(95,'Wattsense','Hub','','WATHUB','Alimentation externe','895','','\r'),(96,'z','Lecteur optique (fiabilité mesure...)','','','','','Impulsions de comptage ','\"Consommations énergétiques   ;   Décret tertiare  ;   Rondes digitalisées  ;\"\r');
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question`
--

DROP TABLE IF EXISTS `question`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_reponse_binding`
--

DROP TABLE IF EXISTS `question_reponse_binding`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question_reponse_binding` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_question` int(11) DEFAULT NULL,
  `id_reponse` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_question` (`id_question`),
  KEY `id_reponse` (`id_reponse`),
  CONSTRAINT `question_reponse_binding_ibfk_1` FOREIGN KEY (`id_question`) REFERENCES `question` (`id`),
  CONSTRAINT `question_reponse_binding_ibfk_2` FOREIGN KEY (`id_reponse`) REFERENCES `reponse` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_reponse_binding`
--

LOCK TABLES `question_reponse_binding` WRITE;
/*!40000 ALTER TABLE `question_reponse_binding` DISABLE KEYS */;
/*!40000 ALTER TABLE `question_reponse_binding` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `reponse`
--

DROP TABLE IF EXISTS `reponse`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `reponse` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` text DEFAULT NULL,
  `question_suivante` int(11) DEFAULT NULL,
  `data` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_rep` (`question_suivante`),
  CONSTRAINT `FK_rep` FOREIGN KEY (`question_suivante`) REFERENCES `question` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reponse`
--

LOCK TABLES `reponse` WRITE;
/*!40000 ALTER TABLE `reponse` DISABLE KEYS */;
/*!40000 ALTER TABLE `reponse` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sections`
--

DROP TABLE IF EXISTS `sections`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `sections` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text DEFAULT NULL,
  `logo` text DEFAULT NULL,
  `sous_texte` text DEFAULT NULL,
  `position` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sections`
--

LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;
/*!40000 ALTER TABLE `sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `solution_binding`
--

DROP TABLE IF EXISTS `solution_binding`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `solution_binding` (
  `id_product` int(11) NOT NULL AUTO_INCREMENT,
  `id_solution` int(11) DEFAULT NULL,
  KEY `id_product` (`id_product`),
  KEY `id_solution` (`id_solution`),
  CONSTRAINT `solution_binding_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`),
  CONSTRAINT `solution_binding_ibfk_2` FOREIGN KEY (`id_solution`) REFERENCES `solutions` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solution_binding`
--

LOCK TABLES `solution_binding` WRITE;
/*!40000 ALTER TABLE `solution_binding` DISABLE KEYS */;
/*!40000 ALTER TABLE `solution_binding` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `solution_question_section_binding`
--

DROP TABLE IF EXISTS `solution_question_section_binding`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `solution_question_section_binding` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_solution` int(11) DEFAULT NULL,
  `id_question` int(11) DEFAULT NULL,
  `id_section` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_solution` (`id_solution`),
  KEY `id_question` (`id_question`),
  KEY `id_section` (`id_section`),
  CONSTRAINT `solution_question_section_binding_ibfk_1` FOREIGN KEY (`id_solution`) REFERENCES `solutions` (`id`),
  CONSTRAINT `solution_question_section_binding_ibfk_2` FOREIGN KEY (`id_question`) REFERENCES `question` (`id`),
  CONSTRAINT `solution_question_section_binding_ibfk_3` FOREIGN KEY (`id_section`) REFERENCES `sections` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solution_question_section_binding`
--

LOCK TABLES `solution_question_section_binding` WRITE;
/*!40000 ALTER TABLE `solution_question_section_binding` DISABLE KEYS */;
/*!40000 ALTER TABLE `solution_question_section_binding` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `solutions`
--

DROP TABLE IF EXISTS `solutions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `solutions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solutions`
--

LOCK TABLES `solutions` WRITE;
/*!40000 ALTER TABLE `solutions` DISABLE KEYS */;
INSERT INTO `solutions` VALUES (1,'Santé et environnement de travail \r'),(2,'Fréquentation et affluence\r'),(3,'Rondes digitalisées\r'),(4,'Consommations énergétiques\r'),(5,'Décret tertiare \r'),(6,'Traitement de l\'air\r'),(7,'Inondation\r'),(8,'Gestion des collectes\r'),(9,'Disponibilité des espaces collaboratifs\r'),(10,'Etude d\'occupation\r'),(11,'Nettoyage à l\'usage \r'),(12,'Légionelle ECS\r'),(13,'Disponibilité des places de parking\r'),(14,'Satisfaction des usagers\r');
/*!40000 ALTER TABLE `solutions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `username` text NOT NULL,
  `first_name` text NOT NULL,
  `last_name` text NOT NULL,
  `password` text NOT NULL,
  `status` text NOT NULL,
  PRIMARY KEY (`id`)
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

-- Dump completed on 2021-02-03 21:35:33
