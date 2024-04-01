import { NotesService } from './notes.service';
import { Note } from './notes.schema';
import { UpdateNoteDto } from './note-update-dto';
export declare class NotesController {
    private readonly notesService;
    constructor(notesService: NotesService);
    create(createNoteDto: any): Promise<Note>;
    getNotes(receiver: string): Promise<Note[]>;
    getAllNotes(): Promise<Note[]>;
    updateNote(id: string, updateNoteDto: UpdateNoteDto): Promise<Note>;
}
