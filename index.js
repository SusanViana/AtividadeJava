//1 Escreva um programa em Javascript e crie uma variável chamada "nome_do_carro" e atribua-a um valor "Fusca". Exiba-a ao usuário.

function exercicio1(){

    var nome_do_carro = "fusca";

    alert(nome_do_carro);

}

//2 Escreva um programa em Javascript em que o usuário informe o seu nome e exiba a mensagem "Olá, [NomeDoUsuario]".

function exercicio2(){

    var nome_do_usuario = prompt("Qual é o seu nome?");

    alert("olá" + nome_do_usuario);

}

//3 Escreva um programa em Javascript em que o usuário informe o seu nome e em seguida o programa perguntará a idade do usuário. Agora o programa deve exibir a mensagem "Olá, [NomeDoUsuario], sua idade é [idade]".

function exercicio3(){

    var nome_do_usuario = prompt("qual é o seu nome?");

    var idade_do_usuario = prompt("qual é a sua idade?");

    alert("Olá " + nome_do_usuario + ",sua idade é " + idade_do_usuario);

}

//4 Considerando a figura abaixo, escreva um programa para cada forma que calcule e exiba em tela cada uma de suas respectivas áreas. O usuário irá informar os valores de cada variável.

function exercicio4(){

    var base = parseFloat(prompt("qual a base do retangulo?"));

    var altura = parseFloat(prompt("qual a altura do retangulo?"));

    var retangulo = base * altura;

    alert(retangulo);

    var lado = parseFloat(prompt("qual o valor do lado do quadrado?"));

    var quadrado = lado * lado;

    alert(quadrado);

    var diagonal_maior = parseFloat(prompt("qual o valor da diagonal maior?"))

    var diagonal_menor = parseFloat(prompt("qual o valor da diagonal menor"))

    var losangolo = diagonal_maior * diagonal_menor / 2;

    alert(losangolo);

    var base_maior = parseFloat(prompt("qual o valor da base maior?"));

    var base_menor = parseFloat(prompt("qual é o valor da base menor?"))

    var h = parseFloat(prompt("qual é o valor da altura?"));

    var Trapezio = (base_maior + base_menor) * h / 2;

    alert(Trapezio);

    var base = parseFloat(prompt("qual a base do paralelogramo?"));

    var altura = parseFloat(prompt("qual a altura do paralelogramo?"));

    var Paralelogramo = base * altura;

    alert(Paralelogramo);

    var base = parseFloat(prompt("qual a base do triangulo?"));

    var altura = parseFloat(prompt("qual a altura do triangulo?"));

    var triangulo = base * altura / 2;

    alert(triangulo);

    var pi = 3.14

    var raio = parseFloat(prompt("qual é o valor do raio?"));

    var Circulo = pi * (raio * raio);

    alert(Circulo);

}