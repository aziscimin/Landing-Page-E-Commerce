const categories = [
    { name: "Phones", image: "../assest/phone.jpg", path: "#" },
    { name: "Fashion", image: "../assest/fashion.jpg", path: "#" },
    { name: "Vehicles", image: "../assest/Vehiclecs.jpg", path: "#" },
    { name: "Office Supplies", image: "../assest/office.jpg", path: "#" },
    { name: "Furnitures", image: "../assest/Furnitures.jpg", path: "#" },
    { name: "Electronics", image: "../assest/Electronics.jpg", path: "#" },
    { name: "Books", image: "../assest/Books.jpg", path: "#" },
    { name: "Beauty Products", image: "../assest/Beauty Products.jpg", path: "#" },
    { name: "Home Appliances", image: "../assest/Home Appliances.jpg", path: "#" },
    { name: "Groceries", image: "../assest/Groceries.jpg", path: "#" },
    { name: "Kids & Toys", image: "../assest/Kids & Toys.jpg", path: "#" },
    { name: "Gaming", image: "../assest/Gaming.jpg", path: "#" },
    { name: "Sports", image: "../assest/Sports.jpg", path: "#" },
    { name: "Health", image: "../assest/Health.jpg", path: "#" },
    { name: "Stationery", image: "../assest/Stationery.jpg", path: "#" },
    { name: "Watches", image: "../assest/Watches.jpg", path: "#" },
    { name: "Bags ", image: "../assest/Bags & Luggage.jpg", path: "#" },
    { name: "Pet Supplies", image: "../assest/Pet Supplies.jpeg", path: "#" },
    { name: "Digital Products", image: "../assest/Digital Products.png", path: "#" },
    { name: "Automotive", image: "../assest/Automotive Parts.jpg", path: "#" },
    { name: "Travel Accessories", image: "../assest/Travel Accessories.jpg", path: "#" },
];

const categoriesPerPageDesktop = 21; // 7x3 = 21 kategori pada layar besar
const categoriesPerPageMobile = 6;  // 6 kategori per halaman pada layar kecil (3x2)
let currentPage = 1;

function renderCategories() {
    const container = document.getElementById("categoriesContainer");
    container.innerHTML = "";

    // Menentukan jumlah kategori per halaman berdasarkan ukuran layar
    const categoriesPerPage = window.innerWidth >= 768 ? categoriesPerPageDesktop : categoriesPerPageMobile;

    // Hitung kategori yang akan ditampilkan berdasarkan halaman saat ini
    const startIndex = (currentPage - 1) * categoriesPerPage;
    const endIndex = startIndex + categoriesPerPage;
    const currentCategories = categories.slice(startIndex, endIndex);

    currentCategories.forEach((category) => {
        const categoryItem = document.createElement("div");
        categoryItem.className = "category-item";
        categoryItem.innerHTML = `
            <img class="category-image" src="${category.image}" alt="${category.name}" />
            <p class="category-text">${category.name}</p>
        `;

        // Event listener untuk klik kategori (seperti link)
        categoryItem.addEventListener("click", () => {
            // Arahkan ke halaman kategori
            window.location.href = category.url;
        });

        container.appendChild(categoryItem);
    });
}

function renderPagination() {
    const container = document.getElementById("paginationContainer");
    container.innerHTML = "";

    // Menentukan jumlah kategori per halaman berdasarkan ukuran layar
    const categoriesPerPage = window.innerWidth >= 768 ? categoriesPerPageDesktop : categoriesPerPageMobile;

    // Menghitung total halaman berdasarkan kategori per halaman
    const totalPages = Math.ceil(categories.length / categoriesPerPage);

    // Tampilkan pagination jika total halaman lebih dari 1
    if (totalPages > 1) {
        for (let i = 1; i <= totalPages; i++) {
            const dot = document.createElement("span");
            dot.className = "pagination-dot";
            if (i === currentPage) {
                dot.classList.add("active");
            }

            dot.addEventListener("click", () => {
                currentPage = i;
                renderCategories();
                renderPagination();
            });

            container.appendChild(dot);
        }
    }
}

// Initial Render
renderCategories();
renderPagination();

// Re-render saat ukuran layar diubah
window.addEventListener("resize", () => {
    renderCategories();
    renderPagination();
});

//Scrolling text
document.addEventListener('DOMContentLoaded', function () {
    const scrollingText = document.getElementById('scrolling-text');
    const text = "Diskon besar-besaran! Dapatkan hingga 50% off untuk produk terpilih! &nbsp;&nbsp;&nbsp; Gratis ongkir untuk pembelian di atas Rp 200.000! &nbsp;&nbsp;&nbsp; Buruan! Promo hanya berlaku sampai akhir bulan! ";

    // Menggandakan teks untuk memperpanjang teks berjalan
    let fullText = text.repeat(20); // Mengulang teks sebanyak 20 kali

    scrollingText.innerHTML = fullText;
});

