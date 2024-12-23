#SCUB 

There is three stage of releasing the application:
1. Recette
2. Pre-production
3. production

The Recette come from develop branch, and the production branch will be mirrored on master.

### RECETTE

- The recette production is the first stage to release the application.
- The branch is created from develop.
- Use of [[snapshot]] version

Its purpose is to be tested by the developers and the client on a low cost environment. 

### PRE-PRODUCTION

- The pre-production stage is the second stage
- The branch come from the recette
- Use of [[rc-version]]

Pre-production environment is mean to be similar from the production. Both the client and the developers can tests the features and perform tests like it's the real in-production application.

### PRODUCTION

- last stage of the production flow
- Come from the pre-production
The application is release to the client, from the last [[rc-version]] validated. the last [[rc-version]] is clone to master.

Fixing critical bugs in production stage is done by editing directly on master and releasing it to the client.

![[release pipelines.canvas|release pipelines]]