class NoteListView {
  constructor() {
    this.noteList = new NoteList
  }

  listOutput() {
    if (this.noteList.notes.length === 0) {
      throw new Error("You have no notes to print");
    } else {
      var list = "<ul><li><div>" + this.noteList.notes.map(note => note.text).join("</div></li><div><li>") + "</div></li></ul>";
      // document.getElementById("list").innerHTML = list;
      return list;
    };
  };
};