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
// 1.24
</script>

<style>
</style>
