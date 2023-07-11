"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route';
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import { UserRoutes } from './app/modules/user/user.route';
const globalErrorHandler_1 = __importDefault(require("./app/middlewares/globalErrorHandler"));
const routes_1 = __importDefault(require("./app/routes"));
const http_status_1 = __importDefault(require("http-status"));
// import { generateFacultyId } from './app/modules/user/user.utils';
// import ApiError from './errors/ApiErrors'
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
//parser
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
//Application routes
// console.log(process.env)
app.use('/api/v1/', routes_1.default);
//handle not found
app.use((req, res, next) => {
    res.status(http_status_1.default.NOT_FOUND).json({
        success: false,
        message: 'Not Found',
        errorMessages: [
            {
                path: req.originalUrl,
                message: 'API Not Found',
            },
        ],
    });
    next();
});
// const academicSemester ={
//   code:'01',
//   year:'2025',
// };
// const testId = async()=>{
//   const testId = await generateFacultyId()
//   console.log(testId)
// }
// testId();
// app.use('/api/v1/users/', UserRoutes);
// app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);
// //Testing
// app.get('/',  async(req: Request, res: Response,next:NextFunction) => {
//   throw new Error('Testing Error logger');
//   })
// global error handler
app.use(globalErrorHandler_1.default);
exports.default = app;
