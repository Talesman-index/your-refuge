# Design System — The Refuge
**Fichier de référence · Identité visuelle & Composants**
Version 1.0 — Mai 2026

---

## 1. Fondations

### 1.1 Philosophie de design

> "L'amour ne reste pas silencieux. Il agit."

The Refuge est une organisation humanitaire chrétienne ancrée à Cotonou. Son identité visuelle doit incarner trois tensions :

| Tension | Expression |
|---|---|
| **Foi** ↔ **Action** | Typographie sérieuse et solennelle + layout dynamique et orienté conversion |
| **Chaleur humaine** ↔ **Crédibilité** | Palette terreuse et jaunee + structure claire et rigoureuse |
| **Urgence** ↔ **Espérance** | Contrastes forts, CTA directs + espaces respirants, lumière |

L'esthétique générale : **éditoriale humaniste**. Ni institutionnel froid, ni ONG générique. Quelque chose entre un magazine de foi et un rapport de terrain.

---

## 2. Couleurs

### 2.1 Palette primaire

```
--color-primary:       #7C4A2D   /* Brun terracotta — chaleur, terre, ancrage */
--color-primary-light: #A0613E   /* Variante éclairée */
--color-primary-dark:  #4E2A16   /* Variante profonde */
```

### 2.2 Palette accent

```
--color-yellow:          #FDDB22   /* Jaune vif — foi, lumière, valeur */
--color-yellow-light:    #FEE75C   /* Jaune pâle — highlights, hovers */
--color-yellow-dark:     #857000   /* Jaune sombre — texte sur fond clair */
```

### 2.3 Neutres

```
--color-ivory:         #F5F0E8   /* Fond principal clair */
--color-ivory-dark:    #EAE2D2   /* Fond alternatif, sections secondaires */
--color-charcoal:      #2C1F14   /* Texte principal */
--color-black:         #1A1410   /* Noir profond — sections sombres, hero */
--color-white:         #FDFAF6   /* Blanc chaud — jamais blanc pur */
```

### 2.4 Accent discret (vert 2)

```
--color-olive:         #5e8900   /* Vert 2 — espoir, action, vie */
--color-olive-light:   #73a600   /* Variante hover */
```

### 2.5 Accent dynamique (rose)

```
--color-coral:         #ca1e73   /* Rose dynamique — boutons, labels d'urgence */
--color-coral-hover:   #b01362   /* Variante hover */
```

### 2.6 Sémantique (UI)

```
--color-success:       #4A7C59   /* Confirmation don, succès formulaire */
--color-error:         #A03030   /* Erreur, alerte */
--color-muted:         #8C7B6B   /* Texte secondaire, captions */
--color-border:        #D4C9B8   /* Bordures légères */
```

### 2.7 Usage des couleurs

| Rôle | Couleur |
|---|---|
| Fond global (clair) | `--color-ivory` |
| Fond sections sombres | `--color-black` |
| Fond sections alternées | `--color-ivory-dark` |
| Texte principal | `--color-charcoal` |
| Texte sur fond sombre | `--color-white` |
| CTA primaire (bouton) | `--color-yellow` + texte `--color-black` |
| CTA secondaire (outline) | Bordure `--color-primary` + texte `--color-primary` |
| Boutons d'action / Urgence | Fond `--color-coral` (Rose) + texte `--color-white` |
| Accent discret | `--color-olive` (Vert 2) |
| Accent / highlight | `--color-yellow-light` |
| Versets bibliques | `--color-yellow-dark` en italique |

---

## 3. Typographie

### 3.1 Familles de polices

```
--font-display:  'Bayon'
--font-body:     'Manrope'
--font-label:    'Manrope'
```

**Bayon** — Sans-serif condensé gras et expressif. Utilisé pour tous les titres d'affichage (Display, H1-H5) et labels de sections. Évoque le dynamisme, le modernisme et l'autorité visuelle.

**Manrope** — Sans-serif moderne et lisible. Utilisé pour le corps de texte, les descriptions, les saisies, les boutons et les petits détails.

