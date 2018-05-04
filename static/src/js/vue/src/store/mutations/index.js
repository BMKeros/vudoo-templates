const mutations = {
    LOAD_TASKS: (state, payload) => {
        state.tasks = payload.records.map((item) => {
            return {
                id: item.id,
                name: item.name,
                is_done: item.is_done,
                user: item.user_id[0],
                date_deadline: item.date_deadline
            };
        });
    },
    TOGGLE_DIALOG: (state) => {
        state.dialog = !state.dialog;
    },
    LOAD_EDITED_TASK: (state, payload) => {
        state.editedTask = { ...payload };
    },
    CHANGE_ACTION_FORM: (state, payload) => {
        state.currentAction = payload;
    },
    CLEAR_FORM: (state) => {
        state.editedTask = Object.assign({}, state.defaultTask);
    }
};

export default mutations;
