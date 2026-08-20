import { SectionHead } from "@/sections";

export function MarketingFunnel() {
  const stages = [
    {
      stage: '01',
      title: 'Awareness',
      services: 'Social Media • Branding • Content',
      description: 'Build visibility and introduce your brand to the right audience.',
    },
    {
      stage: '02',
      title: 'Engagement',
      services: 'Reels • Content • Community Management',
      description: 'Turn attention into meaningful interaction with your brand.',
    },
    {
      stage: '03',
      title: 'Consideration',
      services: 'Websites • Landing Pages • Retargeting',
      description: 'Give interested prospects the information they need to take the next step.',
    },
    {
      stage: '04',
      title: 'Lead',
      services: 'Meta Ads • WhatsApp • Lead Forms',
      description: 'Convert interested visitors into qualified leads and enquiries.',
    },
    {
      stage: '05',
      title: 'Conversion',
      services: 'Sales Funnels • Retargeting • Offer Strategy',
      description: 'Turn qualified prospects into paying customers.',
    },
    {
      stage: '06',
      title: 'Retention',
      services: 'Remarketing • Customer Communication • Loyalty',
      description: 'Keep customers engaged and create opportunities for repeat business.',
    },
  ];

  return (
    <section className="bg-secondary/30 py-20">
      <div className="mx-auto max-w-[90rem] px-5 lg:px-10">
        <SectionHead
          center
          eyebrow="Marketing Funnel"
          title="From attention to long-term growth"
          sub="Our services work together across every stage of the customer journey."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stages.map((item) => (
            <div
              key={item.stage}
              className="rounded-2xl border border-border bg-card p-6"
            >
              <span className="text-sm font-bold text-primary">
                {item.stage}
              </span>

              <h3 className="mt-2 font-display text-xl font-bold">
                {item.title}
              </h3>

              <p className="mt-3 text-sm font-semibold text-accent">
                {item.services}
              </p>

              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}