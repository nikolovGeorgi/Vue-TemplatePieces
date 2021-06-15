<template>
    <div class="card">
        <div class="card-rank">3</div>
        <div class="card-content">
            <div class="front">
                <img :src="cardCoverImage" alt="Card cover" />
                <h2 class="card-title">{{ cardTitle }}</h2>
                <div class="front-details">
                    <p class="viewers">{{ totalCurrentViewers }}k</p>
                    <div
                        class="streamers"
                        :key="id"
                        v-for="(streamer, id) in streamers"
                    >
                        <img :src="streamer.icon" :alt="streamer.name" />
                    </div>
                </div>
            </div>
            <div class="back">
                <div class="back-details">
                    <p class="card-stat">
                        {{ totalCurrentViewers }}k<span>Watching</span>
                    </p>
                    <p class="card-stat">
                        {{ totalCurrentStreams }}k<span>Streams</span>
                    </p>
                </div>
                <button class="btn">See more streams</button>
                <div
                    class="streamers"
                    v-for="(streamer, id) in streamers"
                    :key="id"
                >
                    <div class="streamer">
                        <p class="name">{{ streamer.name }}</p>
                        <p class="number">{{ streamer.currentViewers }}k</p>
                        <img src="{{streamer.icon}}" alt="{{streamer.name}}" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardWithDetails',
    data() {
        return {
            cardCoverImage:
                'https://img.finalfantasyxiv.com/lds/promo/h/r/l6eq3BOhy145X-sULOMDJFWUmg.png',
            cardTitle: 'A Realm Reborn',
            totalCurrentViewers: 555.5,
            totalCurrentStreams: 28,
            streamers: [
                {
                    name: 'Streamer 1',
                    currentViewers: 95.3,
                    icon:
                        'https://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Giant-Man-icon.png',
                },
                {
                    name: 'Streamer 2',
                    currentViewers: 315.1,
                    icon:
                        'https://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Black-Widow-icon.png',
                },
                {
                    name: 'Streamer 3',
                    currentViewers: 15.8,
                    icon:
                        'https://icons.iconarchive.com/icons/hopstarter/superhero-avatar/256/Avengers-Hawkeye-icon.png',
                },
            ],
        };
    },
};
</script>

<style lang="scss" scoped>
$br: 1.25em;
$clr-dark: rgb(0, 0, 0);

.card {
    position: relative;
    width: 14em;
    background: rgba($color: $clr-dark, $alpha: 0.7);
    border-radius: $br;
}

img {
    max-width: 100%;
}

.card-rank {
    position: absolute;
    top: 0;
    right: 1em;
    font-weight: bold;
    padding: 0.5em 0.5em 0.75em;
    background: rgba($color: #000000, $alpha: 0.5);
    border-radius: $br;
    clip-path: polygon(100% 0%, 100% 100%, 50% 85%, 0 100%, 0 0);
}

.streamers {
    display: flex;
    img {
        width: 2em;
        height: 2em;
        border-radius: 50%;
    }
}

.front {
    & > img {
        margin-block: 1em;
    }

    .card-title {
        text-align: center;
        margin: 0.5em auto;
        color: rgba($color: white, $alpha: 0.95);
    }

    .front-details {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-inline: 1em;
        background: rgba($color: $clr-dark, $alpha: 1);
        border-radius: 0 $br;
    }

    .streamers img {
        border: 1px solid rgba($color: $clr-dark, $alpha: 0.3);

        &:nth-of-type(1) {
            transform: translateX(50%);
            z-index: 1;
        }
        &:nth-of-type(2) {
            transform: translateX(25%);
        }
    }
}

.back {
    display: none;
}
</style>
