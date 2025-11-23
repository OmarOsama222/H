// Password Protection + Music
function checkPassword() {
  const password = document.getElementById("password-input").value;
  const errorMsg = document.getElementById("error-message");
  const correctPassword = "1"; // <<< change this to your secret password

  if (password === correctPassword) {
    document.getElementById("password-screen").style.display = "none";
    document.getElementById("main-content").style.display = "block";
  } else {
    errorMsg.textContent = "❌ Wrong password! Try again.";
  }
}