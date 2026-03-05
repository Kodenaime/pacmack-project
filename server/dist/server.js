"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const db_1 = require("./config/db");
const communityRoutes_1 = __importDefault(require("./routes/communityRoutes"));
const contactRoutes_1 = __importDefault(require("./routes/contactRoutes"));
const exportRoutes_1 = __importDefault(require("./routes/exportRoutes"));
(0, db_1.connectDB)();
const app = (0, express_1.default)();
const allowedOrigins = {
    origin: [
        "https://pacmack.com",
        "https://www.pacmack.com",
        "http://localhost:5173",
        "http://localhost:5174",
    ],
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
};
app.use((0, cors_1.default)(allowedOrigins));
app.use(express_1.default.json());
app.use("/api/community", communityRoutes_1.default);
app.use("/api/contact", contactRoutes_1.default);
app.use("/api/export", exportRoutes_1.default);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
