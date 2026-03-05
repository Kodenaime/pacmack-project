"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const memberController_1 = require("../controllers/memberController");
const router = (0, express_1.Router)();
// This makes the full path: /api/community/join
router.post('/join', memberController_1.joinCommunity);
exports.default = router;
