<template>
<div id="all">
<div id="contentLogo">
</div>

<p id="contenttext">! دعنا نريك العالم</p>

  
 <div id="btnlog">
            <v-col cols="12" >
               <v-btn block color="grey lighten-1" rounded class="py-5" >
                    تسجيل الدخول
                 </v-btn>
            </v-col>
 
</div>

 </div>
</template>

<style scoped>
#all{
width: 100%;
 height: 710px;
 position: relative;
background-image: url("../assets/gifs/8.gif");
background-size:cover;
background-position:center;
background-repeat:no-repeat;
opacity: .9;
}
#contentLogo{
width: 180px;
position: relative;
margin: auto;
top: 25%;
border-radius:20px;
box-shadow:0px 0px 10px 0px;
width:180px;
height:150px;
margin:1% auto 0%;
position: relative;
 background: linear-gradient(
45deg, rgba(34, 33, 33, 0.115), transparent);
border-radius:30%;
background-image: url("../assets/one.png");
background-size:cover;
background-position:center;
background-repeat:no-repeat;

} 
 
#contenttext{
width: 100px;
height:10px;
position: relative;
margin: auto;
top: 28%;

}

#btnlog{
width: 90%;
margin:auto;
position: relative;
top:30%;
font-size:120%;

}
 
</style>

<script>

  export default {
    name:'bookings',
    }

</script>
