<template>
  <b-container fluid>
    <b-row class="nav mb-1"
      ><b-col cols="3" sm="3"
        ><router-link to="/"><i class="arrow left"></i></router-link> </b-col
      ><b-col cols="8" sm="6" class="text-center"
        >Keranjang Belanja <span class="badge">{{ count }}</span></b-col
      ></b-row
    >
    <b-row class="sort mb-2"
      ><b-col class="p-0"
        ><b-dropdown variant="danger" size="sm" id="dropdown-1" text="Sort By">
          <b-dropdown-item @click="sortByNameAsc()">Name | A-Z</b-dropdown-item>
          <b-dropdown-item @click="sortByNameDesc()"
            >Name | Z-A</b-dropdown-item
          >
        </b-dropdown></b-col
      ></b-row
    ><b-row
      ><b-col
        cols="12"
        sm="6"
        md="4"
        lg="4"
        class="mb-3"
        v-for="(value, index) in cart"
        :key="index"
        ><b-card bg-variant="light" header-tag="header">
          <template #header
            ><img src="../assets/store.png" alt="" class="mr-1" />
            <strong>{{ value.store }}</strong></template
          >
          <b-row
            ><b-col
              ><b-card-text>{{ value.name }}</b-card-text></b-col
            ><b-col><b-card-img :src="value.image"></b-card-img></b-col
          ></b-row>
          <b-row
            ><b-col
              ><strong>
                Rp.{{ formatPrice(value.price * value.order_qty) }}</strong
              ></b-col
            ></b-row
          >
          <b-row>
            <b-col cols="5">
              <b-input-group>
                <b-input-group-prepend>
                  <b-button
                    v-if="value.order_qty <= 1"
                    disabled
                    size="sm"
                    variant="outline-success"
                    @click="decrementCart(value)"
                    >-</b-button
                  >
                  <b-button
                    v-if="value.order_qty > 1"
                    size="sm"
                    variant="outline-success"
                    @click="decrementCart(value)"
                    >-</b-button
                  >
                </b-input-group-prepend>

                <b-form-input
                  size="md"
                  type="text"
                  :value="value.order_qty"
                ></b-form-input>

                <b-input-group-append>
                  <b-button
                    v-if="value.order_qty < value.stock"
                    size="sm"
                    variant="outline-success"
                    @click="incrementCart(value)"
                    >+</b-button
                  >
                  <b-button
                    v-if="value.order_qty >= value.stock"
                    disabled
                    size="sm"
                    variant="outline-success"
                    @click="incrementCart(value)"
                    >+</b-button
                  >
                </b-input-group-append>
              </b-input-group>
            </b-col>
            <b-col
              style="cursor: pointer"
              class="text-right"
              @click="comingSoon()"
              ><img src="../assets/delete.png" alt="delete"
            /></b-col>
          </b-row> </b-card></b-col
    ></b-row>
    <br />
    <br />
    <div class="total">
      <div class="row1">
        <b-button class="mr-2" size="sm" variant="success" @click="checkOut()"
          >Check Out
        </b-button>
        <b-button size="sm" variant="warning" @click="remove()"
          >Remove All</b-button
        >
      </div>
      <div v-show="empty" class="row2">
        <strong> Total: Rp.{{ formatPrice(totals) }}</strong>
      </div>
    </div>
  </b-container>
</template>

<script>
import { mapGetters, mapState, mapMutations } from "vuex";
export default {
  name: "Cart",
  created() {
    this.cart;
  },
  data() {
    return {
      empty: true,
    };
  },
  computed: {
    ...mapState(["count"]),
    ...mapGetters({
      cart: "getCart",
      count: "getCount",
      totals: "getTotalsCart",
    }),
  },

  methods: {
    ...mapMutations(["incrementCart", "decrementCountStore", "resetCount"]),
    formatPrice(value) {
      const val = (value / 1).toFixed(2).replace(".", ",");
      return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    },
    decrementCart(data) {
      const decrementData = this.cart.find((value) => value.id === data.id);
      decrementData.order_qty -= 1;
      this.decrementCountStore();
    },
    sortByNameAsc() {
      let arr = this.cart;
      arr.sort((a, b) => {
        let na = a.store.toLowerCase();
        let nb = b.store.toLowerCase();

        if (na < nb) {
          return -1;
        }
        if (na > nb) {
          return 1;
        }
        return 0;
      });

      arr.forEach((e) => {
        console.log(e);
      });
    },
    sortByNameDesc() {
      let arr = this.cart;
      arr.sort((a, b) => {
        let na = a.store.toLowerCase();
        let nb = b.store.toLowerCase();

        if (na > nb) {
          return -1;
        }
        if (na < nb) {
          return 1;
        }
        return 0;
      });

      arr.forEach((e) => {
        console.log(e);
      });
    },
    remove() {
      this.cart.length = 0;
      this.resetCount();
      this.empty = false;
    },
    comingSoon() {
      alert("This feature will be added soon!");
    },
    checkOut() {
      alert("This feature will be added soon!");
    },
  },
};
</script>

<style scoped>
.nav {
  background-color: rgb(215, 18, 73);
  color: white;
  font-size: 16px;
  height: 30px;
  overflow: hidden;
}
.left {
  transform: rotate(135deg);
  -webkit-transform: rotate(135deg);
}

.arrow {
  border: solid white;
  border-width: 0 5px 5px 0;
  display: inline-block;
  padding: 3px;
}
span {
  margin-left: 5px;
  width: 10px;
  background-color: white;
  color: rgb(215, 18, 73);
}
.badge {
  width: 30px;
}

.total {
  color: #fafafa;
  padding: 4px;
  position: fixed;
  bottom: 0%;
  left: 0%;
  width: 100%;
  height: auto;
  background-color: rgb(215, 18, 73);
  z-index: 2;
  text-align: right;
}
</style>