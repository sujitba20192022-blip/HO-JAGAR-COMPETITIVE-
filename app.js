// HO JAGAR COMPETITIVE
// Basic application logic

function showMessage(message) {
  alert(message);
}

// Student Registration
function registerStudent() {
  const name = document.getElementById("studentName")?.value;
  const mobile = document.getElementById("studentMobile")?.value;
  const password = document.getElementById("studentPassword")?.value;

  if (!name || !mobile || !password) {
    showMessage("कृपया सभी जानकारी भरें।");
    return;
  }

  localStorage.setItem("studentName", name);
  localStorage.setItem("studentMobile", mobile);
  localStorage.setItem("studentPassword", password);

  showMessage("Registration successful!");
}

// Student Login
function loginStudent() {
  const mobile = document.getElementById("loginMobile")?.value;
  const password = document.getElementById("loginPassword")?.value;

  const savedMobile = localStorage.getItem("studentMobile");
  const savedPassword = localStorage.getItem("studentPassword");

  if (mobile === savedMobile && password === savedPassword) {
    showMessage("Student Login Successful!");
  } else {
    showMessage("Mobile/Email या Password गलत है।");
  }
}

// Logout
function logoutStudent() {
  showMessage("आप Logout हो गए हैं।");
    }
