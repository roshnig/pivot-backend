// defines functions associated with saving question data

function saveQuestionAsProperty(formObject) {
  const currentSlide = SlidesApp.getActivePresentation().getSelection().getCurrentPage().asSlide();
  formObject.slideId = currentSlide.getObjectId();
  addSpeakerNotes(currentSlide, formObject);
  addMarkerToSlide();
  const documentProperties = PropertiesService.getDocumentProperties();
  const jsonToSave = JSON.stringify(formObject);
  documentProperties.setProperty(formObject.slideId, jsonToSave);
}

function addMarkerToSlide() {
    const presentation = SlidesApp.getActivePresentation();
    var selection = SlidesApp.getActivePresentation().getSelection();
    var slide = selection.getCurrentPage();
    const x = 0;
    const y = presentation.getPageHeight() - BAR_HEIGHT;
    const barWidth = presentation.getPageWidth();
    var bar = slide.insertShape(SlidesApp.ShapeType.RECTANGLE, x, y,barWidth, BAR_HEIGHT);
    bar.getBorder().setTransparent();
    bar.getText().insertText(0,"pivot - submit your answer!");
    bar.setLinkUrl(BAR_ID);
    slide.insertImage("https://rhs-pivot-backend.herokuapp.com/public/pivot_logo.png",0,0,LOGO_WIDTH,LOGO_HEIGHT);
}

function addSpeakerNotes(currentSlide, questionData) {
  const speakerNotesTextRange = currentSlide.getNotesPage().getSpeakerNotesShape().getText();
  speakerNotesTextRange.setText(`This is a pivot slide!\nThe number of responses is ${questionData.numAnswers}.\nThe correct answer is ${questionData.correctAnswer}.`)
}