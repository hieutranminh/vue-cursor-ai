import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import i18n from './plugins/i18n'
import './plugins/dayjs'
import App from './App.vue'
import './styles/main.scss'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(i18n)

app.mount('#app')