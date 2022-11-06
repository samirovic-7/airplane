<template>
<div>
       

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
  elevation="31"
v-bind="attrs"
          v-on="on"
  >
    <v-img
        src="../assets/dubai.jpeg"
      id="imgOffers"
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
          color="pink darken-3"
        >        <h3 id="h33" style="color:white" >عروض دبى</h3>

          <v-btn
            icon
            dark
            @click="dialog1 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
           
        </v-toolbar>
        <div id="allCont">
          <div id="ImgCont1"><img src="../assets/dubai.jpeg" id="ImageCont1"></div>
          <div id="PCont"><p>عروض السفر إلى دبي</p><br><h2>اضغط لنسخ الكود <span id="codeText">DXB10</span></h2></div>
          <div id="TermsCont">
           <h2>الشروط والأحكام:</h2><br>
            <ol>
                <li>10% نقاط في المحفظة لكل حجز فنادق في دبي بالكود DXB10</li>
                <li>5% نقاط في المحفظة لكل حجز طيران إلى دبي بالكود DXB5</li>
                <li>لا يوجد حد أقصى للخصم.</li>
                <li>النقاط صالحة للاستخدام لتاريخ  30 يونيو 2022.</li>
                <li>للحصول على النقاط عليك أن تكون مسجلاً بالإيميل عند الحجز.</li>
                <li>يسري العرض على حجوزات الطيران والفنادق التي تتم عبر تطبيق وموقع المطار.</li>
                <li>فترة العرض: لغاية 28 فبراير 2022.</li>
                <li>فترة السفر: مفتوحة بدون حد.</li>
                <li>فترة الإقامة: مفتوحة بدون حد.</li>
                <li>تعتمد جميع الأسعار على مدى توفرها في وقت الحجز.</li>
                <li>يعتمد الحجز على مدى توافر الغرف في الفندق.</li>
                <li>لا يمكن دمج هذا العرض مع أي عرض آخر.</li>
                <li>لا يمكن استبدال النقاط إلى نقد مالي بأي حال من الأحوال</li>
                <li>إن هذا العرض موجه للأفراد والعوائل، ولا يحق لوكالات السفر أو الشركات أو المؤسسات أو الأفراد الذين يقومون بالحجز بالنيابة باستخدام هذا العرض.</li>
                <li>يحق لتطبيق المطار إلغاء النقاط أو إقفال الحساب لأي جهة يتبين أنها تسعى للتحايل أو الربح الغير شرعي.</li>
            </ol>
          </div>
                      <div id="ImgCont2"><img src="../assets/offer_one.png"   id="ImageCont2"></div>
                      <div id="ImgCont2"><img src="../assets/offer_two.png"   id="ImageCont2"></div>
            <div id="ImgCont2"><img src="../assets/offer_three.png"   id="ImageCont2"></div>
            
          </div>
           <div id="btnsearch">
            <v-col cols="12" >
               <v-btn block color="pink darken-3" rounded  id="btnsearch">
                      بحث
                    </v-btn>
            </v-col>
 
</div>
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
     id="imgOffers"
     src="../assets/bahreen.jpeg"
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
          color="pink darken-3"
        >        <h3 id="h33" style="color:white" >عروض البحرين</h3>

          <v-btn
            icon
            dark
            @click="dialog1 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
           
        </v-toolbar>
        <div id="allCont">
          <div id="ImgCont1"><img src="../assets/dubai.jpeg" id="ImageCont1"></div>
          <div id="PCont"><p>عروض السفر إلى البحرين</p><br><h2>اضغط لنسخ الكود <span id="codeText">DXB10</span></h2></div>
          <div id="TermsCont">
           <h2>الشروط والأحكام:</h2><br>
            <ol>
                <li>10% نقاط في المحفظة لكل حجز فنادق في دبي بالكود DXB10</li>
                <li>5% نقاط في المحفظة لكل حجز طيران إلى دبي بالكود DXB5</li>
                <li>لا يوجد حد أقصى للخصم.</li>
                <li>النقاط صالحة للاستخدام لتاريخ  30 يونيو 2022.</li>
                <li>للحصول على النقاط عليك أن تكون مسجلاً بالإيميل عند الحجز.</li>
                <li>يسري العرض على حجوزات الطيران والفنادق التي تتم عبر تطبيق وموقع المطار.</li>
                <li>فترة العرض: لغاية 28 فبراير 2022.</li>
                <li>فترة السفر: مفتوحة بدون حد.</li>
                <li>فترة الإقامة: مفتوحة بدون حد.</li>
                <li>تعتمد جميع الأسعار على مدى توفرها في وقت الحجز.</li>
                <li>يعتمد الحجز على مدى توافر الغرف في الفندق.</li>
                <li>لا يمكن دمج هذا العرض مع أي عرض آخر.</li>
                <li>لا يمكن استبدال النقاط إلى نقد مالي بأي حال من الأحوال</li>
                <li>إن هذا العرض موجه للأفراد والعوائل، ولا يحق لوكالات السفر أو الشركات أو المؤسسات أو الأفراد الذين يقومون بالحجز بالنيابة باستخدام هذا العرض.</li>
                <li>يحق لتطبيق المطار إلغاء النقاط أو إقفال الحساب لأي جهة يتبين أنها تسعى للتحايل أو الربح الغير شرعي.</li>
            </ol>
          </div>
                      <div id="ImgCont2"><img src="../assets/offer_one.png"   id="ImageCont2"></div>
                      <div id="ImgCont2"><img src="../assets/offer_two.png"   id="ImageCont2"></div>
            <div id="ImgCont2"><img src="../assets/offer_three.png"   id="ImageCont2"></div>
            
          </div>
           <div id="btnsearch">
            <v-col cols="12" >
               <v-btn block color="pink darken-3" rounded  id="btnsearch">
                      بحث
                    </v-btn>
            </v-col>
 
