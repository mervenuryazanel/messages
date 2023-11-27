import { MessagesRepository } from "./messages.repository";

export class MessagesService {
    messagesRepo: MessagesRepository;

    constructor() {
        //services are creating their own dependencies SOOOO
        //DONT DO THIS ON REAL APPS!!! USE DEPENDENCY INJECTION INSTEAD
        this.messagesRepo = new MessagesRepository(); //we created and a new property int his class and assinged it to a new instance of the MessagesRepository class
    }

    findOne(id: string) {
        return this.messagesRepo.findOne(id);
    }

    findAll() {
        return this.messagesRepo.findAll();
    }

    create(content: string) {
        return this.messagesRepo.create(content);
    }
}