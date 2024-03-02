<template>
  <div
    class="flex h-screen w-full flex-col justify-center items-center"
  >
    <h1 class="text-5xl font-bold">Cart Pge</h1>
    <ul class="flex flex-col h-screen w-full mt-10 p-11">
      <li v-for="item in cartItems">
        {{ item.labelText }} - {{ item.price }} - {{ item.pictures }}
      </li>
    </ul>
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
};
</script>

<style lang="scss" scoped></style>
