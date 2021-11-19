<template>
  <v-container>
    <v-row>
      <h1>Orders list</h1>
    </v-row>
    <v-row>
      <v-col v-for="order in ordersList" :key="order.id" cols="12">
        <ordercard :order="order"></ordercard>
      </v-col>
    </v-row>
    <div>{{ ordersList }}</div>
  </v-container>
</template>

<script>
import ordercard from '../../components/order_card.vue'
export default {
  components: {
    ordercard,
  },
  computed: {
    ordersList() {
      return this.$store.getters['orders/getOrders']
    },
  },
}
</script>

<style></style>
