import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const Career = () => {
  const experiences = [
    {
      title: "Senior Defense Analyst",
      company: "Defense Contractor",
      period: "2020 - Present",
      description: "Strategic analysis and mission planning",
    },
    {
      title: "Intelligence Officer",
      company: "Government Agency",
      period: "2016 - 2020",
      description: "Intelligence gathering and threat assessment",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="mb-12">
          <h1 className="mb-4 font-mono text-4xl font-bold text-foreground">CAREER</h1>
          <div className="h-1 w-20 bg-primary" />
        </div>

        <div className="grid gap-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group border-border bg-card p-6 transition-all hover:border-primary hover:shadow-tactical"
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-bold text-foreground">{exp.title}</h3>
                  <p className="mt-1 text-primary">{exp.company}</p>
                  <p className="mt-4 text-muted-foreground">{exp.description}</p>
                </div>
                <span className="font-mono text-sm text-muted-foreground">{exp.period}</span>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Career;
