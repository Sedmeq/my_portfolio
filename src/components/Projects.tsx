import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import image_1 from '@/images/image_1.png';
import image_2 from '@/images/image_2.png';
import image_3 from '@/images/image_3.png'; 

const Projects = () => {
  const projects = [
    {
      title: 'Order Management System',
      description: '🏪 ASP.NET Core 8.0 MVC order management system with role-based access (Admin/Accountant/Cashier), product catalog, multi-item orders, real-time calculations & comprehensive user authentication using Entity Framework & SQL Server.',
      tech: ['ASP.NET Core 8.0 MVC', 'SQL Server', 'Entity Framework Core', 'ASP.NET Core Identity', 'Bootstrap 5'],
      github: 'https://github.com/Sedmeq/OrderManagementSystem.git',
      live: 'https://github.com/Sedmeq/OrderManagementSystem.git',
      image: image_1
    },
    {
      title: 'Job Portal System',
      description: 'This project allows employers to create job posts under specific categories, share detailed information about their companies, and manage listings. Job seekers can browse job vacancies, apply to open positions, and track the jobs they have applied to.',
      tech: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Gradle', 'JWT', 'Swagger UI', 'JUnit', 'Lombok' , 'Docker'],
      github: 'https://github.com/Sedmeq/Job_Portal_System.git',
      live: 'https://github.com/Sedmeq/Job_Portal_System.git',
      image: image_2
    },
    {
      title: 'Air Ticket System',
      description: 'Air Ticket System is a Java & Spring Boot-based web application for managing airline ticket sales. Users can view flights and purchase tickets, while admins handle flight CRUD operations and approve or cancel purchases. The system includes JWT-based authentication, Swagger UI for API docs, and Docker support for deployment.',
      tech: ['Java 17', 'Spring Boot', 'PostgreSQL', 'Gradle', 'JWT', 'Swagger UI', 'Lombok', 'Docker'],
      github: 'https://github.com/Sedmeq/Air_Ticket_System.git',
      live: 'https://github.com/Sedmeq/Air_Ticket_System.git',
      image: image_3
    }
  ];

  return (
    <section id="projects" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A showcase of projects that demonstrate my skills and passion for creating impactful solutions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title} 
              className="bg-card border border-border overflow-hidden hover:bg-muted transition-all duration-500 hover:scale-105 group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex gap-3">
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;