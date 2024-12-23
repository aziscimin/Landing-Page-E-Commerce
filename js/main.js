var myCarousel = document.getElementById('bannerCarousel')
var carousel = new bootstrap.Carousel(myCarousel, {
  interval: 5000, // Auto-slide every 5 seconds
  ride: 'carousel'
});

document.addEventListener('DOMContentLoaded', function () {
    const carouselElement = document.querySelector('.carousel');
    if (carouselElement) {
        new bootstrap.Carousel(carouselElement, {
            keyboard: true, // Konfigurasi Anda
        });
    }
});

const categories = [
    { name: "Phones", image: "./assest/phone.jpg", path: "#" },
    { name: "Fashion", image: "./assest/fashion.jpg", path: "#" },
    { name: "Vehicles", image: "./assest/Vehiclecs.jpg", path: "#" },
    { name: "Office Supplies", image: "./assest/office.jpg", path: "#" },
    { name: "Furnitures", image: "./assest/Furnitures.jpg", path: "#" },
    { name: "Electronics", image: "./assest/Electronics.jpg", path: "#" },
    { name: "Books", image: "./assest/Books.jpg", path: "#" },
    { name: "Beauty Products", image: "./assest/Beauty Products.jpg", path: "#" },
    { name: "Home Appliances", image: "./assest/Home Appliances.jpg", path: "#" },
    { name: "Groceries", image: "./assest/Groceries.jpg", path: "#" },
    { name: "Kids & Toys", image: "./assest/Kids & Toys.jpg", path: "#" },
    { name: "Gaming", image: "./assest/Gaming.jpg", path: "#" },
    { name: "Sports", image: "./assest/Sports.jpg", path: "#" },
    { name: "Health", image: "./assest/Health.jpg", path: "#" },
    { name: "Stationery", image: "./assest/Stationery.jpg", path: "#" },
    { name: "Watches", image: "./assest/Watches.jpg", path: "#" },
    { name: "Bags & Luggage", image: "./assest/Bags & Luggage.jpg", path: "#" },
    { name: "Pet Supplies", image: "./assest/Pet Supplies.jpeg", path: "#" },
    { name: "Digital Products", image: "./assest/Digital Products.png", path: "#" },
    { name: "Automotive Parts", image: "./assest/Automotive Parts.jpg", path: "#" },
    { name: "Travel Accessories", image: "./assest/Travel Accessories.jpg", path: "#" },
];

const categoriesPerPage = 21; // Jumlah kategori yang terlihat dalam satu waktu
let currentPage = 1;

function renderCategories() {
    const container = document.getElementById("categoriesContainer");
    container.innerHTML = "";

    // Menentukan kategori yang akan ditampilkan berdasarkan halaman saat ini
    const startIndex = (currentPage - 1) * categoriesPerPage;
    const endIndex = startIndex + categoriesPerPage;
    const categoriesToRender = categories.slice(startIndex, endIndex);

    categoriesToRender.forEach((category) => {
        const categoryItem = document.createElement("div");
        categoryItem.className = "category-item";
        categoryItem.innerHTML = `
            <img class="category-image" src="${category.image}" alt="${category.name}" />
            <p class="category-text">${category.name}</p>
        `;

        categoryItem.addEventListener("click", () => {
            window.location.href = category.path;
        });

        container.appendChild(categoryItem);
    });

    updateButtonsState();
}

function updateButtonsState() {
    const prevButton = document.getElementById("prevButton");
    const nextButton = document.getElementById("nextButton");
    const container = document.getElementById("categoriesContainer");

    prevButton.disabled = container.scrollLeft <= 0;  // Disable prev button jika sudah di paling kiri
    nextButton.disabled = container.scrollLeft >= container.scrollWidth - container.offsetWidth;  // Disable next button jika sudah di paling kanan
}

document.getElementById("prevButton").addEventListener("click", () => {
    const container = document.getElementById("categoriesContainer");
    container.scrollBy({ left: -container.offsetWidth, behavior: "smooth" }); // Geser ke kiri
    updateButtonsState();
});

document.getElementById("nextButton").addEventListener("click", () => {
    const container = document.getElementById("categoriesContainer");
    container.scrollBy({ left: container.offsetWidth, behavior: "smooth" }); // Geser ke kanan
    updateButtonsState();
});

// Initial Render
renderCategories();

const readMoreText = document.getElementById('readMoreText');
    const moreText = document.getElementById('moreText');

    readMoreText.addEventListener('click', function() {
      moreText.classList.remove('hidden'); // Tampilkan teks tambahan
      readMoreText.classList.add('hidden'); // Sembunyikan teks "Read More"
    });


