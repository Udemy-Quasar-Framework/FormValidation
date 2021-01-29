<template>
  <q-item clickable
          :to="link"
          :exact="exact"
  >
    <q-item-section avatar v-if="icon">
      <q-icon :name="icon"/>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'LocalLink',
  props: {
    title: {
      type: String,
      required: true
    },
    caption: {
      type: String,
      default: ''
    },
    link: {
      type: String,
      default: '#'
    },
    icon: {
      type: String,
      default: ''
    },
    exact: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped lang="scss">

</style>
