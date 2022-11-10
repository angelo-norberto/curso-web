const valor = 'global'

function minhaFuncao() {
    console.log(valor)
}

function exec() {
    const valor = 'local'
    minhaFuncao()
}

exec()

//contexto léxico é muito importante para declarar functions