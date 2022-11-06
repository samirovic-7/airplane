 
<template>
<div id="direction">
        <h3 id="h2" >المزيد</h3>

<div >
  <v-row justify="center" >
    <v-expansion-panels  focusable >
      <v-expansion-panel
         
      >
        <v-expansion-panel-header>تغيير العملة</v-expansion-panel-header>
        <v-expansion-panel-content id="TextPanal">

            يمكنك تغير عملتك الى العملة اللى تريدها والتعامل بعنا بكافة الأشكال التى تريدها
          <v-row justify="end">
    <v-dialog
      v-model="dialog1"
      fullscreen
      hide-overlay.0 
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          قائمة العملات
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
        </v-toolbar>
          <div id="money">
       <v-col
            cols="12"
            sm="6"
            md="6"
          >
            <v-radio-group
              v-model="ex8"
              column
            >
              <v-radio
                label="جنية مصرى"
                color="primary"
                value="primary"
                direction="ltr"
              > </v-radio>
               <v-radio
                label="ريال سعودي"
                color="secondary"
                value="secondary"
              ></v-radio>
              <v-radio
                label="درهم ماراتي"
                color="success"
                value="success"
              ></v-radio>
              <v-radio
                label="يورو"
                color="info"
                value="info"
              ></v-radio>
              <v-radio
                label="الدينار الكويتي"
                color="warning"
                value="warning"
              ></v-radio>
              <v-radio
                label="دولار"
                color="error"
                value="error"
              ></v-radio>
              <v-radio
                label="ريال قطري"
                color="primary"
                value="primary1"
              ></v-radio>
              <v-radio
                label="دينار بحريني"
                color="secondary"
                value="secondary1"
              ></v-radio>
              <v-radio
                label="ريال عماني"
                color="success"
                value="success1"
              ></v-radio>
            </v-radio-group>
          </v-col>
          </div>
      </v-card>
    </v-dialog>
  </v-row>
        
        </v-expansion-panel-content>

        
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>

</div>

<div>

  <v-row justify="center">
    <v-expansion-panels  focusable  >
      <v-expansion-panel
         
      >
        <v-expansion-panel-header>أسئلة شائعة</v-expansion-panel-header>
        <v-expansion-panel-content id="TextPanal">

        بعض اهم الأسئلة المتوقعة التى من الممكن ان تتيائل حولها
              <v-row justify="end">
    <v-dialog
      v-model="dialog2"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          الأسئلة
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
            @click="dialog2 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
      
        </v-toolbar>
      </v-card>
    </v-dialog>
  </v-row>
        
        </v-expansion-panel-content>

        
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</div>

<div>

  <v-row justify="center">
    <v-expansion-panels  focusable  >
      <v-expansion-panel
         
      >
        <v-expansion-panel-header>الشروط والأحكام</v-expansion-panel-header>
        <v-expansion-panel-content id="TextPanal">

             الشروط والأحكام التى يجب ان تكون موافق عليها قبل البدأ فى التعامل معنا
          <v-row justify="end">
    <v-dialog
      v-model="dialog3"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          قائمة الشروط
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
      
        </v-toolbar>
      </v-card>
    </v-dialog>
  </v-row>
        
        </v-expansion-panel-content>

        
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</div>

<div>

  <v-row justify="center">
    <v-expansion-panels  focusable  >
      <v-expansion-panel
         
      >
        <v-expansion-panel-header>عن المطار</v-expansion-panel-header>
        <v-expansion-panel-content id="TextPanal">

            كل ما تريد معرفتة عن موقعنا 
          <v-row justify="end">
    <v-dialog
      v-model="dialog4"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          تعرف علينا
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
            @click="dialog4 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
      
        </v-toolbar>
      </v-card>
    </v-dialog>
  </v-row>
        
        </v-expansion-panel-content>

        
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</div>

<div>

  <v-row justify="center">
    <v-expansion-panels  focusable  >
      <v-expansion-panel
         
      >
        <v-expansion-panel-header> تواصل معنا</v-expansion-panel-header>
        <v-expansion-panel-content id="TextPanal">

            يمكنك التواصل معنا اذا كنت تريد الاستفسار عن اى شئ
          <v-row justify="end">
    <v-dialog
      v-model="dialog5"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          اتصل بنا
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
            @click="dialog5 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
      
        </v-toolbar>
      </v-card>
    </v-dialog>
  </v-row>
        
        </v-expansion-panel-content>

        
      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</div>

<div>

  <v-row justify="center">
    <v-expansion-panels  focusable  >
      <v-expansion-panel 
         id="lang"
      >
        <p><v-icon size="29">mdi-web </v-icon> اللغة</p>

      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</div>
 
<p  id="h4">Al Matar 2022</p>
</div>
</template>

<style scoped>

#direction{
 direction: rtl;
}

#h2{
padding:1%;
text-align:center;
box-shadow:0px 0px 23px 5px;
margin-bottom:1%;
font-size:150%;
}

#h4{
padding:2%;
text-align:center;
 margin-bottom:1%;
font-size:150%;
}

#TextPanal{
margin-top:1%;
font-size:120%;
}
#lang{
 padding:.5%;
} 
#paner{
display:flex;
justify-content: space-between;
align-content: space-between;
}
#money{
 
direction: rtl;
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