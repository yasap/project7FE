<template>
    <div>
        <header>
 <img src= "../assets/icon-left-font-monochrome-black.png" alt="groupomania" width="200px" height="200px">
 <!-- <aside class="sign"><a href="/signup.html"> Sign Up </a></aside> -->
</header>
<span class="feedback"> {{msg}}</span>
 <form class="container" id="myform" method="post" v-on:submit="onsubmit">
   <label for="email">E-mail</label>
    <input type="email" id="email" placeholder="Enter E-mail" name="email" required/>

    <label for="psw">Password</label>
    <input type="password" id="psw" placeholder="Enter Password" name="psw" required/>

    <input class="submit" id="signinsubmit" value="SignIn" type="submit"/>
</form>
    </div>
</template>

<style scoped>
.feedback{
    color: red;
}
</style>

<script>
export default {
    name: "signin",
    data(){
        return{
            msg:"", 
            // listOfPost:[]
        }
    },
    methods:{
        onsubmit(e){
            e.preventDefault();
            
            let myform = e.target;
            let emailAddress = myform.email.value;
            let pass = myform.psw.value;
            let url = "http://localhost:3000/api/auth/login";
            let body ={userEmail:emailAddress, password:pass};
            let options = {body:JSON.stringify(body),method:"POST", headers: {"Content-type":"application/json"}};    
            // /Authorization" : "Bearer" + token

            fetch(url,options)
            .then(res=>res.json())
            .then(result=>{
                console.log("login result:" , result);
                if(result.error){
                    this.msg = result.error; 
                    // this.listOfPost = result 
                    // how to diplay list item in vue.js
                }
                else{
                    window.sessionStorage.setItem("credz", JSON.stringify(result));
                    this.$router.push("/AllPost")
                
                    // window.location.href = "http://localhost:8080/post";

                }
            })
            .catch(e=>{
                console.log(e);
                this.msg = e;
            })

        }
    }
}
</script>
