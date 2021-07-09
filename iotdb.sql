-- MariaDB dump 10.19  Distrib 10.6.0-MariaDB, for Win64 (AMD64)
--
-- Host: localhost    Database: iot
-- ------------------------------------------------------
-- Server version	10.6.0-MariaDB

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
  `overlay` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cont_cadran`
--

LOCK TABLES `cont_cadran` WRITE;
/*!40000 ALTER TABLE `cont_cadran` DISABLE KEYS */;
INSERT INTO `cont_cadran` VALUES (2,6,'#062c6b','/assets/images/actifstechniques_picture_back.png','/assets/images/actifstechniques_logo.png',7,8,170),(3,65,'#03b0b4','/assets/images/environnement_picture_back.jpg','/assets/images/environnement_logo.png',66,71,171),(4,67,'#cc2871','/assets/images/santeetbienetre_picture_back.jpg','/assets/images/santeetbienetre_logo.png',68,72,172),(5,69,'#0caaeb','/assets/images/espaces_picture_back.jpg','/assets/images/espaces_logo.png',70,73,173);
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
) ENGINE=InnoDB AUTO_INCREMENT=378 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cont_en`
--

LOCK TABLES `cont_en` WRITE;
/*!40000 ALTER TABLE `cont_en` DISABLE KEYS */;
INSERT INTO `cont_en` VALUES (1,'Our vision of Facility Management&/&A comprehensive understanding of your current and future needs to work beside you for the long term, helping to build your performance'),(2,'/assets/images/accueil_image.jpg'),(3,'c\'est moi la data'),(4,'numero1'),(5,' Bonjour je suis le sous_texte'),(6,'Technical assets'),(7,'/assets/images/technicalassets_text.png'),(8,'   Les budgets liés aux prestations de maintenance multi-technique sont revus à la baisse. Il faut faire mieux avec moins.&/&   Le monitoring des équipements est un moyen technologique à bas coût permettant la détection de dérives de fonctionnement et d\'anticipation de pannes.'),(9,'Supervision des équipements CVC'),(10,'      Faire communiquer les équipements à moindre coût. Les technologies filaires traditionnelles.'),(11,'Production de froid'),(12,'Texte prod de froid'),(13,'Pb prod de froid'),(14,'Arg prod de froid'),(15,'Production de chaud'),(16,'Texte prod de chaud'),(17,'Pb prod de chaud'),(18,'Arg prod de chaud'),(19,'Choissisez votre solution :'),(20,'Retour état brûleur uniquement si le brûleur a une sortie TOR d\'état disponible'),(21,'Nombre de chaudières :'),(22,'Souhaitez-vous personnaliser votre solution en ajoutant d\'autres IoT ?'),(23,'Selectionnez les autres IoT à ajouter :'),(24,'Souhaitez-vous utiliser un réseau public ou privé ?'),(25,'Quelle application souhaitez-vous utiliser ?'),(26,'Type d\'hébergement et accès logiciel :'),(27,'Type de dashboard :'),(28,'Précisez l\'outil souhaité :'),(29,'Précisez le besoin :'),(30,'Fonctionnalités souhaitées :'),(31,'Souhaitez-vous internaliser ou externaliser l\'installation des IoT ?'),(32,'Souhaitez-vous internaliser ou externaliser la création des dashboards ?'),(33,'Durée de vie souhaitée de la solution (en année) :'),(34,'Ajouter un commentaire :'),(35,'T° départ/retour'),(36,'T° départ/retour + retour état brûleur'),(37,'number'),(38,'Oui'),(39,'Non'),(40,'Réseau public LoRaWAN Orange'),(41,'Réseau privé LoRaWAN avec GW WATTSENSE'),(42,'IoThink'),(43,'SaaS (Cloud)'),(44,'On-Premise (Serveur interne client)'),(45,'Autre'),(46,'Public (au catalogue avec plan 2d)'),(47,'Spécifique'),(48,'Alertes (dépassement seuil, évènement...)'),(49,'Reporting'),(50,'Aucune (accès dashboard uniquement)'),(51,'text'),(52,'text'),(53,'[ là il faudrait la liste de tous les iot disponibles donc à voir ]'),(54,'Internaliser'),(55,'Externaliser (VF RHÔNE IIT)'),(56,'Internaliser'),(57,'Externaliser (VF RHÔNE IIT)'),(58,'number'),(59,'text'),(60,'Capteurs et connectivité'),(61,'Application et fonctionnalités'),(62,'Installation physique des IoT et création du dashboard'),(63,'Récapitulatif et validation'),(64,'https://www.orange-business.com/fr/reseau-iot'),(65,' Environment '),(66,'/assets/images/environnement_text.png'),(67,'Health & Well-being'),(68,'/assets/images/santeetbienetre_text.png'),(69,'Spaces'),(70,'/assets/images/espaces_text.png'),(71,'Toutes les activités économiques ont un double impact sur l\'environnement.&/&Les activités économiques puisent dans les ressources naturelles (matières premières, énergie, eau…) dont elles ont besoin pour fonctionner et elles rejettent des déchets (eaux usées, fumées, déchets industriels...) en contribuant ainsi à la dégradation de l\'environnement.&/& '),(72,'La qualité de vie au travail est un levier de performance de l\'entreprise.&/&Des conditions de travail négligées entraînent démotivation, maladie, absentéisme et forte proportion de turnover. L\'amélioration de la qualité de vie au travail conduit à motiver le personnel, à le fidéliser et à l\'impliquer dans la réussite de l\'entreprise.&/& '),(73,'    La flexibilité et l\'agilité des espaces collaboratifs contribuent à la performance sociétale et économique de l\'entreprise.&/&Le coût élevé du mètre carré dans les immobiliers tertiaires incite les \nentreprises à revoir l\'utilisation de l\'espace pour en optimiser chaque \nm².&/& '),(74,'Rondes d\'exploitation'),(75,'Texte à compléter'),(76,'Sécurité'),(77,'Texte à compléter'),(78,'Centrale de traitement d\'air'),(79,'Problématique à compléter'),(80,'Description à compléter'),(81,'Texte à compléter'),(82,'Centrale de traitement'),(83,'Problématique à compléter'),(84,'Description à compléter'),(85,'Texte à compléter'),(86,'Centrale de traitement d\'air'),(87,'Problématique à compléter'),(88,'Description à compléter'),(89,'Texte à compléter'),(90,'dscsdvdsvd'),(91,'dvdsvsd'),(92,'dvsvdsvd'),(93,'svdsvsd'),(94,'Rondes d\'exploitation digitalisées'),(95,'Problématique à compléter'),(96,'Description à compléter'),(97,'Texte à compléter'),(98,'Détection fumée'),(99,'Problématique à compléter'),(100,'Description à compléter'),(101,'Texte à compléter'),(102,'Inondation'),(103,'Problématique à compléter'),(104,'Description à compléter'),(105,'Texte à compléter'),(106,'Maîtrise des énergies'),(107,'Les bâtiments représentent 43 % de la consommations énergétique française. Réduire l\'impact environnemental des bâtiments en devenu un impératif pour l\'ensemble des acteurs de l\'immobilier. La mesure continue de l\'impact énergétique réelle de son propre bâtiment est la 1ère étape permettant l\'optimisation de ses consommations énergétiques.'),(108,'Consommations énergétiques (décret tertiaire, CPE)'),(109,'Problématique à compléter'),(110,'Description à compléter'),(111,'Texte à compléter'),(112,'Consommations énergétiques (décret tertiaire, CPE)'),(113,'Problématique à compléter'),(114,'Description à compléter'),(115,'Texte à compléter'),(116,'Eau'),(117,'Problématique à compléter'),(118,'Description à compléter'),(119,'Texte à compléter'),(120,'Monitoring des équipements industriels (financement CEE)'),(121,'Problématique à compléter'),(122,'Description à compléter'),(123,'Texte à compléter'),(124,'Maîtrise des déchets'),(125,'Améliorer la gestion ainsi que la collecte des déchets est un levier de performance. Le taux de remplissage de vos bennes '),(126,'Rondes digitalisées'),(127,'Problématique à compléter'),(128,'Description à compléter'),(129,'Texte à compléter'),(130,'Qualité de vie au travail'),(131,'Texte à compléter'),(132,'Santé et environnement de travail'),(133,'Problématique à compléter'),(134,'Description à compléter'),(135,'Texte à compléter'),(136,'Satisfaction des usagers'),(137,'Problématique à compléter'),(138,'Description à compléter'),(139,'Texte à compléter'),(140,'Hygiène'),(141,'Texte à compléter'),(142,'Légionelle ECS'),(143,'Un mauvais entretien des réseaux ECS peut être la cause de la prolifération de la bactérie mortelle de la légionnelle.'),(144,'Description à compléter'),(145,'Texte à compléter'),(146,'Nettoyage à l\'usage'),(147,'Problématique à compléter'),(148,'Description à compléter'),(149,'Texte à compléter'),(150,'Gestion des espaces'),(151,'Le coût élevé du mètre carré dans les immobiliers tertiaires incite les entreprises à revoir l\'utilisation de l\'espace pour en optimiser chaque m².'),(152,'Optimisation des espaces'),(153,'Le coût élevé du mètre carré dans les immobiliers tertiaires incite les entreprises à revoir l\'utilisation de l\'espace pour en optimiser chaque m²'),(154,'Disponibilité des espaces collaboratifs '),(155,'Problématique à compléter'),(156,'Description à compléter'),(157,'Texte à compléter'),(158,'Disponibilité des places de parking'),(159,'Problématique à compléter'),(160,'Description à compléter'),(161,'Texte à compléter'),(162,'Fréquentation et affluence'),(163,'Problématique à compléter'),(164,'Description à compléter'),(165,'Texte à compléter'),(166,'Etude d\'occupation'),(167,'Problématique à compléter'),(168,'Description à compléter'),(169,'Texte à compléter'),(170,'overlay AT'),(171,'overlay Env'),(172,'overlay Sante'),(173,'overlay Esp'),(174,'Combien de groupes froid ?'),(175,'number'),(176,'Données nécessaires :'),(177,'Données de fonctionnement (IoT correspondant : Modbus)'),(178,'Nombre de CTA :'),(179,'number'),(180,'Données nécessaires :'),(181,'Delta P (IoT correspondant : Delta P)'),(182,'Delta P + intensité moteur (IoT correspondants : Delta P + intensité moteur)'),(183,'Données de fonctionnement (IoT correspondant : Modbus)'),(184,'Combien de détecteurs de fumée ?'),(185,'number'),(186,'Données nécessaires :'),(187,'Données nécessaires :'),(188,'Détection fumée (IoT correspondant : détecteur de fumée)'),(189,'Combien y en a-t-il ?'),(190,'number'),(191,'Quel est le type d\'espace ?'),(192,'Box'),(193,'Salle de réunion'),(194,'Données nécessaires :'),(195,'Présence, luminosité (IoT correspondant : Motion)'),(196,'Présence, luminosité + ouverture/fermeture porte (IoT correspondant : Motion + EMS Door)'),(197,'Combien y en a-t-il ?'),(198,'number'),(199,'Quel est le type de place ?'),(200,'Vélo'),(201,'Voiture'),(202,'Données nécessaires :'),(203,'Occupation place (IoT correspondant : ACS Switch Range)'),(204,'Occupation place + signalisation visuelle (IoT correspondants : ACS Switch Range + ACS Report LED 55 cm)'),(205,'Souhaitez-vous ajouter un autre compteur ?'),(206,'Oui'),(207,'Non'),(208,'Sélectionnez un compteur à ajouter :'),(209,'Robeau DN15'),(210,'Robeau DN20'),(211,'Robeau DN25'),(212,'Compteur d\'eau connecté DN15 (1.6m3/h; R400; L110)'),(213,'Compteur d\'eau connecté DN15 (2.5m3/h; R400; L110)'),(214,'Compteur d\'eau connecté DN15 (2.5m3/h; R400; L170)'),(215,'Compteur d\'eau connecté DN20 (2.5m3/h; R400; L110)'),(216,'Compteur d\'eau connecté DN20 (4m3/h; R400; L110)'),(217,'Compteur d\'eau connecté DN40'),(218,'Compteur d\'eau connecté DN50'),(219,'Compteur d\'eau connecté DN80'),(220,'Compteur d\'eau connecté DN65'),(221,'Compteur d\'eau connecté DN32'),(222,'Compteur d\'eau connecté DN100'),(223,'Combien ?'),(224,'number'),(225,'Combien de capteurs ESG-Logger-PULSE vous faut-il ?'),(226,'number'),(227,'Combien de compteurs d\'eau ont une interface impulsionnelle ?'),(228,'number'),(229,'Le plan de comptage eau est-il existant ou inexistant ?'),(230,'Existant'),(231,'Inexistant'),(232,'Données nécessaires :'),(233,'Consommation d\'eau'),(234,'Combien y en a-t-il ?'),(235,'number'),(236,'Type d\'espaces :'),(237,'Box'),(238,'Salle de réunion'),(239,'Bureau fermé'),(240,'Open Space'),(241,'Sanitaire'),(242,'Données nécessaires :'),(243,'Présence, luminosité (IoT correspondant : Motion)'),(244,'Combien d\'entrées/sortie ?'),(245,'number'),(246,'Données nécessaires :'),(247,'Comptage de personnes entrée/sortie (IoT correspondant : Comptipix 3D)'),(248,'Combien ?'),(249,'number'),(250,'Type de local :'),(251,'Local technique'),(252,'Bureau'),(253,'Données nécessaires : '),(254,'Inondation au sol pour bureau (tertiaire) (IoT correspondant : EMS)'),(255,'Inondation au sol pour locaux techniques (industriel) (IoT correspondant : Water Leak Cable)'),(256,'Combien de départ/retour production ECS à surveiller ?'),(257,'number'),(258,'Données nécessaires :'),(259,'Température de contact eau chaude sanitaire (IoT correspondant : Temps 2S)'),(260,'Est-il possible de raccorder les deux interfaces modbus au même capteur ?'),(261,'Oui'),(262,'Non'),(263,'Est-il possible de raccorder les deux interfaces modbus au même capteur ?'),(264,'Oui'),(265,'Non'),(266,'Préconisations :  \n/1. Les deux compteurs doivent avoir une interface Modbus/RS485. Les deux interfaces doivent être raccordées au même capteur. \n/2. Vérifier s\'il est possible d\'ajouter une carte Modbus dans le compteur de production. \n/3. Remplacer le compteur électrique par un compteur avec interface Modbus/RS485.'),(267,'Ok'),(268,'Les compteurs de consommation et de production ont-ils une interface Modbus/RS485 ?'),(269,'Oui'),(270,'Non'),(271,'Données nécessaires :'),(272,'Comptage consommation & production énergétique'),(273,'Combien de zone à équiper ?'),(274,'number'),(275,'Données nécessaires :'),(276,'Borne de satisfaction (IoT correspondant : Smilio A - 3 smileys)'),(277,'Borne de pointage (IoT correspondants : Smilio A - Pointage (5 boutons) + badge de traçabilité intervention)'),(278,'Présence, luminosité (IoT correspondant : Motion)'),(279,'Est-il possible de raccorder les sorties analogiques au même capteur ?'),(280,'Oui'),(281,'Non'),(282,'Est-il possible de raccorder les sorties TOR au même capteur ?'),(283,'Oui'),(284,'Non'),(285,'Combien d\'entrées ?'),(286,'number'),(287,'Combien d\'entrées/sorties ?'),(288,'number'),(289,'Type d\'information : '),(290,'Analogique tension (2 entrées 0-10V par capteur)'),(291,'Analogique courant (2 entrées 4-20mA par capteur)'),(292,'Tout ou rien (4 entrées/sorties contact sec/capteur)'),(293,'Données nécessaires :'),(294,'Analogiques 0-10V ou 4-20mA (IoT correspondant : Analog)'),(295,'Tout ou rien (contact sec) (IoT correspondant : Dry Contacts)'),(296,'Combien de contenant à équiper ?'),(297,'number'),(298,'Données nécessaires :'),(299,'Niveau de remplissage (IoT correspondant : ACS Switch Range)'),(300,'Combien y en a-t-il ?'),(301,'number'),(302,'Type d\'espaces :'),(303,'Box'),(304,'Salle de réunion'),(305,'Bureau fermé'),(306,'Open Space'),(307,'Données nécessaires :'),(308,'Température, Hr, CO2 (IoT correspondant : ERS CO2 Lite)'),(309,'GreenMe (IoT correspondant : GreenMe CO2)'),(310,'Combien de bornes de satisfaction ?'),(311,'number'),(312,'Données nécessaires :'),(313,'Borne de satisfaction (IoT correspondant : Smilio A - 3 smileys)'),(314,'Données nécessaires :'),(315,'Comptage énergétique'),(316,'Combien vous en faut-il ?'),(317,'number'),(319,'Nombre de box :'),(320,'number'),(321,'Nombre de salle(s) de réunion à équiper :'),(322,'number'),(323,'1 Modbus peut être relié à 2 compteurs. Combien vous faut-il de compteurs ?'),(324,'number'),(325,'Un capteur Modbus est nécessaire pour 2 compteurs. Nombre de compteurs : '),(326,'number'),(327,'Nombre de compteurs : '),(328,'number'),(329,'Alors il peut y avoir 2 entrées max par capteur. Combien de capteurs vous faut-il ?'),(330,'number'),(331,'Combien y a-t-il de sorties à raccorder ?'),(332,'number'),(333,'Est-il possible de raccorder les sorties TOR au même capteur ?'),(334,'Oui'),(335,'Non'),(336,'Alors il peut y avoir 2 entrées max par capteurs. Combien vous faut-il de capteurs ?'),(337,'number'),(338,'Combien y a-t-il de sorties analogiques à raccorder ?'),(339,'number'),(340,'Est-il possible de raccorder les sorties analogiques au même capteur ?'),(341,'Oui'),(342,'Non'),(343,'Nombre de places de vélos à équiper :'),(344,'number'),(345,'Nombre de places de voitures à équiper :'),(346,'number'),(347,'Nombre de sanitaires à équiper :'),(348,'number'),(349,'Nombre d\'Open Space à équiper :'),(350,'number'),(351,'Nombre de bureaux fermés à équiper :'),(352,'number'),(353,'Nombre de salles de réunion à équiper :'),(354,'number'),(355,'Nombre de box à équiper :'),(356,'number'),(357,'Nombre d\'Open Space à équiper :'),(358,'number'),(359,'Nombre de bureaux fermés à équiper :'),(360,'number'),(361,'Nombre de salles de réunion à équiper :'),(362,'number'),(363,'Nombre de Box à équiper :'),(364,'number'),(365,'Données nécessaires :'),(366,'Delta P'),(367,'Delta P + intensité moteur (50A)'),(368,'Delta P + intensité moteur (100A)'),(369,'Données de fonctionnement (uniquement s\'il existe une interface Modbus disponible)'),(370,'Données nécessaires :'),(371,'Analogique tension (0-10V)'),(372,'Analogique courant (4-20 mA)'),(373,'Tout ou rien (contact sec)'),(374,'Nombre de bureaux à équiper :'),(375,'number'),(376,'Nombre de locaux techniques à équiper :'),(377,'number');
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
) ENGINE=InnoDB AUTO_INCREMENT=378 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cont_fra`
--

LOCK TABLES `cont_fra` WRITE;
/*!40000 ALTER TABLE `cont_fra` DISABLE KEYS */;
INSERT INTO `cont_fra` VALUES (1,'Notre vision du Facility Management&/&Une maîtrise globale de vos besoins actuels et futurs pour vous accompagner durablement et contribuer à votre performance'),(2,'/assets/images/accueil_image.jpg'),(3,'c\'est moi la data'),(4,'numero1'),(5,' Bonjour je suis le sous_texte'),(6,'Actifs Techniques'),(7,'/assets/images/actifstechniques_text.png'),(8,'   Les budgets liés aux prestations de maintenance multi-technique sont revus à la baisse. Il faut faire mieux avec moins.&/&   Le monitoring des équipements est un moyen technologique à bas coût permettant la détection de dérives de fonctionnement et d\'anticipation de pannes.'),(9,'Supervision des équipements CVC'),(10,'  Faire communiquer les équipements à moindre coût. Les technologies filaires traditionnelles.  '),(11,'Production de froid'),(12,'Texte prod de froid'),(13,'Pb prod de froid'),(14,'Arg prod de froid'),(15,'Production de chaud'),(16,'Texte prod de chaud'),(17,'Pb prod de chaud'),(18,'Arg prod de chaud'),(19,'Données nécessaires :'),(20,'Retour état brûleur uniquement si le brûleur a une sortie TOR d\'état disponible'),(21,'Nombre de chaudières :'),(22,'Souhaitez-vous personnaliser votre solution en ajoutant d\'autres IoT ?'),(23,'Sélectionnez un produit à ajouter :'),(24,'Etes-vous couverts par le réseau public LoRaWAN Orange ? (https://www.orange-business.com/fr/reseau-iot)'),(25,'Quelle application souhaitez-vous utiliser ?'),(26,'Type d\'hébergement et accès logiciel :'),(27,'Type de dashboard :'),(28,'Précisez l\'outil souhaité :'),(29,'Précisez le besoin :'),(30,'Fonctionnalités souhaitées :'),(31,'Souhaitez-vous internaliser ou externaliser l\'installation des IoT ?'),(32,'Souhaitez-vous internaliser ou externaliser la création des dashboards ?'),(33,'Durée de vie souhaitée de la solution (en année) :'),(34,'Ajouter un commentaire :'),(35,'T° départ/retour'),(36,'T° départ/retour + retour état brûleur (uniquement si le brûleur a une sortie TOR d\'état disponible)'),(37,'number'),(38,'Oui'),(39,'Non'),(40,'Oui'),(41,'Non'),(42,'IoThink'),(43,'Autre'),(44,'On-Premise (Serveur interne client)'),(45,'SaaS (Cloud)'),(46,'Public (au catalogue avec plan 2d)'),(47,'Spécifique'),(48,'Alertes (dépassement seuil, évènement...)'),(49,'Reporting'),(50,'Aucune (accès dashboard uniquement)'),(51,'text'),(52,'text'),(53,'[ là il faudrait la liste de tous les iot disponibles donc à voir ]'),(54,'Internaliser'),(55,'Externaliser (VF RHÔNE IIT)'),(56,'Internaliser'),(57,'Externaliser (VF RHÔNE IIT)'),(58,'number'),(59,'text'),(60,'Capteurs et connectivité'),(61,'Application et fonctionnalités'),(62,'Installation physique des IoT et création du dashboard'),(63,'Récapitulatif et validation'),(64,'https://www.orange-business.com/fr/reseau-iot'),(65,'Environnement'),(66,'/assets/images/environnement_text.png'),(67,' Santé & Bien-être '),(68,'/assets/images/santeetbienetre_text.png'),(69,'Espaces'),(70,'/assets/images/espaces_text.png'),(71,'Toutes les activités économiques ont un double impact sur l\'environnement.&/&Les activités économiques puisent dans les ressources naturelles (matières premières, énergie, eau…) dont elles ont besoin pour fonctionner et elles rejettent des déchets (eaux usées, fumées, déchets industriels...) en contribuant ainsi à la dégradation de l\'environnement.&/& '),(72,'La qualité de vie au travail est un levier de performance de l\'entreprise.&/&Des conditions de travail négligées entraînent démotivation, maladie, absentéisme et forte proportion de turnover. L\'amélioration de la qualité de vie au travail conduit à motiver le personnel, à le fidéliser et à l\'impliquer dans la réussite de l\'entreprise.&/& '),(73,'    La flexibilité et l\'agilité des espaces collaboratifs contribuent à la performance sociétale et économique de l\'entreprise.&/&Le coût élevé du mètre carré dans les immobiliers tertiaires incite les \nentreprises à revoir l\'utilisation de l\'espace pour en optimiser chaque \nm².&/& '),(74,'Rondes d\'exploitation'),(75,'Texte à compléter'),(76,'Sécurité'),(77,'Texte à compléter'),(78,'Centrale de traitement d\'air'),(79,'Problématique à compléter'),(80,'Description à compléter'),(81,'Texte à compléter'),(82,'Centrale de traitement'),(83,'Problématique à compléter'),(84,'Description à compléter'),(85,'Texte à compléter'),(86,'Centrale de traitement d\'air'),(87,'Problématique à compléter'),(88,'Description à compléter'),(89,'Texte à compléter'),(90,'Teruc un peu mieuc'),(91,'prevfdv'),(92,'dvsvdsvd'),(93,'svdsvsd'),(94,'Rondes d\'exploitation digitalisées'),(95,'Problématique à compléter'),(96,'Description à compléter'),(97,'Texte à compléter'),(98,'Détection fumée'),(99,'Problématique à compléter'),(100,'Description à compléter'),(101,'Texte à compléter'),(102,'Inondation'),(103,'Problématique à compléter'),(104,'Description à compléter'),(105,'Texte à compléter'),(106,'Maîtrise des énergies'),(107,'  Les bâtiments représentent 43% de la consommations énergétique française. Réduire l\'impact environnemental des bâtiments en devenu un impératif pour l\'ensemble des acteurs de l\'immobilier. La mesure continue de l\'impact énergétique réel de son propre bâtiment est la 1ère étape permettant l\'optimisation de ses consommations énergétiques.  '),(108,'Consommations énergétiques (décret tertiaire, CPE)'),(109,'Problématique à compléter'),(110,'Description à compléter'),(111,'Texte à compléter'),(112,'Consommations énergétiques (décret tertiaire, CPE)'),(113,'Problématique à compléter'),(114,'Description à compléter'),(115,'Texte à compléter'),(116,'Eau'),(117,'Problématique à compléter'),(118,'Description à compléter'),(119,'Texte à compléter'),(120,'Monitoring des équipements industriels (financement CEE)'),(121,'Problématique à compléter'),(122,'Description à compléter'),(123,'Texte à compléter'),(124,'Maîtrise des déchets'),(125,'Améliorer la gestion ainsi que la collecte des déchets est un levier de performance. Le taux de remplissage de vos bennes '),(126,'Rondes digitalisées'),(127,'Problématique à compléter'),(128,'Description à compléter'),(129,'Texte à compléter'),(130,'Qualité de vie au travail'),(131,'Texte à compléter'),(132,'Santé et environnement de travail'),(133,'Problématique à compléter'),(134,'Description à compléter'),(135,'Texte à compléter'),(136,'Satisfaction des usagers'),(137,'Problématique à compléter'),(138,'Description à compléter'),(139,'Texte à compléter'),(140,'Hygiène'),(141,'Texte à compléter'),(142,'Légionelle ECS'),(143,'Un mauvais entretien des réseaux ECS peut être la cause de la prolifération de la bactérie mortelle de la légionnelle.'),(144,'Description à compléter'),(145,'Texte à compléter'),(146,'Nettoyage à l\'usage'),(147,'Problématique à compléter'),(148,'Description à compléter'),(149,'Texte à compléter'),(150,'Gestion des espaces'),(151,'Le coût élevé du mètre carré dans les immobiliers tertiaires incite les entreprises à revoir l\'utilisation de l\'espace pour en optimiser chaque m².'),(152,'Optimisation des espaces'),(153,'Le coût élevé du mètre carré dans les immobiliers tertiaires incite les entreprises à revoir l\'utilisation de l\'espace pour en optimiser chaque m²'),(154,'Disponibilité des espaces collaboratifs '),(155,'Problématique à compléter'),(156,'Description à compléter'),(157,'Texte à compléter'),(158,'Disponibilité des places de parking'),(159,'Problématique à compléter'),(160,'Description à compléter'),(161,'Texte à compléter'),(162,'Fréquentation et affluence'),(163,'Problématique à compléter'),(164,'Description à compléter'),(165,'Texte à compléter'),(166,'Etude d\'occupation'),(167,'Problématique à compléter'),(168,'Description à compléter'),(169,'Texte à compléter'),(170,'Exploitez le potentiel de votre patrimoine'),(171,'Boostez votre transition environnementale'),(172,'Renforcez votre responsabilité sociétale'),(173,'Révélez le potentiel de vos espaces'),(174,'Combien de groupes froid ?'),(175,'number'),(176,'Données nécessaires :'),(177,'Données de fonctionnement (uniquement si le groupe froid a une interface Modbus disponible)'),(178,'Nombre de CTA :'),(179,'number'),(180,'Données nécessaires :'),(181,'Delta P'),(182,'Delta P + intensité moteur'),(183,'Données de fonctionnement (uniquement s\'il existe une interface Modbus inutilisée)'),(184,'Combien de détecteurs de fumée ?'),(185,'number'),(186,'Données nécessaires :'),(187,'Données nécessaires :'),(188,'Détection fumée (IoT correspondant : détecteur de fumée)'),(189,'Combien y en a-t-il ?'),(190,'number'),(191,'Quel est le type d\'espace ?'),(192,'Box'),(193,'Salle de réunion'),(194,'Données nécessaires :'),(195,'Présence, luminosité'),(196,'Présence, luminosité + ouverture/fermeture porte'),(197,'Combien y en a-t-il ?'),(198,'number'),(199,'Quel est le type de place ?'),(200,'Vélo'),(201,'Voiture'),(202,'Données nécessaires :'),(203,'Occupation place'),(204,'Occupation place + signalisation visuelle'),(205,'Souhaitez-vous ajouter un autre compteur ?'),(206,'Oui'),(207,'Non'),(208,'Sélectionnez un compteur à ajouter :'),(209,'Robeau DN15'),(210,'Robeau DN20'),(211,'Robeau DN25'),(212,'Compteur d\'eau connecté DN15 (1.6m3/h; R400; L110)'),(213,'Compteur d\'eau connecté DN15 (2.5m3/h; R400; L110)'),(214,'Compteur d\'eau connecté DN15 (2.5m3/h; R400; L170)'),(215,'Compteur d\'eau connecté DN20 (2.5m3/h; R400; L110)'),(216,'Compteur d\'eau connecté DN20 (4m3/h; R400; L110)'),(217,'Compteur d\'eau connecté DN40'),(218,'Compteur d\'eau connecté DN50'),(219,'Compteur d\'eau connecté DN80'),(220,'Compteur d\'eau connecté DN65'),(221,'Compteur d\'eau connecté DN32'),(222,'Compteur d\'eau connecté DN100'),(223,'Combien ?'),(224,'number'),(225,'Le capteur peut avoir jusqu\'à 4 entrées impulsionnelles. Combien de capteurs ESG-Logger-PULSE vous faut-il ?'),(226,'number'),(227,'Combien de compteurs d\'eau ont une interface impulsionnelle ?'),(228,'number'),(229,'Le plan de comptage eau est-il existant ou inexistant ?'),(230,'Existant'),(231,'Inexistant'),(232,'Données nécessaires :'),(233,'Consommation d\'eau'),(234,'Combien y en a-t-il ?'),(235,'number'),(236,'Type d\'espaces :'),(237,'Box'),(238,'Salle de réunion'),(239,'Bureau fermé'),(240,'Open Space'),(241,'Sanitaire'),(242,'Données nécessaires :'),(243,'Présence, luminosité'),(244,'Combien d\'entrées/sortie ?'),(245,'number'),(246,'Données nécessaires :'),(247,'Comptage de personnes entrée/sortie'),(248,'Combien ?'),(249,'number'),(250,'Type de local :'),(251,'Local technique'),(252,'Bureau'),(253,'Données nécessaires : '),(254,'Inondation au sol pour bureaux (tertiaire)'),(255,'Inondation au sol pour locaux techniques (industriel)'),(256,'Combien de départ/retour production ECS à surveiller ?'),(257,'number'),(258,'Données nécessaires :'),(259,'Température de contact eau chaude sanitaire'),(260,'Est-il possible de raccorder les deux interfaces modbus au même capteur ?'),(261,'Oui'),(262,'Non'),(263,'Est-il possible de raccorder les deux interfaces modbus au même capteur ?'),(264,'Oui'),(265,'Non'),(266,'Préconisations : 1. Les deux compteurs doivent avoir une interface Modbus/RS485. Les deux interfaces doivent être raccordées au même capteur. /2. Vérifier s\'il est possible d\'ajouter une carte Modbus dans le compteur de production. /3. Remplacer le compteur électrique par un compteur avec interface Modbus/RS485.'),(267,'Ok'),(268,'Les compteurs de consommation et de production ont-ils une interface Modbus/RS485 ?'),(269,'Oui'),(270,'Non'),(271,'Données nécessaires :'),(272,'Comptage consommation & production énergétique'),(273,'Combien de zone à équiper ?'),(274,'number'),(275,'Données nécessaires :'),(276,'Borne de satisfaction'),(277,'Borne de pointage'),(278,'Présence, luminosité'),(279,'Est-il possible de raccorder les sorties analogiques au même capteur ?'),(280,'Oui'),(281,'Non'),(282,'Est-il possible de raccorder les sorties TOR au même capteur ?'),(283,'Oui'),(284,'Non'),(285,'Combien d\'entrées ?'),(286,'number'),(287,'Combien d\'entrées/sorties ?'),(288,'number'),(289,'Type d\'information : '),(290,'Analogique tension (2 entrées 0-10V par capteur)'),(291,'Analogique courant (2 entrées 4-20mA par capteur)'),(292,'Tout ou rien (4 entrées/sorties contact sec/capteur)'),(293,'Données nécessaires :'),(294,'Analogiques 0-10V ou 4-20mA (IoT correspondant : Analog)'),(295,'Tout ou rien (contact sec) (IoT correspondant : Dry Contacts)'),(296,'Combien de contenants à équiper ?'),(297,'number'),(298,'Données nécessaires :'),(299,'Niveau de remplissage'),(300,'Combien y en a-t-il ?'),(301,'number'),(302,'Type d\'espaces :'),(303,'Box'),(304,'Salle de réunion'),(305,'Bureau fermé'),(306,'Open Space'),(307,'Données nécessaires :'),(308,'Température, Hr, CO2'),(309,'GreenMe'),(310,'Combien de bornes de satisfaction ?'),(311,'number'),(312,'Données nécessaires :'),(313,'Borne de satisfaction'),(314,'Données nécessaires :'),(315,'Comptage énergétique'),(316,'Combien vous en faut-il ?'),(317,'number'),(318,'Réponse automatique : réseau public (nombre d\'IoT supérieur ou égal à 6)'),(319,'Nombre de box à équiper :'),(320,'number'),(321,'Nombre de salle(s) de réunion à équiper :'),(322,'number'),(323,'1 Modbus peut être relié à 2 compteurs. Combien vous faut-il de compteurs ?'),(324,'number'),(325,'Sachant qu\'il faut un capteur Modbus pour 2 compteurs, combien de capteurs Modbus vous faut-il ?'),(326,'number'),(327,'Nombre de compteurs : '),(328,'number'),(329,'Il peut y avoir 4 entrées maximum par capteur. Combien de capteurs vous faut-il ?'),(330,'number'),(331,'Combien y a-t-il de sorties TOR à raccorder ?'),(332,'number'),(333,'Est-il possible de raccorder les sorties TOR au même capteur ?'),(334,'Oui'),(335,'Non'),(336,'Il peut y avoir 2 entrées maximum par capteurs. Combien de capteurs vous faut-il ?'),(337,'number'),(338,'Combien y a-t-il de sorties analogiques à raccorder ?'),(339,'number'),(340,'Est-il possible de raccorder les sorties analogiques au même capteur ?'),(341,'Oui'),(342,'Non'),(343,'Nombre de places de vélos à équiper :'),(344,'number'),(345,'Nombre de places de voitures à équiper :'),(346,'number'),(347,'Nombre de sanitaires à équiper :'),(348,'number'),(349,'Nombre d\'Open Space à équiper :'),(350,'number'),(351,'Nombre de bureaux fermés à équiper :'),(352,'number'),(353,'Nombre de salles de réunion à équiper :'),(354,'number'),(355,'Nombre de box à équiper :'),(356,'number'),(357,'Nombre d\'Open Space à équiper :'),(358,'number'),(359,'Nombre de bureaux fermés à équiper :'),(360,'number'),(361,'Nombre de salles de réunion à équiper :'),(362,'number'),(363,'Nombre de Box à équiper :'),(364,'number'),(365,'Données nécessaires :'),(366,'Delta P'),(367,'Delta P + intensité moteur (50A)'),(368,'Delta P + intensité moteur (100A)'),(369,'Données de fonctionnement (uniquement s\'il existe une interface Modbus disponible)'),(370,'Données nécessaires :'),(371,'Analogique tension (0-10V)'),(372,'Analogique courant (4-20 mA)'),(373,'Tout ou rien (contact sec)'),(374,'Nombre de bureaux à équiper :'),(375,'number'),(376,'Nombre de locaux techniques à équiper :'),(377,'number');
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cont_offre`
--

