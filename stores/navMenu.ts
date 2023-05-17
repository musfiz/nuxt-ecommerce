import { defineStore } from 'pinia'

export const useNavMenuStore = defineStore('navMenu', {
  state: () => ({
    hamburgerMenuStatus: false,
    selectedMenu: {}
  }),
  getters: {
    getHamburgerMenuStatus: (state) => state.hamburgerMenuStatus,
    getSelectedMenu: (state) => state.selectedMenu
  },
  actions: {
    updateHamburgerMenuStatus(status:boolean){
      this.hamburgerMenuStatus = status
    },
    updateSelectedMenu(payload:Object){
      this.selectedMenu = payload
    }
  }
})