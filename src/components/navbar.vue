<template>
    <v-toolbar>
        <v-toolbar-title style="margin-left:50px"><i class="fab fa-wolf-pack-battalion fa-2x"></i></v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
        <v-btn class="nav-but" flat to="/home">Home</v-btn>
        <v-btn class="nav-but" flat v-if="!token" to="/login">Login</v-btn>
        <v-btn class="nav-but" flat v-if="!token" >Sign Up</v-btn>
        <v-btn class="nav-but" flat v-else > Logout</v-btn>
        </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
     data(){
        let token = localStorage.getItem('userToken')

        return {
            token: token
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
 