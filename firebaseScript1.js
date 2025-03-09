  // استيراد Firebase
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";

// تهيئة Firebase
const firebaseConfig = {
  apiKey: "AIzaSyDK5pm_X_4dKvyye-H4LCFezgwyIaoZr_0",
  authDomain: "louver3dfinal.firebaseapp.com",
  projectId: "louver3dfinal",
  storageBucket: "louver3dfinal.appspot.com",
  messagingSenderId: "18851056045",
  appId: "1:18851056045:web:f8c4f8751eb11e1ddaf924",
  measurementId: "G-1JCCKBL5BL"
};

// تهيئة التطبيق وقاعدة بيانات Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// دالة لحفظ بيانات المستخدم في Firestore
async function saveUserData(name, email, callback) {
  try {
    console.log("🔍 جاري حفظ البيانات...");
    const docRef = await addDoc(collection(db, "users"), {
      name: name,
      email: email
    });
    console.log("✅ تم حفظ المستخدم بنجاح! ID:", docRef.id);
    callback(true);
  } catch (error) {
    console.error("❌ خطأ أثناء حفظ البيانات:", error);
    alert("❌ فشل حفظ البيانات، تحقق من الإعدادات في Firebase.");
    callback(false);
  }
}

// عناصر الـ Modal
const modal = document.getElementById('popup-modal');
const closeBtn = document.querySelector('.close-btn');
const form = document.getElementById('contact-form');
const buttons = document.querySelectorAll('.open-modal');
const successMessage = document.createElement("div");

// تخصيص رسالة نجاح
successMessage.style.cssText = `
  position: fixed;
  top: 20px;
  right: 20px;
  background-color: #4CAF50;
  color: white;
  padding: 10px 15px;
  border-radius: 5px;
  display: none;
  z-index: 1000;
`;
document.body.appendChild(successMessage);

let sourceButton = null;

// فتح الـ Modal
buttons.forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'flex';
    sourceButton = button;
  });
});

// إغلاق الـ Modal
closeBtn.addEventListener('click', () => modal.style.display = 'none');
window.addEventListener('click', (event) => {
  if (event.target === modal) modal.style.display = 'none';
});

// التحقق من صحة البريد الإلكتروني
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// إرسال البيانات عند الضغط على "Start Tour"
form.addEventListener('submit', (event) => {
  event.preventDefault();

  const name = form.querySelector('#name').value.trim();
  const email = form.querySelector('#email').value.trim();

  if (!name || !email) {
    alert("❌ يرجى ملء جميع الحقول");
    return;
  }

  if (!isValidEmail(email)) {
    alert("❌ الرجاء إدخال بريد إلكتروني صحيح");
    return;
  }

  saveUserData(name, email, (success) => {
    if (success) {
      successMessage.textContent = "✅ تم حفظ البيانات بنجاح!";
      successMessage.style.display = "block";
      
      setTimeout(() => {
        successMessage.style.display = "none";
      }, 3000);

      console.log("تم الضغط على زر بدء الجولة");

      if (sourceButton) {
        const targetPage = sourceButton.closest('#services') ? '3d-viewer.html' : 'gallery.html';
        window.location.href = targetPage;
      }

      modal.style.display = 'none';
    } else {
      alert("❌ حدث خطأ أثناء حفظ البيانات، يرجى المحاولة مرة أخرى.");
    }
  });
});

 // استيراد Firebase
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-app.js";
 import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/9.6.1/firebase-firestore.js";
 
 // تهيئة Firebase
 const firebaseConfig = {
   apiKey: "AIzaSyDK5pm_X_4dKvyye-H4LCFezgwyIaoZr_0",
   authDomain: "louver3dfinal.firebaseapp.com",
   projectId: "louver3dfinal",
   storageBucket: "louver3dfinal.appspot.com",
   messagingSenderId: "18851056045",
   appId: "1:18851056045:web:f8c4f8751eb11e1ddaf924",
   measurementId: "G-1JCCKBL5BL"
 };
 
 // تهيئة التطبيق وقاعدة بيانات Firestore
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 
 // دالة لحفظ بيانات المستخدم في Firestore
 async function saveUserData(name, email, callback) {
   try {
     console.log("🔍 جاري حفظ البيانات...");
     const docRef = await addDoc(collection(db, "users"), {
       name: name,
       email: email
     });
     console.log("✅ تم حفظ المستخدم بنجاح! ID:", docRef.id);
     callback(true);
   } catch (error) {
     console.error("❌ خطأ أثناء حفظ البيانات:", error);
     alert("❌ فشل حفظ البيانات، تحقق من الإعدادات في Firebase.");
     callback(false);
   }
 }
 
 // عناصر الـ Modal
 const modal = document.getElementById('popup-modal');
 const closeBtn = document.querySelector('.close-btn');
 const form = document.getElementById('contact-form');
 const buttons = document.querySelectorAll('.open-modal');
 const successMessage = document.createElement("div");
 
 // تخصيص رسالة نجاح
 successMessage.style.cssText = `
   position: fixed;
   top: 20px;
   right: 20px;
   background-color: #4CAF50;
   color: white;
   padding: 10px 15px;
   border-radius: 5px;
   display: none;
   z-index: 1000;
 `;
 document.body.appendChild(successMessage);
 
 let sourceButton = null;
 
 // فتح الـ Modal
 buttons.forEach(button => {
   button.addEventListener('click', () => {
     modal.style.display = 'flex';
     sourceButton = button;
   });
 });
 
 // إغلاق الـ Modal
 closeBtn.addEventListener('click', () => modal.style.display = 'none');
 window.addEventListener('click', (event) => {
   if (event.target === modal) modal.style.display = 'none';
 });
 
 // التحقق من صحة البريد الإلكتروني
 function isValidEmail(email) {
   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
   return emailRegex.test(email);
 }
 
 // إرسال البيانات عند الضغط على "Start Tour"
 form.addEventListener('submit', (event) => {
   event.preventDefault();
 
   const name = form.querySelector('#name').value.trim();
   const email = form.querySelector('#email').value.trim();
 
   if (!name || !email) {
     alert("❌ يرجى ملء جميع الحقول");
     return;
   }
 
   if (!isValidEmail(email)) {
     alert("❌ الرجاء إدخال بريد إلكتروني صحيح");
     return;
   }
 
   saveUserData(name, email, (success) => {
     if (success) {
       successMessage.textContent = "✅ تم حفظ البيانات بنجاح!";
       successMessage.style.display = "block";
       
       setTimeout(() => {
         successMessage.style.display = "none";
       }, 3000);
 
       console.log("تم الضغط على زر بدء الجولة");
 
       if (sourceButton) {
         const targetPage = sourceButton.closest('#services') ? '3d-viewer.html' : 'gallery.html';
         window.location.href = targetPage;
       }
 
       modal.style.display = 'none';
     } else {
       alert("❌ حدث خطأ أثناء حفظ البيانات، يرجى المحاولة مرة أخرى.");
     }
   });
 });
 
 