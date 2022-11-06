<template>
<div id="header">
<div id="Circle">
<div id="logo"> </div>
</div>

<div id="nav">
 <v-row justify="center">

    <v-dialog
      v-model="dialog1"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="yellow accent-4"
          dark
          v-bind="attrs"
          v-on="on"
        >
           <v-icon
      medium
      color=""
    >
      mdi-diamond-stone
    </v-icon>

        </v-btn>
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
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog1 = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
          
        </v-list>
          
      </v-card>
    </v-dialog>
    <v-spacer></v-spacer>
     <v-dialog
      v-model="dialog2"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="purple darken-4"
          dark
          v-bind="attrs"
          v-on="on"
        >
           <v-icon
      large
     >
      mdi-airplane
    </v-icon>

        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="purple darken-2"
        >
             <h3 id="h33" style="color:white">حجز الرحلة</h3>

          <v-btn
            icon
            dark
            @click="dialog2 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
           <v-spacer></v-spacer>
          <v-toolbar-items>
          
          </v-toolbar-items>
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
     <div>  
      <Dialog/>
      </div>
        
        </v-list>
     
                   

      </v-card>
    </v-dialog>
     <v-spacer></v-spacer>

    <v-dialog
      v-model="dialog3"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="pink darken-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
           <v-icon
      large
      color=" "
    >
      mdi-greenhouse
    </v-icon>

        </v-btn>
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
          <v-toolbar-title>Settings</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-toolbar-items>
            <v-btn
              dark
              text
              @click="dialog3 = false"
            >
              Save
            </v-btn>
          </v-toolbar-items>
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
          
        </v-list>
          
      </v-card>
    </v-dialog>

  </v-row>
 
</div>

</div>
</template>


<style>

#Circle{
width:600px;
height:400px;
 margin:auto;
position:relative;
display:flex;
border-radius:50%;
top:-180px;
background-image: url("../assets/gifs/3.gif");
background-size:contain;
background-position:bottom;
background-repeat:no-repeat;
}
#logo{
width:200px;
height:100px;
margin:auto;
position: relative;
top:33%;
 background: linear-gradient(
45deg, rgba(34, 33, 33, 0.115), transparent);
border-radius:30%;
background-image: url("../assets/one.png");
background-size:cover;
background-position:center;
background-repeat:no-repeat;
}
#header{
height:260px;

}
#nav {
 position: relative;
 top: -130px;
 width:25%;
 margin:auto;
 
}
#h33{
    padding: 2%;
     font-size: 160%;
    position: absolute;
    left: 41%;
    color: black;
}
@media (max-width:600px){
#nav{
    width: 50%;
    position: absolute;
    top: 13%;
    left: 30%;


}
}

@media (max-width:800px){
#nav{
    width: 50%;
    position: absolute;
    top: 13%;
    left: 30%;


}
}
@media (max-width:1000px){
#nav{
    width: 50%;
    position: absolute;
    top: 13%;
    left: 30%;


}
}
</style>

<script>
import Flights from"../components/Flights";
import Dialog from './Dialog.vue';

  export default {
    name:'Header',
    data () {
      return {
        dialog1: false,
        dialog2: false,
        dialog3: false,
        notifications: false,
        sound: true,
        widgets: false,
      }
    },
      components: {
       Flights,
        Dialog

  }
  }

</script>