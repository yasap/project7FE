<template>
<img src="../assets/icon-left-font-monochrome-black.png" alt="groupomania" width="200px" height="200px">
    <div>
        <h3>Post Details</h3>
        <table class=" postTable">
            <thead>
                <th>TITLE</th>
                <th>DATE</th>
            </thead>
            
            <tbody>
                <tr v-for="post in ListOfPost" :key="post.post_id">
                    <td><router-link v-bind:to="'/post/' +post.post_id">{{post.title}} </router-link></td>
                    <td>{{new Date(post.date_created).toLocaleDateString()}} </td>
                </tr>
            </tbody>    
        </table>
    </div>
   
</template>
<style >
.postTable , th , td {
    text-decoration: 15px black ;
     border: 3px solid; 
     width: 100%; 
    align-content: center;
    padding: 15px;
   
}
th {
    text-decoration: 25 black bold; 
    height: 70px;
}
tr:hover {background-color: coral;}

</style>
<script>
export default {
    name: 'allPost',
    data(){
        return{
            ListOfPost:[],
        }

        },
        
       
        methods:{
             loadPosts(){
        
            let session =JSON.parse(window.sessionStorage.getItem("credz"));
            let token = session.token;
            let url = "http://localhost:3000/api/post/";
            let options = {method:"GET", headers: {"Content-type":"application/json" ,"Authorization" : "Bearer " + token}};    
       

           fetch(url,options)
            .then(res=>res.json())
            .then(result=>{
                console.log("allPosts result:" , result);
                this.ListOfPost = result
                console.log(this.ListOfPost)
                
            })
            .catch (error =>{
                console.log(error);

            })

        
             }
},
beforeMount(){
            this.loadPosts()
        },
 
}

</script>
