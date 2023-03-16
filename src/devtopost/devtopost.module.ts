import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { DevtopostController } from './devtopost.controller';
import { DevtopostService } from './devtopost.service';

@Module({
  controllers: [DevtopostController],
  providers: [DevtopostService],
  imports: [HttpModule],
})
export class DevtopostModule {}
