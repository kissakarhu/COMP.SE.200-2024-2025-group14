# Student template

## Purpose of this repository

This is a project template for students participating in Software Testing course
at Tampere University.

The repository only contains the source code that is under testing, `package.json` skeleton
and LICENSE file.

Source code folder contains a separate license file that must **NOT** be removed under any circumstances!
Removing this license file directly violates terms and conditions of the software under testing.
Individuals who remove or modify the license file will also carry the consequences.

## Current coverage
Coverage percentage reflects the chosen 10 files under testing.
[![Coverage Status](https://coveralls.io/repos/github/kissakarhu/COMP.SE.200-2024-2025-group14/badge.svg?branch=main)](https://coveralls.io/github/kissakarhu/COMP.SE.200-2024-2025-group14?branch=main)

## Running Tests Locally 

To run the unit tests and generate coverage reports locally, run the following commands at
the root of the project directory:
In addition to locally using Linux Mint, the tests were ran on a VMWare Virtual Machine with a
Linux Ubuntu -image by cloning into the GitHub repository, downloading the npm tool if not
yet present ('sudo apt install npm') and the running the following commands. The
VMWare Workstation was downloaded from https://www.techspot.com/downloads/189-
vmware-workstation-for-windows.html

Install dependencies:
'npm install'

Run all tests:
'npm test'

Run specific test file (example):
'npm test toString.test.js'

Generate coverage report:
'npm run coverage'

This command creates an HTML coverage report that can be found in the coverage/ directory.

View the report in your browser:
'open coverage/index.html'
