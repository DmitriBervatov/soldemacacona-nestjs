import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { CreateExportDto } from './dto/create-export.dto';
import { UpdateExportDto } from './dto/update-export.dto';
import { Subscriber } from 'src/subscriber/entities/subscriber.entity';
import { Repository } from 'typeorm';
import * as ExcelJS from 'exceljs';

@Injectable()
export class ExportService {
  constructor(
    @InjectRepository(Subscriber)
    private readonly subscriberRepository: Repository<Subscriber>,
  ) {}

  async generateExcel() {
    const subscribers = await this.subscriberRepository.find();
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Subscribers');

    worksheet.columns = [
      { header: 'ID', key: 'id', width: 10 },
      { header: 'Email', key: 'email', width: 30 },
    ];

    subscribers.forEach((sub) => {
      worksheet.addRow({
        id: sub.id,
        email: sub.email,
      });
    });

    const buffer = await workbook.xlsx.writeBuffer();
    return buffer;
  }
}
