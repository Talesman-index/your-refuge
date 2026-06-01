# PRD — Site Web The Refuge
**Product Requirements Document · Contenu & Structure**
Version 1.0 — Mai 2026
Rédigé par : [Lead Designer / Product]
Inspiré de : careloop.framer.website

---

## 1. Contexte & Objectifs

### 1.1 Qui est The Refuge ?
The Refuge est une organisation chrétienne humanitaire basée à Cotonou (Bénin), dont la mission est d'apporter aide matérielle, soutien spirituel et dignité aux personnes vulnérables : femmes sans abri, enfants affamés, hommes en errance. Elle est animée par la foi active et la conviction que l'amour du Christ doit se traduire en actes concrets.

### 1.2 Problème actuel
The Refuge ne dispose pas encore de site web structuré. La communication de leur mission, vision et appel à l'action repose uniquement sur des documents internes. Il leur manque une vitrine numérique capable de :
- Convertir des visiteurs en donateurs ou bénévoles
- Raconter leur histoire avec impact émotionnel
- Crédibiliser l'organisation auprès de partenaires

### 1.3 Objectifs du site
| Priorité | Objectif |
|---|---|
| 🔴 Critique | Générer des dons (CTA clair, frictionless) |
| 🔴 Critique | Communiquer la mission et la vision avec émotion |
| 🟡 Important | Recruter bénévoles et partenaires |
| 🟡 Important | Documenter l'impact terrain (chiffres, témoignages) |
| 🟢 Nice-to-have | Blog / actualités / récits de terrain |

---

## 2. Audiences Cibles

| Audience | Profil | Ce qu'ils cherchent |
|---|---|---|
| **Donateur chrétien local** | Abonné église, Cotonou/Bénin | Confiance, impact concret, facilité de don |
| **ONG / Partenaire institutionnel** | Bailleur, fondation internationale | Transparence, gouvernance, mission claire |
| **Bénévole potentiel** | Jeune engagé, étudiant, professionnel | Comment participer, quel impact aurai-je ? |
| **Diaspora béninoise** | À l'étranger, attachée aux causes locales | Émotion, récit, moyen de contribuer à distance |

---

## 3. Structure du Site (Architecture de l'information)

```
/                       → Home (landing principale)
/mission                → Mission, Vision, Valeurs
/programmes             → Ce qu'on fait concrètement
/impact                 → Chiffres, témoignages, stories
/participer             → Dons, bénévolat, partenariats
/about                  → L'équipe, l'histoire, la foi
/contact                → Formulaire + adresse
```

---

## 4. Page par Page — Contenu & Structure

---

### 4.1 HOME — `/`

**Objectif :** Créer un choc émotionnel immédiat + orienter vers le don ou la mission en < 5 secondes.

---

#### SECTION 1 — Hero (Above the fold)

**Type :** Plein écran, image ou vidéo de fond (rue de Cotonou, enfant, repas servi)

**Contenu :**
```
[SURTITRE PETIT]   Une foi. Une ville. Une mission.

[HEADLINE H1]      Personne ne devrait
                   affronter la vie seul.

[SOUS-TITRE]       The Refuge tend la main à ceux que le monde oublie.
                   Cotonou. Chaque jour.

[CTA PRIMAIRE]     → Faire un don
[CTA SECONDAIRE]   → Découvrir notre mission
```

**Notes design :**
- S'inspirer du Hero Careloop : headline bold 2 lignes, image humaine en arrière-plan, deux CTA côte à côte
- Couleur primaire suggérée : ivoire/crème + or chaud + brun terreux (vs vert Careloop)
- Badge ou bandeau d'urgence optionnel en haut (ex : "Campagne Ramadan 2025 — Rejoignez-nous")

---

#### SECTION 2 — Preuve sociale / Urgence immédiate

**Type :** Bandeau d'impact 2 colonnes (cf. Careloop "Experience food aid" + "Make a donation today")

**Contenu :**
```
[COLONNE GAUCHE — Image + Texte]
Chaque semaine à Cotonou,
des familles dorment sans manger.
→ [Voir ce qu'on fait]

[COLONNE DROITE — CTA Don]
Vous pouvez changer ça.
Un don de 2 000 FCFA nourrit
un enfant pendant 3 jours.
→ [Faire un don aujourd'hui]
```

---

#### SECTION 3 — "L'amour en actes" (About intro)

**Type :** Texte centré + accroche éditoriale, fond clair

**Contenu :**
```
[LABEL]   À PROPOS DE NOUS

[H2]      L'amour ne reste pas silencieux.
          Il agit.

[Corps]   The Refuge est né d'un cri — celui de ceux qu'on ne voit plus.
          Ici, pas de jugement. Seulement des bras ouverts,
          une foi active, et la conviction que chaque vie a une valeur.

[CTA]     → Notre histoire complète
```

---

#### SECTION 4 — Programmes (Grid)

**Type :** 4 cartes programme (cf. Careloop "Our Programs are designed to empower")

**Contenu des 4 cartes :**

