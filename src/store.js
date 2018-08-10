import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import route from './router.js'
import swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    uname_email: '',
    name: '',
    email: '',
    username: '',
    Password_login: '',
    Password_signup: '',
    profile: '',
    article_title: '',
    article_content: '',
    category: '',
    articles: [],
    search: ''
  },
  mutations: {
    setuname_email(state, payload){
      state.uname_email = payload
    },
    setname(state,payload){
      state.name = payload
    },
    setusername(state,payload){
      state.username = payload
    },
    setemail(state,payload){
      state.email = payload
    },
    setPasswordlogin(state,payload){
      state.Password_login = payload
    },
    setPasswordsignup(state,payload){
      state.Password_signup = payload
    },
    setprofile(state, payload){
      state.profile = payload
    },
    setarticle_title(state, payload){
      state.article_title = payload
    },
    setarticle_content(state, payload){
      state.article_content = payload
    },
    setcategory(state, payload){
      state.category = payload
    },
    setarticles(state, payload){
      state.articles.push(payload)
    },
    setsearch(state, payload){
      state.search = payload
    }
  },
  actions: {
    login(){
      let user ={
        uname_email: this.state.uname_email,
        password: this.state.Password_login
      }
      axios.post('http://localhost:3000/users/login', user)
      .then(result => {
        console.log(result)
        localStorage.setItem('userToken', result.data.token)
        route.push('/article')
      })
      .catch(err => {
        swal({
          type: 'error',
          title: 'Oops...',
          text: `${err.message}`,
        })
      })
    },

    signup(){
      let user ={
        name: this.state.name,
        email: this.state.email,
        username: this.state.username,
        password: this.state.Password_signup
      }
      axios.post('http://localhost:3000/users/register', user)
      .then(result => {
        swal({
          type: 'success',
          title: 'Succesfully register',
          text: `${result.data}`,
        })
      })
      .catch(err => {
        swal({
          type: 'error',
          title: 'Oops...',
          text: `${err.message}`,
        })
      })
    },
    Profile({commit}){

      axios.get('http://localhost:3000/users/profile',{
        headers: {
          token : localStorage.getItem('userToken')
        }
      })
      .then(result => {
          commit('setprofile', result.data.user[0])
          commit('setname', result.data.user[0].name)
          commit('setemail', result.data.user[0].email)
          commit('setusername', result.data.user[0].username)
      })
      .catch(err => {
        swal({
          type: 'error',
          title: 'Oops...',
          text: `${err.message}`,
        })
      })
    },
    editProfile({commit}){
      let user ={
        name: this.state.name,
        email: this.state.email,
        username: this.state.username,
      }

      axios.put('http://localhost:3000/users/edit', user, {
        headers: {
          token: localStorage.getItem('userToken')
        }
      })
      .then(result => {
        this.state.profile.name = this.state.name
        this.state.profile.email = this.state.email
        this.state.profile.username = this.state.username
      })
      .catch(err => {
        swal({
          type: 'error',
          title: 'Oops...',
          text: `${err.message}`,
        })
      })
    },
    postarticle({commit}){
      axios.post('http://localhost:3000/articles/post', {
        title: this.state.article_title,
        content: this.state.article_content,
        category: this.state.category
      }, {
        headers: {
          token: localStorage.getItem('userToken')
        }
      })
      .then(result => {
        commit('setarticles', result.data.articles)
        commit('setpost_title', '')
        commit('setcategory', '')
        commit('setpost_content', '')
      })
      .catch(err => {
        swal({
          type: 'error',
          title: 'Oops...',
          text: `${err.message}`,
        })
      })
    },
    allarticle({commit}){
      axios.get('http://localhost:3000/articles')
      .then(result => {
        for(let i = 0; i < result.data.length; i++){
          result.data[i].status = 'other'
          commit('setarticles', result.data[i])
        }
      })
      .catch(err => {
        swal({
          type: 'error',
          title: 'Oops...',
          text: `${err.message}`,
        })
      })
    },
    myarticle({commit}){
      axios.get('http://localhost:3000/articles/my-article',{
          headers: {
            token: localStorage.getItem('userToken')
          }
        })
        .then(result => {
          console.log(result)
          for(let i = 0; i < result.data.length; i++){
            result.data[i].status = 'my'
            commit('setarticles', result.data[i])
          }
          console.log(this.state.articles)
        })
        .catch(err => {
          swal({
            type: 'error',
            title: 'Oops...',
            text: `${err.message}`,
          })
        })
    },
    Search({commit}){
      axios.get('http://localhost:3000/articles/search', {
        search: this.state.search
      })
      .then(result => {
        this.state.articles = []
        this.state.search = ''
        for(let i = 0; i < result.data.length; i++){
          result.data[i].status = 'other'
          commit('setarticles', result.data[i])
        }
      })
      .catch(err => {
        swal({
          type: 'error',
          title: 'Oops...',
          text: `${err.message}`,
        })
      })
    },
    logout({commit}){
      localStorage.removeItem('userToken')
      commit('setname', '')
      commit('setemail', '')
      commit('setusername', '')
      commit('setpassword', '')
      commit('setuname_email', '')
    },
    deletearticle({commit}){
      
    }
  }
})
