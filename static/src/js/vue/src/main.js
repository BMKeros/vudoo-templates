import Vue from 'vue';
import HelloWorld from './components/HelloWorld';
import store from './store'
import SuiVue from 'semantic-ui-vue';


Vue.use(SuiVue);
Vue.component('hello-world', HelloWorld);

new Vue({
	el: '#app',
  	store,
	render: h => h(HelloWorld)
});
