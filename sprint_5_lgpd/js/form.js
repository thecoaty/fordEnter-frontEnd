
//class contato

class Contato {
    constructor(nome, email, telefone, tipo, msg, termos, novidades) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
        this.tipo = tipo;
        this.msg = msg;
        this.termos = termos;
        this.novidades = novidades;
    }
}

function Post(form) {
    let data = new Contato(
            form.elements.namedItem("nome").value,
            form.elements.namedItem("email").value, 
            form.elements.namedItem("telefone").value,
            form.elements.namedItem("contato").value,
            form.elements.namedItem("msg").value,
            form.elements.namedItem("termos").value,
            form.elements.namedItem("novidades").value);

    form.elements.namedItem("nome").value = ""
    form.elements.namedItem("email").value = ""
    form.elements.namedItem("telefone").value = ""
    form.elements.namedItem("contato").value = ""
    form.elements.namedItem("msg").value = ""
    form.elements.namedItem("termos").checked = false
    form.elements.namedItem("novidades").checked = false
    return Enviar(data)
}

function Enviar(data) {
    console.log(data)
    if (data.nome.value != "") {
        alert("Obrigado sr(a) " + data.nome + " os seus dados foram encaminhados com sucesso");
    }
    else{
        alert("Obrigado usuario os seus dados foram encaminhados com sucesso")
    }
}
