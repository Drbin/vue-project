import Vue from 'vue'
import App from './App.vue'
import ElementUI,{ Col,Row,Button,Link,Radio, RadioGroup, Timeline,TimelineItem,  Carousel,CarouselItem ,Submenu,MenuItem,MenuItemGroup,Menu,Input,Table,TableColumn} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'



Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component(Input.name, Input)
Vue.component(Radio.name, Radio)
Vue.component(RadioGroup.name, RadioGroup)
Vue.component(Timeline.name, Timeline)
Vue.component(TimelineItem.name, TimelineItem)
Vue.component(Carousel.name, Carousel)
Vue.component(CarouselItem.name, CarouselItem)
Vue.component(Table.name, Table)
Vue.component(TableColumn.name, TableColumn)
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
