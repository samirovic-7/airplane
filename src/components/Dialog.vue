<template>
  <v-card id="CheckCard">
   <v-tabs
      color="deep-purple accent-4"
      
     >
      <v-tab >ذهاب وعودة</v-tab>
      <v-tab>ذهاب فقط</v-tab>
   

      <v-tab-item>
        <v-container >
            <v-col
              cols="12"
              md="12"
             
            >
              <v-card    >
       
     <v-img
      height="170"
      src="../assets/gifs/9.gif"
      id="TabImg"
    >
      
    </v-img>
    <v-form  id="bodyofform">
      <v-container>
        <v-row>

         <v-container fluid>
    <v-row align="center">
      <v-col cols="2">
        <v-subheader>
          بلد المغادرة
        </v-subheader>
      </v-col>
      <v-col cols="4">
        <v-select
          v-model="e1"
          :items="states"
          menu-props="auto"
          label="Select"
          hide-details
          prepend-icon="mdi-map"
          single-line
        ></v-select>
      </v-col>
      <v-col cols="5">
        <v-select
          v-model="e2"
          :items="states"
          append-outer-icon="mdi-map"
          menu-props="auto"
          hide-details
          label="Select"
          single-line
        ></v-select>
      </v-col>
      <v-col cols="1">
        <v-subheader>
          الوجهة
        </v-subheader>
      </v-col>
    </v-row>
  </v-container>
      
           <v-container>
    <v-row id="rowTime">
      <v-col
        cols="12"
        lg="6"
      >
        <v-menu
          ref="menu1"
          v-model="menu1"
          :close-on-content-click="false"
          transition="scale-transition"
          offset-y
          max-width="290px"
          min-width="auto"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-text-field
              v-model="dateFormatted"
              label="تاريخ  الذهاب"
              hint="MM/DD/YYYY format"
              persistent-hint
              prepend-icon="mdi-calendar"
              v-bind="attrs"
              @blur="date = parseDate(dateFormatted)"
              v-on="on"
            ></v-text-field>
          </template>
          <v-date-picker
            v-model="date"
            no-title
            @input="menu1 = false"
          ></v-date-picker>
        </v-menu>
      </v-col>

         <v-col 
          cols="12"
        lg="6"
         >
              <v-menu
      ref="wow"
      v-model="wow"
      :close-on-content-click="false"
      transition="scale-transition"
      offset-y
      min-width="auto"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="sata"
          label="تاريخ العودة"
          prepend-icon="mdi-calendar"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-date-picker
        v-model="sata" 
        @change="save"
      ></v-date-picker>
    </v-menu>
    </v-col>

    </v-row>

  
  </v-container>
          <v-col
            cols="6"
            class="mx-auto"
          >
    <Fights/>
          </v-col>

  

            <v-col cols="12">
            <v-btn block color="purple darken-1" id="buttonSearch">
        بحث
    </v-btn>
            </v-col>



        </v-row>
      </v-container>
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
   
      
    </v-card-actions>
  </v-card> 
            </v-col>
        </v-container>

      
      </v-tab-item>
      
      <v-tab-item
      
      >
        <v-container fluid>
    <v-col
              cols="12"
              md="12"
             
            >
              <v-card    >
       
     <v-img
      height="100"
      src="../assets/gifs/9.gif"
    >
      
    </v-img>
    <v-form  id="bodyofform">
      <v-container>
        <v-row>

         <v-container >
    <v-row align="center">
      <v-col cols="2">
        <v-subheader>
          بلد المغادرة
        </v-subheader>
      </v-col>
      <v-col cols="4">
        <v-select
          v-model="e1"
          :items="states"
          menu-props="auto"
          label="Select"
          hide-details
          prepend-icon="mdi-map"
          single-line
        ></v-select>
      </v-col>
      <v-col cols="5">
        <v-select
          v-model="e2"
          :items="states"
          append-outer-icon="mdi-map"
          menu-props="auto"
          hide-details
          label="Select"
          single-line
        ></v-select>
      </v-col>
      <v-col cols="1">
        <v-subheader>
          الوجهة
        </v-subheader>
      </v-col>
    </v-row>
  </v-container>
      
           <v-container>
    <v-row id="rowTime">
      <v-col
        cols="12"
        lg="12"
      >
    
    <v-col
      cols="9"
      sm="9"
      md="9"
    >
      <v-menu
        v-model="menu4"
        :close-on-content-click="false"
        :nudge-right="40"
        transition="scale-transition"
        offset-y
        min-width="auto"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            v-model="date"
            label="تاريخ الذهاب"
            prepend-icon="mdi-calendar"
            readonly
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker
          v-model="date"
          @input="menu4 = false"
        ></v-date-picker>
      </v-menu>
    </v-col>
    <v-spacer></v-spacer>
        </v-col>

         
 
    </v-row>

  
  </v-container>
          <v-col
            cols="6"
             class="mx-auto"
          >
  <Fights/>
          </v-col>

  

            <v-col cols="12">
            <v-btn block color="purple darken-2"  id="buttonSearch">
        بحث
    </v-btn>
            </v-col>



        </v-row>
      </v-container>
    </v-form>
    <v-divider></v-divider>
    <v-card-actions>
   
      
    </v-card-actions>
  </v-card> 
            </v-col>
        </v-container>
      </v-tab-item>
    </v-tabs>
  
 
  </v-card>
