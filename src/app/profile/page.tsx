import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { Instagram, Linkedin, Twitter, Globe, Edit3, CircleUserRound, Briefcase, MapPin } from 'lucide-react';
import Image from 'next/image';

// Dados fictícios do usuário - em um aplicativo real, isso viria de um banco de dados/autenticação
const userProfile = {
  name: 'Athena Empreendedora', // Traduzido
  tagline: 'Empoderando mulheres, uma aventura de cada vez.', // Traduzido
  bio: "Apaixonada por promover uma comunidade de mulheres líderes e inovadoras. Fundadora da AthenaConnect, conectando e elevando empreendedoras em todo o mundo. Vamos construir algo ótimo juntas!", // Traduzido
  avatarUrl: 'https://placehold.co/128x128.png?text=AE',
  coverImageUrl: 'https://placehold.co/1200x300.png',
  coverImageHint: 'greece landscape',
  location: 'Atenas, Grécia',
  role: 'Fundadora & CEO, AthenaConnect', // "AthenaConnect" mantido como nome da marca
  socialLinks: [
    { platform: 'Instagram', url: 'https://instagram.com/athena_entrepreneur', icon: Instagram },
    { platform: 'LinkedIn', url: 'https://linkedin.com/in/athena_entrepreneur', icon: Linkedin },
    { platform: 'Twitter', url: 'https://twitter.com/athena_connect', icon: Twitter },
    { platform: 'Website', url: 'https://athenaconnect.com', icon: Globe },
  ],
  skills: ['Liderança', 'Estratégia de Negócios', 'Networking', 'Desenvolvimento de Produto', 'Marketing'], // Traduzido
};


export default function ProfilePage() {
  return (
    <div className="space-y-8">
      <Card className="overflow-hidden shadow-lg">
        <div className="relative h-48 md:h-64 w-full">
          <Image
            src={userProfile.coverImageUrl}
            alt="Imagem de capa" // Traduzido
            layout="fill"
            objectFit="cover"
            className="bg-muted"
            data-ai-hint={userProfile.coverImageHint}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-4 left-4 md:left-6">
            <Avatar className="h-24 w-24 md:h-32 md:w-32 border-4 border-card">
              <AvatarImage src={userProfile.avatarUrl} alt={userProfile.name} data-ai-hint="person portrait"/>
              <AvatarFallback className="text-4xl">{userProfile.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
            </Avatar>
          </div>
           <Button variant="outline" size="sm" className="absolute top-4 right-4 bg-card/80 hover:bg-card">
            <Edit3 className="mr-2 h-4 w-4" /> Editar Perfil
          </Button>
        </div>
        <CardHeader className="pt-10 md:pt-16 px-4 md:px-6"> {/* Increased padding top to make space for avatar overlap */}
          <CardTitle className="text-3xl md:text-4xl font-bold text-primary">{userProfile.name}</CardTitle>
          <p className="text-lg text-accent font-medium">{userProfile.tagline}</p>
          <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-muted-foreground mt-1">
            <div className="flex items-center">
              <Briefcase className="mr-1.5 h-4 w-4" /> {userProfile.role}
            </div>
            <div className="flex items-center">
              <MapPin className="mr-1.5 h-4 w-4" /> {userProfile.location}
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-4 md:px-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-2">Sobre Mim</h3>
            <p className="text-foreground/90 whitespace-pre-line">{userProfile.bio}</p>
          </div>

          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-3">Conecte-se</h3>
            <div className="flex flex-wrap gap-3">
              {userProfile.socialLinks.map(link => (
                <Button key={link.platform} variant="outline" asChild>
                  <a href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center">
                    <link.icon className="mr-2 h-4 w-4" /> {link.platform}
                  </a>
                </Button>
              ))}
            </div>
          </div>
          
          <Separator />

          <div>
            <h3 className="text-lg font-semibold mb-3">Habilidades</h3>
            <div className="flex flex-wrap gap-2">
              {userProfile.skills.map(skill => (
                <Badge key={skill} variant="secondary" className="text-sm px-3 py-1">{skill}</Badge>
              ))}
            </div>
          </div>

        </CardContent>
      </Card>

      {/* Placeholder for "My Events" or "My Products" sections */}
      {/* 
      <Card>
        <CardHeader>
          <CardTitle>Minha Atividade</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">Eventos que você está participando ou produtos que você listou aparecerão aqui.</p>
        </CardContent>
      </Card> 
      */}
    </div>
  );
}