LOCK TABLES `cont_offre` WRITE;
/*!40000 ALTER TABLE `cont_offre` DISABLE KEYS */;
INSERT INTO `cont_offre` VALUES (2,9,10,'/assets/images/actifstechniques_offre1.jpg'),(3,74,75,'/assets/images/actifstechniques_offre2.jpg'),(4,76,77,'/assets/images/actifstechniques_offre3.jpg'),(5,106,107,'/assets/images/environnement_offre1.jpg'),(6,124,125,'/assets/images/environnement_offre2.jpg'),(7,130,131,'/assets/images/santeetbienetre_offre1.jpg'),(8,140,141,'/assets/images/santeetbienetre_offre2.jpg'),(9,150,151,'/assets/images/espaces_offre1.jpg'),(10,152,153,'/assets/images/espaces_offre3.jpg');
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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cont_solution`
--

LOCK TABLES `cont_solution` WRITE;
/*!40000 ALTER TABLE `cont_solution` DISABLE KEYS */;
INSERT INTO `cont_solution` VALUES (3,11,12,'/assets/images/actifstechniques_productiondefroid.jpg',13,14),(4,15,16,'/assets/images/actifstechniques_productiondechaud.jpg',17,18),(7,86,89,'/assets/images/actifstechniques_centraledetraitementdair.jpg',87,88),(9,94,97,'/assets/images/actifstechniques_rondesdexploitationdigitalisees.jpg',95,96),(10,98,101,'/assets/images/actifstechniques_detectionfumee.jpg',99,100),(11,102,105,'/assets/images/actifstechniques_inondation.jpg',103,104),(13,112,115,'/assets/images/environnement_consommationsenergetiques28decrettertiairecpe29.jpg',113,114),(14,116,119,'/assets/images/environnement_eau.jpg',117,118),(15,120,123,'/assets/images/environnement_monitoringdesequipementsindustriels28financementcee29.jpg',121,122),(16,126,129,'/assets/images/environnement_rondesdigitalisees.jpg',127,128),(17,132,135,'/assets/images/santeetbienetre_santeetenvironnementdetravail.jpg',133,134),(18,136,139,'/assets/images/santeetbienetre_satisfactiondesusagers.jpg',137,138),(19,142,145,'/assets/images/santeetbienetre_legionelleecs.jpg',143,144),(20,146,149,'/assets/images/santeetbienetre_nettoyagealusage.jpg',147,148),(21,154,157,'/assets/images/espaces_disponibilitedesespacescollaboratifs.jpg',155,156),(22,158,161,'/assets/images/espaces_disponibilitedesplacesdeparking.jpg',159,160),(23,162,165,'/assets/images/espaces_frequentationetaffluence.png',163,164),(24,166,169,'/assets/images/espaces_etudedoccupation.jpg',167,168);
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
INSERT INTO `cost` VALUES (1,'LoRaWan','2','OPEX','Orange'),(2,'Box','448','CAPEX','Wattsense'),(3,'IoT','14','OPEX','Wattsense'),(4,'S','32','OPEX','Wattsense'),(5,'M','51','OPEX','Wattsense'),(6,'L','135','OPEX','Wattsense'),(7,'Satellite','14,4','OPEX','Wattsense'),(8,'S','10','OPEX','IoThink'),(9,'M','16','OPEX','IoThink'),(10,'L','21','OPEX','IoThink'),(11,'XL','25','OPEX','IoThink');
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
) ENGINE=InnoDB AUTO_INCREMENT=134 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data`
--

