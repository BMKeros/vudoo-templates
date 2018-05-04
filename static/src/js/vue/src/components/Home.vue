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
          <v-flex>
            <v-jumbotron color="grey lighten-2">
              <v-container>
                <v-layout align-center>
                  <v-flex>
                    <h3>Welcome to Odoo WebSite</h3>
                    <div class="title mb-6">This Module was created by {{author}}!
                      <p>Under the {{license}} license</p>
                    </div>
                    <v-layout row justify-center>
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
                    </v-layout>
                  </v-flex>
                </v-layout>
              </v-container>
            </v-jumbotron>
          </v-flex>
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
    props: {
      source: String
    }
  }
</script>

<style>
</style>