---

### 3.2 Échelle typographique

| Token | Taille | Poids | Police | Usage |
|---|---|---|---|---|
| `--text-hero` | 260px | 400 | Bayon | Headline Hero H1 / Display |
| `--text-h1` | 130px | 400 | Bayon | Titres de page |
| `--text-h2` | 80px | 400 | Bayon | Titres de section |
| `--text-h3` | 40px | 400 | Bayon | Sous-sections, titres cartes |
| `--text-h4` | 40px | 400 | Bayon | Titres UI, noms de programmes |
| `--text-h5` | 24px | 400 | Bayon | Petits en-têtes et étiquettes |
| `--text-body` | 16px | 400 | Manrope | Corps standard, lead, paragraphes |
| `--text-body-sm` | 12px | 400 | Manrope | Captions, métadonnées, notes |
| `--text-label` | 16px | 500 | Manrope | Étiquettes d'entrées de formulaires |

---

### 3.3 Règles typographiques

- **Line-height** : `1.6` pour le corps, `1.1–1.2` pour les headlines display
- **Letter-spacing** : `0.12em` sur les labels en CAPSLOCK, `-0.02em` sur les grands titres
- **Measure** (largeur de colonne) : 65–75 caractères maximum pour le corps
- **Alignement** : Gauche par défaut. Centré autorisé pour les sections impact/hero. Jamais justifié.
- **Versets** : Toujours en italique, couleur `--color-yellow-dark`, précédés de la référence en label

---

## 4. Espacement & Layout

### 4.1 Unité de base

Système à base 4px :

```
--space-1:   4px
--space-2:   8px
--space-3:   12px
--space-4:   16px
--space-6:   24px
--space-8:   32px
--space-10:  40px
--space-12:  48px
--space-16:  64px
--space-20:  80px
--space-24:  96px
--space-32:  128px
```

### 4.2 Grille

```
--grid-columns:      12
--grid-gutter:       24px     /* Desktop */
--grid-gutter-md:    16px     /* Tablette */
--grid-gutter-sm:    12px     /* Mobile */
--container-max:     1280px
--container-padding: 80px     /* Desktop */
--container-padding-md: 40px
--container-padding-sm: 20px
```

### 4.3 Sections

| Token | Valeur | Usage |
|---|---|---|
| `--section-padding-y` | `96px` | Padding vertical standard entre sections |
| `--section-padding-y-lg` | `128px` | Sections hero, sections impact |
| `--section-padding-y-sm` | `64px` | Sections secondaires, footer |

---

## 5. Effets & Élévations

### 5.1 Ombres

```
--shadow-sm:   0 1px 3px rgba(26,20,16,0.08)
--shadow-md:   0 4px 16px rgba(26,20,16,0.12)
--shadow-lg:   0 12px 40px rgba(26,20,16,0.18)
--shadow-yellow: 0 4px 24px rgba(253,219,34,0.2)   /* Hover CTA or */
```

### 5.2 Border radius

```
--radius-sm:   4px    /* Badges, labels */
--radius-md:   8px    /* Cards, inputs */
--radius-lg:   16px   /* Cartes larges */
--radius-xl:   24px   /* Sections arrondies */
--radius-full: 9999px /* Boutons pill, avatars */
```

### 5.3 Transitions

```
--transition-fast:   150ms ease
--transition-base:   250ms ease
--transition-slow:   400ms ease
--transition-spring: 300ms cubic-bezier(0.34, 1.56, 0.64, 1)
```

---

## 6. Composants UI

---

### 6.1 Boutons

#### CTA Primaire — "Faire un don"
```
Fond       : --color-yellow
Texte      : --color-black  |  font: DM Sans 15px 600
Padding    : 14px 28px
Radius     : --radius-full (pill)
Hover      : fond --color-yellow-dark, shadow --shadow-yellow
Transition : --transition-base
```

