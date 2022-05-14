
<template>
<div>
    {{this.post.title}}
</div>
<div>
    {{this.post.firstname}}
</div>
</template>

<script>

export default {
    name: 'singlePost',
    data(){
        return{
            post:{},
            id:0,
            userId: 0

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