| # | Icône | Titre | Description courte |
|---|---|---|---|
| 1 | 🍽️ | Repas & Nourriture | Des repas chauds servis chaque semaine aux personnes sans abri |
| 2 | 🧠 | Soutien psycho-spirituel | Écoute, prière et accompagnement pour les âmes blessées |
| 3 | 👕 | Vêtements & dignité | Distribution de vêtements propres et d'articles essentiels |
| 4 | 🌱 | Réinsertion & espoir | Orientation vers des ressources pour reconstruire une vie |

Chaque carte : **Titre · Description 2 lignes · "Voir plus →"**

---

#### SECTION 5 — Chiffre d'impact fort

**Type :** Plein écran sombre, chiffre animé en grand (cf. Careloop "17,193+")

**Contenu :**
```
[SURTITRE]    UN ACTE. UN VISAGE. UNE VIE.

[CHIFFRE]     1 240+
[SOUS-CHIFFRE] personnes aidées depuis notre lancement

[CTA]         → Rejoindre le mouvement
```

*Note : adapter le chiffre à la réalité de The Refuge. Si non disponible, utiliser "Des centaines de vies touchées" le temps de consolider les données.*

---

#### SECTION 6 — Comment participer

**Type :** 6 icônes en grille (cf. Careloop "Ways you can make a difference")

**Contenu :**

| Icône | Titre | Description |
|---|---|---|
| 💸 | Faire un don | Ponctuel ou mensuel, chaque franc compte |
| 🙌 | Devenir bénévole | Rejoindre l'équipe terrain à Cotonou |
| 🙏 | Prier avec nous | Nous couvrir en intercession chaque semaine |
| 📣 | Partager notre mission | En parler autour de vous, sur les réseaux |
| 🤝 | Devenir partenaire | ONG, entreprise, église : collaborons |
| 🎁 | Offrir des ressources | Dons en nature : nourriture, vêtements, matériel |

---

#### SECTION 7 — Témoignages

**Type :** Carousel ou grille 3 cartes (cf. Careloop "What people say")

**Contenu exemple :**
```
[Témoignage 1 — Bénévole]
"J'ai rejoint The Refuge sans savoir à quoi m'attendre.
Ce que j'ai trouvé, c'est une famille et un sens."
— Adjoua M., bénévole depuis 2024

[Témoignage 2 — Bénéficiaire anonyme]
"Ce soir-là, je n'avais rien. Ils m'ont donné un repas,
de l'écoute, et l'envie de continuer."
— Un homme, Cotonou

[Témoignage 3 — Partenaire / Église]
"The Refuge incarne ce que notre église prêche.
Nous sommes fiers de les soutenir."
— Pasteur K., Église Evangélique de Cotonou
```

---

#### SECTION 8 — Stories / Articles récents

**Type :** 3 cartes éditoriales (cf. Careloop "Stories from the Community")

**Contenu :**
```
Carte 1 : "La nuit où Marie a frappé à notre porte"
Carte 2 : "50 repas distribués un dimanche matin"
Carte 3 : "Ce que Luc 9:13 signifie pour nous, concrètement"
```

---

#### SECTION 9 — FAQ

**Type :** Accordéon (cf. Careloop "Questions and Answers")

**Questions suggérées :**
- Comment mon don est-il utilisé ?
- Puis-je venir aider sur le terrain ?
- The Refuge est-il une organisation officielle ?
- Comment recevoir de l'aide ?
- Comment devenir partenaire ou sponsor ?

---

#### SECTION 10 — CTA Final (Footer Banner)

**Type :** Bandeau sombre plein largeur avec CTA double (cf. Careloop bottom banner)

**Contenu :**
```
[H2]   Vous pouvez être la réponse
       à leur prière.

[CTA PRIMAIRE]    → Faire un don maintenant
[CTA SECONDAIRE]  → Rejoindre l'équipe
```

---

### 4.2 PAGE MISSION — `/mission`

**Sections :**
1. **Hero texte** — La phrase d'ouverture : *"Chaque jour, dans le silence des rues…"*
2. **Mission** — Bloc texte fort + verset (Matthieu 25:35)
3. **Vision** — Paragraph narratif + image Cotonou (Dantokpa, Abomey-Calavi)
4. **Valeurs** — 4-5 piliers en cartes (Dignité / Foi active / Écoute / Compassion / Espérance)
5. **Provision** — Psaume 127:1 + texte théologique sur la dépendance à Dieu
6. **CTA** — Rejoindre la mission

---

### 4.3 PAGE PROGRAMMES — `/programmes`

**Sections :**
1. Hero + intro
2. 4 programmes détaillés (repas, soutien, vêtements, réinsertion) — chacun avec : photo · description longue · impact chiffré · CTA don ciblé
3. Calendrier d'activités / fréquence
4. CTA bénévolat

---

### 4.4 PAGE IMPACT — `/impact`

**Sections :**
1. Chiffres clés (compteurs animés)
2. Témoignages longs format
3. Galerie photo terrain
4. Rapport d'activité / transparence financière (PDF téléchargeable)

---

