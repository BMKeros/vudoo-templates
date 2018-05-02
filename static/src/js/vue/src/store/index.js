import Vue from 'vue';
import Vuex from 'vuex';
import * as actions from './actions';
import * as mutations from './mutations';
import * as getters from './getters';

Vue.use(Vuex);

const state = {
    dialog: false,
    tasks: [],
    editedIndex: -1,
    editedTask: {
        user: '',
        name: '',
        date_deadline: '',
        is_done: false
    },
    defaultTask: {
        user: '',
        name: '',
        date_deadline: '',
        is_done: false
    }
};

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
});
