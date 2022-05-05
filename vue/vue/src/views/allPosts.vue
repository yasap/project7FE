<template>
    <div>
        <h3>Post Details</h3>
        <table class=" postTable">
            <thead>
                <tr>Id</tr>
                <tr>title</tr>
                <tr>date</tr>
            </thead>
            
            <tbody>
                <tr v-for="post in ListOfPost" :key="post.post_id">
                    <td>{{post.post_id}} </td>
                    <td>{{post.title}} </td>
                    <td>{{post.date_created}} </td>
                </tr>
            </tbody>    
        </table>
    </div>
</template>
<script>
export default {
    name: 'allPost',
    data(){
        return{
            ListOfPost:[],
        }

        },
        mounted(){
            this.loadPosts()
        },
        methods:{
             loadPosts(){
        
            let session =JSON.parse(window.sessionStorage.getItem("credz"));
            let token = session.token;
            let url = "http://localhost:3000/api/post/";
            // let body ={userID:userID, message:message, title:title, image:image};
            let options = {method:"GET", headers: {"Content-type":"application/json" ,"Authorization" : "Bearer " + token}};    
           
           fetch(url,options)
            .then(res=>res.json())
            .then(result=>{
                console.log("allPosts result:" , result);
            })
            .catch (error =>{
                console.log(error);

            })

        
             }
}
}

</script>
