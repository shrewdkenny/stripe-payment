import { counter } from "@fortawesome/fontawesome-svg-core";
import { defineStore } from "pinia";
export const useCart = defineStore("CartStore", {
  state: () => ({
    items: [],
    count: 0
  }),
  actions: {
    addToCart(product) {
      this.items.push(product);
      this.count++;
    },
  },
});
