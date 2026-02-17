<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import DefaultNavbar from "../../../examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../../examples/footers/FooterDefault.vue";
import PresentationExample from "@/views/Presentation/Sections/PresentationExample.vue";
import data from "@/views/Presentation/Sections/Data/designBlocksData";



//image
import bg0 from "@/assets/services/leistungen.png";

//dep
import Typed from "typed.js";

//sections
import Information from "./Sections/AboutInformation.vue";
import AboutTeam from "./Sections/AboutTeam.vue";
import Featuring from "./Sections/AboutFeaturing.vue";
import Newsletter from "./Sections/AboutNewsletter.vue";

const body = document.getElementsByTagName("body")[0];
//hooks
onMounted(() => {
  body.classList.add("about-us");
  body.classList.add("bg-gray-200");

  if (document.getElementById("typed")) {
    // eslint-disable-next-line no-unused-vars
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });
  }
});

onUnmounted(() => {
  body.classList.remove("about-us");
  body.classList.remove("bg-gray-200");
});
</script>
<template>
  <DefaultNavbar
    :action="{
      route: 'javascript:;',
      label: '+49 12345678',
      color: 'btn-white',
    }"
    transparent
  />
  <header class="bg-gradient-dark">
    <div
      class="page-header min-vh-75"
      :style="{ backgroundImage: `url(${bg0})` }"
    >
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-lg-8 text-center mx-auto my-auto">
            <h1 class="text-white">
              Du brauchst Hilfe in <span class="text-white" id="typed"></span>
            </h1>
            <div id="typed-strings">
              <h1>Deutsch?</h1>
              <h1>Englisch?</h1>
              <h1>Mathe?</h1>
              <h1>Informatik?</h1>
              <h1>Physik?</h1>
              <h1>der Ausbildung?</h1>
            </div>
            <p class="lead mb-4 text-white opacity-8">
              Dann lerne unsere kompetenten Nachhilfelehrer kennen.
            </p>
          </div>
        </div>
      </div>
    </div>
  </header>
  <div class="card card-body shadow-xl mx-3 mx-md-4 mt-n6">
    <Information />
    <AboutTeam />
    <Featuring />
        <PresentationExample :data="data" />
    <Newsletter />
  </div>
  <DefaultFooter />
</template>
