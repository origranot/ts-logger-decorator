import { UdpTransport } from './../src/transports/udp.transport';
import { JsonFormatter, Logger } from '../src';

const transport = new UdpTransport({
  host: '127.0.0.1',
  port: 514
});

const logger = new Logger({
  formatter: new JsonFormatter(),
  transports: [transport]
});

logger.info('Hello World!');
logger.info('This is an object', { metadata: { foo: 'bar' } });
