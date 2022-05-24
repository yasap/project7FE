
<template >
<img src="../assets/icon-left-font-monochrome-black.png" alt="groupomania" width="200px" height="200px">
<div class=sPost>
<h1>
    {{this.post.title}}
</h1>
<!-- <div >
    {{this.post.post_id}}
</div> -->
<p>
    {{this.post.content}}
</p>
<img 
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
   border: 3px solid black ;
   text-decoration: 35px black bold ;
   background-color: rgb(245, 193, 174);
   padding: 30px;
   margin: 30px;
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
                this.post = result
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