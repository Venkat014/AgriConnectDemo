const homePageSection = document.getElementById('homePageSection');
const registerForm = document.getElementById('registerForm');


const accData = (fullName, mobileNumber) => {
  return {
    fullName,
    mobileNumber,
  }
};

let accountArray = [];

function verifyOtp() {
  const fullName = document.getElementById("fullName").value.trim();
  const mobileNumber = document.getElementById("mobileNumber").value.trim();
  accountArray.push(accData(fullName, mobileNumber));
  
  const otp = document.getElementById("otp").value;
  if (otp === "123456") {
    localStorage.setItem("createAccount", JSON.stringify(accountArray));
    alert("✅ OTP Verified Successfully!");
    window.location.href = "login_form.html";
  } else {
    alert("❌ Invalid OTP. Please try again."); 
  }
  document.getElementById("fullName").value = "";
  document.getElementById("mobileNumber").value = "";
  
}

function chooseRole(role) {
  if (role === "tenant") {
    window.location.href = "tanant_portal.html";
  } else if (role === "landlord") {
    window.location.href = "landlord_portal.html";
  }
}