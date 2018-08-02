<template>
    <div class="platform">
        <navbar></navbar>
        <jumbotron></jumbotron>
        <v-container>
            <v-layout justify-center full-height>
                <v-flex xs4 style="margin-top: 100px;margin-right: 50px">
                    <v-card id="login" color="blue">
                        <br><br><br>
                        <h3>Login Here</h3>
                        <br><br>
                        <v-container>
                            <v-flex>
                                <v-text-field
                                    label="Username/Email"
                                ></v-text-field>
                            </v-flex>
                        </v-container>
                        <v-container>
                            <v-flex>
                                <v-text-field
                                    v-model="Password"
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
                        <h3>Sign Up Here</h3>
                        <br><br>
                        <v-container>
                            <v-flex>
                                <v-text-field
                                    label="Name"
                                ></v-text-field>
                            </v-flex>
                        </v-container>
                        <v-container>
                            <v-flex>
                                <v-text-field
                                    label="Username"
                                ></v-text-field>
                            </v-flex>
                        </v-container>
                        <v-container>
                            <v-flex>
                                <v-text-field
                                    label="Email"
                                ></v-text-field>
                            </v-flex>
                        </v-container>
                         <v-container>
                            <v-flex>
                                <v-text-field
                                    v-model="Password"
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
            </v-layout>
        </v-container>
    </div>
</template>


<script>
import navbar from './navbar.vue'
import jumbotron from './jumbotron.vue'
export default {
    data(){
        return {
            show1: false,
        }
    },
    components: {
        navbar,
        jumbotron
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

h3{
    font-family: 'Dancing Script', cursive !important;
    color: white
}
</style>
