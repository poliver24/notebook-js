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

function testNoteListOutput() {
    console.log('testNoteListOutput');

    var notelistview = new NoteListView
    note = new Note('hello handsome')
    notelistview.noteList.notes.push(note)
    output = assert.isTrue(notelistview.listOutput() === "<ul><li><div>hello handsome</div></li></ul>")

    console.log(output);
}

function testEmptyNoteListOutput() {
    console.log('testNoteListOutput');
    var notelistview = new NoteListView
    try {
        notelistview.listOutput()
    } catch (err) {
        if (err.message === "You have no notes to print") {
            output = assert.isTrue(true);
        }   
    }
    console.log(output);
}

    testNoteText();
    testEmptyNotesArray();
    testNewNote();
    testNoteListOutput();
    testEmptyNoteListOutput();