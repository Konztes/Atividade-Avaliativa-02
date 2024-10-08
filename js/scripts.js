function validarDados() {
    let nome = frmRegistro.inNome.value;
    let fone = frmRegistro.inFone.value;
    let mail = frmRegistro.inMail.value;
    let cargo = frmRegistro.inCargo.value;
    let depto = frmRegistro.inDepto.value;
    let imagem = frmRegistro.inImg.value;

    if (nome.trim() == '') {
        frmRegistro.inNome.focus();
        mensagemErro.style.display = 'block';
        mensagemErro.innerText = 'Mensagem de Erro: o campo Nome está vazio';
        spNome.innerText = nome;
        return false;
    }

    if (fone.trim() == '') {
        frmRegistro.inFone.focus();
        mensagemErro.style.display = 'block';
        mensagemErro.innerText = 'Mensagem de Erro: o campo Telefone está vazio';
        return false;
    }

    if (mail.trim() == '') {
        frmRegistro.inMail.focus();
        mensagemErro.style.display = 'block';
        mensagemErro.innerText = 'Mensagem de Erro: o campo E-Mail está vazio';
        return false;
    }

    if (cargo.trim() == '') {
        frmRegistro.inNome.focus();
        mensagemErro.style.display = 'block';
        mensagemErro.innerText = 'Mensagem de Erro: o campo Cargo está vazio';
        spCargo.innerText = cargo;
        return false;
    }

    if (depto.trim() == '') {
        frmRegistro.inDepto.focus();
        mensagemErro.style.display = 'block';
        mensagemErro.innerText = 'Mensagem de Erro: o campo Depto está vazio';
        spDepto.innerText = depto;
        return false;
    }

    if (imagem.trim() == '') {
        frmRegistro.inImg.focus();
        mensagemErro.style.display = 'block';
        mensagemErro.innerText = 'Mensagem de Erro: Selecione uma Imagem';
        return false;
    }

    else {
        mensagemErro.style.display = 'none';
    }
    //exibir nome
    spNome.innerText = nome;
    //Exibir cargo
    spCargo.innerText = cargo;
    //Exibir depito
    spDepto.innerText = depto;

    //add a foto
    const imagemInput = document.getElementById("inImg");
    // Coloca a imagem no crachá
    const file = imagemInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            const areaFoto = document.getElementById("area-foto");
            areaFoto.innerHTML = `<img src="${e.target.result}" alt="Foto do Funcionário" width="100">`;
        };
        reader.readAsDataURL(file);
    }
}

