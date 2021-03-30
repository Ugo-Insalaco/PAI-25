Installation et lancement du projet :
- installer node js (ici https://nodejs.org/en/) c'est ce qui permettra d'installer Angular par la suite et de coder le backend
- à partir de l'invite de commande node js (taper node js dans la barre de recherche et prendre Nodejs command prompt), se déplacer vers le dossier contenant le dossier .git du projet (faire cd Documents => cd PAI => cd PAI-25 pour se déplacer vers /Documetnts/PAI/PAI-25)
- une fois dans le dossier entrer les commandes suivantes : 
  - npm install (cela installe toutes les librairies nécessaires)
  - npm install -g @angular/cli (cela installe l'invite de commande angular)
  - cd VinciApp (pour se déplacer dans le dossier VinciApp)
  - npm install (à nouveau)
  - ng serve (lancer l'application en local)
  - ng add @angular/material
- Une fois les commandes entrées, lancer un navigateur web et entrer l'adresse localhost:4200, la page par défaut de l'application apparaît

Lancement de l'api en NodeJs
- faire attention à bien sépecifier la bonne adresse du serveur Angular dans le fichier VinciBackend.js
- se placer dans le dossier PAI-25
- node VinciBackend.js

Initialisation de la bdd en local sur windows

- Installer mariadb sur windows
- récupérer le fichier iotdb.sql et le placer dans 'C:\Program Files\MariaDB 10.5\bin'
- lancer une invite de commande dans le même dossier
- (si le processus n'est pas en route : entrer 'mysqld') 
- taper les commandes suivantes ensuite : 
  - mysql -u root -p (pour se connecter au serveur mysql et entrer son mdp)
  - create database iot; (créé la bdd iot vide)
  - create user 'iot'@'localhost' identified by 'pwd'; (créé un utilisateur mysql qui va interagir avec la bdd)
  - grant all privileges on iot.* to 'iot'@'localhost'; (donne les droits à l'utilisateur de se connecter à la bdd)
  - exit; (quitte le serveur mariadb mais pas la console)
  - mysql -u root -p iot < iotdb.sql (importe la bdd)
- les fois d'après, il suffit de lancer le processus mysqld s'il n'est pas en cours