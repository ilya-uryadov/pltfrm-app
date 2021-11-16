export const state = () => ({
  count: 5,
  cost: 2344,
  list: [
    {
      id: 8,
      name: 'Номенклатура 1',
      count: 12,
      cost: 100,
      summ: 1200,
    },
    { id: 9, name: 'Номенклатура 2', count: 10, cost: 100, summ: 1000 },
    { id: 10, name: 'Номенклатура 3', count: 2, cost: 90, summ: 180 },
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
    state.list[ind].summ = state.list[ind].cost * state.list[ind].count
  },
  minusGoodInCart(state, ind) {
    state.list[ind].count--
    state.list[ind].summ = state.list[ind].cost * state.list[ind].count
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
    return {
      count: state.list.length,
      cost: 2344,
      list: state.list,
    }
  },
}
