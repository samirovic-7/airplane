<template>
    <v-card>
  
      <v-card-title class="pa-2 purple darken-3">
         
        <h3 class="text-h6 font-weight-light text-center grow" style="color:white">
         الصفحه الشخصيه
        </h3>
        <v-avatar>
          <v-img src="https://avataaars.io/?avatarStyle=Circle&topType=LongHairStraight&accessoriesType=Blank&hairColor=BrownDark&facialHairType=Blank&clotheType=BlazerShirt&eyeType=Default&eyebrowType=Default&mouthType=Default&skinColor=Light"></v-img>
        </v-avatar>
      </v-card-title>
  <div>
          <div id="PCont">
          
         <template>
  <v-row justify="center">
    <v-dialog
      v-model="wow"
      fullscreen
      hide-overlay
      transition="dialog-bottom-transition"
    >
      <template v-slot:activator="{ on, attrs }">
        <div id="IconEdit"   v-bind="attrs" v-on="on">   
            <v-avatar size="36px">
                  <v-icon>mdi-account-edit</v-icon>
                </v-avatar>
          </div>
      </template>
      <v-card>
        <v-toolbar
           color="purple darken-3"
        >
                    <h3 id="h33" style="color:white">حجز الرحلة</h3>

        </v-toolbar>
        
  <v-form  id="contentSign">

    <div id="contentInsideSign">
       <div id="contentInsideSign">

       <v-file-input
    :rules="rules"
    accept="image/png, image/jpeg, image/bmp"
    placeholder="تعديل صورة البروفايل"
    prepend-icon="mdi-camera"
    label="تعديل صورة البروفايل"
  ></v-file-input>
    
    </div>
      <v-col
          md="6"
          sm="6"
        >
              <v-text-field
             label="الاسم الأخير"
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
             label="الأسم الأول"
            outlined
              filled
            rounded
            type="mail"
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
            label="العنوان"
            outlined
              filled
            rounded
            ></v-text-field>
 
   
    
    </div>
    
        <v-col
          md="6"
          sm="6"
        >
              <v-text-field
             label="كود البلد"
            outlined
              filled
            rounded
            type="number"
          ></v-text-field>
        </v-col>
  
        <v-col
          md="6"
          sm="6"
        >
              <v-text-field
             label="رقم الهاتف "
            outlined
              filled
            rounded
            type="number"
          ></v-text-field>
        </v-col>
  
       
     
    <div id="contentInsideSign">
  <div id="btnlog">
            <v-col cols="12" >
               <v-btn block color="gray" rounded >
حفظ
                 </v-btn>
            </v-col>
 
</div>
    </div>
 </v-form>
 

       </v-card> 
    </v-dialog>
  </v-row>
</template>
          <h2>mohamed</h2>
          <h3>mohamedsamirovich@gmail.com</h3>
          <p>مصر</p><br>
          <h2>تحتاج الي 1000 نقطة لتكون عميل برايم</h2><br>
            <v-progress-linear
            id="progress"
                   value="45"
                   height="30"
                   color="purple darken-4"
    >
        <template v-slot:default="{ value }">
        <strong>{{ Math.ceil(value) }}%</strong>
      </template>
    </v-progress-linear>

          </div>
  </div>
     <v-container fluid class="white" id="coo">
    <v-row justify="center">
      <v-subheader>Today</v-subheader>
       <v-expansion-panels popout>
        <v-expansion-panel
          hide-actions
        >
          <v-expansion-panel-header>
            <v-row
              align="center"
              class="spacer"
              no-gutters
            >
              <v-col
                cols="4"
                sm="2"
                md="1"
              >
                <v-avatar
                  size="36px"
                >
          
                  <v-icon
                     color= "red"
                  >mdi-heart</v-icon>
                </v-avatar>
              </v-col>

              <v-col
                class="hidden-xs-only"
                sm="5"
                md="3"
              >
                <strong >المفضلات</strong>
                <span
                   class="grey--text"
                >
                  &nbsp;(3)
                </span>
              </v-col>

               
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>
            <div id="divbtn">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, temporibus!</p>
   
    
