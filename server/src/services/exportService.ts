import { Response } from 'express';
import ExcelJS from 'exceljs';
import Member from '../models/Member';
import { NotFoundError } from '../utils/AppError';

export async function exportMembersToExcel(res: Response) {
  const members = await Member.find().sort({ createdAt: -1 }).lean();

  if (!members.length) {
    throw new NotFoundError('No members found to export');
  }

  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Community Members');

  worksheet.columns = [
    { header: 'First Name', key: 'firstName', width: 20 },
    { header: 'Middle Name', key: 'middleName', width: 20 },
    { header: 'Last Name', key: 'lastName', width: 20 },
    { header: 'Email', key: 'email', width: 32 },
    { header: 'WhatsApp', key: 'whatsapp', width: 20 },
    { header: 'Category', key: 'category', width: 28 },
    { header: 'Country of Residence', key: 'countryOfResidence', width: 22 },
    { header: 'Status', key: 'status', width: 15 },
    { header: 'Joined', key: 'createdAt', width: 25 },
  ];

  members.forEach((m) => {
    worksheet.addRow({
      firstName: m.firstName,
      middleName: m.middleName || '',
      lastName: m.lastName,
      email: m.email,
      whatsapp: m.whatsapp,
      category: m.category,
      countryOfResidence: m.countryOfResidence,
      status: m.status,
      createdAt: m.createdAt.toISOString().split('T')[0],
    });
  });

  // Style header row
  worksheet.getRow(1).font = { bold: true };

  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', `attachment; filename=pacmack_members_${Date.now()}.xlsx`);

  await workbook.xlsx.write(res);
  res.end();
}
