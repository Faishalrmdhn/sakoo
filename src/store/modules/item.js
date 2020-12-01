export default {
  state: {
    products: [],
    cart: [],
    count: 0,
  },
  mutations: {
    resetCount(state) {
      state.count = 0
    },
    addToCartStore(state, payload) {
        console.log(payload)
      const setCart = {
        id: payload.id,
        name: payload.name,
        order_qty: 1,
        image: payload.stuff.image_url,
        price: payload.price,
        store: payload.store.name,
        stock: payload.stuff.stock,
        idStore: payload.store.id
      }
      console.log(setCart)
      const fixedData = [...state.cart, setCart]
      const addedItem = fixedData.find(
        item => item.id === payload.id
      )
      const existItem = state.cart.find(
        item => item.id === payload.id
      )
      console.log(fixedData[0].price)
      if (existItem) {
        addedItem.order_qty += 1
        
      } else {
        state.cart = [...state.cart, setCart]
      }
      state.count += 1
    },
    incrementCart(state, payload) {
      console.log(payload)
      const incrementData = state.cart.find(
        value => value.id === payload.id
      )
      incrementData.order_qty += 1
      state.count += 1
    },
    decrementCountStore(state ) {
      state.count -= 1
    },
  },
  getters: {
    getCart(state) {
      return state.cart
    },
    getTotalsCart(state) {
      let total = 0
      console.log(state.cart)
      state.cart.map(value => (total += value.price * value.order_qty))
      return total
    },
    getCount(state) {
      return state.count
    },
  }
}
