<template>
  <v-container>
    <v-btn depressed @click="$router.go(-1)">
      <v-icon>mdi-arrow-left-top</v-icon>
      Back
    </v-btn>
    <v-card>
      <v-card-title class="white--text">
        <h2>Карточка заказа №{{ order.id }} от {{ order.date }}</h2>
      </v-card-title>
      <v-card-subtitle>
        <div>
          <v-avatar :class="status_class" size="60"
            ><v-icon x-large v-text="status_icon"></v-icon></v-avatar
          >Состояние заказа: {{ order.state }}
        </div>
        Поставщик:
        <div>
          <v-avatar size="40">
            <img
              alt="поставщик"
              src="https://pbs.twimg.com/profile_images/1371800637114093570/SiNqE6QX.jpg"
            />
          </v-avatar>
          {{ order.provider_name }}
        </div>
        <div class="mt-5">
          В заказе {{ order.total_count }} позиций на общую сумму
          {{ order.total_cost }}
        </div>
      </v-card-subtitle>

      <v-card-title class="white--text"> </v-card-title>
    </v-card>

    <div>
      <v-divider></v-divider>
      <div class="text--primary ma-5">
        <h3>Детализация строк заказа</h3>
      </div>

      <v-simple-table fixed-header max-height="400px">
        <thead>
          <tr>
            <th class="text-left">Наименование позиции</th>
            <th class="text-right">Количество</th>
            <th class="text-right">Цена</th>
            <th class="text-right">Сумма</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in order.order_details" :key="item.name">
            <td>{{ item.name }}</td>
            <td class="text-right">{{ item.count }}</td>
            <td class="text-right">{{ item.cost }}</td>
            <td class="text-right">{{ item.summ }}</td>
          </tr>
        </tbody>
      </v-simple-table>
    </div>
  </v-container>
</template>

<script>
export default {
  computed: {
    order() {
      return this.$store.getters['orders/getOrdersByID'](
        Number(this.$route.params.id)
      )
    },
    status_class() {
      if (this.order.state === 'Готов') {
        return 'primary ma-3'
      } else {
        return 'ma-3'
      }
    },
    status_icon() {
      if (this.order.state === 'Готов') {
        return 'mdi-check-outline'
      } else if (this.order.state === 'Выбор поставщика') {
        return 'mdi-account-question-outline'
      } else {
        return 'mdi-store-clock'
      }
    },
  },
}
</script>

<style></style>
