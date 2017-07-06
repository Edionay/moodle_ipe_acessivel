window.addEventListener("load", inserirPainelDeControle());


function inserirPainelDeControle() {
    const links = document.getElementsByClassName('skiplinks');
    const linksDoPainelDeControle = links[0];
    linksDoPainelDeControle.appendChild(criarLinkPerfil());
    linksDoPainelDeControle.appendChild(criarLinkPreferencias());
    linksDoPainelDeControle.appendChild(criarLinkNotas());
    linksDoPainelDeControle.appendChild(criarLinkMensagens());
    linksDoPainelDeControle.appendChild(criarLinkCursos());
    linksDoPainelDeControle.appendChild(criarLinkSair());
}


function criarLinkPerfil() {
    const link = document.createElement('a');
    link.setAttribute('href', 'https://ensino.ead.ufg.br/user/edit.php');
    link.innerText = 'Editar perfil';
    link.className = 'skip';
    return link;
}

function criarLinkPreferencias() {
    const link = document.createElement('a');
    link.setAttribute('href', 'https://ensino.ead.ufg.br/user/preferences.php');
    link.innerText = 'Editar preferências';
    link.className = 'skip';
    return link;
}

function criarLinkNotas() {
    const link = document.createElement('a');
    link.setAttribute('href', 'https://ensino.ead.ufg.br/grade/report/overview/index.php');
    link.innerText = 'Notas';
    link.className = 'skip';
    return link;
}

function criarLinkMensagens() {
    const link = document.createElement('a');
    link.setAttribute('href', 'https://ensino.ead.ufg.br/message/index.php');
    link.innerText = 'Mensagens';
    link.className = 'skip';
    return link;
}

function criarLinkCursos() {
    const link = document.createElement('a');
    link.setAttribute('href', 'https://ensino.ead.ufg.br/course/index.php');
    link.innerText = 'Cursos';
    link.className = 'skip';
    return link;
}

function criarLinkSair() {
    const link = document.createElement('a');
    link.setAttribute('href', 'https://ensino.ead.ufg.br/login/logout.php');
    link.innerText = 'Sair';
    link.accessKey = 's';
    return link;
}

function criarLinkNavegacao() {
    const link = document.createElement('a');
    link.setAttribute('href', '#instance-4-header');
    link.className = 'skip';
    link.accessKey = 'n';
}

/*function criarLinkCursos() {
    const link = document.createElement('a');
    link.setAttribute('href', '#instance-17069-header');
    link.className = 'skip';
    link.accessKey = 'c';
    return link;
}*/

function criarLinkArquivos() {
    const link = document.createElement('a');
    link.setAttribute('href', '#instance-17070-header');
    link.className = 'skip';
    link.accessKey = 'a';
    return link;
}

function criarLinkUsuariosOnline() {
    const link = document.createElement('a');
    link.setAttribute('href', '#instance-17071-header');
    link.className = 'skip';
    link.accessKey = 'u';
    return link;
}

