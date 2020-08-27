const assert = require("assert").strict;

const string1 = "hello dear hello best come home hello boy hello you dear";

const duplicateWords = (value) => {
	let splitvalues = value.split(" ");
	let duplicates = [];
	let word = "";
	let times = 0;

	for (let d = 0; d < splitvalues.length; d++) {
		splitvalues.forEach((element) => {
			if (element === splitvalues[d]) {
				word = element;
				times += 1;
			}
		});

		if (!duplicates.find((e) => e.word === word)) {
			duplicates.push({
				word,
				times,
			});
		}
		word = "";
		times = 0;
	}

	let nonresultduplicates = [];
	let realduplicates = [];
	duplicates.filter((e) => {
		if (e.times <= 1) {
			nonresultduplicates.push(e.word);
		} else {
			realduplicates.push(e);
		}
	});

	return {
		duplicates: realduplicates,
		nonduplicates: nonresultduplicates.join(" "),
	};
};

// console.log(duplicateWords(string1));

try {
	assert.strictEqual(
		"this a new",
		duplicateWords("this is is a new day day").nonduplicates
	);
	console.log(
		"test should pass as it returns non-duplicates",
		"\n test passed",
		"\n"
	);
} catch (error) {
	console.log("test failed", error, "\n");
}

const codeMaker = (word, value) => {
	let codearray = [];
	for (let d = 0; d < word.length; d++) {
		const code = word.charCodeAt(d);
		codearray.push(code + value);
	}
	let result = codearray.map((e) => String.fromCharCode(e));
	return result.join("");
};

//asertions

/**
 * test should pass using two equal codes
 */
try {
	assert.deepStrictEqual(
		codeMaker("hello i am here", 7),
		codeMaker("hello i am here", 7)
	);
	console.log("test should pass using two equal codes", "\n test passed", "\n");
} catch (error) {
	console.log("test failed", error, "\n");
}

/**
 * test should pass
 */
try {
	assert.deepStrictEqual(codeMaker("RTF", 9), codeMaker("hello dear", 6));
	console.log("\n test failed", new Error("value is equal not unequal"), "\n");
} catch (error) {
	console.log("using two unequal code should fail ", "\n test passed", "\n");
}
