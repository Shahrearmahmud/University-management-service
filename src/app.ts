import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route';
import express, { Application } from 'express';
import cors from 'cors';
import { UserRoutes } from './app/modules/user/user.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
// import ApiError from './errors/ApiErrors'

const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application routes

// logger.info(process.env)

app.use('/api/v1/users/', UserRoutes);
app.use('/api/v1/academic-semesters', AcademicSemesterRoutes);

// //Testing
// app.get('/',  async(req: Request, res: Response,next:NextFunction) => {
//   throw new Error('Testing Error logger');
//   })

// global error handler
app.use(globalErrorHandler);

export default app;
