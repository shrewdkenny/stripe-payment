<template>
  <div class="h-screen w-full flex flex-col">
    <div class="flex flex-row gap-[300px] border-b-2 w-auto mt-[100px]">
      <h1 class="ml-[150px] w-[100px] text-2xl font-black">Products</h1>
      <p class="text-2xl font-black ml-[190px]">Price</p>
    </div>

    <div class="flex flex-row mt-[50px] h-[10vh]" v-for="item in cartItems">
      <div class="ml-[150px] w-[600px] text-2xl flex flex-row space-x-10">
        <img
          :src="item.pictures"
          alt="Product Image"
          class="h-[50px] w-[50px]"
        />
        <p class="text-lg font-black">{{ item.labelText }}</p>
      </div>
      <p class="flex flex-row justify-center font-black">{{ item.price }}</p>
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
    const productQuantity = cartStore.quantity;

    return {
      cartItems,
      cartStore,
      productQuantity,
    };
  },
  methods: {
    pay() {
      window.location.href = "https://buy.stripe.com/test_00g7w41uP6L7fhCbIK";
    },
    increaseQuantity() {
      this.productQuantity++;
    },
  },
};
</script>

<style lang="scss" scoped></style>
