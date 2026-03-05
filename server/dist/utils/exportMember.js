"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.exportMembersToExcel = void 0;
const exceljs_1 = __importDefault(require("exceljs"));
const Member_1 = __importDefault(require("../models/Member"));
const exportMembersToExcel = async (res) => {
    const members = await Member_1.default.find();
    const workbook = new exceljs_1.default.Workbook();
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
exports.exportMembersToExcel = exportMembersToExcel;
