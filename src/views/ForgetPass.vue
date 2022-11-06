<template>
<div id="all">
<div id="contentLogo">
</div>

<p id="contentForgetText">! دعنا نريك العالملا تقلق يمكنك اعاده ضبط كلمه المرور بسهوله هنا</p>

  <v-form  id="contentForget">
    <div id="contentForgetlog">
       <v-text-field
             label="البريد الالكترونى"
            outlined
              filled
            rounded
            type="mail"
          ></v-text-field>
  
    </div>
   
 </v-form>
 <div id="btnlog">
            <v-col cols="12" >
               <v-btn block color="primary" rounded >
                    ارسال
                 </v-btn>
            </v-col>
            <a id="create" href="#">هل نسيت كلمة المرور؟</a>

</div>

 </div>
</template>

<style scoped>
#all{
width: 100%;
 height: 100%;
}
#contentLogo{
width: 180px;
height:100px;
position: relative;
margin: auto;
top: 17%;
border-radius:20px;
border: 2px solid black;
}
#contentForget{
 position: relative;
margin:auto;
width:90%;
height:60px;
top:27%;
border-radius:15px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
align-content: space-between;
 }
#contentForgetlog{
 width: 100%;
height:45%;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
align-content: space-between;
 }
  
#create{
position: relative;
left:45%;
top:28%;
font-size:120%;
 }
#contentForgetText{
width: 400px;
height:40px;
position: relative;
margin: auto;
top: 20%;
text-align:center
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
