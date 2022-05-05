<template>
    <div>
        <header>
 <img src="/photo/icon-left-font-monochrome-black.png" alt="groupomania" width="200px" height="200px">

</header>

<div class="menu"> 
  <a href="/account.vue"><i class="fas fa-user"></i></a>
  <a href="/post.vue"><i class="fas fa-pen"></i></a>
  <a href="/signin.vue"><i class="fas fa-sign-out-alt"></i></a>
  <a href="/allPost.vue"><i class="fas fa-sign-out-alt"></i></a>

</div>

<form v-on:submit="onsubmit" class="post">

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
            let message = myform.message.value;
            let title = myform.title.value;
            let image = myform.img.files[0];
            let session =JSON.parse(window.sessionStorage.getItem("credz"));
            let token = session.token;
            let userID = session.userID;
            let url = "http://localhost:3000/api/post/addPost";
            let body ={userID:userID, message:message, title:title, image:image};
            let options = {body:JSON.stringify(body),method:"POST", headers: {"Content-type":"application/json" ,"Authorization" : "Bearer " + token}};    
           

            fetch(url,options)
            .then(res=>res.json())
            .then(result=>{
                console.log("login result:" , result);
                if(result.message){
                    this.msg = result.message;
                }
                else{
                    
                    window.location.href = "http://localhost:8080/allPost";

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
