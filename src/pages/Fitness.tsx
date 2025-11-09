import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const Fitness = () => {
  const activities = [
    { name: "Running", frequency: "5x per week", metric: "25 miles/week" },
    { name: "Weight Training", frequency: "4x per week", metric: "Strength focused" },
    { name: "Tactical Training", frequency: "2x per week", metric: "Combat conditioning" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="mb-12">
          <h1 className="mb-4 font-mono text-4xl font-bold text-foreground">FITNESS</h1>
          <div className="h-1 w-20 bg-primary" />
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {activities.map((activity, index) => (
            <Card
              key={index}
              className="group border-border bg-card p-6 transition-all hover:border-primary hover:shadow-tactical"
            >
              <div className="mb-4 h-2 w-2 rounded-full bg-primary" />
              <h3 className="text-xl font-bold text-foreground">{activity.name}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{activity.frequency}</p>
              <p className="mt-4 font-mono text-lg text-primary">{activity.metric}</p>
            </Card>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Fitness;
