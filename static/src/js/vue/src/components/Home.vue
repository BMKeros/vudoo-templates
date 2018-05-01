<template>
	<v-jumbotron color="grey lighten-2">
		<v-container fill-height>
			<v-layout align-center>
				<v-flex>
					<h3 class="display-3">Welcome to the site {{module_name}}</h3>
					<span class="subheading">Lorem ipsum dolor sit amet, pri veniam forensibus id. Vis maluisset molestiae id, ad semper lobortis cum. At impetus detraxit incorrupte usu, repudiare assueverit ex eum, ne nam essent vocent admodum. {{description}}</span>
					<v-divider class="my-3"></v-divider>
					<div class="title mb-3">Check out our newest features! {{license}}</div>
					<v-btn large color="primary" class="mx-0">{{author}}</v-btn>
				</v-flex>
			</v-layout>
		</v-container>
	</v-jumbotron>
</template>

<script>
    export default {
        name: 'home',
    }
</script>

<style>
</style>
