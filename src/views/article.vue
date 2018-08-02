<template>
    <div class="article_page">
        <Article></Article>
        <v-container>
            <v-layout>
                <v-flex xs3>
                    <v-card>
                        <br><br><br>
                    <h3>Your Profile</h3>
                    <v-container>
                        <v-flex>
                            <v-text-field
                                label="Name"
                                v-model="name"
                            ></v-text-field>
                        </v-flex>
                    </v-container>
                    <br><br>
                    <v-container>
                        <v-flex>
                            <v-text-field
                                label="Username"
                                v-model="username"
                            ></v-text-field>
                        </v-flex>
                    </v-container>
                    <br><br>
                    <v-container>
                        <v-flex>
                            <v-text-field
                                label="Email"
                                v-model="email"
                            ></v-text-field>
                        </v-flex>
                    </v-container>
                    <v-btn outline color="black" @click="editProfile">Edit</v-btn>
                    </v-card>
                </v-flex>
                <v-flex xs10 style="margin-left: 90px;" flat>
                    <br><br><br>
                    <h3>Post Something Here</h3>
                    <br><br><br>
                    <v-container>
                        <v-flex>
                            <v-text-field
                                label="Title"
                                v-model="article_title"
                            ></v-text-field>
                        </v-flex>
                    </v-container>
                    <v-container>
                        <v-flex>
                            <v-text-field
                                label="Category"
                                v-model="category"
                            ></v-text-field>
                        </v-flex>
                    </v-container>
                    <v-container>
                        <wysiwyg v-model="article_content"/>
                    </v-container>
                    <v-btn outline color="black" @click="postarticle">Post</v-btn>
                    <br><br><br>
                    <v-flex>
                        <v-btn class="but-choose" flat @click="myarticle">My Article</v-btn>
                        <v-btn class="but-choose" flat @click="allarticle">All Article</v-btn>
                        <v-container  v-for="(article, index) in articles" :key="index" style="border-bottom: 1px solid grey">
                            <v-layout row wrap>
                                <v-flex xs2 style="padding-left: 20px">
                                    <i class="fas fa-paw fa-6x"></i>
                                </v-flex>
                                <v-flex xs8>
                                    <v-card flat>
                                            <div class="content">
                                                <h3 class="headline mb-0">{{ article.title }}</h3>
                                                <br>
                                                <div>{{ article.content }}</div>
                                            </div>
                                            <v-btn @click="editcontent"><i class="fas fa-pen"></i></v-btn>
                                            <v-btn @click="deletecontent"><i class="far fa-trash-alt"></i></v-btn>
                                    </v-card>
                                </v-flex>
                            </v-layout>
                        </v-container>
                    </v-flex>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import Article from '@/components/article.vue'
import {mapState, mapActions} from 'vuex'
export default {
    components: {
        Article
    },methods: {
        ...mapActions([
            'Profile', 'editProfile', 'postarticle', 'myarticle', 'allarticle'
        ])
    },
    computed: {
        ...mapState([
            'profile', 'articles'
        ]),
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
        article_title: {
            get(){
                return this.$store.state.article_title
            },
            set(value){
                this.$store.commit('setarticle_title', value)
            }
        },
        article_content: {
            get(){
                return this.$store.state.article_content
            },
            set(value){
                this.$store.commit('setarticle_content', value)
            }
        },
        category: {
            get(){
                return this.$store.state.category
            },
            set(value){
                this.$store.commit('setcategory', value)
            }
        }
    },
    created(){
        if(localStorage.getItem('userToken')){
            this.Profile(),
            this.myarticle()
        }
        
    }
}
</script>

<style scoped>

</style>

