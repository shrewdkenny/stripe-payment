<template>
  <div class="mt-[50px] flex flex-col justify-center items-center text-5xl">
    <h1>Stripe Payment</h1>

    <stripe-checkout
      ref="checkoutRef"
      mode="payment"
      :pk="publishableKey"
      :line-items="lineItems"
      :success-url="successURL"
      :cancel-url="cancelURL"
    />

    <button
      @click="submit()"
      class="bg-black text-white rounded-lg text-sm p-[10px] mt-[30px] w-[100px]"
    >
      Pay
    </button>
  </div>
</template>

<script>
import { StripeCheckout } from "@vue-stripe/vue-stripe";

export default {
  components: {
    StripeCheckout,
  },
  data() {
    this.publishableKey =
      "pk_test_51OmdFlAzNMyeQV4mfOn6WDPrd4EabtTyKtCaQiNM5L57Sy9nBj5FTxd9h3d372s5uyrw3lN2JOJhIQnPOnLszcc800iBZnL2CC";
    return {
      lineItems: [
        {
          price: "price_1OolQfAzNMyeQV4mAlNS5LEk",
          quantity: 1,
        },
        {
          price: "price_1OolQBAzNMyeQV4mYJN40u8P",
          quantity: 1,
        },
        {
          price: "price_1OolOtAzNMyeQV4mj5Vfqwnf",
          quantity: 1,
        },
      ],
      successURL: "http://localhost:5173/success",
      cancelURL: "http://localhost:5173/cancel",
    };
  },
  methods: {
    submit() {
      this.$refs.checkoutRef.redirectToCheckout();
    },
  },
};
</script>