#### CTA Secondaire — Outline
```
Fond       : transparent
Bordure    : 1.5px solid --color-primary
Texte      : --color-primary  |  font: DM Sans 15px 500
Padding    : 13px 27px
Radius     : --radius-full
Hover      : fond --color-primary, texte --color-white
```

#### CTA Ghost — Sur fond sombre
```
Fond       : transparent
Bordure    : 1.5px solid rgba(255,255,255,0.4)
Texte      : --color-white
Hover      : fond rgba(255,255,255,0.1)
```

#### Règles boutons
- Jamais de bouton sans label explicite ("Faire un don" > "Cliquez ici")
- Toujours une icône flèche `→` sur les CTA texte inline
- Taille minimum tap cible : 44×44px (mobile)

---

### 6.2 Cartes Programme

```
Fond       : --color-white
Bordure    : 1px solid --color-border
Radius     : --radius-lg
Padding    : --space-8
Ombre      : --shadow-sm
Hover      : --shadow-md + border-color --color-yellow-light

Structure :
  [Icône 40px — fond --color-ivory, radius --radius-md]
  [H4 — Programme title]
  [Body sm — Description 2 lignes]
  [Lien texte "Voir plus →" — couleur --color-yellow-dark]
```

---

### 6.3 Carte Témoignage

```
Fond       : --color-ivory-dark
Radius     : --radius-lg
Padding    : --space-8 --space-10

Structure :
  [Guillemet décoratif " " — Cormorant 80px, --color-yellow-light, opacity 0.5]
  [Quote — Cormorant italic 20px, --color-charcoal]
  [Séparateur : ligne 1px --color-border]
  [Avatar 40px + Nom + Rôle — DM Sans]
```

---

### 6.4 Compteur d'impact

```
Fond section : --color-black
Label surtitre : DM Mono 12px caps, --color-yellow, letter-spacing 0.15em
Chiffre : Cormorant 96px 600, --color-white
  Suffixe "+" : --color-yellow
Description : DM Sans 18px, --color-muted
CTA sous le chiffre : bouton ghost
```

---

### 6.5 Verset biblique (composant Quote)

```
Bordure gauche : 3px solid --color-yellow
Padding left   : --space-6
Texte          : Cormorant italic 22px, --color-charcoal
Référence      : DM Mono 11px caps, --color-yellow-dark, margin-top --space-2
```

Exemple :
```
│ "Donnez-leur vous-mêmes à manger."
  LUC 9:13
```

---

### 6.6 Label / Badge de section

```
Display  : inline-flex, align-items center, gap --space-2
Fond     : --color-ivory-dark
Bordure  : 1px solid --color-border
Radius   : --radius-full
Padding  : 4px 12px
Texte    : DM Mono 11px, --color-muted, letter-spacing 0.12em, UPPERCASE
```

Usage : utilisé comme surtitre avant chaque H2 de section.
Exemple : `À PROPOS · NOTRE MISSION · COMMENT PARTICIPER`

---

### 6.7 Navigation (Header sticky)

```
Fond           : --color-white, backdrop-blur 12px, opacity 0.95
Hauteur        : 64px desktop / 56px mobile
Bordure bas    : 1px solid --color-border (apparaît au scroll)
Logo           : à gauche — SVG + texte "The Refuge"
Liens          : DM Sans 14px 500, --color-charcoal, hover --color-primary
CTA nav        : Bouton primaire pill "Faire un don →"
Mobile         : hamburger + drawer full-width + CTA fixé en bas
```

---

### 6.8 Accordion FAQ

```
Conteneur      : --color-white, bordure --color-border, radius --radius-md
Item           : padding --space-6, bordure-bas --color-border
Question       : DM Sans 16px 500, --color-charcoal
Icône toggle   : + / × animé, --color-yellow
Réponse        : DM Sans 15px 400, --color-muted, padding-top --space-3
Animation      : height 0 → auto, transition --transition-base
```

---

### 6.9 Carte Story / Article

