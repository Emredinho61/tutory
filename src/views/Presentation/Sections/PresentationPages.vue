<script setup>
import ExampleCard from "../Components/ExampleCard.vue";
import MaterialBadge from "../../../components/MaterialBadge.vue";

// images
import imgSigninCover from "@/assets/img/signin-cover.png";
</script>
<template>
  <section class="py-5">
    <div class="container">
      <div class="row">
        <div class="row text-center my-sm-5 mt-5">
          <div class="col-lg-6 mx-auto">
            <MaterialBadge color="success" class="mb-3"
              >Team</MaterialBadge
            >
            <h2 class="">Unser Team</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <div class="row d-flex justify-content-center align-items-center">
        <div class="col-md-8">
          <div class="row">
            <div class="col-md-6 mt-md-0">
              <h4>Usama Othman</h4>
              <p class="lead mb-0">Maschinenbaustudent und KFZ-Meister</p>
            </div>
            <div class="col-md-6 mt-md-0">
              <h4>Emre Bayazitoglu</h4>
               <p class="lead mb-0">B. sc. Informatik und Softwareentwickler</p>
            </div>
          </div>
        </div>
        <div class="col-md-3 mx-auto mt-md-0 mt-3">
          <div class="position-sticky" style="top: 100px !important">
            <h3>
              Die Köpfe hinter Tutoratus!
            </h3>
            <h6 class="text-secondary font-weight-normal">
              Unsere Motivation zur Gründung unseres Nachhilfestudios war es, Schülerinnen und Schüler individuell zu fördern und ihnen nicht nur bessere Noten, sondern auch mehr Selbstvertrauen zu ermöglichen. Wir haben gesehen, dass im regulären Unterricht oft die Zeit für persönliche Unterstützung fehlt - genau hier setzen wir an.
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
