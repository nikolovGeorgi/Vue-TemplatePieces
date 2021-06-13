<template>
    <Card />
</template>

<script>
import Card from './components/Card.vue';

export default {
    name: 'App',
    components: {
        Card,
    },
};
</script>

<style>
:root {
    --clr-white: white;
    --clr-dark: #333;
    --clr-black: black;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

/* Initialize Global font size. */
html {
    font-size: 16px;
}

/* Set the body for pre-viewing components.  */
body {
    display: grid;
    min-height: 100vh;
    margin: 0;
    padding: 0;
    place-items: center;
    line-height: 1.5;
    background: var(--clr-dark);
    color: var(--clr-white);
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
