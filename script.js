function msg(){
    alert('Bem vindo ao Sistema');
    document.writeln('Minha primeira função');
}
msg ();

function peganome(nome){
    nome = prompt('Digite seu nome');
    document.writeln('Olá, ' + nome + '! Bem-vindo(a)!');
}

function soma(){
let a,b,r;
a = 10;
b = 20;
r = a + b;
document.writeln(r);
}

function soma2() {
    let a = parseInt(prompt('Digite seu primeiro valor'));
    let b = parseInt(prompt('Digite seu segundo valor'));
    let r = a + b;
    document.writeln (r);
}

function soma3 (){
    let base,altura,r;
    base = parseFloat(prompt('Digite seu 1 valor'));
    altura = parseFloat(prompt('Digite seu 2 valor'));
    r = (base * altura) / 2;
    document.writeln(r);
    }
    
function idade(){
    let idade , r;
    idade = parseInt(prompt('Digite sua idade'));
    r = 365 * idade;
    document.writeln(r);
}

function converterIdade(){
    let idade , r;
    idade = parseFloat(prompt('Digite sua idade'));
    r = 12 * idade;
    document.write(r);
}

function media(){
    let nota1, nota2, nota3, r;
    nota1 = parseFloat(prompt('Digite sua nota1'));
    nota2 = parseFloat(prompt('Digite sua nota2'));
    nota3 = parseFloat(prompt('Digite sua nota3'));
    r = (nota1 + nota2 + nota3) / 3;
    document.write(r);

    if (r >= 6){
        document.writeln(" O aluno foi aprovado");
    }else{
        document.writeln(" O aluno foi reprovado");
    }
}

