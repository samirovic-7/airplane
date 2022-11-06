<template>
  <v-row justify="center" >
    <v-dialog
      v-model="dialog"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">

       <v-row align="center">
    <v-col cols="12">
           <v-text-field
                color="purple darken-2"
              label="المسافرون والدرجة"
              required
              v-bind="attrs"
              v-on="on"
             ></v-text-field>
    </v-col>
  </v-row>

 
        
      
      </template>
      <v-card>
        <v-toolbar
          dark
         color="purple darken-2"
        >
          <v-btn
            icon
            dark
            @click="dialog = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
           <v-spacer></v-spacer>
      
        </v-toolbar>
        <v-list
          three-line
          subheader
        >
          <v-subheader id="text">فئة الرحلة</v-subheader>
            
<template>
 <v-card>
            <v-card-text>
      <v-chip-group
      
        v-model="selection"
        active-class="deep-purple accent-4 white--text"
        column
        
      >
      <v-col cols="6"  id="CardChips">
        <v-chip id="chip">الدرجة السياحية</v-chip>
</v-col>

      <v-col cols="6"  id="CardChips">
        <v-chip id="chip">درجة رجال الأعمال</v-chip>
      </v-col>
      <v-col cols="6"  id="CardChips">
        <v-chip id="chip">الدرجة الأولى</v-chip>
      </v-col>
      
      <v-col cols="6"  id="CardChips">
        <v-chip id="chip">الدرجة السياحية المميزة</v-chip>
      </v-col>
      </v-chip-group>

    </v-card-text>
 </v-card>
</template>

        </v-list>
        
        <v-divider></v-divider>
        
        <v-list
          three-line
          subheader
        >
        
          <v-subheader id="text">المسافرون</v-subheader>
       <v-card >
       
            <v-card-text >
 
    <v-list    
>
    
      <v-list-item
        v-for="item in items"
        :key="item.title"
          id="it"
       > 



  <v-spacer></v-spacer>
 
        <v-list-item-avatar>
           {{ item.tit }}
        </v-list-item-avatar>
      </v-list-item>
 <div id="AllListicon">    
       <div id="Listicon">
        <v-btn
          class="mx-5"
          color="primary"
          @click="messages1++"
        >
          <v-icon large>
          mdi-plus
          </v-icon>
        </v-btn>
      <v-badge
        :content="messages1"
        :value="messages1"
        color="red"
        overlap
        
      >
          <b> 0 </b>
       </v-badge>
        <v-btn
          class="mx-3"
          color="error"
          @click="messages1--"
        >
           <v-icon large>
          mdi-minus
          </v-icon>
        </v-btn>
      </div>
        
      
        <div id="Listicon">
        <v-btn
          class="mx-5"
          color="primary"
          @click="messages2++"
        >
          <v-icon large>
          mdi-plus
          </v-icon>
        </v-btn>
      <v-badge
        :content="messages2"
        :value="messages2"
        color="red"
        overlap
        
      >
          <b> 0 </b>
       </v-badge>
        <v-btn
          class="mx-3"
          color="error"
          @click="messages2--"
        >
           <v-icon large>
          mdi-minus
          </v-icon>
        </v-btn>
      </div> <div id="Listicon">
        <v-btn
          class="mx-5"
          color="primary"
          @click="messages3++"
        >
          <v-icon large>
          mdi-plus
          </v-icon>
        </v-btn>
      <v-badge
        :content="messages3"
        :value="messages3"
        color="red"
        overlap
        
      >
          <b> 0 </b>
       </v-badge>
        <v-btn
          class="mx-3"
          color="error"
          @click="messages3--"
        >
           <v-icon large>
          mdi-minus
          </v-icon>
        </v-btn>
      </div> 
      <div id="Listicon">
        <v-btn
          class="mx-5"
          color="primary"
          @click="messages4++"
        >
          <v-icon large>
          mdi-plus
          </v-icon>
        </v-btn>
      <v-badge
        :content="messages4"
        :value="messages4"
        color="red"
        overlap
        
      >
          <b> 0 </b>
       </v-badge>
        <v-btn
          class="mx-3"
          color="error"
          @click="messages4--"
        >
           <v-icon large>
          mdi-minus
          </v-icon>
        </v-btn>
        
      </div>  
      </div>
                </v-list>

    </v-card-text>
    
 </v-card>
           <v-col cols="12">
            <v-btn block color="primary">
        تأكيد
    </v-btn>
            </v-col>
        </v-list>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>

  export default {
        name: 'Flights',
        data () {
      return {
        dialog: false,
                messages1: 0,
                messages2: 0,
                messages3: 0,
                messages4: 0,

        items: [
          { icon: true,  tit:'بالغ' },
          { tit:'طفل' },
          { tit:'رضيع'},
          { tit:'مسن'},
        ],
       
      }
    },

 
}
</script>

<style scoped>

.v-application .deep-purple.accent-4 {
    background-color: #53225c !important;
    height: 0px;
    padding: 1.5%;

}

.v-chip.v-size--default {
    border-radius: 16px;
    font-size: 14px;
    height: 65px;
    width: 60%;
}

.v-chip.v-size--default[data-v-44ccfafa] {
    border-radius: 16px;
    font-size: 14px;
    height: 65px;
    width: 60%;
    left: -62%;
 }
.v-chip .v-chip__content {
    align-items: center;
    display: inline-flex;
    height: 100%;
     max-width: 100%;
}
#chip{
    justify-content: center;
    font-size:120%;
}
#text{
font-size:170%;
font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
direction: rtl;
}
#ListItem{
width: 7%;
direction:rtl;
font-size:170%;
display: block;
left:90%;
}
#Listicon{
direction:rtl;
display: block;
position:relative;
top:53%;
width:15%;
margin-bottom:5%;
}
.v-list--three-line .v-list-item, .v-list-item--three-line {
    min-height: 88px;
    width: 10%;
    left:90%;
  }

  #CardChips{
    position: relative;
    left: 36%;
  } 
   #AllListicon{
   
       top:1%;
      width:90%;
      position: absolute;
    }
</style>