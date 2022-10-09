function play() {
    tester = document.getElementById("username").value;
    localStorage.setItem("user", tester);

    window.location = "main_page.html";
}