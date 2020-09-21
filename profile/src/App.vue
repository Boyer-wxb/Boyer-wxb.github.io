<template>
  <div>
    <!-- <router-link to="/profile">profile</router-link> -->
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name:'App',
    data(){
      return {

      }
    },
    created(){
      this.$router.push({name:'Profile'})
    },
    methods:{
      
    }
  }
</script>

<style lang="scss" scoped>

</style>