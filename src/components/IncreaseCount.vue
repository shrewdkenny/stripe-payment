<template>
  <div class="relative">
    <i class="fa-solid fa-cart-shopping"></i>
    <h1 class="absolute top-[-19px] left-2 text-orange-500 text-sm font-serif">
      {{ increaseCount.count }}
    </h1>
  </div>
</template>

<script>
import { useCart } from "@/stores/CartStore";
export default {
  setup() {
    const increaseCount = useCart();

    return {
      increaseCount,
    };
  },
};
</script>

<style lang="scss" scoped></style>
