# Portfolio — YUNUSA Rassouloul Haki Adegoke

Site statique professionnel **bilingue français / anglais** : HTML5 sémantique, CSS3 et JavaScript natif.
Hébergement : GitHub Pages (`yunusa168.github.io` → `https://yunusa168.github.io/`).

## Lancer le site en local

Depuis ce dossier :

```powershell
C:\Users\HP\AppData\Local\Programs\Python\Python313\python.exe -m http.server 8000
```

Puis ouvrir `http://127.0.0.1:8000/` (français par défaut) ou `http://127.0.0.1:8000/?lang=en`.

## Arborescence

```text
index.html                          Structure et contenus (9 sections ancrées)
assets/
  css/tokens.css                    Couleurs, typographie, espacements, niveaux
  css/base.css                      Réinitialisation, focus, lien d'évitement
  css/layout.css                    Header, sélecteur de langue, grilles, responsive
  css/components.css                Boutons, badges, cartes, formations, animations
  js/i18n.js                        Dictionnaires FR/EN et application des traductions
  js/main.js                        Menu mobile, langue, défilement, apparitions, année
  img/profile.jpg                   Photo de profil (copie)
  img/favicon.svg                   Icône « YR »
  img/projects/                     Dossier vide (projets en textes seuls)
  files/CV-Yunusa-Rassoul.pdf       CV français téléchargeable (copie)
  files/Resume-Yunusa-Rassoul-EN.pdf CV anglais téléchargeable (copie du Bureau)
.gitignore                          Exclusions Git
.nojekyll                           Nécessaire au dossier assets/files/ sur Pages
profile.jpeg                        Fichier photo d'origine, conservé
CV-Yunusa-Rassoul.pdf               Fichier CV d'origine, conservé
```

## Bilinguisme

- Une seule page, aucun doublon de HTML. Les textes sont dans `index.html` avec `data-i18n`,
  `data-i18n-aria-label`, `data-i18n-alt` et `data-i18n-content`.
- Les dictionnaires `FR` et `EN` se trouvent dans `assets/js/i18n.js` (112 clés chacun).
- Détection de langue : `?lang=` → `localStorage` → langue du navigateur → `fr`.
- Le bouton **Français / English** est intégré au header sur grand écran et au menu déroulant
  sur mobile. La langue active est conservée après rechargement et l'URL est mise à jour.
- `document.documentElement.lang`, `<title>`, meta description, `og:title`, `og:description`,
  `aria-label`, `alt` et la légende des niveaux sont traduits.
- Les liens d'ancre conservent le paramètre `?lang=en`.

## Contenus

Les textes ont été Validés avec l'utilisateur : ne pas modifier les niveaux de compétences
ni les intitulés sans accord explicite. Le JavaScript ne contient aucun texte en français
(à l'exception des valeurs des dictionnaires, dans `i18n.js`).

Niveaux affichés, **strictement distincts** :

| Niveau FR | Niveau EN |
|---|---|
| Pratique en projet | Used in projects |
| En apprentissage | Currently learning |
| Notions | Basic familiarity |
| Initiation | Introductory |
| Pratique | Practical use |

Aucun niveau expert, « maîtrisé », `Advanced` ou `Proficient` n'est présent.

Formations : Master 2 MIAGE (2026-2027, en cours), Master 1 MIAGE (2025-2026),
Licence en informatique (2025), Baccalauréat série D (2019),
plus deux formations Orange Digital Center — FabLab Solidaire
(Python & Raspberry Pi : 9 au 11 novembre 2026 ; OpenLab : novembre 2026).

Disponibilité affichée : « Disponibilité à discuter » / « Availability open to discussion ».
Localisation : Abidjan, Côte d'Ivoire. Pas de Facebook ni de liste de qualités génériques.

## CV

Deux fichiers PDF distincts sont proposés dans la section `#cv` :

- `assets/files/CV-Yunusa-Rassoul.pdf` — CV français (324 582 octets).
- `assets/files/Resume-Yunusa-Rassoul-EN.pdf` — CV anglais (141 236 octets),
  copie de `C:\Users\HP\Desktop\Yunusa_Adegoke_CV.pdf`, empreinte SHA256
  `1D8FCD0FCF43BA28FA4E4A01FEFE247BC4C3B46E9533974D6816F917F65D896D`.

## Vérifications réalisées

- Clés i18n : 112 clés FR et 112 clés EN, aucune valeur vide ; 109 clés utilisées dans le HTML,
  les 3 autres étant appliquées dynamiquement par le JS. Aucune clé manquante.
- Traduction : bascule FR↔EN sans rechargement, `lang`, titre, meta, ARIA, `alt`, légende,
  libellés des boutons et conservation de la flèche ↗ du lien AIOA vérifiés.
- Persistance : `localStorage` et paramètre `?lang=` vérifiés après rechargement.
- Liens : 9 sections ancrées, aucune ancre orpheline ; `mailto:`, `tel:`, LinkedIn actuel,
  GitHub et AIOA conformes ; liens externes avec `rel="noopener noreferrer"`.
- Fichiers : toutes les ressources locales répondent en HTTP 200 ; les deux PDF sont servis
  en `application/pdf` (324 582 et 141 236 octets).
- Responsive : aucun débordement à 375, 768 et 1440 px ; menu mobile actif jusqu'à 768 px ;
  sélecteur de langue visible dans le menu ouvert ; deux boutons CV empilés à 375 px.
- Clavier : ouverture du menu avec Entrée, fermeture avec Échap, focus visible,
  `aria-pressed` correct sur les deux langues, lien d'évitement fonctionnel.
- Accessibilité : Lighthouse 1,00 (accessibilité), 1,00 (bonnes pratiques), 1,00 (SEO)
  en français **et** en anglais.
- Animations : respect de `prefers-reduced-motion` en CSS et en JavaScript.
- Contraste des badges : 5,19 / 5,45 / 7,13 / 7,43 / 6,23:1 (tous ≥ 4,5:1).
- Console du navigateur : aucune erreur ni avertissement.

Pour refaire le test responsive, ouvrir le site dans le navigateur et contrôler les trois largeurs
375 px (smartphone), 768 px (tablette) et 1440 px (ordinateur). Le rendu réel sur un téléphone
physique reste à vérifier par l'utilisateur.

## Publication

Dépôt : `yunusa168.github.io`. GitHub Pages : branche `main`, dossier racine `/`.
Le fichier `.nojekyll` est requis pour servir correctement `assets/files/`.

**Aucun commit, push ni publication n'a été effectué lors de cette phase.**
Attendre l'autorisation explicite de l'utilisateur avant toute commande Git de publication.
Ne jamais committer de secret, de fichier `.env` ni de journal.
