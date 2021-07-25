import { wrapFunctional } from './utils'

export { default as HomeCard } from '../../components/HomeCard.vue'
export { default as HomeRow } from '../../components/HomeRow.vue'
export { default as ShortText } from '../../components/ShortText.vue'

export const LazyHomeCard = import('../../components/HomeCard.vue' /* webpackChunkName: "components/home-card" */).then(c => wrapFunctional(c.default || c))
export const LazyHomeRow = import('../../components/HomeRow.vue' /* webpackChunkName: "components/home-row" */).then(c => wrapFunctional(c.default || c))
export const LazyShortText = import('../../components/ShortText.vue' /* webpackChunkName: "components/short-text" */).then(c => wrapFunctional(c.default || c))
