interface Achievement {
  title: string
  organization: string
  date?: string
  description: string
  link: string | null
}

interface Hackathon {
  name: string
  organization: string
  date?: string
  description: string
  result: string | null
  project: string | null
  link: string | null
}

const achievements: Achievement[] = []
const hackathons: Hackathon[] = [
  {
    name: 'UPAI-Hackdays',
    organization: 'MLH',
    description: 'Built CareerPilot AI — an AI-powered resume-to-job matching assistant — and won MLH Swags Prize.',
    result: 'MLH Swags Prize Winner',
    project: 'CareerPilot AI',
    link: 'https://github.com/chaitanya29082000-web/careerpilot-ai',
  },
]

function EmptyState({ message }: { message: string }) {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-6">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-accent/10 mb-4">
        <svg className="w-6 h-6 text-accent/60" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 18.75h-9m9 0a3 3 0 013 3h-15a3 3 0 013-3m9 0v-3.375c0-.621-.503-1.125-1.125-1.125h-.871M7.5 18.75v-3.375c0-.621.504-1.125 1.125-1.125h.872m5.007 0H9.497m5.007 0a7.454 7.454 0 01-.982-3.172M9.497 14.25a7.454 7.454 0 00.981-3.172M5.25 4.236c-.996.188-1.768.657-2.246 1.356A18.083 18.083 0 003.004 12c0 2.833.508 5.557 1.452 8.007.478.699 1.25 1.168 2.246 1.356m12.492 0c-.996.188-1.768.657-2.246 1.356A18.083 18.083 0 0112 21c-2.833 0-5.557-.508-8.007-1.452-.699-.478-1.168-1.25-1.356-2.246m12.492 0c.996.188 1.768.657 2.246 1.356A18.083 18.083 0 0021 12c0-2.833-.508-5.557-1.452-8.007a3.728 3.728 0 00-2.246-1.356m0 0A18.083 18.083 0 0112 3c2.833 0 5.557.508 8.007 1.452.699.478 1.168 1.25 1.356 2.246M9.497 14.25a7.454 7.454 0 01-.981-3.172" />
        </svg>
      </div>
      <p className="text-text-secondary text-sm text-center max-w-xs">
        {message}
      </p>
    </div>
  )
}

export default function Achievements() {
  return (
    <section id="achievements" className="py-24 sm:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Achievements
          </h2>
          <p className="text-text-secondary text-lg max-w-xl mx-auto">
            Milestones, hackathons, and accomplishments.
          </p>
        </div>

        {/* Achievements subsection */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 bg-accent rounded-full" />
            <h3 className="text-xl font-semibold text-text-primary">
              Achievements
            </h3>
          </div>

          <div className="bg-bg-card border border-border rounded-2xl overflow-hidden">
            {achievements.length > 0 ? (
              <div className="divide-y divide-border">
                {achievements.map((item) => (
                  <div
                    key={item.title}
                    className="p-6 sm:p-8 hover:bg-bg-secondary/50 transition-colors duration-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <h4 className="text-lg font-semibold text-text-primary">
                        {item.title}
                      </h4>
                      {item.date && (
                        <span className="text-xs font-medium text-text-muted whitespace-nowrap">
                          {item.date}
                        </span>
                      )}
                    </div>
                    {item.organization && (
                      <p className="text-accent text-sm font-medium mb-2">
                        {item.organization}
                      </p>
                    )}
                    <p className="text-text-secondary text-sm leading-relaxed">
                      {item.description}
                    </p>
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 mt-3 text-sm text-accent hover:text-accent-light transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-card rounded"
                      >
                        View details
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState message="More milestones coming soon." />
            )}
          </div>
        </div>

        {/* Hackathons subsection */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-6 bg-accent rounded-full" />
            <h3 className="text-xl font-semibold text-text-primary">
              Hackathons
            </h3>
          </div>

          <div className="bg-bg-card border border-border rounded-2xl overflow-hidden">
            {hackathons.length > 0 ? (
              <div className="divide-y divide-border">
                {hackathons.map((item) => (
                  <div
                    key={item.name}
                    className="p-6 sm:p-8 hover:bg-bg-secondary/50 transition-colors duration-200"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                      <h4 className="text-lg font-semibold text-text-primary">
                        {item.name}
                      </h4>
                      {item.date && (
                        <span className="text-xs font-medium text-text-muted whitespace-nowrap">
                          {item.date}
                        </span>
                      )}
                    </div>
                    {item.organization && (
                      <p className="text-accent text-sm font-medium mb-2">
                        {item.organization}
                      </p>
                    )}
                    <p className="text-text-secondary text-sm leading-relaxed mb-3">
                      {item.description}
                    </p>
                    {item.result && (
                      <span className="inline-flex items-center px-3 py-1 text-xs font-medium text-accent bg-accent/10 rounded-full">
                        {item.result}
                      </span>
                    )}
                    {item.link && (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 ml-3 text-sm text-accent hover:text-accent-light transition-colors duration-200 focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-bg-card rounded"
                      >
                        View project
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                        </svg>
                      </a>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <EmptyState message="Hackathon participation details coming soon." />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
