let btnAbrirModal = document.querySelector('#btn-abrir-modal');
let btnFecharModal = document.querySelector('#btn-fechar-modal');
let fadeModal = document.querySelector('#fade');

let containerMenuHide = document.querySelector('#container-menu-hide');

/* Abrir ou fechar modal*/
[btnAbrirModal,btnFecharModal].forEach((elemento) => {
    elemento.addEventListener('click', toggleModal)
})

/*adicionar ou remover classe hide */
function toggleModal() {
    fadeModal.classList.toggle('hide');
}


function verificaTamanhoTela(){
    window.addEventListener('load',function(){
        if(window.innerWidth < 768){
            containerMenuHide.classList.add('hide');
            btnAbrirModal.classList.remove('hide');
        }
        else{
           btnAbrirModal.classList.add('hide');
        }
    })

    window.addEventListener('resize', function(){
        if(window.innerWidth < 768){
            containerMenuHide.classList.add('hide');
            btnAbrirModal.classList.remove('hide');
        }
        else{
           containerMenuHide.classList.remove('hide');
           btnAbrirModal.classList.add('hide');
        }
    })
}

verificaTamanhoTela();