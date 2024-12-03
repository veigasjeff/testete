// const fs = require('fs');
// const path = require('path');

// // Path to the JSON file
// const jsonFilePath = path.join(__dirname, 'public', 'tech.json');

// // Function to find duplicate titles
// const findDuplicateTitles = (jsonFilePath) => {
//   try {
//     // Read and parse the JSON file
//     const data = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

//     // Create a map to count occurrences of each title
//     const titleMap = {};
//     data.forEach((item, index) => {
//       const title = item.title || 'Untitled';
//       if (!titleMap[title]) {
//         titleMap[title] = { count: 0, indices: [] };
//       }
//       titleMap[title].count += 1;
//       titleMap[title].indices.push(index);
//     });

//     // Find duplicates (titles with count > 1)
//     const duplicates = Object.entries(titleMap)
//       .filter(([_, details]) => details.count > 1)
//       .map(([title, details]) => ({
//         title,
//         count: details.count,
//         indices: details.indices,
//       }));

//     // Log duplicates
//     if (duplicates.length > 0) {
//       console.log('Duplicate titles found:');
//       duplicates.forEach((duplicate) => {
//         console.log(
//           `Title: "${duplicate.title}" | Count: ${duplicate.count} | Indices: ${duplicate.indices.join(
//             ', '
//           )}`
//         );
//       });
//     } else {
//       console.log('No duplicate titles found.');
//     }
//   } catch (error) {
//     console.error(`Error reading or processing the JSON file: ${error.message}`);
//   }
// };

// // Run the function
// findDuplicateTitles(jsonFilePath);


const fs = require('fs');
const path = require('path');

// Path to the input JSON file
const jsonFilePath = path.join(__dirname, 'public', 'entertainment.json');
// Path to the output JSON file
const outputFilePath = path.join(__dirname, 'public', 'duplicates.json');

// Function to find duplicate titles
const findDuplicateTitles = (jsonFilePath, outputFilePath) => {
  try {
    // Read and parse the JSON file
    const data = JSON.parse(fs.readFileSync(jsonFilePath, 'utf-8'));

    // Create a map to count occurrences of each title
    const titleMap = {};
    data.forEach((item, index) => {
      const title = item.title || 'Untitled';
      if (!titleMap[title]) {
        titleMap[title] = { count: 0, indices: [] };
      }
      titleMap[title].count += 1;
      titleMap[title].indices.push(index);
    });

    // Find duplicates (titles with count > 1)
    const duplicates = Object.entries(titleMap)
      .filter(([_, details]) => details.count > 1)
      .map(([title, details]) => ({
        title,
        count: details.count,
        indices: details.indices,
      }));

    // Write the duplicates to an output file in JSON format
    if (duplicates.length > 0) {
      fs.writeFileSync(outputFilePath, JSON.stringify(duplicates, null, 2), 'utf-8');
      console.log('Duplicate titles written to duplicates.json');
    } else {
      console.log('No duplicate titles found.');
    }
  } catch (error) {
    console.error(`Error reading or processing the JSON file: ${error.message}`);
  }
};

// Run the function
findDuplicateTitles(jsonFilePath, outputFilePath);






