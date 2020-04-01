class NoteListView {
  constructor(list) {
    this.noteList = list
  }

  listOutput() {
    if (this.noteList.notes.length === 0) {
      throw new Error("You have no notes to print");
    } else {
      var list = "<ul><li><div><a href=#" + this.noteList.notes.map(note => note.id + ">" + note.text.slice(0, 20)).join("</a></div></li><div><li><a href=") + "</a></div></li></ul>";
      // document.getElementById("list").innerHTML = list;
      return list;
    };
  };

  notesText() {
    return this.noteList.notes.map(note => note.text.slice(0, 20))
  }
};