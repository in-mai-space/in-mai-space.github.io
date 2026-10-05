export const site = {
  name: 'in-mai-space',
  description:
    'CS + Math senior at Northeastern. Backend development, data engineering, and distributed systems, plus reading, cooking, swimming, and learning Mandarin.',
  email: 'thisismainguyen@gmail.com',
  timezone: 'America/New_York',
  location: 'Boston, MA',
}

export const roles = [
  {
    role: 'Infrastructure Engineer',
    org: 'Generate Product Development Studio',
    orgHref: 'https://generatenu.com/',
    period: 'Jul 2026 – Present',
    blurb:
      'Support the club with infrastructure setup, and maintain internal apps like the website and application portal, plus a library of repos for tech leads.',
  },
  {
    role: 'Software Engineering Co-op',
    org: 'Klaviyo (acquired Agency AI)',
    orgHref: 'https://www.klaviyo.com/',
    period: 'Aug 2026',
    blurb:
      "Built scheduled tasks for Composer, Klaviyo's marketing agents, so they can audit flows or generate campaigns on a schedule.",
  },
  {
    role: 'Member of Technical Staff Co-op',
    org: 'Agency AI',
    orgHref:
      'https://fortune.com/2025/11/12/elias-torress-agency-raises-20-million-series-a-to-chase-agentic-ai-for-customer-success/',
    period: 'May – Dec 2025 · May – Aug 2026',
    blurb:
      'Built AI health scores, cross-channel broadcast tooling, and data ingestion pipelines. Ran zero-downtime migrations and cut query costs.',
  },
  {
    role: 'Technical Lead',
    org: 'Generate Product Development Studio',
    orgHref: 'https://generatenu.com/',
    period: 'Jan – May 2025 · Jan – May 2026',
    blurb:
      'Owned architecture, roadmap, and schema design. Set up the codebase and CI/CD, and mentored newer engineers.',
  },
  {
    role: 'Software Engineer',
    org: 'Generate Product Development Studio',
    orgHref: 'https://generatenu.com/',
    period: 'Jan – Jun 2024 · Sep – Dec 2024',
    blurb:
      'Learned APIs and databases by shipping client features: embedding search, S3 media storage, onboarding, and push notifications.',
  },
]

export type Project = {
  name: string
  year: string
  desc: string
  tags: string[]
  href?: string
  inProgress?: boolean
}

const generatenu = (repo: string) => `https://github.com/GenerateNU/${repo}`

export const projects: Project[] = [
  {
    name: 'shellfish',
    href: 'https://github.com/in-mai-space/shellfish',
    year: 'Fall 2026',
    desc:
      'A Unix shell built from scratch to learn how shells work, from the lexer and parser through to the executor.',
    tags: ['C'],
    inProgress: true,
  },
  {
    name: 'generate website',
    href: generatenu('website'),
    year: 'Fall 2026',
    desc:
      "Migrated Generate's website from JavaScript to TypeScript and enforced CI format, lint, and code-quality checks.",
    tags: ['TypeScript', 'React', 'Vite', 'Sanity', 'Oxlint'],
  },
  {
    name: 'in-mai-space',
    href: 'https://github.com/in-mai-space/in-mai-space.github.io',
    year: 'Summer 2026',
    desc:
      'This site. A small personal corner for work, projects, books, and cooking, deployed to GitHub Pages.',
    tags: ['TypeScript', 'React', 'Next.js', 'Tailwind'],
  },
  {
    name: 'slack-emoji',
    href: 'https://github.com/in-mai-space/slack-emoji',
    year: 'Summer 2026',
    desc:
      "A quick CLI that moves every custom emoji from one Slack workspace to another through Slack's unofficial API, instead of uploading them one by one.",
    tags: ['Python'],
  },
  {
    name: 'toggo',
    href: generatenu('toggo'),
    year: 'Spring 2026',
    desc:
      'Group trip planning: pitch ideas with voice memos, vote on polls, and save links from Instagram, TikTok, and the web.',
    tags: [
      'Go',
      'TypeScript',
      'React Native',
      'Postgres',
      'Redis',
      'Pulumi',
      'AWS S3',
    ],
  },
  {
    name: 'dearly',
    href: generatenu('dearly'),
    year: 'Spring 2025',
    desc:
      'A family social app with a simple mode for grandparents and an advanced mode with groups, invites, and posting nudges.',
    tags: ['TypeScript', 'React Native', 'Postgres', 'AWS S3', 'AWS EventBridge'],
  },
  {
    name: 'snapper',
    href: generatenu('snapper'),
    year: 'Fall 2024',
    desc:
      'A social feed for scuba divers. Tag the animals in your shots and tap a tag to learn about the species.',
    tags: ['TypeScript', 'React Native', 'MongoDB', 'AWS S3'],
  },
  {
    name: 'student activity calendar',
    href: generatenu('sac'),
    year: 'Spring 2024',
    desc:
      "One place for Northeastern clubs and events, with RSVPs, applications, and an admin view for clubs.",
    tags: [
      'Go',
      'TypeScript',
      'React',
      'React Native',
      'Postgres',
      'Pinecone',
      'AWS S3',
    ],
  },
]

