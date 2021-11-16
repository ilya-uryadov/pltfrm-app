<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="8">
        <v-card class="logo py-2 d-flex justify-center"> </v-card>
        <v-card>
          <v-card-title class="headline">
            Добро пожаловать на Platform!
          </v-card-title>
          <v-card-subtitle> Версия для полупателей</v-card-subtitle>
          <v-card-text>
            <p>
              На Platform можно разместить свой заказ на покупку, указать дату и
              место доставки, и в результате получить сразу несколько
              предложений от поставщиков. Делайте быстро и удобно все покупки на
              Platform!
            </p>
          </v-card-text>
          <v-card-actions>
            <v-spacer />
            <v-btn color="primary" nuxt to="/catalog"> Открыть каталог </v-btn>
            <v-btn color="primary" nuxt to="/orders"> Список заказов </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {}
</script>
