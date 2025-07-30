````markdown name=docs/admin_instructions.md
# Instructions administrateur – CanadaJobExpress

## Ajouter une offre d’emploi

1. Accédez à `/admin` sur votre site local.
2. Remplissez le formulaire avec :
   - **Titre du poste**
   - **Entreprise**
   - **Lieu**
   - **EIMT** et/ou **Sponsor** (cochez si applicable)
   - **Description**
3. Cliquez sur “Ajouter” pour prévisualiser l’offre (stockée temporairement côté client).

> **Remarque :** Pour la production, prévoir une connexion à une base de données ou Google Sheet.

---

## Générer une vidéo d’offre d’emploi

1. Ouvrez `/scripts/generate_job_video_colab.ipynb` avec **Google Colab**.
2. Modifiez les données de l’offre dans la cellule dédiée.
3. Exécutez toutes les cellules.
4. Téléchargez la vidéo créée depuis la section “Fichiers” de Colab.
5. Partagez sur TikTok, Instagram Reels, ou YouTube Shorts.

---

## Conseils

- Utilisez toujours des titres concis et attractifs.
- Précisez si le poste inclut EIMT ou du sponsoring.
- Préparez plusieurs variantes pour automatiser la création de vidéos en série.
````