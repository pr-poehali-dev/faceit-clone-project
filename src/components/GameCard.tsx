import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";
import { Game } from "@/types";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <Card className="gaming-card group cursor-pointer overflow-hidden">
      <div className="relative">
        <img
          src={game.image}
          alt={game.name}
          className="w-full h-48 object-cover rounded-t-lg group-hover:scale-105 transition-transform duration-300"
        />
        <Badge className="absolute top-3 right-3 bg-primary/90">
          {game.category}
        </Badge>
      </div>

      <CardContent className="p-4">
        <h3 className="font-semibold text-lg mb-2">{game.name}</h3>
        <p className="text-muted-foreground text-sm mb-3">{game.description}</p>

        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-1 text-accent">
            <Icon name="Users" size={16} />
            <span className="text-sm font-medium">
              {game.players.toLocaleString()}
            </span>
          </div>

          <div className="flex items-center space-x-1 text-primary">
            <Icon name="Play" size={16} />
            <span className="text-sm font-medium">Играть</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCard;
