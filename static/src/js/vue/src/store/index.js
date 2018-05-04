import Vue from 'vue';
import Vuex from 'vuex';
import actions from './actions';
import mutations from './mutations';
import getters from './getters';

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
    },
    currentAction: 'create',
};

export default new Vuex.Store({
    state,
    actions,
    mutations,
    getters
});