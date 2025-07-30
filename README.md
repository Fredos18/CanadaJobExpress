````markdown name=README.md
# CanadaJobExpress

Plateforme pour le sourcing et la promotion d’offres d’emploi au Canada, avec automatisation vidéo pour TikTok, Instagram Reels, YouTube Shorts.

## Fonctions clés

- Affichage d’offres d’emploi filtrées (EIMT, sponsor)
- Génération automatisée de vidéos à partir des offres (script Python MoviePy)
- Prêt à partager sur réseaux sociaux
- Page admin simple (Next.js)

## Structure

- **/pages** : Front-end Next.js (accueil et admin)
- **/components** : Composants réutilisables (listes d’offres…)
- **/scripts** : Automatisation vidéo (Colab/Python)
- **/docs** : Charte graphique, instructions admin

## Lancer le projet

```bash
npm install
npm run dev
```

## Générer une vidéo

Voir `/docs/admin_instructions.md` et `/scripts/generate_job_video_colab.ipynb`.
````