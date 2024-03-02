<template>
  <div class="flex flex-col">
    <div class="flex flex-row border-b-2 w-auto mt-[100px]">
      <h1 class="ml-[250px] w-[100px] text-2xl font-black">Products</h1>
      <div class="flex flex-row gap-[200px] ml-[250px]">
        <p class="text-2xl font-black">Price</p>
        <p class="text-2xl font-black">Quantity</p>
      </div>
    </div>

    <div
      class="flex flex-row gap-[20px] mt-[50px] mx-[5px] h-[10vh]"
      v-for="item in cartItems"
    >
      <div class="flex flex-row gap-5 ml-[150px]">
        <img
          :src="item.pictures"
          alt="Product Image"
          class="h-[50px] w-[50px]"
        />
        <p class="w-[500px]">{{ item.labelText }}</p>
      </div>
      <div class="flex flex-row gap-[40px]">
        <p>{{ item.price }}</p>
        <button class="w-[40px] h-[40px] border-2 ml-10"></button>
      </div>
    </div>
    <div class="flex flex-row justify-center items-center mb-10">
      <button
        @click="pay()"
        class="bg-black text-white rounded-lg text-sm p-[10px] mt-[30px] w-[100px]"
      >
        Pay
      </button>
    </div>
  </div>
</template>

<script>
import { useCart } from "@/stores/CartStore";
export default {
  setup() {
    const cartStore = useCart();
    const cartItems = cartStore.items;
    return {
      cartItems,
    };
  },
  methods: {
    pay() {
      window.location.href = "https://buy.stripe.com/test_00g7w41uP6L7fhCbIK";
    },
  },
};
</script>

<style lang="scss" scoped></style>
