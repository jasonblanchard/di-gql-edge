import { Client } from 'ts-nats';

interface CheckStatusInput {
  nc: Client;
}

export default function checkStatus({ nc }: CheckStatusInput) {
  interface Status {
    [key: string]: boolean
  }

  const services: Status = {
    nats: !nc.isClosed(),
  }
  const httpCode = Object.keys(services).every(key => services[key] === true) ? 200 : 500;

  return { httpCode, services}
}
