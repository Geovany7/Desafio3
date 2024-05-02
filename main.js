console.log(document.getElementById('nome'))
function enviar() {
    let valorNome = document.getElementById('nome').value;
    let valorEmail = document.getElementById('email').value;
    let valorSenha = document.getElementById('senha').value;
    let valorTextarea = document.getElementById('textarea').value;

    if (valorNome == "") {
        document.getElementById('nome').style.borderColor = 'red'
        document.getElementById('campos1').innerHTML = 'campo obrigatório'


    }
    if (valorEmail == "") {
        document.getElementById('email').style.borderColor = 'red'
        document.getElementById('campos2').innerHTML = 'campo obrigatório'

    }
    if (valorSenha == "") {
        document.getElementById('senha').style.borderColor = 'red'
        document.getElementById('campos3').innerHTML = 'campo obrigatório'
    }
    if (valorTextarea == "") {
        document.getElementById('textarea').style.borderColor = 'red'
        document.getElementById('campos4').innerHTML = 'campo obrigatório'
    }
    if (valorNome != "" && valorEmail != "" && valorSenha != "" && valorTextarea != ""){
        document.getElementById('nome').style.borderColor = '#3CCC87'
        document.getElementById('email').style.borderColor = '#3CCC87'
        document.getElementById('senha').style.borderColor = '#3CCC87'
        document.getElementById('textarea').style.borderColor = '#3CCC87'

        document.getElementById('campos1').innerHTML = ''
        document.getElementById('campos2').innerHTML = ''
        document.getElementById('campos3').innerHTML = ''
        document.getElementById('campos4').innerHTML = ''
    }
};
