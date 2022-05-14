<template>

    <div>
        <h3>Post Details</h3>
        <table class=" postTable">
            <thead class="alignment">
                <th>Id</th>
                <th>title</th>
                <th>date</th>
            </thead>
            
            <tbody>
                <tr v-for="post in ListOfPost" :key="post.post_id">
                    <td>{{post.post_id}} </td>
                    <td><router-link v-bind:to="'/post/' +post.post_id">{{post.title}} </router-link></td>
                    <td>{{new Date(post.date_created).toLocaleDateString()}} </td>
                </tr>
            </tbody>    
        </table>
    </div>
    <!-- <div class="align" v-for="post in ListOfPost" :key="post.post_id">
        <ul class="main">
    <li><h3>{{post.post_id}}</h3> 
    <h2><router-link v-bind:to="'/post/' +post.post_id">{{post.title}} </router-link></h2>
    <h5>{{post.date_created}} </h5></li>
        </ul>
    </div> -->
</template>
<style >
.main{
    display: flex;
    flex-direction: row;
    text-decoration: none;
   
    /* align-content: space-between; */
}
.align{
    display: flex;
    flex-direction: column;
    text-decoration: none;
     width: 100%;
     list-style: none;
}
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
            // let body ={userID:userID, message:message, title:title, image:image};
            let options = {method:"GET", headers: {"Content-type":"application/json" ,"Authorization" : "Bearer " + token}};    
        //  var date = new Date(post.date_created);
        //  date.toString("MMM dd");

           fetch(url,options)
            .then(res=>res.json())
            .then(result=>{
                console.log("allPosts result:" , result);
                // this.result.date_created;
                // console.log(this.result.date_created)
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
