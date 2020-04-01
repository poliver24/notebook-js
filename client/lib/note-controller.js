class noteController {

    constructor (){
        this.noteList = new NoteList;
        this.noteList.newNote("Favourite drink: seltzer");
        this.noteList.newNote("Favourite meal: lasagne");

        this.noteListView = new NoteListView(this.noteList);
    }
    
    getList() {
        document.getElementById('app').innerHTML = this.noteListView.listOutput();
    }

    retrieveNote(note_id) {
        var id = Number(note_id)

        return this.noteList.getNote(id)
    }

    viewNote(note) {
        var singlenote = new singleNoteView(note)
        return singlenote.noteOutput()
    }
}

var notecontroller = new noteController()
notecontroller.getList();



   
