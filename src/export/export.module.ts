import { Module } from '@nestjs/common';
import { SubscriberModule } from 'src/subscriber/subscriber.module';
import { ExportController } from './export.controller';
import { ExportService } from './export.service';
import { SubscriberService } from 'src/subscriber/subscriber.service';

@Module({
  imports: [SubscriberModule],
  controllers: [ExportController],
  providers: [ExportService, SubscriberService],
})
export class ExportModule {}
