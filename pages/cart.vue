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

      <v-bottom-navigation grow color="primary">
        <v-btn
          v-if="cartInfo.count > 0"
          color="primary"
          elevation="2"
          @click="createNewOrder"
        >
          <v-icon>mdi-playlist-plus</v-icon>
          <span>Create new order</span>
        </v-btn>
        <v-btn elevation="2" to="/orders"
          ><v-icon>mdi-format-list-bulleted</v-icon
          ><span>Open orders list</span></v-btn
        >
        <v-btn elevation="2" to="/catalog"
          ><v-icon>mdi-apps</v-icon><span>Open catalog</span></v-btn
        >
      </v-bottom-navigation>
    </v-row>
    <template v-if="cartInfo.count > 0">
      <v-col v-for="item in cartInfo.list" :key="item.id">
        <cartcard :goodprop="item"></cartcard>
      </v-col>
    </template>
    <template v-else>
      <h1>There are currently no items in the shoping cart.</h1>
      <h2>Add a product from the catalog</h2>
      <v-btn color="primary" nuxt to="/catalog"> Открыть каталог </v-btn>
    </template>

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
  methods: {
    createNewOrder() {
      const nOrder = {
        id: this.$uuid.v4(),
        state: 'Новый заказ',
        provider_id: '',
        provider_name: '',
        date: '01.10.2021',

        order_details: this.cartInfo.list,
        total_count: this.cartInfo.list.length,
        total_cost: 999,
      }
      console.log(nOrder)
      this.$store.dispatch('orders/addNewOrderToList', nOrder)
    },
  },
}
</script>

<style></style>
