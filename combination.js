function substrings(str) {
  const result = [];

  // Outer loop: iterate over all possible start indices
  for (let start = 0; start < str.length; start++) {
    // Inner loop: iterate over all possible end indices
    for (let end = start + 1; end <= str.length; end++) {
      // Extract the substring from start to end index and push to result array
      result.push(str.substring(start, end));
    }
  }

  // Log the generated substrings, joined by newline, to the console
  console.log(result.join("\n"));
}

// Call the substrings function with the input string "dog"
substrings("dog");
