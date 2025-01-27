function validarLogin()	{
	
	// pegar valor do input no html 
	let nomeUsuario = document.getElementById('txtUsuario').value;
	let senha = document.getElementById('txtSenha').value;
	
	//verificar se o user tem nome
	if(nomeUsuario == '') {
		alert('Nome do Usuário é obrigatório');
	}
	
	//verificar login & senha
	else if(nomeUsuario == 'maria' && senha == '1234') {
		alert('Senha correta');
		window.location.href = './teste.html';
	}
	else {
		alert('Usuário/Senha incorretos!');
	}

}