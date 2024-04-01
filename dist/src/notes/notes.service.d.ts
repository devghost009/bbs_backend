import { Model } from 'mongoose';
import { Note, NoteDocument } from './notes.schema';
import { UpdateNoteDto } from './note-update-dto';
export declare class NotesService {
    private noteModel;
    constructor(noteModel: Model<NoteDocument>);
    create(createNoteDto: any): Promise<Note>;
    getAllNotes(): Promise<Note[]>;
    findNotesBySenderReceiver(receiver: string): Promise<Note[]>;
    updateNote(id: string, updateNoteDto: UpdateNoteDto): Promise<Note>;
}
