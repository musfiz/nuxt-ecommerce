import { defineStore } from 'pinia'

export const useDialogStore = defineStore('dialog', {
  state: () => ({
    detailsDialogStatus: false, //Product details
    loginDialogStatus: false,
  }),
  getters: {   
    getLoginDialogStatus: (state) => state.loginDialogStatus,
    getDetailsDialogStatus: (state) => state.detailsDialogStatus
  },
  actions: {
    updateLoginDialogStatus(payload:boolean){
      this.loginDialogStatus = payload
    },
    updateDetailsDialogStatus(payload:boolean){
      this.detailsDialogStatus = payload
    }   
  }
})