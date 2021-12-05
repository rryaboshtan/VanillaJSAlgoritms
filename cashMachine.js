function iWantToGet(amountRequired) {
   const availableNotes = [100, 50, 20, 10];
   const result = [];

    if (amountRequired > 0) {
       for (let i = 0; i < availableNotes.length; i++) {
           let note = availableNotes[i];

           while (amountRequired - note >= 0) {
               amountRequired -= note;
               result.push(note);
           }
       }
   } else {
      console.log('Enter new amount, please');
    }
    
    return result;
}

console.log(iWantToGet(0));
