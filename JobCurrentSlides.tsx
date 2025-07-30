```typescript name=components/JobCurrentSlides.tsx
import React from "react";

type Job = {
  title: string;
  company: string;
  location: string;
  isEIMT: boolean;
  isSponsor: boolean;
  description: string;
};

type Props = {
  jobs: Job[];
};

const JobCurrentSlides: React.FC<Props> = ({ jobs }) => {
  return (
    <div className="job-slides">
      {jobs.map((job, idx) => (
        <div key={idx} className="job-card">
          <h2>{job.title}</h2>
          <h3>{job.company} — {job.location}</h3>
          <p>
            {job.isEIMT && <span className="badge">EIMT</span>}
            {job.isSponsor && <span className="badge">Sponsor</span>}
          </p>
          <p>{job.description}</p>
        </div>
      ))}
      <style jsx>{`
        .job-slides {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
        }
        .job-card {
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 2px 6px #eee;
          padding: 1rem;
          min-width: 250px;
          max-width: 340px;
        }
        .badge {
          background: #0070f3;
          color: #fff;
          border-radius: 4px;
          padding: 0.2em 0.6em;
          margin-right: 0.5em;
          font-size: 0.85em;
        }
      `}</style>
    </div>
  );
};

export default JobCurrentSlides;
```