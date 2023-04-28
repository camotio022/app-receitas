class going_to_school {
    container = document.querySelector('.inputs')
    tempo = 0;
    constructor(nome, periodo) {
        this.nome = nome
        this.periodo = periodo
        this.going()
    }
    going() {
        const a = this.container.insertAdjacentElement('beforeend',
            document.createElement('input'))
        a.type = 'number'
        const b = this.container.insertAdjacentElement('beforeend',
            document.createElement('input'))
        b.type = 'number'
        const c = this.container.insertAdjacentElement('beforeend',
            document.createElement('input'))
        c.type = 'number'
        const sent = this.container.insertAdjacentElement('beforeend',
            document.createElement('button'))
        sent.addEventListener('click', () => {
            this.enviar(a, b, c, sent)
        })
        this.styles(a, b, c, sent)
    }
    styles(a, b, c, sent) {
        a.placeholder = 'A'
        b.placeholder = 'B'
        c.placeholder = 'C'
        sent.innerHTML = 'ENVIAR'
    }
    enviar(a, b, c) {
        if (
            a.value
            &&
            b.value
            &&
            c.value
        ) {
            const delta = (new Number(b.value)
                * new Number(b.value))
                - 4 * new Number(a.value)
                * new Number(c.value)
            const x1 = (
                (new Number - (b.value))
                - delta) / 2 * new Number(a.value)
            const x2 = (
                (new Number - (b.value))
                + delta) / 2 * new Number(a.value)
            console.log(x1, x2)

        } else {
            document.body.style.background = 'green'
            setTimeout(() => {
                document.body.style.transition = '.9s'
                document.body.style.background = 'white'
            }, '5000');
        }
    }
}
const start = new going_to_school('Temotio', 'Tarde')
