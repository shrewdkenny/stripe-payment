<template>
  <nav class="flex flex-row justify-between px-20 mt-8 h-[5vh]">
    <div class="font-thin font-mono text-2xl drop-shadow-2xl">NorthStar</div>
    <ul class="flex flex-row space-x-4 font-semibold">
      <li>HOME</li>
      <li>ABOUT</li>
      <li>CONTACT US</li>
    </ul>
    <div class="flex flex-row space-x-4 font-normal font-mono text-xl">
      <i class="fa-regular fa-user"></i>
      <div class="relative">
        <i class="fa-solid fa-cart-shopping"></i>
        <h1
          class="absolute top-[-19px] left-2 text-orange-500 text-sm font-serif"
        >
          {{ increaseCount.count }}
        </h1>
      </div>

      <i class="fa-solid fa-bars"></i>
    </div>
  </nav>
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
  name: "Test",
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style lang="scss" scoped></style>
