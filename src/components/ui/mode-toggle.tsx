import { Moon, Sun } from 'lucide-react';
import Switch from "react-switch";
import { useTheme } from "@/context/ThemeContext";

export function ModeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex items-center space-x-2">
              {theme === 'light' ? (
                <Moon className="h-[18px] w-[18px] text-muted-foreground" />
              ) : (
                <Sun className="h-[18px] w-[18px] text-muted-foreground" />
              )}
              <Switch
                id="theme-switcher"
                checked={theme === 'dark'}
                onChange={toggleTheme}
                aria-label="Toggle theme"
              />
            </div>
  );
}