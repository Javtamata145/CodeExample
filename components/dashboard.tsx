"use client"

import { BookOpen, Clock, Award, Users, ArrowRight } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"

export function Dashboard() {
  // Mock data for demonstration
  const student = {
    name: "María García",
    email: "maria@ejemplo.com",
    avatar: "👩‍🎓",
  }

  const courses = [
    {
      id: 1,
      title: "Fundamentos de Programación",
      instructor: "Carlos López",
      progress: 75,
      lessons: 12,
      completedLessons: 9,
      image: "💻",
    },
    {
      id: 2,
      title: "Diseño Web Responsivo",
      instructor: "Ana Martínez",
      progress: 45,
      lessons: 10,
      completedLessons: 4,
      image: "🎨",
    },
    {
      id: 3,
      title: "Bases de Datos SQL",
      instructor: "Roberto Chen",
      progress: 60,
      lessons: 8,
      completedLessons: 5,
      image: "🗄️",
    },
  ]

  const stats = [
    { label: "Horas Aprendidas", value: "42.5", icon: Clock },
    { label: "Certificados", value: "3", icon: Award },
    { label: "Comunidad", value: "1,234", icon: Users },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-card backdrop-blur supports-[backdrop-filter]:bg-card/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground font-bold">
              📚
            </div>
            <h1 className="text-2xl font-bold text-foreground">EduPlataforma</h1>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-muted transition-colors">
            <span className="text-2xl">{student.avatar}</span>
            <div className="text-sm font-medium">{student.name}</div>
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-2">¡Bienvenida de nuevo, María!</h2>
          <p className="text-muted-foreground text-lg">
            Continúa tu viaje de aprendizaje y alcanza tus metas educativas
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {stats.map((stat) => {
            const Icon = stat.icon
            return (
              <Card key={stat.label} className="border-border">
                <CardContent className="pt-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                    <p className="text-3xl font-bold text-foreground mt-1">{stat.value}</p>
                  </div>
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Courses Section */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
              <BookOpen className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-foreground">Mis Cursos</h3>
            </div>
            <Button variant="outline" className="gap-2 bg-transparent">
              Ver todos <ArrowRight className="w-4 h-4" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="overflow-hidden border-border hover:shadow-lg transition-shadow cursor-pointer group"
              >
                <div className="h-32 bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center text-6xl group-hover:scale-110 transition-transform duration-300">
                  {course.image}
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription className="text-sm">{course.instructor}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Progreso</span>
                      <span className="font-semibold text-foreground">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {course.completedLessons} de {course.lessons} lecciones completadas
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                    Continuar Curso
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Quick Access Section */}
        <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-8 border border-border">
          <div className="flex items-start gap-6">
            <div className="flex-1">
              <h3 className="text-xl font-bold text-foreground mb-3">Acceso Rápido</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <button className="flex items-center gap-3 p-4 rounded-lg bg-background hover:bg-muted transition-colors border border-border text-left">
                  <div className="text-2xl">📅</div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Mi Calendario</p>
                    <p className="text-xs text-muted-foreground">Próximos eventos</p>
                  </div>
                </button>
                <button className="flex items-center gap-3 p-4 rounded-lg bg-background hover:bg-muted transition-colors border border-border text-left">
                  <div className="text-2xl">🏆</div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Logros</p>
                    <p className="text-xs text-muted-foreground">Tus certificados</p>
                  </div>
                </button>
                <button className="flex items-center gap-3 p-4 rounded-lg bg-background hover:bg-muted transition-colors border border-border text-left">
                  <div className="text-2xl">💬</div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Mensajes</p>
                    <p className="text-xs text-muted-foreground">Con instructores</p>
                  </div>
                </button>
                <button className="flex items-center gap-3 p-4 rounded-lg bg-background hover:bg-muted transition-colors border border-border text-left">
                  <div className="text-2xl">⚙️</div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">Configuración</p>
                    <p className="text-xs text-muted-foreground">Tu perfil</p>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-border bg-card mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold text-foreground mb-4">EduPlataforma</h4>
              <p className="text-sm text-muted-foreground">Tu espacio para aprender y crecer</p>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Cursos</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Programación
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Diseño
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Datos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Comunidad</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Foro
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Eventos
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Mentores
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-4">Soporte</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Ayuda
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Contacto
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground transition-colors">
                    Privacidad
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
            <p>&copy; 2025 EduPlataforma. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
