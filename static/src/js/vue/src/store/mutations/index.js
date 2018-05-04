const mutations = {
    LOAD_TASKS: (state, data) => {
        state.tasks = data.records.map((item) => {
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
    LOAD_EDITED_TASK: (state, data) => {
        state.editedTask = Object.assign({}, data);
    }
};

export default mutations;
