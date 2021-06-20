<template>
	<div class="forms">
		<component
			class="form"
			:is="currentComponent"
			v-for="currentComponent in allComponents"
			:key="currentComponent"
		/>
	</div>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
	name: "Forms",
	setup() {
		const allComponents = {};
		const all = require.context("@/components/Forms/", true, /^.*.vue$/);
		all.keys().forEach((component) => {
			component = component.slice(2, component.length);
			let componentName = component.substring(0, component.length - 4);
			allComponents[componentName] = defineAsyncComponent(() =>
				import("@/components/Forms/" + component)
			);
		});
		return { allComponents };
	},
};
</script>

<style lang="scss" scoped>
.forms {
	display: grid;
	grid-auto-flow: row;
	gap: 2em;
}

@media (min-width: 55em) {
	.forms {
		grid-auto-flow: column;
	}
}
</style>