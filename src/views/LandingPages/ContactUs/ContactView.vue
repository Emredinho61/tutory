<script setup>
import { onMounted, ref } from "vue";

import emailjs from "emailjs-com";

//example components
import DefaultNavbar from "@/examples/navbars/NavbarDefault.vue";
import DefaultFooter from "@/examples/footers/FooterDefault.vue";

//image
import image from "@/assets/img/illustrations/contactus.jpg";

//material components
import MaterialInput from "@/components/MaterialInput.vue";
import MaterialTextArea from "@/components/MaterialTextArea.vue";
import MaterialButton from "@/components/MaterialButton.vue";

// material-input
import setMaterialInput from "@/assets/js/material-input";
onMounted(() => {
  setMaterialInput();
});

const form = ref(null);
const username = ref("");
const email = ref("");
const message = ref("");

const info_sent = ref(false);
function sendEmail() {
  console.log(form);
  console.log(username);
  console.log(message);
  emailjs.send(emailjs_service_id, emailjs_template_id, {
    user_name: username.value,
    user_email: email.value,
    time: new Date().toLocaleString(),
    message: message.value
  }, emailjs_public_key)
    .then(() => {
      alert("Das hat geklappt. Vielen Dank für die Nachricht.")
    })
    .catch((error) => {
      console.error('EmailJS error:', error)
    })
}
</script>
<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <DefaultNavbar :sticky="true" :action="{
          route: 'https://www.creative-tim.com/product/vue-material-kit-pro',
          color: 'bg-gradient-success',
          label: 'Buy Now',
        }" />
      </div>
    </div>
  </div>
  <section>
    <div class="page-header min-vh-100">
      <div class="container">
        <div class="row">
          <div
            class="col-6 d-lg-flex d-none h-100 my-auto pe-0 position-absolute top-0 start-0 text-center justify-content-center flex-column">
            <div class="position-relative h-100 m-3 px-7 border-radius-lg d-flex flex-column justify-content-center"
              :style="{
                backgroundImage: `url(${image})`,
                backgroundSize: 'cover',
              }" loading="lazy"></div>
          </div>
          <div class="mt-8 col-xl-5 col-lg-6 col-md-7 d-flex flex-column ms-auto me-auto ms-lg-auto me-lg-5">
            <div class="card d-flex blur justify-content-center shadow-lg my-sm-0 my-sm-6 mt-8 mb-5">
              <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2 bg-transparent">
                <div class="bg-gradient-success shadow-success border-radius-lg p-3">
                  <h3 class="text-white text-success mb-0">Kontaktiere Uns</h3>
                </div>
              </div>
              <div class="card-body">
                <p class="pb-3">
                  Für weitere Fragen, kontaktiere uns unter emailadresse oder schreibe uns über das Kontaktformular an.
                </p>
                <form ref="form" method="post" autocomplete="off" @submit.prevent="sendEmail">
                  <div class="form-group card-body p-0 my-3">
                    <div class="row">
                      <div class="col-md-6">
                        <input v-model="username" class="input-group-static mb-4" type="text"
                          label="Name" placeholder="Max Mustermann" />
                      </div>

                      <div class="col-md-6 ps-md-2">
                        <input v-model="email" class="input-group-static mb-4" type="email"
                          label="Email" placeholder="maxmustermann@mail.com" />
                      </div>

                      <div class="form-group mb-0 mt-md-0 mt-4">
                        <textarea v-model="message" class="input-group-static mb-4" :rows="6"
                          placeholder="Erzähl uns etwas über dich und in welchem Fach wir dich unterstützen können.">
                          Wie können wir dir helfen?
                        </textarea>
                      </div>

                      <div class="row">
                        <div class="col-md-12 text-center">
                          <MaterialButton variant="gradient" color="success" type="submit" value="Send"
                            class="mt-3 mb-0">
                            Nachricht senden</MaterialButton>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <DefaultFooter />
</template>
<style scoped>
/* Base */
.form-group {
  position: relative;
  margin-bottom: 1.8rem;
}

/* Inputs & textarea */
.form-group input,
.form-group textarea {
  width: 100%;
  padding: 14px 12px;
  font-size: 0.95rem;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 10px;
  outline: none;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(6px);
  transition: all 0.25s ease;
  color: #2c2c2c;
}

/* Hover */
.form-group input:hover,
.form-group textarea:hover {
  border-color: rgba(0, 0, 0, 0.3);
}

/* Focus */
.form-group input:focus,
.form-group textarea:focus {
  border-color: #4caf50;
  box-shadow: 0 0 0 3px rgba(76, 175, 80, 0.15);
  background: rgba(255, 255, 255, 0.9);
}

/* Label */
.form-group label {
  position: absolute;
  top: 50%;
  left: 12px;
  transform: translateY(-50%);
  font-size: 0.9rem;
  color: #777;
  pointer-events: none;
  background: transparent;
  transition: all 0.2s ease;
  padding: 0 4px;
}

/* Floating effect */
.form-group input:focus + label,
.form-group input:not(:placeholder-shown) + label,
.form-group textarea:focus + label,
.form-group textarea:not(:placeholder-shown) + label {
  top: -8px;
  font-size: 0.75rem;
  color: #4caf50;
  background: #fff;
}

/* Textarea tweaks */
.form-group textarea {
  resize: none;
}

/* Button */
.btn-send {
  width: 100%;
  padding: 14px;
  border: none;
  border-radius: 10px;
  background: linear-gradient(135deg, #4caf50, #2e7d32);
  color: white;
  font-size: 0.95rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.25s ease;
}

/* Button hover */
.btn-send:hover {
  transform: translateY(-1px);
  box-shadow: 0 8px 20px rgba(76, 175, 80, 0.25);
}

/* Button active */
.btn-send:active {
  transform: scale(0.98);
}
</style>
