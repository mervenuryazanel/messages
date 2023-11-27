import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-messages.dto';
import { MessagesService } from './messages.service';
@Controller('messages')
export class MessagesController {
    messagesService: MessagesService;

    constructor() {
        //DONT DO THIS ON REAL APPS!!! USE DEPENDENCY INJECTION INSTEAD
        this.messagesService = new MessagesService();
    }

    @Get()
    listMessages() {
        return this.messagesService.findAll();
    }

    @Post()
    createMessage(@Body() body: CreateMessageDto) {
        return this.messagesService.create(body.content);
    }

    @Get('/:id')
    getMessage(@Param('id') id: string) {
        return this.messagesService.findOne(id);
    }
}
