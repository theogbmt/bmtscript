// Example data arrays containing script information for different categories
const scriptsDataMats = [
    {
        title: "WW2 Materials Pack",
        imageSrc: "images/ww2_duffy_thumbnail.png",
        imageAlt: "WW2 Duffy",
        description: "This pack includes a variety of World War II materials set up for use in Black Ops 3.",
        author: "Gordan Freeman (duffy)",
        downloadLink: "https://drive.google.com/file/d/1kH-P-sTddw6W1_CKUX2wPGExGXCuK1lM/view?usp=drive_link",
        releaseDate: "2024-08-01"
    },
    {
        title: "PBR Pack",
        imageSrc: "https://freepbr.com/wp-content/uploads/2017/07/sandstonecliff-preview2.jpg",
        imageAlt: "Verk0 PBR",
        description: "This pack includes a variety of PBR materials set up for use in Black Ops 3.",
        author: "Verk0",
        downloadLink: "https://drive.google.com/file/d/1kH-P-sTddw6W1_CKUX2wPGExGXCuK1lM/view?usp=drive_link",
        releaseDate: "2024-07-01"
    },
    {
        title: "BO4 Material Pack",
        imageSrc: "https://i.pinimg.com/originals/2e/3f/6f/2e3f6fa0377d6c7531012a871f1974a8.jpg",
        imageAlt: "BMT Mats",
        description: "This pack includes a variety of BO4 materials set up for use in Black Ops 3.",
        author: "bigmanting",
        downloadLink: "https://drive.google.com/file/d/1kH-P-sTddw6W1_CKUX2wPGExGXCuK1lM/view?usp=drive_link",
        releaseDate: "2023-07-01"
    },
    {
        title: "Blood Texture Pack",
        imageSrc: "https://opengameart.org/sites/default/files/blood_splat_preview.png",
        imageAlt: "BMT Blood",
        description: "This pack includes a variety of blood materials set up for use in Black Ops 3.",
        author: "bigmanting",
        downloadLink: "https://drive.google.com/file/d/1kH-P-sTddw6W1_CKUX2wPGExGXCuK1lM/view?usp=drive_link",
        releaseDate: "2024-08-01"
    },
    {
        title: "MW4 Material Pack",
        imageSrc: "https://i1.sndcdn.com/artworks-000545172318-hkqkky-t500x500.jpg",
        imageAlt: "default release",
        description: "This pack includes a variety of MW4 materials set up for use in Black Ops 3.",
        author: "fake release",
        downloadLink: "https://drive.google.com/file/d/1kH-P-sTddw6W1_CKUX2wPGExGXCuK1lM/view?usp=drive_link",
        releaseDate: "2024-08-01"
    },
    {
        title: "Basically im monke",
        imageSrc: "https://www.researchgate.net/profile/Dang-Thanh/publication/329641091/figure/fig2/AS:712953703710721@1546992817811/Original-and-noise-version-of-the-Baboon-grayscale-256-256-test-image-with-Gaussian.ppm",
        imageAlt: "default release",
        description: "This pack includes a variety of MW4 materials set up for use in Black Ops 3.",
        author: "fake release",
        downloadLink: "https://drive.google.com/file/d/1kH-P-sTddw6W1_CKUX2wPGExGXCuK1lM/view?usp=drive_link",
        releaseDate: "2025-08-01"
    },
    // Add more objects for additional script cards as needed
];

const scriptsDataUI = [
    {
        title: "Custom UI Pack",
        imageSrc: "https://upload.wikimedia.org/wikipedia/commons/3/39/Lichtenstein_img_processing_test.png",
        imageAlt: "Custom UI",
        description: "This pack includes custom UI elements for Black Ops 3.",
        author: "UI Designer",
        downloadLink: "https://example.com/download1",
        releaseDate: "2024-07-01"
    }
    // Add more objects for additional script cards as needed
];

const scriptsDataModels = [
    {
        title: "WW2 Weapons Pack",
        imageSrc: "https://ccia.ugr.es/cvg/CG/images/base/9.gif",
        imageAlt: "WW2 Weapons",
        description: "This pack includes a variety of World War II weapons.",
        author: "Weapon Master",
        downloadLink: "https://example.com/download2",
        releaseDate: "2024-07-01"
    }
    // Add more objects for additional script cards as needed
];

const scriptsDataCharacters = [
    {
        title: "Victis Character Crew",
        imageSrc: "images/emox_victis_thumbnail.png",
        imageAlt: "Victis Emox",
        description: "This pack includes the 4 victis characters set up for use in Black Ops 3.",
        author: "eMox Manga",
        downloadLink: "https://mega.nz/file/QtgTQALT#ZoMW_n8E9XjXT6yLVVtyP17X-RsYWyUYgmU5tTUed-I",
        releaseDate: "2024-07-01"
    }
];

