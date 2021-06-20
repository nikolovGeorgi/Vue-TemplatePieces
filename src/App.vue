<template>
	<BackHome v-if="!home.isHome" />
	<router-view />
</template>

<script>
import BackHome from "@/components/BackHome.vue";
import { useRoute } from "vue-router";
import { reactive, watch } from "vue";

export default {
	name: "App",
	components: {
		BackHome,
	},
	setup() {
		const route = useRoute();

		let home = reactive({ isHome: false });
		watch(
			() => route.name,
			() => {
				route.name === "Home"
					? (home.isHome = true)
					: (home.isHome = false);
			}
		);
		return { home };
	},
};
</script>

<style lang="scss">
$clr-white: white;
$clr-dark: #333;
$clr-black: black;

*,
*::before,
*::after {
	box-sizing: border-box;
}

/* Initialize Global font size. */
html {
	font-size: 16px;
}

h1,
h2,
h3,
h4,
h5,
h6,
p {
	margin: 0;
	padding: 0;
}

/* Set the body for pre-viewing components.  */
body {
	display: grid;
	min-height: 100vh;
	place-items: center;
	background: $clr-dark;
	color: $clr-white;
	margin: 0;
}

#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
