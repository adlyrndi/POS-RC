#!/bin/sh
set -e

cd backend
npm install
node src/app.js
