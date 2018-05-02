const mutations = {
    LOAD_TASKS: (state, data) => {
        state.tasks = data.records.map((item) => {
            return {
                id: item.id,
                name: item.name,
                is_done: item.is_done,
                user: item.user,
                date_deadline: item.date_deadline
            };
        });
    },
    DIALOG: (state, data) => {
        state.dialog = data;
    }
};

export default mutations;
