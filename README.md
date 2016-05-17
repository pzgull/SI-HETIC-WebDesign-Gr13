# Semaine Intensive « Design Sexy » - HETIC - Gr. 13
## Initialisation

### Pré-requis
- nodejs
- npm

### Mise en place de l'environnement

Cloner le repo pour avoir sa propre copie en local.
```
git clone https://github.com/pzgull/SI-HETIC-WebDesign-Gr13.git
cd SI-HETIC-WebDesign-Gr13
```
Installer les dépendances
```
npm install
```
Compiler les sources
```
npm run build
```

> N.B: Le site tel qu'envoyé au client de trouve dans le dossier **dist/**

## Environnement ( src/ )

### Styles ( scss/ )

Le fichier `main.scss` sera ensuite compilé pour remplacer `/dist/assets/css/main.css`. On peut également modifier le ficher `_base.scss` qui contient toutes les variables utilisée dans le fichier `main.scss` (couleurs, typos, dimensions, etc.)

- [Sass/SCSS - Documentation](http://sass-lang.com/guide)
- [Scotch.io - Getting Started with Sass](https://scotch.io/tutorials/getting-started-with-sass)
- [CodeSchool - Assembling Sass (Part I/II)](https://www.codeschool.com/search?utf8=%E2%9C%93&loc=hero&query=sass)

### Pug (Jade) --> HTML ( views/ )

Le dossiers views contient l'arborescence de fichier .pug (ex- Jade). C'est un language de templating comme HAML, Twig ou EJS qui permet, par exemple, de faire des includes, définir des variables et simplifier le processus d'intégration.

- views/
  - layout.pug ...... Doctype, head, import des stylesheets et des scripts.
  - header.pug ..... Header, nav, ...
  - footer.pug ...... Footer
  - index.pug ........ Contenu du body

> - [Jade - Reference](http://jade-lang.com/reference/)
> - [ DevTips - Jade is Awesome](https://www.youtube.com/watch?v=wzAWI9h3q18)
