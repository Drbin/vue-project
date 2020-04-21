import Vue from 'vue'
import App from './App.vue'
import ElementUI,{ Col,Row,Upload,Tag,Button,Breadcrumb,BreadcrumbItem,Link,Radio,Card, RadioGroup, Timeline,TimelineItem,  Carousel,CarouselItem ,Submenu,MenuItem,MenuItemGroup,Menu,Input,Table,TableColumn} from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import router from './router'
import axios from 'axios'

Vue.prototype.$http=axios
Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.component(Input.name, Input)
Vue.component(Upload.name, Upload)
Vue.component(Tag.name, Tag)
Vue.component(Breadcrumb.name, Breadcrumb)
Vue.component(BreadcrumbItem.name, BreadcrumbItem)
Vue.component(Card.name, Card)
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
