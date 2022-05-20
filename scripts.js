const cep = document.querySelector("#cep");
var labelcep = document.querySelector("#labelcep");
const showInfo = (result)=>{
    for(const campo in result){
        if(document.querySelector("#"+campo)){
            document.querySelector("#"+campo).value = result[campo]
            
            console.log(campo)
        }
    }
}
cep.addEventListener("blur",(e)=>{
    let busca = cep.value.replace("-","")
    const op = {
        method: 'GET',
        mode: 'cors',
        cache: 'default'
    }
    fetch(`https://viacep.com.br/ws/${busca}/json/`, op)

    .then(res => { res.json()
        .then( data => showInfo(data))
        cep.setAttribute('style', 'border: 2px solid none;')
        labelcep.setAttribute('style','color: white')
        labelcep.innerHTML = 'Informe o CEP'
    })
    .catch(e => labelcep.setAttribute('style','color: red'), labelcep.innerHTML = 'CEP não encontrado!', cep.setAttribute('style', 'border: 2px solid red;'))
})