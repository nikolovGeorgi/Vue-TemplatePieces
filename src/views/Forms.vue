<template>
	<div class="container">
		<div class="forms">
			<component
				class="form"
				:is="currentComponent"
				v-for="currentComponent in allComponents"
				:key="currentComponent"
			/>
		</div>
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
.container {
	display: flex;
	flex-direction: column;
	align-items: center;
}
.home {
	margin-block: 1em;
}
.forms {
	width: #{"min(90%, 75rem)"};
	display: grid;
	grid-auto-flow: row;
	gap: 1em;
}

@media (min-width: 55em) {
	.forms {
		grid-auto-flow: column;
	}
}
</style>