<v-btn id="btn" >
      <a href="/fav" id="btnA">دخول</a>

     
    </v-btn>  
    </div>   
            
           </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel
          hide-actions
        >
          <v-expansion-panel-header>
            <v-row
              align="center"
              class="spacer"
              no-gutters
            >
              <v-col
                cols="4"
                sm="2"
                md="1"
              >
                <v-avatar
                  size="36px"
                >
          
                  <v-icon
                   >mdi-calendar-check-outline</v-icon>
                </v-avatar>
              </v-col>

              <v-col
                class="hidden-xs-only"
                sm="5"
                md="3"
              >
                <strong >الوثيقة</strong>
                <span
                   class="grey--text"
                >
                  &nbsp;(6)
                </span>
              </v-col>

               
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content> 
            <v-divider></v-divider>
            <div id="divbtn">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, temporibus!</p>
   
    
<v-btn id="btn" >
      <a href="/document" id="btnA">دخول</a>

     
    </v-btn>  
    </div>   
            
           </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel
          hide-actions
        >
          <v-expansion-panel-header>
            <v-row
              align="center"
              class="spacer"
              no-gutters
            >
              <v-col
                cols="4"
                sm="2"
                md="1"
              >
                <v-avatar
                  size="36px"
                >
          
                  <v-icon
                  >mdi-magnify</v-icon>
                </v-avatar>
              </v-col>

              <v-col
                class="hidden-xs-only"
                sm="5"
                md="3"
              >
                <strong >سجل البحث</strong>
                <span
                   class="grey--text"
                >
                  &nbsp;(7)
                </span>
              </v-col>

               
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>
            <div id="divbtn">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, temporibus!</p>
   
    
<v-btn id="btn" >
      <a href="/search" id="btnA">دخول</a>

     
    </v-btn>  
    </div>   
            
           </v-expansion-panel-content>
        </v-expansion-panel>
        
        <v-expansion-panel
          hide-actions
        >
          <v-expansion-panel-header>
            <v-row
              align="center"
              class="spacer"
              no-gutters
            >
              <v-col
                cols="4"
                sm="2"
                md="1"
              >
                <v-avatar
                  size="36px"
                >
          
                  <v-icon
                  >mdi-wallet</v-icon>
                </v-avatar>
              </v-col>

              <v-col
                class="hidden-xs-only"
                sm="5"
                md="3"
              >
                <strong >المحفظة</strong>
                 
              </v-col>

               
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>
            <div id="divbtn">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, temporibus!</p>
   
    
<v-btn id="btn" >
      <a href="/wallet" id="btnA">دخول</a>

     
    </v-btn>  
    </div>   
            
           </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel
          hide-actions
        >
          <v-expansion-panel-header>
            <v-row
              align="center"
              class="spacer"
              no-gutters
            >
              <v-col
                cols="4"
                sm="2"
                md="1"
              >
                <v-avatar
                  size="36px"
                >
          
                  <v-icon
                  >mdi-gift</v-icon>
                </v-avatar>
              </v-col>

              <v-col
                class="hidden-xs-only"
                sm="5"
                md="3"
              >
                <strong >مركز الهدايا</strong>
                 <span
                   class="grey--text"
                >
                  &nbsp;(13)
                </span>
              </v-col>

               
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>
            <div id="divbtn">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, temporibus!</p>
   
    
<v-btn id="btn" >
      <a href="/gift" id="btnA">دخول</a>

     
    </v-btn>  
    </div>   
            
           </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel
          hide-actions
        >
          <v-expansion-panel-header>
            <v-row
              align="center"
              class="spacer"
              no-gutters
            >
              <v-col
                cols="4"
                sm="2"
                md="1"
              >
                <v-avatar
                  size="36px"
                >
          
                  <v-icon
                  >mdi-lock-question</v-icon>
                </v-avatar>
              </v-col>

              <v-col
                class="hidden-xs-only"
                sm="5"
                md="3"
              >
                <strong >تغير كلمه المرور</strong>
                 
              </v-col>

               
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>
            <div id="divbtn">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex, temporibus!</p>
   
    
