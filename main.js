let quotes =["MAKE SOMEONE SMILE AND SPREAD JOY",
            "LEARN SOMETHING NEW AND GROW YOUR MIND",
            "TAKE CARE OF YOURSELF AND PRIORITIZE WELL-BEING",
            "HELP SOMEONE IN NEED AND SHOW KINDNESS",
            "REFLECT ON YOUR DAY AND APPRECIATE THE GOOD",
            "TRY SOMETHING CREATIVE AND EXPRESS YOURSELF",
            "CONNECT WITH NATURE AND FIND PEACE"];
let symbol =["happiness",
            "growth",
            "me",
            "Kindness",
            "Gratitude",
            "Creativity",
            "Nature"];
let emoji = [
    "\uD83D\uDE00", 
    "\uD83C\uDF1F",
    "\uD83C\uDF55",
    "\uD83C\uDF0D",
    "\uD83C\uDF89"];    
        
let collectMessage = [];
function getSymbol(){
    let num = Math.floor(Math.random() * 6);
    collectMessage.push(symbol[num]);
}

function getQuote(symbol){
    switch(symbol){
        case "happiness":
            collectMessage.push(quotes[0]);
            break;
        case "growth":
            collectMessage.push( quotes[1]);
            break;
        case "me":
            collectMessage.push( quotes[2]);
            break;            
        case "Kindness":
            collectMessage.push( quotes[3]);
            break;
        case "Gratitude":
            collectMessage.push( quotes[4]);
            break;
        case "Creativity":
            collectMessage.push( quotes[5]);
            break;
        case "Nature":
            collectMessage.push( quotes[6]);
            break;    
        default:
            return 0
    }    
}

function getEmoji(){
    let num = Math.floor(Math.random() * 4);
    collectMessage.push(emoji[num]);
}

getSymbol();
getQuote(collectMessage[0]);
getEmoji();
console.log(`${collectMessage[2]} Your Symbol today will be "${collectMessage[0]}" ,so try to ${collectMessage[1]} ${collectMessage[2]}`);