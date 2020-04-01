class singleNoteView {
    constructor(note) {
        this.note = note
    }

    noteOutput() {
       var note = "<div>" + this.note.text + "</div>";
        // document.getElementById("list").innerHTML = list;
        return note;
    };
    
};