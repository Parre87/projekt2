# My project Football quiz!

This project creates a quiz game of football questions. This fun and educational football quiz featured ten engaging questions covering key topics such as famous teams, legendary players, and general football knowledge.
Designed to both entertain and inform, the quiz tested participants' understanding of the sport’s history and current stars, making it an enjoyable challenge for football fans of all levels.

[Click here](https://parre87.github.io/projekt2/) to view the live web application.

![Responsive Mockup](https://github.com/Parre87/projekt2/blob/main/assets/images/mockupprojekt2.png)

## User Experience UX

The Football Quiz is designed to provide users with a smooth, interactive, and engaging quiz experience centered around football knowledge. Here is how the users interact with the game:

- __Welcome & Start__

  - Upon visiting the page, users are welcomed with a friendly greeting and a Start Quiz button.
    I used clean and centered layout to draw immediate attention to the quiz without distractions.

    ![Start page](https://github.com/Parre87/projekt2/blob/main/assets/images/startpage.png)

- __Quiz Flow__

  - The quiz presents one question at a time to avoid overwhelming users.
  - A 15-second countdown timer adds excitement and encourages quick thinking.
  - Users choose from four options per question, and the correct answer is highlighted after selection, providing instant 
    feedback.
    

- __Visual Feedback__

  - Answers are color-coded:
    Green for correct answers
    Red for incorrect answers
  - Disabled buttons after selection prevent accidental changes.
 
    ![Quiz page](https://github.com/Parre87/projekt2/blob/main/assets/images/quizpage.png)

- __Results Summary__

  - At the end of the quiz, users see:

  - Their total score.
  - A detailed breakdown of each question, what they answered and the correct answer.
  - Color-coded backgrounds for correct/incorrect responses.
 
    ![Result page](https://github.com/Parre87/projekt1/blob/main/assets/images/resultpage.png)

- __Retake Option__

  - Users can easily retake the quiz with a single click, allowing for repeated engagement and learning.

   ![Result page2](https://github.com/Parre87/projekt1/blob/main/assets/images/resultpage2.png)

- __Design & Accessibility__

  - The layout is responsive and works across different screen sizes.
  - Background image and font choices provide a sporty, immersive atmosphere.
  - Clear button labels and sufficient contrast ensure accessibility for most users.

## Testing

- __HTML validator__

The HTML for this project was validated using the Nu HTML Checker. The validation was performed by submitting the deployed site URL: https://parre87.github.io/projekt2/. The checker reported one warning (see picture below).

This warning indicates a structural issue that could affect accessibility or SEO. To resolve the issue is to add a meaningful content inside the heading or removing the empty tag.

![HTML Validator](https://github.com/Parre87/projekt2/blob/main/assets/images/htmlvalidator.png)

- __CSS validator__

The CSS used in this project has been tested with the W3C CSS Validation Service. My deployed site (https://parre87.github.io/projekt2/) passed validation with no errors, confirming that the stylesheet conforms to CSS Level 3 + SVG standards.

This ensures better browser compatibility, improved maintainability, and adherence to web development best practices.

![CSS validator](https://github.com/Parre87/projekt2/blob/main/assets/images/cssvalidator.png)

- __JShint new and old version__

The JavaScript code in this project was analyzed using JSHint. The analysis revealed first that the file contains 35 warnings, all related to the use of const, which is only supported in ES6 or newer environments. This is before update

![JShint](https://github.com/Parre87/projekt2/blob/main/assets/images/jshintoldversion.png)

And after updating jshint to esversion: 6 it shows 0 warnings.

![JShint](https://github.com/Parre87/projekt2/blob/main/assets/images/jshint.png)

JShint was using during the project to detect errors and potential problems in JavaScript code.

## Google Lighthouse 

![JShint](https://github.com/Parre87/projekt2/blob/main/assets/images/lighthousestartpage.png)

- Performance is 100%. 
- Accessibility is at 100% . 
- Best practices is 100%
- SEO is 90%. Documents do not have Meta discription which lower the score.


