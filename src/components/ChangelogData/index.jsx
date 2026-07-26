import React from 'react';
import Details from '@theme/Details';
import changelog from '@site/src/data/changelog.json'; 

// "DD/MM/YYYY" to Date object
const parseDate = (dateStr) => {
  const [day, month, year] = dateStr.split('/');
  return new Date(year, month - 1, day);
};

export default function ChangelogDisplay({ mode, category, year }) {

  // Order by date descending
  const sortedLog = [...changelog].sort(
    (a, b) => parseDate(b.date) - parseDate(a.date)
  );

  // Category mode
  if (mode === 'category') {
    // Find the latest entry for category
    const latestEntry = sortedLog.find(
      (entry) => entry.pagefiles && entry.pagefiles[category]
    );

    if (!latestEntry) return null;

    return (
      <Details summary={`Last Changes: ${latestEntry.date}`}>
        <ul style={{ paddingLeft: '1.5rem' }}>
          {latestEntry.pagefiles[category].map((change, index) => (
            <li key={index}>{change}</li>
          ))}
        </ul>
      </Details>
    );
  }

  // Annual mode
  if (mode === 'year') {
    // Filter entries by the specified year
    const yearlyEntries = sortedLog.filter(
      (entry) => parseDate(entry.date).getFullYear().toString() === year.toString()
    );

    if (yearlyEntries.length === 0) {
      return <p>Changelog for {year} not found.</p>;
    }

    return (
      <>
        {yearlyEntries.map((entry, index) => (
          <Details key={index} summary={entry.date}>
            
            {/* If a description exists, we display it */}
            {entry.description && <p><em>{entry.description}</em></p>}
            
            {/* If there are page files, we display them grouped by category */}
            {entry.pagefiles && Object.keys(entry.pagefiles).map((catName) => (
              <div key={catName} style={{ marginBottom: '1rem' }}>
                <strong>{catName.toUpperCase()}</strong>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  {entry.pagefiles[catName].map((change, idx) => (
                    <li key={idx}>{change}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Details>
        ))}
      </>
    );
  }

  return null;
}