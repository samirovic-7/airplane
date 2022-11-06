
<template>
 <div id="direction">

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
          color="purple darken-4"
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
          color="purple darken-4"
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
            <div id="divcoin">
              <v-radio
                label=" جنية مصرى "
                color="primary"
                value="primary"
                direction="ltr"
              > </v-radio>
              <img id="coin">
              </div>
              <br>

              <div id="divcoin">
               <v-radio
                label="ريال سعودي"
                color="secondary"
                value="secondary"
              ></v-radio>
               <img id="coin">

              </div>
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
          color="lime darken-2"
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
          color="lime darken-2"
        >
          <v-btn
            icon
            dark
            @click="dialog2 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <Faq/>
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
          color="pink darken-3"
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
          color="pink darken-3"
        >
          <v-btn
            icon
            dark
            @click="dialog3 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
      
        </v-toolbar>
        <Terms/>
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
        <v-expansion-panel-header>معلومات عن  تى دا</v-expansion-panel-header>
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
          color="purple darken-4"
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
          color="purple darken-4"
        >
          <v-btn
            icon
            dark
            @click="dialog4 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
         </v-toolbar>
          <div id="about">
             <div id="aboutLogo"></div>
            <div id="aboutUs">
            <p>شركة المطار، هي شركة سعودية متخصصة في مجال السياحة والسفر، تعمل عبر منصاتها الالكترونية التي تشمل تطبيقات الهاتف المحمول وموقع الإنترنت. حيث نسعى لتقديم تجربة سفر ممتعة من خلال تسهيل عمليات الحجز وحفظ حقوق المسافرين.

ونسعى جاهدين لتقديم محتوى عربي، يتلاءم مع احتياجات السوق السعودية،</p>
            </div>
            <h2 id="h23">"نهدف إلى تقديم تجربة سفر سهلة، ممتعة ومليئة بالسعادة"</h2>
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
        <v-expansion-panel-header>السياسة والخصوصية </v-expansion-panel-header>
        <v-expansion-panel-content id="TextPanal">

             السياسات المتبعة من طرفنا لتأمين خصوصية بياناتك
          <v-row justify="end">
    <v-dialog
      v-model="dialog3"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="lime darken-2"
          dark
          v-bind="attrs"
          v-on="on"
        >
          الخصوصية
        </v-btn>
      </template>
      <v-card>
        <v-toolbar
          dark
          color="lime darken-2"
        >
          <v-btn
            icon
            dark
            @click="dialog3 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
      
        </v-toolbar>
        <privacy/>
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
          color="pink darken-3"
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
          color="pink darken-3"
        >
          <v-btn
            icon
            dark
            @click="dialog5 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
      
        </v-toolbar>
        <div id="contact">
            <div id="contactUs">
            <h2>دعم مستمر 24/7</h2>
            <br>
            <p>ملاحظاتك هامة لنا، شارك معنا تعليقاتك واقتراحاتك لتساعدنا علي تقديم أرقى مستويات الخدمة،</p>
                         <h2 id="h23">"نهدف إلى تقديم تجربة سفر سهلة، ممتعة ومليئة بالسعادة"</h2>

<v-row justify="space-around">
    <v-icon
      large
      color="green darken-2"
    >
      mdi-facebook
    </v-icon>

    <v-icon
      large
      color="blue darken-2"
    >
      mdi-whatsapp
    </v-icon>

    <v-icon
      large
      color="purple darken-2"
    >
      mdi-instagram
    </v-icon>

    <v-icon
      large
      color="teal darken-2"
    >
      mdi-email
    </v-icon>

    <v-icon
      large
      color="blue-grey darken-2"
    >
      mdi-linkedin
    </v-icon>

    <v-icon
      large
      color="orange darken-2"
    >
      mdi-twitter
    </v-icon>
  </v-row>
            </div>
  <div id="all">

  <v-form  id="contentSign">

    <div id="contentInsideSign">
      <v-col
          md="6"
          sm="6"
        >
              <v-text-field
             label="القسم"
            outlined
              filled
            rounded
           ></v-text-field>
        </v-col>

        <v-col
          md="6"
          sm="6"
        >
              <v-text-field
             label="الأسم "
            outlined
              filled
            rounded
            type="text"
          ></v-text-field>
        </v-col>
  
    </div>
     <div id="contentInsideSign">
       <v-text-field
             label="البريد الالكترونى"
            outlined
              filled
            rounded
            type="mail"
          ></v-text-field>
  
    </div>
     <div id="contentInsideSign">
       <v-text-field
             label="رقم التليفون"
            outlined
              filled
            rounded
            type="number"
          ></v-text-field>
  
    </div>
      <div id="contentInsideSign">

       
          <v-text-field
            label="الرسالة "
            outlined
              filled
            rounded
            type="text"
            ></v-text-field>
 
   
    
    </div>
             <v-col cols="12" >
               <v-btn block color="pink darken-3" rounded id="btng" >
                  ارسال
                 </v-btn>
            </v-col>
 
  </v-form>
 

 </div>
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
         id="lang"
      >
        <p><v-icon size="29">mdi-web </v-icon> اللغة</p>

      </v-expansion-panel>
    </v-expansion-panels>
  </v-row>
</div>
 
<p  id="h4">tda 2022</p>
 </div>
</template>

<style scoped>

#direction{
 direction: rtl;
 margin-top:2%;
background-image: url("../assets/gifs/8.gif");
background-size:cover;
background-position:center;
background-repeat:no-repeat;
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
#coin{
    width: 50px;
    height: 29px;
     position: absolute;
    top: 0%;
    right: 13%;
    background-image: url("../assets/cart3.jpg");
    background-size:cover;
    background-position:center;
}
#about{
    width: 80%;
    height: 353px;
    margin: 10% auto;
    box-shadow: 0px 0px 11px 1px gray;
    text-align: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-content: space-around;
    border-radius: 30px;
    padding: 1%;
}

#contact{
    width: 80%;
    height: 220px;
    margin: 3% auto;
    box-shadow: 0px 0px 11px 1px gray;
    text-align: center;
  
    border-radius: 30px;
    padding: 1%;
}
#aboutLogo{
width: 10%;
height: 40%;
box-shadow:0px 0px 4px 1px;
background-image: url("../assets/one.png");
background-size:contain;
background-position: center;
border-radius:30px;
}
#all{
width: 100%;
 height: 100%;
}
 
#contentSign{
 position: relative;
margin:auto;
width:90%;
height:290px;
top:25%;
border-radius:15px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
align-content: space-between;
 }
#contentInsideSign{
 width: 100%;
height:30%;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
align-content: space-between;
 }
#contentCheck{
 width: 100%;
height:15%;
display:flex;
flex-wrap:wrap;
justify-content:flex-end;
align-content: space-between;
  }
  #contentCheck1{
   height:100%;
  margin-right:1%;
  padding-top:1.5%;
  }
#btng{
color: white;
font-size: 140%;
} 
 
</style>

<script>
 import Faq from"./Faq";
 import privacy from"./privacy";
 import Terms from"./Terms";

  export default {
    name: 'Setting',
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
    
     components: {
   Faq,
   privacy,
   Terms,
 
  }
  }
</script>