### 4.5 PAGE PARTICIPER — `/participer`

**Sections :**
1. 3 voies : Dons · Bénévolat · Partenariat (onglets ou sections scrollables)
2. **Dons :** formulaire simple (montants prédéfinis : 1 000 / 2 500 / 5 000 / 10 000 FCFA + montant libre), option récurrence
3. **Bénévolat :** formulaire d'intérêt (nom, disponibilité, compétences)
4. **Partenariat :** présentation de l'offre partenaire + email de contact

---

### 4.6 PAGE ABOUT — `/about`

**Sections :**
1. L'histoire de la fondation (narratif)
2. L'équipe (photos + rôles)
3. La foi qui nous anime (bloc versets + positionnement théologique)
4. Transparence & gouvernance

---

## 5. Système de Design — Recommandations

### 5.1 Identité visuelle suggérée

| Élément | Recommandation |
|---|---|
| **Primaire** | Brun chaud / Terracotta `#7C4A2D` |
| **Secondaire** | Or chaud `#C9963A` |
| **Neutre clair** | Ivoire `#F5F0E8` |
| **Neutre sombre** | Noir profond `#1A1410` |
| **Accent** | Vert 2 `#5e8900` |
| **Typographie titre** | Serif expressif (ex. Playfair Display, Cormorant Garamond) |
| **Corps** | Sans-serif lisible (ex. DM Sans, Plus Jakarta Sans) |

*Rationale : Careloop utilise un vert naturel/éco. The Refuge, ancré dans la foi chrétienne et la chaleur humaine de Cotonou, gagne à utiliser des tons terreux, chauds, bibliques — or, brun, ivoire. Contraste fort lumière/ombre.*

### 5.2 Ton éditorial

- **Voix :** Prophétique + Humain + Urgent. Jamais institutionnel.
- **Registre :** Entre sermon et reportage de terrain. Émotion vraie, pas mélodramatique.
- **Versets bibliques :** Utilisés comme piliers narratifs, pas comme décorations. 1 verset par section max.
- **Langue :** Français principalement. Envisager anglais pour les partenaires internationaux (v2).

### 5.3 Médias nécessaires

| Type | Usage | Priorité |
|---|---|---|
| Photos terrain | Hero, cartes programmes, stories | 🔴 Critique |
| Portraits bénévoles | Témoignages | 🔴 Critique |
| Photos repas servis | Impact visuel | 🟡 Important |
| Vidéo courte 60-90s | Hero vidéo background | 🟡 Important |
| Infographies impact | Page impact | 🟢 Nice-to-have |

---

## 6. Composants UI Clés (inspirés Careloop)

| Composant | Description | Section |
|---|---|---|
| **Hero plein écran** | Image + Headline + 2 CTA | Home |
| **Impact Banner 2 colonnes** | Urgence + Don | Home |
| **Programme Grid** | 4 cartes icône/titre/desc | Home + Programmes |
| **Compteur animé** | Chiffre en grand, fond sombre | Home |
| **Ways Grid** | 6 icônes "façons de participer" | Home |
| **Testimonial Cards** | Avatar + Quote + Nom | Home + Impact |
| **Story Cards** | Image + Titre + Lien | Home + Blog |
| **Accordion FAQ** | Q/R dépliant | Home |
| **CTA Footer Banner** | Dark bg + 2 boutons | Toutes pages |
| **Sticky Nav** | Logo + liens + CTA don | Global |

---

## 7. Navigation Globale

```
[Logo The Refuge]    Mission · Programmes · Impact · Participer · About    [CTA : Faire un don →]
```

- Sticky au scroll
- CTA "Faire un don" toujours visible (couleur or)
- Mobile : menu hamburger + CTA persistant en bas d'écran

---

## 8. Métriques de succès

| Métrique | Cible 6 mois |
|---|---|
| Taux de conversion don | > 3% visiteurs |
| Taux de rebond | < 50% |
| Formulaires bénévolat soumis | > 20/mois |
| Temps passé sur page Mission | > 2 min 30 |
| Pages vues /impact | Top 3 pages |

---

## 9. Hors-scope (V1)

- Espace membre / dashboard donateur
- Paiement en ligne intégré (dépend infrastructure locale — Mobile Money à prioriser en V2)
- Application mobile
- Version multilingue (anglais)
- Blog avec CMS complet

---

## 10. Priorités de développement

| Phase | Livrable | Délai suggéré |
|---|---|---|
| **Phase 1** | Home + Mission + Participer (formulaire don simple) | Semaines 1-3 |
| **Phase 2** | Programmes + Impact + About | Semaines 4-6 |
| **Phase 3** | FAQ + Stories / Blog + optimisation SEO | Semaines 7-9 |
| **Phase 4** | Mobile Money intégration + Analytics + A/B test CTA | Post-lancement |

---

*Document rédigé pour The Refuge · Cotonou, Bénin*
*Référence de design : careloop.framer.website*
*"Si l'Éternel ne bâtit la maison, ceux qui la bâtissent travaillent en vain." — Psaume 127:1*
