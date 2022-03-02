const BACKEND_URL = "https://rhs-pivot-backend.herokuapp.com/api/presentations/";
const TEACHER_URL = "https://pivot-fe-presenter.netlify.app/presentations/"
const BAR_HEIGHT = 20;
const LOGO_HEIGHT = 30;
const LOGO_WIDTH = 30;
const BAR_ID = "PIVOT_BAR_ID";

function include(filename) {
  // templating function for separation of concerns
  // replaces <? > tags in html with JS/CSS
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function onInstall() {
  onOpen();
}

function onOpen() {
  SlidesApp.getUi()
    .createAddonMenu()
    .addItem("Show Pivot Menu", "showSidebar")
    .addToUi();
}

function showSidebar() {
  // templating of stylesheet and client-side JS
  var html = HtmlService.createTemplateFromFile("Page")
    .evaluate()
    .setTitle("Pivot");
  SlidesApp.getUi().showSidebar(html);
}


  