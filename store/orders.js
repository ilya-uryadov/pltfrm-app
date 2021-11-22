// store/catalog.js
import { v4 as uuidv4 } from 'uuid'

export const state = () => ({
  list: [
    {
      id: 1,
      state: 'В работе у поставщика',
      provider_id: 2,
      provider_name: 'ТД Перекресток',
      date: '01.10.2021',
      total_count: 12,
      total_cost: 2400,
      order_details: [
        {
          title: 'Номенклатура 1',
          count: 12,
          price: 100,
          summ: 1200,
        },
        {
          title: 'Номенклатура 2',
          count: 10,
          price: 100,
          summ: 1000,
        },
        {
          title: 'Номенклатура 3',
          count: 2,
          price: 90,
          summ: 180,
        },
      ],
    },
    {
      id: 2,
      state: 'Выбор поставщика',
      provider_id: null,
      provider_name: null,
      date: '02.10.2021',
      total_count: 2,
      total_cost: 3300,
      order_details: [
        {
          title: 'Номенклатура 1',
          count: 12,
          price: 100,
          summ: 1200,
        },
        {
          title: 'Номенклатура 2',
          count: 10,
          price: 100,
          summ: 1000,
        },
        {
          title: 'Номенклатура 3',
          count: 2,
          price: 90,
          summ: 180,
        },
        {
          title: 'Номенклатура 4',
          count: 12,
          price: 100,
          summ: 1200,
        },
        {
          title: 'Номенклатура 5',
          count: 10,
          price: 100,
          summ: 1000,
        },
        {
          title: 'Номенклатура 6',
          count: 2,
          price: 90,
          summ: 180,
        },
      ],
    },
    {
      id: 3,
      state: 'Готов',
      provider_id: 1,
      provider_name: 'Metro C&C',
      date: '21.09.2021',
      total_count: 46,
      total_cost: 12400,
      order_details: [
        {
          id: 8,
          title: 'Номенклатура 1',
          count: 12,
          price: 100,
          summ: 1200,
        },
        { id: 9, title: 'Номенклатура 2', count: 10, price: 100, summ: 1000 },
        { id: 10, title: 'Номенклатура 3', count: 2, price: 90, summ: 180 },
      ],
    },
  ],
})

export const mutations = {
  addOrderToList(state, order) {
    state.list.push(order)
  },
  removeOrderFromList(state, orderId) {
    state.list = state.list.filter((order) => order.id !== orderId)
  },
}

export const actions = {
  addNewOrderToList(context, order) {
    order.id = uuidv4()
    const newDate = new Date()
    const options = {
      era: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      weekday: 'long',
      timezone: 'UTC',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric',
    }
    order.date = newDate.toLocaleDateString('ru', options)
    context.commit('addOrderToList', order)
  },
  removeOrderFromList(context, orderID) {
    context.commit('removeOrderFromList', orderID)
  },
}

export const getters = {
  getOrders: (state) => {
    return state.list
  },

  getOrdersByID:
    (state) =>
    (id = 0) => {
      return state.list.filter((el) => el.id === id)[0]
    },

  getOrderIndexById:
    (state) =>
    (id = 0) => {
      return state.list.findIndex((item) => item.id === id)
    },
}
