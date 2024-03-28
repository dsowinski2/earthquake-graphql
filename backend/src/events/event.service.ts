import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { EventDto } from './dto/event.dto';
import { Event } from './models/event.model';
import { OnModuleInit } from '@nestjs/common';
import { ApiClient } from './api_client/client';

export class EventService implements OnModuleInit {
  constructor(
    @InjectModel(Event.name) private readonly eventModel: Model<Event>,
  ) {}

  async onModuleInit() {
    const docsNumber = await this.eventModel.countDocuments();
    if (docsNumber == 0) {
      try {
        const data = await this.getData();
        data.features.forEach((event) => {
          this.create(event);
        });
      } catch (err: any) {
        if (typeof err === 'string') {
          // Proper logger here
          console.error(err);
        } else if (err instanceof Error) {
          console.error(err.message);
        } else {
          throw err;
        }
      }
    }
  }
  async create(eventDto: EventDto): Promise<Event> {
    const created = await this.eventModel.create(eventDto);
    return created;
  }
  async getAll(skip: number = 10, limit: number = 11): Promise<Event[]> {
    const results = await this.eventModel
      .find()
      .sort({ 'properties.time': 1 })
      .skip(skip)
      .limit(limit);
    return results;
  }
  async getData(
    startDate: Date | null = null,
    endDate: Date | null = null,
  ): Promise<any> {
    if (!startDate) {
      startDate = new Date(2024, 2, 8);
    }
    if (!endDate) {
      endDate = new Date();
    }
    const apiClient = new ApiClient();
    const data = await apiClient.getEvents(startDate, endDate);
    return data;
  }
  async getDailyData(): Promise<any> {
    const todayDate = new Date();
    const [startDate, endDate] = [todayDate, todayDate];
    return this.getData(startDate, endDate);
  }
}
