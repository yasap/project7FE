<template>
  <div class="home">
    <header>
 <img src="../assets/icon-left-font-monochrome-black.png" alt="groupomania" width="200px" height="200px">
</header>

<div class="menu"> 
  <a href="/account.html"><i class="fas fa-user"></i></a>
  <a href="/post.html"><i class="fas fa-pen"></i></a>
  <a href="/signin.html"><i class="fas fa-sign-out-alt"></i></a>
</div>

<div class="introduction">
    <h5> Six months ago, the company founders detected a decline in productivity. They
quickly linked it to a lack of employee motivation and engagement. We have since
taken action and set up a steering committee on well-being at work two months ago.
It is made up of a dozen people, including management representatives and
employees. Its role is to send out surveys to employees and share the results with the
Human Resources department to consider further action which could improve
employees’ well-being.
The most recent survey confirmed that some members of staff were not satisfied with
the atmosphere at work. The following data was particularly eye-opening.<br>Here there is an oppurtunity to improve our company ,sharing your though by post.</h5>
</div>

  </div>
</template>

<script>
// @ is an alias to /src

</script>

<style>
header{
  display: flex;
  flex-direction: row;
justify-content: space-around;

}
.sign {
  border: 2px solid black;
  width: 60px;
  height: 20px;
  margin-top: 120px;
  padding: 5px;
}

a:visited {
  text-decoration: none;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}
 

form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin: 1em auto;
  border: 3px solid #f1f1f1;
  width: 50%;
  padding: 1em;

}
label {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 1em;
  font-size:medium;
  align-items: flex-start;
}

 input[type=text], input[type=password], input[type=date], input[type=email], textarea{
   display: flex;
   flex-direction: row;
   align-items: flex-start;
   width: 100%;
   padding: 12px 20px;
   margin: 8px 0;
   border: 1px solid #ccc;
   box-sizing: border-box; 
} 
.submit{
    background-color: rgb(4, 179, 71);
    color: white;
    height: 40px;
    width: 200px;
    justify-content: end;
    border: white;
}

/*homepage*/
header {
  size: 1000px;
}
.menu {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  font-size: 20px;
  background-color: lightgray;
  padding: 1pc;
  border: 2px solid black;
}
 .introduction {
   margin: 40px;
   padding: 30px;
   font-size: 20px;
   border: 5px solid rgb(40, 8, 100);
 }

 /*post page*/

 /* .post {
   display: flex;
   flex-direction: column;
   align-items: center;
   padding: 40px;
   margin: 30px;
   border: 2px solid black;
 } */
 #description {
   width: 773px;
   height: 350px;
 }

@media screen and (min-width: 300px) and (max-width: 425px)  {
body {
  width: 100%;
}

  header{
display: flex;
flex-direction: row;  
justify-content: space-around;
}
.sign {
  border: 2px solid black;
  width: 50px;
  height: 30px;
  margin-top: 120px;
  padding: 5px;
}

  .signbtn {
  width: 80px;
  height: 40px;
  margin-left: 45px;
}
}
    
</style>
