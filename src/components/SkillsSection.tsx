import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

interface Skill {
  name: string
  level: number
  category: string
}

const skills: Skill[] = [
  { name: "Next.js", level: 95, category: "Frontend" },
  { name: "TypeScript", level: 90, category: "Frontend" },
  { name: "Tailwind CSS", level: 95, category: "Styling" },
  { name: "React", level: 95, category: "Frontend" },
  { name: "Node.js", level: 85, category: "Backend" },
  { name: "Payload CMS", level: 80, category: "CMS" },
  { name: "PostgreSQL", level: 75, category: "Database" },
  { name: "GraphQL", level: 80, category: "Backend" },
  { name: "Git", level: 90, category: "Development Tools" },
  { name: "Docker", level: 70, category: "DevOps" },
]

const categories = [...new Set(skills.map(skill => skill.category))]

export function SkillsSection() {
  return (
    <section id="skills" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Technical Skills
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-600 sm:mt-4">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categories.map((category, index) => {
            const categorySkills = skills.filter(skill => skill.category === category)
            
            return (
              <Card key={index} className="h-fit">
                <CardHeader>
                  <CardTitle className="text-xl text-center">{category}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {categorySkills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-gray-500">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}