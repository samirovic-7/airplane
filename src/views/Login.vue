<template>
<div id="all">
<div id="contentLogo">
</div>

<p id="contenttext">! دعنا نريك العالم</p>

  <v-form  id="contentlog">
    <div id="contentInsidelog">
       <v-text-field
             label="البريد الالكترونى"
            outlined
              filled
            rounded
            type="mail"
          ></v-text-field>
  
    </div>
    
      <div id="contentInsidelog">

       
          <v-text-field
            label="كلمة المرور"
            outlined
              filled
            rounded
            type="number"
           ></v-text-field>
 
   
    
    </div>
 </v-form>
 <div id="btnlog">
            <v-col cols="12" >
               <v-btn block color="primary" rounded >
                    دخول
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
#contentlog{
 position: relative;
margin:auto;
width:90%;
height:150px;
top:25%;
border-radius:15px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
align-content: space-between;
}
#contentInsidelog{
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
