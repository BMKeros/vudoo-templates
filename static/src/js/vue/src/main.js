import Vue from 'vue';
import Home from './components/Home';
import store from './store'
import SuiVue from 'semantic-ui-vue';
import 'semantic-ui-css/semantic.min.css';

Vue.use(SuiVue);
Vue.component('home', Home);

new Vue({
	el: '#app',
  	store,
	render: h => h(Home)
});
