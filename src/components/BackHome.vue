<template>
	<div class="back-home">
		<router-link to="/" class="link">Go back Home</router-link>
	</div>
</template>

<script>
export default {
	name: "BackHome",
};
</script>

<style lang="scss" scoped>
.back-home {
	text-align: center;
	margin-block: 2.5em;
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
</style>