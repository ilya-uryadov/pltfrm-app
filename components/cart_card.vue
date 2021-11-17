<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-card>
          <v-row space-between>
            <v-col cols="12" xs="0" sm="3" md="3" lg="3" xl="3">
              <v-avatar class="ma-3" flex size="150" tile color="grey">
                <v-img
                  max-height="200"
                  max-width="200"
                  :src="goodprop.src"
                ></v-img>
              </v-avatar>
            </v-col>
            <v-col cols="12" xs="8" sm="8" md="8" lg="8" xl="8">
              <v-card-title
                class="text-h5"
                v-text="goodprop.title"
              ></v-card-title>
              <v-card-subtitle v-text="goodprop.subtitle"></v-card-subtitle>

              <v-card-subtitle>
                Количество: {{ goodprop.count }}</v-card-subtitle
              >
              <v-row no-gutters>
                <v-col>
                  <v-card-actions>
                    <v-btn
                      class="mx-2"
                      fab
                      small
                      dark
                      color="primary"
                      @click="countPlus"
                    >
                      <v-icon dark> mdi-plus </v-icon>
                    </v-btn>
                    <v-btn
                      v-if="goodprop.count > 0"
                      class="mx-2"
                      fab
                      dark
                      small
                      @click="countMinus"
                    >
                      <v-icon dark> mdi-minus </v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-col>
                <v-col>
                  <v-list-item-content>
                    <v-list-item-subtitle>
                      <p class="text-right">
                        buy: <b class="text-h4">{{ goodprop.count }}</b>
                      </p>
                      <p class="text-right">
                        price:
                        <b class="text-h5">{{ goodprop.price }}</b>
                      </p>
                      <p class="text-right">
                        total cost:
                        <b class="text-h4 primary">{{ goodprop.summ }}</b>
                      </p>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// import { uuid } from 'vue-uuid'
export default {
  props: {
    goodprop: {
      type: Object,
      default: null,
    },
  },
  methods: {
    countMinus() {
      if (this.goodprop.count === 1) {
        const ngood = JSON.parse(JSON.stringify(this.goodprop))
        this.$store.dispatch('cart/minusFromCart', ngood)
      } else {
        const ind = this.$store.getters['cart/getCartIndexById'](
          this.goodprop.id
        )
        this.$store.dispatch('cart/minusCountToCart', ind)
      }
    },
    countPlus() {
      const ind = this.$store.getters['cart/getCartIndexById'](this.goodprop.id)

      if (ind !== -1) {
        this.$store.dispatch('cart/plusCountToCart', ind)
      } else {
        console.log('poshlo netak')
      }
    },
  },
}
</script>

<style></style>
