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
    
    var testNote = new Note("I am well hungry");
    output = assert.isTrue(testNote.returnText() === "I am well hungry");

    console.log(output);
};

function testEmptyNotesArray() {
    console.log('testEmptyNotesArray');
    var testNoteList = new NoteList();
    output = assert.isTrue(testNoteList.showAll() === undefined);

    console.log(output);
};

function testNewNote() {
    console.log('testNewNote');
    var testNoteList = new NoteList();
    testNoteList.newNote('hello handsome');
    testNote = testNoteList.notes[0]
    output = assert.isTrue(testNote.returnText() === 'hello handsome');

    console.log(output);
};

function testNoteListOutput() {
    console.log('testNoteListOutput');
    var testNoteList = new NoteList()
    var testNoteListView = new NoteListView(testNoteList)
    testNoteList.newNote('hello handsome')
    output = assert.isTrue(testNoteListView.listOutput() === `<ul><li><div><a href=#0>hello handsome</a></div></li></ul>`)

    console.log(output);
}

function testEmptyNoteListOutput() {
    console.log('testNoteListOutput');
    var testNoteList = new NoteList();
    var testNoteListView = new NoteListView(testNoteList);
    try {
        testNoteListView.listOutput()
    } catch (err) {
        if (err.message === "You have no notes to print") {
            output = assert.isTrue(true);
        }   
    }
    console.log(output);
}

function testNoteController() {
    console.log('tests NoteController and only shows 20 characters')
    var testController = new noteController()
    testController.noteList.newNote("Favourite drink: seltzer")
    testController.getList();    
    output = assert.isTrue(document.getElementById('app').innerHTML === `<ul><li><div><a href="#0">Favourite drink: sel</a></div></li></ul>`)

    console.log(output)
}

function testSingleNoteView() {
    console.log('testSingleNoteView')
    var testSingleNote = new singleNoteView(new Note('The sky is grey'))
    output = assert.isTrue(testSingleNote.noteOutput() === "<div>The sky is grey</div>")
    console.log(output)
}

function testGetNoteByID() {
    console.log('testGetNoteByID');
    var testNoteList = new NoteList;
    testNoteList.newNote('hello world')
    testNoteList.newNote('I like sandwiches')
    output = assert.isTrue(testNoteList.getNote(0).text === 'hello world')
    
    console.log(output)
}

function HTMLForEmptyListShownOnStart(){
    console.log('HTMLForEmptyListShownOnStart');
    var testNoteController = new noteController()
    testNoteController.getList();    
    output = assert.isTrue(document.getElementById('app').innerHTML === "<div>You have no notes to print</div>")
    console.log(output);
    document.getElementById('app').innerHTML = ""
}

function creatingAndDisplayingNewNote(){
    console.log('creatingAndDisplayingNewNote');

    var testNoteController = new noteController()
    testNoteController.getList();

    
    
}


    testNoteText();
    testEmptyNotesArray();
    testNewNote();
    testNoteListOutput();
    testEmptyNoteListOutput();
    testNoteController();
    testGetNoteByID();
    HTMLForEmptyListShownOnStart();
