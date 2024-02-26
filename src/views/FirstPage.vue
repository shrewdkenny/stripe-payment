<template>
  <main class="h-screen w-full bg-[#ffff]">
    <nav class="flex flex-row justify-between px-20 mt-8 h-[5vh]">
      <div class="font-thin font-mono text-2xl drop-shadow-2xl">NorthStar</div>
      <ul class="flex flex-row space-x-4 font-semibold">
        <li>HOME</li>
        <li>ABOUT</li>
        <li>CONTACT US</li>
      </ul>
      <div class="flex flex-row space-x-4 font-normal font-mono text-xl">
        <i class="fa-regular fa-user"></i>
        <i class="fa-solid fa-cart-shopping"></i>
        <i class="fa-solid fa-bars"></i>
      </div>
    </nav>
    <section
      class="first py-[100px] bg-cover bg-no-repeat flex flex-col justify-end items-end"
    >
      <div class="w-[500px] mb-[300px]">
        <h1 class="text-white text-5xl font-mono font-semibold mb-[20px]">
          STYLIST PICKS BEAT THE HEAT
        </h1>
        <button
          class="text-white text-xl font-medium border-white border-[3px] ml-[50px]"
        >
          SHOP NOW
        </button>
      </div>
    </section>

    <div class="two bg-white h-[100vh] mt-20">
      <div class="flex flex-col justify-center items-center">
        <h1 class="text-3xl font-normal">Discover NEW Arrivals</h1>
        <p class="mt-5 font-light">Recently added shirts!</p>
      </div>
      <div class="mt-[100px] flex flex-wrap justify-between space-x-5 px-10">
        <ProductCard
          labelText="Plain white shirt"
          price="$29.00"
          pictures="./src/assets/images/one.png"
        />
        <ProductCard
          labelText="Denim jacket"
          price="$69.00"
          pictures="./src/assets/images/two.png"
        />
        <ProductCard
          labelText="Black polo shirt"
          price="$49.00"
          pictures="./src/assets/images/three.png"
        />
        <ProductCard
          labelText="Blue Sweatshirt"
          price="$79.00"
          pictures="./src/assets/images/four.png"
        />
        <ProductCard
          labelText="Blue Plain Shirt"
          price="$49.00"
          pictures="./src/assets/images/one.png"
        />
        <ProductCard
          labelText="Blue Plain Shirt"
          price="$49.00"
          pictures="./src/assets/images/two.png"
        />
        <ProductCard
          labelText="Blue Plain Shirt"
          price="$49.00"
          pictures="./src/assets/images/three.png"
        />
        <ProductCard
          labelText="Blue Plain Shirt"
          price="$49.00"
          pictures="./src/assets/images/four.png"
        />
      </div>
    </div>
  </main>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";
export default {
  name: "Test",
  components: {
    ProductCard,
  },
  created() {},
  data() {
    return {};
  },
  props: {},
  methods: {},
};
</script>

<style>
.first {
  background-image: url("@/assets/images/six.png");
}
</style>
