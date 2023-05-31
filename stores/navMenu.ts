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
    updateHamburgerMenuStatus(payload:boolean){
      this.hamburgerMenuStatus = payload
    },
    updateSelectedMenu(payload:Object){
      this.selectedMenu = payload
    }    
  }
})