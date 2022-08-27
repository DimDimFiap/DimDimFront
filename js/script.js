const links = document.querySelectorAll(".header-menu a");
const activeLink = (link) => {
    if(location.href.includes(link.href)){
        link.classList.add("active");
    };
    console.log("ola")
};

links.forEach(activeLink);

if(window.SimpleAnime){
    new SimpleAnime()
} 


// Página de Cadastro
if(window.location.href.includes("cadastro")){

    const form = document.querySelector("#formsTransaction")
    const title = document.querySelector("#title");
    const value = document.querySelector("#value");
    const type = document.querySelector("#type");


    async function postData(url = '',data ={title: String, value: Number, transactionTypeId: Number}){
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            referrerPolicy: 'no-referrer',
            body: JSON.stringify(data),
        });
        return response.json(); 
    }

    form.addEventListener("submit", (event) =>{
        event.preventDefault();
        postData('https://app-dimdim-220827164613.azurewebsites.net/', {title: title.value, value: parseFloat(value.value), type: parseInt(type.value)})
        .then((data) => {
            console.log(data);
        });
        
    })

}


// Página de Consulta


// const edit = document.querySelector("#edit");

// console.log(edit)

// const editInfo = (edit) => {
    //     const inputs = document.querySelectorAll(".table-data td input")
//     console.log(edit)
//     edit.addEventListener('click', () => {
//         inputs.forEach( input => {
//             if(input.disabled){
//                 input.removeAttribute("disabled")
//             }else{
//                 input.setAttribute("placeholder", validation(input)) 
//                 input.setAttribute("disabled", true)
//             }
//         })

//     });
// }

// function validation(input){
//     if(input.textContent != null){
//         if(input.textContent == Number){
//             return `R$ ${input.textContent}`
//         }else{
//             return input.textContent
//         }
//     }else{
//         return input.getAttribute("placeholder")
//     } 
// }

// editInfo(edit)