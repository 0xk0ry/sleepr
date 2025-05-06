import { Module } from '@nestjs/common';
import { DatabaseModule } from '@app/common';
import { ReservationsController } from './reservations.controller';
import { ReservationsService } from './reservations.service';
import { ReservationsModule } from './reservations/reservations.module';

@Module({
  imports: [DatabaseModule, ReservationsModule],
  controllers: [ReservationsController],
  providers: [ReservationsService],
})
export class AppModule {}
