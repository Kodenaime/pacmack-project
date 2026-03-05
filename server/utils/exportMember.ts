import { Response } from 'express';
import ExcelJS from 'exceljs';
import Member from '../models/Member';

export const exportMembersToExcel = async (res: Response) => {
  const members = await Member.find();
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet('Community Members');

  worksheet.columns = [
    { header: 'First Name', key: 'firstName', width: 20 },
    { header: 'Last Name', key: 'lastName', width: 20 },
    { header: 'Email', key: 'email', width: 30 },
    { header: 'Category', key: 'category', width: 25 },
    { header: 'Country', key: 'countryOfResidence', width: 20 },
    { header: 'Status', key: 'status', width: 15 },
    { header: 'Joined Date', key: 'createdAt', width: 25 }
  ];

  members.forEach(member => {
    worksheet.addRow({
      firstName: member.firstName,
      lastName: member.lastName,
      email: member.email,
      category: member.category,
      countryOfResidence: member.countryOfResidence,
      status: member.status,
      createdAt: member.createdAt.toLocaleDateString()
    });
  });

  res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
  res.setHeader('Content-Disposition', 'attachment; filename=pacmack_community.xlsx');

  await workbook.xlsx.write(res);
  res.end();
};