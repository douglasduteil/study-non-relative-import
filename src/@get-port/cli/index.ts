//
//
// Inspired by https://github.com/sindresorhus/get-port-cli

// Register paths first to ensure that non relative path works
import "../../register-path";

import { getPort } from "@get-port/core";

getPort()
  .then(console.log)
  .catch(console.error);
