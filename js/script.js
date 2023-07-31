const btnAll = document.querySelectorAll("button"),
cards = document.querySelectorAll(".card");

// console.log(cards, btnAll);

function filterCards(e) {
    // console.log(e.target)
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");

    cards.forEach(card => {
        card.classList.add("hide");
        if(card.dataset.name == e.target.dataset.name || e.target.dataset.name == "all") {
            card.classList.remove("hide");
        }
    })
}

btnAll.forEach(btn => {
    btn.addEventListener("click", filterCards )})