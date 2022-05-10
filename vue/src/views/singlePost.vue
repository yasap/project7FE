<template>
    <div>
        <h3>Single Post Details</h3>
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
    name:"singlePost",
    data(){
        SinglePost:{}
    },
    methods:{
        getpost => (){
            fetch(http://localhost:3000/api/post/:id", option)
            .then (result =>{
                this.post = result
                
            })
        }
    }
}
</script>