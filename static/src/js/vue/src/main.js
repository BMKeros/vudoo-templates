import Vue from 'vue';
import Vuetify from 'vuetify'
import HelloWorld from './components/Home';
import store from './store'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);
Vue.component('home', Home);

new Vue({
	el: '#app',
  	store,
	render: h => h(Home)
});
