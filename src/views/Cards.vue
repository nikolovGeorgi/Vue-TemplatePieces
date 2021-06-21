<template>
	<div class="cards">
		<div
			class="component"
			v-for="currentComponent in allComponents"
			:key="currentComponent"
		>
			<h3 class="component-name">
				{{ currentComponent.name }}
			</h3>
			<component :is="currentComponent" />
		</div>
	</div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
	name: "Cards",
	setup() {
		const allComponents = {};
		const all = require.context("@/components/Cards/", true, /^.*.vue$/);
		all.keys().forEach((component) => {
			component = component.slice(2, component.length);
			let componentName = component.substring(0, component.length - 4);
			allComponents[componentName] = defineAsyncComponent(() =>
				import("@/components/Cards/" + component)
			);
			allComponents[componentName].name = componentName;
		});
		return { allComponents };
	},
};
</script>

<style lang="scss" scoped>
.cards {
	display: grid;
	grid-auto-flow: row;
	gap: 2em;
	& > * {
		place-self: center;
	}
}

.component-name {
	margin-bottom: 0.5em;
}

@media (min-width: 55em) {
	.cards {
		grid-auto-flow: column;
		align-items: center;
	}
}
</style>