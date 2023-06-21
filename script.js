

// const userData = async () => {
//     try {
//         await new Promise((resolve) => setTimeout(resolve, 2000));

//         const result = fetch("https://jsonplaceholder.typicode.com/users")
//         const getJsd = await result.json();
//         getJsd.forEach((something) => {
//             const wrapper = document.getElementById("wrap")
//             const userName = document.createElement("h3")
//             userName.textContent =  something.name;
//             wrapper.appendChild(userName)
//         })
//     }

//     catch(error) {
//         console.log(error, 'error')
//     }
// }

// userData();




// const randomData = async () => {
//     try{
//      await new Promise ( (resolve) => setTimeout(resolve,2000));
//      const result = fetch("https://jsonplaceholder.typicode.com/users")
//     const getJson = await result.json()
//     getJson.forEach((getJson) => {
//         // const wrap = document.getElementById("wrap")
//         const userName = document.createElement("h3")
//         userName.textContent = getJson.name;
//         // wrap.appendChild(userName)
//         document.body.appendChild(userName)
//     })

//     }

//     catch(error) {
//         console.log(error,"error")
//     }
// }
// randomData();


// const getUserData = async () => {
//     try {
//         const result = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//         const data = await result.json()
//         const p = document.createElement('p')
//         p.textContent = data.title
//         document.body.appendChild(p)

//     } catch (error) {
//         console.log(error, 'error')

//     }
// }
// getUserData();


// const getUsersData = async () => {
//     try {
       
//         const result = await fetch("https://jsonplaceholder.typicode.com/todos/1")
//         const getJson = await result.json()
//         const p = document.createElement("p")
//         p.textContent = getJson.title;
//         document.body.appendChild(p )
//     }

//     catch(error) {
//         console.log(error,"error")
//     }
// }
// getUsersData();


const getUsersData = async () => {
   try {
    await new Promise((something) => setInterval(something,2000) );
    const result = await fetch("https://jsonplaceholder.typicode.com/users")
    const getJsn = await result.json()
    getJsn.forEach((getJsn) => {
        const wrap = document.getElementById("wrap")
        const div = document.createElement("div")
        div.classList.add("divi")
        const name = document.createElement("h3")
        name.classList.add("name")
        name.textContent = `NAME : ${getJsn.name}`;
        div.appendChild(name)
        const userName = document.createElement("h4")
        userName.classList.add("username")
        userName.textContent = `USERNAME : ${getJsn.username}`;
        div.appendChild(userName)
        const email = document.createElement("h6")
        email.classList.add("email")
        email.textContent = `EMAIL : ${getJsn.email}`
        div.appendChild(email)
        const address = document.createElement("span")
        address.classList.add("address")
        address.textContent  =  `ADDRESS:${getJsn.address.street} | | CITY:${getJsn.address.city} | | ZIPCODE: ${getJsn.address.zipcode}`
        div.appendChild(address)
        wrap.appendChild(div)
    })
   }
   catch(error) {
    console.log(error,"error")
   }
}
getUsersData();

