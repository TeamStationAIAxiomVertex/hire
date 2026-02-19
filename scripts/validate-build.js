#!/usr/bin/env node
const glob = require('glob');
const fs = require('fs');
const path = require('path');

const getHtmlFilePaths = () => {
    return glob.sync('build/**/*.html');
};

const validateBuildOutput = (filePaths) => {
    if (filePaths.length === 0) {
        throw new Error('No HTML files found in build output. Build may have failed.');
    }

    filePaths.forEach(filePath => {
        const content = fs.readFileSync(filePath, 'utf-8');
        if (content.trim().length === 0) {
            throw new Error(`Empty HTML file found: ${filePath}. Failing build.`);
        }
    });
};

const main = () => {
    console.log('--- Validating build output ---');
    try {
        const filePaths = getHtmlFilePaths();
        validateBuildOutput(filePaths);
        console.log('--- Build output validated ---');
    } catch (error) {
        console.error(error.message);
        process.exit(1);
    }
};

main();
