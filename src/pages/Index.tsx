import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

interface Video {
  id: string;
  title: string;
  channel: string;
  views: string;
  uploadTime: string;
  duration: string;
  thumbnail: string;
  likes: number;
  dislikes: number;
  channelAvatar: string;
}

const Index = () => {
  const [currentSection, setCurrentSection] = useState('home');
  const [videoLikes, setVideoLikes] = useState<{[key: string]: {likes: number, dislikes: number, userAction: 'like' | 'dislike' | null}}>({});

  const videos: Video[] = [
    {
      id: '1',
      title: 'Как создать приложение на React за 10 минут',
      channel: 'CodeMaster',
      views: '125K',
      uploadTime: '2 дня назад',
      duration: '10:24',
      thumbnail: '/placeholder.svg',
      likes: 2500,
      dislikes: 45,
      channelAvatar: '/placeholder.svg'
    },
    {
      id: '2',
      title: 'TypeScript для начинающих - полный курс',
      channel: 'WebDev Pro',
      views: '89K',
      uploadTime: '1 неделю назад',
      duration: '45:12',
      thumbnail: '/placeholder.svg',
      likes: 3200,
      dislikes: 120,
      channelAvatar: '/placeholder.svg'
    },
    {
      id: '3',
      title: 'Современный CSS Grid Layout',
      channel: 'DesignCode',
      views: '67K',
      uploadTime: '3 дня назад',
      duration: '15:33',
      thumbnail: '/placeholder.svg',
      likes: 1800,
      dislikes: 25,
      channelAvatar: '/placeholder.svg'
    },
    {
      id: '4',
      title: 'Node.js и Express - создание API',
      channel: 'BackendGuru',
      views: '156K',
      uploadTime: '5 дней назад',
      duration: '32:45',
      thumbnail: '/placeholder.svg',
      likes: 4500,
      dislikes: 89,
      channelAvatar: '/placeholder.svg'
    },
    {
      id: '5',
      title: 'Docker контейнеры для веб-разработки',
      channel: 'DevOps Channel',
      views: '234K',
      uploadTime: '1 неделю назад',
      duration: '28:17',
      thumbnail: '/placeholder.svg',
      likes: 6700,
      dislikes: 156,
      channelAvatar: '/placeholder.svg'
    },
    {
      id: '6',
      title: 'MongoDB с Mongoose - полное руководство',
      channel: 'Database Pro',
      views: '92K',
      uploadTime: '4 дня назад',
      duration: '41:02',
      thumbnail: '/placeholder.svg',
      likes: 2800,
      dislikes: 67,
      channelAvatar: '/placeholder.svg'
    },
    {
      id: '7',
      title: 'Git и GitHub для команды разработчиков',
      channel: 'TeamWork Dev',
      views: '178K',
      uploadTime: '6 дней назад',
      duration: '25:48',
      thumbnail: '/placeholder.svg',
      likes: 5200,
      dislikes: 98,
      channelAvatar: '/placeholder.svg'
    },
    {
      id: '8',
      title: 'JWT авторизация в веб-приложениях',
      channel: 'Security First',
      views: '143K',
      uploadTime: '2 недели назад',
      duration: '35:20',
      thumbnail: '/placeholder.svg',
      likes: 4100,
      dislikes: 123,
      channelAvatar: '/placeholder.svg'
    },
    {
      id: '9',
      title: 'Webpack 5 - настройка с нуля',
      channel: 'Build Tools',
      views: '76K',
      uploadTime: '1 неделю назад',
      duration: '52:15',
      thumbnail: '/placeholder.svg',
      likes: 2200,
      dislikes: 87,
      channelAvatar: '/placeholder.svg'
    },
    {
      id: '10',
      title: 'Performance оптимизация React приложений',
      channel: 'React Masters',
      views: '198K',
      uploadTime: '3 недели назад',
      duration: '38:42',
      thumbnail: '/placeholder.svg',
      likes: 5800,
      dislikes: 145,
      channelAvatar: '/placeholder.svg'
    }
  ];

  const handleLike = (videoId: string, currentLikes: number, currentDislikes: number) => {
    setVideoLikes(prev => {
      const current = prev[videoId] || { likes: currentLikes, dislikes: currentDislikes, userAction: null };
      
      if (current.userAction === 'like') {
        return {
          ...prev,
          [videoId]: { ...current, likes: current.likes - 1, userAction: null }
        };
      } else if (current.userAction === 'dislike') {
        return {
          ...prev,
          [videoId]: { ...current, likes: current.likes + 1, dislikes: current.dislikes - 1, userAction: 'like' }
        };
      } else {
        return {
          ...prev,
          [videoId]: { ...current, likes: current.likes + 1, userAction: 'like' }
        };
      }
    });
  };

  const handleDislike = (videoId: string, currentLikes: number, currentDislikes: number) => {
    setVideoLikes(prev => {
      const current = prev[videoId] || { likes: currentLikes, dislikes: currentDislikes, userAction: null };
      
      if (current.userAction === 'dislike') {
        return {
          ...prev,
          [videoId]: { ...current, dislikes: current.dislikes - 1, userAction: null }
        };
      } else if (current.userAction === 'like') {
        return {
          ...prev,
          [videoId]: { ...current, likes: current.likes - 1, dislikes: current.dislikes + 1, userAction: 'dislike' }
        };
      } else {
        return {
          ...prev,
          [videoId]: { ...current, dislikes: current.dislikes + 1, userAction: 'dislike' }
        };
      }
    });
  };

  const getVideoStats = (video: Video) => {
    const stats = videoLikes[video.id];
    return stats || { likes: video.likes, dislikes: video.dislikes, userAction: null };
  };

  const sidebarItems = [
    { id: 'home', label: 'Главная', icon: 'Home' },
    { id: 'subscriptions', label: 'Подписки', icon: 'Users' },
    { id: 'saved', label: 'Сохраненные', icon: 'Bookmark' },
    { id: 'history', label: 'История', icon: 'History' },
    { id: 'playlists', label: 'Плейлисты', icon: 'List' },
  ];

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 bg-[#0f0f0f] border-b border-[#272727] z-50 px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <Icon name="Play" className="w-8 h-8 text-[#ff0000]" />
              <span className="text-xl font-bold">VideoTube</span>
            </div>
            <div className="flex-1 max-w-2xl">
              <div className="flex">
                <input
                  type="text"
                  placeholder="Поиск"
                  className="flex-1 bg-[#121212] border border-[#272727] rounded-l-full px-4 py-2 focus:outline-none focus:border-[#1f69ff]"
                />
                <Button className="bg-[#272727] hover:bg-[#3f3f3f] border border-[#272727] rounded-r-full px-6">
                  <Icon name="Search" className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Icon name="Bell" className="w-6 h-6" />
            </Button>
            <Avatar>
              <AvatarFallback>U</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </header>

      <div className="flex pt-16">
        {/* Sidebar */}
        <aside className="fixed left-0 top-16 h-[calc(100vh-4rem)] w-64 bg-[#0f0f0f] border-r border-[#272727] overflow-y-auto">
          <nav className="p-4">
            <ul className="space-y-2">
              {sidebarItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => setCurrentSection(item.id)}
                    className={`w-full flex items-center space-x-3 px-4 py-2 rounded-lg transition-colors ${
                      currentSection === item.id
                        ? 'bg-[#272727] text-white'
                        : 'text-[#aaa] hover:bg-[#272727] hover:text-white'
                    }`}
                  >
                    <Icon name={item.icon as any} className="w-5 h-5" />
                    <span>{item.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 p-6">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mb-2">
              {currentSection === 'home' && 'Рекомендации'}
              {currentSection === 'subscriptions' && 'Подписки'}
              {currentSection === 'saved' && 'Сохраненные видео'}
              {currentSection === 'history' && 'История просмотров'}
              {currentSection === 'playlists' && 'Ваши плейлисты'}
            </h1>
          </div>

          {/* Video Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videos.map((video) => {
              const stats = getVideoStats(video);
              return (
                <Card key={video.id} className="bg-[#1f1f1f] border-[#272727] overflow-hidden group cursor-pointer hover:bg-[#272727] transition-all duration-200">
                  <div className="relative">
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full aspect-video object-cover"
                    />
                    <Badge className="absolute bottom-2 right-2 bg-black/80 text-white text-xs">
                      {video.duration}
                    </Badge>
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-200 flex items-center justify-center">
                      <Icon name="Play" className="w-12 h-12 text-white opacity-0 group-hover:opacity-80 transition-opacity duration-200" />
                    </div>
                  </div>
                  
                  <CardContent className="p-4">
                    <div className="flex space-x-3">
                      <Avatar className="w-10 h-10 flex-shrink-0">
                        <AvatarImage src={video.channelAvatar} />
                        <AvatarFallback>{video.channel[0]}</AvatarFallback>
                      </Avatar>
                      
                      <div className="flex-1 min-w-0">
                        <h3 className="font-medium text-white line-clamp-2 group-hover:text-[#3ea6ff] transition-colors">
                          {video.title}
                        </h3>
                        <p className="text-sm text-[#aaa] mt-1">{video.channel}</p>
                        <p className="text-sm text-[#aaa]">
                          {video.views} просмотров • {video.uploadTime}
                        </p>
                        
                        {/* Like/Dislike Buttons */}
                        <div className="flex items-center space-x-4 mt-3">
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleLike(video.id, video.likes, video.dislikes);
                            }}
                            className={`flex items-center space-x-1 text-sm transition-colors ${
                              stats.userAction === 'like'
                                ? 'text-[#3ea6ff]'
                                : 'text-[#aaa] hover:text-white'
                            }`}
                          >
                            <Icon name="ThumbsUp" className="w-4 h-4" />
                            <span>{stats.likes.toLocaleString()}</span>
                          </button>
                          
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDislike(video.id, video.likes, video.dislikes);
                            }}
                            className={`flex items-center space-x-1 text-sm transition-colors ${
                              stats.userAction === 'dislike'
                                ? 'text-[#3ea6ff]'
                                : 'text-[#aaa] hover:text-white'
                            }`}
                          >
                            <Icon name="ThumbsDown" className="w-4 h-4" />
                            <span>{stats.dislikes.toLocaleString()}</span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Index;