<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <h4>Person Registration</h4>
        <q-form style="width: 60%">
          <q-input
            outlined
            label="Name"
            v-model="name"
          ></q-input>
        </q-form>
      </q-card-section>
      <q-card-section>
        <div class="text-h6">Form validation - Vuelidate</div>
      </q-card-section>
      <q-card-section class="q-pt-none">
        <p>Validating the form using Vuelidate library. </p>
        <p>For more information visit:</p>
        <ul>
          <li>
            <a
              target="_blank"
              href="https://quasar.dev/vue-components/field#Validation"
            >
              Quasar page
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://vuelidate.js.org/#sub-basic-form"
            >
              Vuelidate page
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://medium.com/quasar-framework/adding-validation-to-quasar-based-forms-5391cee48c20"
            >
              Blog page where shows how to setup the Vuelidate library
            </a>
          </li>
        </ul>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Vuelidate',
  data: () => ({
    name: 'Marlon',
    age: 36,
    email: 'marlon@gmail.com',
    phone: '786-654-1234'
  })
}
</script>
