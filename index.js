import paperCut from './src/Index.vue'

const duoPaperCut = {
  install: Vue => {
    Vue.component('duo-paper-cut', paperCut)
  }
}

export default duoPaperCut