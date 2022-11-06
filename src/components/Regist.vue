<template>
<div id="all">
<div id="contentLogo">

</div>

<p id="contenttext">! دعنا نريك العالم</p>

<div id="content">
 <div id="contentInside">
      <a href="#" id="contentInside1"  style="background:rgb(31, 31, 119); color:white">
        سجل دخول بالفيسبوك
      </a>
      
      <a href="#" id="contentInside2"  style="background:rgb(31, 31, 119)">
             <v-icon x-large color="white">
                mdi-facebook
            </v-icon>
        </a>
    </div>
    <div id="contentInside">
      <a href="#" id="contentInside1">
         سجل دخول بالجوجل 
      </a>
      <a href="#" id="contentInside2">
             <v-icon x-large color="black">
                mdi-google
            </v-icon>
        </a>
    </div>
     <div id="contentInside">
      <a href="#" id="contentInside1">
         سجل دخول بالايميل
      </a>
      <a href="#" id="contentInside2">
             <v-icon x-large color="black">
                  mdi-mail
            </v-icon>
        </a>
    </div>

</div>    
<a id="create" href="../SignUp">انشاء حساب</a>
 </div>
</template>

<style scoped>
#all{
width: 100%;
position: relative;
top: 320px;
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
background-image: url("../assets/one.png");
background-size:cover;
background-position:center;
background-repeat:no-repeat;
 }
#content{
 position: relative;
margin:auto;
width:80%;
height:240px;
top:25%;
border-radius:15px;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
align-content: space-between;
}
#contentInside{
 width: 100%;
height:30%;
display:flex;
flex-wrap:wrap;
justify-content:space-between;
align-content: space-between;
 }
#contentInside1{
 height:100%;
width:91%;
border-top-left-radius:20px;
border-bottom-left-radius:20px;
border: 1px solid black;
direction:rtl;
font-size:140%;
padding:1% 1% 0 0;
cursor:pointer;
text-decoration: none;
color: black
}
#contentInside2{
 width:8.5%;
height:100%;
border-top-right-radius:20px;
border-bottom-right-radius:20px;
border: 1px solid black;
display:flex;
flex-wrap:wrap;
justify-content:space-around;
align-content: space-around;
cursor:pointer;
 text-decoration: none;
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
color: black
}
</style>

<script>
  export default {
        name: 'Regist',
  
     
  }
</script>
