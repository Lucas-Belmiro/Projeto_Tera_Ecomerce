const init = () => {
    document.getElementById('button-send').addEventListener('click', submitForm);
}

const submitForm = async (e) => {
    e.preventDefault(); 

    const data = accessData()
    const url = "http://localhost:3333/users"

    if(!data) return;

    // debugger;
    
    try{
       let result = await fetch(`${url}/create`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
              "Content-Type": "application/json"
            },
            credentials: "include"
          })
          console.log(await result.json());
    }catch(error){
        alert(error);
    }


 
     /*    .then((response) => {
            console.log(response.body);
        })
        .catch((e) => {
            alert(e.message);
            return console.error(e)
        }) */
}

const accessData = () => {
    return { 
        "name": document.getElementById("input-first").value,
        "password": document.getElementById("input-password").value,
        "email": document.getElementById("input-email").value
    }
}

init()

// EXEMPLO DE GET ALL
// const getAll =  () => {
//      fetch("http://localhost:3000/users/all")        
//         .then((response) => {
//             return response.json()        
//             .then((data) => {
//                 return console.log(data)
//             })
//         })        
//         .catch((e) => {
//             return console.error(e)
//         })
// }

// getAll()