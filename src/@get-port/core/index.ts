//
// Inspired by https://github.com/sindresorhus/get-port

import { createServer } from "net";

import { promisify } from "@get-port/utils";

//

export function getPort() {
  return new Promise((resolve, reject) => {
    const server = createServer();

    server.unref();
    server.on("error", reject);

    promisify(server.listen.bind(server))(0)
      .then(() => {
        const port = server.address().port;
        server.close(() => {
          resolve(port);
        });
      });
  });
}
