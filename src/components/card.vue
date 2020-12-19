<template>
  <div class="c-container">
    <h4>{{ nama }}</h4>
    <p>{{ harga }}</p>
    <!-- <p>{{ test }}</p> -->
    <button type="button" @click="add">add to cart</button>
    <input type="text" @input="handleInputSearch" />
  </div>
</template>

<script>
export default {
  name: "card",
  props: ["nama", "harga"],
  data() {
    return {
      test: "",
    };
  },
  methods: {
    add() {
      this.$emit("tambah", 1);
    },
    handleInputSearch() {
      this.$root.$emit("message");
      // console.log(this.$root.$emit);
    },
  },
};
</script>

<style scoped>
.c-container {
  height: 200px;
  width: 150px;
  border-radius: 5px;
  border: 1px solid black;
}
</style>