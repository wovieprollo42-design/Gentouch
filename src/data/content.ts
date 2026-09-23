import { images, type Img } from './images';

/* ------------------------------------------------------------------ */
/* MINISTRIES                                                          */
/* ------------------------------------------------------------------ */

export type Ministry = {
  slug: string;
  title: string;
  audience: string;
  description: string;
  image: Img;
  meets: string;
};

export const ministries: Ministry[] = [
  {
    slug: 'kids',
    title: 'Kids Ministry',
    audience: 'Birth – Grade 5',
    description:
      'A safe, joyful space where children meet Jesus through stories, worship and play, taught at exactly their level.',
    image: images.ministries.kids,
    meets: '[During all weekend services]',
  },
  {
    slug: 'youth',
    title: 'Youth Ministry',
    audience: 'Grades 6 – 12',
    description:
      'Students find real friendship, honest conversation and a faith that holds up in everyday school life.',
    image: images.ministries.youth,
    meets: '[Day & Time]',
  },
  {
    slug: 'young-adults',
    title: 'Young Adults',
    audience: 'Ages 18 – 30',
    description:
      'For students, early careers and everyone figuring out what comes next — community that walks it with you.',
    image: images.ministries.youngAdults,
    meets: '[Day & Time]',
  },
  {
    slug: 'men',
    title: 'Men’s Ministry',
    audience: 'All men',
    description:
      'Brotherhood built on accountability, prayer and the courage to lead well at home, at work and in faith.',
    image: images.ministries.men,
    meets: '[Day & Time]',
  },
  {
    slug: 'women',
    title: 'Women’s Ministry',
    audience: 'All women',
    description:
      'Women of every season gathering to study Scripture, carry one another’s burdens and grow in confidence.',
    image: images.ministries.women,
    meets: '[Day & Time]',
  },
  {
    slug: 'worship',
    title: 'Worship Ministry',
    audience: 'Musicians & creatives',
    description:
      'Singers, musicians and production volunteers using their craft to help our church encounter God together.',
    image: images.ministries.worship,
    meets: '[Rehearsal Day & Time]',
  },
  {
    slug: 'small-groups',
    title: 'Small Groups',
    audience: 'Everyone',
    description:
      'Church gets personal in a living room. Groups meet across the city to share life, study and pray.',
    image: images.ministries.groups,
    meets: '[Various days, throughout the week]',
  },
  {
    slug: 'outreach',
    title: 'Outreach',
    audience: 'Everyone',
    description:
      'Serving our neighbourhood in practical ways — meals, care packages, local partnerships and mission.',
    image: images.ministries.outreach,
    meets: '[Monthly serve days]',
  },
];

/* ------------------------------------------------------------------ */
/* SERMONS                                                             */
/* ------------------------------------------------------------------ */

export type Sermon = {
  slug: string;
  title: string;
  series: string;
  speaker: string;
  date: string;
  duration: string;
  description: string;
  image: Img;
  /** Replace with the real YouTube / Vimeo watch link. */
  videoUrl: string;
};

