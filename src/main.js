import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import { Col,Row,Button,Link,Submenu,MenuItem,MenuItemGroup,Menu} from 'element-ui'
import router from './router'



Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component(Col.name, Col)
Vue.component(Row.name, Row)
Vue.component(Button.name, Button)
Vue.component(Link.name,Link)
Vue.component(Submenu.name ,Submenu)
Vue.component(MenuItem.name ,MenuItem)
Vue.component(MenuItemGroup.name ,MenuItemGroup)
Vue.component(Menu.name ,Menu)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
