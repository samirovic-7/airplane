<template>
<div id="all">
<div id="contentLogo">
</div>

<p id="contenttext">! دعنا نريك العالم</p>

  <v-form  id="contentSign">

    <div id="contentInsideSign">
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
            label="كلمة المرور"
            outlined
              filled
            rounded
            ></v-text-field>
 
   
    
    </div>
    <div id="contentCheck">
       <div id="contentCheck1">
          لقد قرأت ووافقت على شروط الاستخدام و سياسه الخصوصيه
        </div>

      <div id="contentCheck2">
        <v-checkbox></v-checkbox>
    </div>
    </div>
 </v-form>
 <div id="btnlog">
            <v-col cols="12" >
               <v-btn block color="gray" rounded >
                    انشاء حساب جديد
                 </v-btn>
            </v-col>
            <a id="create" href="Regist">هل تملك حساب؟</a>

</div>

 </div>
</template>

<style scoped>
#all{
width: 100%;
 height: 100%;
 background-image: url("../assets/gifs/8.gif");
background-size:cover;
background-position:center;
background-repeat:no-repeat;
}
#contentLogo{
width: 180px;
height:100px;
position: relative;
margin: auto;
top: 17%;
border-radius:20px;
box-shadow: 0px 0px 9px 0px gray;
background-image: url("../assets/one.png");
background-size:cover;
background-position:center;
background-repeat:no-repeat;
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
background:rgba(245, 245, 245,.9);
border-radius:25px
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
#create{
position: relative;
left:45%;
top:28%;
font-size:120%;
 }
#contenttext{
width: 100px;
height:40px;
position: relative;
margin: auto;
top: 17%;
}

#btnlog{
width: 90%;
margin:auto;
position: relative;
top:28%;
font-size:120%;
}
 
</style>

<script>

</script>
