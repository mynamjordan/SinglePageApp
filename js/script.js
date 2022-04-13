

/*Tried to attemp to make a theme of light and dark mode using https://www.w3schools.com/howto/howto_js_toggle_dark_mode.asp but was unable to
use is as im not using the body as the main page of source */

/* Research
https://stackoverflow.com/questions/68867299/darkmode-toggle-two-buttons-only-one-works 
https://www.youtube.com/watch?v=ifDUKLTBYbY&ab_channel=TechTalkTutorials

https://www.codegrepper.com/code-examples/javascript/javascript+change+background+color+of+button
^Found this one particually useful
*/

/* Since i was not using body as the main source of the page i had my maing page and border for the main page implement the themes */
const doLightMode = () => {
    const pages = document.getElementsByClassName("page");
    for (let index = 0; index < pages.length; index++) {
        pages[index].className = pages[index].className.replace(" dark-page", "");
        /* Anything in the page that dark will be repaled */
    }
    const allTexts = document.getElementsByClassName("main-page")[0].getElementsByTagName("*");
    for (let index = 0; index < allTexts.length; index++) {
        allTexts[index].className = allTexts[index].className.replace(" light-text", "");
        /*All the white text will be replaced with white that is on the main page */
    }
}

const doDarkMode = () => {
    const pages = document.getElementsByClassName("page");
    for (let index = 0; index < pages.length; index++) {
        pages[index].className += " dark-page";
        /*The opposite happens you will get the theme dark-page from css and apply it to the page */
    }

    const allTexts = document.getElementsByClassName("main-page")[0].getElementsByTagName("*");
    for (let index = 0; index < allTexts.length; index++) {
        allTexts[index].className += " light-text";
        /*The text will then change to to white, which is everything on the main page */
    }
}


