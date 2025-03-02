import dotenv from "dotenv";

// تحميل المتغيرات من ملف .env
dotenv.config();

const config = {
  // استخدام المتغير البيئي MONGO_URI من ملف .env
  MONGO_URI: process.env.MONGO_URI,
};

export default config;
