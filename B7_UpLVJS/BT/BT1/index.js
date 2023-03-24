class Note {
    constructor(title, content){
        this.title = title;
        this.content = content;
    }

    addNote(){

    }
}

class NoteList{
    constructor(notes){
        this.notes = [];
    }
    
    addNoteToList(note){
        this.notes.push(note);
    }
}

let note1 = new Note("1", "Hello");
let note2 = new Note("2", "Hehe");

let notes = new NoteList();
notes.addNoteToList(note1)
notes.addNoteToList(note2)
console.log(notes);