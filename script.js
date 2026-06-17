const usercontainer=document.getElementById("usercontainer")
const message=document.getElementById("message")
 
 async function fetchUsers(){
  try{
     const response=await fetch("https://jsonplaceholder.typicode.com/users?utm_source=chatgpt.com")
     const users=await response.json()
      message.style.display="none"
         users.forEach( user=> {
           usercontainer.innerHTML+=`
              <div class="card">
              <h3>${user.name}</h3>
              <p>${user.email}</p>
              <p>${user.phone}</p>
              </div>`
        });
   }
  catch (error) {
        message.textContent = "Error loading users";
        console.error(error);
    }
 }
 fetchUsers()  