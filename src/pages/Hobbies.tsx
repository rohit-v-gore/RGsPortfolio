import Navigation from "@/components/Navigation";
import { Card } from "@/components/ui/card";

const Hobbies = () => {
  const hobbies = [
    { name: "Distance Running", description: "I want to run a sub 3 hour marathon in my life; uphill battle." },
    { name: "Soccer", description: "Really fun to play and good for the body." },
    { name: "Football", description: "The best sport ever created. Love watching, love playing." },
    { name: "Reading", description: "Usually just business and investing books, but they all have the same message at this point. Some of my friends are authors though so I buy and read their books always." },
    { name: "Instagram Reels", description: "The internet is a great place." },
    { name: "Investing", description: "If you are good at trading, good for you. I have never sold stock. I also love venture capital and used to be in Hustle Fund but now that I am working on CarnotX, I need my pennies." },
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
