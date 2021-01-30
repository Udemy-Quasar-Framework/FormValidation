<template>
  <q-page padding>
    <q-card>
      <q-card-section>
        <h4>Person Registration</h4>
        <q-form style="width: 60%" @submit.stop="onSubmit">
          <q-input
            outlined
            label="Name"
            v-model="$v.name.$model"
            :error="$v.name.$error"
            error-message="Field required"
          ></q-input>
          <q-input
            outlined
            label="Age"
            v-model="$v.age.$model"
            :error="$v.age.$error"
            error-message="Age most be between 1 and 180"
          ></q-input>
          <q-input
            outlined
            label="Age"
            v-model="$v.email.$model"
            :error="$v.email.$error"
            error-message="Invalid email address"
          ></q-input>
          <q-input
            outlined
            label="Age"
            mask="###-###-####"
            v-model="$v.phone.$model"
            :error="$v.phone.$error"
            error-message="Invalid phone number"
          ></q-input>

          <q-btn label="Submit" type="submit" color="primary"/>
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
import { email, maxValue, minValue, numeric, required } from 'vuelidate/lib/validators'

export default {
  name: 'Vuelidate',
  data: () => ({
    name: 'Marlon',
    age: 36,
    email: 'marlon@gmail.com',
    phone: '786-654-1234'
  }),
  validations: {
    name: {
      required
    },
    age: {
      required,
      numeric,
      min: minValue(1),
      max: maxValue(180)
    },
    email: {
      required,
      email
    },
    phone: {
      required,
      phone: phoneNumber
    }
  },
  methods: {
    onSubmit () {
      console.log(this.$v)

      if (this.$v.$anyError) {
        this.$q.notify({
          color: 'red-4',
          textColor: 'white',
          icon: 'warning',
          message: 'Form not valid'
        })
      } else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'cloud_done',
          message: 'Form submitted'
        })
      }
    }
  }
}

function phoneNumber (inputTxt) {
  const phoneNo = /^\d{3}-\d{3}-\d{4}$/
  return !!inputTxt.match(phoneNo)
}
</script>
