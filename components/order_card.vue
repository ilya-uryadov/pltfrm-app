<template>
  <v-container>
    <v-card class="mx-auto" max-width="600" elevation="3">
      <div>
        <div class="d-flex flex-no-wrap justify-space-between">
          <div>
            <v-card-title class="text-overline mb-4" v-text="order.state">
            </v-card-title>
            <v-card-subtitle
              class="text--primary"
              v-text="order.provider_name"
            ></v-card-subtitle>
            <v-card-title class="text-h5"
              >Заказ от {{ order.date }}</v-card-title
            >

            <v-card-subtitle
              >В заказе {{ order.total_count }} позиций на общую сумму
              {{ order.total_cost }}</v-card-subtitle
            >
          </div>
          <div>
            <v-avatar :class="status_class" size="60"
              ><v-icon large v-text="status_icon"></v-icon
            ></v-avatar>
          </div>
        </div>
        <v-card-actions>
          <v-btn color="orange lighten-2" text :to="`/orders/${order.id}`">
            Explore <v-icon>mdi-play</v-icon></v-btn
          >
          <v-spacer></v-spacer>

          <v-btn icon @click="show = !show">
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>
            <div class="text--primary ma-3">Детализация строк заказа</div>

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
        </v-expand-transition>
      </div>
    </v-card>
  </v-container>
</template>

<script>
export default {
  props: {
    order: {
      type: Object,
      default: null,
    },
  },
  data: () => ({
    show: false,
  }),
  computed: {
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
