function createPresentation() {
    // Create a new Google Slides presentation
    var presentation = SlidesApp.create('New Presentation');
  
    // Add a blank slide
    var slide = presentation.appendSlide(SlidesApp.PredefinedLayout.BLANK);
  
    // Set the background color of the slide to white
    slide.getBackground().setSolidFill('#FFFFFF');
  
    // Define the text style for the title
    var textStyle = {};
    textStyle[SlidesApp.TextStylePropertyName.FONT_SIZE] = 40;
    textStyle[SlidesApp.TextStylePropertyName.BOLD] = true;
    textStyle[SlidesApp.TextStylePropertyName.FONT_FAMILY] = 'Arial';
    textStyle[SlidesApp.TextStylePropertyName.FOREGROUND_COLOR] = '#000000'; // Black color
  
    // Add a text box with the title to the slide
    var textBox = slide.insertTextBox('The Necessity of Systems Thinking in Leadership', 100, 100, 600, 100);
    var textRange = textBox.getText();
    textRange.setTextStyle(textStyle);
  
    // Center align the text
    textRange.getParagraphStyle().setParagraphAlignment(SlidesApp.ParagraphAlignment.CENTER);
  
    // Return the URL of the new presentation
    return presentation.getUrl();
  }
  
  // Run the function
  var presentationUrl = createPresentation();
  Logger.log(presentationUrl);
  
  
  