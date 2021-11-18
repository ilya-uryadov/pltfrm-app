<template>
  <v-container>
    <v-card elevation="3">
      <div class="flex-no-wrap justify-space-between">
        <div>
          <v-row space-between>
            <v-col cols="12" xs="8" sm="8" md="8" lg="8" xl="8">
              <v-card-title class="text-h5" v-text="good.title"></v-card-title>
              <v-card-subtitle v-text="good.subtitle"></v-card-subtitle>
              <v-card-subtitle
                >Averange price: {{ good.price }}</v-card-subtitle
              >
            </v-col>
            <v-col cols="12" xs="0" sm="4" md="4" lg="4" xl="4">
              <v-avatar class="ma-3" flex size="150" tile>
                <v-img max-height="200" max-width="200" :src="good.src"></v-img>
              </v-avatar>
            </v-col>
          </v-row>

          <v-card-text>
            <v-col md="12">
              <v-row no-gutters>
                <v-col md="5">
                  <v-card-actions>
                    <v-btn
                      class="mx-2"
                      fab
                      small
                      dark
                      color="primary"
                      @click="plusCount"
                    >
                      <v-icon dark> mdi-plus </v-icon>
                    </v-btn>
                    <v-btn
                      v-if="good.count > 0"
                      class="mx-2"
                      fab
                      dark
                      small
                      @click="minusCount"
                    >
                      <v-icon dark> mdi-minus </v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-col>
                <v-col md="5">
                  <v-list-item-content>
                    <v-list-item-subtitle>
                      <p class="text-right">
                        buy: <b class="text-h4">{{ good.count }}</b>
                      </p>
                      <p class="text-right">
                        cost:
                        <b class="text-h5">{{ good.count * good.price }}</b>
                      </p>
                    </v-list-item-subtitle>
                  </v-list-item-content>
                </v-col>
              </v-row>
            </v-col>
          </v-card-text>
        </div>
      </div>
    </v-card>
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
  data: () => ({
    good: {},
  }),

  created() {
    this.good = JSON.parse(JSON.stringify(this.goodprop))
    const ind = this.$store.getters['cart/getCartIndexById'](this.good.id)
    if (ind !== -1) {
      this.good.count = this.$store.state.cart.list[ind].count
    } else {
      this.good.count = 0
    }
  },
  methods: {
    plusCount() {
      if (!this.good.count) {
        this.good.count++

        const ngood = {
          id: this.good.id,
          title: this.good.title,
          subtitle: this.good.subtitle,
          src: this.good.src,
          count: this.good.count,
          price: this.good.price,
          summ: this.good.count * this.good.price,
        }
        this.$store.dispatch('cart/plusToCart', ngood)
      } else {
        this.good.count++
        const ind = this.$store.getters['cart/getCartIndexById'](this.good.id)

        if (ind !== -1) {
          this.$store.dispatch('cart/plusCountToCart', ind)
        } else {
          console.log('poshlo netak')
        }
      }
    },
    minusCount() {
      if (this.good.count === 1) {
        const ngood = JSON.parse(JSON.stringify(this.good))
        this.$store.dispatch('cart/minusFromCart', ngood)
      } else {
        const ind = this.$store.getters['cart/getCartIndexById'](this.good.id)
        this.$store.dispatch('cart/minusCountToCart', ind)
      }
      this.good.count--
    },
  },
}
</script>

<style></style>
