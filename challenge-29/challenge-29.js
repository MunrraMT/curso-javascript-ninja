(function( win, doc, $ ) {
  'use strict';

  /*
  Vamos estruturar um pequeno app utilizando módulos.
  Nosso APP vai ser um cadastro de carros. Vamos fazê-lo por partes.
  A primeira etapa vai ser o cadastro de veículos, de deverá funcionar da
  seguinte forma:
  - No início do arquivo, deverá ter as informações da sua empresa - nome e
  telefone (já vamos ver como isso vai ser feito)
  - Ao abrir a tela, ainda não teremos carros cadastrados. Então deverá ter
  um formulário para cadastro do carro, com os seguintes campos:
    - Imagem do carro (deverá aceitar uma URL)
    - Marca / Modelo
    - Ano
    - Placa
    - Cor
    - e um botão "Cadastrar"

  Logo abaixo do formulário, deverá ter uma tabela que irá mostrar todos os
  carros cadastrados. Ao clicar no botão de cadastrar, o novo carro deverá
  aparecer no final da tabela.

  Agora você precisa dar um nome para o seu app. Imagine que ele seja uma
  empresa que vende carros. Esse nosso app será só um catálogo, por enquanto.
  Dê um nome para a empresa e um telefone fictício, preechendo essas informações
  no arquivo company.json que já está criado.

  Essas informações devem ser adicionadas no HTML via Ajax.

  Parte técnica:
  Separe o nosso módulo de DOM criado nas últimas aulas em
  um arquivo DOM.js.

  E aqui nesse arquivo, faça a lógica para cadastrar os carros, em um módulo
  que será nomeado de "app".
  */

  function app() {
    return {
      init: function() {
        console.log('app init');
        this.companyInfo();
        this.initEvents();
      },

      initEvents: function initEvents() {
        var $formRegister = $( '[data-js="form-register"]' );
        $formRegister.addEventListener( 'submit', this.handleSubmit, false );
      },

      handleSubmit: function handleSubmit( event ) {
        event.preventDefault();
        console.log( 'submit' );
        var $tableCar = $( '[data-js="table-car"]' );
        $tableCar.appendChild( app().createNewCar() );
      },

      createNewCar: function createNewCar() {
        var $fragment = doc.createDocumentFragment();
        var $tr = doc.createElement( 'tr' );
        var $tdImage = doc.createElement( 'td' );
        var $image = doc.createElement( 'img' );
        var $tdBrand = doc.createElement( 'td' );
        var $tdyear = doc.createElement( 'td' );
        var $tdPlate = doc.createElement( 'td' );
        var $tdColor = doc.createElement( 'td' );

        $image.setAttribute( 'src', $( '[data-js="image"]' ).value );
        $image.setAttribute( 'width', '100px' );
        $tdImage.appendChild( $image );

        $tdBrand.textContent = $( '[data-js="brand-model"]' ).value;
        $tdyear.textContent = $( '[data-js="year"]' ).value;
        $tdPlate.textContent = $( '[data-js="plate"]' ).value;
        $tdColor.textContent = $( '[data-js="color"]' ).value;

        $tr.appendChild( $tdImage );
        $tr.appendChild( $tdBrand );
        $tr.appendChild( $tdyear );
        $tr.appendChild( $tdPlate );
        $tr.appendChild( $tdColor );

        return $fragment.appendChild( $tr );
      },

      companyInfo: function companyInfo() {
        var ajax = new XMLHttpRequest();
        ajax.open( 'GET', './company.json', true );
        ajax.send();
        ajax.addEventListener( 'readystatechange', this.getCompanyInfo, false );
      },

      getCompanyInfo: function getCompanyInfo() {
        if( !app().isReady.call( this ) ) {
          return;
        }

        var data = JSON.parse(this.responseText);
        var $companyName = $( '[data-js="company-name"]' );
        var $companyPhone = $( '[data-js="company-phone"]' );
        $companyName.textContent = data.name;
        $companyPhone.textContent = data.phone;
      },

      isReady: function isReady() {
        return this.readyState === 4 && this.status === 200
      }
    };
  }

  app().init();
  
})( window, document, window.DOM );
