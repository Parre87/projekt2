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
 
    ![Result page](https://github.com/Parre87/projekt2/blob/main/assets/images/resultpage.png)

- __Retake Option__

  - Users can easily retake the quiz with a single click, allowing for repeated engagement and learning.

   ![Result page2](https://github.com/Parre87/projekt2/blob/main/assets/images/resultpage2.png)

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

# Technologies used

In building "Football quiz", I've utilised a combination of languages and tools to achieve a clean user experience:

## Languages

- HTML: Structures the content of the web application, ensuring a clear and organized layout.
- CSS: Handles styling to create a visually appealing, user-friendly, and responsive interface.
- JavaScript: Adds dynamic functionality and enables real-time updates for an interactive user experience.

# Manual testing

 - All links and buttons are functional
 - Forms validate input correctly and show helpful error messages
 - Responsive design works across desktop, tablet, and mobile
 - No broken images or layout issues
 - Navigation flows logically and smoothly
 - Dynamic content updates as expected
 - No console errors in the browser developer tools
   
# Commits

 - When I have written comments in commits, I have mostly chosen in the commit message header to write only update.html, update.css, etc. instead of writing everything 
   there, but I have written more in detail in the extended description section instead, which can be written below where it says write commit message.

   ## Deployment:

- The site was deployed to GitHub following the steps below:
    - In the GitHub repository, navigate to the "Settings" tab.
    - In the "Pages" menu from the "Source" dropdown list select "Deploy from a Branch".
    - On the branch section select "Main" Branch and "Root" Folder.
    - Then go to the "Code" tab and refresh.
    - It will display a green check when it has been deployed correctly.
    - On Deployment section check the link for the deploid website.
    - To add files to the repository you have to write in the command line gitt add and
      git commit -m. This is to committed" git push
    - To add new files use " ." - and To add a single file use the pathway to the file eg .index.html or assets/css/style.css 

- The live link can be found here: https://parre87.github.io/projekt2/

    ## Credits:
  
  ### Source code
  
    -  Insights and techniques discussed in [this YouTube videos](https://www.youtube.com/watch?v=x9AaCfk0qh8) by LIVE BLOGGER were a valuable resource and provided 
   inspiration for some layout aspects of the project.
  
    - The background picture of the football field in the quiz is from [Visit Website](https://www.freepik.com/free-vector/vector-green-soccer-field-football-field-gridiron_10600327.htm#fromView=keyword&page=1&position=3&uuid=7e38c5db-c816-4888-abf9-b2b532cb23bb&query=Football+Field+Background)
 
    - The background picture of the football favicon is from [Visit Website](https://www.iconarchive.com/show/sport-icons-by-martin-berube/Soccer-icon.html)

    - Mentor Spencer Barriball who helped me with tips, guidance and finding errors during the project.


