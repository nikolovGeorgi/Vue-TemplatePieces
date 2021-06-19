<template>
	<div class="home">
		<h1 class="title">Select a section in order to view its components.</h1>
		<div class="views">
			<router-link to="/cards" class="link">Cards</router-link>
			<router-link to="/forms" class="link">Forms</router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: "Home",
};
</script>

<style lang="scss" scoped>
.title {
	font-style: oblique;
}

.views {
	margin-block: 2em;
	display: flex;
	justify-content: center;
}

.link {
	color: #00ffff;
	text-decoration: none;
	font-size: 2rem;
	font-weight: bold;
	&:hover {
		color: #00a2ff;
	}
}
.link + .link {
	padding-left: 1em;
}
</style>