</div>
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
   
     id="imgOffers"
     src="../assets/special.jpeg"
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
          color="pink darken-3"
        >        <h3 id="h33" style="color:white" >عروض شرم الشيخ</h3>

          <v-btn
            icon
            dark
            @click="dialog1 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
           
        </v-toolbar>
        <div id="allCont">
          <div id="ImgCont1"><img src="../assets/dubai.jpeg" id="ImageCont1"></div>
          <div id="PCont"><p>عروض السفر إلى شرم الشيخ</p><br><h2>اضغط لنسخ الكود <span id="codeText">DXB10</span></h2></div>
          <div id="TermsCont">
           <h2>الشروط والأحكام:</h2><br>
            <ol>
                <li>10% نقاط في المحفظة لكل حجز فنادق في دبي بالكود DXB10</li>
                <li>5% نقاط في المحفظة لكل حجز طيران إلى دبي بالكود DXB5</li>
                <li>لا يوجد حد أقصى للخصم.</li>
                <li>النقاط صالحة للاستخدام لتاريخ  30 يونيو 2022.</li>
                <li>للحصول على النقاط عليك أن تكون مسجلاً بالإيميل عند الحجز.</li>
                <li>يسري العرض على حجوزات الطيران والفنادق التي تتم عبر تطبيق وموقع المطار.</li>
                <li>فترة العرض: لغاية 28 فبراير 2022.</li>
                <li>فترة السفر: مفتوحة بدون حد.</li>
                <li>فترة الإقامة: مفتوحة بدون حد.</li>
                <li>تعتمد جميع الأسعار على مدى توفرها في وقت الحجز.</li>
                <li>يعتمد الحجز على مدى توافر الغرف في الفندق.</li>
                <li>لا يمكن دمج هذا العرض مع أي عرض آخر.</li>
                <li>لا يمكن استبدال النقاط إلى نقد مالي بأي حال من الأحوال</li>
                <li>إن هذا العرض موجه للأفراد والعوائل، ولا يحق لوكالات السفر أو الشركات أو المؤسسات أو الأفراد الذين يقومون بالحجز بالنيابة باستخدام هذا العرض.</li>
                <li>يحق لتطبيق المطار إلغاء النقاط أو إقفال الحساب لأي جهة يتبين أنها تسعى للتحايل أو الربح الغير شرعي.</li>
            </ol>
          </div>
                      <div id="ImgCont2"><img src="../assets/offer_one.png"   id="ImageCont2"></div>
                      <div id="ImgCont2"><img src="../assets/offer_two.png"   id="ImageCont2"></div>
            <div id="ImgCont2"><img src="../assets/offer_three.png"   id="ImageCont2"></div>
            
          </div>
           <div id="btnsearch">
            <v-col cols="12" >
               <v-btn block color="pink darken-3" rounded  id="btnsearch">
                      بحث
                    </v-btn>
            </v-col>
 
