<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn depressed @click="$router.go(-1)">
          <v-icon>mdi-arrow-left-top</v-icon>
          Back
        </v-btn>
        <v-card-title>
          <v-breadcrumbs large>
            <v-breadcrumbs-item
              nuxt
              ripple
              link
              @click="$router.push('/catalog')"
            >
              Каталог
            </v-breadcrumbs-item>
            <div v-if="parentGroupId">
              <v-icon>mdi-chevron-right</v-icon>
              <v-icon>mdi-chevron-right</v-icon>
              <v-breadcrumbs-item ripple :to="parentGrouplink">
                {{ parentGroupName }}
              </v-breadcrumbs-item>
            </div>
            <v-icon>mdi-chevron-right</v-icon>
            <v-breadcrumbs-item disabled>
              {{ groupName }}
            </v-breadcrumbs-item>
          </v-breadcrumbs>
        </v-card-title>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="card in groups" :key="card.id">
        <v-card
          class="mx-auto"
          max-width="344"
          outlined
          nuxt
          :to="`/catalog/${card.id}`"
        >
          <v-card-title v-text="card.title"></v-card-title>
          <v-img height="344" max-width="344" :src="card.src"></v-img>
          <v-card-subtitle v-text="card.subtitle"></v-card-subtitle>
        </v-card>
      </v-col>
    </v-row>

    <v-row>
      <v-col v-for="good in goods" :key="good.id" cols="12">
        <productcard :goodprop="good"></productcard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import productcard from '~/components/product_card.vue'
export default {
  components: {
    productcard,
  },
  computed: {
    groups() {
      return this.$store.getters['catalog/getCatalogGroup'](
        Number(this.$route.params.id)
      )
    },
    groupName() {
      return this.$store.getters['catalog/getGroupName'](
        Number(this.$route.params.id)
      )
    },
    parentGroupId() {
      return this.$store.getters['catalog/getParentGroupId'](
        Number(this.$route.params.id)
      )
    },
    parentGroupName() {
      return this.$store.getters['catalog/getParentGroupName'](
        Number(this.$route.params.id)
      )
    },
    parentGrouplink() {
      if (this.parentGroupId) {
        return `/catalog/${this.parentGroupId}`
      } else {
        return '/catalog'
      }
    },
    goods() {
      return this.$store.getters['catalog/getCatalogGoods'](
        Number(this.$route.params.id)
      )
    },
  },
}
</script>

<style></style>
