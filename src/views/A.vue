<template>
  <div>
    <h1>a page</h1>
    <Card nama="kopi" harga="2000" @tambah="tambahCount" />
    <Card nama="susu" harga="4000" @tambah="tambahCount" @message="masukan" />
    <p>{{ count }}</p>
  </div>
</template>

<script>
import Card from "../components/card";
export default {
  components: {
    Card,
  },
  data() {
    return {
      count: 0,
    };
  },
  methods: {
    tambahCount(data) {
      this.count += data;
      console.log(this.count);
    },
    masukan(data) {
      console.log(data);
    },
  },
};
</script>

<style scoped>
</style>