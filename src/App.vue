<template>
    <Home />
</template>

<script>
import Home from './components/Home.vue';

export default {
    name: 'App',
    components: {
        Home,
    },
};
</script>

<style>
:root {
    --clr-white: white;
    --clr-black: black;
}

*,
*::before,
*::after {
    box-sizing: border-box;
}

body {
    display: grid;
    min-height: 100vh;
    place-items: center;
    margin: 0;
    padding: 0;
}

#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
</style>
