<template>
    <div>
        <header>
<img src="../assets/icon-left-font-monochrome-black.png" alt="groupomania" width="200px" height="200px">
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
    <button v-on:click= "deleteAccount">  delete account </button>
    <span> {{this.feedback}}</span>
</div>
        </div>
</template>
<script>


export default {
    name: 'singlePost',
    data(){
        return{
            user:{},
            feedback:""

        }

        },
        
       
        methods:{
             loadUser(){
        
            this.user =JSON.parse(window.sessionStorage.getItem("credz"));
            console.log(this.user)
          },
          deleteAccount(){
              
              let confirmation = confirm("your account will be deleted after this confirmation");
              if (confirmation){
                  let url = "http://localhost:3000/api/auth/delete/" +this.user.userID;
                  console.log(url);
                  let options = {method:"DELETE", headers: {"Content-type":"application/json" ,"Authorization" : "Bearer " + this.user.token}};    
       
                 fetch(url,options)
                 .then(res=>res.json())
                 .then(result =>{
                    if(result.error){
                        this.feedback = result.error
                    }
                    else{
                        window.sessionStorage.clear();
                        this.$router.push("/signin")
                    }
                 }) 
              }
              
          }
},
beforeMount(){
    this.loadUser()
    },
 
}
</script>