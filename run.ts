import { merge } from "./merge";
import { testCases } from "./test_case";
 
testCases.forEach((tc, index) => {
    const result = merge(tc.c1, tc.c2, tc.c3);
    console.log(`Test case ${index + 1}: c1=${JSON.stringify(tc.c1)} c2=${JSON.stringify(tc.c2)} c3=${JSON.stringify(tc.c3)}`);
    console.log(`  result=${JSON.stringify(result)}`);
});
 