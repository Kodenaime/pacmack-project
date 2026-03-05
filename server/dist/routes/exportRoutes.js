"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const exportMember_1 = require("../utils/exportMember");
const auth_1 = require("../middleware/auth");
const router = (0, express_1.Router)();
// GET /api/export/members
router.get('/members', auth_1.adminAuth, async (req, res) => {
    try {
        await (0, exportMember_1.exportMembersToExcel)(res);
    }
    catch (error) {
        res.status(500).json({ message: "Failed to export data" });
    }
});
exports.default = router;
