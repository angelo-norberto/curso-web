// uma factory retorna um novo objeto
module.exportes = () => {
    return {
        valor: 1,
        inc() {
            this.valor++
        }
    }
}