import { configure, extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import { email, regex, required } from 'vee-validate/dist/rules'

export default async ({ Vue }) => {
  // Register it globally
  Vue.component('ValidationProvider', ValidationProvider)
  Vue.component('ValidationObserver', ValidationObserver)
}

// config
configure({
  classes: {
    invalid: 'is-invalid'
  }
})

// Add a rule.
extend('required', required)
extend('email', email)

// registering existing rule with custom message
extend('regex', {
  ...regex,
  message: '{_field_} most have the form 34243 or 34243-4419'
})

extend('secret', {
  validate: value => value === 'example',
  message: 'This is not the magic word'
})

extend('phone', {
  validate: value => !!value.match(/^\d{3}-\d{3}-\d{4}$/),
  message: 'Is not a valid US Phone Number'
})

// using parameter and placeholder on message
extend('minLength', {
  validate: (value, args) => {
    return value.length >= args.length
  },
  message: 'The {_field_} must have at least {length} characters',
  params: ['length']
})

// using multiples parameters, destructuring args and message as function
extend('minMaxLength', {
  validate: (value, {
    min,
    max
  }) => {
    return value.length >= min && value.length <= max
  },
  message: (fieldName, {
    min,
    max
  }) => {
    // or destructure the placeholder
    // more about message on https://logaretm.github.io/vee-validate/guide/basics.html#messages
    return `${fieldName} must have at least ${min} characters and ${max} characters at most`
  },
  params: ['min', 'max']
})

extend('minMaxValue', {
  validate: (value, {
    min,
    max
  }) => {
    return value >= Number(min) && value <= Number(max)
  },
  message: (fieldName, {
    min,
    max
  }) => {
    // or destructure the placeholder
    // more about message on https://logaretm.github.io/vee-validate/guide/basics.html#messages
    return `${fieldName} must be between ${min} and ${max}`
  },
  params: ['min', 'max']
})
