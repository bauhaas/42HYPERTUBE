import { createLogger, format, transports, addColors } from 'winston';
const { combine, timestamp, label, printf, colorize } = format;

addColors({
  error: 'bold red',
  warn: 'yellow',
  info: 'blue',
  http: 'green bold',
  verbose: 'cyan',
  debug: 'green',
});

const myCustomFormat = format.combine(
  label({ label: '[nodejs-api]' }),
  timestamp({ format: 'DD-MM-YYYY HH:MM:SS' }),
  printf(
    (info) =>
      `${info.label} ${
        info.timestamp
      } - [${info.level.toUpperCase()}] ${JSON.stringify(info.message)}`,
  ),
  colorize({ all: true }),
);

const logger = createLogger({
  level: 'debug',
  transports: [new transports.Console({ format: combine(myCustomFormat) })],
});

export default logger;