<v-btn id="btn" >
      <a href="/pass" id="btnA">دخول</a>

     
    </v-btn>  
    </div>   
            
           </v-expansion-panel-content>
        </v-expansion-panel>

        <v-expansion-panel
          hide-actions
        >
          <v-expansion-panel-header>
            <v-row
              align="center"
              class="spacer"
              no-gutters
            >
              <v-col
                cols="4"
                sm="2"
                md="1"
              >
                <v-avatar
                  size="36px"
                >
          
                  <v-icon
                  >mdi-logout</v-icon>
                </v-avatar>
              </v-col>

              <v-col
                class="hidden-xs-only"
                sm="5"
                md="3"
              >
                <strong >خروج</strong>
                 
              </v-col>

               
            </v-row>
          </v-expansion-panel-header>

          <v-expansion-panel-content>
            <v-divider></v-divider>
            <div id="divbtn">
    
    
<v-btn id="BTN" >
 خروج
     
    </v-btn>  
    </div>   
            
           </v-expansion-panel-content>
        </v-expansion-panel>

      </v-expansion-panels> 
    </v-row>
  </v-container>
  </v-card>
</template>
<style scoped>
#coo{
    direction: rtl;
 }
 
#PCont{
width: 87%;
height: 7%;
border-radius:20px;
box-shadow:0px 0px 100px 0px gray;
direction: rtl;
padding:3%;
margin:auto;
position: relative;
top:40px;
text-align: center;
}
#progress{
color:white;
}
#divbtn{
display:flex;
justify-content:space-between;
align-content: space-around;
flex-wrap:wrap;
 margin:1% .5% 1% .5%;
padding:.5%;
}
#btn{ 
 padding:1.5%;
 
  }
#BTN{ 
 padding:1.5%;
 margin:auto;
 }
#btnA{
color: black;
text-decoration: none;
font-size: 120%;
font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
}
#IconEdit{
 cursor: pointer;
box-shadow:3px 3px 5px 2px black; 
border-radius:10px;
position: absolute;
right:3%;
top:10%
}
#h33{
    padding: 2%;
     font-size: 160%;
    position: absolute;
    left: 41%;
    color: black;
}

#btnlog{
width: 90%;
margin:auto;
   }
#contentInsideSign{
 width: 100%;
 padding:1%;
 display:flex;
flex-wrap:wrap;
justify-content:space-between;
align-content: space-between;
 }
 #contentSign{
 position: relative;
margin:auto;
width:90%;
margin-top:3%;
border-radius:15px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
align-content: space-between;
background:rgba(245, 245, 245,.9);
border-radius:25px;
 }
</style>

<script>
  export default {
      data() {

          return {
            dialog2:false,
            wow:false,

            }
            
 
},
    data: () => ({
       rules: [
        value => !value || value.size < 2000000 || 'Avatar size should be less than 2 MB!',
      ],
      messages: [
        {
            icon: 'mdi-heart',
           name: 'الوثيقة',
          },
        {
          color: 'red',
          icon: 'mdi-heart',
          name: 'المفضلات',
           total: 3,
          },
        {
          color: 'teal',
          icon: 'mdi-search',
          name: 'سجل البحث',
           total: 4,
          },{

             icon: 'mdi-account-multiple',
           name: 'مركز الهدايا ',
          },
        {
          color: 'red',
          icon: 'mdi-account-multiple',
          name: 'محفظتى',
           total: 3,
         },
        {
          color: 'teal',
          icon: 'mdi-tag',
          name: 'تغير كلمه المرور',
           total: 4,
         },
        {
          color: 'teal',
          icon: 'mdi-tag',
          name: 'خروج',
           total: 4,
         },
      ],
    }),
  }
</script>