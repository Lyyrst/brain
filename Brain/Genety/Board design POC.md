#genety

Il faut faire un projet frontend POC du board design

Les technologies:
- WebGL
- Canvas
- Skia via canvasKit

Features:
- Pouvoir definir une frame
    - Background color
    - Border color
    - Texte
    - Border radius
- Faire une fleche d'un point A a un point B (suivis du curseur)
- Pourvoir zoomer/dezoomer
- Deplacement dans la vue
- Un bouton "generer" qui print l'etat du canvas dans la console

L'objet javascript du contenu du canvas doit etre commun a tout les poc

### WebGL

Super pour le rendu 3D ou des effets complexes, parce qu’il utilise directement le GPU.  
👍 Avantages : rapide, transformations complexes, bonnes performances pour beaucoup d’objets.  
👎 Inconvénients : assez bas niveau, il faut coder pas mal de choses soi-même pour gérer l’interface ou le texte vectoriel.

### Canvas

Parfait pour des petits dessins ou des prototypes simples.  
👍 Avantages : facile à utiliser, intégré dans tous les navigateurs, idéal pour des tests rapides.  
👎 Inconvénients : dès que tu as beaucoup d’objets ou que tu fais des zoom/pan fréquents, ça devient lent. Chaque changement redraw tout le canvas → le GPU reçoit tout à chaque fois. Pas top pour un outil de design sérieux.

### Skia (via CanvasKit)

C’est le moteur derrière Flutter, Chrome, et les debuts de Figma.  
👍 Avantages : rendu vectoriel performant, zoom/pan fluide même avec des milliers d’objets, texte précis, anti-aliasing GPU. Long terme, parfait pour un vrai outil de design.  
👎 Inconvénients : un peu plus compliqué à mettre en place que Canvas, dépend de WebAssembly, taille initiale plus lourde dans le navigateur.