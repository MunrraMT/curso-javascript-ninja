( function( win, doc ) {

    'use strict';

    // VARIÁVEIS DOM
    var $input = doc.querySelector( '[data-js="input-cep"]' );
    var $submit = doc.querySelector( '[data-js="submit"]' );
    var $limpar = doc.querySelector( '[data-js="limpar"]' );
    var $logradouro = doc.querySelector( '[data-js="logradouro"]' );
    var $bairro = doc.querySelector( '[data-js="bairro"]' );
    var $estado = doc.querySelector( '[data-js="estado"]' );
    var $cidade = doc.querySelector( '[data-js="cidade"]' );
    var $formAutoPreenchidos = doc.querySelectorAll( 'span' );
    // VARIÁVEIS DOM

    // VARIÁVEL AJAX
    var ajax = new XMLHttpRequest();
    // VARIÁVEL AJAS
    
    // BOTÃO LIMPAR
    $limpar.addEventListener( 'click', botaoLimpar, false );
    
    function botaoLimpar( event ) {
        event.preventDefault();
        limparFormularios();
    }
    
    function limparFormularios( event ) {
        Array.prototype.forEach.call( $formAutoPreenchidos, limparConteudoHTML );
        $input.value = '';
    }
    
    function limparConteudoHTML( item, index, array ) {
        item.textContent = '-';
    }
    // BOTÃO LIMPAR

    // MENSAGEM DE ERRO DE CEP
    function mensagemErro() {
        limparFormularios();
        // alert( 'CEP não encontrado' );
        console.log( 'CEP não encontrado' );
    }
    // MENSAGEM DE ERRO DE CEP

    // BOTÃO CONSULTA DE CEP
    $submit.addEventListener( 'click', pesquisaCEP, false );

    function pesquisaCEP( event ) {
        event.preventDefault();
        var valor = $input.value;
        if( validarCEP( valor ) ) {
            aguardandoPesquisaCEP();
            conteudoCEP( valor );
        } else {
            mensagemErro();
        }        
    }
    
    function validarCEP( valor ) {
        var cep = valor.replace( /\D/g, '' );
        if( cep != '' ) {
            var regexCEP = /^[0-9]{8}$/;
            if( regexCEP.test( cep ) ) {
                return cep;
            } else {
                false;
            }
        } else {
            false;
        }
    }

    function aguardandoPesquisaCEP() {
        Array.prototype.forEach.call( $formAutoPreenchidos, function( item, index, array ) {
            item.textContent = '...';
        } );
    }

    function conteudoCEP( valor ) {      
        var url = 'https://viacep.com.br/ws/'+ valor + '/json/';
        ajax.open( 'GET', url );
        ajax.send();
        ajax.addEventListener( 'readystatechange', modificarQuandoEstiverPronto );
    }

    function modificarQuandoEstiverPronto() {
        if( ajax.readyState === 4 && ajax.status === 200 ) {
            autoPreenchumento();
        }
    }
    // BOTÃO CONSULTA DE CEP
    
    // AUTO PREENCHIMENTO DE FORMULÁRIO COM BASE NO CEP VÁLIDO
    function autoPreenchumento() {
        var conteudoParseado = JSON.parse( ajax.responseText );
        $logradouro.textContent = ( conteudoParseado.logradouro );
        $bairro.textContent = ( conteudoParseado.bairro );
        $estado.textContent = ( conteudoParseado.uf );
        $cidade.textContent = ( conteudoParseado.localidade );
    }
    // AUTO PREENCHIMENTO DE FORMULÁRIO COM BASE NO CEP VÁLIDO

} ) ( window, document );