// ===== Scroll to properties =====
document.getElementById("explore").onclick = function () {
    document.getElementById("properties").scrollIntoView({
        behavior: "smooth"
    });
};

// ===== Mobile menu =====
let menu = document.getElementById("menu");
let nav = document.getElementById("nav");

menu.onclick = function () {
    nav.classList.toggle("active");
};

// ===== Close menu after click (Mobile) =====
let links = document.querySelectorAll("#nav a");

links.forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});

menu.onclick = function () {
    nav.classList.toggle("active");
};

// ===== WhatsApp quick button =====
function openWhatsApp(){
    window.location.href = "https://wa.me/201111244434";
}

// ===== FORM VALIDATION + WHATSAPP =====
function sendWhatsApp(){

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let message = document.getElementById("message").value.trim();
    let error = document.getElementById("error");

    error.innerText = "";

    if(name === "" || phone === "" || message === ""){
        error.innerText = "⚠️ لازم تملي كل البيانات";
        return;
    }

    let text =
`📩 رسالة جديدة

👤 الاسم: ${name}
📞 الهاتف: ${phone}
💬 الرسالة: ${message}`;

    window.location.href =
    "https://wa.me/201111244434?text=" + encodeURIComponent(text);
}

// ===== TOP BUTTON =====
let topBtn = document.getElementById("topBtn");

window.onscroll = function(){
    if(document.documentElement.scrollTop > 300){
        topBtn.style.display = "block";
    } else {
        topBtn.style.display = "none";
    }
};

function scrollTopBtn(){
    window.scrollTo({top:0, behavior:"smooth"});
}



    // جافاسكربت لإظهار الزر وإخفاؤه والتحكم في الضغط
    const btn = document.getElementById('toTop');

    // إظهار الزر بعد النزول 300px
    window.addEventListener('scroll', function() {
      if (window.scrollY > 300) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    });

    // عند الضغط، العودة للأعلى واختفاء الزر
    btn.addEventListener('click', function() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      btn.classList.remove('show');
    });





const menuBtn = document.getElementById("menu");
const navBar = document.getElementById("nav");

// فتح وقفل المنيو
menuBtn.onclick = function(e) {
    e.stopPropagation();
    navBar.classList.toggle("active");
};

// إغلاق المنيو لما تضغط على أي لينك
document.querySelectorAll("#nav a").forEach(link => {
    link.onclick = () => {
        navBar.classList.remove("active");
    };
});

// إغلاق المنيو لما تضغط في أي مكان بره
document.onclick = function(e) {
    if (!navBar.contains(e.target) && !menuBtn.contains(e.target)) {
        navBar.classList.remove("active");
    }
};