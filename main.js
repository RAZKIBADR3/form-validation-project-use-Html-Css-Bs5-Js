check = document.getElementById("check");
submit = document.getElementById("btn");
submit.disabled = true;
check.onclick = function() {   
    if (!check.checked){
        submit.disabled = true;
    }else{
        submit.disabled = false;
    }
}

function valider(){
    nom = document.getElementById("nom").value;
    prenom = document.getElementById("prenom").value;
    date = document.querySelector('input[type="date"]').value;
    pass = document.getElementById("pass").value;
    spass = document.getElementById("spass").value;
    check = document.getElementById("check");
    if (nom == "" || prenom == "" || date == "" || pass == "" || spass == "" || !check.checked){
        NewAlert('bad','tous les champs est obligatoires')
        return false;
    }
    if (pass != spass){
        NewAlert('bad','les mot de pass etre dovient egaux')
        return false;
    }
    NewAlert('good','Valid👍')
}

function NewAlert(state,text){
    if(state=='good'){
        document.getElementsByClassName('alert')[0].className='alert alert-info';
    }else{
        document.getElementsByClassName('alert')[0].className='alert alert-warning';
    }
    document.getElementsByClassName('alert')[0].style.display = 'block';
    document.getElementById('alertText').innerHTML = text;
    setTimeout(hideAlert,5000);
}function hideAlert(){
    document.getElementsByClassName('alert')[0].style.display='none'
}