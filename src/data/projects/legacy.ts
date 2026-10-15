// Older portfolio work carried over from the legacy site.
// These are intentionally lightweight: card details plus a header, hero image, and description.

export interface LegacyProject {
  slug: string;
  title: string;
  role: string;
  company: string;
  year?: string;
  summary: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  // Thumbnail used on the landing page card (cropped to 4:3)
  thumbSrc: string;
  // Additional images stacked below the description
  images?: Array<{ src: string; alt: string; caption?: string }>;
}

export const legacyProjects: LegacyProject[] = [
  {
    slug: "google-one-benefits",
    title: "Google One Benefits",
    role: "Design Lead",
    company: "Google",
    year: "2020",
    summary: "Increased engagement rate with new cards and grouped categories by 10%",
    description:
      "Google One is a subscription plan that gives you more storage to use across Google Drive, Gmail, and Google Photos. Members can enjoy special offers and advanced features across Google such as premium photo editing tools, dark web monitoring, premium video calling features, VPN protection, Google Store perks, and more. This new design offers an extensible framework for organizing benefits that helps improve discoverability and clearly communicates the value of the Google One membership.",
    imageSrc: "/images/legacy/google-one-benefits.jpg",
    imageAlt: "Google One Benefits project",
    thumbSrc: "/images/legacy/thumbs/thumb-g1-benefits.jpg",
    images: [
      { src: "/images/legacy/google-one-benefits/02.jpg", alt: "Google One Benefits design, image 1 of 2" },
      { src: "/images/legacy/google-one-benefits/03.jpg", alt: "Google One Benefits design, image 2 of 2" },
    ],
  },
  {
    slug: "google-one-support",
    title: "Google One Support",
    role: "Lead Design",
    company: "Google",
    year: "2019",
    summary: "Personalized, white-glove product support for Google One members",
    description:
      "Google One is a membership service for expanded storage that includes exclusive benefits, white-glove personalized product support, security features, and family-sharing plans. This new design provides more relevant and personalized content associated with Google products that members actually use. Offering quality support, self-service content, and helpful, curated resolution options reduces support cost and increases customer loyalty.",
    imageSrc: "/images/legacy/google-one-support.jpg",
    imageAlt: "Google One Support project",
    thumbSrc: "/images/legacy/thumbs/thumb-g1-support.jpg",
    images: [
      { src: "/images/legacy/google-one-support/02.jpg", alt: "Google One Support design, image 1 of 2" },
      { src: "/images/legacy/google-one-support/03.jpg", alt: "Google One Support design, image 2 of 2" },
    ],
  },
  {
    slug: "sweet-spot-mobile",
    title: "Sweet Spot Mobile",
    role: "UX UI Visual Design",
    company: "Personal Project",
    year: "2018",
    summary: "Takes the guesswork out of insulin dosing for people living with type 1 diabetes",
    description:
      "Type 1 diabetes is a 24-7 balancing act between food, life events, and your blood sugar. Being able to accurately calculate and display the right amount of insulin one must administer at any given time is a complicated and cumbersome process often susceptible to human error. Sweet Spot takes the burden away by streamlining the process and doing the calculations for you based on current blood glucose readings, carb intake, data from previous entries, and personalized physician guidelines. It makes living with type 1 diabetes a little bit sweeter.",
    imageSrc: "/images/legacy/sweet-spot-mobile.jpg",
    imageAlt: "Sweet Spot Mobile project",
    thumbSrc: "/images/legacy/thumbs/sweet-spot-mobile.jpg",
    images: [
      { src: "/images/legacy/sweet-spot-mobile/02.jpg", alt: "Sweet Spot Mobile design, image 1 of 3" },
      { src: "/images/legacy/sweet-spot-mobile/03.jpg", alt: "Sweet Spot Mobile design, image 2 of 3" },
      { src: "/images/legacy/sweet-spot-mobile/04.jpg", alt: "Sweet Spot Mobile design, image 3 of 3" },
    ],
  },
  {
    slug: "ge-intellistream",
    title: "GE Intellistream",
    role: "Product Design",
    company: "Baker Hughes",
    year: "2017",
    summary: "Enterprise fleet management dashboard for monitoring equipment health",
    description:
      "Enterprise Impact is a System 1 Fleet Management web-based dashboard providing a single, secure access point for monitoring equipment and instrument health from the machine to fleet levels. Through the application of analytics to instrument and software alarms, it helps users quickly identify equipment and instrument health issues. Fleet Management increases accessibility, usability, and adds new capabilities to the System 1 suite.",
    imageSrc: "/images/legacy/ge-intellistream.jpg",
    imageAlt: "GE Intellistream Enterprise Fleet Management project",
    thumbSrc: "/images/legacy/thumbs/ge-intellistream.jpg",
    images: [
      { src: "/images/legacy/ge-intellistream/02.jpg", alt: "GE Intellistream design, image 1 of 3" },
      { src: "/images/legacy/ge-intellistream/03.jpg", alt: "GE Intellistream design, image 2 of 3" },
      { src: "/images/legacy/ge-intellistream/04.jpg", alt: "GE Intellistream design, image 3 of 3" },
    ],
  },
  {
    slug: "percolate-analytics",
    title: "Percolate Analytics",
    role: "Product Design",
    company: "Percolate",
    year: "2016",
    summary: "Analytics dashboards that turn multi-channel marketing data into decisions",
    description:
      "Percolate is a web platform that powers multi-channel marketing, allowing for visibility across marketing initiatives, planning, production, distribution, and measurement. Percolate Analytics organizes and presents data into meaningful patterns and trends in the form of dashboards. The Analytics dashboards, composed of charts, graphs, tables, and reports, allow marketing teams to quickly assess campaign strategy and make informed, research-backed decisions.",
    imageSrc: "/images/legacy/percolate-analytics.jpg",
    imageAlt: "Percolate Analytics project",
    thumbSrc: "/images/legacy/thumbs/percolate-analytics.jpg",
    images: [
      { src: "/images/legacy/percolate-analytics/02.jpg", alt: "Percolate Analytics design, image 1 of 3" },
      { src: "/images/legacy/percolate-analytics/03.jpg", alt: "Percolate Analytics design, image 2 of 3" },
      { src: "/images/legacy/percolate-analytics/04.jpg", alt: "Percolate Analytics design, image 3 of 3" },
    ],
  },
  {
    slug: "meta-interview-buddy-bot",
    title: "Interview Buddy Bot",
    role: "Product Design",
    company: "Meta",
    year: "2015",
    summary: "A Messenger bot that helps interviewers prep, run, and submit feedback",
    description:
      "At Facebook, interviewers for engineering roles have multiple interviews in one day and do not have a convenient and easy way to view candidate information, interview details, or a way to provide quick written feedback during or after their interviews. This Messenger bot makes it easier for interviewers to conduct and manage their interviews by providing ways to learn about candidates, all the details in their interview loop, and an easy, more convenient, and efficient way to submit feedback along with code pics.",
    imageSrc: "/images/legacy/meta-interview-buddy-bot.jpg",
    imageAlt: "Meta Interview Buddy Bot project",
    thumbSrc: "/images/legacy/thumbs/meta-interview-buddy-bot.jpg",
    images: [
      { src: "/images/legacy/meta-interview-buddy-bot/02.jpg", alt: "Interview Buddy Bot design, image 1 of 3" },
      { src: "/images/legacy/meta-interview-buddy-bot/03.jpg", alt: "Interview Buddy Bot design, image 2 of 3" },
      { src: "/images/legacy/meta-interview-buddy-bot/04.jpg", alt: "Interview Buddy Bot design, image 3 of 3" },
    ],
  },
  {
    slug: "edutopia-mobile",
    title: "Edutopia Mobile",
    role: "UX UI Visual Design",
    company: "Edutopia",
    year: "2015",
    summary: "A mobile tool to find, collect, and collaborate on what works in K-12 education",
    description:
      "Edutopia is an online community that increases knowledge, sharing, and adoption of what works in K-12 education. The emphasis lies in core strategies such as project-based learning, comprehensive assessment, integrated studies, social and emotional learning, educational leadership and teacher development, and technology integration. Edutopia mobile is an effort to provide a tool to find, collect, and collaborate, bridging the gap between a pure media source and a cohesive tool for actionable inspiration.",
    imageSrc: "/images/legacy/edutopia-mobile.jpg",
    imageAlt: "Edutopia Mobile project",
    thumbSrc: "/images/legacy/thumbs/edutopia-mobile.jpg",
    images: [
      { src: "/images/legacy/edutopia-mobile/02.jpg", alt: "Edutopia Mobile design, image 1 of 3" },
      { src: "/images/legacy/edutopia-mobile/03.jpg", alt: "Edutopia Mobile design, image 2 of 3" },
      { src: "/images/legacy/edutopia-mobile/04.jpg", alt: "Edutopia Mobile design, image 3 of 3" },
    ],
  },
  {
    slug: "google-express-material-design",
    title: "Google Express",
    role: "UI Prototypes",
    company: "Google",
    year: "2015",
    summary: "A Material Design redesign of Google's same-day shopping service",
    description:
      "Google Express is a same-day shopping service from Google that taps into popular retailers such as REI, Target, and Whole Foods among others and gets items delivered in just a few hours. Material Design is a concept based on the fundamentals of light, surface, and movement, and is the single underlying system that allows a unified experience across platforms and devices on all Google products. Google Express went through a complete redesign effort in order to bring a unified visual language that synthesizes the classic principles of good design.",
    imageSrc: "/images/legacy/google-express-material-design.jpg",
    imageAlt: "Google Express Material Design project",
    thumbSrc: "/images/legacy/thumbs/google-express-material-design.jpg",
    images: [
      { src: "/images/legacy/google-express-material-design/02.jpg", alt: "Google Express design, image 1 of 3" },
      { src: "/images/legacy/google-express-material-design/03.jpg", alt: "Google Express design, image 2 of 3" },
      { src: "/images/legacy/google-express-material-design/04.jpg", alt: "Google Express design, image 3 of 3" },
    ],
  },
  {
    slug: "google-express-editorial",
    title: "Google Editorial",
    role: "UI Visual Design",
    company: "Google",
    year: "2014",
    summary: "Modular editorial pages that streamline marketing content for Google Express",
    description:
      "Google Express is a same-day shopping service from Google that taps into popular retailers such as REI, Target, and Whole Foods among others and gets items delivered in just a few hours. The Google Express editorial pages were a collaborative effort to modularize and streamline content in an elegant way. With the reuse of modules and a sticky sub navigation, it became much easier to serve up appropriate content based on ongoing marketing needs.",
    imageSrc: "/images/legacy/google-express-editorial.jpg",
    imageAlt: "Google Express Editorial project",
    thumbSrc: "/images/legacy/thumbs/google-express-editorial.jpg",
    images: [
      { src: "/images/legacy/google-express-editorial/02.jpg", alt: "Google Editorial design, image 1 of 2" },
      { src: "/images/legacy/google-express-editorial/03.jpg", alt: "Google Editorial design, image 2 of 2" },
    ],
  },
  {
    slug: "nbc-sports-olympics",
    title: "NBC Sports Olympics",
    role: "UX UI Visual Design",
    company: "Adobe",
    year: "2013",
    summary: "An iPad app for watching every event of the Sochi Olympics live and on demand",
    description:
      "NBC Olympics is responsible for producing, programming, and promoting Olympic coverage. Adobe Primetime powers the Games across desktops and mobile devices with its TV publishing and monetization platform. Subscribers are able to view all competitions, highlights, and other content live and on demand online and on the NBC Sports Live Extra app. This iPad app leverages both the NBC Sports content and the Primetime video engine frameworks.",
    imageSrc: "/images/legacy/nbc-sports-olympics.jpg",
    imageAlt: "NBC Sports Olympics tablet app project",
    thumbSrc: "/images/legacy/thumbs/nbc-sports-olympics.jpg",
    images: [
      { src: "/images/legacy/nbc-sports-olympics/02.jpg", alt: "NBC Sports Olympics design, image 1 of 3" },
      { src: "/images/legacy/nbc-sports-olympics/03.jpg", alt: "NBC Sports Olympics design, image 2 of 3" },
      { src: "/images/legacy/nbc-sports-olympics/04.jpg", alt: "NBC Sports Olympics design, image 3 of 3" },
    ],
  },
  {
    slug: "pixlr-o-matic-mobile",
    title: "Pixlr-o-matic Mobile",
    role: "UX UI Visual Design",
    company: "Autodesk",
    year: "2012",
    summary: "An iPhone redesign blending Pixlr-o-matic and Pixlr Express photo editing",
    description:
      "With more than 600 effects, overlays, and borders to personalize any image, Pixlr-o-matic lets you add fun retro effects to your photos in 3 simple steps by transforming photos into cool-looking vintage images. This is a fun and free photo editor that lets you quickly crop, resize, and fix any picture. This is an iPhone visual and user interface redesign that blends the capabilities of Pixlr-o-matic and Pixlr Express.",
    imageSrc: "/images/legacy/pixlr-o-matic-mobile.jpg",
    imageAlt: "Pixlr-o-matic Mobile project",
    thumbSrc: "/images/legacy/thumbs/pixlr-o-matic-mobile.jpg",
    images: [
      { src: "/images/legacy/pixlr-o-matic-mobile/02.jpg", alt: "Pixlr-o-matic Mobile design, image 1 of 4" },
      { src: "/images/legacy/pixlr-o-matic-mobile/03.jpg", alt: "Pixlr-o-matic Mobile design, image 2 of 4" },
      { src: "/images/legacy/pixlr-o-matic-mobile/04.jpg", alt: "Pixlr-o-matic Mobile design, image 3 of 4" },
      { src: "/images/legacy/pixlr-o-matic-mobile/05.jpg", alt: "Pixlr-o-matic Mobile design, image 4 of 4" },
    ],
  },
  {
    slug: "mimi-mobile",
    title: "MIMI Mobile",
    role: "UX UI Visual Design",
    company: "Autodesk",
    year: "2011",
    summary: "Capture style and design inspiration on the go and add it to your stylebook",
    description:
      "MIMI™ is a meeting place and workspace for people who love style and design. People who are into home design or fashion, or just want to share some cool photography, can come to the MIMI™ website and get inspired, organize their vision, and express their own unique style. MIMI™ mobile offers the opportunity to capture ideas and inspiration on the go. All you do is snap a pic, apply some cool effects, and add it to your own stylebook.",
    imageSrc: "/images/legacy/mimi-mobile.jpg",
    imageAlt: "MIMI Mobile project",
    thumbSrc: "/images/legacy/thumbs/mimi-mobile.jpg",
    images: [
      { src: "/images/legacy/mimi-mobile/02.jpg", alt: "MIMI Mobile design, image 1 of 3" },
      { src: "/images/legacy/mimi-mobile/03.jpg", alt: "MIMI Mobile design, image 2 of 3" },
      { src: "/images/legacy/mimi-mobile/04.jpg", alt: "MIMI Mobile design, image 3 of 3" },
    ],
  },
  {
    slug: "disney-wait-times",
    title: "Disney Wait Times Mobile",
    role: "UX UI Visual Design",
    company: "Disney",
    year: "2011",
    summary: "Real-time, location-based attraction wait times for Walt Disney World",
    description:
      "Do you want to know the attraction wait times for Walt Disney World covering the Magic Kingdom, Epcot, Hollywood Studios, and Animal Kingdom? Planning one's day is the biggest challenge anyone runs into while visiting these parks. You can literally waste valuable hours standing in line all day long. This GPS-based app gives you access to real-time wait time information for nearby attractions based on your current location.",
    imageSrc: "/images/legacy/disney-wait-times.jpg",
    imageAlt: "Disney Parks Wait Times Mobile project",
    thumbSrc: "/images/legacy/thumbs/disney-wait-times.jpg",
    images: [
      { src: "/images/legacy/disney-wait-times/02.jpg", alt: "Disney Wait Times Mobile design, image 1 of 4" },
      { src: "/images/legacy/disney-wait-times/03.jpg", alt: "Disney Wait Times Mobile design, image 2 of 4" },
      { src: "/images/legacy/disney-wait-times/04.jpg", alt: "Disney Wait Times Mobile design, image 3 of 4" },
      { src: "/images/legacy/disney-wait-times/05.jpg", alt: "Disney Wait Times Mobile design, image 4 of 4" },
    ],
  },
  {
    slug: "the-muppets-mobile",
    title: "The Muppets Mobile",
    role: "UI Visual Design",
    company: "Disney",
    year: "2011",
    summary: "Explore the cast, films, and galleries, and even build your own Muppet",
    description:
      "The charm, the zaniness, the corny jokes, the showbiz clichés: every element of The Muppet Show holds up 30 years after Jim Henson's legendary variety series' debut season. This mobile app aims to entertain and educate about this great franchise. Learn about all the cast members and the films they've been in, go through photo galleries, and even build your own Muppet.",
    imageSrc: "/images/legacy/the-muppets-mobile.jpg",
    imageAlt: "The Muppets Mobile project",
    thumbSrc: "/images/legacy/thumbs/the-muppets-mobile.jpg",
    images: [
      { src: "/images/legacy/the-muppets-mobile/02.jpg", alt: "The Muppets Mobile design, image 1 of 4" },
      { src: "/images/legacy/the-muppets-mobile/03.jpg", alt: "The Muppets Mobile design, image 2 of 4" },
      { src: "/images/legacy/the-muppets-mobile/04.jpg", alt: "The Muppets Mobile design, image 3 of 4" },
      { src: "/images/legacy/the-muppets-mobile/05.jpg", alt: "The Muppets Mobile design, image 4 of 4" },
    ],
  },
  {
    slug: "world-of-color",
    title: "Disney's World of Color",
    role: "UI Visual Design",
    company: "Walt Disney Imagineering",
    year: "2010",
    summary: "An interactive kaleidoscope tablet prototype inspired by World of Color",
    description:
      "An adapted kaleidoscope interactive experience based on World of Color, the nighttime water spectacular that weaves water, color, fire, and light into a kaleidoscope of fantasy and imagination. More than 1,000 jets of water form incredible shapes in time to the music as Disney characters come to life on a shimmering veil of mist.",
    imageSrc: "/images/legacy/world-of-color.jpg",
    imageAlt: "World of Color Kaleidoscope tablet prototype",
    thumbSrc: "/images/legacy/thumbs/world-of-color.jpg",
    images: [
      { src: "/images/legacy/world-of-color/02.jpg", alt: "Disney's World of Color design, image 1 of 5" },
      { src: "/images/legacy/world-of-color/03.jpg", alt: "Disney's World of Color design, image 2 of 5" },
      { src: "/images/legacy/world-of-color/04.jpg", alt: "Disney's World of Color design, image 3 of 5" },
      { src: "/images/legacy/world-of-color/05.jpg", alt: "Disney's World of Color design, image 4 of 5" },
      { src: "/images/legacy/world-of-color/06.jpg", alt: "Disney's World of Color design, image 5 of 5" },
    ],
  },
  {
    slug: "dcooking-mobile",
    title: "dCooking Mobile",
    role: "UI & Visual Design",
    company: "Personal Project",
    year: "2009",
    summary: "Diabetes-friendly recipes and meal plans that simplify healthy eating",
    description:
      "Diabetes is a 24-7 balancing act between food and your blood sugar. Fortunately, diabetes is not a life sentence to a rigid, deprivation-oriented meal plan. The best diet for a person with diabetes is the same healthy diet that's best for everyone. With quick and easy meal plans along with diabetes-friendly recipes, you can take the guesswork out of healthy eating. This mobile app intends to inspire and help solve the everyday problem of healthy meal selection for a diabetic diet.",
    imageSrc: "/images/legacy/dcooking-mobile.jpg",
    imageAlt: "dCooking Mobile project",
    thumbSrc: "/images/legacy/thumbs/dcooking-mobile.jpg",
    images: [
      { src: "/images/legacy/dcooking-mobile/02.jpg", alt: "dCooking Mobile design, image 1 of 2" },
      { src: "/images/legacy/dcooking-mobile/03.jpg", alt: "dCooking Mobile design, image 2 of 2" },
    ],
  },
  {
    slug: "adidas-women-microsite",
    title: "Adidas Women Microsite",
    role: "UI Visual Design",
    company: "Adidas",
    year: "2008",
    summary: "A clean, engaging microsite for the Adidas women's performance line",
    description:
      "The guiding principle of the Adidas Sport Division is to equip all athletes to achieve their \"impossible\". The Adidas brand brings its passion for great products to athletes in all sports. The challenge was to create a clean, engaging, and functional GUI that delivers the performance and the style of the Adidas brand. The site needed to translate the core elements of the performance clothing line, which commits to looking and feeling your personal best in apparel that keeps you stylish and cool.",
    imageSrc: "/images/legacy/adidas-women-microsite.jpg",
    imageAlt: "Adidas Women Microsite project",
    thumbSrc: "/images/legacy/thumbs/adidas-women-microsite.jpg",
    images: [
      { src: "/images/legacy/adidas-women-microsite/02.jpg", alt: "Adidas Women Microsite design, image 1 of 3" },
      { src: "/images/legacy/adidas-women-microsite/03.jpg", alt: "Adidas Women Microsite design, image 2 of 3" },
      { src: "/images/legacy/adidas-women-microsite/04.jpg", alt: "Adidas Women Microsite design, image 3 of 3" },
    ],
  },
  {
    slug: "lululemon-website",
    title: "Lululemon Athletica Website",
    role: "UI Visual Design",
    company: "Lululemon",
    year: "2007",
    summary: "A website for the community hub of healthy, powerful living",
    description:
      "Founded in 1998, Lululemon's first real store opened in the beach area of Vancouver, BC, called Kitsilano, in November of 2000. The idea was to have the store be a community hub where people could learn and discuss the physical aspects of healthy living, from yoga and diet to running and cycling, as well as the mental aspects of living a powerful life of possibilities.",
    imageSrc: "/images/legacy/lululemon-website.jpg",
    imageAlt: "Lululemon Athletica Website project",
    thumbSrc: "/images/legacy/thumbs/lululemon-website.jpg",
    images: [
      { src: "/images/legacy/lululemon-website/02.jpg", alt: "Lululemon Athletica Website design, image 1 of 2" },
      { src: "/images/legacy/lululemon-website/03.jpg", alt: "Lululemon Athletica Website design, image 2 of 2" },
    ],
  },
];

export const legacyProjectsBySlug: Record<string, LegacyProject> = Object.fromEntries(
  legacyProjects.map((project) => [project.slug, project])
);
