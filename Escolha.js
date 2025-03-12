let deposito;

deposito = prompt("Insira o seu dinheiro: \n(Depósito minimo é de 25 reais.)")

if (deposito < 25 && deposito != Number){
    alert("Retornando para a página principal")
    window.location.href = "indexDOIS.html"
}

const quadrado1 = document.querySelector("#quadrado1")
const quadrado2 = document.querySelector("#quadrado2")
const quadrado3 = document.querySelector("#quadrado3")
const aviso = document.querySelector("#aviso")

let x = 1;

let symbols = ["♥️", "♦️", "♣️", "♠️", "🍒", "7️⃣", "🔔", "💎", "🍀", "BAR", "💲", "🧲", "🍓", "🍋", "🥭", "🍉"]

function gerar() {
    for (let i = 0; i < 3; i++) {
        if (i == 0) {
            quadrado1.innerHTML = `${symbols[Math.floor(Math.random() * symbols.length)]}`
            console.log(quadrado1.innerHTML)
        } else if (i == 1) {
            quadrado2.innerHTML = `${symbols[Math.floor(Math.random() * symbols.length)]}`
            console.log(quadrado2.innerHTML)
        } else if (i == 2) {
            quadrado3.innerHTML = `${symbols[Math.floor(Math.random() * symbols.length)]}`
            console.log(quadrado3.innerHTML)
        }

    }

    if (quadrado1.innerHTML == quadrado2.innerHTML) {
        if (quadrado2.innerHTML == quadrado3.innerHTML) {
            aviso.innerHTML = `Você conseguiu o jackpot com ${x} tentaivas!`
            x = 1;
            alert("JACKPOT!!!!!!!!!")
        }
    } else {
        aviso.innerHTML = `${x}ª Tentativa!`
        x += 1;
    }
}