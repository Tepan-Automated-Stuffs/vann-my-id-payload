import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink, Code, Calendar } from "lucide-react"

interface Project {
  title: string
  description: string
  technologies: string[]
  githubUrl?: string
  liveUrl?: string
  featured?: boolean
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with Next.js and Payload CMS, featuring responsive design and content management.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Payload CMS"],
    githubUrl: "https://github.com/Koyaku-Hub/vann-my-id-payload",
    featured: true,
  },
  {
    title: "Next.js Template",
    description: "A customizable Next.js template with pre-configured features for rapid development.",
    technologies: ["Next.js", "React", "Tailwind CSS", "TypeScript"],
    githubUrl: "https://github.com/Koyaku-Hub/vann-my-id-payload",
    featured: true,
  },
  {
    title: "Content Management System",
    description: "A robust CMS solution built with Payload for managing portfolio content and projects.",
    technologies: ["Payload CMS", "PostgreSQL", "GraphQL", "Node.js"],
    featured: false,
  },
]

export function ProjectsSection() {
  const featuredProjects = projects.filter(project => project.featured)
  const otherProjects = projects.filter(project => !project.featured)

  return (
    <section id="projects" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
            A selection of my recent work and contributions
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="text-xl">{project.title}</CardTitle>
                  <Code className="h-5 w-5 text-blue-600" />
                </div>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <Github className="h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                        <ExternalLink className="h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <div className="mt-16">
            <div className="text-center mb-12">
              <h3 className="text-2xl font-bold text-gray-900">
                Other Projects
              </h3>
              <p className="mt-2 text-lg text-gray-500">
                More projects in my portfolio
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {otherProjects.map((project, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                  <CardHeader>
                    <CardTitle className="text-lg">{project.title}</CardTitle>
                    <CardDescription>{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    {project.githubUrl && (
                      <Button variant="ghost" size="sm" asChild>
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                          <Github className="h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  )
}