</div>
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
     id="imgOffers"
     src="../assets/bestsale.jpeg"
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
          color="pink darken-3"
        >        <h3 id="h33" style="color:white" >عروض قطر</h3>

          <v-btn
            icon
            dark
            @click="dialog1 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
           
        </v-toolbar>
        <div id="allCont">
          <div id="ImgCont1"><img src="../assets/dubai.jpeg" id="ImageCont1"></div>
          <div id="PCont"><p>عروض السفر إلى قطر</p><br><h2>اضغط لنسخ الكود <span id="codeText">DXB10</span></h2></div>
          <div id="TermsCont">
           <h2>الشروط والأحكام:</h2><br>
            <ol>
                <li>10% نقاط في المحفظة لكل حجز فنادق في دبي بالكود DXB10</li>
                <li>5% نقاط في المحفظة لكل حجز طيران إلى دبي بالكود DXB5</li>
                <li>لا يوجد حد أقصى للخصم.</li>
                <li>النقاط صالحة للاستخدام لتاريخ  30 يونيو 2022.</li>
                <li>للحصول على النقاط عليك أن تكون مسجلاً بالإيميل عند الحجز.</li>
                <li>يسري العرض على حجوزات الطيران والفنادق التي تتم عبر تطبيق وموقع المطار.</li>
                <li>فترة العرض: لغاية 28 فبراير 2022.</li>
                <li>فترة السفر: مفتوحة بدون حد.</li>
                <li>فترة الإقامة: مفتوحة بدون حد.</li>
                <li>تعتمد جميع الأسعار على مدى توفرها في وقت الحجز.</li>
                <li>يعتمد الحجز على مدى توافر الغرف في الفندق.</li>
                <li>لا يمكن دمج هذا العرض مع أي عرض آخر.</li>
                <li>لا يمكن استبدال النقاط إلى نقد مالي بأي حال من الأحوال</li>
                <li>إن هذا العرض موجه للأفراد والعوائل، ولا يحق لوكالات السفر أو الشركات أو المؤسسات أو الأفراد الذين يقومون بالحجز بالنيابة باستخدام هذا العرض.</li>
                <li>يحق لتطبيق المطار إلغاء النقاط أو إقفال الحساب لأي جهة يتبين أنها تسعى للتحايل أو الربح الغير شرعي.</li>
            </ol>
          </div>
                      <div id="ImgCont2"><img src="../assets/offer_one.png"   id="ImageCont2"></div>
                      <div id="ImgCont2"><img src="../assets/offer_two.png"   id="ImageCont2"></div>
            <div id="ImgCont2"><img src="../assets/offer_three.png"   id="ImageCont2"></div>
            
          </div>
           <div id="btnsearch">
            <v-col cols="12" >
               <v-btn block color="pink darken-3" rounded  id="btnsearch">
                      بحث
                    </v-btn>
            </v-col>
 
</div>
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
    
     id="imgOffers"
     src="../assets/wallet.jpeg"
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
          color="pink darken-3"
        >        <h3 id="h33" style="color:white" >عروض الرياض</h3>

          <v-btn
            icon
            dark
            @click="dialog1 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
           
        </v-toolbar>
        <div id="allCont">
          <div id="ImgCont1"><img src="../assets/dubai.jpeg" id="ImageCont1"></div>
          <div id="PCont"><p>عروض السفر إلى الرياض</p><br><h2>اضغط لنسخ الكود <span id="codeText">DXB10</span></h2></div>
          <div id="TermsCont">
           <h2>الشروط والأحكام:</h2><br>
            <ol>
                <li>10% نقاط في المحفظة لكل حجز فنادق في دبي بالكود DXB10</li>
                <li>5% نقاط في المحفظة لكل حجز طيران إلى دبي بالكود DXB5</li>
                <li>لا يوجد حد أقصى للخصم.</li>
                <li>النقاط صالحة للاستخدام لتاريخ  30 يونيو 2022.</li>
                <li>للحصول على النقاط عليك أن تكون مسجلاً بالإيميل عند الحجز.</li>
                <li>يسري العرض على حجوزات الطيران والفنادق التي تتم عبر تطبيق وموقع المطار.</li>
                <li>فترة العرض: لغاية 28 فبراير 2022.</li>
                <li>فترة السفر: مفتوحة بدون حد.</li>
                <li>فترة الإقامة: مفتوحة بدون حد.</li>
                <li>تعتمد جميع الأسعار على مدى توفرها في وقت الحجز.</li>
                <li>يعتمد الحجز على مدى توافر الغرف في الفندق.</li>
                <li>لا يمكن دمج هذا العرض مع أي عرض آخر.</li>
                <li>لا يمكن استبدال النقاط إلى نقد مالي بأي حال من الأحوال</li>
                <li>إن هذا العرض موجه للأفراد والعوائل، ولا يحق لوكالات السفر أو الشركات أو المؤسسات أو الأفراد الذين يقومون بالحجز بالنيابة باستخدام هذا العرض.</li>
                <li>يحق لتطبيق المطار إلغاء النقاط أو إقفال الحساب لأي جهة يتبين أنها تسعى للتحايل أو الربح الغير شرعي.</li>
            </ol>
          </div>
                      <div id="ImgCont2"><img src="../assets/offer_one.png"   id="ImageCont2"></div>
                      <div id="ImgCont2"><img src="../assets/offer_two.png"   id="ImageCont2"></div>
            <div id="ImgCont2"><img src="../assets/offer_three.png"   id="ImageCont2"></div>
            
          </div>
           <div id="btnsearch">
            <v-col cols="12" >
               <v-btn block color="pink darken-3" rounded  id="btnsearch">
                      بحث
                    </v-btn>
            </v-col>
 
