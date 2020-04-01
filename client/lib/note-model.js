class Note {
    constructor (text, id) {
        this.text = text;
        this.id = id
    };

    returnText() {
        return this.text;
    }
};

class NoteList {
    constructor() {
        this.notes = []
    }

    showAll(){
        for(let i = 0; i < this.notes.length; i++) {
            return this.notes[i].returnText
        };
    }

    newNote(text) {
        let ID = this.noteID()
        let note = new Note(text, ID)
        this.notes.push(note)
    }

    noteID() {
       return this.notes.length
    }

    getNote(id){
       return this.notes.find(note => note.id === id)
    }
}

