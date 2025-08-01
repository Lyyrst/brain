J'ai regarder par curiosite comment on pourrait gerer des logs interessant pour une historisation des livraisons et j'ai noter deux idees qui me semblent interessantes:

Un fichier JSON qui se remplis a chaque livraison et qui est stocker dans  le repo, on peut avoir un fichier par version pour que ce soit plus propre.
L'avantage c'est que les logs sont contenu par le repo concerner, et tu peux (peux-etre) recuperer le fichier depuis tout outils de livraison pour les consulter plus facilement.

L'inconvenient c'est qu'on ecrit dans le repo depuis une pipeline et c'est pas une bonne pratique. Ca demande plus de travail pour les devs aussi de gerer des fichier/dossier dans chaque repo.

La deuxieme idee, que je trouve mieux mais je sais pas si c'est faisable avec ton outil de livraison, ce serait de transmettre les informations necessaire a ton outil depuis une pipeline, avec un endpoint ou autre, je connais pas. On pourrait alors envoyer les valeurs renseigner par la personne qui lance la pipeline a ton outils, qui lui peut afficher ca dans un onglet "Historique de livraison" avec le details de chaque livraison. Je pense que ce serait plus propre, ca rentre dans une logique d'avoir un outil dediee aux livraison sur sps et comme ca on ecrit pas ou on alourdi pas le repo depuis les pipelines.