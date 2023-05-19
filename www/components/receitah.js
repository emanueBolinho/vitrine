window.onload = function(){
 ExibirReceita(); 
}

    function ExibirReceita(){
        var url = 'https://hakim.profrodolfo.com.br/receitas.php/listaR.php';
        var d = document.querySelector('.dados');

        fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then((json)=>{        
            for(i = 0; i < json.length; i++){
                    d.innerHTML+= '<div class="productBox"><img src='+json[i].foto+' width="80%" height="80%""><h3>'+json[i].nome+'</h3><h3>9,00 reais</h3></div>';
            }
        }).catch();

}

function BuscarReceita(){
        let search = document.getElementById('txtBusca').value.toUpperCase();
        fetch(url)
        .then(resposta => {
            return resposta.json();
        })
        .then((json)=>{        
            for(i = 0; i < json.length; i++){
                if(json[i].ingredientes.toUpperCase().includes(search)){
                    d.innerHTML+= '<div class="productBox"><img src='+json[i].foto+' width="80%" height="80%""><h3>'+json[i].nome+'</h3> <h4> Ingredientes:' +json[i].ingredientes+'</h4> <h4> Modo de preparo:'+json[i].md_pre+'</h4></div>';
                }
            }
        }).catch();
    }

    btn.addEventListener('click', function(){
        d.innerHTML = ``;
        BuscarReceita();
    });