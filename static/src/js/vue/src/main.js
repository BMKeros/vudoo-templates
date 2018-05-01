import Vue from 'vue';
import Vuetify from 'vuetify'
import HelloWorld from './components/HelloWorld';
import store from './store'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify);
Vue.component('hello-world', HelloWorld);

new Vue({
	el: '#app',
  	store,
	render: h => h(HelloWorld)
});
