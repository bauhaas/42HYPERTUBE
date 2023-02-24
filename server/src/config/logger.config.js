import { createLogger, format, transports, addColors } from 'winston';
const { combine, timestamp, label, printf, colorize } = format;

addColors({
  info: 'blue',
  warn: 'yellow',
  error: 'bold red',
  debug: 'green',
});

let myCustomFormat = format.combine(
  label({ label: '[nodejs-api]' }),
  timestamp({ format: 'DD-MM-YYYY HH:MM:SS' }),
  printf(
    (info) =>
      `${info.label} ${info.timestamp} - [${info.level.toUpperCase()}] ${info.message}`
  ),
  colorize({ all: true }),

);

const logger = createLogger({
  level: 'debug',
  transports: [new transports.Console({ format: combine(myCustomFormat) })],
});

export default logger;