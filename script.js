let quadrados_div_1 = document.getElementById("quadrados_div_1"),
    quadrados = document.getElementsByClassName("quadrado"),
    quadrados_div_2 = document.getElementById("quadrados_div_2"),
    hard = document.getElementById("hard"),
    easy = document.getElementById("easy"),
    reset = document.getElementById("reset"),
    header = document.getElementById("header"),
    feedback = document.getElementById("feedback"),
    R, G, B,
    objetivo = document.getElementById("objetivo");

const randomizaCor = function () {
    R = Math.floor(Math.random() * 255);
    G = Math.floor(Math.random() * 255);
    B = Math.floor(Math.random() * 255);

}

const updateObjetivo = function () {
    setarQuadradosComCoresAleatorias();
    randomizaCor();
    mostrarQuadrados();
    setarQuadradoObjetivo();
    reset.innerText = "NEW COLORS";
    feedback.innerText = "";
    header.style.backgroundColor = "steelblue";
    objetivo.innerText = `RGB(${R}, ${G}, ${B})`;
}

const jogadaCerta = function () {
    pintarQuadradosComACorCerta();
    header.style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
    reset.innerText = "PLAY AGAIN";
}

const setarQuadradoObjetivo = function (i) {
    let sorteio;
    if (easy.classList.contains("selected")) {
        sorteio = Math.floor(Math.random() * 3);
    } else {
        sorteio = Math.floor(Math.random() * 5);
    }
    quadrados[sorteio].style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
}

const pintarQuadradosComACorCerta = function () {
    for (i = 0; i < quadrados.length; i++) {
        quadrados[i].classList.remove("remove");
        quadrados[i].style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
    }
}

const setarQuadradosComCoresAleatorias = function () {
    for (let i = 0; i < quadrados.length; i++) {
        randomizaCor();
        quadrados[i].addEventListener("click", function () {
            if (quadrados[i].style.backgroundColor == `rgb(${R}, ${G}, ${B})`) {
                feedback.innerText = "Correct!";
                jogadaCerta();
            } else {
                feedback.innerText = "Try Again!";
                quadrados[i].classList.add("remove");
            }
        });
        quadrados[i].style.backgroundColor = `rgb(${R}, ${G}, ${B})`;
    }
}

const mostrarQuadrados = function () {
    for (let i = 0; i < quadrados.length; i++) {
        quadrados[i].classList.remove("remove");
    }
}
reset.addEventListener("click", updateObjetivo);
easy.addEventListener("click", function () {
    easy.classList.add("selected");
    hard.classList.remove("selected");
    quadrados_div_2.classList.add("d-none");
    quadrados_div_2.classList.remove("d-flex");
    updateObjetivo();
});

hard.addEventListener("click", function () {
    hard.classList.add("selected");
    easy.classList.remove("selected");
    quadrados_div_2.classList.add("d-flex");
    quadrados_div_2.classList.remove("d-none");
    updateObjetivo();
});

updateObjetivo();