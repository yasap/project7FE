
<template >
<div class=sPost>
<div >
    {{this.post.post_id}}
</div>
<div>
    {{this.post.title}}
</div>
<div>
    {{this.post.content}}
</div>
<div>
    {{this.post.image}}
</div>
<div>
   {{new Date(post.date_created).toLocaleDateString()}} 
</div>
<div>
    {{this.post.author}}
</div>
</div>
</template>
<style>
.sPost{
   border: 10px  solid purple ;
   
}
</style>
<script>

export default {
    name: 'singlePost',
    data(){
        return{
            post:{},
            id:0,
            title: 0,
            contant: 0,
            image: 0 ,
            date: 0 ,
            author: 0
        }

        },
        
       
        methods:{
             loadPosts(){
        
            let session =JSON.parse(window.sessionStorage.getItem("credz"));
            let token = session.token;
            this.userId = session.userID;
            let url = `http://localhost:3000/api/post/${this.id}`;
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
beforeMount(){
    console.log(this.$route.params.id);
    this.id=this.$route.params.id;
            this.loadPosts()
            console.log(this.post)
        },
 
}
</script>