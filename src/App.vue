<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

import Home from './components/home'
export default {
  name: 'app',
 components: {
	 Home
 }
}
</script>

<style>
</style>
