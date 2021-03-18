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
  `name` int(11) DEFAULT NULL,
  `color` text DEFAULT NULL,
  `picture_back` text DEFAULT NULL,
  `logo` text DEFAULT NULL,
  `circles` int(11) DEFAULT NULL,
  `problem` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cont_cadran`
--

LOCK TABLES `cont_cadran` WRITE;
/*!40000 ALTER TABLE `cont_cadran` DISABLE KEYS */;
INSERT INTO `cont_cadran` VALUES (2,6,'#062C6B','/assets/images/actifstechniques/exImageFond.png','/assets/images/actifstechniques/logo.png',7,8);
/*!40000 ALTER TABLE `cont_cadran` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cont_en`
--

DROP TABLE IF EXISTS `cont_en`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cont_en` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cont_en`
--

LOCK TABLES `cont_en` WRITE;
/*!40000 ALTER TABLE `cont_en` DISABLE KEYS */;
/*!40000 ALTER TABLE `cont_en` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cont_fra`
--

DROP TABLE IF EXISTS `cont_fra`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cont_fra` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cont_fra`
--

LOCK TABLES `cont_fra` WRITE;
/*!40000 ALTER TABLE `cont_fra` DISABLE KEYS */;
INSERT INTO `cont_fra` VALUES (1,'Salut ça va ?!'),(2,'Ouais ça va et toi gros ?!'),(3,'c\'est moi la data'),(4,'numero1'),(5,' Bonjour je suis le sous_texte'),(6,' Actifs Techniques'),(7,'/assets/images/actifstechniques/cerclesBandeau.png'),(8,'Exemple de problématique'),(9,'Supervision des équipements CVC'),(10,'Texte offre supervision équipements CVC'),(11,'Production de froid'),(12,'Texte prod de froid'),(13,' Pb prod de froid'),(14,'Arg prod de froid'),(15,'Production de chaud'),(16,'Texte prod de chaud'),(17,' Pb prod de chaud'),(18,'Arg prod de chaud');
/*!40000 ALTER TABLE `cont_fra` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cont_offre`
--

DROP TABLE IF EXISTS `cont_offre`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cont_offre` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` int(11) DEFAULT NULL,
  `text` int(11) DEFAULT NULL,
  `picture` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cont_offre`
--

LOCK TABLES `cont_offre` WRITE;
/*!40000 ALTER TABLE `cont_offre` DISABLE KEYS */;
INSERT INTO `cont_offre` VALUES (2,9,10,'/assets/images/actifstechniques/exImageSolution.jpg');
/*!40000 ALTER TABLE `cont_offre` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `cont_solution`
--

DROP TABLE IF EXISTS `cont_solution`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `cont_solution` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` int(11) DEFAULT NULL,
  `text_db` int(11) DEFAULT NULL,
  `picture_db` text DEFAULT NULL,
  `problem` int(11) DEFAULT NULL,
  `arg` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cont_solution`
--

LOCK TABLES `cont_solution` WRITE;
/*!40000 ALTER TABLE `cont_solution` DISABLE KEYS */;
INSERT INTO `cont_solution` VALUES (3,11,12,'/assets/images/actifstechniques/exImageFond.png',13,14),(4,15,16,'/assets/images/actifstechniques/exImageSolution.png',17,18);
/*!40000 ALTER TABLE `cont_solution` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;
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
INSERT INTO `data` VALUES (1,'2 Entrées 0-10V / 4-20mA','2\r'),(2,'Température','\r'),(3,'Humidité','\r'),(4,'Bouton','\r'),(5,'Contact sec','\r'),(6,'Ouvrants','\r'),(7,'Ouverture/fermeture','\r'),(8,'Intensité de courant 100A','\r'),(9,'Intensité de courant 50A','\r'),(10,'Pression différentielle','\r'),(11,'2 E/S contact sec','\r'),(12,'Entrée 0-10V','\r'),(13,'Double niveau fluide','\r'),(14,'4 Entrées/Sorties contact sec','\r'),(15,'Qualité réseau LoRaWAN','\r'),(16,'Modbus RTU','\r'),(17,'Présence','\r'),(18,'Bruit','\r'),(19,'Luminosité','\r'),(20,'Impulsions de comptage ','\r'),(21,'Impulsions de comptage gaz','\r'),(22,'Impulsions de comptage gaz avec connecteur Binder DIN 6p','\r'),(23,'Impulsions de comptage gaz avec connecteur Gazpar 2p','\r'),(24,'Température déportée + ambiance','\r'),(25,'Température déportée x 2','\r'),(26,'Télé Information Client compteurs électriques','\r'),(27,'Eau au sol, le long d\'un mur ou autour d\'un tuyau','\r'),(28,'Eau au sol, à un endroit précis','\r'),(29,'Compteur d\'eau connecté','\r'),(30,'Présence véhicule','\r'),(31,'Distance','\r'),(32,'Accélération','\r'),(33,'Fuite','\r'),(34,'Eau au sol','\r'),(35,'Mouvement','\r'),(36,'CO2','\r'),(37,'COV','\r'),(38,'Occupation','\r'),(39,'Son','\r'),(40,'Cadenas connecté','\r'),(41,'Scellé réutilisable','\r'),(42,'Indicateur lumineux LED 25cm','\r'),(43,'Indicateur lumineux LED 55cm','\r'),(44,'Indicateur lumineux LED 75cm','\r'),(45,'Indicateur lumineux LED 105cm','\r'),(46,'Indicateur lumineux LED 150cm','\r'),(47,'Position','\r'),(48,'Alerte','\r'),(49,'Inclinaison','\r'),(50,'Sirène','\r'),(51,'Mesure de distance 0-4m','\r'),(52,'Consommation électrique 3 phases','\r'),(53,'Détection de présence de corps froids','\r'),(54,'Géolocalisation indoor/outdoor sans GPS','\r'),(55,'Géolocalisation indoor/outdoor avec GPS','\r'),(56,'Géolocalisation indoor/outdoor sans GPS de taille réduite','\r'),(57,'Balise de zone, complémentaire à la gamme Tracer','\r'),(58,'Reader Bluetooth, complémentaire à la gamme Tracer','\r'),(59,'Position GPS','\r'),(60,'Prise électrique connectée','\r'),(61,'Contrôle éclairage urbain','\r'),(62,'Prise contrôlée à distance','\r'),(63,'Consommation électrique','\r'),(64,'Pression','\r'),(65,'1 Entrée/Sortie 230Vac','\r'),(66,'16 Entrées / 8 Sorties contact sec','\r'),(67,'PM','\r'),(68,'Pluie','\r'),(69,'Rosée','\r'),(70,'Vent','\r'),(71,'Vibration','\r'),(72,'Satisfaction','\r'),(73,'Annulation d\'action','\r'),(74,'Badgeage','\r'),(75,'Multiservices','\r'),(76,'Preuve de présence','\r'),(77,'Demande/annulation d\'une action','\r'),(78,'Ouverture/fermeture vanne','\r'),(79,'Niveau de liquide','\r'),(80,'Niveau de gaz liquide','\r'),(81,'Niveau de solides','\r'),(82,'Impulsions de comptage ','\r'),(83,'Collecte de données IoT en LoRaWAN (jusqu\'à 100 IoT) abonnement de 168€/an à partir de l\'année 2','\r'),(84,'Impulsions lumineuses','\r'),(85,'Température ext','\r'),(86,'Hygromètire ext','\r'),(87,'Comptage de personnes ','\r'),(88,'happy/unhappy','\r'),(89,'Détection fumée et génération alerte sonore et lumineuse','\r'),(90,'Boitier communicant avec 4 entrées pour débimètre (1 débimètre DN15/20/25 fourni avec le boitier)','\r'),(91,'Débimètre DN15','\r'),(92,'Débimètre DN20','\r'),(93,'Débimètre DN25','\r'),(94,'Compteur d\'eau communicant DN32','\r'),(95,'Compteur d\'eau communicant DN40','\r'),(96,'Compteur d\'eau communicant DN50','\r'),(97,'Compteur d\'eau communicant DN65','\r'),(98,'Compteur d\'eau communicant DN80','\r'),(99,'Compteur d\'eau communicant DN100',' ');
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
) ENGINE=InnoDB AUTO_INCREMENT=256 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data_binding`
--

LOCK TABLES `data_binding` WRITE;
/*!40000 ALTER TABLE `data_binding` DISABLE KEYS */;
INSERT INTO `data_binding` VALUES (1,1,1),(2,2,2),(3,2,3),(4,2,4),(5,2,5),(6,3,2),(7,3,3),(8,3,4),(9,3,6),(10,4,7),(11,5,8),(12,6,9),(13,7,10),(14,7,11),(15,7,12),(16,8,13),(17,9,14),(18,10,15),(19,11,16),(20,12,17),(21,12,19),(22,12,4),(23,12,5),(24,13,20),(25,14,21),(26,15,22),(27,16,23),(28,17,24),(29,18,25),(30,19,26),(31,20,27),(32,21,28),(33,22,29),(34,23,29),(35,24,29),(36,25,29),(37,26,29),(38,27,2),(39,27,3),(40,27,6),(41,27,32),(42,27,34),(43,28,6),(44,28,32),(45,29,2),(46,29,3),(47,29,19),(48,29,35),(49,30,2),(50,30,3),(51,30,19),(52,30,35),(53,30,36),(54,31,2),(55,31,3),(56,31,36),(57,32,2),(58,32,3),(59,32,19),(60,32,35),(61,32,37),(62,33,2),(63,33,3),(64,33,19),(65,33,35),(66,33,38),(67,34,2),(68,34,3),(69,34,19),(70,34,35),(71,34,38),(72,35,2),(73,35,3),(74,36,2),(75,36,3),(76,36,19),(77,36,35),(78,36,39),(79,37,40),(80,37,41),(81,38,42),(82,39,43),(83,40,44),(84,41,45),(85,42,46),(86,43,6),(87,44,50),(88,45,35),(89,46,51),(90,46,53),(91,47,82),(92,48,54),(93,49,55),(94,50,56),(95,51,57),(96,52,58),(97,53,60),(98,54,66),(99,55,2),(100,55,3),(101,55,64),(102,56,2),(103,56,3),(104,56,64),(105,56,67),(106,57,2),(107,57,3),(108,57,64),(109,57,68),(110,57,69),(111,57,70),(112,58,2),(113,58,3),(114,58,64),(115,58,68),(116,58,69),(117,58,70),(118,59,2),(119,59,3),(120,59,64),(121,59,68),(122,59,69),(123,59,70),(124,59,67),(125,60,2),(126,60,3),(127,60,64),(128,60,68),(129,60,69),(130,60,70),(131,60,67),(132,61,71),(133,62,72),(134,63,73),(135,63,74),(136,64,75),(137,65,76),(138,66,77),(139,66,74),(140,67,74),(141,68,78),(142,69,78),(143,70,78),(144,71,78),(145,72,78),(146,73,78),(147,74,78),(148,75,78),(149,76,79),(150,77,80),(151,78,81),(152,79,83),(153,80,84),(154,81,85),(155,81,86),(156,82,87),(157,83,2),(158,83,3),(159,83,19),(160,83,18),(161,83,37),(162,83,89),(163,84,2),(164,84,3),(165,84,19),(166,84,18),(167,84,36),(168,84,88),(169,85,89),(170,86,90),(171,87,91),(172,88,92),(173,89,93),(174,90,94),(175,91,95),(176,92,96),(177,93,97),(178,94,98),(179,95,99);
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
  CONSTRAINT `fk_binding_ibfk_2` FOREIGN KEY (`id_offre`) REFERENCES `cont_offre` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fk_binding`
--

LOCK TABLES `fk_binding` WRITE;
/*!40000 ALTER TABLE `fk_binding` DISABLE KEYS */;
INSERT INTO `fk_binding` VALUES (2,2,2);
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
  CONSTRAINT `offre_binding_ibfk_1` FOREIGN KEY (`id_offre`) REFERENCES `cont_offre` (`id`),
  CONSTRAINT `offre_binding_ibfk_2` FOREIGN KEY (`id_solution`) REFERENCES `cont_solution` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offre_binding`
