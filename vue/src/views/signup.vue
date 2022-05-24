<template>
    <div >
        <header>
 <img src="../assets/icon-left-font-monochrome-black.png" alt="groupomania" width="200px" height="200px">
 <!-- <aside class="sign"><a href="/signin.html"> Sign In </a></aside> -->
</header>



 <form class="container" id="myform"  method="post" v-on:submit="onsubmit">
    <label for="uname">First Name</label>
    <input type="text" placeholder="Enter First Name" id="fname" name="fname" required/>

    <label for="uname">Surname</label>
    <input type="text" placeholder="Enter Surname" id="sname" name="sname" required/>

    <label for="email">E-mail</label>
    <input type="email" placeholder="Enter E-mail" id="email" name="email" required/>
    

    <label for="psw">Password</label>
    <input type="password" placeholder="Enter Password" id="psw" name="psw" required/>

    <input class="submit"   id="signupsubmit" value="SignUp" type="submit"/>
</form>
  
    </div>
</template>
<script>
export default {
    name: "signup",
    data(){
        return{
            msg:""
        }
    },
    methods:{
        onsubmit(e){
            e.preventDefault();
            let myform = e.target;
            let fName = myform.fname.value;
            let lName = myform.sname.value;
            let emailAddress = myform.email.value;
            let pass = myform.psw.value;

            let url = "http://localhost:3000/api/auth/signup";
            let body ={firstName:fName,lastName:lName,userEmail:emailAddress,password:pass};
            let options = {body:JSON.stringify(body),method:"POST", headers: {"Content-type":"application/json"}};    
            

            fetch(url,options)
            .then(res=>res.json())
            .then(result=>{
                console.log("login result:" , result);
                if(result.message){
                    this.msg = result.message;
                }
                else{
                    this.$router.push("/signin")
                    

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
