<template>
<div class="">
  <h3>Type: {{type}}</h3>
  {{items}}
</div>
</template>

<script>
  export default{
    data(){
      return {
        type: this.$route.params.type,
        initial_ids: [1, 13, 14],
        items: []
      }
    },
    methods: {
      fetchItems(){
        this.type = this.$route.params.type
        for (let id in this.initial_ids){
          let uid = this.initial_ids[id]
          console.log(`http:/swapi.co/api/${this.type}/${uid}`)
          fetch(`http:/swapi.co/api/${this.type}/${uid}`, {
            method: 'GET'
          })
            .then(response => response.json())
            .then(json => this.items.push(json))
        }
      }
    },
    watch: {
      '$route': "fetchItems"
    }
  }
</script>
