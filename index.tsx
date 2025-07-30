```typescript name=pages/index.tsx
import React from "react";
import JobCurrentSlides from "../components/JobCurrentSlides";

const mockJobs = [
  {
    title: "Développeur Web Full Stack",
    company: "TechCan",
    location: "Montréal, QC",
    isEIMT: true,
    isSponsor: false,
    description: "Rejoins une équipe dynamique, projet SaaS, télétravail possible.",
  },
  {
    title: "Infirmier(ère) diplômé(e)",
    company: "Clinique SantéPlus",
    location: "Toronto, ON",
    isEIMT: false,
    isSponsor: true,
    description: "Poste en centre hospitalier moderne, aide à l'installation.",
  },
  {
    title: "Cuisinier(ère)",
    company: "Bistro Québec",
    location: "Québec, QC",
    isEIMT: true,
    isSponsor: true,
    description: "Travailler dans un environnement convivial, horaires flexibles.",
  },
];

export default function Home() {
  return (
    <main>
      <h1>CanadaJobExpress</h1>
      <p>
        Découvrez les dernières offres d’emploi au Canada avec EIMT et/ou Sponsorship.
      </p>
      <JobCurrentSlides jobs={mockJobs} />
      <footer style={{ marginTop: "2rem", color: "#888" }}>
        &copy; {new Date().getFullYear()} CanadaJobExpress
      </footer>
    </main>
  );
}
```