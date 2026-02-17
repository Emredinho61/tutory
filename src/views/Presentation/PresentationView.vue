<script setup>
import { onMounted, onUnmounted } from "vue";

//example components
import NavbarDefault from "../..//examples/navbars/NavbarDefault.vue";
import DefaultFooter from "../../examples/footers/FooterDefault.vue";
import Header from "../../examples/Header.vue";
import FilledInfoCard from "../../examples/cards/infoCards/FilledInfoCard.vue";

//Vue Material Kit 2 components
import MaterialSocialButton from "@/components/MaterialSocialButton.vue";

// sections
// import PresentationCounter from "./Sections/PresentationCounter.vue";
import PresentationPages from "./Sections/PresentationPages.vue";
import PresentationExample from "./Sections/PresentationExample.vue";
import data from "./Sections/Data/designBlocksData";
import BuiltByDevelopers from "./Components/BuiltByDevelopers.vue";
// import PresentationTestimonials from "./Sections/PresentationTestimonials.vue";
import PresentationInformation from "./Sections/PresentationInformation.vue";

//images
import vueMkHeader from "@/assets/img/study-presentation.jpg";
import wavesWhite from "@/assets/img/waves-white.svg";

//hooks
const body = document.getElementsByTagName("body")[0];
onMounted(() => {
  body.classList.add("presentation-page");
  body.classList.add("bg-gray-200");
});
onUnmounted(() => {
  body.classList.remove("presentation-page");
  body.classList.remove("bg-gray-200");
});
</script>

<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarDefault :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
    <div class="page-header min-vh-75" :style="`background-image: url(${vueMkHeader})`" loading="lazy">
      <div class="container">
        <div class="row">
          <div class="col-lg-7 text-center mx-auto position-relative">
            <h1 class="pt-3 mt-n5 me-2" style="color: #1a1a1a" :style="{ display: 'inline-block ' }">
              Tutoratus
            </h1>
            <p class="text-lead px-5 mt-3" style="color: #000000" :style="{ fontWeight: '500' }">
              Besser sein als Gestern
            </p>
          </div>
        </div>
      </div>
    </div>
  </Header>

  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6">
    <!--<PresentationCounter />-->
    <PresentationInformation />
    <PresentationExample :data="data" />
    <PresentationPages />
    <BuiltByDevelopers />

    <div class="container">
      <div class="row">
        <div class="col-lg-4">
          <FilledInfoCard class="px-lg-1 mt-lg-0 mt-4 p-4" height="h-100"
            :icon="{ component: 'wifi', color: 'success' }" title="Online"
            description="Auf deiner bevorzugten Plattform, wie Microsoft Teams, Zoom, usw. überall erreichbar." :action="{
              label: { text: '' }
            }" />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard class="px-lg-1 mt-lg-0 mt-4 p-4" height="h-100"
            :icon="{ component: 'home_work', color: 'success' }" title="Bei dir zu Hause"
            description="Hausbesuche sind nach Absprache möglich." :action="{
              label: { text: '' }
            }" />
        </div>
        <div class="col-lg-4">
          <FilledInfoCard class="px-lg-1 mt-lg-0 mt-4 p-4" :icon="{ component: 'receipt_long', color: 'success' }"
            title="Öffentliche Lernplätze"
            description="Wir bieten auch 1-zu-1 Lernsessions in der Universitätsbibliothek Freiburg an." :action="{
              route:
                'https://www.creative-tim.com/learning-lab/vue/utilities/material-kit/',
              label: { text: '' }
            }" />
        </div>
      </div>
    </div>
    <PresentationTestimonials />

    <div class="container-fluid mt-sm-5 border-radius-xl" :style="{
      background: 'linear-gradient(195deg, rgb(66, 66, 74), rgb(25, 25, 25))'
    }">
      <div class="page-header py-6 py-md-5 my-sm-3 mb-3 border-radius-xl" :style="{
        backgroundImage: `url(${wavesWhite})`
      }" loading="lazy">
        <span class="mask bg-gradient-dark"></span>
        <div class="container">
          <div class="row">
            <div class="d-flex justify-content-center p-5">
              <div class="col-lg-8 ms-lg-5 text-center">
                <h3 class="text-white">
                  Du bist bereit deine Noten auf ein neues Level zu bringen?
                </h3>
                <p class="text-white text-md">
                  Dann kontaktiere uns über unser Kontaktformular oder schreibe uns eine WhatsApp Nachricht.
                </p>

                <a class="btn btn-sm mb-0 bg-gradient-success px-5 py-3 mt-4" href="/kontakt">Kontaktiere uns</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-5 ms-auto">
            <h4 class="mb-1">Unterstütze uns auf Social Media!</h4>
            <p class="lead mb-0">Teile deine POSITIVE Erfahrung mit deinen Freunden. Für jeden teilnehmenden Freund oder
              Freundin kriegst du zwei Nachhilfestunden umsonst.</p>
          </div>
          <div class="col-lg-5 me-lg-auto my-lg-auto text-lg-end mt-5">
            <MaterialSocialButton route="" component="facebook-square" color="twitter" label="Instagram" class="btn-grad" />
            <MaterialSocialButton route="" component="facebook-square" label="Threads" class="btn-grad2" />
            <MaterialSocialButton route="" component="facebook-square" label="WhatsApp" class="btn-grad3" />
          </div>
        </div>
      </div>
    </div>
  </div>
  <DefaultFooter />
</template>
<style scoped>
.btn-grad {
  background-image: linear-gradient(to right, #FF512F 0%, #DD2476 51%, #FF512F 100%)
}

.btn-grad {
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}

.btn-grad:hover {
  background-position: right center;
  color: #fff;
  text-decoration: none;
}


.btn-grad2 {
  background-image: linear-gradient(to right, #000000 0%, #434343 51%, #000000 100%)
}

.btn-grad2 {
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}

.btn-grad2:hover {
  background-position: right center;
  /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}



.btn-grad3 {
  background-image: linear-gradient(to right, #76b852 0%, #8DC26F 51%, #76b852 100%)
}

.btn-grad3 {
  margin: 10px;
  padding: 15px 45px;
  text-align: center;
  text-transform: uppercase;
  transition: 0.5s;
  background-size: 200% auto;
  color: white;
  box-shadow: 0 0 20px #eee;
  border-radius: 10px;
  display: block;
}

.btn-grad3:hover {
  background-position: right center;
  /* change the direction of the change here */
  color: #fff;
  text-decoration: none;
}
</style>
