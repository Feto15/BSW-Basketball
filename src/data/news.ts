// News data untuk BSW Basketball
export interface NewsArticle {
  id: number;
  date: string;
  category: string;
  title: string;
  excerpt: string;
  content?: string; // Full article content
  image: string;
  featured: boolean;
  author?: string;
  readTime?: string;
}

export const newsArticles: NewsArticle[] = [
  {
    id: 1,
    date: 'March 15, 2024',
    category: 'Achievement',
    title: 'BSW TEAMS WIN REGIONAL CHAMPIONSHIP',
    excerpt: 'Our middle school and high school teams both secured first place in the regional tournament, showcasing exceptional teamwork and skill development.',
    image: 'tournament championship celebration',
    featured: true,
    author: 'Coach Sarah Martinez',
    readTime: '5 min read',
    content: `
# BSW TEAMS WIN REGIONAL CHAMPIONSHIP

**March 15, 2024** • By Coach Sarah Martinez • 5 min read

![Tournament Championship](placeholder.svg)

This past weekend marked a historic moment for BSW Basketball as both our middle school and high school teams secured first-place victories at the Regional Youth Basketball Championship held at the State Arena.

## A Weekend of Excellence

The tournament brought together 24 of the best youth basketball teams from across the region, and our athletes rose to every challenge. Over three intense days of competition, our teams demonstrated not only exceptional basketball skills but also the character, teamwork, and resilience that BSW Basketball is known for.

### Middle School Division Victory

Our middle school team, led by captains Marcus Johnson and Emily Chen, dominated their division with an unblemished 5-0 record. The championship game against Lincoln Youth Basketball was a thrilling display of skill and determination, ending with a decisive 68-54 victory.

**Tournament Highlights:**
- Marcus Johnson earned MVP honors with an average of 22 points, 8 rebounds, and 6 assists per game
- Emily Chen led the team in three-point shooting, hitting 58% from beyond the arc
- The team's defense held opponents to just 48 points per game on average
- All 12 players contributed meaningful minutes throughout the tournament

### High School Championship Run

Our high school team faced an equally competitive field and emerged victorious after an epic championship game that went into double overtime. The 89-86 victory over Riverside Academy showcased the mental toughness and physical conditioning that our program emphasizes.

**Key Moments:**
- Senior point guard Alex Thompson scored 31 points in the final game, including the game-winning three-pointer
- The team rallied from a 15-point deficit in the second half
- Defensive intensity in overtime periods held Riverside to just 8 points in two extra periods
- Bench players provided crucial energy and contributions when starters needed rest

## What This Victory Means

This regional championship represents more than just trophies and titles. It validates the comprehensive approach we take at BSW Basketball:

1. **Skill Development**: Hundreds of hours in practice focusing on fundamentals, advanced techniques, and basketball IQ
2. **Physical Conditioning**: Our partnership with certified strength and conditioning coaches has elevated our athleticism
3. **Mental Preparation**: Sports psychology sessions helped our athletes handle pressure situations
4. **Team Chemistry**: Team-building activities and community service created bonds that showed on the court
5. **Character First**: Our emphasis on sportsmanship, respect, and integrity was evident in every game

## Community Support

None of this would be possible without our incredible BSW Basketball community. Over 200 family members and supporters made the trip to cheer on our teams. The energy in the arena was electric, and our players felt that support every moment they were on the court.

Special thanks to:
- All the parents who volunteered for transportation and logistics
- Our assistant coaches who put in countless hours of preparation
- Our sponsors who made travel and tournament fees accessible for all families
- The BSW Basketball board members who organized everything seamlessly

## Looking Ahead

As we celebrate this achievement, we're also looking forward. Both teams will now advance to the State Championships in April, where they'll face the top teams from other regions across the state. 

We're already back in the gym, analyzing game footage, identifying areas for improvement, and preparing for the next challenge. But we're also taking time to celebrate what these young athletes have accomplished.

### State Championship Schedule
- **Location**: Capital City Sports Complex
- **Dates**: April 19-21, 2024
- **Middle School Division**: April 19-20
- **High School Division**: April 20-21

## Words from Our Champions

**Marcus Johnson (Middle School Captain):** "This is a dream come true. We worked so hard for this, and it feels amazing to see all that work pay off. But we're not satisfied yet - we want to win State!"

**Alex Thompson (High School Captain):** "I'm so proud of this team. When we were down 15 points, we didn't panic. We trusted each other and our training. That's what BSW Basketball teaches us - never give up."

**Emily Chen (Middle School Captain):** "Our coaches always tell us that champions are made in practice, not just in games. This tournament proved that. Every drill, every sprint, every early morning session - it all mattered."

## Join the BSW Basketball Family

Inspired by these achievements? BSW Basketball has programs for athletes of all skill levels:

- **Elementary Program (Ages 6-10)**: Building fundamentals and love for the game
- **Middle School Program (Ages 11-14)**: Competitive skill development
- **High School Program (Ages 15-18)**: Elite training and college preparation
- **Summer Camps**: Intensive skill development during school breaks

**Registration is now open** for our spring session and summer camps. Early bird pricing available through March 31st.

---

*Congratulations again to all our athletes, coaches, and families. This is YOUR championship. Go BSW!*

**#BSWBasketball #RegionalChampions #NextStopState #ChampionsMindset**
    `,
  },
  {
    id: 2,
    date: 'March 8, 2024',
    category: 'Facility',
    title: 'NEW TRAINING FACILITY OPENS',
    excerpt: "We're excited to announce the opening of our second training facility with two additional courts, state-of-the-art equipment, and expanded locker rooms.",
    image: 'modern basketball training facility',
    featured: true,
  },
  {
    id: 3,
    date: 'February 28, 2024',
    category: 'Registration',
    title: 'SUMMER CAMP REGISTRATION OPEN',
    excerpt: 'Registration is now open for our intensive summer basketball camps. Early bird pricing available until April 1st. Limited spots available.',
    image: 'summer basketball camp kids',
    featured: true,
  },
  {
    id: 4,
    date: 'February 20, 2024',
    category: 'Achievement',
    title: 'THREE PLAYERS SELECTED FOR STATE TEAM',
    excerpt: 'Congratulations to our three high school players who have been selected to represent our state in the national youth basketball championship.',
    image: 'basketball players celebration',
    featured: false,
  },
  {
    id: 5,
    date: 'February 15, 2024',
    category: 'Community',
    title: 'COMMUNITY OUTREACH PROGRAM LAUNCH',
    excerpt: 'BSW Basketball launches free weekend clinics for underprivileged youth in partnership with local community centers.',
    image: 'community basketball event',
    featured: false,
  },
  {
    id: 6,
    date: 'February 10, 2024',
    category: 'Training',
    title: 'NEW STRENGTH & CONDITIONING PROGRAM',
    excerpt: 'Introducing our comprehensive strength and conditioning program designed by certified trainers to enhance athletic performance.',
    image: 'strength training basketball',
    featured: false,
  },
  {
    id: 7,
    date: 'February 5, 2024',
    category: 'Achievement',
    title: 'COACH MARTINEZ WINS COACH OF THE YEAR',
    excerpt: 'Head coach Sarah Martinez has been awarded Regional Coach of the Year for her outstanding contribution to youth basketball development.',
    image: 'coach award ceremony',
    featured: false,
  },
  {
    id: 8,
    date: 'January 28, 2024',
    category: 'Event',
    title: 'ANNUAL SKILLS SHOWCASE ANNOUNCED',
    excerpt: 'Save the date! Our annual skills showcase event will be held on April 15th. All families and community members are invited to attend.',
    image: 'basketball skills showcase',
    featured: false,
  },
  {
    id: 9,
    date: 'January 22, 2024',
    category: 'Training',
    title: 'MENTAL SKILLS WORKSHOP SERIES',
    excerpt: 'New workshop series focusing on mental toughness, confidence building, and performance psychology for young athletes.',
    image: 'mental training workshop',
    featured: false,
  },
];

export const newsCategories = ['All', 'Achievement', 'Facility', 'Registration', 'Community', 'Training', 'Event'];

// Helper function untuk get latest news (untuk homepage)
export function getLatestNews(limit: number = 3) {
  return newsArticles.slice(0, limit);
}

// Helper function untuk get featured news
export function getFeaturedNews() {
  return newsArticles.filter(article => article.featured);
}
