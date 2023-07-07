// import { AcademicSemesterRoutes } from './app/modules/academicSemester/academicSemester.route';
import express, { Application, NextFunction, Request, Response } from 'express';
import cors from 'cors';
// import { UserRoutes } from './app/modules/user/user.route';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';
import httpStatus from 'http-status';
// import { generateFacultyId } from './app/modules/user/user.utils';
// import ApiError from './errors/ApiErrors'

const app: Application = express();

app.use(cors());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Application routes

// logger.info(process.env)
app.use('/api/v1/', routes);

//handle not found
app.use((req: Request, res: Response, next: NextFunction) => {
  res.status(httpStatus.NOT_FOUND).json({
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
app.use(globalErrorHandler);

export default app;
