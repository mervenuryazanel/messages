import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-messages.dto';
import { MessagesService } from './messages.service';

//we dont need to use the @Injectable decorator because controller only consumes the classes
//nest automatically creates the instance of controller for us so we dont have to register controller with DI containers
@Controller('messages')
export class MessagesController {

    constructor(public messagesService: MessagesService) {
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
    async getMessage(@Param('id') id: string) {
        const message = await this.messagesService.findOne(id);

        if (!message) {
            throw new NotFoundException('message with the given id not found');
        }

        return message;
    }
}
