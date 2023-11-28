import { Injectable } from "@nestjs/common";
import { MessagesRepository } from "./messages.repository";

@Injectable() //this decorator marks this class for regestering as a provider inside of the DI container
export class MessagesService {

    constructor(public messagesRepo: MessagesRepository) {
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