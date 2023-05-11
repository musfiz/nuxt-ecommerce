import { defineStore } from 'pinia'

export const useNavMenuStore = defineStore('navMenu', {
  state: () => ({
    hamburgerMenuStatus: false,
  }),
  getters: {
    getHamburgerMenuStatus: (state) => state.hamburgerMenuStatus
  },
  actions: {
    updateHamburgerMenuStatus(status){
      this.hamburgerMenuStatus = status
    }
  }
})