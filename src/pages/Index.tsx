import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import Navbar from "@/components/Navbar";
import GameCard from "@/components/GameCard";
import StatsCard from "@/components/StatsCard";
import { Game } from "@/types";

const mockGames: Game[] = [
  {
    id: "1",
    name: "Counter-Strike 2",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400",
    players: 28350,
    category: "FPS",
    description: "Легендарный тактический шутер",
  },
  {
    id: "2",
    name: "Dota 2",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400",
    players: 12430,
    category: "MOBA",
    description: "Стратегическая многопользовательская арена",
  },
  {
    id: "3",
    name: "Valorant",
    image: "https://images.unsplash.com/photo-1552820728-8b83bb6b773f?w=400",
    players: 15720,
    category: "FPS",
    description: "Тактический шутер с уникальными агентами",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 gaming-gradient opacity-10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            GameHub
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Платформа для киберспортивных турниров, рейтингов и статистики.
            Присоединяйся к сообществу про-игроков.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/login">
              <Button size="lg" className="gaming-button text-lg px-8 py-4">
                <Icon name="LogIn" size={20} className="mr-2" />
                Войти через Steam
              </Button>
            </Link>
            <Link to="/tournaments">
              <Button
                variant="outline"
                size="lg"
                className="text-lg px-8 py-4 border-primary/50 hover:bg-primary/10"
              >
                <Icon name="Trophy" size={20} className="mr-2" />
                Смотреть турниры
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Статистика платформы
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <StatsCard
              title="Активных игроков"
              value="47,382"
              change="+12% за неделю"
              icon="Users"
              trend="up"
            />
            <StatsCard
              title="Турниров проводится"
              value="156"
              change="+5 новых"
              icon="Trophy"
              trend="up"
            />
            <StatsCard
              title="Призовых выплачено"
              value="₽2.4M"
              change="+₽340K за месяц"
              icon="DollarSign"
              trend="up"
            />
            <StatsCard
              title="Матчей сыграно"
              value="1,234,567"
              change="+2,847 сегодня"
              icon="Gamepad2"
              trend="up"
            />
          </div>
        </div>
      </section>

      {/* Popular Games */}
      <section className="py-16 px-4 bg-card/30">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">
            Популярные игры
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockGames.map((game) => (
              <GameCard key={game.id} game={game} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              variant="outline"
              size="lg"
              className="border-primary/50 hover:bg-primary/10"
            >
              <Icon name="Plus" size={20} className="mr-2" />
              Посмотреть все игры
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link to="/leaderboards">
              <Card className="gaming-card h-full group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 gaming-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name="BarChart3" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Рейтинги</h3>
                  <p className="text-muted-foreground">
                    Следи за лучшими игроками и командами в реальном времени
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/tournaments">
              <Card className="gaming-card h-full group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 gaming-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name="Trophy" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Турниры</h3>
                  <p className="text-muted-foreground">
                    Участвуй в соревнованиях и выигрывай призы
                  </p>
                </CardContent>
              </Card>
            </Link>

            <Link to="/stats">
              <Card className="gaming-card h-full group cursor-pointer">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 gaming-gradient rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Icon name="Activity" size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">Статистика</h3>
                  <p className="text-muted-foreground">
                    Анализируй свою игру и улучшай результаты
                  </p>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
