<template>
  <div class="flex flex-col">
    <div
      class="flex flex-row border-b-2 w-auto gap-[70px] mt-[100px] mx-[20px]"
    >
      <h1 class="ml-[350px]">Product</h1>
      <div class="flex flex-row gap-[200px] ml-[212px]">
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
    </div>

    <div
      class="flex flex-row gap-[70px] mt-[50px] mx-[20px] h-[10vh] w-full"
      v-for="item in cartItems"
    >
      <div class="flex flex-row gap-5 ml-[300px]">
        <img
          :src="item.pictures"
          alt="Product Image"
          class="h-[50px] w-[50px]"
        />
        <p>{{ item.labelText }}</p>
      </div>
      <div class="flex flex-row gap-[200px] ml-[150px]">
        <p>{{ item.price }}</p>
        <button class="w-[40px] h-[40px] border-2"></button>
        <p>{{ item.price }}</p>
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

  <!-- <div class="mt-[100px] flex flex-wrap">
    <div
      v-for="item in cartItems"
      class="flex flex-col justify-center items-center w-[10vw]"
    >
      <img
        :src="item.pictures"
        alt="Product Image"
        class="w-[300px] h-[300px]"
      />
      <div class="flex justify-center items-center text-sm font-bold mt-3">
        {{ item.labelText }}
      </div>
      <div>
        <div
          class="flex justify-center items-center text-sm text-blue-600 mb-6"
        >
          {{ item.price }}
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-row justify-center items-center">
    <button
      @click="pay()"
      class="bg-black text-white rounded-lg text-sm p-[10px] mt-[30px] w-[100px]"
    >
      Pay
    </button>
  </div> -->
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
