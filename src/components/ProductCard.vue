<template>
  <div class="flex flex-col justify-between">
    <img :src="pictures" alt="" />
    <h1 class="flex justify-center items-center text-sm font-bold mt-3">
      {{ labelText }}
    </h1>
    <h2
      class="flex justify-center items-center text-sm text-blue-600 mt-1 mb-12"
    >
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
    price: String,
    pictures: String,
  },
  methods: {},
};
</script>

<style></style>
