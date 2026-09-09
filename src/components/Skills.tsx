interface SkillCategory {
  category: string
  items: string[]
}

const skillCategories: SkillCategory[] = [
  {
    category: 'Programming',
    items: ['Python', 'C++'],
  },
  {
    category: 'AI / ML',
    items: ['Machine Learning', 'AI'],
  },
  {
    category: 'Tools',
    items: ['Git', 'GitHub'],
  },
]

function SkillBadge({ name }: { name: string }) {
  return (
    <span className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-text-primary bg-bg-card border border-border rounded-lg hover:border-accent/30 hover:bg-bg-card-hover transition-all duration-200 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-card" tabIndex={0}>
      {name}
    </span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32 px-6 bg-bg-secondary">
      <div className="max-w-5xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Skills
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        {/* Skill categories */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.category}
              className="bg-bg-card border border-border rounded-2xl p-6 sm:p-8 hover:border-accent/20 transition-colors duration-300"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-1 h-6 bg-accent rounded-full" />
                <h3 className="text-lg font-semibold text-text-primary">
                  {category.category}
                </h3>
              </div>

              {/* Skill badges */}
              <div className="flex flex-wrap gap-3">
                {category.items.map((item) => (
                  <SkillBadge key={item} name={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