export const sermons: Sermon[] = [
  {
    slug: 'a-faith-that-holds',
    title: 'A Faith That Holds',
    series: '[Series Name]',
    speaker: '[Speaker Name]',
    date: '[Date]',
    duration: '[00 min]',
    description:
      'What do you do when the ground moves underneath you? A look at the kind of faith that is built to carry weight, and the God who holds it steady.',
    image: images.sermonThumb,
    videoUrl: '[Sermon Video URL]',
  },
  {
    slug: 'room-at-the-table',
    title: 'Room at the Table',
    series: '[Series Name]',
    speaker: '[Speaker Name]',
    date: '[Date]',
    duration: '[00 min]',
    description:
      'Belonging is not something you earn on your way in. It is where the journey with Jesus begins.',
    image: images.fellowship,
    videoUrl: '[Sermon Video URL]',
  },
  {
    slug: 'the-work-of-your-hands',
    title: 'The Work of Your Hands',
    series: '[Series Name]',
    speaker: '[Speaker Name]',
    date: '[Date]',
    duration: '[00 min]',
    description:
      'Your gifts were never meant to stay idle. Discovering the purpose God placed inside you, and what to do with it.',
    image: images.ministries.worship,
    videoUrl: '[Sermon Video URL]',
  },
  {
    slug: 'beyond-sunday',
    title: 'Beyond Sunday',
    series: '[Series Name]',
    speaker: '[Speaker Name]',
    date: '[Date]',
    duration: '[00 min]',
    description:
      'Faith was never designed to live inside a building. How a Monday-to-Saturday life becomes worship.',
    image: images.impact,
    videoUrl: '[Sermon Video URL]',
  },
  {
    slug: 'carried',
    title: 'Carried',
    series: '[Series Name]',
    speaker: '[Speaker Name]',
    date: '[Date]',
    duration: '[00 min]',
    description:
      'On grief, waiting and the quiet faithfulness of God in the seasons that do not make sense yet.',
    image: images.welcomeSecondary,
    videoUrl: '[Sermon Video URL]',
  },
  {
    slug: 'the-invitation',
    title: 'The Invitation',
    series: '[Series Name]',
    speaker: '[Speaker Name]',
    date: '[Date]',
    duration: '[00 min]',
    description:
      'Jesus rarely opened with an argument. He opened with an invitation, and it is still open to you.',
    image: images.story,
    videoUrl: '[Sermon Video URL]',
  },
];

export const featuredSermon = sermons[0];

/* ------------------------------------------------------------------ */
/* EVENTS                                                              */
/* ------------------------------------------------------------------ */

export type ChurchEvent = {
  slug: string;
  title: string;
  month: string;
  day: string;
  dateLabel: string;
  time: string;
  location: string;
  category: string;
  description: string;
};

export const events: ChurchEvent[] = [
  {
    slug: 'newcomers-lunch',
    title: 'Newcomers’ Lunch',
    month: '[MTH]',
    day: '[00]',
    dateLabel: '[Full Date]',
    time: '[Time]',
    location: '[Location / Room]',
    category: 'Connect',
    description:
      'New to GenTouch? Share a meal with our team, hear our story and get your questions answered. No pressure, just welcome.',
  },
  {
    slug: 'night-of-worship',
    title: 'Night of Worship',
    month: '[MTH]',
    day: '[00]',
    dateLabel: '[Full Date]',
    time: '[Time]',
    location: '[Location / Room]',
    category: 'Worship',
    description:
      'An unhurried evening of singing, Scripture and prayer together as one church family. Everyone is welcome.',
  },
  {
    slug: 'community-serve-day',
    title: 'Community Serve Day',
    month: '[MTH]',
    day: '[00]',
    dateLabel: '[Full Date]',
    time: '[Time]',
    location: '[Location / Room]',
    category: 'Outreach',
    description:
      'We take a Saturday to serve our neighbourhood together with practical help for local families and partners.',
  },
  {
    slug: 'baptism-sunday',
    title: 'Baptism Sunday',
    month: '[MTH]',
    day: '[00]',
    dateLabel: '[Full Date]',
    time: '[Time]',
    location: '[Location / Room]',
    category: 'Milestone',
    description:
      'One of the best days on our calendar. Celebrate with those taking their next step of faith, or take yours.',
  },
  {
    slug: 'mens-breakfast',
    title: 'Men’s Breakfast',
    month: '[MTH]',
    day: '[00]',
    dateLabel: '[Full Date]',
    time: '[Time]',
    location: '[Location / Room]',
    category: 'Ministry',
    description:
      'Good food, straight talk and encouragement for men in every season. Bring a friend along.',
  },
  {
    slug: 'kids-family-fun-day',
    title: 'Kids & Family Fun Day',
    month: '[MTH]',
    day: '[00]',
    dateLabel: '[Full Date]',
    time: '[Time]',
    location: '[Location / Room]',
    category: 'Family',
    description:
      'Games, food and a whole lot of noise. An easy day to bring the family and meet other parents.',
  },
];

