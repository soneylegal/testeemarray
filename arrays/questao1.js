function traduzir(mensagem) {
    const codigo = {
        "0": " ", "1": "a", "2": "b", "3": "c", "4": "d", "5": "e", "6": "f",
        "7": "g", "8": "h", "9": "i", "10": "j", "11": "k", "12": "l", "13": "m",
        "14": "n", "15": "o", "16": "p", "17": "q", "18": "r", "19": "s", "20": "t",
        "21": "u", "22": "v", "23": "w", "24": "x", "25": "y", "26": "z"
    };

    let palavras = mensagem.split(" ");
    let traducao = "";

    for (let palavra of palavras) {
        traducao += codigo[palavra];
    }

    return traducao;
}

let mensagem = ""
while (mensagem !== "fim") {
    mensagem = prompt("Digite uma mensagem ou 'fim' para encerrar:");
    if (mensagem !== "fim") {
        console.log(traduzir(mensagem));
    }
}
// 2 15 1 0 20 1 18 4 5
// 2 15 1 0 19 5 13 1 14 1
// 6 9 13
