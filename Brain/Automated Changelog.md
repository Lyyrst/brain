Il serait possible d'automatiser les fichiers de changelog en 2 points:
1. La description du change serait presente dans le descriptif du commit de merge
2. un script vient editer le changelog en prenant en compte la description du commit

L'idee serait de respecter la [conventionnal commit](https://www.conventionalcommits.org/en/v1.0.0/) a minima dans le cadre 
d'une merge request, ainsi on pourrait remplir le changelog avec un script 
bash, pour faire au plus simple.

Par exemple pour une modification, le commit devrait prendre cette forme:

fix: Suppression de l'erreur 500 quand l'API key est incorrecte

et le fichier changelog prendrait alors ce format:

```
1.26.0 :

- Modification: Suppression de l'erreur 500 quand l'API key est incorrecte
```

Il serait peut etre aussi possible d'ajouter la date du commit et un lien vers ce meme commit, ainsi que son auteur, A voir.

Probleme: Si le developper ne respecte pas ou oubli la convention de nommage, on ne peut pas empecher le merge sur develop, et le changelog ne serait pas mis a jours

solution: Un job gitlab qui se lancent uniquement sur les merge request et qui failed si la convention n'est pas respecter, empechant le merge de se produire. Un autre probleme est que on veut seulement que le commit d'avant merge soit correctement nommer, d'un autre coter, cela ferait prendres des bonnes habitutes aux devs.

Ces procedes sont deja implementer par exemple avec : CommitLint, release-it, Conventional Changelog. Mais ces outils propose des fonctionalites trop avancer pour le besoins, je pense qu'il serait plus simple de faire un script nous meme qui repond uniquement au besoins sans en faire plus que necessaire.
