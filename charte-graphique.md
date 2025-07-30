```gitignore
# Node.js
node_modules/
.next/
out/
.env
.env.local
.DS_Store

# Logs
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# Mac
*.DS_Store

# IDE
.vscode/
.idea/
*.sublime-workspace
*.sublime-project

# Test/coverage
coverage/
```

````markdown name=docs/charte_graphique.md
# Charte graphique CanadaJobExpress

## Logo
- Utiliser un logo simple, typographique ou avec une feuille d’érable stylisée.

## Couleurs principales
- Rouge Canada : `#D32D2F`
- Bleu : `#004080`
- Blanc : `#FFFFFF`
- Gris clair : `#F4F4F4`

## Polices
- Titres : Montserrat, Arial, sans-serif
- Texte courant : Roboto, Arial, sans-serif

## Boutons
- Fond rouge Canada, texte blanc, arrondi 4px.

## Icônes
- Privilégier des pictogrammes simples, reconnaissables, en SVG.

## Exemple d’utilisation
```css
h1, h2 {
  font-family: 'Montserrat', Arial, sans-serif;
  color: #D32D2F;
}
body {
  font-family: 'Roboto', Arial, sans-serif;
  background: #F4F4F4;
}
.btn-primary {
  background: #D32D2F;
  color: #FFF;
  border-radius: 4px;
  padding: 0.6em 1.2em;
}
```
````