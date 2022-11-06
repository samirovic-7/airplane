<template>
<div id="all">
        <h3 id="h3" >عروض ومميزات</h3>

  <div id="dialog">

    <v-dialog
      v-model="dialog1"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">

         <v-card
    class="mx-auto"
    max-width="1600"
      shaped
  elevation="13"
v-bind="attrs"
          v-on="on"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
     </v-img>
 

    <v-card-text class="text--primary">
      <div id="textbottom">عروض دبى</div>
    </v-card-text>

     
  </v-card>
 
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog1 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
           
        </v-toolbar>
        
      </v-card>
    </v-dialog>
    
    
  </div>
  
   
  
  <div id="dialog">

    <v-dialog
      v-model="dialog2"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">

         <v-card
    class="mx-auto"
    max-width="1600"
      shaped
  elevation="13"
v-bind="attrs"
          v-on="on"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
     </v-img>
 

    <v-card-text class="text--primary">
      <div id="textbottom">عروض البحرين</div>
    </v-card-text>

     
  </v-card>
 
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog2 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
           
        </v-toolbar>
        
      </v-card>
    </v-dialog>
    
    
  </div>
  
   
  
  <div id="dialog">

    <v-dialog
      v-model="dialog3"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">

         <v-card
    class="mx-auto"
    max-width="1600"
      shaped
  elevation="13"
v-bind="attrs"
          v-on="on"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
     </v-img>
 

    <v-card-text class="text--primary">
      <div id="textbottom">عروض شرم الشيخ</div>
    </v-card-text>

     
  </v-card>
 
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog3 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
           
        </v-toolbar>
        
      </v-card>
    </v-dialog>
    
    
  </div>
  
   
  
  <div id="dialog">

    <v-dialog
      v-model="dialog4"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">

         <v-card
    class="mx-auto"
    max-width="1600"
      shaped
  elevation="13"
v-bind="attrs"
          v-on="on"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
     </v-img>
 

    <v-card-text class="text--primary">
      <div id="textbottom">عروض قطر</div>
    </v-card-text>

     
  </v-card>
 
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog4 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
           
        </v-toolbar>
        
      </v-card>
    </v-dialog>
    
    
  </div>
  
   
  
  <div id="dialog">

    <v-dialog
      v-model="dialog5"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">

         <v-card
    class="mx-auto"
    max-width="1600"
      shaped
  elevation="13"
v-bind="attrs"
          v-on="on"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
     </v-img>
 

    <v-card-text class="text--primary">
      <div id="textbottom">عروض الرياض</div>
    </v-card-text>

     
  </v-card>
 
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog5 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
           
        </v-toolbar>
        
      </v-card>
    </v-dialog>
    
    
  </div>
  
   
  
  <div id="dialog">

    <v-dialog
      v-model="dialog6"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">

         <v-card
    class="mx-auto"
    max-width="1600"
      shaped
  elevation="13"
v-bind="attrs"
          v-on="on"
  >
    <v-img
      class="white--text align-end"
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
    >
     </v-img>
 

    <v-card-text class="text--primary">
      <div id="textbottom">عروض المغرب</div>
    </v-card-text>

     
  </v-card>
 
      </template>
      <v-card>
        <v-toolbar
          dark
          color="primary"
        >
          <v-btn
            icon
            dark
            @click="dialog6 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
           
        </v-toolbar>
        
      </v-card>
    </v-dialog>
    
    
  </div>
  
   
  
  </div>
</template>

<style> 
#h3{
padding:2%;
text-align:center;
box-shadow:0px 0px 23px 5px;
margin-bottom:1%;
font-size:150%;
margin-top:2%;
}

#dialog{
margin:1% 0;
}
#textbottom{
font-size:160%;
font-family: 'Times New Roman', Times, serif;

text-align:center;
}
</style>


<script>
  export default {
     data () {
      return {
        dialog1: false,  
        dialog2: false,  
        dialog3: false,  
        dialog4: false,  
        dialog5: false,  
        dialog6: false,  
      }
    },
  }
</script>