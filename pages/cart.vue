<template>
  <v-container>
    <v-row>
      <v-btn depressed @click="$router.go(-1)">
        <v-icon>mdi-arrow-left-top</v-icon>
        Back
      </v-btn>
    </v-row>

    <v-row>
      <v-col cols="12">
        <h1>Shopping cart</h1>
      </v-col>
      <v-col cols="12">
        <div>
          Всего в корзине <b class="text-h4">{{ cartInfo.count }}</b> позиций на
          общую сумму
          <b class="text-h4">{{ cartInfo.cost }}</b>
        </div>
      </v-col>
      <v-col cols="12">
        <h3>Список товаров позиций в корзине</h3>
      </v-col>
    </v-row>
    <v-col v-for="item in cartInfo.list" :key="item.id">
      <cartcard :goodprop="item"></cartcard>
    </v-col>

    <div>
      {{ cartInfo }}
    </div>
  </v-container>
</template>

<script>
import cartcard from '~/components/cart_card.vue'
export default {
  components: {
    cartcard,
  },
  data() {
    return {
      numbers: 1,
    }
  },
  computed: {
    cartInfo() {
      return this.$store.getters['cart/getCartInfo']
    },
  },
  mounted() {},
}
</script>

<style></style>
