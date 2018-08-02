<template>
    <v-toolbar>
        <v-toolbar-title style="margin-left:50px"><i class="fab fa-wolf-pack-battalion fa-2x"></i></v-toolbar-title>
         <v-layout justify-center style="margin-left: 40px" v-if="token"> 
                <v-flex xs9>
                    <v-text-field
                        hide-details
                        placeholder="Search Here"
                        single-line
                        v-model="search"
                    ></v-text-field>
                </v-flex>
                <v-btn flat @click="Search"><v-icon>search</v-icon></v-btn>
        </v-layout>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
        <v-btn class="nav-but" flat to="/home">Home</v-btn>
        <v-btn class="nav-but" flat v-if="!token" to="/platform#login">Login</v-btn>
        <v-btn class="nav-but" flat v-if="!token" to="/platform#signup">Sign Up</v-btn>
        <v-btn class="nav-but" flat v-else > Logout</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
import {mapActions} from 'vuex'
export default {
     data(){
        let token = localStorage.getItem('userToken')

        return {
            token: token
        }
    },
    methods: {
        ...mapActions([
            'Search'
        ])
    },
    computed: {
        search:{
            get(){
                return this.$store.state.search
            },
            set(value){
                this.$store.commit('setsearch', value)
            }
        }
    }
}
</script>

<style scoped>
.navbar{
    background-color: white
}
.nav-but {
    color: black !important;
}
 </style>
 