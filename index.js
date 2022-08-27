/*
const $fragment = document.createDocumentFragment();
const $container = document.querySelector('.container')




const getdatos = async () =>{
const url = "https://platzi-avo.vercel.app/api/avo";
const resp = await fetch(url)
const respjson = await resp.json()




respjson.data.forEach((item)=>{


    const $imagen = document.createElement('img')
    $imagen.src = `https://platzi-avo.vercel.app/${item.image}`

    const $title = document.createElement('h2')
    $title.textContent = item.name

    const $price = document.createElement('div')
    $price.textContent = `$${item.price}`
    $price.className = "price"

   
    const $item = document.createElement('div')
    $item.id = "item"
    $item.className = "col-3"
    $item.append($imagen,$title,$price)
    
    $fragment.appendChild($item)

})
    $container.appendChild($fragment)
}

*/

const $container = document.querySelector('.contenedor')
const $fragment = document.createDocumentFragment();
const templateAguacate = document.querySelector('#templateAguacate').content


const getdatos = async ()=>{
   
    try{
    const url = "https://platzi-avo.vercel.app/api/avo";
    const resp = await fetch(url)
    console.log(resp) 
    if (!resp.ok) throw { status: resp.status, statusText: resp.statusText };
    const respjson = await resp.json()
        
        respjson.data.forEach(item => {
        templateAguacate.querySelector('h2').textContent = item.name
        templateAguacate.querySelector('.price').textContent = `$${item.price}`
        templateAguacate.querySelector('img').src = `https://platzi-avo.vercel.app/${item.image}`
        
  
        const clone = templateAguacate.cloneNode(true)
        $fragment.appendChild(clone)
        
          
      });
        $container.appendChild($fragment)
      }catch(err){
        console.log(err)
        console.log("estatus de la peticion fue "+ err.status)
      }
    }
     
getdatos()