```
Image          : ratio 16:9, radius --radius-md en haut
Fond carte     : --color-white
Padding corps  : --space-6
Label catégorie: composant Label (section 6.6)
Titre          : Cormorant 22px 600, --color-charcoal
Extrait        : DM Sans 14px, --color-muted, 2 lignes max
Lien           : "Lire la suite →", --color-yellow-dark
Hover carte    : --shadow-md, légère montée translateY(-2px)
```

---

### 6.10 Formulaire de don

```
Montants prédéfinis  : 4 boutons pill (1 000 · 2 500 · 5 000 · 10 000 FCFA)
  Fond par défaut    : --color-ivory-dark
  Fond sélectionné   : --color-yellow, texte --color-black
  
Champ montant libre  : input, fond --color-white, bordure --color-border
  Focus              : bordure --color-yellow, shadow 0 0 0 3px --color-yellow-light 25%

Toggle récurrence    : "Don unique / Don mensuel"
  Switch pill animé  : --color-yellow sur actif

CTA soumettre        : Bouton primaire full-width "Faire un don →"
  
Note sous le bouton  : DM Sans 12px --color-muted, icône 🔒 "Paiement sécurisé"
```

---

## 7. Iconographie

- **Bibliothèque** : Phosphor Icons (cohérence avec l'écosystème Sagana/Cactuce)
- **Style** : Regular (outline) par défaut · Bold sur fond coloré
- **Taille standard** : 24px UI · 40px cartes programme · 20px inline
- **Couleur** : hérite du contexte (`currentColor`) — s'adapte fond clair/sombre

**Icônes spécifiques The Refuge :**

| Usage | Icône Phosphor |
|---|---|
| Repas / Nourriture | `ForkKnife` |
| Soutien psycho | `Heart` |
| Vêtements | `TShirt` |
| Réinsertion | `ArrowUpRight` |
| Don | `CurrencyDollar` |
| Bénévolat | `HandsClapping` |
| Prière | `HandsPraying` |
| Partage | `ShareNetwork` |
| Partenariat | `Handshake` |
| Don en nature | `Gift` |
| Téléphone | `Phone` |
| Email | `Envelope` |
| Localisation | `MapPin` |

---

## 8. Imagerie & Photographie

### 8.1 Style photographique

- **Sujet** : Humains en situation réelle — jamais de stock photo générique
- **Lumière** : Dorée, naturelle, heure chaude (matin/soir à Cotonou)
- **Cadrage** : Proximité, regard caméra autorisé, dignité préservée — jamais misérabiliste
- **Traitement** : Légèrement désaturé + chaud (+10 orange/jaune en post)
- **À éviter** : Larmes exposées, dénuement excessif, poses artificielles, sourires de façade

### 8.2 Formats d'image

| Usage | Ratio | Taille min |
|---|---|---|
| Hero plein écran | 16:9 ou 21:9 | 1920 × 1080px |
| Carte programme | 4:3 | 600 × 450px |
| Carte story | 16:9 | 800 × 450px |
| Avatar témoignage | 1:1 | 80 × 80px |
| Section split (image+texte) | 1:1 | 700 × 700px |

### 8.3 Overlay sur images

Pour maintenir la lisibilité du texte sur fond photo :
```css
/* Hero dark overlay */
background: linear-gradient(
  to right,
  rgba(26, 20, 16, 0.75) 0%,
  rgba(26, 20, 16, 0.3) 60%,
  transparent 100%
);

/* Card overlay */
background: linear-gradient(
  to top,
  rgba(26, 20, 16, 0.8) 0%,
  transparent 60%
);
```

---

## 9. Motion & Animation

### 9.1 Principes

- **Utilitaire d'abord** : chaque animation sert la lisibilité ou guide l'attention
- **Pas de performance sans sens** : éviter l'animation purement décorative
- **Respect du mouvement réduit** : `prefers-reduced-motion` toujours implémenté

### 9.2 Patterns d'animation

| Pattern | Propriété | Valeur |
|---|---|---|
| Fade in au scroll | `opacity 0 → 1` | `--transition-slow` + `translateY(20px → 0)` |
| Compteur animé | `count-up` JS | Durée 2s, easing `ease-out` |
| Hover carte | `translateY(-3px)` | `--transition-base` |
| Hover bouton | `scale(1.02)` | `--transition-fast` |
| Accordion ouverture | `height 0 → auto` | `--transition-base` |
| Apparition staggerée | `animation-delay` | 80ms entre chaque enfant |

---

## 10. Accessibilité

- **Contraste** : ratio minimum 4.5:1 texte normal · 3:1 texte large (WCAG AA)
- **Focus visible** : outline `2px solid --color-yellow`, offset 2px sur tous les éléments interactifs
- **Alt text** : obligatoire sur toutes les images, descriptif et humain
- **ARIA** : landmarks (`main`, `nav`, `section`), labels sur boutons icônes
- **Formulaires** : labels explicites, messages d'erreur utiles, pas de placeholder seul
- **Taille de police** : minimum 16px sur mobile
- **Tap targets** : minimum 44×44px sur mobile

---

## 11. Tokens CSS — Fichier de référence complet

```css
:root {
  /* Couleurs */
  --color-primary:        #7C4A2D;
  --color-primary-light:  #A0613E;
  --color-primary-dark:   #4E2A16;
  --color-yellow:           #FDDB22;
  --color-yellow-light:     #FEE75C;
  --color-yellow-dark:      #857000;
  --color-ivory:          #F5F0E8;
  --color-ivory-dark:     #EAE2D2;
  --color-charcoal:       #2C1F14;
  --color-black:          #1A1410;
  --color-white:          #FDFAF6;
  --color-olive:          #5e8900;
  --color-olive-light:    #73a600;
  --color-muted:          #8C7B6B;
  --color-border:         #D4C9B8;
  --color-success:        #4A7C59;
  --color-error:          #A03030;
  --color-coral:          #ca1e73;
  --color-coral-hover:    #b01362;

  /* Typographie */
  --font-display: 'Bayon';
  --font-body:    'Manrope';
  --font-label:   'Manrope';

  --text-hero:     clamp(64px, 15vw, 260px);
  --text-h1:       clamp(40px, 8vw, 130px);
  --text-h2:       clamp(32px, 5.5vw, 80px);
  --text-h3:       clamp(24px, 4vw, 40px);
  --text-h4:       clamp(24px, 4vw, 40px);
  --text-h5:       clamp(18px, 3vw, 24px);
  --text-body-lg:  16px;
  --text-body:     16px;
  --text-body-sm:  12px;
  --text-label:    16px;
  --text-verset:   22px;

  /* Espacement */
  --space-1:   4px;   --space-2:  8px;   --space-3:  12px;
  --space-4:   16px;  --space-6:  24px;  --space-8:  32px;
  --space-10:  40px;  --space-12: 48px;  --space-16: 64px;
  --space-20:  80px;  --space-24: 96px;  --space-32: 128px;

  --section-padding-y:    96px;
  --section-padding-y-lg: 128px;
  --section-padding-y-sm: 64px;
  --container-max:        1280px;
  --container-padding:    80px;

  /* Effets */
  --shadow-sm:   0 1px 3px rgba(26,20,16,0.08);
  --shadow-md:   0 4px 16px rgba(26,20,16,0.12);
  --shadow-lg:   0 12px 40px rgba(26,20,16,0.18);
  --shadow-yellow: 0 4px 24px rgba(253,219,34,0.2);

  --radius-sm:   4px;   --radius-md:  8px;
  --radius-lg:   16px;  --radius-xl:  24px;  --radius-full: 9999px;

  --transition-fast:   150ms ease;
  --transition-base:   250ms ease;
  --transition-slow:   400ms ease;
  --transition-spring: 300ms cubic-bezier(0.34, 1.56, 0.64, 1);
}
```

---

*Design System — The Refuge · Cotonou, Bénin*
*Maintenu par l'équipe design · Version 1.0*
