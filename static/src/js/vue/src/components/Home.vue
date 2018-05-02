<template>
  <v-app>
    <v-jumbotron color="grey lighten-2">
      <v-container fill-height>
        <v-layout align-center>
          <v-flex>
            <h3 class="display-3">The {{module_name}} has been created successfully!</h3>
            <span class="subheading">Using Vuex integrated with Odoo. {{description}}</span>
            <v-divider class="my-3"></v-divider>
            <div class="title mb-3">This module was created by: {{author}}</div>
            <v-btn large color="primary" class="mx-0">{{license}}</v-btn>
          </v-flex>
        </v-layout>
      </v-container>
    </v-jumbotron>
  </v-app>
</template>

<script>
  export default {
    name: 'home',
  }
</script>

<style>
</style>
