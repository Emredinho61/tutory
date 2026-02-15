/*
=========================================================
* Vue Material Kit 2 - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/vue-material-kit-pro
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import imgMath from "@/assets/subjects/Mathematik.png"
import imgAlgo from "@/assets/subjects/AlgorithmenUndDatenstrukturen.png"
import imgDatenbanken from "@/assets/subjects/Datenbanken.png"
import imgDeutsch from "@/assets/subjects/Deutsch.png"
import imgETechnik from "@/assets/subjects/Elektrotechnik.png"
import imgEnglisch from "@/assets/subjects/Englisch.png"
import imgFTechnik from "@/assets/subjects/Fahrzeugtechnik.png"
import imgGGK from "@/assets/subjects/Gemeinschaftskunde.png"
import imgGeo from "@/assets/subjects/Geografie.png"
import imgGeschichte from "@/assets/subjects/Geschichte.png"
import imghoehreMathe from "@/assets/subjects/hoehereMathematik.png"
import imgInfo from "@/assets/subjects/Informatik.png"
import imgKFZ from "@/assets/subjects/KFZMechatronik.png"
import imgMeister3 from "@/assets/subjects/MeisterpruefungTeil_III.png"
import imgMeister4 from "@/assets/subjects/MeisterTeil_IV.png"
import imgPhysik from "@/assets/subjects/Physik.png"
import imgProgrammierung from "@/assets/subjects/Programmierung.png"
import imgtechnischeInfo from "@/assets/subjects/technischeInformatik.png"
import imgWirtschaft from "@/assets/subjects/Wirtschaft.png"


export default [
  {
    heading: "Grundschule",
    description:
      "Klasse 1-4",
    items: [
      {
        image: imgMath,
        title: "Mathe",
        // subtitle: "10 Examples",
        // // route: "page-headers",
        pro: false
      },
      {
        image: imgDeutsch,
        title: "Deutsch",
        // subtitle: "14 Examples",
        // // route: "page-features",
        pro: false
      },
      {
        image: imgEnglisch,
        title: "Englisch",
        // subtitle: "8 Examples",
        // route: "presentation",
        pro: false
      }
    ]
  },
  {
    heading: "Mittlere Reife",
    description: "Klasse 5-10",
    items: [
      {
        image: imgMath,
        title: "Mathe",
        // subtitle: "",
        // // route: "navigation-navbars",
        pro: false
      },
      {
        image: imgDeutsch,
        title: "Deutsch",
        // subtitle: "2 Nav Tabs",
        // // route: "navigation-navtabs",
        pro: false
      },
      {
        image: imgEnglisch,
        title: "Englisch",
        // subtitle: "3 Examples",
        // route: "navigation-pagination",
        pro: false
      },
      {
        image: imgPhysik,
        title: "Physik",
        // subtitle: "3 Examples",
        // route: "navigation-pagination",
        pro: false
      },
      {
        image: imgGeo,
        title: "Geografie",
        // subtitle: "3 Examples",
        // route: "navigation-pagination",
        pro: false
      },
      {
        image: imgGeschichte,
        title: "Geschichte",
        // subtitle: "3 Examples",
        // route: "navigation-pagination",
        pro: false
      },
      {
        image: imgInfo,
        title: "Informatik",
        // subtitle: "3 Examples",
        // route: "navigation-pagination",
        pro: false
      }
    ]
  },
  {
    heading: "Oberstufe",
    description:
      "Klasse 11-13",
    items: [
            {
        image: imgMath,
        title: "Mathe",
        // subtitle: "",
        // route: "navigation-navbars",
        pro: false
      },
      {
        image: imgEnglisch,
        title: "Englisch",
        // subtitle: "3 Examples",
        // route: "navigation-pagination",
        pro: false
      },
      {
        image: imgInfo,
        title: "Informatik",
        // subtitle: "3 Examples",
        // route: "navigation-pagination",
        pro: false
      },
      {
        image: imgWirtschaft,
        title: "Wirtschaft",
        // subtitle: "3 Examples",
        // route: "navigation-pagination",
        pro: false
      },
    ]
  },
  {
    heading: "Ausbildung",
    description:
      "Ausbildungsberufe",
    items: [
      {
        image: imgDeutsch,
        title: "Deutsch",
        // subtitle: "4 Examples",
        // route: "ac-alerts",
        pro: false
      },
      {
        image: imgGGK,
        title: "Gemeinschaftskunde",
        // subtitle: "3 Examples",
        // route: "presentation",
        pro: false
      },
      {
        image: imgWirtschaft,
        title: "Wirtschaft",
        // subtitle: "5 Examples",
        // route: "ac-modals",
        pro: false
      },
            {
        image: imgMeister3,
        title: "Betriebswirtschaftslehre (Meister Teil III)",
        // subtitle: "4 Examples",
        // route: "ac-alerts",
        pro: false
      },
      {
        image: imgMeister4,
        title: "Ausbildereignung (Meister Teil IV)",
        // subtitle: "3 Examples",
        // route: "presentation",
        pro: false
      },
    ]
  },
  {
    heading: "Berufsfachliche Kompetenz",
    description:
      "Schwerpunkt KFZ",
    items: [
      {
        image: imgKFZ,
        title: "KFZ-Mechatronik",
        // subtitle: "5 Examples",
        // route: "ac-modals",
        pro: false
      },
      {
        image: imgFTechnik,
        title: "Fahrzeugtechnik",
        // subtitle: "5 Examples",
        // route: "ac-modals",
        pro: false
      },
      {
        image: imgETechnik,
        title: "Elektrotechnik",
        // subtitle: "5 Examples",
        // route: "ac-modals",
        pro: false
      }
    ]
  },
  {
    heading: "Hochschule",
    description:
      "Informatik/Mathe/Programmierung",
    items: [
      {
        image: imghoehreMathe,
        title: "höhere Mathematik",
        // subtitle: "4 Examples",
        // route: "ac-alerts",
        pro: false
      },
      {
        image: imgProgrammierung,
        title: "Programmierung",
        subtitle: "verschiedene Programmiersprachen: C, C#, Python, javascript...",
        // route: "presentation",
        pro: false
      },
      {
        image: imgAlgo,
        title: "Algorithmen und Datenstrukturen",
        // subtitle: "2 Examples",
        // route: "ac-tooltips-popovers",
        pro: false
      },
      {
        image: imgtechnischeInfo,
        title: "Technische Informatik",
        // subtitle: "5 Examples",
        // route: "ac-modals",
        pro: false
      },
      {
        image: imgDatenbanken,
        title: "Datenbanken",
        // subtitle: "5 Examples",
        // route: "ac-modals",
        pro: false
      }
    ]
  }
];
