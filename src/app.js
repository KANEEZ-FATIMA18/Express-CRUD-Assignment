
import express from 'express' 
const app = express() 

app.use(express.json()) 

const notes =[]


// notes create
app.post('/notes', (req, res)=>{
    notes.push(req.body);

    res.status(201).json(
        {
            message: 'Note added successfully'
        }
    );
});


// notes fetch
app.get('/notes', (req, res)=>{
    res.status(200).json(
        {
            message: 'Notes fetched successfully',
            notes: notes
        }
    )


})


//delete note
app.delete('/notes/:id', (req, res)=>{
    const deleteNote= req.params.id;

    delete notes[deleteNote]

    res.status(200).json({
        message:'Note Deleted'
    })

    
})


//edit note
app.put('/notes/:id', (req, res)=>{
    console.log(req.params.id);
    
    const {id} = req.params;
    notes[id] = req.body;

    res.status(200).json({
        message:'Note Updated'
    })
})


export default app;