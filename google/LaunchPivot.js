function launchPivot() {
  const slideData = getSlideData();
  const sessionId = updatePivotBackend(slideData);
  const url=TEACHER_URL+sessionId;
  return url;
}

function updatePivotBackend(slides) {
  const presentationId = SlidesApp.getActivePresentation().getId();
  const payload = JSON.stringify({presentationId, slides});
  Logger.log(payload)
  const options = {
    method: "POST",
    contentType: "application/json",
    payload
  }
  const url = BACKEND_URL;
  let res;
  try {
    res = UrlFetchApp.fetch(url, options);
  } catch (err) {
    return `ERROR: ${err}`;
  }
  Logger.log("PIVOT LAUNCH: server response status "+ res.getResponseCode);
  Logger.log(payload);
  Logger.log("SERVER RETURNED: "+res);
  return JSON.parse(res).sessionId;
}

function getSlideData() {
  const presentation = SlidesApp.getActivePresentation();
  const presentationId = presentation.getId();
  const slides = [];
  presentation.getSlides().forEach(function(slide, i) {
    const slideId = slide.getObjectId();
    let question = JSON.parse(getQuestionData(slideId));
    if (question) {
      question.hasQuestion = true;
    } else {
      question = {hasQuestion: false};
    }
    var thumbnail = getSlideImage(slideId);

    const slideObject = {slideId, slideImageUrl: thumbnail.contentUrl, question};
    Logger.log(slideObject);
    slides.push(slideObject);
  });
  return slides;
}

function getQuestionData(slideId) {
  const documentProperties = PropertiesService.getDocumentProperties();
  const questionString = documentProperties.getProperty(slideId);
  return questionString;
}


  function getSlideImage(slideId) {
    const presentationId = SlidesApp.getActivePresentation().getId();
    return Slides.Presentations.Pages.getThumbnail(presentationId, slideId, {
      'thumbnailProperties.thumbnailSize': 'LARGE'
    });
  }