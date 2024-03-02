import { defineStore } from "pinia";
export const useCart = defineStore("CartStore", {
  state: () => ({
    items: [],
  }),
  actions: {
    addToCart(product) {
      this.items.push(product);
    },
  },
});
