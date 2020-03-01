# Notes Formation NodeJS 27/02/20 chez SFEIR
## Formateurs : 

* Geoffrey Brunois 

* Célia Dooleghe

## Les slides : 

https://goo.gl/28EtA6

## Dépo exos :

https://github.com/sfeir-open-source/sfeir-school-nodejs

NodeJS inspiré par l'upload de fichier Flickr par Ryan Dahl  
serveur non bloquant 

* Un seul thread dans la event loop du LIBUV (sauf certains cas)
* I/O et pas des opérations CPU volumineuses 
* JS est un language asynchrone (tache en fond) non blanquant
* Un tour de loop est appelé tic
* poll connections bd etc 
* check : setImmediate
* on utilise souvent setTimout/ setInterval
* Bonne pratique (test unitaire)  : "npm test -- /ex01.test.js"
* pour reload nodemon monfichier.js --> rs
* mjs v14 nodejs expérimental 
* console.time()    imprimer le temps 
* node -p process.env <=> node puis process.env : affiche les varibles d'environnements 
* node -e 
* La première fonction de callback devrait être une erreur 
## Exercices 
## L'utilitaire httpie 

Permet de remplacer les curl / postman

## Http2 

La possibilité d'envoyer le flux en simultané sur plusieurs sorties sans faire de polling et sans fermer le res.

## REPL 

ouvre une console où l'on édite du code et il est immédiatement exécuté. Peut etre utile pour se connecter sur un serveur distant et y exécuter du code. 

## DEBUG
* node --inspect-brk XXX.js 
lance une websocket puis se met en attente d'un debugguer 
on lance chrome par exmpl : on clique sur inspect => devtools 

## Les frameworks 
Parmi les plus importants : 

* hapi : un équivalent moins connu que express de fait de la validation de requetes 
* koa : développé par les memes persionnes : fait de l'http2 contrairement à express qui ne fait que de l'http
* restify et fastify : connu pour leurs bonnes performances % à express 
 ## Framework complets 
 * nest : utilise du typescript par défaut, sort du lot et prend de l'ampleur 
 * LoopBack.io et sails : 

## Bonnes pratiques 
 * Bonne pratique écrire les tests avant le code , les tests nous permettnent de vérifier qu'on ne casse rien.
 * Prettier on l'excute auto , lors du commit par expl avant d'être envoyé sur le serveur 
 * Remplacer les promises par des async + await
 * Aujourd'hui, on n'utilise plus trop les sessions , dans des projets type react on utilise du sessionless
## Def 

 * Un linter :  nous permet d'indiquer les lignes où il y a des erreurs ( variable changé de nom, type d'une variable etc )
 * Prettier : n'est pas un linter, il permet de formater pour que le code soit unifier au sein d'une équipe , s'intègre bien avec un Linter 
 ## Logger 
 Sur certains cloud provider les loggers sont tres mal gérés 
 et on les remplace par des : console.log 
 windstone remplace bunyan vu qu'il n'y a plus de commits dessus, le projet est entrain de mourir.
