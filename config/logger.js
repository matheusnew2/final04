import winston from 'winston';
import winstondb from 'winston-mongodb';

const { combine, timestamp, label, printf } = winston.format;

const { createLogger, transports, format } = winston;

const myFormat = format.printf(({ level, message, label, timestamp }) => {
  return `${timestamp} [${label}] ${level}: ${message}`;
});

const logger = createLogger({
  transports: [
    new transports.Console(),
    new transports.MongoDB({
      level: 'info',
      db: "mongodb+srv://matheus:p3gksuax@cluster0.rm38f.gcp.mongodb.net/final?retryWrites=true&w=majority",
      collection: 'logs_grades',
      capped: true,
      cappedMax: 20,
      options: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    }),
  ],
  format: format.combine(
    label({ label: 'grade-api' }),
    format.timestamp(),
    myFormat
  ),
});

export { logger };