</div>
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
     id="imgOffers"
     src="../assets/special.jpeg"
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
          color="pink darken-3"
        >        <h3 id="h33" style="color:white" >عروض المغرب</h3>

          <v-btn
            icon
            dark
            @click="dialog1 = false"
          >
            <v-icon>mdi-close</v-icon>
          </v-btn>
           
        </v-toolbar>
        <div id="allCont">
          <div id="ImgCont1"><img src="../assets/dubai.jpeg" id="ImageCont1"></div>
          <div id="PCont"><p>عروض السفر إلى المغرب</p><br><h2>اضغط لنسخ الكود <span id="codeText">DXB10</span></h2></div>
          <div id="TermsCont">
           <h2>الشروط والأحكام:</h2><br>
            <ol>
                <li>10% نقاط في المحفظة لكل حجز فنادق في دبي بالكود DXB10</li>
                <li>5% نقاط في المحفظة لكل حجز طيران إلى دبي بالكود DXB5</li>
                <li>لا يوجد حد أقصى للخصم.</li>
                <li>النقاط صالحة للاستخدام لتاريخ  30 يونيو 2022.</li>
                <li>للحصول على النقاط عليك أن تكون مسجلاً بالإيميل عند الحجز.</li>
                <li>يسري العرض على حجوزات الطيران والفنادق التي تتم عبر تطبيق وموقع المطار.</li>
                <li>فترة العرض: لغاية 28 فبراير 2022.</li>
                <li>فترة السفر: مفتوحة بدون حد.</li>
                <li>فترة الإقامة: مفتوحة بدون حد.</li>
                <li>تعتمد جميع الأسعار على مدى توفرها في وقت الحجز.</li>
                <li>يعتمد الحجز على مدى توافر الغرف في الفندق.</li>
                <li>لا يمكن دمج هذا العرض مع أي عرض آخر.</li>
                <li>لا يمكن استبدال النقاط إلى نقد مالي بأي حال من الأحوال</li>
                <li>إن هذا العرض موجه للأفراد والعوائل، ولا يحق لوكالات السفر أو الشركات أو المؤسسات أو الأفراد الذين يقومون بالحجز بالنيابة باستخدام هذا العرض.</li>
                <li>يحق لتطبيق المطار إلغاء النقاط أو إقفال الحساب لأي جهة يتبين أنها تسعى للتحايل أو الربح الغير شرعي.</li>
            </ol>
          </div>
                      <div id="ImgCont2"><img src="../assets/offer_one.png"   id="ImageCont2"></div>
                      <div id="ImgCont2"><img src="../assets/offer_two.png"   id="ImageCont2"></div>
            <div id="ImgCont2"><img src="../assets/offer_three.png"   id="ImageCont2"></div>
            
          </div>
           <div id="btnsearch">
            <v-col cols="12" >
               <v-btn block color="pink darken-3" rounded  id="btnsearch">
                      بحث
                    </v-btn>
            </v-col>
 
</div>
       </v-card>
    </v-dialog>
    
    
  </div>
  
   
  
  </div>
</template>

<style scoped>

#h3{
padding:2%;
text-align:center;
box-shadow:0px 0px 23px 5px;
margin-bottom:1%;
font-size:150%;
}
#h33{
    padding: 2%;
    font-size: 150%;
    position: absolute;
    left: 41%;
    color: black;
}
#dialog{
margin:1% 0;
}
#textbottom{
font-size:160%;
font-family: 'Times New Roman', Times, serif;

text-align:center;
}
#allCont{
width: 98%;
 margin:auto;
display: flex;
flex-wrap: wrap;
justify-content:space-around;
align-content: space-around;
}
#ImgCont1{
width: 90%;
height:25%;
margin:2% auto;
}
#ImageCont1{
width: 90%;
height: 100%;
background-position: center;
background-size: cover;

}
#PCont{
width: 87%;
height: 7%;
border-radius:20px;
box-shadow:0px 0px 8px 1px gray;
direction: rtl;
padding:3%;
margin:2% auto;
}
#TermsCont{
direction: rtl;
font-size:120%;
}
#TermsCont{
width: 95%;
box-shadow:0px 0px 8px 1px gray;
border-radius:20px;
padding: 1% 6%;
margin:2% auto;

}
#ImgCont2{
width: 90%;
height:25%;
margin:1% auto;

}
#ImageCont2{

width: 90%;
height: 100%;
background-position: center;
background-size: cover;
}
#btnsearch{
color:white;
font-size:120%;
}
#codeText{
padding:1%;
background-color:rgb(199, 64, 116)
}
#imgOffers{
background-position: center;
background-size: cover;
height: 200px;

}
</style>


<script>
  export default {
    name: 'Offers',
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