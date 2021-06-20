<template>
	<div class="card card--blur">
		<div class="card-content">
			<h2 class="card-title">This is title</h2>
			<p class="card-body">
				This is some text: Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Saepe repellendus impedit eum quam eaque
				alias!
			</p>
			<a href="#" class="button">This is button</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "Card",
};
</script>

<style scoped>
/* Adjustments to the Card itself */
.card {
	--clr-blue-light: rgb(67 186 255);
	background-image: url(../../assets/background.jpg);
	background-size: cover;
	padding: 10rem 0 0;
	max-width: 35ch;
	border-radius: 0.5rem;
	overflow: hidden;

	transition: transform 0.3s ease-in-out;
}

p {
	margin-block: 1.25em;
}

.card:hover {
	transform: scale(1.05);
}

.card--blur {
	transform: translate3d(0, 0, 0);
	backface-visibility: hidden;
	will-change: transform;
}

.card-content {
	--pad: 1.5rem;
	padding: var(--pad);
	background: linear-gradient(
		hsl(0 0% 0% / 0),
		hsl(20 0% 0% / 0.3) 20%,
		hsl(0 0% 0% / 1)
	);
}

/* Adjustments to the Card title */
.card-title {
	position: relative;
	width: fit-content;
	max-width: 100%;
}
/* Make a line under the title */
.card-title::after {
	content: "";
	position: absolute;
	left: calc(var(--pad) * -1);
	bottom: -4px;
	height: 4px;
	width: calc(100% + var(--pad));
	background: var(--clr-blue-light);
}

/* Adjustments to the Card paragraph */
.card-body {
	color: rgba(255, 255, 255, 0.9);
}

/* Adjustments to the Card button */
.button {
	cursor: pointer;
	display: inline-block;
	text-decoration: none;
	color: black;
	background-color: var(--clr-blue-light);
	padding: 0.25em 1.25em;
	border-radius: 0.25em;
}

.button:hover,
.button:focus {
	background-color: rgb(170, 224, 255);
}
</style>