LOCK TABLES `data` WRITE;
/*!40000 ALTER TABLE `data` DISABLE KEYS */;
INSERT INTO `data` VALUES (1,'2 Entrées 0-10V / 4-20mA','2'),(2,'Température',''),(3,'Humidité',''),(4,'Bouton',''),(5,'Contact sec',''),(6,'Ouvrants',''),(7,'Ouverture/fermeture',''),(8,'Intensité de courant 100A',''),(9,'Intensité de courant 50A',''),(10,'Pression différentielle',''),(11,'2 E/S contact sec',''),(12,'Entrée 0-10V',''),(13,'Double niveau fluide',''),(14,'4 Entrées/Sorties contact sec',''),(15,'Qualité réseau LoRaWAN',''),(16,'Modbus RTU',''),(17,'Présence',''),(18,'Bruit',''),(19,'Luminosité',''),(20,'Impulsions de comptage ',''),(21,'Impulsions de comptage gaz',''),(22,'Impulsions de comptage gaz avec connecteur Binder DIN 6p',''),(23,'Impulsions de comptage gaz avec connecteur Gazpar 2p',''),(24,'Température déportée + ambiance',''),(25,'Température déportée x 2',''),(26,'Télé Information Client compteurs électriques',''),(27,'Eau au sol, le long d\'un mur ou autour d\'un tuyau',''),(28,'Eau au sol, à un endroit précis',''),(29,'Compteur d\'eau connecté',''),(30,'Présence véhicule',''),(31,'Distance',''),(32,'Accélération',''),(33,'Fuite',''),(34,'Eau au sol',''),(35,'Mouvement',''),(36,'CO2',''),(37,'COV',''),(38,'Occupation',''),(39,'Son',''),(40,'Cadenas connecté',''),(41,'Scellé réutilisable',''),(42,'Indicateur lumineux LED 25cm',''),(43,'Indicateur lumineux LED 55cm',''),(44,'Indicateur lumineux LED 75cm',''),(45,'Indicateur lumineux LED 105cm',''),(46,'Indicateur lumineux LED 150cm',''),(47,'Position',''),(48,'Alerte',''),(49,'Inclinaison',''),(50,'Sirène',''),(51,'Mesure de distance 0-4m',''),(52,'Consommation électrique 3 phases',''),(53,'Détection de présence de corps froids',''),(54,'Géolocalisation indoor/outdoor sans GPS',''),(55,'Géolocalisation indoor/outdoor avec GPS',''),(56,'Géolocalisation indoor/outdoor sans GPS de taille réduite',''),(57,'Balise de zone, complémentaire à la gamme Tracer',''),(58,'Reader Bluetooth, complémentaire à la gamme Tracer',''),(59,'Position GPS',''),(60,'Prise électrique connectée',''),(61,'Contrôle éclairage urbain',''),(62,'Prise contrôlée à distance',''),(63,'Consommation électrique',''),(64,'Pression',''),(65,'1 Entrée/Sortie 230Vac',''),(66,'16 Entrées / 8 Sorties contact sec',''),(67,'PM',''),(68,'Pluie',''),(69,'Rosée',''),(70,'Vent',''),(71,'Vibration',''),(72,'Satisfaction',''),(73,'Annulation d\'action',''),(74,'Badgeage',''),(75,'Multiservices',''),(76,'Preuve de présence',''),(77,'Demande/annulation d\'une action',''),(78,'Ouverture/fermeture vanne',''),(79,'Niveau de liquide',''),(80,'Niveau de gaz liquide',''),(81,'Niveau de solides',''),(82,'Impulsions de comptage ',''),(83,'Collecte de données IoT en LoRaWAN (jusqu\'à 100 IoT) abonnement de 168€/an à partir de l\'année 2',''),(84,'Impulsions lumineuses',''),(85,'Température ext',''),(86,'Hygromètire ext',''),(87,'Comptage de personnes ',''),(88,'happy/unhappy',''),(89,'Détection fumée et génération alerte sonore et lumineuse',''),(90,'Boitier communicant avec 4 entrées pour débimètre (1 débimètre DN15/20/25 fourni avec le boitier)',''),(91,'Débimètre DN15',''),(92,'Débimètre DN20',''),(93,'Débimètre DN25',''),(94,'Compteur d\'eau communicant DN32',''),(95,'Compteur d\'eau communicant DN40',''),(96,'Compteur d\'eau communicant DN50',''),(97,'Compteur d\'eau communicant DN65',''),(98,'Compteur d\'eau communicant DN80',''),(99,'Compteur d\'eau communicant DN100',' '),(100,'Capteur Température + Humidité [Nouvelle version]',NULL),(101,'Capteur IP66  Température + Humidité [Nouvelle version]',NULL),(102,'Capteur \"Air Quality\"  Haute précision, Température + Humidité + CO2 + COV',NULL),(103,'Transmetteur de température 1 x sonde numérique incluse',NULL),(104,'Transmetteur de température 2 x sondes numériques incluses',NULL),(105,'Transmetteur de température 2 entrées pour sondes PT100 ou PT1000 (non fournies)',NULL),(106,'Transmetteur de température 1 x sonde PT1000 Classe A incluse (-50/+200°C câble Teflon 2 mètres)',NULL),(107,'Transmetteur de température 2 x sondes PT1000 Classe A incluses (-50/+200°C câble Teflon 2 mètres)',NULL),(108,'\"Temperature  Cold Room\" (Chambres froides), Température instantanée + inertie + Hygrométrie',NULL),(109,'Transmetteur d\'index compteur et/ou report d\'état, 4 entrées: ToR ou comptage impulsionnel',NULL),(110,'Transmetteur d\'index compteur de gaz (ATEX zone 2) , 2 entrées: ToR ou comptage impulsionnel',NULL),(111,'Transmetteur 1 entrée analogique 4-20 mA/0-10 V [Antenne non incluse]',NULL),(112,'Gateway Modbus Maître, Ecriture / Lecture de registres Modbus (jusqu\'à 49 requêtes Modbus et 49 esclaves possibles) [Antenne non incluse]',NULL),(113,'2 entrées: ToR ou comptage impulsionnel + 1 sortie: ToR [Antenne non incluse]',NULL),(114,'4 entrées: ToR ou comptage impulsionnel + 4 sorties: ToR [Antenne non incluse]',NULL),(115,'8 entrées: ToR ou comptage impulsionnel [Antenne non incluse]',NULL),(116,'8 entrées: ToR ou comptage impulsionnel + 8 sorties: ToR [Antenne non incluse]',NULL),(117,'version 16 entrées: ToR dont 8 configurable comptage impulsionnel [Antenne non incluse]',NULL),(118,'Détecteur infrarouge plafonnier 360°',NULL),(119,'Détecteur infrarouge mural 90°',NULL),(120,'Détecteur IP54 infrarouge mural 90°',NULL),(121,'Détecteur IP55 infrarouge mural 180°',NULL),(122,'Barrière photoélectrique 30m [Piles non fournies]',NULL),(123,'Barrière photoélectrique 100m [Piles non fournies]',NULL),(124,'Transmetteur de mesure de niveau par ultrasons, Distance max : 5m',NULL),(125,'Détection de liquide par électrodes [câble de détection en option]',NULL),(126,'Détection de liquide par électrodes, IP68, [Antenne externe 1/4 d\'onde avec 4m de câble incluse] [câble de détection en option]',NULL),(127,'Localisation et détection de liquide par câble [Câble non fourni]',NULL),(128,'Répéteur de réseau LoRaWAN-Orange, jusqu\'à 6x produits LoRaWAN [Bloc secteur fourni]',NULL),(129,'Répéteur de réseau LoRa jusqu\'à 6x ACW (ATIM) [Bloc secteur fourni]',NULL),(130,'Répéteur de réseau Sigfox jusqu\'à 6x ACW (ATIM) [Bloc secteur fourni]',NULL),(131,'Gateway compacte LoRaWAN  [Network server intégré + bloc alim 220V/12V + antenne ANT868-12FSC]',NULL),(132,'Gateway industrielle LoRaWAN [Network server intégré + antenne ANT868-12FSC]',NULL),(133,'Gateway outdoor LoRaWAN [Network server intégré + alim PoE 220Vac, Antenne non incluse]',NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=257 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `data_binding`
--

LOCK TABLES `data_binding` WRITE;
/*!40000 ALTER TABLE `data_binding` DISABLE KEYS */;
INSERT INTO `data_binding` VALUES (1,1,1),(2,2,2),(3,2,3),(4,2,4),(5,2,5),(6,3,2),(7,3,3),(8,3,4),(9,3,6),(10,4,7),(11,5,8),(12,6,9),(13,7,10),(14,7,11),(15,7,12),(16,8,13),(17,9,14),(18,10,15),(19,11,16),(20,12,17),(21,12,19),(22,12,4),(23,12,5),(24,13,20),(25,14,21),(26,15,22),(27,16,23),(28,17,24),(29,18,25),(30,19,26),(31,20,27),(32,21,28),(33,22,29),(34,23,29),(35,24,29),(36,25,29),(37,26,29),(38,27,2),(39,27,3),(40,27,6),(41,27,32),(42,27,34),(43,28,6),(44,28,32),(45,29,2),(46,29,3),(47,29,19),(48,29,35),(49,30,2),(50,30,3),(51,30,19),(52,30,35),(53,30,36),(54,31,2),(55,31,3),(56,31,36),(57,32,2),(58,32,3),(59,32,19),(60,32,35),(61,32,37),(62,33,2),(63,33,3),(64,33,19),(65,33,35),(66,33,38),(67,34,2),(68,34,3),(69,34,19),(70,34,35),(71,34,38),(72,35,2),(73,35,3),(74,36,2),(75,36,3),(76,36,19),(77,36,35),(78,36,39),(79,37,40),(80,37,41),(81,38,42),(82,39,43),(83,40,44),(84,41,45),(85,42,46),(86,43,6),(87,44,50),(88,45,35),(89,46,51),(90,46,53),(91,47,82),(92,48,54),(93,49,55),(94,50,56),(95,51,57),(96,52,58),(97,53,60),(98,54,66),(99,55,2),(100,55,3),(101,55,64),(102,56,2),(103,56,3),(104,56,64),(105,56,67),(106,57,2),(107,57,3),(108,57,64),(109,57,68),(110,57,69),(111,57,70),(112,58,2),(113,58,3),(114,58,64),(115,58,68),(116,58,69),(117,58,70),(118,59,2),(119,59,3),(120,59,64),(121,59,68),(122,59,69),(123,59,70),(124,59,67),(125,60,2),(126,60,3),(127,60,64),(128,60,68),(129,60,69),(130,60,70),(131,60,67),(132,61,71),(133,62,72),(134,63,73),(135,63,74),(136,64,75),(137,65,76),(138,66,77),(139,66,74),(140,67,74),(141,68,78),(142,69,78),(143,70,78),(144,71,78),(145,72,78),(146,73,78),(147,74,78),(148,75,78),(149,76,79),(150,77,80),(151,78,81),(152,79,83),(153,80,84),(154,81,85),(155,81,86),(156,82,87),(157,83,2),(158,83,3),(159,83,19),(160,83,18),(161,83,37),(162,83,89),(163,84,2),(164,84,3),(165,84,19),(166,84,18),(167,84,36),(168,84,88),(169,85,89),(170,86,90),(171,87,91),(172,88,92),(173,89,93),(174,90,94),(175,91,95),(176,92,96),(177,93,97),(178,94,98),(179,95,99),(180,96,100),(181,97,101),(182,98,102),(183,99,103),(184,100,104),(185,101,105),(186,102,106),(187,103,107),(188,104,108),(189,105,109),(190,106,110),(191,107,111),(192,108,112),(193,109,113),(194,110,114),(195,111,115),(196,112,116),(197,113,117),(198,114,118),(199,115,119),(200,116,120),(201,117,121),(202,118,122),(203,119,123),(204,120,124),(205,121,125),(206,122,126),(207,123,127),(208,124,128),(209,125,129),(210,126,130),(211,127,131),(212,128,132),(213,129,133);
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
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `fk_binding`
--

LOCK TABLES `fk_binding` WRITE;
/*!40000 ALTER TABLE `fk_binding` DISABLE KEYS */;
INSERT INTO `fk_binding` VALUES (2,2,2),(3,2,3),(4,2,4),(5,3,5),(6,3,6),(7,4,7),(8,4,8),(9,5,9),(10,5,10);
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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offre_binding`
--

LOCK TABLES `offre_binding` WRITE;
/*!40000 ALTER TABLE `offre_binding` DISABLE KEYS */;
INSERT INTO `offre_binding` VALUES (3,2,3),(4,2,4),(7,2,7),(9,3,9),(10,4,10),(11,4,11),(13,5,13),(14,5,14),(15,5,15),(16,6,16),(17,7,17),(18,7,18),(19,8,19),(20,8,20),(21,9,21),(22,9,22),(23,9,23),(24,10,24);
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
  `picture` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=131 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (1,'Adeunis','Analog','ARF8190BA','Pile interchangeable','89','/assets/images/capteurs/1.jpg'),(2,'Adeunis','Comfort ','ARF8200AA','Pile interchangeable','89','/assets/images/capteurs/2.jpg'),(3,'Adeunis','Comfort et ouverture/fermeture','ARF8275AA','Pile interchangeable','119','/assets/images/capteurs/3.png'),(4,'Adeunis','Contact Sensor (Dry Contacts)','ARF8275AAB01','Pile interchangeable','109','/assets/images/capteurs/4.jpg'),(5,'Adeunis','Current Sensor 100A (Analog)','ARF8170BAB01','Pile interchangeable','134','/assets/images/capteurs/5.jpg'),(6,'Adeunis','Current Sensor 50A (Analog)','ARF8190BAB02','Pile interchangeable','129','/assets/images/capteurs/6.jpg'),(7,'Adeunis','Delta P','ARF8190BAB01','Pile interchangeable','139','/assets/images/capteurs/7.jpg'),(8,'Adeunis','Double Level Sensor (Dry Contacts)','ARF8283AA','Pile interchangeable','119','/assets/images/capteurs/8.jpg'),(9,'Adeunis','Dry Contacts','ARF8170BAB02','Pile interchangeable','79','/assets/images/capteurs/9.jpg'),(10,'Adeunis','Field Test Device (FTD)','ARF8170BA','Batterie rechargeable','189','/assets/images/capteurs/10.jpg'),(11,'Adeunis','Modbus','ARF8123AA','Alimentation externe','189','/assets/images/capteurs/11.jpg'),(12,'Adeunis','Motion','ARF8240AA','Pile interchangeable','99','/assets/images/capteurs/12.jpg'),(13,'Adeunis','Pulse','ARF8276AAB01','Pile soudée','89','/assets/images/capteurs/13.jpg'),(14,'Adeunis','Pulse ATEX','ARF8230AA','Pile soudée','99','/assets/images/capteurs/14.png'),(15,'Adeunis','Pulse ATEX Binder','ARF8230FA','Pile soudée','129','/assets/images/capteurs/15.png'),(16,'Adeunis','Pulse ATEX Gazpar','ARF8230FAB01','Pile soudée','129','/assets/images/capteurs/16.png'),(17,'Adeunis','Temp','ARF8230FAB02','Pile interchangeable','109','/assets/images/capteurs/17.jpg'),(18,'Adeunis','Temp 2S ','ARF8180BCA','Pile interchangeable','139','/assets/images/capteurs/18.jpg'),(19,'Adeunis','TIC','ARF8180BCB','Auto alimenté','179','/assets/images/capteurs/19.png'),(20,'Adeunis','Water Leak Cable (Dry Contacts)','ARF8250AAV2','Pile interchangeable','149','/assets/images/capteurs/20.jpg'),(21,'Adeunis','Water Leak Spot (Dry Contacts)','ARF8170BAB03','Pile interchangeable','189','/assets/images/capteurs/21.jpg'),(22,'Axioma','Qalcosonic W1, 1.6m3/h, R400, L110, DN15','AXQW16110DN15T3','Pile soudée','75','/assets/images/capteurs/22.jpg'),(23,'Axioma','Qalcosonic W1, 2.5m3/h, R400, L110, DN15','AXQW25110DN15T3','Pile soudée','75','/assets/images/capteurs/23.jpg'),(24,'Axioma','Qalcosonic W1, 2.5m3/h, R400, L110, DN20','AXQW25110DN20T3','Pile soudée','75','/assets/images/capteurs/24.jpg'),(25,'Axioma','Qalcosonic W1, 2.5m3/h, R400, L170, DN15','AXQW25170DN15T3','Pile soudée','75','/assets/images/capteurs/25.jpg'),(26,'Axioma','Qalcosonic W1, 4m3/h, R400, L110, DN20','AXQW4110DN20T3','Pile soudée','75','/assets/images/capteurs/26.jpg'),(27,'Elsys','EMS','ELSEMS','Pile interchangeable','55','/assets/images/capteurs/27.jpg'),(28,'Elsys','EMS Door','ELSEMSDOOR','Pile interchangeable','51','/assets/images/capteurs/28.jpg'),(29,'Elsys','ERS','ELSERS','Pile interchangeable','76','/assets/images/capteurs/29.jpg'),(30,'Elsys','ERS CO2','ELSERSCO2','Pile interchangeable','168','/assets/images/capteurs/30.jpg'),(31,'Elsys','ERS CO2 Lite','ELSERSCO2LITE','Pile interchangeable','155','/assets/images/capteurs/31.jpg'),(32,'Elsys','ERS COV','ELSERSCOV','Pile interchangeable','177','/assets/images/capteurs/32.jpg'),(33,'Elsys','ERS Desk','ELSERSDESK','Pile interchangeable','81','/assets/images/capteurs/33.jpg'),(34,'Elsys','ERS Eye','ELSERSEYE','Pile interchangeable','140','/assets/images/capteurs/34.jpg'),(35,'Elsys','ERS Lite','ELSERSLITE','Pile interchangeable','53','/assets/images/capteurs/35.jpg'),(36,'Elsys','ERS Sound','ELSERSSOUND','Pile interchangeable','152','/assets/images/capteurs/36.jpg'),(37,'Ineo Sense','ACS Padlock','ACS-PAD-NFVI-X8X-510','Pile interchangeable','219','/assets/images/capteurs/37.jpg'),(38,'Ineo Sense','ACS Report LED 25cm','ACS-REP-LDMMIR-X89-640','Pile interchangeable','164','/assets/images/capteurs/38.jpg'),(39,'Ineo Sense','ACS Report LED 55cm','ACS-REP-LDMMIR-X89-641','Pile interchangeable','169','/assets/images/capteurs/39.jpg'),(40,'Ineo Sense','ACS Report LED 75cm','ACS-REP-LDMMIR-X89-642','Pile interchangeable','179','/assets/images/capteurs/40.jpg'),(41,'Ineo Sense','ACS Report LED 105cm','ACS-REP-LDMMIR-X89-643','Pile interchangeable','179','/assets/images/capteurs/41.jpg'),(42,'Ineo Sense','ACS Report LED 150cm','ACS-REP-LDMMIR-X89-644','Pile interchangeable','179','/assets/images/capteurs/42.jpg'),(43,'Ineo Sense','ACS Switch','ACS-INO-MMIR-X89-610','Pile interchangeable','65','/assets/images/capteurs/43.jpg'),(44,'Ineo Sense','ACS Switch Buzz','ACS-IWO-BZBLMM-X89-510','Pile interchangeable','91','/assets/images/capteurs/44.jpg'),(45,'Ineo Sense','ACS Switch PIR','ACS-INO-PIMMIR-X89-411','Pile interchangeable','87','/assets/images/capteurs/45.jpg'),(46,'Ineo Sense','ACS Switch Range','ACS-INO-TOMMIR-X89-610','Pile interchangeable','92','/assets/images/capteurs/46.jpg'),(47,'Ineo Sense','ESG-Logger-PULSE','ESG-INO-PUIR-X89-610','Pile interchangeable','48','/assets/images/capteurs/47.jpg'),(48,'Ineo Sense','TRK-Tracer','TRK-INO-MAIR-X89-610','Pile interchangeable','65','/assets/images/capteurs/48.jpg'),(49,'Ineo Sense','TRK Tracer GPS','TRK-INO-GPMAIR-X89-610','Pile interchangeable','96','/assets/images/capteurs/49.jpg'),(50,'Ineo Sense','TRK-Tracer-SLIM','TRK-SLI-MAPB-X89-460','Pile interchangeable','48','/assets/images/capteurs/50.jpg'),(51,'Ineo Sense','TRK-Zon','TRK-ZON-MAIR-X89-640','Pile interchangeable','195','/assets/images/capteurs/51.jpg'),(52,'Ineo Sense','Blueread','INS-BLR-ST-X89-510','Pile interchangeable','230','/assets/images/capteurs/52.jpg'),(53,'MCF88','Energy Meter plug with On/Off','MCFMCFLW12PLG','Pile interchangeable','176','/assets/images/capteurs/53.jpg'),(54,'MCF88','Multi I/O module','MCFMCFLW13MIO','Pile interchangeable','299','/assets/images/capteurs/54.jpg'),(55,'MCF88','Outdoor environmental sensor','MCFMCFLW12TERWP','Pile interchangeable','233','/assets/images/capteurs/55.jpg'),(56,'MCF88','Outdoor PM and environmental sensor','MCFMCFLW12TERPM','Batterie rechargeable','563','/assets/images/capteurs/56.jpg'),(57,'MCF88','Weather Station','MCFMCFLWWS00','Batterie rechargeable','2375','/assets/images/capteurs/57.jpg'),(58,'MCF88','Weather Station Basic','MCFMCFLWWS02','Batterie rechargeable','1938','/assets/images/capteurs/58.jpg'),(59,'MCF88','Weather Station Basic with PM sensor','MCFMCFLWWS03','Batterie rechargeable','2250','/assets/images/capteurs/59.jpg'),(60,'MCF88','Weather Station with PM sensor','MCFMCFLWWS01','Batterie rechargeable','2688','/assets/images/capteurs/60.jpg'),(61,'NKE','Bob','EOS600011040EUN','Pile soudée','580','/assets/images/capteurs/61.jpg'),(62,'Skiply','Smilio A – 3 smileys','SKISKPF170068','Pile interchangeable','139','/assets/images/capteurs/62.jpg'),(63,'Skiply','Smilio A – Annulation (2 boutons)','SKISKPF170065','Pile interchangeable','109','/assets/images/capteurs/63.jpg'),(64,'Skiply','Smilio A – Multiservices (5 boutons)','SKISKPF170067','Pile interchangeable','109','/assets/images/capteurs/64.jpg'),(65,'Skiply','Smilio A – Pointage (5 boutons)','SKPF000105','Pile interchangeable','109','/assets/images/capteurs/65.jpg'),(66,'Skiply','Smilio A - Validation (3 boutons)','SKISKPF170066','Pile interchangeable','109','/assets/images/capteurs/66.jpg'),(67,'Skiply','Badge traçabilité intervention','SKISKPF170057','Aucune','10','/assets/images/capteurs/67.jpg'),(68,'Strega','Vanne connectée autonome Full All-in-one DN15','STRSVFDN15868BA','Pile interchangeable','306','/assets/images/capteurs/68.jpg'),(69,'Strega','Vanne connectée autonome Full All-in-one DN20','STRSVFDN20868BA','Pile interchangeable','314','/assets/images/capteurs/69.jpg'),(70,'Strega','Vanne connectée autonome Full All-in-one DN25','STRSVFDN25868BA','Pile interchangeable','326','/assets/images/capteurs/70.jpg'),(71,'Strega','Vanne connectée autonome Full Remote DN15','STRSVFDN15868BS','Pile interchangeable','306','/assets/images/capteurs/71.jpg'),(72,'Strega','Vanne connectée autonome Full Remote DN20','STRSVFDN20868BS','Pile interchangeable','314','/assets/images/capteurs/72.jpg'),(73,'Strega','Vanne connectée autonome Full Remote DN25','STRSVFDN25868BS','Pile interchangeable','326','/assets/images/capteurs/73.jpg'),(74,'Strega','Vanne connectée autonome Full Remote DN50','STRSVFDN50868BS','Pile interchangeable','558','/assets/images/capteurs/74.jpg'),(75,'Strega','Vanne connectée autonome Full Remote DN80','STRSVFDN80868BS','Pile interchangeable','820','/assets/images/capteurs/75.jpg'),(76,'Tekelek','Tekelek TEK-766 Oil/Liquid','TEK766','Pile soudée','144','/assets/images/capteurs/76.jpg'),(77,'Tekelek','Tekelek TEK-790 GPL','TEK790','Pile soudée','211','/assets/images/capteurs/77.jpg'),(78,'Tekelek','Tekelek TEK-839 Waste/Bin','TEKBINLORA','Pile soudée','300','/assets/images/capteurs/78.jpg'),(79,'Wattsense','Box (avec abonnement 1 an jusqu\'à 100 capteurs IoT)','WATBOX','Alimentation externe','616','/assets/images/capteurs/79.jpg'),(80,'SensingLab','Senlab M LED','Senlab M LED','Pile interchangeable','148,5','/assets/images/capteurs/80.jpg'),(81,'SensingLab','Senlab H','Senlab H','Pile soudée','239,49','/assets/images/capteurs/81.jpg'),(82,'Eurecam','Comptipix 3D','Comptipix 3D','Alimentation externe','730','/assets/images/capteurs/82.jpg'),(83,'GreenMe','GreenMe','GreenMe','Alimentation externe','172','/assets/images/capteurs/83.jpg'),(84,'GreenMe','GreenMe CO2','GreenMe CO2','Alimentation externe','252','/assets/images/capteurs/84.jpg'),(85,'IOT Factory','Détecteur de fumée','Détecteur de fumée','Pile interchangeable','58','/assets/images/capteurs/85.jpg'),(86,'Robeau ','Robeau boitier + 1 débimètre (DN15,20,25)','Robeau boitier + 1 débimètre (DN15,20,25)','Pile interchangeable','175','/assets/images/capteurs/86.jpg'),(87,'Robeau ','Robeau débimètre DN15','Robeau débimètre DN15','Aucune','20','/assets/images/capteurs/87.jpg'),(88,'Robeau ','Robeau débimètre DN20','Robeau débimètre DN20','Aucune','20','/assets/images/capteurs/88.jpg'),(89,'Robeau ','Robeau débimètre DN25','Robeau débimètre DN25','Aucune','25','/assets/images/capteurs/89.jpg'),(90,'Robeau ','Robeau compteur DN32','Robeau compteur DN32','Pile soudée','434,85','/assets/images/capteurs/90.jpg'),(91,'Robeau ','Robeau compteur DN40','Robeau compteur DN40','Pile soudée','502,18','/assets/images/capteurs/91.jpg'),(92,'Robeau ','Robeau compteur DN50','Robeau compteur DN50','Pile soudée','525,89','/assets/images/capteurs/92.jpg'),(93,'Robeau ','Robeau compteur DN65','Robeau compteur DN65','Pile soudée','551,76','/assets/images/capteurs/93.jpg'),(94,'Robeau ','Robeau compteur DN80','Robeau compteur DN80','Pile soudée','552,22','/assets/images/capteurs/94.jpg'),(95,'Robeau ','Robeau compteur DN100','Robeau compteur DN100','Pile soudée','600,64','/assets/images/capteurs/95.jpg'),(96,'ATIM','Température/humidité intérieur','ACW/THM-I','Pile interchangeable','90','/assets/images/capteurs/96.jpg'),(97,'ATIM','Température/humidité extérieur','ACW/THM-O','Pile interchangeable','123','/assets/images/capteurs/97.jpg'),(98,'ATIM','CO2/COV/température/humidité','ACW/THAQ','Pile interchangeable','167','/assets/images/capteurs/98.jpg'),(99,'ATIM','1x température déportée numérique','ACW/TM1D','Pile interchangeable','122','/assets/images/capteurs/99.jpg'),(100,'ATIM','2x températures déportées numériques','ACW/TM2D','Pile interchangeable','129','/assets/images/capteurs/100.jpg'),(101,'ATIM','Capteur pour 1x ou 2x températures déportées PT100/PT1000','ACW/TM0P','Pile interchangeable','118','/assets/images/capteurs/101.jpg'),(102,'ATIM','1x température déportée PT1000','ACW/TM1P','Pile interchangeable','131','/assets/images/capteurs/102.jpg'),(103,'ATIM','2x températures déportées PT1000','ACW/TM2P','Pile interchangeable','143','/assets/images/capteurs/103.jpg'),(104,'ATIM','Température/humidité déportée','ACW/TCR','Pile interchangeable','153','/assets/images/capteurs/104.jpg'),(105,'ATIM','4 entrées: ToR ou comptage impulsionnel','ACW/MR4','Pile interchangeable','93','/assets/images/capteurs/105.jpg'),(106,'ATIM','2 entrées: ToR ou comptage impulsionnel, ATEX zone 2','ACW/MR2-EX','Pile interchangeable','143','/assets/images/capteurs/106.jpg'),(107,'ATIM','1 entrée analogique 4-20 mA/0-10 V','ACW/DINDA','Alimentation externe','138','/assets/images/capteurs/107.jpg'),(108,'ATIM','Gateway Modbus Maître, Ecriture / Lecture de registres Modbus','ACW/DINRSM','Alimentation externe','173','/assets/images/capteurs/108.jpg'),(109,'ATIM','2 entrées: ToR ou comptage impulsionnel + 1 sortie: ToR','ACW/DIND21','Alimentation externe','139','/assets/images/capteurs/109.jpg'),(110,'ATIM','4 entrées: ToR ou compatage impulsionnel + 4 sorties: ToR','ACW/DIND44','Alimentation externe','200','/assets/images/capteurs/110.jpg'),(111,'ATIM','8 entrées: ToR ou compatage impulsionnel','ACW-DIND80','Alimentation externe','200','/assets/images/capteurs/111.jpg'),(112,'ATIM','8 entrées: ToR ou compatage impulsionnel + 8 sorties: ToR','ACW/DIND88','Alimentation externe','255','/assets/images/capteurs/112.jpg'),(113,'ATIM','version 16 entrées: ToR dont 8 configurable comptage impulsionnelle','ACW/DIND160','Alimentation externe','255','/assets/images/capteurs/113.jpg'),(114,'ATIM','Détecteur infrarouge plafonnier 360°, intérieur','ACW/PIR360-I','Pile interchangeable','118','/assets/images/capteurs/114.jpg'),(115,'ATIM','Détecteur infrarouge mural 90°, intérieur','ACW/PIR90-I','Pile interchangeable','106','/assets/images/capteurs/115.jpg'),(116,'ATIM','Détecteur IP54 infrarouge mural 90°, extérieur','ACW/PIR90-O','Pile interchangeable','236','/assets/images/capteurs/116.jpg'),(117,'ATIM','Détecteur IP55 infrarouge mural 180°, extérieur','ACW/PIR180-O','Pile interchangeable','325','/assets/images/capteurs/117.jpg'),(118,'ATIM','Barrière photoélectrique 30m','ACW/ILB30','Pile interchangeable','354','/assets/images/capteurs/118.jpg'),(119,'ATIM','Barrière photoélectrique 100m','ACW/ILB100','Pile interchangeable','387','/assets/images/capteurs/119.jpg'),(120,'ATIM','Capteur de niveau ultrason','ACW/LVL','Pile interchangeable','303','/assets/images/capteurs/120.jpg'),(121,'ATIM','Détection de liquide par électrodes, par câble en option','ACW/WL-I','Pile interchangeable','179','/assets/images/capteurs/121.jpg'),(122,'ATIM','Détection de liquide par électrodes, IP68, par câble en option','ACW/WL-O','Pile interchangeable','215','/assets/images/capteurs/122.jpg'),(123,'ATIM','Localisation et détection de liquide par câble','ACW/WLL-I','Pile interchangeable','215','/assets/images/capteurs/123.jpg'),(124,'ATIM','Répéteur LoRaWAN ORANGE (compatible multi-marques)','ACW/LW8-EXT','Alimentation externe','167','/assets/images/capteurs/124.jpg'),(125,'ATIM','Répéteur LoRaWAN (compatible uniquement avec produits ATIM)','ACW/LW8-GW','Alimentation externe','100','/assets/images/capteurs/125.jpg'),(126,'ATIM','Répéteur Sigfox (compatible uniquement avec produits ATIM)','ACW/SF8-GW','Alimentation externe','100','/assets/images/capteurs/126.jpg'),(127,'ATIM','Gateway LoRaWAN compacte','AGT/NS','Alimentation externe','366','/assets/images/capteurs/127.jpg'),(128,'ATIM','Gateway LoRaWAN Industrielle','AGT/INDUS','Alimentation externe','448','/assets/images/capteurs/128.jpg'),(129,'ATIM','Gateway LoRaWAN Outdoor','AGT/OUTDOOR','Alimentation externe','585','/assets/images/capteurs/129.jpg');
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
  `content` int(11) DEFAULT NULL,
  `type` text DEFAULT NULL,
  `info` text DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=94 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question`
--

LOCK TABLES `question` WRITE;
/*!40000 ALTER TABLE `question` DISABLE KEYS */;
INSERT INTO `question` VALUES (1,19,'radio','sous_solution'),(2,21,'number','nb_iot'),(3,22,'radio',''),(4,23,'select_all_iot',NULL),(5,24,'reseau','reseau'),(6,25,'radio',NULL),(7,26,'radio',NULL),(8,27,'radio',NULL),(9,28,'text',NULL),(10,29,'text',NULL),(11,30,'select',NULL),(12,31,'radio',NULL),(13,32,'radio',NULL),(14,33,'number',NULL),(15,34,'text',NULL),(16,174,'number','nb_iot'),(17,176,'radio','sous_solution'),(18,178,'number','nb_iot'),(19,180,'radio',NULL),(20,184,'number','nb_iot'),(22,187,'radio','sous_solution'),(24,191,'radio',NULL),(25,194,'radio','sous_solution'),(26,197,'number',NULL),(28,202,'radio','sous_solution'),(29,205,'radio',NULL),(30,208,'radio',NULL),(31,223,'number',NULL),(32,225,'number',NULL),(33,227,'number',''),(34,229,'radio',NULL),(35,232,'radio',NULL),(38,242,'radio','sous_solution'),(39,244,'number','nb_iot'),(40,246,'radio','sous_solution'),(41,248,'number',NULL),(42,250,'radio',NULL),(43,253,'radio','sous_solution'),(44,256,'number','nb_iot'),(45,258,'radio','sous_solution'),(46,260,'select',NULL),(47,263,'radio',NULL),(48,266,'radio',NULL),(49,268,'radio',NULL),(50,271,'radio','sous_solution'),(51,273,'number','nb_iot'),(52,275,'radio','sous_solution'),(53,279,'radio',NULL),(54,282,'radio',NULL),(55,285,'number',NULL),(56,287,'number',NULL),(59,296,'number','nb_iot'),(60,298,'radio','sous_solution'),(63,307,'radio','sous_solution'),(64,310,'number','nb_iot'),(65,312,'radio','sous_solution'),(66,314,'radio',NULL),(67,316,'number','nb_iot'),(68,319,'number','nb_iot'),(69,321,'number','nb_iot'),(71,325,'number','nb_iot'),(72,327,'number','nb_iot'),(73,329,'number','nb_iot'),(74,331,'number','nb_iot'),(75,333,'radio',NULL),(76,336,'number','nb_iot'),(77,338,'number','nb_iot'),(78,340,'radio',NULL),(79,343,'number','nb_iot'),(80,345,'number','nb_iot'),(81,347,'number','nb_iot'),(82,349,'number','nb_iot'),(83,351,'number','nb_iot'),(84,353,'number','nb_iot'),(85,355,'number','nb_iot'),(86,357,'number','nb_iot'),(87,359,'number','nb_iot'),(88,361,'number','nb_iot'),(89,363,'number','nb_iot'),(90,365,'radio','sous_solution'),(91,370,'radio','sous_solution'),(92,374,'number','nb_iot'),(93,376,'number','nb_iot');
/*!40000 ALTER TABLE `question` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `question_nombre_ref`
--

DROP TABLE IF EXISTS `question_nombre_ref`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `question_nombre_ref` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `id_question` int(11) DEFAULT NULL,
  `sous_solution` int(11) DEFAULT NULL,
  `nombre_iot` int(11) DEFAULT NULL,
  `product` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `id_question` (`id_question`),
  KEY `sous_solution` (`sous_solution`),
  KEY `product` (`product`),
  CONSTRAINT `FK__products` FOREIGN KEY (`product`) REFERENCES `products` (`id`),
  CONSTRAINT `FK__question` FOREIGN KEY (`id_question`) REFERENCES `question` (`id`),
  CONSTRAINT `FK__reponse` FOREIGN KEY (`sous_solution`) REFERENCES `reponse` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=63 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_nombre_ref`
--

LOCK TABLES `question_nombre_ref` WRITE;
/*!40000 ALTER TABLE `question_nombre_ref` DISABLE KEYS */;
INSERT INTO `question_nombre_ref` VALUES (1,20,39,1,85),(2,69,43,2,12),(3,69,44,2,12),(4,69,44,1,28),(5,68,43,1,12),(6,68,44,1,12),(7,68,44,1,28),(8,67,NULL,1,NULL),(12,16,33,1,11),(13,79,48,1,46),(14,80,48,1,46),(15,79,49,1,46),(16,79,49,1,39),(17,80,49,1,46),(18,80,49,1,39),(19,39,80,1,82),(20,85,78,1,12),(21,84,78,2,12),(22,83,78,1,12),(23,82,78,2,12),(24,81,78,2,12),(26,88,118,1,31),(27,87,118,1,31),(28,86,118,1,31),(30,88,119,1,84),(31,87,119,1,84),(32,86,119,1,84),(33,89,119,1,84),(34,89,118,1,31),(35,64,121,1,62),(36,44,87,1,18),(37,51,97,1,62),(39,51,99,2,12),(40,71,95,1,11),(41,72,95,1,11),(42,59,112,1,46),(43,2,1,1,18),(44,2,2,1,18),(45,2,2,1,9),(46,18,35,1,7),(47,18,36,1,7),(48,18,149,1,7),(49,18,150,1,7),(50,18,150,1,6),(51,18,151,1,7),(52,18,151,1,5),(53,18,152,1,11),(54,73,155,1,9),(55,74,155,1,9),(56,76,153,1,1),(58,77,153,1,1),(59,76,154,1,1),(60,77,154,1,1),(61,92,84,1,27),(62,93,85,1,20);
/*!40000 ALTER TABLE `question_nombre_ref` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=158 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `question_reponse_binding`
--

LOCK TABLES `question_reponse_binding` WRITE;
/*!40000 ALTER TABLE `question_reponse_binding` DISABLE KEYS */;
INSERT INTO `question_reponse_binding` VALUES (1,1,1),(2,1,2),(3,2,3),(4,3,4),(5,3,5),(6,5,6),(7,5,7),(8,6,8),(9,6,9),(10,7,10),(11,7,11),(12,8,12),(13,8,13),(14,11,14),(15,11,15),(16,11,16),(17,9,17),(18,10,18),(19,4,19),(20,12,20),(21,12,21),(22,13,22),(23,13,23),(24,14,24),(25,15,25),(32,16,32),(33,17,33),(34,18,34),(35,19,36),(36,19,35),(37,19,37),(38,20,38),(39,22,39),(41,24,41),(42,24,42),(43,25,43),(44,25,44),(45,26,45),(48,28,48),(49,28,49),(50,29,51),(51,29,50),(52,30,52),(53,30,53),(54,30,54),(55,30,55),(56,30,56),(57,30,57),(58,30,58),(59,30,59),(60,30,60),(61,30,61),(62,30,62),(63,30,63),(64,30,64),(65,30,65),(66,31,66),(67,32,67),(68,33,68),(69,34,69),(70,34,70),(71,35,71),(78,38,78),(79,39,79),(80,40,80),(81,41,81),(82,42,82),(83,42,83),(84,43,84),(85,43,85),(86,44,86),(87,45,87),(88,46,88),(89,46,89),(90,47,90),(91,47,91),(92,48,92),(93,49,93),(94,49,94),(95,50,95),(96,51,96),(97,52,97),(98,52,98),(99,52,99),(100,53,101),(101,53,100),(102,54,102),(103,54,103),(104,55,104),(105,56,105),(111,59,111),(112,60,112),(118,63,118),(119,63,119),(120,64,120),(121,65,121),(122,66,122),(123,67,123),(125,68,125),(126,69,126),(128,71,128),(129,72,129),(130,73,130),(131,74,131),(132,75,132),(133,75,133),(134,76,134),(135,77,135),(136,78,136),(137,78,137),(138,79,138),(139,80,139),(140,81,140),(141,82,141),(142,83,142),(143,84,143),(144,85,144),(145,86,145),(146,87,146),(147,88,147),(148,89,148),(149,90,150),(150,90,149),(151,90,151),(152,90,152),(153,91,153),(154,91,154),(155,91,155),(156,92,156),(157,93,157);
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
  `content` int(11) DEFAULT NULL,
  `question_suivante` int(11) DEFAULT NULL,
  `data` text DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_rep` (`question_suivante`),
  CONSTRAINT `FK_rep` FOREIGN KEY (`question_suivante`) REFERENCES `question` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=158 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `reponse`
--

LOCK TABLES `reponse` WRITE;
/*!40000 ALTER TABLE `reponse` DISABLE KEYS */;
INSERT INTO `reponse` VALUES (1,35,2,NULL),(2,36,2,NULL),(3,37,3,NULL),(4,38,4,NULL),(5,39,5,NULL),(6,40,NULL,'Réseau public LoRaWAN Orange'),(7,41,NULL,'Réseau privé'),(8,42,7,NULL),(9,43,9,NULL),(10,44,8,NULL),(11,45,8,NULL),(12,46,11,NULL),(13,47,10,NULL),(14,48,NULL,NULL),(15,49,NULL,NULL),(16,50,NULL,NULL),(17,51,NULL,NULL),(18,52,11,NULL),(19,53,67,NULL),(20,54,13,NULL),(21,55,13,NULL),(22,56,14,NULL),(23,57,14,NULL),(24,58,NULL,NULL),(25,59,NULL,NULL),(32,175,3,NULL),(33,177,16,NULL),(34,179,3,NULL),(35,181,18,NULL),(36,182,18,NULL),(37,183,18,NULL),(38,185,3,'(NULL)'),(39,188,20,'sous_solution'),(41,192,NULL,NULL),(42,193,NULL,NULL),(43,195,69,NULL),(44,196,69,NULL),(45,198,3,NULL),(48,203,80,'sous_solution'),(49,204,80,'sous_solution'),(50,206,30,NULL),(51,207,3,NULL),(52,209,31,NULL),(53,210,31,NULL),(54,211,31,NULL),(55,212,31,NULL),(56,213,31,NULL),(57,214,31,NULL),(58,215,31,NULL),(59,216,31,NULL),(60,221,31,NULL),(61,217,31,NULL),(62,218,31,NULL),(63,220,31,NULL),(64,219,31,NULL),(65,222,31,NULL),(66,224,29,NULL),(67,226,3,NULL),(68,228,32,NULL),(69,230,33,NULL),(70,231,30,NULL),(71,233,34,NULL),(78,243,85,NULL),(79,245,3,NULL),(80,247,39,NULL),(81,249,3,NULL),(82,251,41,NULL),(83,252,41,NULL),(84,254,92,NULL),(85,255,93,NULL),(86,257,3,NULL),(87,259,44,NULL),(88,261,3,NULL),(89,262,3,NULL),(90,264,71,NULL),(91,265,72,NULL),(92,267,47,NULL),(93,269,47,NULL),(94,270,48,NULL),(95,272,49,NULL),(96,274,3,NULL),(97,276,51,NULL),(98,277,51,NULL),(99,278,51,NULL),(100,280,76,NULL),(101,281,77,NULL),(102,283,73,NULL),(103,284,74,NULL),(104,286,53,NULL),(105,288,54,NULL),(111,297,3,NULL),(112,299,59,NULL),(118,308,89,NULL),(119,309,89,NULL),(120,311,3,NULL),(121,313,64,NULL),(122,315,3,NULL),(123,317,3,NULL),(124,318,NULL,'Réseau privé (nombre d\'IoT supérieur ou égal à 6)'),(125,320,3,NULL),(126,322,68,NULL),(128,326,3,NULL),(129,328,3,NULL),(130,330,3,NULL),(131,332,12,NULL),(132,334,73,NULL),(133,335,74,NULL),(134,337,3,NULL),(135,339,3,NULL),(136,341,76,NULL),(137,342,77,NULL),(138,344,3,NULL),(139,346,79,NULL),(140,348,3,NULL),(141,350,81,NULL),(142,352,82,NULL),(143,354,83,NULL),(144,356,84,NULL),(145,358,3,NULL),(146,360,86,NULL),(147,362,87,NULL),(148,364,88,NULL),(149,366,18,NULL),(150,367,18,NULL),(151,368,18,NULL),(152,369,18,NULL),(153,371,53,NULL),(154,372,53,NULL),(155,373,54,NULL),(156,375,3,NULL),(157,377,3,NULL);
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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sections`
--

LOCK TABLES `sections` WRITE;
/*!40000 ALTER TABLE `sections` DISABLE KEYS */;
INSERT INTO `sections` VALUES (1,60,'/assets/images/logo.png',NULL,0),(2,61,'/assets/images/logo.png',NULL,1),(3,62,'/assets/images/logo.png',NULL,2),(4,63,'/assets/images/logo.png',NULL,3);
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
  KEY `solution_question_section_binding_ibfk_1` (`id_solution`),
  KEY `solution_question_section_binding_ibfk_2` (`id_question`),
  KEY `solution_question_section_binding_ibfk_3` (`id_section`),
  CONSTRAINT `solution_question_section_binding_ibfk_1` FOREIGN KEY (`id_solution`) REFERENCES `cont_solution` (`id`),
  CONSTRAINT `solution_question_section_binding_ibfk_2` FOREIGN KEY (`id_question`) REFERENCES `question` (`id`),
  CONSTRAINT `solution_question_section_binding_ibfk_3` FOREIGN KEY (`id_section`) REFERENCES `sections` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=78 DEFAULT CHARSET=utf8mb4;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `solution_question_section_binding`
--

LOCK TABLES `solution_question_section_binding` WRITE;
/*!40000 ALTER TABLE `solution_question_section_binding` DISABLE KEYS */;
INSERT INTO `solution_question_section_binding` VALUES (1,4,1,1),(2,4,15,4),(3,4,12,3),(4,4,6,2),(5,3,17,1),(6,3,15,4),(7,3,6,2),(8,3,12,3),(10,7,15,4),(11,7,6,2),(12,7,12,3),(13,10,22,1),(14,10,15,4),(15,10,12,3),(16,10,6,2),(17,21,25,1),(18,21,6,2),(19,21,15,4),(20,21,12,3),(21,22,28,1),(22,22,15,4),(23,22,6,2),(24,22,12,3),(25,14,35,1),(26,14,15,4),(27,14,6,2),(28,14,12,3),(29,24,38,1),(30,24,6,2),(31,24,12,3),(32,24,15,4),(33,23,40,1),(34,23,6,2),(35,23,12,3),(36,23,15,4),(37,11,43,1),(38,11,12,3),(39,11,6,2),(40,11,15,4),(41,19,45,1),(42,19,6,2),(43,19,12,3),(44,19,15,4),(45,15,50,1),(46,15,6,2),(47,15,12,3),(48,15,15,4),(49,20,52,1),(50,20,15,4),(51,20,6,2),(52,20,12,3),(54,16,15,4),(55,16,6,2),(56,16,12,3),(57,16,60,1),(58,17,63,1),(59,17,15,4),(60,17,6,2),(61,17,12,3),(62,18,65,1),(63,18,6,2),(64,18,15,4),(65,18,12,3),(67,9,15,4),(68,9,6,2),(69,9,6,3),(70,13,66,1),(71,13,12,3),(72,13,15,4),(73,13,6,2),(74,7,90,1),(77,9,91,1);
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
INSERT INTO `solutions` VALUES (1,'Disponibilité des espaces collaboratifs'),(2,'Disponibilité des places de parking'),(3,'Fréquentation et affluence'),(4,'Etude d\'occupation'),(5,'Santé et environnement de travail'),(6,'Satisfaction des usagers'),(7,'Légionelle ECS'),(8,'Nettoyage à l\'usage '),(9,'Consommations énergétiques (décret tertaire, CPE)'),(10,'Eau'),(11,'Monitoring des équipements industriels (financement CEE)'),(12,'Rondes digitalisées'),(13,'Production de froid'),(14,'Production de chaud'),(15,'Centrale de traitement d\'air'),(16,'Rondes d\'exploitation digitalisées'),(17,'Détection fumée'),(18,'Inondation');
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
INSERT INTO `users` VALUES (1,'KN22','Karim','NANAA','$2b$10$dcyLbAjdochpatkW0pnlGOwVOezroP5FzkvdTvv7Zpl7JWACRkTw.','admin');
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

-- Dump completed on 2021-07-09 12:53:07
