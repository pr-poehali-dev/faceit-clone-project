import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { LucideIcon } from "lucide-react";

interface StatsCardProps {
  title: string;
  value: string;
  change?: string;
  icon: string;
  trend?: "up" | "down" | "neutral";
}

const StatsCard = ({
  title,
  value,
  change,
  icon,
  trend = "neutral",
}: StatsCardProps) => {
  const getTrendColor = () => {
    switch (trend) {
      case "up":
        return "text-green-500";
      case "down":
        return "text-red-500";
      default:
        return "text-muted-foreground";
    }
  };

  const getTrendIcon = () => {
    switch (trend) {
      case "up":
        return "TrendingUp";
      case "down":
        return "TrendingDown";
      default:
        return "Minus";
    }
  };

  return (
    <Card className="gaming-card">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
        <div className="w-8 h-8 gaming-gradient rounded-lg flex items-center justify-center">
          <Icon name={icon} size={16} className="text-white" />
        </div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
        {change && (
          <div className={`flex items-center text-xs ${getTrendColor()}`}>
            <Icon name={getTrendIcon()} size={12} className="mr-1" />
            {change}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatsCard;
