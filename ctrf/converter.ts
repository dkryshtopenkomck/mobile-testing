import * as fs from 'fs';
import * as path from 'path';

// Paths
const inputPath = path.join(__dirname, 'ctrf-report.json');
const outputPath = path.join(__dirname, "..", "reports", 'converted-report.json');

// Interfaces for the original and new report structures
interface OriginalTest {
    name: string;
    status: string;
    duration: number;
    message?: string; // Optional message for failed tests
}

interface OriginalReport {
    results: {
        tool: { name: string };
        summary: {
            tests: number;
            passed: number;
            failed: number;
            pending: number;
            skipped: number;
            other: number;
            start: number;
            stop: number;
        };
        tests: OriginalTest[];
        environment: {
            appName: string;
            appVersion: string;
            osPlatform: string;
            osRelease: string;
            osVersion: string;
            buildName: string;
            buildNumber: string;
            buildUrl: string;
            repositoryName: string;
            repositoryUrl: string;
            branchName: string;
            testEnvironment: string;
        };
    };
}

interface NewTest {
    testKey: string;
    start: string;
    finish: string;
    comment: string;
    status: string;
}

interface NewReport {
    info: {
        summary: string;
        description: string;
        startDate: string;
        finishDate: string;
        testEnvironments: string[];
    };
    tests: NewTest[]; // Ensure tests array is included here
}

// Helper to convert timestamp to the desired date string format
const convertToCustomFormat = (timestamp: number): string => {
    const date = new Date(timestamp);
    const offset = -date.getTimezoneOffset();
    const offsetSign = offset >= 0 ? '+' : '-';
    const offsetHours = String(Math.floor(Math.abs(offset) / 60)).padStart(2, '0');
    const offsetMinutes = String(Math.abs(offset) % 60).padStart(2, '0');
    const formattedOffset = `${offsetSign}${offsetHours}:${offsetMinutes}`;

    // Format date without milliseconds
    return date.toISOString().replace('Z', formattedOffset).replace(/\.\d{3}/, '');
};

// Main function to convert the report
function convertReport(originalReport: OriginalReport): NewReport[] {
    const { environment, summary, tests } = originalReport.results;

    // Prepare environment details for the new report
    const testEnvironments = [
        environment.appVersion,
        environment.osPlatform,
        environment.osVersion,
    ];

    // Prepare the new report structure
    const finishDate = convertToCustomFormat(summary.start); // Swap: start is now finish
    const startDate = convertToCustomFormat(summary.stop);   // Swap: stop is now start

    const newReport: NewReport = {
        info: {
            summary: '',
            description: '',
            startDate,
            finishDate,
            testEnvironments,
        },
        tests: tests.map((test) => {
            const testKeyMatch = test.name.match(/CXF-\d+/);
            const testKey = testKeyMatch ? testKeyMatch[0] : '';
            const finish = convertToCustomFormat(summary.start + test.duration * 1000); // Assuming duration is in milliseconds

            // Use the original message if the test failed, otherwise use 'Successful execution'
            const comment = test.status === 'passed' ? 'Successful execution' : test.message || 'No message provided';

            return {
                testKey,
                start: startDate,  // Updated to use swapped start date
                finish,
                comment,
                status: test.status === 'passed' ? 'PASS' : 'FAIL',
            };
        }),
    };

    return [newReport];
}

// Read the original report from the file system
fs.readFile(inputPath, 'utf-8', (err, data) => {
    if (err) {
        console.error(`Error reading the file: ${err}`);
        return;
    }

    try {
        // Parse the original JSON report
        const originalReport: OriginalReport = JSON.parse(data);

        // Convert the report to the new format
        const convertedReport = convertReport(originalReport);

        // Write the converted report to a new file
        fs.writeFile(outputPath, JSON.stringify(convertedReport, null, 2), (err) => {
            if (err) {
                console.error(`Error writing the file: ${err}`);
            } else {
                console.log(`Report successfully converted and saved to ${outputPath}`);
            }
        });
    } catch (err) {
        console.error(`Error parsing JSON: ${err}`);
    }
});
