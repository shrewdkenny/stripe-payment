<template>
  <div class="flex flex-col justify-between items-center">
    <img :src="pictures" alt="" />
    <h1 class="flex justify-center items-center text-sm font-bold mt-3">
      {{ labelText }}
    </h1>
    <h2 class="flex justify-center items-center text-sm text-blue-600 mt-1">
      {{ price }}
    </h2>
    <button
      @click="showProduct"
      class="m-5 bg-blue-500 flex h-[50px] w-[200px] rounded-lg justify-center text-center items-center text-sm text-white"
    >
      Add To Cart
    </button>
  </div>
</template>

<script>
export default {
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {
    labelText: String,
    price: String,
    pictures: String,
  },
  methods: {
    showProduct() {
      this.$emit("addingToCart", {
        labelText: this.labelText,
        price: this.price,
        pictures: this.pictures,
      });
    },
  },
};
</script>

<style></style>
