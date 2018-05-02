<template>
	<div style="width:50%; margin-left:25%; margin-top:5%;" centered>
		<sui-grid celled class="ui middle aligned centered grid">
			<sui-grid-row>
				<sui-grid-column class="column" :width="15">
					<sui-grid>
						<sui-grid-row>
							<sui-grid-column :width="13" centered>
								<sui-message icon="folder"
											header="Se a creado el modulo {{module_name}} Con exito!"
											content="Usando Vuex integrado con Odoo."/>
							</sui-grid-column>
						</sui-grid-row>
						<sui-grid-row>
							<sui-grid-column centered :width="8">
								<sui-card>
									<sui-card-content :width="8">
										<sui-card-header>Y este modulo fue creado por {{author}}
											<sui-icon class="right floated" size="small" name="star" />
										</sui-card-header>
										<sui-card-description>
											<p>{{description}}</p>
										</sui-card-description>

										<sui-card-meta>
											<p>{{license}}</p>
										</sui-card-meta>
									</sui-card-content>
								</sui-card>
							</sui-grid-column>
						</sui-grid-row>
					</sui-grid>
				</sui-grid-column>
			</sui-grid-row>
		</sui-grid>
	</div>
</template>

<script>
	export default {
		name: 'home',
	}
</script>

<style>
</style>
		