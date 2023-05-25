import { defineStore } from "pinia";

export const useCartStore = defineStore("cart", {
  state: () => ({
    cartbarStatus: true,
  }),
  getters: {
    getCartbarStatus: (state) => state.cartbarStatus,
  },
  actions: {
    updateCartbarStatus(payload:boolean) {
      this.cartbarStatus = payload;
    },
  },
});
