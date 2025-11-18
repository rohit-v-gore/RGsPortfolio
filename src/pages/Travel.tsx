import Navigation from "@/components/Navigation";

type Location = {
  name: string;
  description?: string;
};

const Travel = () => {
  const countriesVisited: Location[] = [
    { name: "Ireland", description: "<example>" },
    { name: "Netherlands", description: "<example>" },
    { name: "Jamaica", description: "<example>" },
    { name: "Portugal", description: "<example>" },
    { name: "Egypt", description: "<example>" },
    { name: "Taiwan", description: "<example>" },
    { name: "Switzerland", description: "<example>" },
    { name: "Iceland", description: "<example>" },
    { name: "France", description: "<example>" },
    { name: "Belgium", description: "<example>" },
    { name: "Italy", description: "<example>" },
    { name: "Indonesia", description: "<example>" },
    { name: "Japan", description: "<example>" },
    { name: "Peru", description: "<example>" },
    { name: "Costa Rica", description: "<example>" },
    { name: "Panama", description: "<example>" },
    { name: "Aruba", description: "<example>" },
    { name: "Mexico", description: "<example>" },
    { name: "Canada", description: "<example>" },
    { name: "India", description: "<example>" },
  ];

  const usCitiesVisited: Location[] = [
    { name: "San Diego, CA", description: "<example>" },
    { name: "Panama City Beach, FL", description: "<example>" },
    { name: "Washington, DC", description: "<example>" },
    { name: "Los Angeles, CA", description: "<example>" },
    { name: "New York, NY", description: "<example>" },
    { name: "Honolulu, HI", description: "<example>" },
    { name: "Juneau, AK", description: "<example>" },
    { name: "Arlington, VA", description: "<example>" },
    { name: "Boston, MA", description: "<example>" },
    { name: "Baltimore, MD", description: "<example>" },
    { name: "Las Vegas, NV", description: "<example>" },
    { name: "New Orleans, LA", description: "<example>" },
    { name: "Seattle, WA", description: "<example>" },
    { name: "San Fransisco, CA", description: "<example>" },
    { name: "Chicago, IL", description: "<example>" },
    { name: "Wichita, KS", description: "<example>" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="container mx-auto px-6 pt-24 pb-12">
        <div className="mb-8">
          <h1 className="mb-4 font-mono text-4xl font-bold text-foreground">TRAVEL</h1>
          <div className="h-1 w-20 bg-primary" />
          <p className="mt-4 max-w-3xl text-muted-foreground">
            A log of all of the places I have traveled. I would love to populate this more each year. Let's see if my career allows it.
          </p>
        </div>

        <section className="grid gap-10 lg:grid-cols-2">
          <div className="flex flex-col gap-6 rounded-3xl border border-border bg-card/80 p-8 backdrop-blur">
            <div className="space-y-4">
              <h3 className="font-mono text-lg font-semibold text-foreground">
                Visited Countries ({countriesVisited.length})
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                My parents love to travel. They took us many places growing up. I have continued this hobby.
              </p>
              <div className="space-y-3">
                {countriesVisited.map((country) => (
                  <div
                    key={country.name}
                    className="rounded-lg border border-primary/20 bg-primary/5 px-4 py-3 shadow-inner"
                  >
                    <h4 className="font-mono text-sm font-semibold text-foreground">{country.name}</h4>
                    {country.description && (
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {country.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-6 rounded-3xl border border-border bg-card/80 p-8 backdrop-blur">
            <div className="space-y-4">
              <h3 className="font-mono text-lg font-semibold text-foreground">
                Visited U.S. Cities ({usCitiesVisited.length})
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                My dad has been to like 47 US states. I feel like I need to get to 50 and visit more cities before him.
              </p>
              <div className="space-y-3">
                {usCitiesVisited.map((city) => (
                  <div
                    key={city.name}
                    className="rounded-lg border border-border bg-background px-4 py-3 shadow-sm"
                  >
                    <h4 className="font-mono text-sm font-semibold text-foreground">{city.name}</h4>
                    {city.description && (
                      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                        {city.description}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Travel;
