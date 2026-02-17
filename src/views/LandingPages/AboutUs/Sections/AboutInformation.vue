<script setup>
// example components
import DefaultInfoCard from "../../../../examples/cards/infoCards/DefaultInfoCard.vue";
import CenteredBlogCard from "../../../../examples/cards/blogCards/CenteredBlogCard.vue";
function smoothToPricing(id) {
  const element = document.getElementById(id);

  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}
</script>
<template>
  <section class="py-7">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-8">
          <div class="row mt-4">
            <div class="col-12 col-md-6 mb-3">
              <button class="btn bg-gradient-success text-white w-100" @click="smoothToPricing('grundschule')">
                Grundschule
              </button>
            </div>
            <div class="col-12 col-md-6 mb-3">
              <button class="btn bg-gradient-success text-white w-100" @click="smoothToPricing('mittlere-reife')">
                Mittlere Reife
              </button>
            </div>

            <div class="col-12 col-md-6 mb-3">
              <button class="btn bg-gradient-success text-white w-100" @click="smoothToPricing('oberstufe')">
                Oberstufe
              </button>
            </div>

            <div class="col-12 col-md-6 mb-3">
              <button class="btn bg-gradient-success text-white w-100" @click="smoothToPricing('ausbildung')">
                Ausbildung
              </button>
            </div>

            <div class="col-12 col-md-6 mb-3">
              <button class="btn bg-gradient-success text-white w-100"
                @click="smoothToPricing('berufsfachliche-kompetenz')">
                Berufsfachliche Kompetenz
              </button>
            </div>

            <div class="col-12 col-md-6 mb-3">
              <button class="btn bg-gradient-success text-white w-100" @click="smoothToPricing('hochschule')">
                Hochschule
              </button>
            </div>
          </div>

        </div>
        <div class="col-lg-4 ms-auto mt-lg-0 mt-6">
          <CenteredBlogCard
            title="Definiere dein Niveau"
            description="Für dein Niveau, bieten wir die passende Lösung. Dein Fach ist nicht dabei? Schreibe uns eine Nachricht und wir finden eine Lösung." />
        </div>
      </div>
    </div>
  </section>
</template>
