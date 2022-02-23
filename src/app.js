const projects = [
    {
        name: "World Wide Web",
        src: "src/images/World Wide Web.png",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, ",
        colorsUsed: ["#c158c1", "#161034", "#58a7e6"],
        subImages: [
            {
                name: 'Subimage 1',
                src: "src/images/World Wide Web.png"
            },
            {
                name: 'Subimage 1',
                src: "src/images/Sadness.png"
            },
            {
                name: 'Subimage 1',
                src: "src/images/Butterfly.png"
            },
            {
                name: 'Subimage 1',
                src: "src/images/Penguin.png"
            }
        ]
    },
    {
        name: "Sadness",
        src: "src/images/Sadness.png",
        description: "I am sad",
        colorsUsed: ["#5FBB9D", "#2E98D5", "#B573AE", "#DADADA", "#020202"],
    },
    {
        name: "Butterfly",
        src: "src/images/Butterfly.png",
        description: "I am sad",
        colorsUsed: [
            "#F4CE87",
            "#8D66DD",
            "#5B5EE8",
            "#CD67D4",
            "#F493B0",
            "#F2C592",
            "#5958E8",
            "#46494C",
            "#F4C590",
        ],
    },
    {
        name: "Penguin",
        src: "src/images/Penguin.png",
        description: "I am sad",
        colorsUsed: [
            "#CAF0F8",
            "#D9ED92",
            "#A3CEF1",
            "#274C77",
            "#FFB115",
            "#FF5C00",
            "#2D2A32",
        ],
    },
    {
        name: "WIDE JESIEN",
        src: "src/images/nowa jesien5.png",
        description: "I am sad",
        colorsUsed: ["#D1D2BC", "#666D4A", "#333D29"],
        wide: true
    },
    {
        name: "Leaf logo",
        src: "src/images/Leaf logo.png",
        description: "I am sad",
        colorsUsed: ["#D1D2BC", "#666D4A", "#333D29"],
    },
    {
        name: "Doctor - social media post",
        src: "src/images/Doctor.png",
        description: "I am sad",
        colorsUsed: [
            "#FFFBF8",
            "#FFF2E6",
            "#FCE2CA",
            "#F2D0A9",
            "#99C1B9",
            "#232323",
            "#190F12",
            "#EDC1AE",
            "#CC8A71",
            "#D88C9A",
            "#474368",
            "#6D6875",
            "#3C3A3F",
            "#493128",
            "#B2B2B2",
            "#494847",
        ],
    },
    {
        name: "Oranges - social media post",
        src: "src/images/Oranges.png",
        description: "I am sad",
        colorsUsed: ["#D1D2BC", "#666D4A", "#333D29"],
    },
];

const createEnlargeButton = (href) => {
    const link = document.createElement("a");
    {
        link.classList.add("image-enlarge");
        link.target = "_blank";
        link.href = href;

        const icon = document.createElement("i");
        icon.classList.add("fa-solid", "fa-magnifying-glass");
        link.append(icon);
    }

    return link;
};

const generateCards = () => {
    const container = document.getElementsByClassName("project-container")[0];

    projects.forEach((p) => {
        const card = document.createElement("div");
        {
            card.classList.add("project-card");
            if (p.wide) {
                card.classList.add('project-card-wide');
            }

            const imageContainer = document.createElement("div");
            {
                imageContainer.classList.add("image-container");
                const image = document.createElement("img");
                {
                    image.classList.add("project-image");
                    image.src = p.src;
                    image.alt = p.name;

                    imageContainer.append(image);
                }

                imageContainer.append(createEnlargeButton(image.src));

                card.append(imageContainer);
            }

            const header = document.createElement("h3");
            header.innerText = p.name;
            card.append(header);

            const hr = document.createElement("hr");
            card.append(hr);

            const description = document.createElement("p");
            {
                description.classList.add("subtext", "hidden", "project-description");
                description.textContent = p.description;

                if (p.colorsUsed && p.colorsUsed.length > 0) {
                    const colorsUsed = document.createElement("div");
                    {
                        const colorsUsedText = document.createElement("p");
                        colorsUsedText.textContent = "Colors used :";
                        colorsUsed.append(colorsUsedText);

                        colorsUsed.classList.add("colors-used");

                        p.colorsUsed.forEach((color) => {
                            const circle = document.createElement("div");
                            circle.classList.add("circle");
                            circle.style.backgroundColor = color;
                            colorsUsed.append(circle);
                        });

                        description.append(colorsUsed);
                    }
                }

                if (p.subImages && p.subImages.length > 0) {
                    console.log({ p })
                    const subimages = document.createElement('div');
                    {
                        const subimagesText = document.createElement('p');
                        subimagesText.textContent = 'Other images :';
                        subimages.append(subimagesText);
                        subimages.classList.add('subimages');

                        p.subImages.forEach(img => {
                            const subimageContainer = document.createElement('div');
                            {
                                subimageContainer.classList.add('image-container', 'subimage-container');

                                const image = document.createElement('img');
                                image.classList.add('project-subimage');
                                image.src = img.src;
                                image.alt = img.name;
                                image.title = img.name;
                                subimageContainer.append(image);
                            }
                            subimageContainer.append(createEnlargeButton(img.src));

                            subimages.append(subimageContainer);
                        })

                        description.append(subimages);
                    }
                }

                card.append(description);
            }

            const expander = document.createElement("div");
            {
                expander.classList.add("clickable", "description-expander", "subtext");
                expander.textContent = "View more about";
                card.append(expander);

                expander.onclick = () => {
                    imageContainer.classList.toggle("hidden");
                    description.classList.toggle("hidden");
                    expander.textContent = imageContainer.classList.contains("hidden")
                        ? "Hide"
                        : "View more about";
                };
            }
        }
        container.append(card);
    });
};

generateCards();

const hamburgerButton = document.getElementById("hamburger");
const navList = document.getElementById("nav-list");

function toggleButton() {
    navList.classList.toggle("show");
}

hamburgerButton.addEventListener("click", toggleButton);
