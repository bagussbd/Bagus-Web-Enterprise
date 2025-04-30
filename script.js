// Preview image upload
document.getElementById("uploadImage").addEventListener("change", function() {
    const file = this.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function(e) {
        document.getElementById("profileImage").setAttribute("src", e.target.result);
      };
      reader.readAsDataURL(file);
    }
  });
  
  // Save profile button
  function saveProfile() {
    alert("Profile saved!");
  }
  