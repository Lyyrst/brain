#school42
#### Présentation SCUB

SCUB est une ESN, une entreprise de services du numérique.  
Elle conçoit et édite des logiciels, principalement pour des mutuelles et des assurances. Elle est située sur plusieurs sites, dont Angoulême, là où j'ai fait mon stage.

#### Présentation SPS

Durant ce stage de quatre mois, j'ai été affecté à une équipe dédiée à l'édition d'un logiciel destiné à différentes assurances et mutuelles.  
Il s'agit d'un logiciel déjà existant, développé par SCUB et mis en production il y a quelques années.  
Il faut pourtant continuer à le maintenir, lui fournir de nouvelles fonctionnalités et l'améliorer en continu pour répondre aux besoins des clients.  
Les mutuelles et les assurances évoluent au fil des années, et les logiciels qu'elles utilisent doivent suivre cette évolution.

Ce logiciel, c'est donc **SPS Solutions**, un SaaS (_Software as a Service_), destiné aux assurances et aux mutuelles.  
Il a pour but de leur fournir une solution de gestion interne de leurs clients, contrats et produits.  
Il comporte aussi des parties accessibles aux clients des assurances et mutuelles, mais je n'ai pas eu l'occasion de travailler dessus.

#### Formation en interne

Avant de pouvoir travailler avec l'équipe sur **SPS Solutions**, j'ai dû commencer par une semaine et demie de formation sur la stack technique de l'entreprise.

La formation comprenait en première partie des cours OpenClassrooms.  
Le contenu portait sur le framework backend **Spring**, en Java, accompagné de la base de données **PostgreSQL**, ainsi que sur le framework frontend **Angular**, en TypeScript.

Ensuite, j'ai réalisé une mini-application web sur cette stack technique contenant un **CRUD** (_Create, Read, Update, Delete_).

Je maîtrisais déjà **Java Spring** et **PostgreSQL**, ce qui m'a permis de rapidement terminer cette période de formation, initialement prévue sur un minimum de deux semaines.

#### Tâches internes sur SPS

Pour prendre en main **SPS Solutions**, j'ai été affecté à la réalisation de tâches internes, qui ne sont pas destinées aux mutuelles et aux assurances, mais aux administrateurs SCUB pour **SPS**.

J'ai commencé par réaliser une **IHM** (_Interface Homme-Machine_) permettant d'échanger avec la base de données depuis le front-end.  
Le but était d'insérer des créneaux horaires en base de données, qui empêchent l'exécution de tous les **batchs** sur ces mêmes horaires.  
Les batchs sont des processus longs qui s'exécutent en arrière-plan du serveur pour ne pas surcharger l'API de **SPS**.  
Ici, il s'agit de requêtes SQL très longues, pouvant s'exécuter sur plusieurs heures.

#### Système de release

Ensuite, on m'a confié une tâche beaucoup plus lourde en responsabilités. J'ai modifié tout le système de mise en **recette** et **pré-production** du logiciel. Il s'agit ici d'une tâche de **CI/CD**, donc de **DevOps**.

Comment une application est-elle déployée sur des environnements de tests ?  
Elle est d'abord déployée en **recette**, un environnement minimal qui vise à tester uniquement les nouvelles fonctionnalités. Puis, elle est envoyée en **pré-prod**, un environnement identique à la production, donc aux serveurs utilisés par les clients. On y effectue des **tests de non-régression**, visant à identifier si les nouvelles fonctionnalités n'ont pas entraîné de dysfonctionnements sur des fonctionnalités déjà existantes.

Cette tâche était lourde en responsabilités, car en cas d'erreur, il devient impossible de livrer l'application aux clients.

#### Feature VIP

Enfin, avec l'aide de deux autres stagiaires, **Henri** et **Yavin**, nous avons développé une nouvelle feature pour les clients : la **feature VIP**.  
Elle avait pour but de **cloisonner** des personnes dans leur application.

Par exemple, quelqu'un qui n'est pas VIP ne pourra pas accéder aux informations d'un VIP.  
Ainsi, si une personne est **VIP** parce qu'elle est une personnalité politique, seules les personnes habilitées pourront accéder à ses informations personnelles, ses contrats, etc.

Cette feature était très intéressante, car elle nous a permis de travailler directement avec des clients de **SCUB**, et de mieux comprendre comment développer une application en réponse aux besoins des clients, les choix à faire, et surtout comment échanger avec eux, qui ne sont pas développeurs.