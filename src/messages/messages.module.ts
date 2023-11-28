import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.service';
import { MessagesRepository } from './messages.repository';
@Module({
    controllers: [MessagesController],
    providers: [//providers are the thing that can be used as dependicies for other classes
        MessagesService,
        MessagesRepository
    ]
})
export class MessagesModule { }
