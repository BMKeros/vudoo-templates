import Vue from 'vue';
import HelloWorld from './components/HelloWorld';
import store from './store'

Vue.component('hello-world', HelloWorld);

new Vue({
	el: '#app',
  	store,
	render: h => h(HelloWorld)
});
