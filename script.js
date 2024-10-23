let pack = []
let hub = ``
while (hub != 3) {
    switch(parseInt(hub)) {
        case 1:
            let cardName = prompt('Nome da carta').toUpperCase()
            pack.unshift(cardName)
            break
        case 2:
            alert(pack.shift())            
    }
    hub = prompt(`QUANTIDADE DE CARTAS:\n${pack.length}\nOPÇÕES:\n1:Adicionar uma carta\n2:Puxar uma carta\n3:Sair`)
}