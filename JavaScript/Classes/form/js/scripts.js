class ValidaForm {
    constructor(){
        this.formulario = document.getElementById('formulario');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e){
        e.preventDefault();
        const isValid = this.isValid();
        const pswdValid = this.pswdValid();

        if(isValid && pswdValid) {
            alert('Form Enviado !');
            this.formulario.submit();
        }
    }
    
    pswdValid() {
        let valid = true;

        const pswd = this.formulario.querySelector('.pswd');
        const rpt_pswd = this.formulario.querySelector('.rpt-pswd');

        if(pswd.value !== rpt_pswd.value){
            valid = false;
            this.createError(pswd, 'As senhas não conferem !');
            this.createError(rpt_pswd, 'As senhas não conferem !');
        }

        if(pswd.value.length < 6 || pswd.value.length > 12){
            valid = false;
            this.createError(pswd, 'A senha precisa ter entre 6 e 12 caaraacteres !');
        }

        return valid;
    }

    isValid(){
        let valid = true;

        for(let errorText of this.formulario.querySelectorAll('.text-danger')){
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText;

            if(!campo.value){
                this.createError(campo, `Campo "${label}" nao pode estar vazio !`);
                valid = false;
            }

            if(campo.classList.contains('cpf')) {
                if(!this.validaCPF(campo)) valid = false;
            }

            if(campo.classList.contains('user')) {
                if(!this.validaUser(campo)) valid = false;
            }
        }

        return valid;

    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()){
            this.createError(campo, 'CPF inválido');
            return false;
        }
        return true;
    }

    validaUser(campo){
        const usuario = campo.value;
        let valid = true;

        if(usuario.length < 3 || usuario.length > 12) {
            this.createError(campo, 'Usuário precisa ter entre 3 e 12 caracteres !');
            valid = false;
        }

        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.createError(campo, 'Usuário precisa conter apenas letras e/ou numeros !');
            valid = false;
        }
        return valid;
    }
    
    createError(campo, msg){
        const div = document.createElement('div');
        
        div.innerHTML = msg;
        div.classList.add('text-danger');
        campo.insertAdjacentElement('afterend', div);
    }
}

const valida = new ValidaForm();