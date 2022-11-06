<template>
  <v-app>
   

    <v-main>
      <router-view/>
      <Header />
           <Footer />
      </v-main>

  </v-app>
</template>

<script>
export default {
    name: 'App',

  component:{
  },

  data: () => ({
    //
  }),
};
</script>
