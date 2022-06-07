<template>
<img src="../assets/icon-left-font-monochrome-black.png" alt="groupomania" width="200px" height="200px">
    <div>
        <span> {{this.UnreadPostCount}} </span>
        <h3>Post Details</h3>
        <table class=" postTable">
            <thead>
                <th>TITLE</th>
                <th>DATE</th>
                <th>read</th>
            </thead>
            
            <tbody>
                <tr v-for="post in ListOfPost" :key="post.post_id">
                    <td><router-link v-bind:to="'/post/' +post.post_id">{{post.title}} </router-link></td>
                    <td>{{new Date(post.date_created).toLocaleDateString()}} </td>
                     <td><button :disabled= "isDisabled(post.post_id)" v-on:click= "markAsRead(post.post_id)"> Mark as read  </button> </td>
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
let session =JSON.parse(window.sessionStorage.getItem("credz"));
export default {
    name: 'allPost',
    data(){
        return{
            ListOfPost:[],
            readPost:[],
            UnreadPostCount:0
        }

        },

       
        
       
        methods:{
             loadPosts(){
        
            
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

        
             },
             isDisabled(id){
                let result = false;
                for(let post of this.readPost){
                    if(post.postid === id){
                         result = true;
                         break;
                     }
             }
                return result
            },
            countUnread(){
                let counter = 0;
                this.ListOfPost.forEach(element => {
                    this.readPost.forEach(e =>{
                        if(e.postid == element.post_id && e.userid == session.userID)  {
                            counter++;
                            }

                        })
                    
                });
                this.UnreadPostCount = this.ListOfPost.length - counter;

            },
            
             loadReadPost(){
        
            let session =JSON.parse(window.sessionStorage.getItem("credz"));
            let token = session.token;
            const userID = session.userID;
            let url = `http://localhost:3000/api/post/readPost/${userID}`;
            let options = {method:"GET", headers: {"Content-type":"application/json" ,"Authorization" : "Bearer " + token}};    
       

           fetch(url,options)
            .then(res=>res.json())
            .then(result=>{
                console.log("readPostresult:" , result);
                this.readPost = result;
                console.log(this.readPost);
                this.countUnread();
                
            })
            .catch (error =>{
                console.log(error);

            })

        
             },
             markAsRead(id){
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

             }

},
beforeMount(){
            this.loadPosts();
            this.loadReadPost();
            this.countUnread()
        },
 
}

</script>
