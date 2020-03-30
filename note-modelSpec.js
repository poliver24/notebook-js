var assert = {
    isTrue: function (assertionToCheck) {
        if (!assertionToCheck) {
            throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
        }
        return true
    }
};

function testNoteText() {
    console.log('testNoteText');
    
    var note = new Note("I am well hungry");
    output = assert.isTrue(note.returnText() === "I am well hungry");

    console.log(output);
};

function testEmptyNotesArray() {
    console.log('testEmptyNotesArray');
    var notelist = new NoteList();
    output = assert.isTrue(notelist.showAll() === undefined);

    console.log(output);
};

function testNewNote() {
    console.log('testNewNote');
    
    var notelist = new NoteList();
    notelist.newNote('hello handsome');
    note = notelist.notes[0]
    output = assert.isTrue(note.returnText() === 'hello handsome');

    console.log(output);
};

    testNoteText();
    testEmptyNotesArray();
    testNewNote();