import { Model } from 'odoo-webkit';

const Task = new Model('todo.task');

const actions = {
    createTask: ({ commit }, data) => {
        Task.create(data).then(result => dispatch('loadTasks'));
    },
    editTask: ({ commit, dispatch }, data) => {
        commit('DIALOG', false);
        Task.write(data).then(result => dispatch('loadTasks'));
    },
    deleteTask: ({ dispatch }, data) => {
        if (confirm('Are you sure you want to delete this task?')) {
            Task.unlink(data.id).then(res => dispatch('loadTasks'));
        }
    },
    loadTasks: ({ commit }) => {
        Task.all().then(result => commit('LOAD_TASKS', result));
    },
    toggleDialog: ({ commit }) => {
        commit('TOGGLE_DIALOG');
    },
};

export default actions;