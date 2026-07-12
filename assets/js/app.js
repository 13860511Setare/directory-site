const provinceList = document.getElementById("province-list");

// اگر لیست وجود نداشت
if (!provinceList) {
    throw new Error("province-list not found");
}

// نام صفحه فعلی
const page = window.location.pathname.split("/").pop();


// ===============================
// تابع ساخت کارت
// ===============================
function createCard(icon, title, clickAction) {

    const card = document.createElement("div");

    card.className = "province-card";

    card.innerHTML = `
        <div class="province-name">
            <i class="${icon}"></i>
            <span>${title}</span>
        </div>

        <i class="fa-solid fa-chevron-left province-arrow"></i>
    `;

    card.addEventListener("click", clickAction);

    provinceList.appendChild(card);

}



// ===============================
// صفحه استان‌ها
// ===============================
if (page === "" || page === "index.html") {

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

    provinces.forEach((province) => {

        createCard(

            "fa-solid fa-location-dot",

            province,

            () => {

                if (province === "آذربایجان شرقی") {

                    window.location.href = "city.html";

                }

            }

        );

    });

}



// ===============================
// صفحه شهرها
// ===============================
if (page === "city.html") {

    const cities = [

        "تبریز",
        "آذرشهر",
        "مرند",
        "بستان‌آباد",
        "مراغه",
        "عجب شیر",
        "بناب",
        "شبستر",
        "اهر",
        "سراب",
        "هشترود",
        "اسکو",
        "ملکان",
        "میانه"

    ];

    cities.forEach((city) => {

        createCard(

            "fa-solid fa-city",

            city,

            () => {

                if (city === "تبریز") {

                    window.location.href = "category.html";

                }

            }

        );

    });

}



// ===============================
// صفحه صنف‌ها
// ===============================
if (page === "category.html") {

    const categories = [

        "خدمات گردشگری"

    ];

    categories.forEach((category) => {

        createCard(

            "fa-solid fa-route",

            category,

            () => {

                window.location.href = "ads.html";

            }

        );

    });

}