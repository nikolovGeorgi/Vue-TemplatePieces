<template>
    <div class="card card--blur">
        <div class="card-content">
            <h2 class="card-title">
                This is title
            </h2>
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
    name: 'CardAnimated',
};
</script>

<style lang="scss" scoped>
$img: '../../assets/background.jpg';
$img1: 'https://i.imgur.com/MQLwXGU.jpeg';

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
    max-width: 35ch;
    border-radius: 0.5rem;
    overflow: hidden;

    transition: transform $tr ease-in-out;

    &:hover {
        transform: scale(1.05);

        .card-content {
            transform: translateY(0);
        }

        .card-content > *:not(.card-title) {
            opacity: 1;
        }

        .card-title::after {
            transform: scaleX(1);
        }
    }
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

    transform: translateY(65%);
    transition: transform $tr ease;

    & > *:not(.card-title) {
        opacity: 0;
        transition: opacity $tr linear;
    }
}

/*
    $ Adjustments to the Card title
*/
.card-title {
    position: relative;
    width: fit-content;
    max-width: 100%;

    &:after {
        content: '';
        position: absolute;
        left: calc(#{$pad} * -1);
        bottom: -4px;
        height: 4px;
        width: calc(100% + #{$pad});
        background: $clr-blue-light;

        transform: scaleX(0);
        transform-origin: left;
        transition: transform $tr ease;
    }
}

/*
    $ Adjustments to the Card paragraph
*/
.card-body {
    color: rgba(255, 255, 255, 0.9);
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
    }
}
</style>
