import { wrapFunctional } from './utils'

export { default as HomeCard } from '../../components/HomeCard.vue'

export const LazyHomeCard = import('../../components/HomeCard.vue' /* webpackChunkName: "components/home-card" */).then(c => wrapFunctional(c.default || c))
