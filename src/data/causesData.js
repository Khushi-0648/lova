import emergencyShelterImg from '../assets/causes/emergency-shelter.jpg';
import smartHomesImg from '../assets/causes/smart-homes.jpg';
import ptsdCounselingImg from '../assets/causes/ptsd-counseling.jpg';
import foodHygieneImg from '../assets/causes/food-hygiene.jpg';
import jobTrainingImg from '../assets/causes/job-training.jpg';
import vehicleProgramImg from '../assets/causes/vehicle-program.jpg';

export const CAUSES_DATA = [
  {
    id: 'emergency-shelter',
    slug: 'emergency-shelter',
    title: 'Emergency Housing & Veteran Shelter Network',
    category: 'Housing',
    tagline: 'Providing immediate shelter, warmth, and safe transition housing for homeless heroes.',
    description: 'Over 35,000 veterans experience homelessness on any given night across the United States. League of Veterans of America provides safe, fully equipped accommodation facilities, warm meals, and transitional housing to help veterans get off the streets and onto a path of permanent independence.',
    goal: 120000,
    raised: 89450,
    donorsCount: 482,
    daysLeft: 18,
    image: emergencyShelterImg,
    featured: true,
    impactPoints: [
      'Provides 45 days of immediate stable shelter and warm bedding',
      'Nutritious meal program serving breakfast, lunch, and dinner',
      'Case managers assisting with permanent affordable housing placement',
      'Assistance with VA benefits and healthcare enrollment'
    ],
    updates: [
      { date: 'September 15, 2026', title: 'New Florida Veteran Wing Opened', content: 'With your generous support, we opened 12 additional transitional rooms in South Florida!' },
      { date: 'August 28, 2026', title: 'Emergency Winter Supplies Distributed', content: 'Distributed over 300 emergency cold-weather kits to veterans in need.' }
    ]
  },
  {
    id: 'smart-homes-adaptation',
    slug: 'smart-homes-adaptation',
    title: 'Smart Homes for Severely Injured & Purple Heart Vets',
    category: 'Smart Homes',
    tagline: 'Custom building and modifying homes with adaptive technology for disabled veterans.',
    description: 'Our Smart Home Program builds specially adapted, mortgage-free homes and executes high-impact modifications (wheelchair ramps, automated doors, roll-in showers, voice-activated controls) for our most severely wounded combat veterans, restoring their autonomy and dignity.',
    goal: 250000,
    raised: 198300,
    donorsCount: 910,
    daysLeft: 34,
    image: smartHomesImg,
    featured: true,
    impactPoints: [
      'Wheelchair-accessible architectural redesigns and zero-step entries',
      'Automated smart-home lighting, temperature, and door security',
      'Specialized hydrotherapy and physical rehabilitation fixtures',
      'Support for families and dedicated caregivers'
    ],
    updates: [
      { date: 'September 02, 2026', title: 'Sgt. Taylor Receives Adapted Residence', content: 'Double-amputee Army veteran Sgt. Taylor moved into his barrier-free custom smart home.' }
    ]
  },
  {
    id: 'wounded-warriors-ptsd',
    slug: 'wounded-warriors-ptsd',
    title: 'Combat Wounded & Mental Health Recovery (PTSD)',
    category: 'Healthcare',
    tagline: 'Confidential psychological care, peer support, and holistic therapy programs.',
    description: 'Invisible wounds can be just as debilitating as physical injuries. LOVOA connects combat veterans dealing with PTSD, depression, and traumatic brain injury (TBI) to certified clinical counselors, service dog training, and peer-to-peer healing circles with no red tape.',
    goal: 85000,
    raised: 62400,
    donorsCount: 340,
    daysLeft: 22,
    image: ptsdCounselingImg,
    featured: true,
    impactPoints: [
      '100% confidential counseling sessions with veteran-specialist therapists',
      'PTSD companion and service dog placement sponsorships',
      'Art, outdoor wilderness retreat, and equine therapy workshops',
      '24/7 crisis intervention response network'
    ],
    updates: [
      { date: 'August 14, 2026', title: 'Service Dog Certification Cohort', content: '5 combat veterans were successfully paired with trained emotional support service dogs.' }
    ]
  },
  {
    id: 'fallen-first-responders',
    slug: 'fallen-first-responders',
    title: 'Families of Fallen Heroes & First Responders',
    category: 'Family Relief',
    tagline: 'Direct emergency grants, scholarship assistance, and bereavement care.',
    description: 'When heroes make the ultimate sacrifice, their families must never feel abandoned. We provide financial emergency safety nets, education scholarships for surviving children, and emotional grief support to families of fallen military members and first responders.',
    goal: 60000,
    raised: 47250,
    donorsCount: 228,
    daysLeft: 41,
    image: foodHygieneImg,
    featured: false,
    impactPoints: [
      'Immediate crisis relief grants for living expenses and mortuary support',
      'Higher education and trade school scholarship stipends for children',
      'Peer mentorship networks for surviving spouses and dependents'
    ],
    updates: [
      { date: 'July 29, 2026', title: 'Annual Fallen Hero Scholarship Awards', content: '12 college scholarships were distributed to children of fallen service members.' }
    ]
  },
  {
    id: 'career-training',
    slug: 'career-training',
    title: 'Veteran Career Re-entry & Tech Skills Academy',
    category: 'Empowerment',
    tagline: 'Bridging the gap between military service and high-paying civilian careers.',
    description: 'Transitioning from the military to civilian workplace can be challenging. We partner with tech companies, logistics firms, and trade unions to offer resume workshops, certifications, interview coaching, and paid apprenticeships.',
    goal: 50000,
    raised: 38900,
    donorsCount: 195,
    daysLeft: 12,
    image: jobTrainingImg,
    featured: false,
    impactPoints: [
      'Free certification vouchers for IT, cybersecurity, and commercial driving',
      'Executive 1-on-1 mentorship with corporate veteran leaders',
      'Professional wardrobe and interview laptop assistance programs'
    ],
    updates: [
      { date: 'August 01, 2026', title: 'Summer Cohort 94% Placement Rate', content: '42 veterans secured full-time civilian roles with an average starting salary of $68,000.' }
    ]
  },
  {
    id: 'vehicle-donation-program',
    slug: 'vehicle-donation-program',
    title: 'Nationwide Vehicle Donation for Veteran Housing',
    category: 'Vehicle Donation',
    tagline: 'Turn your unwanted car, truck, RV, or boat into life-saving shelter for veterans.',
    description: 'We accept running and non-running vehicle donations across all 50 states. We handle free towing, manage title transfers, and maximize your IRS tax deduction while funding vital veteran programs.',
    goal: 150000,
    raised: 112500,
    donorsCount: 512,
    daysLeft: 60,
    image: vehicleProgramImg,
    featured: true,
    impactPoints: [
      'Free pickup and towing within 24–48 hours in all 50 states',
      'Running or non-running, cars, trucks, motorcycles, RVs, and boats',
      '100% tax-deductible receipt for fair market value',
      'Proceeds directly finance adaptive shelter and mobility programs'
    ],
    updates: [
      { date: 'September 10, 2026', title: 'Fleet of 85 Donated Vehicles Processed', content: 'Vehicle auctions this month generated $94,000 for emergency shelter operations.' }
    ]
  }
];
