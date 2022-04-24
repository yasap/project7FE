<template>
    <div>
        <header>
 <img src="/photo/icon-left-font-monochrome-black.png" alt="groupomania" width="200px" height="200px">

</header>

<div class="menu"> 
  <a href="/home.html"><i class="fas fa-home"></i></a>
  <a href="/account.html"><i class="fas fa-user"></i></a>
  <a href="/signin.html"><i class="fas fa-sign-out-alt"></i></a>

</div>

<form class="post">

     <label for="text"> Title </label>
    <input type="text" id="title" placeholder="Title" name="title" required/>

    <label for="message">Description</label>
    <textarea rows="10" id="message"> Share your thoughts </textarea> 

    <label for="date-created">Date</label>
    <input type="date" placeholder="Date" id="date-created" name="Date" required/>
    <label for="image">Image</label>
    <input type="file" placeholder="Enter image" id="image" name="img" required class="image" accept="image/*,video/mp4" />
<br>
  <input class="submit"  id="postSubmit" type="submit"/>
</form>
    </div>
</template>


<script>
export default {
    name: "post",
    data(){
        return{
            msg:""
        }
    },
    methods:{
        onsubmit(e){
            e.preventDefault();
            
            let myform = e.target;
            let userID = myform.userID.value;
            let message = myform.message.value;
            let Title = myform.title.value;
            let Image = myform.image.value
            let url = "http://localhost:3000/api/auth/login";
            let body =(userID:userID, message:message; Title:title; Umage:image );
            let options = {body:JSON.stringify(body),method:"POST", headers: {"Content-type":"application/json"}};    
            // /Authorization" : "Bearer" + token

            fetch(url,options)
            .then(res=>res.json())
            .then(result=>{
                console.log("login result:" , result);
                if(result.message){
                    this.msg = result.message;
                }
                else{
                    window.location.href = "http://localhost:8080/post";

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
