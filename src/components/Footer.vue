<template>
    <v-bottom-navigation
    v-model="value"
    :background-color="color"
    dark
    fixed
    bottom
  >
<div>
 
    <v-dialog
      v-model="dialog1"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">

    
<v-btn v-bind="attrs" v-on="on">
      <span>الاعدادات</span>

      <v-icon size="43" class="mb-2">mdi-airplane-cog</v-icon>
    </v-btn>     
  
 
      </template>
      <v-card>
        <v-toolbar
          dark
          color="white"
        >
                <h3 id="h33" >المزيد</h3>

          <v-btn
            icon
            dark
            @click="dialog1 = false"
            color="black"
          >
            <v-icon>mdi-close</v-icon>
            
          </v-btn>
           
        </v-toolbar>
        <Setting/>
      </v-card>
    </v-dialog>
     </div>
   
  <div>
 
    <v-dialog
      v-model="dialog2"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">

    
<v-btn   v-bind="attrs" v-on="on">
      <span>تسجيل الدخول</span>

      <v-icon size="43" class="mb-2">mdi-login</v-icon>
    </v-btn>     
  
 
      </template>
      <v-card>
        <v-toolbar
          dark
          color="purple darken-2"
        >
                <h3 id="h33" style="color:white" >تسجيل الدخول</h3>

          <v-btn
            icon
            dark
            @click="dialog2 = false"
              color="white"

          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
           
           <Regist/>
        </v-toolbar>
        
      </v-card>
    </v-dialog>
     </div>
   

   <div>
 

    <v-dialog
      v-model="dialog3"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">

    
<v-btn  v-bind="attrs" v-on="on" >
      <span>العروض</span>

      <v-icon size="43" class="mb-2">mdi-offer</v-icon>
    </v-btn>     
  
 
      </template>
      <v-card>
        <v-toolbar
          dark
           color="pink darken-3"

        > <h3 id="h33" style="color:white">عروض ومميزات</h3>
          <v-btn
            icon
            dark
            @click="dialog3 = false"
                        color="white"

          >
            <v-icon>mdi-close</v-icon>
            
          </v-btn>
        </v-toolbar>
        <Offers/>
       </v-card>
    </v-dialog>
     </div>
   

   <div>
 
    <v-dialog
      v-model="dialog4"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">

    
<v-btn action   v-bind="attrs" v-on="on" >
الرحلات
      <v-icon size="43" class="mb-2">mdi-airplane-clock</v-icon>
    </v-btn>     
  
 
      </template>
      <v-card>
        <v-toolbar
          dark
          color="white  "
        >                <h3 id="h33"  >الرحلات</h3>

          <v-btn
            icon
            dark
            @click="dialog4 = false"
              color="black"

          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
           
        </v-toolbar>
        
           <bookings top="65"/>
      </v-card>
    </v-dialog>
     </div>
   
    
    <div>
     <a href="/" id="acc">
    
<v-btn action   v-bind="attrs" v-on="on" >
الرئيسية
      <v-icon size="43" class="mb-2">mdi-home</v-icon>
    </v-btn>     
  
  
</a>
    </div>
   
  </v-bottom-navigation>
 </template>

<style scoped>
.v-item-group.v-bottom-navigation--fixed {
    padding: 0% 0% 6% 0%;
    display: flex;
   flex-wrap: wrap;
   justify-content:space-around;
}
.theme--dark.v-btn.v-btn--has-bg {
    background-color: #212121;
    height:80px;
    
}
#acc{
text-decoration: none;
}
#h33{
    padding: 2%;
     font-size: 160%;
    position: absolute;
    left: 41%;
    color: black;
}
</style>
<script>
 import Regist from"../components/Regist";
 import bookings from"../components/bookings";
 import Setting from"../components/Setting";
 import Offers from"../components/Offers";
 
  export default {
        name: 'Footer',
    data() {

      return {
        dialog1: false,
        dialog2: false, 
        dialog3: false, 
        dialog4: false, 
        dialog5: false,
        value: 1
      }
    }, 

    computed: {
      color () {
        switch (this.value) {
          case 4: return 'grey darken-4'
          case 3: return 'grey darken-4'
          case 2: return 'grey darken-4'
          case 1: return 'grey darken-4'
          case 0: return 'grey darken-4'
          default: return 'grey darken-4'
        }
      },
    },
     components: {
   Regist,
   bookings,
   Setting,
   Offers,
  }
  }
</script>