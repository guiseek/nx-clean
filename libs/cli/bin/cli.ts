#!/bin/usr/env node

import { run } from "../src/lib/cli";

const cmd = process.argv.splice(2)

run(cmd.shift(), cmd)
