import { Answers } from "./answers";
import { data } from "./data";

const NS_PER_SEC = 1e9;
const keys = Object.getOwnPropertyNames(Answers.prototype).filter(key => key !== 'constructor');
const instance = new Answers();

for (const key of keys) {
    if (data[key] === undefined) {
        console.warn(`Challenge ${key} not found`);
        continue;
    }

    console.log(`Running ${key}`);
    const input = data[key].input;
    const output = data[key].output;

    try {
        const time = process.hrtime();
        const result = instance[key].apply(null, input);
        const diff = process.hrtime(time);

        if (deepEqual(output, result) === true) {
            console.log(`🎉 Congrats! Challenge ${key} completed! 🎉`);
            console.log(`⌛ Time (machine dependant): ${diff[0] * NS_PER_SEC + diff[1]}ns`);
            console.log(`🏅 Number of chars (after tranpile): ${Answers.prototype[key].toString().length}chars`);
        } else {
            console.log(JSON.stringify(result, null, 4));
            console.log(`❌ Too bad, your result does not match the expected output! Try again! ❌`);
        }
    } catch (e) {
        console.error(`🔥 Uh oh, something went wrong! See exception bellow: 🔥`);
        console.error(e);
        e.printStackTrace();
    }

    console.log(`\n`);
}

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
            const expectedKeys = Object.keys(expected).sort();
            const submittedKeys = Object.keys(submitted).sort();
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