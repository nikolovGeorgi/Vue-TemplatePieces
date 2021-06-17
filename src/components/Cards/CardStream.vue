<template>
	<div class="card">
		<div class="card-persist">
			<div class="rank">3</div>
			<img :src="cardCoverImage" class="cover" alt="Card cover" />
			<h3 class="title">{{ cardTitle }}</h3>
		</div>

		<div class="card-front">
			<p class="viewers">{{ totalCurrentViewers }}k</p>
			<div class="streamers">
				<img
					:src="streamer.icon"
					:alt="streamer.name"
					:key="id"
					v-for="(streamer, id) in streamers"
				/>
			</div>
		</div>

		<div class="background">
			<div class="card-back">
				<div class="stats">
					<p class="stat">
						{{ totalCurrentViewers }}k<span>Watching</span>
					</p>
					<p class="stat">
						{{ totalCurrentStreams }}k<span>Streams</span>
					</p>
				</div>
				<button class="btn">See more streams</button>
				<div class="streamers">
					<div
						class="streamer"
						v-for="(streamer, id) in streamers"
						:key="id"
					>
						<div class="icon">
							<img :src="streamer.icon" :alt="streamer.name" />
						</div>
						<p class="name">{{ streamer.name }}</p>
						<p class="number">{{ streamer.currentViewers }}k</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: "CardWithDetails",
	data() {
		return {
			cardCoverImage:
				// "https://img.finalfantasyxiv.com/lds/promo/h/r/l6eq3BOhy145X-sULOMDJFWUmg.png",
				// "https://i.imgur.com/OQUEe.jpeg",
				"https://static-cdn.jtvnw.net/ttv-boxart/Minecraft-144x192.jpg",
			cardTitle: "Minecraft",
			totalCurrentViewers: 125,
			totalCurrentStreams: 28,
			streamers: [
				{
					name: "Guy 1",
					// name: "Streamer 1",
					currentViewers: 95.3,
					icon: "https://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Giant-Man-icon.png",
				},
				{
					name: "Streamer 2",
					currentViewers: 315.1,
					icon: "https://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Black-Widow-icon.png",
				},
				{
					name: "Guy 2",
					currentViewers: 15.8,
					icon: "https://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Hawkeye-icon.png",
				},
			],
		};
	},
};
</script>

<style lang="scss" scoped>
$b: 1px red solid; // for testing with border

$br: 1.125em;
$clr-bg: rgb(0, 0, 0);
$trans: transform 175ms cubic-bezier(0.71, 0.97, 0.71, 1.07);

img {
	max-width: 100%;
}

.card {
	position: relative;
	width: 13em;
}

.rank {
	position: absolute;
	top: 0;
	right: 1em;
	font-weight: bold;
	padding: 0.5em 0.5em 0.75em;
	background: rgba($color: black, $alpha: 0.75);
	z-index: 2;

	transition: $trans;

	border-radius: $br;
	clip-path: polygon(
		0 0,
		100% 0,
		88% 30%,
		100% 100%,
		50% 80%,
		0 100%,
		12% 30%
	);
}

.cover {
	width: 100%;
	border-radius: $br;
}

.title {
	margin: 0.5em auto;
	width: fit-content;
	color: rgba($color: white, $alpha: 0.95);
}

.rank,
.cover,
.title {
	transition: 250ms;
}

.streamers {
	display: flex;
	text-align: center;
	img {
		width: 2em;
		height: 2em;
		border-radius: 50%;
	}
}

.card-front {
	display: flex;
	justify-content: space-between;
	// justify-content: space-around;
	align-items: center;

	.streamers img {
		border: 1px solid rgba($color: $clr-bg, $alpha: 0.3);
		&:nth-of-type(1) {
			transform: translateX(50%);
			z-index: 1;
		}
		&:nth-of-type(2) {
			transform: translateX(25%);
		}
	}

	p {
		font-size: 1.125rem;
	}
}

.card-back {
	position: relative;
	margin: auto 0.75em 1.5em 0.75em;

	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1em;
	opacity: 1;

	.stats {
		columns: 2;
		column-rule: 1px solid rgba($color: white, $alpha: 0.2);
	}

	.stat {
		// font-size: 1rem;
		margin-inline: 1em;
		text-align: center;
		span {
			display: block;
			font-size: 0.7rem;
			color: rgba($color: white, $alpha: 0.85);
		}
	}

	.btn {
		// cursor: pointer;
		border: 0;
		background: rgb(23, 143, 255);
		border-radius: 100vw;
		padding: 0.5em 1.5em;
		font-weight: bold;
		&:hover {
			background: rgb(74, 198, 255);
		}
	}
}

.background {
	position: absolute;
	inset: 0em;
	display: flex;
	flex-direction: column;

	background: black;
	border-radius: $br;
	opacity: 0;
	transform: scale(0.2, 0.9);
}

.card:hover {
	.card-persist {
		.rank {
			transform: translate(125%, -70%);
			background: rgb(66, 3, 95);
			z-index: 1;
		}
		.cover {
			transform: translateY(-40%) scale(0.75);
		}
		.title {
			transform: translateY(-650%);
			text-align: center;
		}
		.cover,
		.title {
			position: relative;
			z-index: 1;
		}
	}
	.card-front {
		opacity: 0;
	}
	.background {
		opacity: 1;
		transition: $trans, opacity 100ms linear;
		transform: scale(1.3, 1.2);
	}

	.card-back {
		opacity: 1;

		transform: translateY(0);
		transition: transform 170ms ease, opacity 100ms linear;

		.streamers {
			width: 100%;
			justify-content: space-between;
		}

		.streamer {
			font-size: 0.75rem;
			margin-inline: auto;
		}

		.name {
			font-weight: bold;
		}
	}
}

/* 
	Can either select all pointer cursors here, or individually above
*/
.cover,
.title,
.btn,
.streamer {
	cursor: pointer;
}
</style>