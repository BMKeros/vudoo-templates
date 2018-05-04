<template>
    <v-app>
        <v-btn color="primary" dark @click="toggleDialog" class="mb-2">New Task</v-btn>
        <v-dialog v-model="dialog" max-width="500px" persistent>
            <v-card>
                <v-card-title>
                    <span class="headline">\{{ formTitle }}</span>
                </v-card-title>
                <v-card-text>
                    <v-container grid-list-md>
                        <v-layout wrap>
                            <v-flex xs12 sm6 md4>
                                <v-text-field label="Name" v-model="editedTask.name"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field label="User" v-model="editedTask.user"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-text-field label="Date Deadline" v-model="editedTask.date_deadline"></v-text-field>
                            </v-flex>
                            <v-flex xs12 sm6 md4>
                                <v-checkbox label="Done?" v-model="editedTask.is_done"></v-checkbox>
                            </v-flex>
                        </v-layout>
                    </v-container>
                </v-card-text>
                <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" flat @click.native="toggleDialog">Close</v-btn>
                    <v-btn color="blue darken-1" flat @click.native="save">Save</v-btn>
                </v-card-actions>
            </v-card>
        </v-dialog>
        <v-data-table
                :headers="headers"
                :items="tasks"
                hide-actions
                class="elevation-1"
        >
            <template slot="items" slot-scope="props">
                <td>\{{ props.item.id }}</td>
                <td class="text-xs-right">\{{ props.item.name }}</td>
                <td class="text-xs-right">\{{ props.item.user }}</td>
                <td class="text-xs-right">\{{ props.item.date_deadline }}</td>
                <td class="text-xs-right">
                    <v-icon v-if="props.item.is_done" color="teal">check</v-icon>
                    <v-icon v-else color="teal">clear</v-icon>
                </td>
                <td class="justify-center layout px-0">
                    <v-btn icon class="mx-0" @click="editTask(props.item)">
                        <v-icon color="teal">edit</v-icon>
                    </v-btn>
                    <v-btn icon class="mx-0" @click="deleteTask(props.item)">
                        <v-icon color="pink">delete</v-icon>
                    </v-btn>
                </td>
            </template>
            <template slot="no-data">
                <v-btn color="primary" @click="initialize">Reset</v-btn>
            </template>
        </v-data-table>
    </v-app>
</template>

<script>
    import { mapActions, mapGetters, mapMutations, mapState } from 'vuex';

    export default {
        name: 'demo',
        data: () => ({
            headers: [
                { text: 'User', value: 'user' },
                { text: 'Name', value: 'name' },
                { text: 'Date Deadline', value: 'date_deadline' },
                { text: 'Done?', value: 'is_done' },
                { text: 'Actions', value: '', sortable: false }
            ]
        }),
        computed: {
            formTitle() {
                //return this.editedIndex === -1 ? 'New Task' : 'Edit Task'
                return 'New Task';
            },
            ...mapState([
                'dialog',
                'tasks',
                'editedTask',
                'defaultTask'
            ])
        },
        mounted() {
            this.loadTasks();
        },
        methods: {
            ...mapActions([
                'createTask',
                'editTask',
                'removeTask',
                'loadTasks',
                'toggleDialog'
            ]),
            initialize: () => console.log("init"),
        }
    }
</script>