if (process.cwd().split('/').pop() !== 'dist') {
    process.chdir('dist');
}

import * as fs from 'fs';

const NS_PER_SEC = 1e9;

(async () => {
    let challenges = 0;
    const folders = fs.readdirSync('./challenges');
    for (const folder of folders) {
        const answer = (await import(`./challenges/${folder}/answer.js`))?.default;

        if (answer && typeof answer === 'function') {
            challenges++;
            console.log(`Running challenge ${folder}`);
            const input = (await import(`./challenges/${folder}/input.js`))?.default;
            const output = (await import(`./challenges/${folder}/output.js`))?.default;

            try {
                const time = process.hrtime();
                const result = answer.apply(null, [input]);
                const diff = process.hrtime(time);

                if (deepEqual(output, result) === true) {
                    console.log(`🎉 Congrats! Challenge ${folder} completed! 🎉`);
                    console.log(`⌛ Time (machine dependant): ${diff[0] * NS_PER_SEC + diff[1]}ns`);
                    console.log(`🏅 Number of chars (after tranpile): ${answer.toString().length}chars`);
                } else {
                    console.log(JSON.stringify(result, null, 4));
                    console.log(`❌ Too bad, your result does not match the expected output! Try again! ❌`);
                }
            } catch (e) {
                console.error(`🔥 Uh oh, something went wrong! See exception bellow: 🔥`);
                console.error(e);
                e.printStackTrace();
            }
        }
    }

    if(challenges === 0) {
        console.warn(`🤔 No challenge executed, uncomment export function in ./src/challenges/X/answer.ts file to try solving some of them!`);
    }
})();

function deepEqual(expected, submitted): boolean {
    if (typeof expected !== typeof submitted) {
        return false;
    } else if (typeof expected === 'string'
        || typeof expected === 'number'
        || typeof expected === 'boolean') {
        return expected === submitted;
    } else if (typeof expected === 'object') {
        if (Array.isArray(expected) === true) {
            if (Array.isArray(submitted) === false || expected.length !== submitted.length) {
                return false;
            } else {
                for (let i = 0; i < submitted.length; i++) {
                    if (deepEqual(expected[i], submitted[i]) === false) {
                        return false;
                    }
                }
                return true;
            }
        } else {
            const expectedKeys = Object.keys(expected).filter(key => expected[key] !== undefined).sort();
            const submittedKeys = Object.keys(submitted).filter(key => submitted[key] !== undefined).sort();
            if (deepEqual(expectedKeys, submittedKeys) === false
                || deepEqual(expectedKeys.map(e => expected[e]), submittedKeys.map(e => submitted[e])) === false) {
                return false;
            }
            return true;
        }
    } else {
        console.warn(`Type cannot be compared`);
        return false;
    }
}