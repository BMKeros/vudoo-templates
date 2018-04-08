import Vue from 'vue';
import App from './components/App';
import store from './store'

//Vue.component('name-component', Component);

new Vue({
	el: '#app',
  	store,
	render: h => h(App)
});