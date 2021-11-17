export const state = () => ({
  count: 5,
  cost: 2344,
  list: [
    // {
    //   id: 8,
    //   title: 'Игристое ',
    //   subtitle: 'Шампанское , производство Россия, Краснодарский край',
    //   src: 'https://bereg-cafe.ru/wp-content/uploads/Abrau-Dyurso-bryut-beloe.png',
    //   count: 12,
    //   price: 100,
    //   summ: 1200,
    // },
  ],
})

export const mutations = {
  addGoodtoCart(state, good) {
    state.list.push(good)
  },
  removeGoodfromCart(state, goodId) {
    state.list = state.list.filter((good) => good.id !== goodId)
  },
  rewriteGoodtoCart(state, good) {
    const ind = state.list.findIndex((item) => item.id === good.id)
    state.list[ind] = good
  },

  plusGoodInCart(state, ind) {
    state.list[ind].count++
    state.list[ind].summ = state.list[ind].price * state.list[ind].count
  },
  minusGoodInCart(state, ind) {
    state.list[ind].count--
    state.list[ind].summ = state.list[ind].price * state.list[ind].count
  },
}

export const actions = {
  plusToCart(context, good) {
    context.commit('addGoodtoCart', good)
  },
  minusFromCart(context, good) {
    context.commit('removeGoodfromCart', good.id)
  },
  plusCountToCart(context, ind) {
    context.commit('plusGoodInCart', ind)
  },
  minusCountToCart(context, ind) {
    context.commit('minusGoodInCart', ind)
  },
}

export const getters = {
  getCartInfo: (state) => {
    const summ = state.list.length
    return {
      count: state.list.length,
      cost: summ,
      list: state.list,
    }
  },
  getCartIndexById:
    (state) =>
    (id = 0) => {
      return state.list.findIndex((item) => item.id === id)
    },
}
