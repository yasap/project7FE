<template>
    <div>
        <header>
 <img src="/photo/icon-left-font-monochrome-black.png" alt="groupomania" width="200px" height="200px">
</header>

<div class="menu"> 
<a href="/home.html"><i class="fas fa-home"></i></a>
  <a href="/post.html"><i class="fas fa-pen"></i></a>
  <a href="/signin.html"><i class="fas fa-sign-out-alt"></i></a>
</div>

<div class="profile">
    <h4>First Name: {{this.user.firstName}}</h4>
    <h4>Last Name: {{this.user.lastName}}</h4>
    <h4>E-mail: {{this.user.email}}</h4>
    <h4>ID: {{this.user.userID}}</h4>
</div>
        </div>
</template>
<script>


export default {
    name: 'singlePost',
    data(){
        return{
            user:{},

        }

        },
        
       
        methods:{
             loadUser(){
        
            this.user =JSON.parse(window.sessionStorage.getItem("credz"));
            console.log(this.user)
          
            

        
             }
},
beforeMount(){
    this.loadUser()
    },
 
}
</script>