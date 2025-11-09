import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

import { useTheme } from "./ThemeProvider";
import { Button } from "./ui/button";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = theme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      aria-label="Toggle theme"
      onClick={toggleTheme}
      className="relative overflow-hidden border-border/60 transition-colors hover:border-primary/80 hover:text-primary"
    >
      <Sun className={`absolute h-4 w-4 transition-all ${mounted && !isDark ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} />
      <Moon className={`absolute h-4 w-4 transition-all ${mounted && isDark ? "scale-100 opacity-100" : "scale-0 opacity-0"}`} />
      {!mounted && <Sun className="h-4 w-4" />}
    </Button>
  );
};

export default ThemeToggle;

