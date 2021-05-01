<template>
    <div id="nav">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link>
    </div>
    <router-view />
</template>

<style lang="scss">
body {
    font-size: 16px;
    font-smooth: never;
    -webkit-font-smoothing: none;
    font-family: 'pokemon-font', monospace;
}

a {
    text-decoration: none;
    color: #0bd;

    &:hover {
        color: #0090aa;
    }
}
</style>
