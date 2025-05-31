import { CareerInsight } from './schema';

// Map of careers to their unique arcana names
export const arcanaNames: Record<string, string> = {
  'Firefighter': 'The Phoenix',
  'Tech Startup Founder': 'The Innovator',
  'Ethical Hacker': 'The Technomancer',
  'Fashion Designer': 'The Artisan',
  'Chief Operating Officer': 'The Strategist',
  'Resident Services Manager': 'The Guardian',
  'Development Director': 'The Alchemist',
  'Executive Chef': 'The Conductor',
  'Flight Nurse': 'The Lifeline',
  'Barista': 'The Harmonizer',
  'Adult Education Administrator': 'The Mentor',
  'Nonprofit Director': 'The Visionary',
  'Media Producer': 'The Storyweaver',
  'Marine Biologist': 'The Explorer',
  'Journalist': 'The Scribe',
  'Chef Instructor': 'The Maestro',
  'Aquarium Interpreter': 'The Envoy',
  'Marketing Director': 'The Herald',
  'Artist & Educator': 'The Muse',
  'School Principal': 'The Steward',
  'Career Development Advisor': 'The Seer',
  'College Counselor': 'The Navigator',
  'HR Generalist': 'The Mediator',
  'Early Childhood Educator': 'The Advocate',
  'State Senator': 'The Legislator'
};

// Function to get the arcana name for a career insight
export function getArcanaName(insight: CareerInsight): string {
  return arcanaNames[insight.career];
} 