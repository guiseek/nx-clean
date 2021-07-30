#!/bin/bash

set -e

nx run plugin-core:build

npm link dist/libs/plugin/core

npm link @nx-clean/plugin-core
