( function( win, doc ) {

    'use strict';

    /*
    Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
    As regras são:

    - Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
    diretamente;
    - O input deve iniciar com valor zero;
    - Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
    - Deve haver 4 botões para as operações principais: soma (+), subtração(-),
    multiplicação(x) e divisão(÷);
    - Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
    que irá limpar o input, deixando-o com valor 0;

    - A cada número pressionado, o input deve atualizar concatenando cada valor
    digitado, como em uma calculadora real;
    - Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
    operação no input. Se o último caractere no input já for um símbolo de alguma
    operação, esse caractere deve ser substituído pelo último pressionado.
    Exemplo:
    - Se o input tem os valores: "1+2+", e for pressionado o botão de
    multiplicação (x), então no input deve aparecer "1+2x".
    - Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
    input;
    - Ao pressionar o botão "CE", o input deve ficar zerado.
    */

    // MINHA SOLUÇÃO
    var $input = doc.querySelector( '[data-js="telaA"]' );

    var $0 = doc.querySelector( '[data-js="0"]' );
    var $1 = doc.querySelector( '[data-js="1"]' );
    var $2 = doc.querySelector( '[data-js="2"]' );
    var $3 = doc.querySelector( '[data-js="3"]' );
    var $4 = doc.querySelector( '[data-js="4"]' );
    var $5 = doc.querySelector( '[data-js="5"]' );
    var $6 = doc.querySelector( '[data-js="6"]' );
    var $7 = doc.querySelector( '[data-js="7"]' );
    var $8 = doc.querySelector( '[data-js="8"]' );
    var $9 = doc.querySelector( '[data-js="9"]' );

    var $soma = doc.querySelector( '[data-js="+"]' );
    var $subtracao = doc.querySelector( '[data-js="-"]' );
    var $divisao = doc.querySelector( '[data-js="/"]' );
    var $multiplicacao = doc.querySelector( '[data-js="*"]' );

    var $igual = doc.querySelector( '[data-js="="]' );
    var $ce = doc.querySelector( '[data-js="CE"]' );

    $0.addEventListener( 'click', zero, false );
    $1.addEventListener( 'click', um, false );
    $2.addEventListener( 'click', dois, false );
    $3.addEventListener( 'click', tres, false );
    $4.addEventListener( 'click', quatro, false );
    $5.addEventListener( 'click', cinco, false );
    $6.addEventListener( 'click', seis, false );
    $7.addEventListener( 'click', sete, false );
    $8.addEventListener( 'click', oito, false );
    $9.addEventListener( 'click', nove, false );

    $soma.addEventListener( 'click', soma, false );
    $subtracao.addEventListener( 'click', subtracao, false );
    $divisao.addEventListener( 'click', divisao, false );
    $multiplicacao.addEventListener( 'click', multiplicacao, false );

    $igual.addEventListener( 'click', igual, false );
    $ce.addEventListener( 'click', ce, false );

    function zero() {
        if( !$input.value.match( /^0/ ) && !$input.value.match( /\D0$/ ) ) {
            $input.value += 0;
        }
    }
    function um() {
        if( $input.value.match( /^0/ ) ) {
            return $input.value = 1;
        }
        return $input.value += 1;
    }
    function dois() {
        if( $input.value.match( /^0/ ) ) {
            return $input.value = 2;
        }
        return $input.value += 2;
    }
    function tres() {
        if( $input.value.match( /^0/ ) ) {
            return $input.value = 3;
        }
        return $input.value += 3;
    }
    function quatro() {
        if( $input.value.match( /^0/ ) ) {
            return $input.value = 4;
        }
        return $input.value += 4;
    }
    function cinco() {
        if( $input.value.match( /^0/ ) ) {
            return $input.value = 5;
        }
        return $input.value += 5;
    }
    function seis() {
        if( $input.value.match( /^0/ ) ) {
            return $input.value = 6;
        }
        return $input.value += 6;
    }
    function sete() {
        if( $input.value.match( /^0/ ) ) {
            return $input.value = 7;
        }
        return $input.value += 7;
    }
    function oito() {
        if( $input.value.match( /^0/ ) ) {
            return $input.value = 8;
        }
        return $input.value += 8;
    }
    function nove() {
        if( $input.value.match( /^0/ ) ) {
            return $input.value = 9;
        }
        return $input.value += 9;
    }

    function soma() {
        if( $input.value.match( /\D$/ ) ) {
            $input.value = $input.value.slice( 0, -1 );
            return $input.value += '+';
        };
        return $input.value += '+';
    }
    function subtracao() {
        if( $input.value.match( /\D$/ ) ) {
            $input.value = $input.value.slice( 0, -1 );
            return $input.value += '-';
        };
        return $input.value += '-';        
    }
    function divisao() {
        if( $input.value.match( /\D$/ ) ) {
            $input.value = $input.value.slice( 0, -1 );
            return $input.value += '/';
        };
        return $input.value += '/';
    }
    function multiplicacao() {
        if( $input.value.match( /\D$/ ) ) {
            $input.value = $input.value.slice( 0, -1 );
            return $input.value += '*';
        };
        return $input.value += '*';       
    }

    function igual() {
        var resultado;
        if( $input.value.match( /\D$/ ) ) {
            $input.value = $input.value.slice( 0, -1 );
        }
        resultado = win.eval( String ( $input.value ) );
        return $input.value = resultado;
    }
    function ce() {
        $input.value = 0;
    }
    // MINHA SOLUÇÃO

    // SOLUÇÃO DO PROFESSOR
    var $visor = doc.querySelector( '[data-js="visor"]' );
    var $buttonsNumbers = doc.querySelectorAll( '[data-js="button-number"]' );
    var $buttonOperations = doc.querySelectorAll( '[data-js="button-operation"]' );
    var $buttonCE = doc.querySelector( '[data-js="button-ce"]' );
    var $buttonEqual = doc.querySelector( '[data-js="button-equal"]' );

    Array.prototype.forEach.call( $buttonsNumbers, function( button ) {
        button.addEventListener( 'click', handleClickNumber, false );
    } );        
    Array.prototype.forEach.call( $buttonOperations, function( button ) {
        button.addEventListener( 'click', handleClickOperation, false );
    } );
    $buttonCE.addEventListener( 'click', handleClickCE, false );
    $buttonEqual.addEventListener( 'click', handleClickEqual, false );

    function handleClickNumber() {
        $visor.value += this.value;
    }

    function handleClickOperation() {
        $visor.value = removeLastItemIfItIsAnOperator( $visor.value );
        $visor.value += this.value;
    }

    function isLastItemAnOperation( number ) {
        var operations = [ '+', '-', 'x', '÷' ];
        var lastItem = number.split('').pop();
        return operations.some( function( operator ) {
            return operator === lastItem;
        } );
    }

    function handleClickCE() {
        $visor.value = 0;
    }

    function removeLastItemIfItIsAnOperator( number ) {
        if( isLastItemAnOperation( number ) ) {
            return number.slice( 0, -1 );
        };
        return number;
    }

    function handleClickEqual() {
        $visor.value = removeLastItemIfItIsAnOperator( $visor.value );
        var allValues = $visor.value.match( /\d+[+x÷-]?/g );
        $visor.value = allValues.reduce( function( accumulated, actual ) {
            var firstValue = accumulated.slice(0,-1);
            var operator = accumulated.split( '' ).pop();
            var lastValue = removeLastItemIfItIsAnOperator( actual );
            var lastOperator = isLastItemAnOperation( actual ) ? actual.split( '' ).pop() : '';
            switch( operator ) {
                case '+':
                    return ( +firstValue + +lastValue ) + lastOperator;
                break;
                case '-':
                    return ( firstValue - lastValue ) + lastOperator;
                break;
                case 'x':
                    return ( firstValue * lastValue ) + lastOperator;
                break;
                case '÷':
                    return ( firstValue / lastValue ) + lastOperator;
                break;
            }
        } );
    }
    // SOLUÇÃO DO PROFESSOR
    
} ) ( window, document );
