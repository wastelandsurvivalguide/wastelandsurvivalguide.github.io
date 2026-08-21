const fs = require('fs');
const path = require('path');

// File paths
const jsonPath = path.join(__dirname, 'src', 'data', 'changelog.json');
const outputPath = path.join(__dirname, 'docs', 'changelog' , '2026.mdx');

// "DD/MM/YYYY" to Date object
const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split('/');
  return new Date(year, month - 1, day);
}; // Formats the raw string into "Month DD, YYYY"
const formatDate = (dateStr) => {
  const date = parseDate(dateStr);
  return date.toLocaleDateString('en-US', { 
    month: 'long', 
    day: 'numeric', 
    year: 'numeric' 
  });
};

function buildMarkdown() {
  try {
    // Read and parse changelog json
    const rawData = fs.readFileSync(jsonPath, 'utf8');
    const changelog = JSON.parse(rawData);

    // Order by date descending
    const sortedLog = changelog.sort(
      (a, b) => parseDate(b.date) - parseDate(a.date)
    );

    // Markdown content gen
    let mdContent = `---\n`;
    mdContent += `sidebar_label: "2026"\n`;
    mdContent += `---\n\n`;
    mdContent += `# 2026 Changelog\n\n`;
    mdContent += `<hr role="presentation" />\n\n`;

    sortedLog.forEach(entry => {
      // If a title exists, we display it
      if (entry.title) {
        mdContent += `## ${entry.title}\n\n`;
      }

      mdContent += `### ${formatDate(entry.date)}\n\n`;

      // If a description exists, we display it
      if (entry.description) {
        mdContent += `<p><code>${entry.description}</code></p>\n\n`;
      }

      // If there are page files, we display them grouped by category
      if (entry.pagefiles) {
        Object.keys(entry.pagefiles).forEach(catName => {
          mdContent += `#### ${catName.toUpperCase()}\n\n`;
          entry.pagefiles[catName].forEach(change => {
            mdContent += `- ${change}\n`;
          });
          mdContent += `\n`;
        });
      }
    });

    fs.writeFileSync(outputPath, mdContent);
    console.log('Successfully generated changelog');
  } catch (error) {
    console.error('Error generating changelog: ', error);
  }
}

buildMarkdown();