--

LOCK TABLES `offre_binding` WRITE;
/*!40000 ALTER TABLE `offre_binding` DISABLE KEYS */;
INSERT INTO `offre_binding` VALUES (3,2,3),(4,2,4);
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
  `ref_dataprint` text DEFAULT NULL,
  `power_supply` text DEFAULT NULL,
  `price` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Adeunis','Analog','ARF8190BA','Pile interchangeable','89'),(2,'Adeunis','Comfort ','ARF8200AA','Pile interchangeable','89'),(3,'Adeunis','Comfort et ouverture/fermeture','ARF8275AA','Pile interchangeable','119'),(4,'Adeunis','Contact Sensor (Dry Contacts)','ARF8275AAB01','Pile interchangeable','109'),(5,'Adeunis','Current Sensor 100A (Analog)','ARF8170BAB01','Pile interchangeable','134'),(6,'Adeunis','Current Sensor 50A (Analog)','ARF8190BAB02','Pile interchangeable','129'),(7,'Adeunis','Delta P','ARF8190BAB01','Pile interchangeable','139'),(8,'Adeunis','Double Level Sensor (Dry Contacts)','ARF8283AA','Pile interchangeable','119'),(9,'Adeunis','Dry Contacts','ARF8170BAB02','Pile interchangeable','79'),(10,'Adeunis','Field Test Device (FTD)','ARF8170BA','Batterie rechargeable','189'),(11,'Adeunis','Modbus','ARF8123AA','Alimentation externe','189'),(12,'Adeunis','Motion','ARF8240AA','Pile interchangeable','99'),(13,'Adeunis','Pulse','ARF8276AAB01','Pile soudée','89'),(14,'Adeunis','Pulse ATEX','ARF8230AA','Pile soudée','99'),(15,'Adeunis','Pulse ATEX Binder','ARF8230FA','Pile soudée','129'),(16,'Adeunis','Pulse ATEX Gazpar','ARF8230FAB01','Pile soudée','129'),(17,'Adeunis','Temp','ARF8230FAB02','Pile interchangeable','109'),(18,'Adeunis','Temp 2S ','ARF8180BCA','Pile interchangeable','139'),(19,'Adeunis','TIC','ARF8180BCB','Auto alimenté','179'),(20,'Adeunis','Water Leak Cable (Dry Contacts)','ARF8250AAV2','Pile interchangeable','149'),(21,'Adeunis','Water Leak Spot (Dry Contacts)','ARF8170BAB03','Pile interchangeable','189'),(22,'Axioma','Qalcosonic W1, 1.6m3/h, R400, L110, DN15','AXQW16110DN15T3','Pile soudée','75'),(23,'Axioma','Qalcosonic W1, 2.5m3/h, R400, L110, DN15','AXQW25110DN15T3','Pile soudée','75'),(24,'Axioma','Qalcosonic W1, 2.5m3/h, R400, L110, DN20','AXQW25110DN20T3','Pile soudée','75'),(25,'Axioma','Qalcosonic W1, 2.5m3/h, R400, L170, DN15','AXQW25170DN15T3','Pile soudée','75'),(26,'Axioma','Qalcosonic W1, 4m3/h, R400, L110, DN20','AXQW4110DN20T3','Pile soudée','75'),(27,'Elsys','EMS','ELSEMS','Pile interchangeable','55'),(28,'Elsys','EMS Door','ELSEMSDOOR','Pile interchangeable','51'),(29,'Elsys','ERS','ELSERS','Pile interchangeable','76'),(30,'Elsys','ERS CO2','ELSERSCO2','Pile interchangeable','168'),(31,'Elsys','ERS CO2 Lite','ELSERSCO2LITE','Pile interchangeable','155'),(32,'Elsys','ERS COV','ELSERSCOV','Pile interchangeable','177'),(33,'Elsys','ERS Desk','ELSERSDESK','Pile interchangeable','81'),(34,'Elsys','ERS Eye','ELSERSEYE','Pile interchangeable','140'),(35,'Elsys','ERS Lite','ELSERSLITE','Pile interchangeable','53'),(36,'Elsys','ERS Sound','ELSERSSOUND','Pile interchangeable','152'),(37,'Ineo Sense','ACS Padlock','ACS-PAD-NFVI-X8X-510','Pile interchangeable','219'),(38,'Ineo Sense','ACS Report LED 25cm','ACS-REP-LDMMIR-X89-640','Pile interchangeable','164'),(39,'Ineo Sense','ACS Report LED 55cm','ACS-REP-LDMMIR-X89-641','Pile interchangeable','169'),(40,'Ineo Sense','ACS Report LED 75cm','ACS-REP-LDMMIR-X89-642','Pile interchangeable','179'),(41,'Ineo Sense','ACS Report LED 105cm','ACS-REP-LDMMIR-X89-643','Pile interchangeable','179'),(42,'Ineo Sense','ACS Report LED 150cm','ACS-REP-LDMMIR-X89-644','Pile interchangeable','179'),(43,'Ineo Sense','ACS Switch','ACS-INO-MMIR-X89-610','Pile interchangeable','65'),(44,'Ineo Sense','ACS Switch Buzz','ACS-IWO-BZBLMM-X89-510','Pile interchangeable','91'),(45,'Ineo Sense','ACS Switch PIR','ACS-INO-PIMMIR-X89-411','Pile interchangeable','87'),(46,'Ineo Sense','ACS Switch Range','ACS-INO-TOMMIR-X89-610','Pile interchangeable','92'),(47,'Ineo Sense','ESG-Logger-PULSE','ESG-INO-PUIR-X89-610','Pile interchangeable','48'),(48,'Ineo Sense','TRK-Tracer','TRK-INO-MAIR-X89-610','Pile interchangeable','65'),(49,'Ineo Sense','TRK Tracer GPS','TRK-INO-GPMAIR-X89-610','Pile interchangeable','96'),(50,'Ineo Sense','TRK-Tracer-SLIM','TRK-SLI-MAPB-X89-460','Pile interchangeable','48'),(51,'Ineo Sense','TRK-Zon','TRK-ZON-MAIR-X89-640','Pile interchangeable','195'),(52,'Ineo Sense','Blueread','INS-BLR-ST-X89-510','Pile interchangeable','230'),(53,'MCF88','Energy Meter plug with On/Off','MCFMCFLW12PLG','Pile interchangeable','176'),(54,'MCF88','Multi I/O module','MCFMCFLW13MIO','Pile interchangeable','299'),(55,'MCF88','Outdoor environmental sensor','MCFMCFLW12TERWP','Pile interchangeable','233'),(56,'MCF88','Outdoor PM and environmental sensor','MCFMCFLW12TERPM','Batterie rechargeable','563'),(57,'MCF88','Weather Station','MCFMCFLWWS00','Batterie rechargeable','2375'),(58,'MCF88','Weather Station Basic','MCFMCFLWWS02','Batterie rechargeable','1938'),(59,'MCF88','Weather Station Basic with PM sensor','MCFMCFLWWS03','Batterie rechargeable','2250'),(60,'MCF88','Weather Station with PM sensor','MCFMCFLWWS01','Batterie rechargeable','2688'),(61,'NKE','Bob','EOS600011040EUN','Pile soudée','580'),(62,'Skiply','Smilio A – 3 smileys','SKISKPF170068','Pile interchangeable','139'),(63,'Skiply','Smilio A – Annulation (2 boutons)','SKISKPF170065','Pile interchangeable','109'),(64,'Skiply','Smilio A – Multiservices (5 boutons)','SKISKPF170067','Pile interchangeable','109'),(65,'Skiply','Smilio A – Pointage (5 boutons)','SKPF000105','Pile interchangeable','109'),(66,'Skiply','Smilio A - Validation (3 boutons)','SKISKPF170066','Pile interchangeable','109'),(67,'Skiply','Badge traçabilité intervention','SKISKPF170057','Aucune','10'),(68,'Strega','Vanne connectée autonome Full All-in-one DN15','STRSVFDN15868BA','Pile interchangeable','306'),(69,'Strega','Vanne connectée autonome Full All-in-one DN20','STRSVFDN20868BA','Pile interchangeable','314'),(70,'Strega','Vanne connectée autonome Full All-in-one DN25','STRSVFDN25868BA','Pile interchangeable','326'),(71,'Strega','Vanne connectée autonome Full Remote DN15','STRSVFDN15868BS','Pile interchangeable','306'),(72,'Strega','Vanne connectée autonome Full Remote DN20','STRSVFDN20868BS','Pile interchangeable','314'),(73,'Strega','Vanne connectée autonome Full Remote DN25','STRSVFDN25868BS','Pile interchangeable','326'),(74,'Strega','Vanne connectée autonome Full Remote DN50','STRSVFDN50868BS','Pile interchangeable','558'),(75,'Strega','Vanne connectée autonome Full Remote DN80','STRSVFDN80868BS','Pile interchangeable','820'),(76,'Tekelek','Tekelek TEK-766 Oil/Liquid','TEK766','Pile soudée','144'),(77,'Tekelek','Tekelek TEK-790 GPL','TEK790','Pile soudée','211'),(78,'Tekelek','Tekelek TEK-839 Waste/Bin','TEKBINLORA','Pile soudée','300'),(79,'Wattsense','Box (avec abonnement 1 an jusqu\'à 100 capteurs IoT)','WATBOX','Alimentation externe','616'),(80,'SensingLab','Senlab M LED','','Pile interchangeable','148,5'),(81,'SensingLab ','Senlab H','','Pile soudée','239,49'),(82,'Eurecam','Comptipix 3D','','Alimentation externe','730'),(83,'GreenMe','GreenMe','','Alimentation externe','172'),(84,'GreenMe ','GreenMe CO2','','Alimentation externe','252'),(85,'IOT Factory','Détecteur de fumée','','Pile interchangeable','58'),(86,'Robeau ','Robeau boitier + 1 débimètre (DN15,20,25)','','Pile interchangeable','175'),(87,'Robeau ','Robeau débimètre DN15','','Aucune','20'),(88,'Robeau ','Robeau débimètre DN20','','Aucune','20'),(89,'Robeau ','Robeau débimètre DN25','','Aucune','25'),(90,'Robeau ','Robeau compteur DN32','','Pile soudée','434,85'),(91,'Robeau ','Robeau compteur DN40','','Pile soudée','502,18'),(92,'Robeau ','Robeau compteur DN50','','Pile soudée','525,89'),(93,'Robeau ','Robeau compteur DN65','','Pile soudée','551,76'),(94,'Robeau ','Robeau compteur DN80','','Pile soudée','552,22'),(95,'Robeau ','Robeau compteur DN100','','Pile soudée','600,64');
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
  `type` text DEFAULT NULL,
  `info` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (1,'Choissisez votre solution :','radio','Retour état brûleur uniquement si le brûleur a une sortie TOR d\'état disponible'),(2,'Nombre de chaudières :','number',''),(3,'Souhaitez-vous personnaliser votre solution en ajoutant d\'autres IoT ?','radio',''),(4,'Selectionnez les autres IoT à ajouter :','select',''),(5,'Souhaitez-vous utiliser un réseau public ou privé ?','radio','https://www.orange-business.com/fr/reseau-iot');
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
  KEY `id_reponse` (`id_reponse`),
  KEY `question_reponse_binding_ibfk_1` (`id_question`),
  CONSTRAINT `question_reponse_binding_ibfk_1` FOREIGN KEY (`id_question`) REFERENCES `question` (`id`),
  CONSTRAINT `question_reponse_binding_ibfk_2` FOREIGN KEY (`id_reponse`) REFERENCES `reponse` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_reponse_binding`
--

LOCK TABLES `question_reponse_binding` WRITE;
/*!40000 ALTER TABLE `question_reponse_binding` DISABLE KEYS */;
INSERT INTO `question_reponse_binding` VALUES (1,1,1),(2,1,2),(3,2,3);
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
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reponse`
--

