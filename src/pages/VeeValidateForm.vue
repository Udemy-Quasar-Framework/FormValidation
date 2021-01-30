<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <h4>Person Registration</h4>
        <ValidationObserver v-slot="{handleSubmit}">
          <q-form style="width: 60%" @submit.stop="handleSubmit(onSubmit)">
            <ValidationProvider name="Name" rules="required" v-slot="v">
              <q-input
                outlined
                label="Name"
                v-model="name"
                :error="v.errors.length > 0"
                :error-message="v.errors[0]"
              ></q-input>
            </ValidationProvider>
            <ValidationProvider name="Age" rules="required|minMaxValue:1,180" v-slot="v">
              <q-input
                outlined
                label="Age"
                v-model="age"
                :error="v.errors.length > 0"
                error-message="Age most be between 1 and 180"
              ></q-input>
            </ValidationProvider>
            <ValidationProvider name="Email" rules="required|email" v-slot="v">
              <q-input
                outlined
                label="Age"
                v-model="email"
                :error="v.errors.length > 0"
                error-message="Invalid email address"
              ></q-input>
            </ValidationProvider>
            <ValidationProvider name="Phone" rules="required|phone" v-slot="v">
              <q-input
                outlined
                label="Age"
                mask="###-###-####"
                v-model="phone"
                :error="v.errors.length > 0"
                error-message="Invalid phone number"
              ></q-input>
            </ValidationProvider>

            <q-btn label="Submit" type="submit" color="primary"/>
          </q-form>
        </ValidationObserver>
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
  name: 'VeeValidateForm',
  data: () => ({
    name: 'Marlon',
    age: 36,
    email: 'marlon@gmail.com',
    phone: '786-654-1234'
  }),
  methods: {
    onSubmit () {
      this.$q.notify({
        color: 'green-4',
        textColor: 'white',
        icon: 'cloud_done',
        message: 'Form submitted'
      })
    }
  }
}
</script>
