import { Model } from 'odoo-webkit';

const Task = new Model('todo.task');

const actions = {
    createTask: ({ commit }, data) => {
        Task.create(data).then(result => dispatch('LOAD_TASKS'));
    },
    editTask: ({ commit, dispatch }, data) => {
        commit('DIALOG', true);
        Task.write(data).then(result => dispatch('LOAD_TASKS'));
    },
    deleteTask: ({ dispatch }, data) => {
        if (confirm('Are you sure you want to delete this task?')) {
            Task.unlink(data.id).then(res => dispatch('LOAD_TASK'));
        }
    },
    loadTasks: ({ commit }) => {
        Task.all().then(result => commit('LOAD_TASKS', result));
    }
};

export default actions;