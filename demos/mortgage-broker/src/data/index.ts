import { Service, Testimonial, Calculator, TeamMember } from '../types';

export const services: Service[] = [
  {
    id: 'home-loans',
    title: 'Home Loans',
    description: ' competitive rates and flexible terms for your dream home. We work with multiple lenders to find the best solution for your needs.',
    icon: 'Home',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&h=600&fit=crop'
  },
  {
    id: 'refinancing',
    title: 'Refinancing',
    description: 'Take advantage of lower interest rates or access your home equity. We analyze your current loan and find better options.',
    icon: 'RefreshCw',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800&h=600&fit=crop'
  },
  {
    id: 'first-home-buyer',
    title: 'First Home Buyer',
    description: 'Navigate the process with confidence. We guide you through first home buyer grants, incentives, and loan options.',
    icon: 'Key',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&h=600&fit=crop'
  },
  {
    id: 'property-investment',
    title: 'Property Investment',
    description: 'Build your property portfolio with strategic investment loans. We understand investment strategies and tax implications.',
    icon: 'TrendingUp',
    image: 'https://images.unsplash.com/photo-1560523161-789ded43fc8c?w=800&h=600&fit=crop'
  }
];

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    role: 'First Home Buyer',
    content: 'HomeLoan Pro made buying my first home so much easier. They explained everything clearly and found me a great rate. Highly recommend!',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop'
  },
  {
    id: '2',
    name: 'Michael Chen',
    role: 'Property Investor',
    content: 'Professional service and excellent communication. They helped me refinance and saved me thousands over the life of the loan.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop'
  },
  {
    id: '3',
    name: 'Emma Wilson',
    role: 'Homeowner',
    content: 'The team at HomeLoan Pro were fantastic. They were patient, knowledgeable, and helped us every step of the way.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop'
  }
];

export const calculators: Calculator[] = [
  {
    id: 'borrowing-power',
    title: 'Borrowing Power',
    description: 'Estimate how much you can borrow based on your income and expenses.',
    icon: 'DollarSign'
  },
  {
    id: 'repayment',
    title: 'Loan Repayment',
    description: 'Calculate your monthly repayments for different loan amounts and terms.',
    icon: 'Calculator'
  },
  {
    id: 'stamp-duty',
    title: 'Stamp Duty',
    description: 'Estimate the stamp duty costs for your property purchase.',
    icon: 'FileText'
  },
  {
    id: 'comparison-rate',
    title: 'Comparison Rate',
    description: 'Compare different loans to see the true cost including fees.',
    icon: 'BarChart'
  }
];

export const team: TeamMember[] = [
  {
    id: '1',
    name: 'David Thompson',
    role: 'Senior Mortgage Broker',
    bio: '15+ years experience in home lending. Specializes in complex financial situations and investment properties.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop'
  },
  {
    id: '2',
    name: 'Lisa Rodriguez',
    role: 'Mortgage Broker',
    bio: 'Helping first home buyers achieve their dreams for 8 years. Expert in government grants and incentives.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop'
  },
  {
    id: '3',
    name: 'James Park',
    role: 'Finance Specialist',
    bio: 'Specializes in refinancing and property investment. CPA background ensures comprehensive financial advice.',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop'
  }
];
