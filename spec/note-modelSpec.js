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
    var notelist = new NoteList()
    var notelistview = new NoteListView(notelist)
    note = new Note('hello handsome')
    notelistview.noteList.notes.push(note)
    output = assert.isTrue(notelistview.listOutput() === "<ul><li><div><a>hello handsome</a></div></li></ul>")

    console.log(output);
}

function testEmptyNoteListOutput() {
    console.log('testNoteListOutput');
    var notelist = new NoteList();
    var notelistview = new NoteListView(notelist);
    try {
        notelistview.listOutput()
    } catch (err) {
        if (err.message === "You have no notes to print") {
            output = assert.isTrue(true);
        }   
    }
    console.log(output);
}

function testNoteController() {
    console.log('tests NoteController and only shows 20 characters')
    var controller = new noteController()
    controller.getList();
    console.log(document.getElementById('app').innerHTML);
    
    output = assert.isTrue(document.getElementById('app').innerHTML === "<ul><li><div><a>Favourite drink: sel</a></div></li></ul>")
    console.log(output)
}

function testSingleNoteView() {
    console.log('testSingleNoteView')
    var singleNote = new singleNoteView(new Note('The sky is grey'))
    output = assert.isTrue(singleNote.noteOutput() === "<div>The sky is grey</div>")
    console.log(output)
}

function testGetNoteByID() {
    console.log('testGetNoteByID');
    var notelist = new NoteList;
    notelist.newNote('hello world')
    notelist.newNote('I like sandwiches')
    output = assert.isTrue(notelist.getNote(0).text === 'hello world')
    console.log(output)
    
}


    testNoteText();
    testEmptyNotesArray();
    testNewNote();
    testNoteListOutput();
    testEmptyNoteListOutput();
    testNoteController();
    testGetNoteByID();
