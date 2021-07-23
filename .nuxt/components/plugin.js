import Vue from 'vue'
import { wrapFunctional } from './utils'

const components = {
  HomeCard: () => import('../../components/HomeCard.vue' /* webpackChunkName: "components/home-card" */).then(c => wrapFunctional(c.default || c))
}

for (const name in components) {
  Vue.component(name, components[name])
  Vue.component('Lazy' + name, components[name])
}