// Attach data arrays to the window object for access
window.scriptsDataMats = scriptsDataMats;
window.scriptsDataUI = scriptsDataUI;
window.scriptsDataModels = scriptsDataModels;
window.scriptsDataCharacters = scriptsDataCharacters;

// Function to create and append script-card elements for a specific category
function createScriptCards(categoryId, categoryData) {
    const container = document.getElementById(`scripts-container-${categoryId}`);
    
    // Clear previous content in the container
    container.innerHTML = '';

    categoryData.forEach((script) => {
        // Create elements
        const card = document.createElement("div");
        card.classList.add("script-card");
        card.setAttribute('data-title', script.title.toLowerCase()); // Set data-title attribute
        card.setAttribute('data-author', script.author.toLowerCase()); // Set data-author attribute

        const title = document.createElement("h2");
        title.textContent = script.title;

        const imageDiv = document.createElement("div");
        imageDiv.classList.add("script-image");
        const image = document.createElement("img");
        image.src = script.imageSrc;
        image.alt = script.imageAlt;
        image.width = 512;
        image.height = 512;
        imageDiv.appendChild(image);

        const description = document.createElement("p");
        description.textContent = script.description;

        const author = document.createElement("h3");
        author.textContent = "By " + script.author;
        author.classList.add("author-background");

        const downloadLink = document.createElement("a");
        downloadLink.href = script.downloadLink;
        downloadLink.textContent = "Download";
        downloadLink.setAttribute("download", "");
        downloadLink.setAttribute("target", "_top");

        // Append elements to card
        card.appendChild(title);
        card.appendChild(imageDiv);
        card.appendChild(description);
        card.appendChild(author);
        card.appendChild(downloadLink);

        // Append card to container
        container.appendChild(card);
    });
}

// Function to show a specific category and hide others
function showCategory(categoryId) {
    var categories = document.getElementsByClassName("category");
    for (var i = 0; i < categories.length; i++) {
        categories[i].classList.add("hidden");
    }
    document.getElementById(categoryId).classList.remove("hidden");

    // Determine which category data to use
    let categoryData;
    if (categoryId === "category1") {
        categoryData = window.scriptsDataMats;
    } else if (categoryId === "category2") {
        categoryData = window.scriptsDataUI;
    } else if (categoryId === "category3") {
        categoryData = window.scriptsDataModels;
    } else if (categoryId === "category4") {
        categoryData = window.scriptsDataCharacters;
    }

    // Initial rendering of script cards
    createScriptCards(categoryId, categoryData);
}

// Function to sort script cards
function sortItems() {
    const sortBy = document.getElementById('sort-by').value;
    const categoryId = document.querySelector('.category:not(.hidden)').id;
    let categoryData;

    if (categoryId === "category1") {
        categoryData = window.scriptsDataMats;
    } else if (categoryId === "category2") {
        categoryData = window.scriptsDataUI;
    } else if (categoryId === "category3") {
        categoryData = window.scriptsDataModels;
    } else if (categoryId === "category4") {
        categoryData = window.scriptsDataCharacters;
    }

    if (sortBy === 'az') {
        categoryData.sort((a, b) => a.title.localeCompare(b.title));
    } else if (sortBy === 'date') {
        categoryData.sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate));
    }

    createScriptCards(categoryId, categoryData);
}

// Initial call to display default category and sort items
window.onload = () => {
    const defaultCategoryId = "category1"; // Set default category ID
    showCategory(defaultCategoryId); // Display default category initially
    document.getElementById('sort-by').addEventListener('change', sortItems);
    
    // Automatically sort items on load based on the default sort option
    sortItems();
};

// Function to filter script cards based on search input
function filterCards() {
    // Get the search input value and convert it to lowercase
    const searchInput = document.getElementById('search-bar');
    const searchTerm = searchInput.value.toLowerCase().trim();

    // Split the search term into individual keywords
    const keywords = searchTerm.split(/\s+/); // Splits by spaces

    // Get the currently visible category
    const categoryId = document.querySelector('.category:not(.hidden)').id;
    const scriptCards = document.querySelectorAll(`#scripts-container-${categoryId} .script-card`);

    // Iterate over each script card
    scriptCards.forEach(card => {
        // Get the title and author from data attributes
        const title = card.getAttribute('data-title') || '';
        const author = card.getAttribute('data-author') || '';

        // Check if all keywords are present in either the title or the author
        const matches = keywords.every(keyword => 
            title.includes(keyword) || author.includes(keyword)
        );

        // Show or hide the card based on the match
        card.style.display = matches ? 'flex' : 'none';
    });
}

// Add event listener to the search input to call filterCards on input change
document.getElementById('search-bar').addEventListener('input', filterCards);
