import { useEffect, useState } from "react"

export const NoteApp = () => {
    const [note, setNote] = useState("");
    // tampungan nilai aray
    const [notes, setNotes] = useState<string[]>([]);

    function addNote() {
        setNotes([...notes, note]);
        // control supaya kosong
        setNote("")
        // controller input
        // unctroller input
    }

    function deleteNote(item:string) {
        const newNotes = [...notes]; // shalow copy
        const filteredNotes = newNotes.filter((note) => note !== item);
        console.log(filteredNotes);

        setNotes(filteredNotes);
     }

    // return (
    //     <div>
    //         <textarea onChange={(e) => setNote(e.target.value)}></textarea>
    //         <button onClick={addNote}>Save</button>
    //         <div>{JSON.stringify(notes, null, 2)}</div>
    //     </div>
    // )

    // return (

    //     // value={note} > uncontroller
    //     <div>
    //         <textarea value={note} onChange={(e) => setNote(e.target.value)}></textarea>
    //         <button onClick={addNote}>Save</button>

    //         {/* <div>{JSON.stringify(notes, null, 2)}</div> */}
    //         <div>{notes.map((item) => {
    //             return <div key={item}>
    //                 <div>{item}</div>
    //                 <button onClick={() => deleteNote(item)}>Delete</button>
    //             </div>
    //         })}</div>
    //     </div>
    // )

    useEffect(() => {
        console.log("Keren juga kamuuu")
    }, [notes]);

    return (

        // value={note} > uncontroller
        <div>
            <textarea value={note} onChange={(e) => setNote(e.target.value)}></textarea>
            <button onClick={addNote}>Save</button>

            {/* <div>{JSON.stringify(notes, null, 2)}</div> */}
            <div>{notes.map((item) => {
                return <div key={item}>
                    <div>{item}</div>
                    <button onClick={() => deleteNote(item)}>Delete</button>
                </div>
            })}</div>
        </div>
    )
}
