import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const Startups = () => {
  const startups = [
    {
      name: "Company Name",
      description: "Description of the startup and what it does.",
      role: "Your Role",
      period: "Period",
      website: "https://example.com",
    },
    {
      name: "Company Name",
      description: "Description of the startup and what it does.",
      role: "Your Role",
      period: "Period",
      website: "https://example.com",
    },
    {
      name: "Company Name",
      description: "Description of the startup and what it does.",
      role: "Your Role",
      period: "Period",
      website: "https://example.com",
    },
    {
      name: "Company Name",
      description: "Description of the startup and what it does.",
      role: "Your Role",
      period: "Period",
      website: "https://example.com",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="mb-12">
          <h1 className="mb-4 font-mono text-4xl font-bold text-foreground">STARTUPS</h1>
          <div className="h-1 w-20 bg-primary" />
        </div>

        <Card className="mb-8 border-border bg-card/80 p-6 backdrop-blur">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Add your description here explaining what this tab is for.
          </p>
        </Card>

        <div className="grid gap-6 md:grid-cols-2">
          {startups.map((startup, index) => (
            <Card
              key={index}
              className="group border-border bg-card p-6 transition-all hover:border-primary hover:shadow-tactical"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-foreground">{startup.name}</h3>
                  <p className="mt-1 text-primary">{startup.role}</p>
                  <p className="mt-4 text-muted-foreground">{startup.description}</p>
                  {startup.website && (
                    <a
                      href={startup.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-block text-sm text-primary hover:underline"
                    >
                      Visit Website →
                    </a>
                  )}
                </div>
                <span className="font-mono text-sm text-muted-foreground whitespace-nowrap ml-4">
                  {startup.period}
                </span>
              </div>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Startups;

