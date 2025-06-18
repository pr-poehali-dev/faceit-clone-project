import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Icon from "@/components/ui/icon";

const Navbar = () => {
  const isAuthenticated = false; // Replace with actual auth state

  return (
    <nav className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-8">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 gaming-gradient rounded-lg flex items-center justify-center">
                <Icon name="Gamepad2" size={20} className="text-white" />
              </div>
              <span className="font-bold text-xl">GameHub</span>
            </Link>

            <div className="hidden md:flex items-center space-x-6">
              <Link
                to="/tournaments"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Турниры
              </Link>
              <Link
                to="/leaderboards"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Рейтинги
              </Link>
              <Link
                to="/stats"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                Статистика
              </Link>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-3">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>Ю</AvatarFallback>
                </Avatar>
                <span className="text-sm font-medium">Игрок</span>
              </div>
            ) : (
              <Link to="/login">
                <Button className="gaming-button">
                  <Icon name="LogIn" size={16} className="mr-2" />
                  Войти через Steam
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
