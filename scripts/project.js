let text = document.lastModified;
document.getElementById("lastModified").innerHTML = text;

const d = new Date();
let currentyear = d.getFullYear();
document.getElementById('currentyear').innerHTML = currentyear;

const hambutton = document.querySelector('#menu');
const mainnav = document.querySelector('.navigation');
const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', () => {
    mainnav.classList.toggle('active');
    hamburger.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    mainnav.classList.remove('active');
}))

const visions = [
    {
        name: "Book of Mormon",
        type: "Spiritual",
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGSX6CRUEfzsmPBd4nQuZCoNHOPntQP8GD0Q&s"
    },
    {
        name: "Married",
        location: "Provo, Utah, United States",
        type: "Spiritual",
        date: "2024, May, 17",
        imageUrl:
            "https://churchofjesuschristtemples.org/assets/img/temples/provo-city-center-temple/provo-city-center-temple-3391-thumb.jpg"
    },
    {
        name: "Family are Forever",
        type: "Spiritual",
        imageUrl:
            "https://churchofjesuschrist.org/imgs/ad736d2e7869c993b4fa20a44a5e723d8b81966a/full/1920%2C/0/default"
    },
    {
        name: "Come Follow Me",
        location: "Provo, Utah, United States",
        type: "Spiritual",
        date: "2024, May, 17",
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1dHucL8jscrhvcsZF3PrCMx-I9i1C0RVR5Q&s"
    },
    {
        name: "Outdoors",
        type: "Physical",
        imageUrl:
            "https://images.pexels.com/photos/29358120/pexels-photo-29358120/free-photo-of-sunlight-filtering-through-alpine-trees.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        name: "Waterfall",
        type: "Physical",
        imageUrl:
            "https://images.pexels.com/photos/30791448/pexels-photo-30791448/free-photo-of-breathtaking-patagonia-waterfall-with-mountain-view.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        name: "Arches",
        type: "Physical",
        imageUrl:
            "https://images.pexels.com/photos/371572/pexels-photo-371572.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
        name: "Gyser",
        type: "Physical",
        imageUrl:
            "https://images.pexels.com/photos/1696474/pexels-photo-1696474.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
];

// const imageUrl = document.getElementById('visions');
// imageUrl.style.maxWidth = '500px'; // Sets the maximum width to 500 pixels

const spiritualLink = document.querySelector("#spiritual")
const physicalLink = document.querySelector("#physical")
createVisionCard(visions);

function resetTitle(linkName) {
    document.querySelector("h2").innerHTML = ""; //Clear existing content
    let title = document.createElement("h2");
    title.innerHTML = `${linkName}`;
    document.querySelector("h2").innerHTML = title.innerHTML;
}

function createVisionCard(filteredVisions) {
    document.querySelector(".res-grid").innerHTML = "";

    filteredVisions.forEach(vision => {
        let card = document.createElement("section");
        let name = document.createElement("h3");
        let location = document.createElement("p");
        let type = document.createElement("p");
        let date = document.createElement("p");
        let img = document.createElement("img");

        name.textContent = vision.name;
        //location.innerHTML = `<span class="label">Location:</span> ${vision.location}`;
        type.innerHTML = `<span class="label">Type:</span> ${vision.type}`;
        //date.innerHTML = `<span class="label">Date:</span> ${vision.date} sq ft`;
        img.setAttribute("src", vision.imageUrl);
        img.setAttribute("alt", `${vision.name} Name`);
        img.setAttribute("loading", "lazy");

        card.appendChild(name);
        //card.appendChild(location);
        card.appendChild(type);
       // card.appendChild(date);
        card.appendChild(img);

        document.querySelector(".res-grid").appendChild(card);
    });
}

spiritualLink.addEventListener("click", () => {
    resetTitle("Spiritual");

    const spirit = visions.filter(vision => {
        const type = vision.type;
        return type == "Spiritual";
    });

    createVisionCard(spirit);
});

physicalLink.addEventListener("click", () => {
    resetTitle("Physical");

    const physical = visions.filter(vision => {
        const type = vision.type;
        return type == "Physical";
    });

    createVisionCard(physical);
});