<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-toolbar-title>
          Form Validation
        </q-toolbar-title>

        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-1"
    >
      <q-list>
        <q-item-label
          header
          class="text-grey-8"
        >
          App links
        </q-item-label>
        <LocalLink
          title="Using Vuelidate"
          icon="build"
          link="vuelidate"
        ></LocalLink>
        <LocalLink
          title="Using Vee-Validate"
          icon="anchor"
          link="vee-validate"
        ></LocalLink>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
import LocalLink from 'components/LocalLink'

export default {
  name: 'MainLayout',
  components: { LocalLink },
  data () {
    return {
      leftDrawerOpen: false
    }
  }
}
</script>
