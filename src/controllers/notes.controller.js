const notesCtrl = {}

const { Mongoose } = require('mongoose');
const Note = require('../models/Note')

notesCtrl.getNotes = async (req, res) => {
    const notes = await Note.find();
    res.json(notes);
}

notesCtrl.createNote = async (req, res) => {
    const { title, content, date, author } = req.body;
    const newNote = new Note({
        title,
        content,
        date,
        author
    })
    await newNote.save();
    // console.log(req.body);
    res.json({message: 'Note Saved'});
}

notesCtrl.getNote = async(req, res) => {
    const note = await Note.findById(req.params.id);
    console.log(note);
    // console.log(req.params.id)
    res.json({Titulo: 'Nsgsdfgsdfg'});
}

notesCtrl.updateNote = async (req, res) => {
    // console.log(req.params.id, req.body);
    const { title, content, author } = req.body;

    // OPCIONAL WARNING DE BIBLIOTECA MONGOOSE
    // await Note.findByIdAndUpdate({_id: req.params.id}, {
    //     title,
    //     content,
    //     author
    // });

    await Note.findByIdAndUpdate(req.params.id, {
        title,
        content,
        author
    });
    res.json({message: 'NOTE Updated'});
}

notesCtrl.deleteNote = async (req, res) => {
    await Note.findByIdAndDelete(req.params.id);
    res.json({message: 'NOTE Deleted'});
}




module.exports = notesCtrl;