const kategori = [
    { nama: "Fresh Premium Salmon Fillet (100 gram)", harga: "From $3.00", path: "https://tse2.mm.bing.net/th?id=OIP.1g5urQASx-Q9g3AO8nrHtwHaHa&pid=Api", tema: "food" },
    { nama: "Raja Platinum Rice (5 Kg)", harga: "From $10", path: "https://tse1.mm.bing.net/th?id=OIP.Jnu3yL2H2owbBGbW-A5cXAHaHa&pid=Api", tema: "food" },
    { nama: "PROCHIZ Gold Mini Cheese (60 gr)", harga: "From $0.65", path: "https://tse1.mm.bing.net/th?id=OIP.6g68QDPS_Y-BzhVA5nluJAHaHa&pid=Api", tema: "food" },
    { nama: "Indomie Fried Noodles", harga: "From $0.15", path: "https://tse3.mm.bing.net/th?id=OIP.kEfnGB4QCc_W7bCmqdIzEAHaJ4&pid=Api", tema: "food" },
    { nama: "SilverQueen Exclusive Valentine Bundle", harga: "From $3.25", path: "https://tse3.mm.bing.net/th?id=OIP.UwZug0YJ-n0U5vjyB0FwGAHaHa&pid=Api", tema: "food" },
    { nama: "Bu Rudy Original Shallot Sambal", harga: "From $2.25", path: "https://tse1.mm.bing.net/th?id=OIP.nJDJP9St4jtPh_yC5swU8wHaHa&pid=Api", tema: "food" },
    { nama: "Milku UHT Chocolate Milk (200 ml)", harga: "From $0.20", path: "https://tse1.mm.bing.net/th?id=OIP.69gGJM8GtlFT38cw72skJwHaHa&pid=Api", tema: "food" },
    { nama: "Sedaap Instant Noodles (70 gr)", harga: "From $0.15", path: "https://tse3.mm.bing.net/th?id=OIP.y5nZBNqLuaD7mI9nvSRfUwHaHa&pid=Api", tema: "food" },
    { nama: "Raja Ultima Rice (5 Kg)", harga: "From $9.50", path: "https://tse3.mm.bing.net/th?id=OIP.NHSXPqcDWBPdSfDiU9InXwHaHa&pid=Api", tema: "food" },
    { nama: "Women's Top (T-Shirt)", harga: "From $3.25", path: "https://tse3.mm.bing.net/th?id=OIP.bpqJtd6p1rPxPfDoiYtK_gHaHa&pid=Api", tema: "clothing" },
    { nama: "Blouse and Outerwear for Women", harga: "From $4.50", path: "https://tse4.mm.bing.net/th?id=OIP.MVHZ-r5gY8xO0NZcuCMRFwHaHa&pid=Api", tema: "clothing" },
    { nama: "Square Hijab", harga: "From $1.90", path: "https://tse3.mm.bing.net/th?id=OIP.MvlX7wA7Uil7qwfcGeAFsgHaJQ&pid=Api", tema: "clothing" },
    { nama: "Women's Sleepwear", harga: "From $5.25", path: "https://tse2.mm.bing.net/th?id=OIP.Xr6S3jCBDlGxPJmNqe8xigHaJ3&pid=Api", tema: "clothing" },
    { nama: "Women's Sandals", harga: "From $2.50", path: "https://tse2.mm.bing.net/th?id=OIP.LBto10uk9Rmh0WroephTYwHaJQ&pid=Api", tema: "clothing" },
    { nama: "Men's Shoes", harga: "From $6.50", path: "https://tse1.mm.bing.net/th?id=OIP.sn2xB6hodN83iYp7QW4MXgHaHa&pid=Api", tema: "clothing" },
    { nama: "Muslim Kids Clothing", harga: "From $5.75", path: "https://tse4.mm.bing.net/th?id=OIP.v8oxUcUq5Pg1zvJiagOdnQHaLG&pid=Api", tema: "clothing" },
    { nama: "Men's Muslim Clothing", harga: "From $8.00", path: "https://tse3.mm.bing.net/th?id=OIP.qnUXUNiDHLclGdBTR8cv9QHaLF&pid=Api", tema: "clothing" },
    { nama: "Women's Muslim Outerwear", harga: "From $10.00", path: "https://tse2.mm.bing.net/th?id=OIP.UMC32JivtfQ0VofmtWO0iAHaKs&pid=Api", tema: "clothing" },
    { nama: "Medical Masks (50 pcs)", harga: "From $3.25", path: "https://tse1.mm.bing.net/th?id=OIP.QWlPJRXhRZKxX_h-taDopQHaHa&pid=Api", tema: "health" },
    { nama: "Kids' Character Clothing", harga: "From $4.00", path: "https://tse1.mm.bing.net/th?id=OIP.c5wTPFxuhQUqXX2OoYhZTgHaHa&pid=Api", tema: "clothing" }
];

const productContainer = document.querySelector('.product-container');

// Menampilkan produk dalam grid
kategori.forEach(product => {
    const productElement = document.createElement('div');
    productElement.innerHTML = `
        <img src="${product.path}" alt="${product.nama}">
        <p>${product.nama}</p>
        <p class="price">${product.harga}</p>
    `;
    productContainer.appendChild(productElement);
});
  
