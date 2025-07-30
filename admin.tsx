```typescript name=pages/admin.tsx
import React, { useState } from "react";

type Job = {
  title: string;
  company: string;
  location: string;
  isEIMT: boolean;
  isSponsor: boolean;
  description: string;
};

export default function AdminPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [form, setForm] = useState<Job>({
    title: "",
    company: "",
    location: "",
    isEIMT: false,
    isSponsor: false,
    description: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setJobs([...jobs, form]);
    setForm({
      title: "",
      company: "",
      location: "",
      isEIMT: false,
      isSponsor: false,
      description: "",
    });
  };

  return (
    <main>
      <h1>Admin - Ajouter une offre d’emploi</h1>
      <form onSubmit={handleSubmit} style={{ marginBottom: "2rem" }}>
        <input
          name="title"
          placeholder="Titre du poste"
          value={form.title}
          onChange={handleChange}
          required
        />
        <input
          name="company"
          placeholder="Entreprise"
          value={form.company}
          onChange={handleChange}
          required
        />
        <input
          name="location"
          placeholder="Lieu"
          value={form.location}
          onChange={handleChange}
          required
        />
        <label>
          <input
            name="isEIMT"
            type="checkbox"
            checked={form.isEIMT}
            onChange={handleChange}
          />{" "}
          EIMT
        </label>
        <label>
          <input
            name="isSponsor"
            type="checkbox"
            checked={form.isSponsor}
            onChange={handleChange}
          />{" "}
          Sponsor
        </label>
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        />
        <button type="submit">Ajouter</button>
      </form>
      <section>
        <h2>Offres ajoutées :</h2>
        {jobs.length === 0 && <p>Aucune offre pour l’instant.</p>}
        {jobs.map((job, idx) => (
          <div key={idx} style={{ marginBottom: "1rem", border: "1px solid #eee", padding: "1rem" }}>
            <strong>{job.title}</strong> chez {job.company} ({job.location})<br/>
            {job.isEIMT && <span style={{ color: "#0070f3" }}>EIMT</span>}{" "}
            {job.isSponsor && <span style={{ color: "#e67e22" }}>Sponsor</span>}
            <div>{job.description}</div>
          </div>
        ))}
      </section>
    </main>
  );
}
```