export type Book = {
  title: string
  author: string
  current?: boolean
}

export const shelf: Book[] = [
  { title: 'The Name of the Rose', author: 'Umberto Eco', current: true },
  { title: 'Cobalt Red', author: 'Siddharth Kara' },
  { title: 'Demons', author: 'Fyodor Dostoevsky', current: true },
  { title: "Nobody's Boy", author: 'Hector Malot' },
  { title: 'Empire of Illusion', author: 'Chris Hedges' },
  { title: 'White Nights', author: 'Fyodor Dostoevsky' },
  { title: 'Meditations', author: 'Marcus Aurelius' },
  { title: 'Kafka on the Shore', author: 'Haruki Murakami' },
  { title: 'The House of the Dead', author: 'Fyodor Dostoevsky' },
  { title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky' },
  { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky' },
  { title: 'Stoner', author: 'John Williams' },
  { title: 'The Stranger', author: 'Albert Camus' },
  { title: 'Killers of the Flower Moon', author: 'David Grann' },
  { title: 'The Wager', author: 'David Grann' },
  { title: 'Salt: A World History', author: 'Mark Kurlansky' },
  { title: 'The Mind-Gut Connection', author: 'Emeran Mayer' },
  { title: 'Vita Contemplativa', author: 'Byung-Chul Han' },
  { title: 'Non-things', author: 'Byung-Chul Han' },
  { title: 'Saving Beauty', author: 'Byung-Chul Han' },
  { title: 'The Agony of Eros', author: 'Byung-Chul Han' },
  { title: 'The Burnout Society', author: 'Byung-Chul Han' },
  { title: 'The Palliative Society', author: 'Byung-Chul Han' },
  { title: 'The Little Prince', author: 'Antoine de Saint-Exupéry' },
  { title: 'The Wisdom of Insecurity', author: 'Alan Watts' },
  { title: 'When Things Fall Apart', author: 'Pema Chödrön' },
  { title: "Zen Mind, Beginner's Mind", author: 'Shunryu Suzuki' },
  { title: "Man's Search for Meaning", author: 'Viktor Frankl' },
]

export const dishes = [
  {
    src: '/cooking/home-dinner.jpg',
    alt: 'Dinner spread on a wooden table: beef and red pepper stir-fry, braised napa cabbage in broth, and a bowl of tofu and scallion soup',
    caption: 'Beef stir-fry, braised napa, tofu soup',
  },
  {
    src: '/cooking/breakfast-toast.jpg',
    alt: 'Breakfast in morning light: sourdough toast topped with cottage cheese, cherry tomatoes and balsamic, a folded omelette, and a mug of coffee',
    caption: 'Cottage cheese toast & an omelette',
  },
  {
    src: '/cooking/calamari.jpg',
    alt: 'Three sheet pans of breaded calamari rings and tentacles resting on wire racks in a kitchen, ready for the fryer',
    caption: 'Breaded calamari, ready for the fryer',
  },
  {
    src: '/cooking/osso-buco.jpg',
    alt: 'Braised veal shanks in tomato sauce plated over polenta, finished with gremolata and strands of citrus zest',
    caption: 'Osso buco over polenta with gremolata',
  },
  {
    src: '/cooking/cold-noodles.jpg',
    alt: 'Overhead view of a white bowl of thin noodles in red chili sauce, topped with julienned cucumber, sesame seeds, and halved boiled eggs, with metal chopsticks',
    caption: 'Spicy cold noodles with cucumber & egg',
  },
  {
    src: '/cooking/charcuterie.jpg',
    alt: 'Two charcuterie plates with salami, prosciutto, brie, cubed cheese, green grapes, crackers, and a small jar of jam, beside a sparkling grape cocktail garnished with lemon and mint',
    caption: 'Charcuterie & a grape cocktail',
  },
]

export const socials = [
  { label: 'Email', handle: site.email, href: `mailto:${site.email}` },
  { label: 'GitHub', handle: '@in-mai-space', href: 'https://github.com/in-mai-space' },
  {
    label: 'LinkedIn',
    handle: 'in/mmai-nguyen',
    href: 'https://www.linkedin.com/in/mmai-nguyen/',
  },
]
