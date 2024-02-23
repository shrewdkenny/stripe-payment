<template>
  <div>
    <div class="cards w-[250px] h-[300px] bg-cover"></div>
    <h1 class="flex justify-center items-center text-sm font-bold mt-3">
      {{ labelText }}
    </h1>
    <h2 class="flex justify-center items-center text-sm text-blue-600 mt-1">
      {{ price }}
    </h2>
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
    price: Number,
  },
  methods: {},
};
</script>

<style>
.cards {
  background-image: url("@/assets/images/one.png");
}
</style>
