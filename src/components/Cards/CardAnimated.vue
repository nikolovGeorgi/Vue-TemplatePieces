<template>
	<div class="card card--blur">
		<div class="card-content">
			<h2 class="card-title">
				{{ title }}
			</h2>
			<p class="card-body">
				This is some text: Lorem ipsum dolor sit amet consectetur
				adipisicing elit. Saepe repellendus impedit eum quam eaque
				alias!
			</p>
			<a href="#" class="button">{{ buttonText }}</a>
		</div>
	</div>
</template>

<script>
export default {
	name: "CardAnimated",
	data() {
		return {
			title: "This is my title",
			buttonText: "This is button",
		};
	},
};
</script>

<style lang="scss" scoped>
$img: "../../assets/background.jpg";
$img1: "https://i.imgur.com/MQLwXGU.jpeg";

$clr-blue-light: #43baff;
$tr: 0.5s;
$pad: 1.5rem;

/*
    $ Adjustments to the Card itself
*/
.card {
	background-image: url($img1);
	background-size: cover;
	padding: 10rem 0 0;
	max-width: 18em;
	border-radius: 0.5rem;
	overflow: hidden;

	transition: transform $tr ease;
}

p {
	margin-block: 1.25em;
}

.card--blur {
	transform: translate3d(0, 0, 0);
	backface-visibility: hidden;
	will-change: transform;
}

/*
    $ Adjustments to the container of { title, body, button }
*/
.card-content {
	padding: $pad;
	background: linear-gradient(
		rgba(0, 0%, 0%, 0),
		rgba(20, 0%, 0%, 0.3) 20%,
		rgba(0, 0%, 0%, 1)
	);
}

/*
    $ Adjustments to the Card title
*/
.card-title {
	position: relative;
	width: fit-content;
	max-width: 100%;

	&:after {
		content: "";
		position: absolute;
		left: calc(#{$pad} * -1);
		bottom: -4px;
		height: 4px;
		width: calc(100% + #{$pad});
		background: $clr-blue-light;

		transform-origin: left;
		transition: transform $tr ease;
	}
}

/*
    $ Adjustments to the Card paragraph
*/
.card-body {
	color: rgba(255, 255, 255, 0.95);
}

/*
    $ Adjustments to the Card button
*/
.button {
	cursor: pointer;
	display: inline-block;
	text-decoration: none;
	color: black;
	background-color: $clr-blue-light;
	padding: 0.25em 1.25em;
	border-radius: 0.25em;

	&:hover,
	&:focus {
		background-color: rgb(170, 224, 255);
		outline: 0;
	}
}

/* 
    $ Extracted hover styles to account for touch devices.
*/
@media (hover) {
	.card-content {
		transform: translateY(65%);
		transition: transform $tr ease;

		& > *:not(.card-title) {
			opacity: 0;
			transition: opacity $tr linear;
		}
	}

	.card:hover,
	.card:focus-within {
		transform: scale(1.05);
		transition-delay: $tr;

		.card-content,
		.card-content:not(:focus-within) {
			transform: translateY(0);
			transition-delay: $tr;
			backface-visibility: hidden;
		}

		/* 
            $ Minimizing glitches in case the user presses "tab" on the keyboard.
        */
		.card-content::before,
		.card-content:focus-within {
			animation: animate $tr cubic-bezier(0.37, -0.35, 0.32, 0.82);

			@keyframes animate {
				0% {
					opacity: 0;
					color: rgba($color: white, $alpha: 0);
				}
				20% {
					opacity: 0.2;
					color: rgba($color: white, $alpha: 0.2);
				}
				40% {
					opacity: 0.4;
					color: rgba($color: white, $alpha: 0.4);
				}
				60% {
					opacity: 0.6;
					color: rgba($color: white, $alpha: 0.6);
				}
				80% {
					opacity: 0.8;
					color: rgba($color: white, $alpha: 0.8);
				}
				100% {
					opacity: 1;
					color: white;
				}
			}
		}

		.card-content > *:not(.card-title) {
			opacity: 1;
			transition-delay: calc(2 * #{$tr});
		}

		.card-title::after {
			transform: scaleX(1);
		}
	}

	.card-title::after {
		transform: scaleX(0);
	}
}

/* 
    $ When user has turned off animations from OS.
*/
@media (prefers-reduced-motion: reduce) {
	*,
	*::before,
	*::after {
		animation-duration: 0ms !important;
		animation-iteration-count: 1 !important;
		transition-duration: 0ms !important;
		transition-delay: 0ms !important;
		scroll-behavior: auto !important;
	}
}
</style>
