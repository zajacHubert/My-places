import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlacesModule } from './places/places.module';
import { Place } from './places/place.entity';
import { ConfigModule, ConfigService } from '@nestjs/config';
@Module({
  imports: [
    PlacesModule,
    TypeOrmModule.forRoot({
      type:'mysql',
      host:process.env.DB_HOST,
      username:'root',
      port:Number(process.env.DB_PORT),
      password:process.env.DB_PASSWORD,
      database:'places',
      synchronize:true,
      entities:[Place],     
    })
  ],
})

export class AppModule { }
