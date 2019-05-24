function goToHomepage() {
    window.location.href="index.html";
}
function goToNextpage() {
   window.location.href="student_form.html";
}
function scrollToAbout() {
   document.getElementById("about").scrollIntoView(true);
}
window.onbeforeunload = function () {
   window.scrollTo(0, 0);
}