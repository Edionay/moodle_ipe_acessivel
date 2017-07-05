window.addEventListener("load", criarLinkPerfil());


function inserirPainelDeControle() {
    let links = document.getElementsByClassName('skiplinks');
    
}


function criarLinkPerfil() {
    const link = document.createElement('a');
    link.setAttribute('href', 'https://ensino.ead.ufg.br/user/edit.php');
    link.innerText = 'Editar perfil';
    link.className = 'skip';
}

function criarLinkPreferencias() {
    const link = document.createElement('a');
    link.setAttribute('href', 'https://ensino.ead.ufg.br/user/preferences.php');
    link.innerText = 'Editar preferências';
    link.className = 'skip';
}

function criarLinkNotas() {
    const link = document.createElement('a');
    link.setAttribute('href', 'https://ensino.ead.ufg.br/grade/report/overview/index.php');
    link.innerText = 'Notas';
    link.className = 'skip';
}

function criarLinkMensagens() {
    const link = document.createElement('a');
    link.setAttribute('href', 'https://ensino.ead.ufg.br/message/index.php');
    link.innerText = 'Mensagens';
    link.className = 'skip';
}

function criarLinkCursos() {
    const link = document.createElement('a');
    link.setAttribute('href', 'https://ensino.ead.ufg.br/course/index.php');
    link.innerText = 'Cursos';
    link.className = 'skip';
}

function criarLinkSair() {
    const link = document.createElement('a');
    link.setAttribute('href', 'https://ensino.ead.ufg.br/login/logout.php');
    link.innerText = 'Sair';
    link.className = 'skip';
    link.accessKey = 's';
}

function criarLinkNavegacao() {
    const link = document.createElement('a');
    link.setAttribute('href', '#instance-4-header');
    link.className = 'skip';
    link.accessKey = 'n';
}

function criarLinkCursos() {
    const link = document.createElement('a');
    link.setAttribute('href', '#instance-17069-header');
    link.className = 'skip';
    link.accessKey = 'c';
}

function criarLinkArquivos() {
    const link = document.createElement('a');
    link.setAttribute('href', '#instance-17070-header');
    link.className = 'skip';
    link.accessKey = 'a';
}

function criarLinkUsuariosOnline() {
    const link = document.createElement('a');
    link.setAttribute('href', '#instance-17071-header');
    link.className = 'skip';
    link.accessKey = 'u';
}

