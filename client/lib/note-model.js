class Note {
    constructor (text) {
        this.text = text;
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
        let note = new Note(text)
        this.notes.push(note)
    }
}

