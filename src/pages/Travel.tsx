import Navigation from "@/components/Navigation";
import TacticalMap from "@/components/TacticalMap";

const Travel = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="mb-4 font-mono text-4xl font-bold text-foreground">TRAVEL</h1>
          <div className="h-1 w-20 bg-primary" />
          <p className="mt-4 text-muted-foreground">
            Tracking missions across states and countries
          </p>
        </div>

        <div className="h-[600px] w-full">
          <TacticalMap />
        </div>
      </main>
    </div>
  );
};

export default Travel;
