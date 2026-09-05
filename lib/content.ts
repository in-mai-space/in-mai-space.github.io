export const site = {
  name: 'in-mai-space',
  tagline: 'Backend & data engineering',
  description:
    'CS + Math senior at Northeastern. Backend development and data engineering, plus a lot of books, cooking, and shows.',
  email: 'thisismainguyen@gmail.com',
  timezone: 'America/New_York',
  location: 'Boston, MA',
}

export const sections = [
  { id: 'work', label: 'Work' },
  { id: 'projects', label: 'Projects' },
  { id: 'reading', label: 'Reading' },
  { id: 'cooking', label: 'Cooking' },
  { id: 'contact', label: 'Contact' },
] as const

export type SectionId = (typeof sections)[number]['id']

export const sectionIndex = (id: SectionId) =>
  String(sections.findIndex((section) => section.id === id) + 1).padStart(2, '0')

export const heroTags = [
  'backend',
  'data engineering',
  'cooking',
  'reading',
  'swimming',
]

export const greetings = [
  { from: 0, text: 'Still up, welcome in' },
  { from: 5, text: 'Early bird, come on in' },
  { from: 8, text: "Good morning, coffee's on" },
  { from: 12, text: "Lunch hour, glad you're here" },
  { from: 14, text: 'Good afternoon, come on in' },
  { from: 18, text: 'Good evening, pull up a chair' },
  { from: 22, text: 'Late night scrolling, respect' },
]


export const roles = [
  {
    role: 'Member of Technical Staff Co-op',
    org: 'Agency AI (Sequoia-backed Series A startup)',
    orgHref:
      'https://fortune.com/2025/11/12/elias-torress-agency-raises-20-million-series-a-to-chase-agentic-ai-for-customer-success/',
    period: 'May 2025 – Dec 2025 · May 2026 – Aug 2026',
    blurb:
      'I built AI health scores, broadcast tooling to reach every customer across channels, and pipelines that backfill and ingest product data from warehouses, customer sources, APIs, and S3 buckets. I also ran zero-downtime migrations off old systems onto new ones, and optimized queries and precompute to cut costs.',
    stack: [
      'Python',
      'TypeScript',
      'Postgres',
      'ClickHouse',
      'DuckDB',
      'Elasticsearch',
      'Temporal',
      'Kubernetes',
      'Pulumi',
      'Doppler',
      'PostHog',
      'Datadog',
    ],
  },
  {
    role: 'Technical Lead',
    org: 'Generate Product Development Studio',
    orgHref: 'https://generatenu.com/',
    period: 'Jan 2025 – May 2025 · Jan 2026 – May 2026',
    blurb:
      'The jump from building what I was handed to deciding what gets built. I owned the architecture: roadmap and vision, ticket breakdown, technology choices, and system and database schema design. I set up the codebase, enforced code quality through CI/CD, and mentored engineers who were about where I had been a year earlier.',
    stack: ['Postgres', 'Go', 'TypeScript', 'React', 'React Native', 'Expo', 'AWS S3'],
  },
  {
    role: 'Software Engineer',
    org: 'Generate Product Development Studio',
    orgHref: 'https://generatenu.com/',
    period: 'Jan 2024 – Jun 2024 · Sep 2024 – Dec 2024',
    blurb:
      'I showed up knowing Racket and not much else. This is where I found out what an API and a database actually are, and I learned them by building real client features: vector embedding search, S3 media storage, onboarding, and push notifications.',
    stack: ['Postgres', 'MongoDB', 'Go', 'TypeScript', 'React', 'React Native', 'AWS S3'],
  },
]

export type Project = {
  name: string
  year: string
  desc: string
  tags: string[]
  href?: string
  featured?: boolean
}

const generatenu = (repo: string) => `https://github.com/GenerateNU/${repo}`

export const projects: Project[] = [
  {
    name: 'toggo',
    href: generatenu('toggo'),
    year: 'Spring 2026',
    desc:
      'Trip planning for groups whose plans never make it out of the group chat. Pitch ideas with voice memos, vote and rank poll options, pull in links from Instagram, TikTok, and the web, and organize everything by category and activity, with comments throughout.',
    tags: [
      'Go',
      'TypeScript',
      'Expo',
      'React Native',
      'Postgres',
      'Redis',
      'Doppler',
      'Pulumi',
      'AWS S3',
    ],
    featured: true,
  },
  {
    name: 'dearly',
    href: generatenu('dearly'),
    year: 'Spring 2025',
    desc:
      'A social app for families across generations, with two modes. Basic keeps things simple for grandparents: labeled buttons, fewer steps, voice memos. Advanced gives the tech-savvy ones group creation, invites for people outside the family, and manual or scheduled nudges to keep everyone posting.',
    tags: ['TypeScript', 'Expo', 'React Native', 'Postgres', 'AWS S3', 'AWS EventBridge'],
  },
  {
    name: 'snapper',
    href: generatenu('snapper'),
    year: 'Fall 2024',
    desc:
      'A social feed for scuba divers. Follow other divers, get notified when they post, and tag the animals in your shots. Tapping a tag opens that species: scientific details, images, habitat, and how it lives.',
    tags: ['TypeScript', 'Expo', 'React Native', 'MongoDB', 'AWS S3'],
  },
  {
    name: 'student activity calendar',
    href: generatenu('sac'),
    year: 'Spring 2024',
    desc:
      'Every club lived on its own social media, so events went unseen and nobody found the clubs outside their own circle. This puts them in one place: browse clubs and events, then RSVP or apply without leaving the app. Clubs get their own admin view to manage listings, events, and who signs up.',
    tags: [
      'Go',
      'TypeScript',
      'React',
      'Expo',
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
  { title: 'Demons', author: 'Fyodor Dostoevsky', current: true },
  { title: "Nobody's Boy", author: 'Hector Malot'},
  { title: 'Empire of Illusions', author: 'Chris Hedges'}, 
  { title: 'White Nights', author: 'Fyodor Dostoevsky'},
  { title: 'Meditations', author: 'Marcus Aurelius'},
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
  { title: 'Meditations', author: 'Marcus Aurelius' },
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
