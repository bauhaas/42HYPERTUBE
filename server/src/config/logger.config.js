import util from 'util';

import { addColors, createLogger, format, transports } from 'winston';

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
  printf((info) => {
    const args = [info.message, ...(info[Symbol.for('splat')] || [])];
    info.message = args;

    const msg = args
      .map((arg) => {
        if (typeof arg == 'object')
          // return util.inspect(arg, {compact: true});
          return JSON.stringify(arg);
        return arg;
      })
      .join(' ');

    return `${info.label} ${
      info.timestamp
    } - [${info.level.toUpperCase()}] ${msg}`;
  }),
  colorize({ all: true }),
);

const logger = createLogger({
  level: 'debug',
  transports: [new transports.Console({ format: combine(myCustomFormat) })],
});

export default logger;
