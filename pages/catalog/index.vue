// pages/catalog/index.vue

<template>
  <v-container>
    <v-row>
      <v-col md="4">
        <h1>Catalog</h1>
      </v-col>

      <v-col md="4"
        ><div><v-text-field label="Поиск группы..."></v-text-field></div
      ></v-col>
    </v-row>
    <v-row>
      <v-col v-for="card in groups" :key="card._id">
        <v-card
          class="mx-auto"
          max-width="344"
          outlined
          nuxt
          :to="`/catalog/${card._id}`"
        >
          <v-card-title v-text="card.title"></v-card-title>
          <v-img height="344" max-width="344" :src="card.src"></v-img>
          <v-card-subtitle v-text="card.subtitle"></v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import { mapGetters } from 'vuex'

export default {
  computed: {
    groups() {
      return this.$store.getters['catalog/getCatalogGroup']('0')
    },
  },

  created() {
    this.updateCatalog()
  },
  methods: {
    async updateCatalog() {
      // const res =
      await this.$store.dispatch('catalog/updateCatalog')
      // console.log(this.$store.state.catalog.list)
    },
  },
}
</script>
