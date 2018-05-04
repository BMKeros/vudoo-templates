<template>
  <v-app id="inspire">
    <v-navigation-drawer
      fixed
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Home</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="">
          <v-list-tile-action>
            <v-icon>work</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>{{module_name}}</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="indigo" dark fixed app>
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <v-toolbar-title>{{module_name}}</v-toolbar-title>
    </v-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <v-layout
          justify-center
          align-center
        >
          <v-jumbotron color="grey lighten-2">
            <v-container fill-height>
              <v-layout align-center>
                <v-flex>
                  <h3 class="display-3">Welcome to the site</h3>
                  <span class="subheading"> This Module was created by {{author}}!</span>
                  <v-divider class="my-3"><p>Under the {{license}} license</p></v-divider>
                  <div class="title mb-3">Check out our newest features!</div>
                  <v-btn large color="primary" class="mx-0">See more</v-btn>
                </v-flex>
                <v-flex>
                  <v-dialog v-model="dialog" width="600px">
                    <v-btn color="primary" dark slot="activator">Open Details</v-btn>
                    <v-card>
                      <v-card-title>
                        <span class="headline">{{module_name}}</span>
                      </v-card-title>
                      <v-card-text>{{description}}
                        <p>You can get the repository on Github {{git_repository}}</p>
                      </v-card-text>
                      <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn color="green darken-1" flat="flat" @click="dialog = false">Close</v-btn>
                      </v-card-actions>
                    </v-card>
                  </v-dialog>
                </v-flex>
              </v-layout>
            </v-container>
          </v-jumbotron>
        </v-layout>
      </v-container>
    </v-content>
    <v-container grid-list-xl text-xs-center>
      <v-flex xs10 offset-xs1>
        <v-footer color="indigo" app>
          <span class="white--text">&copy; Made with the heart!
            <v-btn flat icon color="pink">
              <v-icon>favorite</v-icon>
            </v-btn>
          </span>
        </v-footer>
      </v-flex>
    </v-container>
  </v-app>
</template>

<script>
  export default {
    name: 'home',
    data: () => ({
      drawer: null,
      dialog: false
    }),
  }
</script>

<style>
</style>
