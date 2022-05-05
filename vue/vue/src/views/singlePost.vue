<script>
export default {
    name:"singlePost",
    data(){
        SinglePost:{}
    },
    methods:{
        getpost =(){
            fetch(http://localhost:3000/api/post/:id", option)
            .then (result =>{
                this.post = result
            })
        }
    }
}
</script>