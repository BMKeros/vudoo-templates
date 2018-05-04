import { Model } from 'odoo-webkit';

const Task = new Model('todo.task');

const actions = {
    saveTask: ({ commit, dispatch }, payload) => {
        const { data, action } = payload;
        if (action === 'create') {
            Task.create(data).then(result => {
                dispatch('loadTasks');
                commit('TOGGLE_DIALOG');
            });
        }
        else if (action === 'edit') {
            Task.write(data.id, data).then(result => {
                dispatch('loadTasks');
                commit('TOGGLE_DIALOG');
            });
        }
    },
    editTask: ({ commit, dispatch }, data) => {
        commit('LOAD_EDITED_TASK', data);
        commit('CHANGE_ACTION_FORM', 'edit');
        dispatch('toggleDialog');
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
    closeDialog: ({ commit }) => {
        commit('CLEAR_FORM');
        commit('TOGGLE_DIALOG');
        commit('CHANGE_ACTION_FORM', 'create');
    }
};

export default actions;