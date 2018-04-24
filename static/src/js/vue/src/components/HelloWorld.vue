<template>
	<div>
		<sui-grid celled>
			<sui-grid-row>
				<sui-grid-column :width="4">
					<sui-message icon="folder"
								 header="Se a creado el modulo {{module_name}} Con exito!"
								 content="Usando Vuex integrado con Odoo."/>
				</sui-grid-column>
			</sui-grid-row>
			
			<sui-grid-row>
				<sui-grid-column :width="4">
					<sui-card>
						<sui-card-content :width="4">
							<sui-card-header>Module creado fue creado por {{author}}
								<sui-icon class="right floated" size="small" name="star" />
							</sui-card-header>
							<sui-card-description>
								<p>{{description}}</p>
							</sui-card-description>
						</sui-card-content>
					</sui-card>
				</sui-grid-column>
			</sui-grid-row>
		</sui-grid>
	</div>
</template>

<script>
	export default {
		name: 'hello-world',
	}
</script>

<style>
</style>
