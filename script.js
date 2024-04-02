const digimones = [
    "https://digimon.shadowsmith.com/img/koromon.jpg",
    "https://digimon.shadowsmith.com/img/tsunomon.jpg",
    "https://digimon.shadowsmith.com/img/yokomon.jpg",
    "https://digimon.shadowsmith.com/img/motimon.jpg",
    "https://digimon.shadowsmith.com/img/patamon.jpg",
    "https://digimon.shadowsmith.com/img/kuwagamon.jpg",
    "https://digimon.shadowsmith.com/img/greymon.jpg",
    "https://digimon.shadowsmith.com/img/tanemon.jpg",
    ];

const digimonesContenedor = document.querySelector("#digimon");

for (const digimon of digimones){
    const img = document.createElement("img");
    img.setAttribute("src", digimon);
    img.setAttribute("alt", digimon);

    img.classList.add("img");

    digimonesContenedor.appendChild(img);

    img.addEventListener("click", ()=> {
        alert(digimon)
    });
}
