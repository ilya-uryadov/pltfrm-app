export const state = () => ({
  // count: 5,
  // cost: 2344,
  list: [],
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
    let result = 0
    state.list.forEach(function (num) {
      result += num.summ
    })
    return {
      count: state.list.length,
      cost: result,
      list: state.list,
    }
  },
  getCartIndexById:
    (state) =>
    (id = 0) => {
      return state.list.findIndex((item) => item.id === id)
    },
}
