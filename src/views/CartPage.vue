<template>
  <div class="mt-[100px] flex flex-wrap">
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
