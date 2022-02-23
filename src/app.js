const projects = [
    {
        name: "World Wide Web",
        src: "src/images/World Wide Web.png",
        description:
            "A combination of Futuristic and 80's. I used 3D question mark (using 3D effects in Illustrator) and sphere mesh.",
        colorsUsed: ["#c158c1", "#161034", "#58a7e6"],

    },
    {
        name: "Sadness",
        src: "src/images/Sadness.png",
        description: "Cover album design. I used RGB setting in Photoshop for destroy effect. Rest of art was created by Ilustrator tools.",
        colorsUsed: ["#5FBB9D", "#2E98D5", "#B573AE", "#DADADA", "#020202"],
    },
    {
        name: "Butterfly",
        src: "src/images/Butterfly.png",
        description: "Butterfly logo with trendy gradient. I create that only in use of circles and shape build tool in Illustrator. ",
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
        description: "Penguin design. I create that only in use of circles and shape build tool in Illustrator.",
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
        name: "Squirrel",
        src: "src/images/Squirrel.png",
        description: "Cozzy Squirrel with twinkling stars. On the background I used dreamy muted radial gradient. Squirrel was created only in use of circles and shape builder tool in Illustrator.  ",
        colorsUsed: [
            "#EDE0D4",
            "#BCA18E",
            "#FFE4CC",
            "#2E6CCB2"
        ],
    },
    {
        name: "Leaf logo",
        src: "src/images/Leaf logo.png",
        description: "Circle clover leaves logo.  ",
        colorsUsed: ["#D1D2BC", "#666D4A", "#333D29"],
    },
    {
        name: "Doctor - social media post",
        src: "src/images/Doctor.png",
        description: "Doctor Social media post design. Simply doctor illustration was created by myself with Illustrator tools. ",
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
        description: "Fruit social media post design. Used only Illustrator tools.",
        colorsUsed: ["#D1D2BC", "#666D4A", "#333D29"],
    },
    {
        name: "Cat",
        src: "src/images/cat.png",
        description: "Cat's face drawing. Used only Illustrator tools.",
        colorsUsed: ["#F7F4EA", "#E7DECD", "#E7DECD", "#E0AFA0", "#2E2E2E"],
    },
    {
        name: "Racoon",
        src: "src/images/Racoon.png",
        description: "Racoon's face drawing. Used only Illustrator tools.",
        colorsUsed: ["#FCD5CE", "#EAEAEA", "#C5C3C6", "#46494C", "#2E2E2E"],
    },
    {
        name: "Shiba Inu",
        src: "src/images/Shiba.png",
        description: "Shiba's Inu face drawing. Used only Illustrator tools.",
        colorsUsed: ["#FFD5F1", "#FFDA9E", "#C79967", "#292B2E"],
    },
    {
        name: "Pig",
        src: "src/images/Pig.png",
        description: "Pig's face drawing. Used only Illustrator tools.",
        colorsUsed: ["#FFF8FA", "#FFCCD5", "#DC9AA5", "#FF758F", "#2F2F2F"],
    },
    {
        name: "Happy New Year - card",
        src: "src/images/happy new year.png",
        description: "Christmas Card for Facebook post. Used only Illustrator tools.",
        colorsUsed: ["#66C0B3", "#47B7A7", "#00A17F", "#398E80", "#097864", "#333D29", '#303033'],
    },
    {
        name: "Merry Christmas - card",
        src: "src/images/Merry Christmas.png",
        description: "New Year Card for Facebook post. Used only Illustrator tools.",
        colorsUsed: ["#7C2725", '#571C1D'],
    },
    {
        name: "Flower - instagram post",
        src: "src/images/Flower post 1.png",
        description: "Flower instagram post design. Used only Photoshop tools.",
        colorsUsed: ["#E9E9E9", "#D5D5D5", "#696969", "#E6AAC2", "#5C2B3F", "#C20000", "#71C786", "#B1A251" ],
        subImages: [
            {
                name: 'Subimage 1',
                src: "src/images/Flower post 2.png"
            },
            {
                name: 'Subimage 1',
                src: "src/images/Flower post 3.png"
            },
        ]
    },
    {
        name: "Autumn - website slider",
        src: "src/images/Autumn.png",
        description: "Website slider for clothes brand. Used only Illustrator tools. ",
        colorsUsed: ["#FFE8D6", "#CB997E", "#2D2928"],
        wide: true
    },

    // {
    //     name: "Gradient Overlay",
    //     src: "src/images/Gradient Overlay.png",
    //     description: "I am sad",
    //     colorsUsed: ["#EABFFA", "#E4C3F9", "#874AFE"],
    // },

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
