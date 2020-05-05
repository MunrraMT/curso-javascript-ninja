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

    

} ) ( window, document );