<template>
<div id='app'>
  <h3> {{title}} </h3>
  <router-link class="link" to="/data/people">People</router-link> |
  <router-link class="link" to="/data/planets">Planets</router-link>
  <router-view></router-view>
</div>
</template>

<script>

export default {
  data(){
    return {
      title: 'My starbase extended app'
    }
  }
}

</script>
