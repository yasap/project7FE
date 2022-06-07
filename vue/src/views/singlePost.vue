
<template >
<img src="../assets/icon-left-font-monochrome-black.png" alt="groupomania" width="200px" height="200px">
<div class=sPost>
<h1>
    {{this.post.title}}
</h1>
<p>
    {{this.post.content}}
</p>
<img class="image"
v-bind:src="this.post.image"/>
<p>
   {{new Date(post.date_created).toLocaleDateString()}} 
</p>
<p>
    {{this.post.firstname + " " + this.post.lastname}}
</p>
</div>
</template>

<style>
.sPost{
   text-decoration: 35px black bold ;
   padding: 30px;
   margin: 30px;
}
@media screen and (min-width: 300px) and (max-width: 425px)  {
 .image {
     width: 70%;
 }
 }
</style>
<script>

export default {
    name: 'singlePost',
    data(){
        return{
            post:{},
        }

        },
        
       
        methods:{
            readPost(id){
                 console.log(id);

        let session =JSON.parse(window.sessionStorage.getItem("credz"));
            let token = session.token;
            const userID = session.userID;
            let url = "http://localhost:3000/api/post/read";
           const payload = {userID: userID, postID:id};
            let options = {body:JSON.stringify(payload),method:"POST", headers: {"Content-type":"application/json" ,"Authorization" : "Bearer " + token}};    
          

            fetch(url,options)
            .then(res=>res.json())
            .then(result=>{
                console.log("allPosts result:" , result);
                
                
            })
            .catch (error =>{
                console.log(error);

            })

             },
             loadPosts(){
        
            let session =JSON.parse(window.sessionStorage.getItem("credz"));
            let token = session.token;
            this.userId = session.userID;
            let url = `http://localhost:3000/api/post/${this.$route.params.id}`;
            // let body ={userID:userID, message:message, title:title, image:image};
            let options = {method:"GET", headers: {"Content-type":"application/json" ,"Authorization" : "Bearer " + token}};    
           
           fetch(url,options)
            .then(res=>res.json())
            .then(result=>{
                console.log("allPosts result:" , result);
                this.post = result;
                this.readPost(this.$route.params.id)

            })
            .catch (error =>{
                console.log(error);

            })

        
             }
},

mounted(){
    this.loadPosts()
        },
 
}
</script>