/* ------------------------------------------------------------------ */
/* TESTIMONIALS                                                        */
/* ------------------------------------------------------------------ */

export type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: Img;
};

export const testimonials: Testimonial[] = [
  {
    name: '[First Name L.]',
    role: '[Member since 20XX]',
    quote:
      'I walked in on a Sunday not knowing a single person and honestly not expecting much. Someone learned my name that first week. A year later this is the place I call home.',
    image: images.people.one,
  },
  {
    name: '[First Name L.]',
    role: '[Small Group Leader]',
    quote:
      'Our small group carried my family through the hardest year we have had. That is not a program, that is people showing up when it would have been easier not to.',
    image: images.people.two,
  },
  {
    name: '[First Name L.]',
    role: '[Volunteer]',
    quote:
      'I always thought serving was for the people who had it together. Turns out it was the thing that helped me find my purpose in the first place.',
    image: images.people.three,
  },
];

/* ------------------------------------------------------------------ */
/* GET CONNECTED                                                       */
/* ------------------------------------------------------------------ */

export type ConnectStep = {
  title: string;
  description: string;
  href: string;
  cta: string;
};

export const connectSteps: ConnectStep[] = [
  {
    title: 'I’m New',
    description:
      'Tell us you are coming and we will have someone ready to meet you at the door on your first Sunday.',
    href: '/plan-your-visit',
    cta: 'Plan your visit',
  },
  {
    title: 'Join a Small Group',
    description:
      'Groups meet across the city through the week. Find one near you and stop doing life on your own.',
    href: '/connect#small-groups',
    cta: 'Find a group',
  },
  {
    title: 'Serve With Us',
    description:
      'From kids check-in to the worship team to the car park, there is a team that needs exactly what you bring.',
    href: '/connect#serve',
    cta: 'Start serving',
  },
  {
    title: 'Prayer Request',
    description:
      'Whatever you are carrying, you do not have to carry it quietly. Our prayer team will stand with you.',
    href: '/contact#prayer',
    cta: 'Request prayer',
  },
  {
    title: 'Become a Member',
    description:
      'Ready to put roots down? Membership is how you move from attending GenTouch to belonging to it.',
    href: '/connect#membership',
    cta: 'Learn about membership',
  },
];

/* ------------------------------------------------------------------ */
/* PLAN YOUR VISIT — FAQ                                               */
/* ------------------------------------------------------------------ */

export const visitFaqs = [
  {
    q: 'What should I wear?',
    a: 'Whatever you are comfortable in. You will see jeans and trainers next to shirts and dresses on any given Sunday. Nobody is checking, and nobody will feel out of place.',
  },
  {
    q: 'How long is a service?',
    a: 'Around [00] minutes from start to finish, including worship and the message. Plan to stay a little longer if you would like coffee and conversation afterwards.',
  },
  {
    q: 'Where do I park?',
    a: '[Parking details, e.g. free on-site parking with marked visitor bays near the main entrance.] Look for a team member in a GenTouch shirt and they will point you the right way.',
  },
  {
    q: 'What happens with my kids?',
    a: 'Kids Ministry runs during every service for children [age range]. You check your child in at the kids desk, receive a matching security tag, and collect them with it afterwards. Every volunteer is background-checked and trained.',
  },
  {
    q: 'Is the building accessible?',
    a: '[Accessibility details, e.g. step-free entry, accessible restrooms, reserved seating and hearing-assistance devices available.] Let us know in advance and we will make sure everything is ready for you.',
  },
  {
    q: 'Will I be singled out or asked for money?',
    a: 'No. We will never put a spotlight on guests, and there is no expectation for you to give. You are welcome simply to come and see.',
  },
  {
    q: 'What is the music like?',
    a: 'A live band leading a mix of modern worship songs and familiar hymns. Sing along or just take it in. Both are completely fine.',
  },
  {
    q: 'Can I come on my own?',
    a: 'Absolutely, and many people do. Tell us you are coming through the form below and we will have someone waiting to meet you by name.',
  },
];
