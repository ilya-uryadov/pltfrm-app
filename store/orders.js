// store/catalog.js

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
          name: 'Номенклатура 1',
          count: 12,
          cost: 100,
          summ: 1200,
        },
        {
          name: 'Номенклатура 2',
          count: 10,
          cost: 100,
          summ: 1000,
        },
        {
          name: 'Номенклатура 3',
          count: 2,
          cost: 90,
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
          name: 'Номенклатура 1',
          count: 12,
          cost: 100,
          summ: 1200,
        },
        {
          name: 'Номенклатура 2',
          count: 10,
          cost: 100,
          summ: 1000,
        },
        {
          name: 'Номенклатура 3',
          count: 2,
          cost: 90,
          summ: 180,
        },
        {
          name: 'Номенклатура 4',
          count: 12,
          cost: 100,
          summ: 1200,
        },
        {
          name: 'Номенклатура 5',
          count: 10,
          cost: 100,
          summ: 1000,
        },
        {
          name: 'Номенклатура 6',
          count: 2,
          cost: 90,
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
          name: 'Номенклатура 1',
          count: 12,
          cost: 100,
          summ: 1200,
        },
        { id: 9, name: 'Номенклатура 2', count: 10, cost: 100, summ: 1000 },
        { id: 10, name: 'Номенклатура 3', count: 2, cost: 90, summ: 180 },
      ],
    },
  ],
  cart: {
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
  },
})

export const mutations = {}

export const actions = {}

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
      return state.cart.list.findIndex((item) => item.id === id)
    },
}
