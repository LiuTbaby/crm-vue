import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from 'element-plus'
import bootstrap from 'bootstrap'
import 'bootstrap/dist/css/bootstrap.css'
import 'element-plus/dist/index.css'
const app = createApp(App)
app.use(store)
app.use(router)
app.use(element)
app.use(bootstrap)
app.mount('#app')