LOCK TABLES `reponse` WRITE;
/*!40000 ALTER TABLE `reponse` DISABLE KEYS */;
INSERT INTO `reponse` VALUES (1,'T° départ/retour',2,'remplir plus tard 1'),(2,'T° départ/retour + retour état brûleur',2,'remplir plus tard 2'),(3,'number',2,'remplir plus tard 3');
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
  `name` int(11) DEFAULT NULL,
  `logo` text DEFAULT NULL,
  `sous_texte` int(11) DEFAULT NULL,
  `position` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sections`
--

LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;
INSERT INTO `sections` VALUES (2,4,'/assets/images/logo.png',5,21);
/*!40000 ALTER TABLE `sections` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `solution_binding`
--

DROP TABLE IF EXISTS `solution_binding`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `solution_binding` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_product` int(11) DEFAULT NULL,
  `id_solution` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_product` (`id_product`),
  KEY `id_solution` (`id_solution`),
  CONSTRAINT `solution_binding_ibfk_1` FOREIGN KEY (`id_product`) REFERENCES `products` (`id`),
  CONSTRAINT `solution_binding_ibfk_2` FOREIGN KEY (`id_solution`) REFERENCES `solutions` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solution_binding`
--

LOCK TABLES `solution_binding` WRITE;
/*!40000 ALTER TABLE `solution_binding` DISABLE KEYS */;
INSERT INTO `solution_binding` VALUES (1,1,16),(2,5,15),(3,6,15),(4,7,15),(5,9,14),(6,9,16),(7,11,13),(8,11,11),(9,11,15),(10,12,1),(11,12,4),(12,12,8),(13,18,7),(14,18,14),(15,20,18),(16,27,18),(17,28,1),(18,31,5),(19,39,2),(20,46,2),(21,46,12),(22,47,10),(23,62,6),(24,62,8),(25,65,8),(26,67,8),(27,82,3),(28,84,5),(29,85,17);
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
  KEY `id_section` (`id_section`),
  KEY `solution_question_section_binding_ibfk_1` (`id_solution`),
  KEY `solution_question_section_binding_ibfk_2` (`id_question`),
  CONSTRAINT `solution_question_section_binding_ibfk_1` FOREIGN KEY (`id_solution`) REFERENCES `solutions` (`id`),
  CONSTRAINT `solution_question_section_binding_ibfk_2` FOREIGN KEY (`id_question`) REFERENCES `question` (`id`),
  CONSTRAINT `solution_question_section_binding_ibfk_3` FOREIGN KEY (`id_section`) REFERENCES `sections` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solution_question_section_binding`
--

LOCK TABLES `solution_question_section_binding` WRITE;
/*!40000 ALTER TABLE `solution_question_section_binding` DISABLE KEYS */;
INSERT INTO `solution_question_section_binding` VALUES (1,14,1,NULL),(2,14,2,2),(3,14,1,2);
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
) ENGINE=InnoDB AUTO_INCREMENT=32 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solutions`
--

LOCK TABLES `solutions` WRITE;
/*!40000 ALTER TABLE `solutions` DISABLE KEYS */;
INSERT INTO `solutions` VALUES (1,'Disponibilité des espaces collaboratifs\r'),(2,'Disponibilité des places de parking\r'),(3,'Fréquentation et affluence\r'),(4,'Etude d\'occupation\r'),(5,'Santé et environnement de travail\r'),(6,'Satisfaction des usagers\r'),(7,'Légionelle ECS\r'),(8,'Nettoyage à l\'usage \r'),(9,'Consommations énergétiques (décret tertaire, CPE)\r'),(10,'Eau\r'),(11,'Monitoring des équipements industriels (financement CEE)\r'),(12,'Rondes digitalisées\r'),(13,'Production de froid\r'),(14,'Production de chaud\r'),(15,'Centrale de traitement d\'air\r'),(16,'Rondes d\'exploitation digitalisées\r'),(17,'Détection fumée\r'),(18,'Inondation');
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

-- Dump completed on 2021-03-18 17:08:16
