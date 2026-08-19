import React from 'react';
import Details from '@theme/Details';
import changelog from '@site/src/data/changelog.json'; 

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

export default function ChangelogDisplay({ mode, category}) {
  // Order by date descending
  const sortedLog = [...changelog].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );

  // Find the latest entry for category
  const latestEntry = sortedLog.find(
    (entry) => entry.pagefiles && entry.pagefiles[category]
  );

  if (!latestEntry) return null;

  return (
    <Details summary={`Last Changes: ${formatDate(latestEntry.date)}`}>
      <ul style={{ paddingLeft: '1.5rem' }}>
        {latestEntry.pagefiles[category].map((change, index) => (
          <li key={index}>{change}</li>
        ))}
      </ul>
     </Details>
  );

  return null;
}