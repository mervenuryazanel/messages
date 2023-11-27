import { readFile, writeFile } from "fs/promises";

export class MessagesRepository {
    async findOne(id: string) {
        //first read the file
        const contents = await readFile('messages.json', 'utf8');

        //now we are receiving a string (a json), so we need to parse it to a json object
        const messages = JSON.parse(contents);

        //now find by id and return it
        return messages[id]; //!???because we are using the id as the key
    }

    async findAll() {
        const contents = await readFile('messages.json', 'utf8');
        const messages = JSON.parse(contents);

        return messages;
    }

    async create(content: string) {
        const contents = await readFile('messages.json', 'utf-8');
        const messages = JSON.parse(contents);

        const id = Math.floor(Math.random() * 999);

        //create a new message with the id and content
        messages[id] = { id, content };
        // {    
        //      //...previousMessages,    
        //     "id": {
        //         "id": "id",
        //         "content": "content"
        //     }
        // }

        await writeFile('messages.json', JSON.stringify(messages));
    }
}