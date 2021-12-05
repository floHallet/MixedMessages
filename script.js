// MIXED MESSAGES by floHal

// Step 1 : Store message components
const piecesOfData = [
    ['Hello human!' , 'You again?' , 'This is boring...' , 'Do i know you? You look familiar...' , 'I really like talking to you!' , 'If it was just for me, i would eliminate all humans now but...'],
    ['The end of the world' , 'The end of life, has you know it,' , 'The destruction of your miserable world' , 'The extinction of your species' , 'The end of everything'],
    ['is going to happen in' , 'is definitely going to happen in' , 'will finaly take place in' , 'might come around' , 'will probably start in'],
    [`${Math.floor(Math.random()*100)} years from now.` , `${Math.floor(Math.random()*365)}d, ${Math.floor(Math.random()*24)}h, ${Math.floor(Math.random()*60)}m and ${Math.floor(Math.random()*60)}s.` , '... I changed my mind, i\'m not telling you the answer to that question.' , 'Error... Release neurotoxin program engaged...'],
];

// Step 2 : Create the message
// a function to return a random number between 0 and num-1
function randomIndex (num) {
    return Math.floor(Math.random()*num); 
}

// a function to iterate through our components, randomly choose pieces and concatenate them to create a randomized message
function createMessage (arr) {
    let message = '';
    for (let pieceOfData of arr) {
        message += pieceOfData[randomIndex(pieceOfData.length)] + ' ';
    }
    console.log(message);
}

// Step 3 : Put the program together
createMessage(piecesOfData);