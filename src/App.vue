<template>
  <div
    id="app"
  >
    <router-view />
  </div>
</template>

<style lang="scss">
@tailwind preflight;
@tailwind components;
@tailwind utilities;

@import url('https://fonts.googleapis.com/css?family=Amatic+SC:400,700|Josefin+Sans');

#app {
  font-family: 'Josefin Sans', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#nav {
  padding: 30px;
  a {
    font-weight: bold;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
