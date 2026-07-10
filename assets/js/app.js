// ===============================
// Provinces
// ===============================

const provinces = [

    "آذربایجان شرقی",
    "آذربایجان غربی",
    "اردبیل",
    "اصفهان",
    "البرز",
    "ایلام",
    "بوشهر",
    "تهران",
    "چهارمحال و بختیاری",
    "خراسان جنوبی",
    "خراسان رضوی",
    "خراسان شمالی",
    "خوزستان",
    "زنجان",
    "سمنان",
    "سیستان و بلوچستان",
    "فارس",
    "قزوین",
    "قم",
    "کردستان",
    "کرمان",
    "کرمانشاه",
    "کهگیلویه و بویراحمد",
    "گلستان",
    "گیلان",
    "لرستان",
    "مازندران",
    "مرکزی",
    "هرمزگان",
    "همدان",
    "یزد"

];

// ===============================
// Create Cards
// ===============================

const provinceList = document.getElementById("province-list");

provinces.forEach((province, index) => {

    const card = document.createElement("div");

    card.className = "province-card";

    card.innerHTML = `

        <div class="province-name">

            <i class="fa-solid fa-location-dot"></i>

            <span>${province}</span>

        </div>

        <i class="fa-solid fa-chevron-left province-arrow"></i>

    `;

    card.addEventListener("click", () => {

        // بعداً اینجا وارد صفحه شهرستان‌ها می‌شویم

        console.log(province);

    });

    provinceList.appendChild(card);

});