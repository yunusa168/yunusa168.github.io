# Portfolio — YUNUSA Rassouloul Haki Adegoke

Site statique professionnel en français : HTML5 sémantique, CSS3 et JavaScript natif.
Hébergement prévu : GitHub Pages (`yunusa168.github.io` → `https://yunusa168.github.io/`).

## Lancer le site en local

Depuis ce dossier :

```powershell
C:\Users\HP\AppData\Local\Programs\Python\Python313\python.exe -m http.server 8000
```

Puis ouvrir `http://127.0.0.1:8000/`.

## Arborescence

```text
index.html                          Structure et contenus (9 sections ancrées)
assets/
  css/tokens.css                    Couleurs, typographie, espacements, niveaux
  css/base.css                      Réinitialisation, focus, lien d'évitement
  css/layout.css                    Header, grilles, timeline, responsive
  css/components.css                Boutons, badges, cartes, animations
  js/main.js                        Menu mobile, défilement, apparitions, année
  img/profile.jpg                   Photo de profil (copie)
  img/favicon.svg                   Icône « YR »
  img/projects/                     Dossier vide (projets en textes seuls)
  files/CV-Yunusa-Rassoul.pdf       CV téléchargeable (copie)
.gitignore                          Exclusions Git
.nojekyll                           Nécessaire au dossier assets/files/ sur Pages
profile.jpeg                        Fichier photo d'origine, conservé
CV-Yunusa-Rassoul.pdf               Fichier CV d'origine, conservé
```

## Contenus

Les textes sont directement dans `index.html`, identifiés par des attributs `data-i18n`.
Ils ont été validés : ne pas modifier les niveaux de compétences ni les intitulés sans accord explicite.
Le JavaScript ne contient aucun texte en français : il ne gère que le comportement.

Les niveaux affichés sont : **Pratique en projet**, **En apprentissage**, **Notions**.
Aucun niveau expert n'est présent.

## Vérifications réalisées

- Liens : 15 ancres, toutes avec une cible ; `mailto:`, `tel:`, LinkedIn, GitHub et AIOA conformes ; liens externes avec `rel="noopener noreferrer"`.
- Fichiers : toutes les ressources locales et le PDF répondent en HTTP 200 ; le PDF est servi en `application/pdf`.
- Responsive : aucun débordement à 375, 768 et 1440 px ; menu mobile actif jusqu'à 768 px.
- Clavier : ouverture du menu avec Entrée, fermeture avec Échap, focus visible, lien d'évitement fonctionnel.
- Accessibilité : Lighthouse 1,00 (accessibilité), 1,00 (bonnes pratiques), 1,00 (SEO).
- Animations : respect de `prefers-reduced-motion` en CSS et en JavaScript.
- Contraste : couleurs des badges vérifiées à 5,19 / 5,45 / 7,13:1.

Pour refaire le test responsive, ouvrir le site dans le navigateur et contrôler les trois largeurs
375 px (smartphone), 768 px (tablette) et 1440 px (ordinateur). Le rendu réel sur un téléphone
physique reste à vérifier par l'utilisateur.

## Version bilingue future

Les attributs `data-i18n` servent de cibles à un futur script de traduction.
Le HTML porte déjà `lang="fr"`. Aucun sélecteur de langue n'est affiché en V1.

## Publication (étape non encore réalisée)

Dépôt : `yunusa168.github.io`. GitHub Pages : branche `main`, dossier racine `/`.
Le fichier `.nojekyll` est requis pour servir correctement `assets/files/`.

Ne jamais committer de secret, de fichier `.env` ni de journal.
