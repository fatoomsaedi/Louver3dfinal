// script.js
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import { database } from './firebase-config.js';  // استيراد قاعدة البيانات من ملف firebase-config.js

// فتح الـ popup عند تحميل الصفحة
window.onload = function() {
    const popupModal = document.getElementById("popup-modal");
    const closeBtn = document.querySelector(".close-btn");
    
    // عرض الـ popup عند تحميل الصفحة
    popupModal.style.display = "block";
    
    // إغلاق الـ popup عند الضغط على زر الإغلاق
    closeBtn.addEventListener("click", () => {
        popupModal.style.display = "none";
    });

    // التعامل مع نموذج الإدخال
    document.getElementById("contact-form").addEventListener("submit", function (e) {
        e.preventDefault();  // منع إعادة تحميل الصفحة عند إرسال النموذج

        // الحصول على البيانات من المدخلات
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        // الحصول على معرّف فريد لكل إدخال (يمكنك استخدام الوقت أو أي معرّف آخر)
        const userId = Date.now();  // معرف فريد باستخدام الوقت الحالي
        const userRef = ref(database, 'users/' + userId);  // مرجع المستخدم في Firebase

        // حفظ البيانات في Firebase Realtime Database
        set(userRef, {
            name: name,
            email: email
        }).then(() => {
            alert("تم حفظ البيانات بنجاح!");
            // إغلاق الـ popup بعد حفظ البيانات
            popupModal.style.display = "none";
        }).catch((error) => {
            alert("حدث خطأ: " + error.message);
        });
    });
};
