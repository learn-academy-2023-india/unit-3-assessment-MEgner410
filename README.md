# Assessment for Unit 3

Being a developer requires an acute attention to detail. The expectation of this assessment is that all instructions are read carefully and followed completely.

A good developer will ask clarifying questions when a task is unclear and use all the resources at their disposal.

The step-by-step instructions [here](https://github.com/LEARNAcademy/Syllabus/blob/main/github/assessments.md) breakdown the git and GitHub process for this assessment.

Assessment should be accessed through the GitHub Classroom link provided to you in Slack.

PRs should be posted _before_ class begins on Tuesday, January 2, 2024.

#### Process

- Accept the assignment via GitHub Classroom link shared with you in Slack
- `cd` into an appropriate location on your local, we recommend the Desktop
- Clone the assessment repository
- `cd` into the assessment
- Create a branch with the unit and your name, e.g `unit-3-sarah-proctor`
- Run $ `yarn` to install the React dependencies
- Run $ `yarn start` to start the server
- Complete all assessment tasks
- Git add files, commit, push to your branch
- Create a pull request and leave the branch open for review!

---

### React Challenge

1. React Debugging: The Card Draw React application has three (3) errors that need to be fixed.
 Use the console and error messages to guide you to the solution.
 
  A opening "<div>" tag was missing and needed to be added, then I removed a "return function that was not needed, then added a parenthesis for the return statment that wasnt included. Made changes but still showing faults, found the fault, was missing my export, added it back in and it runs normaly.

2. React Feature: Add functionality to the `Return Cards and Shuffle Deck` button using the `shuffle` function to reset the Card Draw application to its original state.

had to restore the uncommented out line the resets the hand. 
const shuffle = () => {
    setHand([]);
}
this will clear the 'hand' state when the return cards and shuffle deck is used.


3. React Concepts: Add comments to the seven (7) notations in the `drawCard` function describing in detail the functionality of the following line of code.

added the answers on the app.js file



4. STRETCH (optional): Add stylings of your choice to the application. Ensure the styling does not interfere with the card draw functionality. 

added some border and hover stylings to the cards

### Interview Practice Questions

1. What are three (3) syntax difference between HTML and JSX?

 Event handlers in HTML use 'onclick','onchange' where in JSX, cammelCase naming are used in JSX while the value is produced from the function.

 the class of a element is definded by the 'class' atribute in html.
 <div class="my-contanier">Content</div>

were as in JSX 'className' would be the equal attribute casue 'class; is the reserved key-word in JavaScript.

< div className="my-contanier">Content</div>

JSX an object accepts the 'style' object with a cammelCase property in CSS, 
In HTML a string 'style' is typically used 

2. What is yarn? What file(s) are modified when you run the command yarn in your terminal?

In Javascript, yarn is the package manager. it was develped by facebook and is often used insted of NPM( Node Package Manager). Once Yarn is ran in the terminal is starts to look for a file called package.json. if it is in the terminal yarns start to run dependencies in the file and the creates a yarn.lock file. this will lock down version of the installed packages

3. What is the difference between state values and props in React?  State and  Proops manage the data in the componnet in react. Stae uses multiable data within the componet, changes to state cause a re-render of the component. In Proops it is  used to pass the data, it uses a parent component to a child component. even thought they both have diffrent funtions they are both used to manage and pass data together effectivly.

4. STRETCH (optional): What is the difference between a div tag and a span tag?

### Looking Ahead: Terms for Next Unit

1. Object-oriented programming: A software that that revoles around the concept of "objects", that may contain data that are called forms, attributes, and code. A blueprint is formed from these objects which is a instance of classes. the 4 key principles are Encapsulation, Polymorphism, Inheritance, and Abstration. these functions help with code being easier to understand and maintain.

2. Ruby: in the 1990's buy combining  Perl's syntex and Smalltalk's object orientd priniples, Yukihiro "Matz" Matsumoto created a dynamic reflective OOP. the Ruby prograhm excelled in simplicty and productivity making it easier to use with a better readabilty. Rails Framework, Community and Ecosystem, RubyGems, Metaprogrming, Syentex and Readabilty, Object-Oriented, Garbage Collection, and Dynamic Typing make up, Ruby's key features.

3. Ruby Hashes: hasshes orginize data and retrive it when needed in a manner that is easy to understand. key-value pairs are storred in this data struture. it may be also refferd to as a associative array, map, or dictionary in other languages of programming.

---

### Assessment Review Process

When an instructor reviews a student's assessment the instructor is evaluating the work through the lens of the Dreyfus model of skill acquisition. The Dreyfus model describes how individuals progress through various levels in their learning process of new skills in the following levels: novice, advanced beginner, competent, proficient, expert. For this course students will be evaluated as novice, advanced beginner, or competent skill levels. Skill levels are not grades! Skill levels measure current understanding of a set of topics covered in class.

Assessments are expected to be completed on time. In the event of an emergency, a professional developer will communicate to the instructor and reestablish a deadline suitable to both parties. Assessments turned in late without communication will be evaluated at a lower level of skill acquisition.

### Incomplete

An assessment that is considered incomplete is one that did not meet the requirements of a valid attempt on every question. Incomplete assessments will not be reviewed and will be returned to the student for completion. Students with incomplete assessments will not be able access the next assessment until the current one is complete. An assessment will be considered incomplete due to the following:

- questions with no answer (excluding STRETCH options)
- no pseudo code when requested
- non-working code with no accompanying explanation

### Complete

An assessment that is considered complete is one that met the bare minimum requirements of a valid attempt on every question. An assessment that is considered complete did not display enough effort to reach the novice level of skill acquisition.

### Novice

The novice stage is the first level of skill acquisition. In the novice level, the student is just beginning to understand the skill and requires a step-by-step "recipe" to produce an output. An assessment that is considered at the novice level of skill acquisition is one that met the requirements of a valid attempt on every question while closely following process notes from class to produce:

- basic pseudo code
- code that will output content in the terminal
- "your answers" written in the student's own words
- researched answers written in the student's own words that provides additional context

### Advanced Beginner

The advanced beginner stage is the second level of skill acquisition. In the advanced beginner level, the student can begin to troubleshoot problems on their own and can decide if the "recipe" will be able to produce a particular outcome. An assessment that is considered at the advanced beginner level of skill acquisition is one that met the requirements of a valid attempt on every question while adapting process notes from class to produce:

- pseudo code with proper vocabulary terms
- code that will output correct content in the terminal
- "your answers" written in complete sentences the student's own words that provide partially correct comments
- researched answers written in complete sentences in the student's own words that provides additional context

### Competent

The competent stage is the third level of skill acquisition. In the competent level, the student can decide what information is relevant to solve the problem and can begin to create their own "recipe" to produce a particular outcome. An assessment that is considered at the competent level of skill acquisition is one that met the requirements of a valid attempt on every question while adapting process notes from class as well as from other resources to produce:

- detailed pseudo code with proper vocabulary terms
- code that will output correct content in the terminal following best practices
- "your answers" written in complete sentences the student's own words that provide correct answers
- well researched and detailed answers written in complete sentences in the student's own words that provides additional context