</template>

<style>
.container {
    max-width: 1616px;
}
#CheckCard{
 margin:6% auto;
}
#rowTime {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
     width: 95%;
     position: relative;
     left:14%;
     
}
.v-slide-group__content {
    display: flex;
    flex: 1 0 auto;
    position: relative;
    transition: 0.3s cubic-bezier(0.25, 0.8, 0.5, 1);
    white-space: nowrap;
     left: 1%; 

display:flex;
justify-content: center;
 }


#bodyofform{
 display: flex;
 height: 60%;
}
.v-card__actions {
    align-items: center;
    display: flex;
      padding: 0px;  
}
 
.row {
    display: flex;
    flex-wrap: wrap;
    flex: 1 1 auto;
    margin: 20px;
}
.col-lg-6 {
    flex: 0 0 50%;
    max-width: 36%;
    margin-left: 2%;
}
.v-application .primary {
      background-color:white;  
 }
#TabImg{

 background-size:contain;
background-position:center;
background-repeat:no-repeat;
opacity: .9;
}
#buttonSearch{
color:white;
font-size:150%;
}
</style>

<script>

  import Dialog from"../components/Dialog";
  import Fights from"../components/Flights";

 export default {

    //    data: () => ({
    //   date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    //   menu: false,
    //   modal: false,
    //   menu4: false,
    // }),
    data () {
      return {
          
       
        
        e1: 'Florida',
        e2: 'Texas',
        e3: null,
        e4: null,
        states: [
          'Alabama', 'Alaska', 'American Samoa', 'Arizona',
          'Arkansas', 'California', 'Colorado', 'Connecticut',
          'Delaware', 'District of Columbia', 'Federated States of Micronesia',
          'Florida', 'Georgia', 'Guam', 'Hawaii', 'Idaho',
          'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
          'Louisiana', 'Maine', 'Marshall Islands', 'Maryland',
          'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
          'Missouri', 'Montana', 'Nebraska', 'Nevada',
          'New Hampshire', 'New Jersey', 'New Mexico', 'New York',
          'North Carolina', 'North Dakota', 'Northern Mariana Islands', 'Ohio',
          'Oklahoma', 'Oregon', 'Palau', 'Pennsylvania', 'Puerto Rico',
          'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee',
          'Texas', 'Utah', 'Vermont', 'Virgin Island', 'Virginia',
          'Washington', 'West Virginia', 'Wisconsin', 'Wyoming',
        ],
         sata: null,
         wow: false,
       }
      
    },

    //       data: vm => ({
    //   date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
    //   dateFormatted: vm.formatDate((new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10)),
    //    menu2: false,
    // }),
     computed: {
      computedDateFormatted () {
        return this.formatDate(this.date)
      },
    },

    watch: {
      date (val) {
        this.dateFormatted = this.formatDate(this.date)
      },
       wow (val) {
        val && setTimeout(() => (this.activePicker = 'YEAR'))
      },
    },

    methods: {
      formatDate (date) {
        if (!date) return null

        const [year, month, day] = date.split('-')
        return `${month}/${day}/${year}`
      },
      parseDate (date) {
        if (!date) return null

        const [month, day, year] = date.split('/')
        return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
      },
       save (sata) {
        this.$refs.wow.save(sata)
      },
    },
  

     components: {
       Dialog,
       Fights

  }
  }

    

   

</script>