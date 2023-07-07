import './style/common.scss'
import './style/el-style.scss'
import "./style/el-variables.scss";
import "./style/var-style.scss"

import Varlet from '@varlet/ui'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@varlet/ui/es/style'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

const app = createApp(App)

app.use(router)

app.use(Varlet)
app.mount('#app')