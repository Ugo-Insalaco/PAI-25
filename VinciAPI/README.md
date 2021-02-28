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
