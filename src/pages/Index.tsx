import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-md z-50 border-b border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <img
                src="/img/e6ed9974-7051-4b6d-a6d0-31479cb41f64.jpg"
                alt="КРМП Logo"
                className="h-8 w-8 rounded"
              />
              <span className="text-xl font-bold text-white">КРМП ПРОЕКТ</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                Главная
              </a>
              <a
                href="#news"
                className="text-white hover:text-blue-300 transition-colors"
              >
                Новости
              </a>
              <a
                href="#donate"
                className="text-white hover:text-blue-300 transition-colors"
              >
                Донат
              </a>
              <a
                href="#rating"
                className="text-white hover:text-blue-300 transition-colors"
              >
                Рейтинг
              </a>
              <a
                href="#support"
                className="text-white hover:text-blue-300 transition-colors"
              >
                Поддержка
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
              >
                <Icon name="LogIn" size={16} className="mr-2" />
                Вход
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <Icon name="UserPlus" size={16} className="mr-2" />
                Регистрация
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              КРМП <span className="text-blue-400">ПРОЕКТ</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Лучший игровой проект с уникальными возможностями, развитой
              экономикой и активным сообществом
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
              >
                <Icon name="Play" size={20} className="mr-2" />
                Начать играть
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-blue-500 text-blue-400 hover:bg-blue-500/10 text-lg px-8 py-3"
              >
                <Icon name="Info" size={20} className="mr-2" />О проекте
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card className="bg-black/40 border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-500/20 rounded-full w-fit">
                  <Icon name="Users" size={24} className="text-blue-400" />
                </div>
                <CardTitle className="text-white">5000+</CardTitle>
                <CardDescription className="text-gray-300">
                  Активных игроков
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-black/40 border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-500/20 rounded-full w-fit">
                  <Icon name="Trophy" size={24} className="text-blue-400" />
                </div>
                <CardTitle className="text-white">24/7</CardTitle>
                <CardDescription className="text-gray-300">
                  Стабильная работа
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="bg-black/40 border-blue-500/30 hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-blue-500/20 rounded-full w-fit">
                  <Icon name="Zap" size={24} className="text-blue-400" />
                </div>
                <CardTitle className="text-white">100+</CardTitle>
                <CardDescription className="text-gray-300">
                  Уникальных систем
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section id="news" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            <Icon
              name="Newspaper"
              size={32}
              className="inline mr-3 text-blue-400"
            />
            Последние новости
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-black/40 border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-blue-500/20 text-blue-400">
                    Обновление
                  </Badge>
                  <span className="text-sm text-gray-400">2 часа назад</span>
                </div>
                <CardTitle className="text-white">
                  Новый сезон уже здесь!
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Запускаем новый сезон с уникальными наградами и возможностями
                  для всех игроков.
                </p>
                <Button
                  variant="outline"
                  className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
                >
                  Подробнее
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-green-500/20 text-green-400">
                    Событие
                  </Badge>
                  <span className="text-sm text-gray-400">1 день назад</span>
                </div>
                <CardTitle className="text-white">
                  Турнир выходного дня
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Принимай участие в турнире и получи эксклюзивные призы!
                </p>
                <Button
                  variant="outline"
                  className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
                >
                  Участвовать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-blue-500/30 hover:border-blue-500/50 transition-all duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <Badge className="bg-purple-500/20 text-purple-400">
                    Система
                  </Badge>
                  <span className="text-sm text-gray-400">3 дня назад</span>
                </div>
                <CardTitle className="text-white">
                  Обновление экономики
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4">
                  Балансировка игровой экономики и новые возможности заработка.
                </p>
                <Button
                  variant="outline"
                  className="border-blue-500 text-blue-400 hover:bg-blue-500/10"
                >
                  Изучить
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donate Section */}
      <section id="donate" className="py-16 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            <Icon name="Gift" size={32} className="inline mr-3 text-blue-400" />
            Донат система
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 border-gray-600/50">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl">СТАНДАРТ</CardTitle>
                <CardDescription className="text-gray-300">
                  Базовые возможности
                </CardDescription>
                <div className="text-3xl font-bold text-white mt-4">299₽</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-400 mr-2"
                  />
                  Доступ к VIP зонам
                </div>
                <div className="flex items-center text-gray-300">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-400 mr-2"
                  />
                  Эксклюзивные предметы
                </div>
                <div className="flex items-center text-gray-300">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-400 mr-2"
                  />
                  Приоритетная поддержка
                </div>
                <Button className="w-full bg-gray-600 hover:bg-gray-700 mt-6">
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-blue-800/50 to-blue-900/50 border-blue-500/50 scale-105">
              <CardHeader className="text-center">
                <Badge className="bg-blue-500 text-white mb-2">Популярно</Badge>
                <CardTitle className="text-white text-2xl">ПРЕМИУМ</CardTitle>
                <CardDescription className="text-gray-300">
                  Расширенные возможности
                </CardDescription>
                <div className="text-3xl font-bold text-white mt-4">599₽</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-400 mr-2"
                  />
                  Все возможности СТАНДАРТ
                </div>
                <div className="flex items-center text-gray-300">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-400 mr-2"
                  />
                  Удвоенный опыт
                </div>
                <div className="flex items-center text-gray-300">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-400 mr-2"
                  />
                  Особые эффекты
                </div>
                <div className="flex items-center text-gray-300">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-400 mr-2"
                  />
                  Кастомные команды
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 mt-6">
                  Выбрать
                </Button>
              </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-800/50 to-purple-900/50 border-purple-500/50">
              <CardHeader className="text-center">
                <CardTitle className="text-white text-2xl">ЭЛИТНЫЙ</CardTitle>
                <CardDescription className="text-gray-300">
                  Максимальные привилегии
                </CardDescription>
                <div className="text-3xl font-bold text-white mt-4">999₽</div>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center text-gray-300">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-400 mr-2"
                  />
                  Все возможности ПРЕМИУМ
                </div>
                <div className="flex items-center text-gray-300">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-400 mr-2"
                  />
                  Уникальные титулы
                </div>
                <div className="flex items-center text-gray-300">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-400 mr-2"
                  />
                  Личный консультант
                </div>
                <div className="flex items-center text-gray-300">
                  <Icon
                    name="Check"
                    size={16}
                    className="text-green-400 mr-2"
                  />
                  Эксклюзивные ивенты
                </div>
                <Button className="w-full bg-purple-600 hover:bg-purple-700 mt-6">
                  Выбрать
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Rating Section */}
      <section id="rating" className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            <Icon
              name="Crown"
              size={32}
              className="inline mr-3 text-blue-400"
            />
            Рейтинг игроков
          </h2>

          <Tabs defaultValue="top" className="w-full">
            <TabsList className="grid w-full grid-cols-3 bg-black/40 border-blue-500/30">
              <TabsTrigger
                value="top"
                className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400"
              >
                ТОП игроки
              </TabsTrigger>
              <TabsTrigger
                value="rich"
                className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400"
              >
                Богачи
              </TabsTrigger>
              <TabsTrigger
                value="active"
                className="data-[state=active]:bg-blue-500/20 data-[state=active]:text-blue-400"
              >
                Активные
              </TabsTrigger>
            </TabsList>

            <TabsContent value="top" className="mt-6">
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((position) => (
                  <Card
                    key={position}
                    className="bg-black/40 border-blue-500/30"
                  >
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-blue-500/20 rounded-full">
                          <span className="text-blue-400 font-bold">
                            #{position}
                          </span>
                        </div>
                        <div>
                          <div className="text-white font-semibold">
                            Игрок_{position}
                          </div>
                          <div className="text-gray-400 text-sm">
                            Уровень {50 - position * 3}
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-semibold">
                          {(1000 - position * 50).toLocaleString()} очков
                        </div>
                        <Progress
                          value={90 - position * 10}
                          className="w-24 mt-1"
                        />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="rich" className="mt-6">
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((position) => (
                  <Card
                    key={position}
                    className="bg-black/40 border-blue-500/30"
                  >
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-yellow-500/20 rounded-full">
                          <Icon
                            name="DollarSign"
                            size={16}
                            className="text-yellow-400"
                          />
                        </div>
                        <div>
                          <div className="text-white font-semibold">
                            Богач_{position}
                          </div>
                          <div className="text-gray-400 text-sm">
                            VIP статус
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-semibold">
                          {(500000 - position * 50000).toLocaleString()}₽
                        </div>
                        <div className="text-yellow-400 text-sm">
                          Игровая валюта
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="active" className="mt-6">
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((position) => (
                  <Card
                    key={position}
                    className="bg-black/40 border-blue-500/30"
                  >
                    <CardContent className="flex items-center justify-between p-4">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center justify-center w-10 h-10 bg-green-500/20 rounded-full">
                          <Icon
                            name="Activity"
                            size={16}
                            className="text-green-400"
                          />
                        </div>
                        <div>
                          <div className="text-white font-semibold">
                            Активист_{position}
                          </div>
                          <div className="text-gray-400 text-sm">
                            Онлайн сейчас
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-white font-semibold">
                          {200 - position * 20}ч
                        </div>
                        <div className="text-green-400 text-sm">
                          Игровое время
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Support Section */}
      <section id="support" className="py-16 px-4 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-12">
            <Icon
              name="MessageCircle"
              size={32}
              className="inline mr-3 text-blue-400"
            />
            Техподдержка
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-black/40 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon
                    name="HelpCircle"
                    size={20}
                    className="mr-2 text-blue-400"
                  />
                  Часто задаваемые вопросы
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">
                    Как начать играть?
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Зарегистрируйтесь на сайте, скачайте лаунчер и следуйте
                    инструкциям.
                  </p>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">
                    Как получить VIP статус?
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Выберите подходящий тарифный план в разделе "Донат".
                  </p>
                </div>
                <div className="p-4 bg-gray-800/50 rounded-lg">
                  <h4 className="text-white font-semibold mb-2">
                    Проблемы с подключением?
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Проверьте настройки брандмауэра и создайте тикет поддержки.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-black/40 border-blue-500/30">
              <CardHeader>
                <CardTitle className="text-white flex items-center">
                  <Icon
                    name="Ticket"
                    size={20}
                    className="mr-2 text-blue-400"
                  />
                  Создать тикет
                </CardTitle>
                <CardDescription className="text-gray-300">
                  Опишите вашу проблему, и мы поможем в кратчайшие сроки
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Card className="bg-gray-800/50 border-gray-600/50 hover:border-blue-500/50 transition-colors cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <Icon
                        name="Bug"
                        size={24}
                        className="text-red-400 mx-auto mb-2"
                      />
                      <div className="text-white font-semibold">Баг репорт</div>
                      <div className="text-gray-400 text-sm">
                        Сообщить об ошибке
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/50 border-gray-600/50 hover:border-blue-500/50 transition-colors cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <Icon
                        name="CreditCard"
                        size={24}
                        className="text-green-400 mx-auto mb-2"
                      />
                      <div className="text-white font-semibold">
                        Вопрос о донате
                      </div>
                      <div className="text-gray-400 text-sm">
                        Помощь с платежами
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/50 border-gray-600/50 hover:border-blue-500/50 transition-colors cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <Icon
                        name="Shield"
                        size={24}
                        className="text-yellow-400 mx-auto mb-2"
                      />
                      <div className="text-white font-semibold">Жалоба</div>
                      <div className="text-gray-400 text-sm">
                        Нарушение правил
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-gray-800/50 border-gray-600/50 hover:border-blue-500/50 transition-colors cursor-pointer">
                    <CardContent className="p-4 text-center">
                      <Icon
                        name="Settings"
                        size={24}
                        className="text-blue-400 mx-auto mb-2"
                      />
                      <div className="text-white font-semibold">Другое</div>
                      <div className="text-gray-400 text-sm">Общие вопросы</div>
                    </CardContent>
                  </Card>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Создать новый тикет
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/60 border-t border-blue-500/20 py-8 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <img
                src="/img/e6ed9974-7051-4b6d-a6d0-31479cb41f64.jpg"
                alt="КРМП Logo"
                className="h-8 w-8 rounded"
              />
              <span className="text-white font-semibold">КРМП ПРОЕКТ</span>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Icon name="MessageCircle" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Icon name="Users" size={20} />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Icon name="Youtube" size={20} />
              </a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-700 text-center text-gray-400 text-sm">
            © 2024 КРМП ПРОЕКТ. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
