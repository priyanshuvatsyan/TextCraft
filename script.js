function menu() {
    /* console.log("trig 1"); */
    let items = document.getElementsByClassName("resp-menu-ul");

    for (let i = 0; i < items.length; i++) {
        if (items[i].style.display === "none") {
            items[i].style.display = "block";
        } else {
            items[i].style.display = "none";
        }
    }
    /*  console.log("final trig "); */
}
const formatText = (action) => {
    const input = document.getElementById('inputText').value;
    let output = '';
    /*  console.log("trig 1"); */
    switch (action) {
        case 'uppercase':
            /*  console.log("trig 1.2"); */
            output = input.toUpperCase();
            /* console.log("trig 2"); */
            break;
        case 'lowercase':
            /*  console.log("trig 1.2"); */
            output = input.toLowerCase();
            /*   console.log("trig 2"); */
            break;
        case 'capitalize':
            output = input.replace(/\b\w/g, char => char.toUpperCase());
            break;
        case 'titleCase':
            output = input.toLowerCase().replace(/\b\w/g, char => char.toUpperCase());
            break;
        case 'removeDuplicates':
            output = [...new Set(input.split('\n'))].join('\n');
            break;

        case 'reverse':
            output = input.split('').reverse().join('');
            break;

        case 'sortLines':
            output = input.split('\n').sort().join('\n');
            break;

        case 'removeSpaces':
            output = input.replace(/\s+/g, '');
            (/\s+/, '');
            break;

        case 'wordCount':
            output = `Word Count: ${input.trim().split(/\s+/).length}`;
            (/\s+/, '');
            break;

        case 'reverseWords':
            output = input.split(' ').reverse().join(' ');
            break;

        case 'trimLines':
            output = input.split('\n').map(line => line.trim()).join('\n');
            break;

        case 'lineCount':
            output = `Line Count: ${input.split('\n').length}`;
            break;

        case 'charCount':
            output = `Character Count: ${input.length}`;
            break;
        case 'vowelCount':
            output = `Vowel Count: ${(input.match(/[aeiou]/gi) || []).length}`;
            break;
          
            case 'consonantCount':
                output = `Consonant Count: ${(input.match(/[bcdfghjklmnpqrstvwxyz]/gi) || []).length}`;
                break;
            case 'removeHtmlTags':
                output = input.replace(/<\/?[^>]+(>|$)/g, '');
                break;
            case 'removePunctuation':
                output = input.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"");
                break;
            case 'base64Encode':
                output = btoa(input);
                break;
            case 'base64Decode':
                output = atob(input);
                break;
            case 'urlEncode':
                output = encodeURIComponent(input);
                break;
            case 'urlDecode':
                output = decodeURIComponent(input);
                break;
            case 'htmlEncode':
                output = input.replace(/[\u00A0-\u9999<>\&]/g, (i) => '&#'+i.charCodeAt(0)+';');
                break;
            case 'htmlDecode':
                const txt = document.createElement('textarea');
                txt.innerHTML = input;
                output = txt.value;
                break;
            case 'findReplace':
                const findText = document.getElementById('findText').value;
                const replaceText = document.getElementById('replaceText').value;
                output = input.split(findText).join(replaceText);
                break;
            case 'countSpecificWord':
                const countWordText = document.getElementById('countWordText').value;
                const regex = new RegExp(`\\b${countWordText}\\b`, 'gi');
                const matches = input.match(regex);
                output = `The word "${countWordText}" occurs ${matches ? matches.length : 0} times.`;
                break;
            case 'extractEmails':
                const emailPattern = /[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+/gi;
                const emails = input.match(emailPattern);
                output = emails ? emails.join('\n') : 'No emails found.';
                break;
            default:
                output = input;
    }
    localStorage.setItem('inputText', input);
    localStorage.setItem('outputText', output);

    document.getElementById('outputText').value = output;
    /*  console.log("final trig "); */
}
const generateLoremIpsum = () => {
    const paragraphs = document.getElementById('loremIpsumParagraphs').value;
    const loremIpsumText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`;

    let output = '';
    for (let i = 0; i < paragraphs; i++) {
        output += `${loremIpsumText}\n\n`;
    }

    document.getElementById('outputText').value = output.trim();
}

const generateRandomString = () => {
    const length = document.getElementById('randomStringLength').value;
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    document.getElementById('outputText').value = result;
}
const loadData = () => {
    const inputEl = document.getElementById('inputText');
    const outputElement = document.getElementById('outputText');
    /*   console.log("trig 1"); */
    const savedinput = localStorage.getItem('inputText');
    const savedOutput = localStorage.getItem('outputText');
    /*  console.log("trig 1.2"); */
    if (savedinput !== null) {
        inputEl.value = savedinput;
    }/*  console.log("trig 2"); */
    if (savedOutput !== null) {
        outputElement.value = savedOutput;
    } /* console.log("final trig "); */

};
window.onload = loadData;
