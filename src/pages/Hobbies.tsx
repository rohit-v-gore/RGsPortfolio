import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const Hobbies = () => {
  const hobbies = [
    { name: "Photography", description: "Tactical and landscape photography" },
    { name: "Coding", description: "Building defense-focused applications" },
    { name: "Strategy Games", description: "Chess and tactical simulations" },
    { name: "Reading", description: "Military history and technology" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="mb-12">
          <h1 className="mb-4 font-mono text-4xl font-bold text-foreground">HOBBIES</h1>
          <div className="h-1 w-20 bg-primary" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {hobbies.map((hobby, index) => (
            <Card
              key={index}
              className="group border-border bg-card p-6 transition-all hover:border-primary hover:shadow-tactical"
            >
              <div className="mb-4 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-primary" />
                <h3 className="text-xl font-bold text-foreground">{hobby.name}</h3>
              </div>
              <p className="text-muted-foreground">{hobby.description}</p>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Hobbies;
