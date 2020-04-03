// class noteController {

//     constructor (){
//         this.noteList = new NoteList();
//         this.noteListView = new NoteListView(this.noteList);
//     }
    
//     getList() {
//         document.getElementById('app').innerHTML = this.noteListView.listOutput();
//     }

//     retrieveNote(note_id) {
//         var id = Number(note_id)

//         return this.noteList.getNote(id)
//     }

//     viewNote(note) {
//         var singlenote = new singleNoteView(note)
//         return singlenote.noteOutput()
//     }

//     makeUrlChangeShowNoteForCurrentPage() {
//         const parentThis = this;

//         window.addEventListener("hashchange", showNoteForCurrentPage);
        
//         function showNoteForCurrentPage() {
//             showNote(getNoteFromUrl(window.location));
//         };
//         function getNoteFromUrl(location) {
//             return location.hash.split("#")[1];
//         };
//         function showNote(id) {
//             let note = parentThis.retrieveNote(id)
//             document
//                 .getElementById("app")
//                 .innerHTML = notecontroller.viewNote(note);
//         };
//     }
// }


//  function makeUrlChangeShowNoteForCurrentPage() {
    //      window.addEventListener("hashchange", showNoteForCurrentPage);
    //  };
    
    //  function showNoteForCurrentPage() {
        //      showNote(getNoteFromUrl(window.location));
        //  };
        
        //  function getNoteFromUrl(location) {
            //      return location.hash.split("#")[1];
            //  };
            
            //  function showNote(id) {
                //      let note = notecontroller.retrieveNote(id)
                //      document
                //          .getElementById("app")
                //          .innerHTML = notecontroller.viewNote(note);
                //  };
                
                //  makeUrlChangeSubmitNewNote();
                
                //  function makeUrlChangeSubmitNewNote() {
                    //     window.addEventListener("submit", function (submitEvent) {
                        //         submitEvent.preventDefault();
                        //         createNote();
                        //         document
                        //             .getElementById("noteTextArea").value = null
                        //         notecontroller.getList()
                        //     });
                        //  };
                        
                        //  function createNote() {
                            //      notecontroller.noteList.newNote(document
                            //         .getElementById("noteTextArea").value)
                            //     }
                            
                            
                            
var noteController = function () {
    var noteList = new NoteList();
    var noteListView = new NoteListView(noteList);
    
    function getList() {
        document.getElementById('app').innerHTML = noteListView.listOutput();
    }
    
    function _retrieveNote(note_id) {
        var id = Number(note_id)
        return noteList.getNote(id)
    }
    
    function _viewNote(note) {
        var singlenote = new singleNoteView(note)
        return singlenote.noteOutput()
    }
    
    function makeUrlChangeShowNoteForCurrentPage() {
        window.addEventListener("hashchange", _showNoteForCurrentPage);
    }
    
    function _showNoteForCurrentPage() {
        _displayNote(_getNoteFromUrl(window.location));
    }
    
    function _getNoteFromUrl(location) {
        return location.hash.split("#")[1];
    }
    
    function _displayNote(id) {
        let note = _retrieveNote(id)
        document
        .getElementById("app")
        .innerHTML = _viewNote(note);
    }
    
    function makeUrlChangeSubmitNewNote() {
        window.addEventListener("submit", function (submitEvent) {
            submitEvent.preventDefault();
            _createNote();
            document
            .getElementById("noteTextArea").value = null
            getList()
        });
    }
    
    function _createNote() {
        noteList.newNote(document
            .getElementById("noteTextArea").value)
        }
        
        return {
            getList: getList,
            makeUrlChangeShowNoteForCurrentPage: makeUrlChangeShowNoteForCurrentPage,
            makeUrlChangeSubmitNewNote: makeUrlChangeSubmitNewNote,
        }
    }
                         
    const notecontroller = new noteController()
    notecontroller.getList();
    notecontroller.makeUrlChangeShowNoteForCurrentPage();
    notecontroller.makeUrlChangeSubmitNewNote();
