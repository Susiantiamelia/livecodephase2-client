<template>
    <div class="platform">
        <navbar></navbar>
        <jumbotron></jumbotron>
        <v-container>
            <v-layout justify-center full-height>
                <v-flex xs4 style="margin-top: 100px;margin-right: 50px">
                    <v-card id="login" color="blue">
                        <br><br><br>
                        <h1>Login Here</h1>
                        <br><br>
                        <v-container>
                            <v-flex>
                                <v-text-field
                                    label="Username/Email"
                                    v-model="uname_email"
                                ></v-text-field>
                            </v-flex>
                        </v-container>
                        <v-container>
                            <v-flex>
                                <v-text-field
                                    v-model="Password_login"
                                    :append-icon="show1 ? 'visibility_off' : 'visibility'"
                                    :type="show1 ? 'text' : 'password'"
                                    name="input-10-1"
                                    label="Password"
                                    @click:append="show1 = !show1"
                                ></v-text-field>
                            </v-flex>
                        </v-container>
                        <v-btn outline color="white" @click="login">Submit</v-btn>
                        <br><br>
                    </v-card>
                </v-flex>
                <v-avatar size="60px" color="blue" style="margin-top: 200px">
                    or
                </v-avatar>
                <v-flex xs4 style="margin-left: 50px" >
                    <v-card id="signup" color="blue">
                        <br><br><br>
                        <h1>Sign Up Here</h1>
                        <br><br>
                        <v-container>
                            <v-flex>
                                <v-text-field
                                    label="Name"
                                    v-model="name"
                                ></v-text-field>
                            </v-flex>
                        </v-container>
                        <v-container>
                            <v-flex>
                                <v-text-field
                                    label="Username"
                                    v-model="username"
                                ></v-text-field>
                            </v-flex>
                        </v-container>
                        <v-container>
                            <v-flex>
                                <v-text-field
                                    label="Email"
                                    v-model="email"
                                ></v-text-field>
                            </v-flex>
                        </v-container>
                         <v-container>
                            <v-flex>
                                <v-text-field
                                    v-model="Password_signup"
                                    :append-icon="show1 ? 'visibility_off' : 'visibility'"
                                    :type="show1 ? 'text' : 'password'"
                                    name="input-10-1"
                                    label="Password"
                                    @click:append="show1 = !show1"
                                ></v-text-field>
                            </v-flex>
                        </v-container>
                        <v-btn outline color="white" @click="signup">Submit</v-btn>
                        <br><br>
                    </v-card>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>


<script>
import navbar from './navbar.vue'
import jumbotron from './jumbotron.vue'
import {mapActions} from 'vuex'
export default {
    data(){
        return {
            show1: false,
        }
    },
    methods: {
        ...mapActions([
            'login', 'signup'
        ])
    },
    components: {
        navbar,
        jumbotron
    },
    computed: {
        uname_email: {
            get(){
                return this.$store.state.uname_email
            },
            set(value){
                this.$store.commit('setuname_email', value)
            }
        },
        name: {
            get(){
                return this.$store.state.name
            },
            set(value){
                this.$store.commit('setname', value)
            }
        },
        email: {
            get(){
                return this.$store.state.email
            },
            set(value){
                this.$store.commit('setemail', value)
            }
        },
        username: {
            get(){
                return this.$store.state.username
            },
            set(value){
                this.$store.commit('setusername', value)
            }
        },
        Password_login: {
            get(){
                return this.$store.state.Password_login
            },
            set(value){
                this.$store.commit('setPasswordlogin', value)
            }
        },
        Password_signup: {
            get(){
                return this.$store.state.Password_signup
            },
            set(value){
                this.$store.commit('setPasswordsignup', value)
            }
        }
    }
}
</script>

<style scoped>
.v-input{
    color: white
}

.v-avatar{
    color: white
}

h1{
    font-family: 'Dancing Script', cursive !important;
    color: white;
    font-size: 35px !important;
}
</style>
