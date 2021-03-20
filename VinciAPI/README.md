Guide d'utilisation de l'API (pour le moment)

Les requêtes GET :
- L'url des requêtes GET est de la forme [/api/quelque_chose] ou [/api/<quelque_chose>/<id_de_la_chose>].
> On peut donc récupérer l'ensemble des produits avec GET [/api/produits] ou le produit d'id 2 avec GET [/api/produits/2]
- On peut ajouter des informations relatives au quelque chose en ajoutant dans l'url '?include=<chose_à_ajouter>,<autre_chose>,...'
> Par exemple pour récupérer les datas associées au produit 2, on fait GET [/api/products/2?include=data]
- Certaines inclusions sont activées par défaut et ne nécessite pas d'ajouter '?include=<inclusion>'

Liste des requêtes GET et de leurs includes disponibles :
    * [/api/cadrans] ? text (activé par défaut)
    * [/api/datas] ? 
    * [/api/products] ? data, solution
    * [/api/questions] ? text (activé par défaut), reponse
    * [/api/reponses] ? text (activé par défaut), question_suivante
    * [/api/sections] ? text (activé par défaut)
    * [/api/solutions] ? section_question
    * [/api/texts] ?
    * [/api/users] ?
    * [/api/offres] ? text, cadran, solution
  
Structure de la réponse :
- La réponse de l'api aux réponses GET est toujours la même et la suivante :
  {
      "route" : "/api/<quelque_chose>",
      "method": "GET",
      "data":[{
          "id": <identifiant_de_la_ressource>,
          "fields":[
              "<champ_dans_la_bdd>": "<valeur>
          ],
          "includes"{
              "<nom_de_l'inclusion>":[{
                  "<champ_inclus>": "<valeur>"
              }]
          }
      }]
  }
- Si aucune valeur n'est retournée lors de l'inclusion, le champ dans l'objet include contient un tableau vide
- Lors de l'inclusion automatique des texts, on retrouve donc leur valeur dans *includes.text[0].<champ_du_text>*

Les requêtes POST :

- l'url des requêtes POST est toujours [/api/quelque_chose] ou bien [/api/quelque_chose/<id_de_la_chose>/relationships/<nom_de_la_relation>]
- Lors d'une requête POST, l'api attend certains arguments dans le body qui sont obligatoires et d'autres sont optionnels
- les seuls arguments possibles dans le body sont ceux obligatoires ou optionnels (on ne peut rajouter un argument inattendu)
- en réponse à chaque requête, l'api renvoie l'identifiant de l'objet qui a été ajouté dans la base de données.
- dans le cas des textes où il faut donner dans le body l'id du texte correspondant, il faut d'abord envoyer le texte à la bdd pour qu'il l'ajoute puis utiliser l'identifiant renvoyé pour créer un objet utilisant le texte créé.
- Le principe des relationships est de créer un lien entre deux objets de la base de données (utilisation des tables de bind), il faut donc mettre dans l'url l'id du premier objet à lier et dans le body l'id du second
- On ne peut ajouter une relationships si elle existe déjà (de toute façon l'api renvoie une erreur)
- Pour le contenu du body de chaque requête, se référer aux fichiers .json du dossier endpoints sous les attributs fields avec 'mandatory' ou 'optionnal', de même pour les relationships

Liste des relationships disponibles :
    * [/api/cadrans] : offre
    * [/api/offre] : solution
    * [/api/products] : data
    * [/api/question] : reponse
    * [/api/solutions] : section_question, product
  
Les requêtes PATCH :

- l'url des requêtes PATCH est simplement [/api/<quelque_chose>/<id_de_la_chose>]
en donnant l'identifiant de la ressource que l'on cherche à modifier
- il n'est pas possible de modifier des relations, il faudra les supprimer totalement et les refaire après
- les arguments du body des requêtes PATCH sont tous optionnels (on peut mettre tous les arguments de la table qui ont le tag 'updatable')

Les requêtes DELETE :
  
- Les url des requêtes DELETE sont [/api/<quelque_chose>/<id_de_la_chose>] ou bien [/api/quelque_chose/<id_de_la_chose>/relationships/<nom_de_la_relation>]
- dans le cas des suppressions dans les tables principales, **tous les binds dans les autres tables avec la ligne que l'on veut supprimer seront enlevés** (faire attention donc). De même les lignes de tables principales qui possèdent une foreign key vers la ligne que l'on supprime verront leur valeur mise à NULL
> Supprimer une ligne de la table *cont_fra* ou *cont_en* va mettre à NULL toutes les lignes qui référencent ce texte
- Dans le cas de suppression d'une relation, on donne en paramètre dans le body les id des objets lié à la table principale que l'on souhaite supprimer. 
> Par exemple pour supprimer la relation liant les tables *question*, *sections*, *solution* avec *id_section*=1, *id_question*=2, *id_solution*=3 depuis [/api/questions/relationships/solution_section], on met dans le body les paramètres
    {
        id_solution:2,
        id_section:1
    }
> voir l'attribut *fields* dans les *relationships* de chaque fichier de configuration

Remarques : 

- Les tables *cont_fra* et *cont_en* sont liées entre elles par l'endpoint text. Si l'on ajoute un texte dans la base de données, il sera ajouté dans les deux tables et de même si on le supprime. **Ce n'est pas le cas si on modifie la table**