// store/catalog.js

export const state = () => ({
  st: 111112,

  list: [
    {
      id: 1,
      group_id: 0,
      its_group: true,
      title: 'Алкогольные напитки',
      subtitle: 'Все виды алкогольных напитков разной крепкости',
      src: 'https://as2.ftcdn.net/jpg/01/18/23/93/500_F_118239337_CDyR8dplbqzFDl5E0ke8mRshqceN2Ic4.jpg',
      flex: 6,
    },
    {
      id: 2,
      group_id: 0,
      its_group: true,
      title: 'Овощи и фрукты',
      subtitle: '',
      src: 'https://pbs.twimg.com/media/DMP0jZyUQAAY1LN.jpg',
      flex: 12,
    },
    {
      id: 3,
      group_id: 0,
      its_group: true,
      title: 'Молочные продукты',
      subtitle: 'Молоко, творог, сметана, сыр, масло и яйца',
      src: 'https://thumbs.dreamstime.com/b/dairy-products-isolated-bitmap-illustration-milk-product-icons-collection-healthy-food-organic-food-farmers-product-dairy-products-120601324.jpg',
      flex: 6,
    },

    {
      id: 4,
      group_id: 0,
      its_group: true,
      title: 'Бакалея',
      subtitle: 'Все виды круп и макарон',
      src: 'https://us.123rf.com/450wm/onyxprj/onyxprj1801/onyxprj180100864/94524802-vector-cartoon-pasta-types-circle-flame-badge-and-label-concept-illustration.jpg?ver=6',
      flex: 6,
    },
    {
      id: 5,
      group_id: 0,
      its_group: true,
      title: 'Кондитерские изделия',
      subtitle: 'Все виды сладостей',
      src: 'https://st2.depositphotos.com/2885805/7400/v/450/depositphotos_74009805-stock-illustration-cakes-icons-set.jpg',
      flex: 6,
    },
    {
      id: 6,
      group_id: 1,
      its_group: true,
      title: 'Вино',
      subtitle: 'Вина всех сортов',
      src: 'https://static.vecteezy.com/system/resources/thumbnails/000/226/380/small/624.jpg',
      flex: 6,
    },
    {
      id: 7,
      group_id: 1,
      its_group: true,
      title: 'Пиво',
      subtitle: 'Пивные напитки всех видов и упаковок',
      src: 'https://s3.amazonaws.com/eventimages/events/28586/items/1064552-thumb.jpg',
      flex: 6,
    },

    {
      id: 8,
      group_id: 1,
      its_group: true,
      title: 'Водка',
      subtitle: 'Водка со всего света',
      src: 'https://image.shutterstock.com/image-vector/vodka-bottle-glass-cucumber-lemon-260nw-394935781.jpg',
      flex: 6,
    },
    {
      id: 101,
      group_id: 6,
      its_group: false,
      title: 'Игристое вино Абрау-Дюрсо Brut Victor Dravigny',
      subtitle:
        'Шампанское Абрау-Дюрсо Brut Victor Dravigny, производство Россия, Краснодарский край',
      src: 'https://bereg-cafe.ru/wp-content/uploads/Abrau-Dyurso-bryut-beloe.png',
      flex: 6,
      count: 0,
      price: 750,
    },
    {
      id: 102,
      group_id: 6,
      its_group: false,
      title: 'Игристое вино Абрау-Дюрсо Brut Premium Gold',
      subtitle: '',
      src: 'https://ivan-elkin.ru/imt/p/50698-200.jpg',
      flex: 6,
      count: 0,
      price: 1200,
    },
  ],
})

// export const mutations = {
//   add(state, text) {
//     state.list.push({
//       text,
//       done: false,
//     })
//   },
//   remove(state, { todo }) {
//     state.list.splice(state.list.indexOf(todo), 1)
//   },
//   toggle(state, todo) {
//     todo.done = !todo.done
//   },
// }

export const getters = {
  getCatalogGroup:
    (state) =>
    (id = 0) => {
      return state.list.filter(
        (group) => group.group_id === id && group.its_group
      )
    },
  getCatalogGoods:
    (state) =>
    (id = 0) => {
      return state.list.filter(
        (good) => good.group_id === id && !good.its_group
      )
    },

  getNumbers: () => {
    return 55
  },
  getGroupName:
    (state) =>
    (id = 1) => {
      return state.list.filter((group) => group.id === id)[0].title
    },
  getParentGroupId:
    (state) =>
    (id = 1) => {
      const pId = state.list.filter((group) => group.id === id)[0].group_id
      if (pId !== 0) {
        return pId
      } else {
        return ''
      }
    },
  getParentGroupName:
    (state) =>
    (id = 1) => {
      const pId = state.list.filter((group) => group.id === id)[0].group_id
      if (pId !== 0) {
        return state.list.filter((group) => group.id === pId)[0].title
      } else {
        return 'Каталог'
      }
    },
}
