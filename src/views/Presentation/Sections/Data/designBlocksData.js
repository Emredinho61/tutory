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

const imagesPrefix =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/material-design-system/presentation/sections";

import imgPricing from "@/assets/img/pricing.png";
import imgFeatures from "@/assets/img/features.png";
import imgPagination from "@/assets/img/pagination.png";
import imgAlert from "@/assets/img/alerts.jpg";
import imgPopover from "@/assets/img/popovers.jpg";
import imgModal from "@/assets/img/modals.jpg";

export default [
  {
    heading: "Grundschule",
    description:
      "Klasse 1-4",
    items: [
      {
        image: `${imagesPrefix}/headers.jpg`,
        title: "Mathe",
        // subtitle: "10 Examples",
        route: "page-headers",
        pro: false
      },
      {
        image: imgFeatures,
        title: "Deutsch",
        // subtitle: "14 Examples",
        route: "page-features",
        pro: false
      },
      {
        image: imgPricing,
        title: "Englisch",
        // subtitle: "8 Examples",
        route: "presentation",
        pro: false
      }
    ]
  },
  {
    heading: "Mittlere Reife",
    description: "Klasse 5-10",
    items: [
      {
        image: `${imagesPrefix}/navbars.jpg`,
        title: "Mathe",
        // subtitle: "",
        route: "navigation-navbars",
        pro: false
      },
      {
        image: `${imagesPrefix}/nav-tabs.jpg`,
        title: "Deutsch",
        // subtitle: "2 Nav Tabs",
        route: "navigation-navtabs",
        pro: false
      },
      {
        image: imgPagination,
        title: "Englisch",
        // subtitle: "3 Examples",
        route: "navigation-pagination",
        pro: false
      },
      {
        image: imgPagination,
        title: "Technik",
        // subtitle: "3 Examples",
        route: "navigation-pagination",
        pro: false
      },
      {
        image: imgPagination,
        title: "Physik",
        // subtitle: "3 Examples",
        route: "navigation-pagination",
        pro: false
      },
      {
        image: imgPagination,
        title: "Geografie",
        // subtitle: "3 Examples",
        route: "navigation-pagination",
        pro: false
      },
      {
        image: imgPagination,
        title: "Geschichte",
        // subtitle: "3 Examples",
        route: "navigation-pagination",
        pro: false
      },
      {
        image: imgPagination,
        title: "Ethik",
        // subtitle: "3 Examples",
        route: "navigation-pagination",
        pro: false
      },
      {
        image: imgPagination,
        title: "Informatik",
        // subtitle: "3 Examples",
        route: "navigation-pagination",
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
        image: `${imagesPrefix}/navbars.jpg`,
        title: "Mathe",
        // subtitle: "",
        route: "navigation-navbars",
        pro: false
      },
      {
        image: imgPagination,
        title: "Englisch",
        // subtitle: "3 Examples",
        route: "navigation-pagination",
        pro: false
      },
      {
        image: imgPagination,
        title: "Informatik",
        // subtitle: "3 Examples",
        route: "navigation-pagination",
        pro: false
      },
      {
        image: imgPagination,
        title: "Wirtschaft",
        // subtitle: "3 Examples",
        route: "navigation-pagination",
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
        image: imgAlert,
        title: "Deutsch",
        // subtitle: "4 Examples",
        route: "ac-alerts",
        pro: false
      },
      {
        image: `${imagesPrefix}/toasts.jpg`,
        title: "Gemeinschaftskunde",
        // subtitle: "3 Examples",
        route: "presentation",
        pro: false
      },
      {
        image: imgPopover,
        title: "Religion",
        // subtitle: "2 Examples",
        route: "ac-tooltips-popovers",
        pro: false
      },
      {
        image: imgModal,
        title: "Wirtschaft",
        // subtitle: "5 Examples",
        route: "ac-modals",
        pro: false
      },
            {
        image: imgAlert,
        title: "Betriebswirtschaftslehre (Meister Teil III)",
        // subtitle: "4 Examples",
        route: "ac-alerts",
        pro: false
      },
      {
        image: `${imagesPrefix}/toasts.jpg`,
        title: "Ausbildereignung (Meister Teil IV)",
        // subtitle: "3 Examples",
        route: "presentation",
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
        image: imgModal,
        title: "KFZ-Mechatronik",
        // subtitle: "5 Examples",
        route: "ac-modals",
        pro: false
      },
      {
        image: imgModal,
        title: "Fahrzeugtechnik",
        // subtitle: "5 Examples",
        route: "ac-modals",
        pro: false
      },
      {
        image: imgModal,
        title: "Elektrotechnik",
        // subtitle: "5 Examples",
        route: "ac-modals",
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
        image: imgAlert,
        title: "höhere Mathematik",
        // subtitle: "4 Examples",
        route: "ac-alerts",
        pro: false
      },
      {
        image: `${imagesPrefix}/toasts.jpg`,
        title: "Programmierung",
        subtitle: "verschiedene Programmiersprachen: C, C#, Python, javascript...",
        route: "presentation",
        pro: false
      },
      {
        image: imgPopover,
        title: "Algorithmen und Datenstrukturen",
        // subtitle: "2 Examples",
        route: "ac-tooltips-popovers",
        pro: false
      },
      {
        image: imgModal,
        title: "Technische Informatik",
        // subtitle: "5 Examples",
        route: "ac-modals",
        pro: false
      },
      {
        image: imgModal,
        title: "Datenbanken",
        // subtitle: "5 Examples",
        route: "ac-modals",
        pro: false
      }
    ]
  }
];
