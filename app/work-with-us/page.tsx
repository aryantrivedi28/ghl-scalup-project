'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import {
  TrendingUp,
  Send,
  FileText,
  FolderOpen,
  Rocket,
  CheckCircle,
  Plus,
  X,
  Upload,
  Briefcase,
  Globe,
  Users,
  Award,
  ArrowRight,
  ChevronRight,
  Check,
  ArrowLeft,
  ArrowRightCircle,
  User,
  Brain,
  DollarSign,
  Search
} from 'lucide-react';

// Types
interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  country: string;
  phoneCode: string;
  experienceLevel: string;
  expertiseArea: string;
  customExpertise: string; // New field for custom expertise
  otherExpertise: string;
  lookingFor: string;
  rate: string;
  portfolioLink: string;
  specialisations: string;
  availability: string;
  extraInfo: string;
}

// Country data with phone codes
interface CountryOption {
  code: string;
  name: string;
  phoneCode: string;
}

const countries: CountryOption[] = [
  { code: 'AF', name: 'Afghanistan', phoneCode: '+93' },
  { code: 'AL', name: 'Albania', phoneCode: '+355' },
  { code: 'DZ', name: 'Algeria', phoneCode: '+213' },
  { code: 'AD', name: 'Andorra', phoneCode: '+376' },
  { code: 'AO', name: 'Angola', phoneCode: '+244' },
  { code: 'AG', name: 'Antigua and Barbuda', phoneCode: '+1' },
  { code: 'AR', name: 'Argentina', phoneCode: '+54' },
  { code: 'AM', name: 'Armenia', phoneCode: '+374' },
  { code: 'AU', name: 'Australia', phoneCode: '+61' },
  { code: 'AT', name: 'Austria', phoneCode: '+43' },
  { code: 'AZ', name: 'Azerbaijan', phoneCode: '+994' },
  { code: 'BS', name: 'Bahamas', phoneCode: '+1' },
  { code: 'BH', name: 'Bahrain', phoneCode: '+973' },
  { code: 'BD', name: 'Bangladesh', phoneCode: '+880' },
  { code: 'BB', name: 'Barbados', phoneCode: '+1' },
  { code: 'BY', name: 'Belarus', phoneCode: '+375' },
  { code: 'BE', name: 'Belgium', phoneCode: '+32' },
  { code: 'BZ', name: 'Belize', phoneCode: '+501' },
  { code: 'BJ', name: 'Benin', phoneCode: '+229' },
  { code: 'BT', name: 'Bhutan', phoneCode: '+975' },
  { code: 'BO', name: 'Bolivia', phoneCode: '+591' },
  { code: 'BA', name: 'Bosnia and Herzegovina', phoneCode: '+387' },
  { code: 'BW', name: 'Botswana', phoneCode: '+267' },
  { code: 'BR', name: 'Brazil', phoneCode: '+55' },
  { code: 'BN', name: 'Brunei', phoneCode: '+673' },
  { code: 'BG', name: 'Bulgaria', phoneCode: '+359' },
  { code: 'BF', name: 'Burkina Faso', phoneCode: '+226' },
  { code: 'BI', name: 'Burundi', phoneCode: '+257' },
  { code: 'KH', name: 'Cambodia', phoneCode: '+855' },
  { code: 'CM', name: 'Cameroon', phoneCode: '+237' },
  { code: 'CA', name: 'Canada', phoneCode: '+1' },
  { code: 'CV', name: 'Cape Verde', phoneCode: '+238' },
  { code: 'CF', name: 'Central African Republic', phoneCode: '+236' },
  { code: 'TD', name: 'Chad', phoneCode: '+235' },
  { code: 'CL', name: 'Chile', phoneCode: '+56' },
  { code: 'CN', name: 'China', phoneCode: '+86' },
  { code: 'CO', name: 'Colombia', phoneCode: '+57' },
  { code: 'KM', name: 'Comoros', phoneCode: '+269' },
  { code: 'CG', name: 'Congo', phoneCode: '+242' },
  { code: 'CR', name: 'Costa Rica', phoneCode: '+506' },
  { code: 'HR', name: 'Croatia', phoneCode: '+385' },
  { code: 'CU', name: 'Cuba', phoneCode: '+53' },
  { code: 'CY', name: 'Cyprus', phoneCode: '+357' },
  { code: 'CZ', name: 'Czech Republic', phoneCode: '+420' },
  { code: 'DK', name: 'Denmark', phoneCode: '+45' },
  { code: 'DJ', name: 'Djibouti', phoneCode: '+253' },
  { code: 'DM', name: 'Dominica', phoneCode: '+1' },
  { code: 'DO', name: 'Dominican Republic', phoneCode: '+1' },
  { code: 'EC', name: 'Ecuador', phoneCode: '+593' },
  { code: 'EG', name: 'Egypt', phoneCode: '+20' },
  { code: 'SV', name: 'El Salvador', phoneCode: '+503' },
  { code: 'GQ', name: 'Equatorial Guinea', phoneCode: '+240' },
  { code: 'ER', name: 'Eritrea', phoneCode: '+291' },
  { code: 'EE', name: 'Estonia', phoneCode: '+372' },
  { code: 'SZ', name: 'Eswatini', phoneCode: '+268' },
  { code: 'ET', name: 'Ethiopia', phoneCode: '+251' },
  { code: 'FJ', name: 'Fiji', phoneCode: '+679' },
  { code: 'FI', name: 'Finland', phoneCode: '+358' },
  { code: 'FR', name: 'France', phoneCode: '+33' },
  { code: 'GA', name: 'Gabon', phoneCode: '+241' },
  { code: 'GM', name: 'Gambia', phoneCode: '+220' },
  { code: 'GE', name: 'Georgia', phoneCode: '+995' },
  { code: 'DE', name: 'Germany', phoneCode: '+49' },
  { code: 'GH', name: 'Ghana', phoneCode: '+233' },
  { code: 'GR', name: 'Greece', phoneCode: '+30' },
  { code: 'GD', name: 'Grenada', phoneCode: '+1' },
  { code: 'GT', name: 'Guatemala', phoneCode: '+502' },
  { code: 'GN', name: 'Guinea', phoneCode: '+224' },
  { code: 'GW', name: 'Guinea-Bissau', phoneCode: '+245' },
  { code: 'GY', name: 'Guyana', phoneCode: '+592' },
  { code: 'HT', name: 'Haiti', phoneCode: '+509' },
  { code: 'HN', name: 'Honduras', phoneCode: '+504' },
  { code: 'HU', name: 'Hungary', phoneCode: '+36' },
  { code: 'IS', name: 'Iceland', phoneCode: '+354' },
  { code: 'IN', name: 'India', phoneCode: '+91' },
  { code: 'ID', name: 'Indonesia', phoneCode: '+62' },
  { code: 'IR', name: 'Iran', phoneCode: '+98' },
  { code: 'IQ', name: 'Iraq', phoneCode: '+964' },
  { code: 'IE', name: 'Ireland', phoneCode: '+353' },
  { code: 'IL', name: 'Israel', phoneCode: '+972' },
  { code: 'IT', name: 'Italy', phoneCode: '+39' },
  { code: 'JM', name: 'Jamaica', phoneCode: '+1' },
  { code: 'JP', name: 'Japan', phoneCode: '+81' },
  { code: 'JO', name: 'Jordan', phoneCode: '+962' },
  { code: 'KZ', name: 'Kazakhstan', phoneCode: '+7' },
  { code: 'KE', name: 'Kenya', phoneCode: '+254' },
  { code: 'KI', name: 'Kiribati', phoneCode: '+686' },
  { code: 'KP', name: 'North Korea', phoneCode: '+850' },
  { code: 'KR', name: 'South Korea', phoneCode: '+82' },
  { code: 'KW', name: 'Kuwait', phoneCode: '+965' },
  { code: 'KG', name: 'Kyrgyzstan', phoneCode: '+996' },
  { code: 'LA', name: 'Laos', phoneCode: '+856' },
  { code: 'LV', name: 'Latvia', phoneCode: '+371' },
  { code: 'LB', name: 'Lebanon', phoneCode: '+961' },
  { code: 'LS', name: 'Lesotho', phoneCode: '+266' },
  { code: 'LR', name: 'Liberia', phoneCode: '+231' },
  { code: 'LY', name: 'Libya', phoneCode: '+218' },
  { code: 'LI', name: 'Liechtenstein', phoneCode: '+423' },
  { code: 'LT', name: 'Lithuania', phoneCode: '+370' },
  { code: 'LU', name: 'Luxembourg', phoneCode: '+352' },
  { code: 'MG', name: 'Madagascar', phoneCode: '+261' },
  { code: 'MW', name: 'Malawi', phoneCode: '+265' },
  { code: 'MY', name: 'Malaysia', phoneCode: '+60' },
  { code: 'MV', name: 'Maldives', phoneCode: '+960' },
  { code: 'ML', name: 'Mali', phoneCode: '+223' },
  { code: 'MT', name: 'Malta', phoneCode: '+356' },
  { code: 'MH', name: 'Marshall Islands', phoneCode: '+692' },
  { code: 'MR', name: 'Mauritania', phoneCode: '+222' },
  { code: 'MU', name: 'Mauritius', phoneCode: '+230' },
  { code: 'MX', name: 'Mexico', phoneCode: '+52' },
  { code: 'FM', name: 'Micronesia', phoneCode: '+691' },
  { code: 'MD', name: 'Moldova', phoneCode: '+373' },
  { code: 'MC', name: 'Monaco', phoneCode: '+377' },
  { code: 'MN', name: 'Mongolia', phoneCode: '+976' },
  { code: 'ME', name: 'Montenegro', phoneCode: '+382' },
  { code: 'MA', name: 'Morocco', phoneCode: '+212' },
  { code: 'MZ', name: 'Mozambique', phoneCode: '+258' },
  { code: 'MM', name: 'Myanmar', phoneCode: '+95' },
  { code: 'NA', name: 'Namibia', phoneCode: '+264' },
  { code: 'NR', name: 'Nauru', phoneCode: '+674' },
  { code: 'NP', name: 'Nepal', phoneCode: '+977' },
  { code: 'NL', name: 'Netherlands', phoneCode: '+31' },
  { code: 'NZ', name: 'New Zealand', phoneCode: '+64' },
  { code: 'NI', name: 'Nicaragua', phoneCode: '+505' },
  { code: 'NE', name: 'Niger', phoneCode: '+227' },
  { code: 'NG', name: 'Nigeria', phoneCode: '+234' },
  { code: 'NO', name: 'Norway', phoneCode: '+47' },
  { code: 'OM', name: 'Oman', phoneCode: '+968' },
  { code: 'PK', name: 'Pakistan', phoneCode: '+92' },
  { code: 'PW', name: 'Palau', phoneCode: '+680' },
  { code: 'PA', name: 'Panama', phoneCode: '+507' },
  { code: 'PG', name: 'Papua New Guinea', phoneCode: '+675' },
  { code: 'PY', name: 'Paraguay', phoneCode: '+595' },
  { code: 'PE', name: 'Peru', phoneCode: '+51' },
  { code: 'PH', name: 'Philippines', phoneCode: '+63' },
  { code: 'PL', name: 'Poland', phoneCode: '+48' },
  { code: 'PT', name: 'Portugal', phoneCode: '+351' },
  { code: 'QA', name: 'Qatar', phoneCode: '+974' },
  { code: 'RO', name: 'Romania', phoneCode: '+40' },
  { code: 'RU', name: 'Russia', phoneCode: '+7' },
  { code: 'RW', name: 'Rwanda', phoneCode: '+250' },
  { code: 'KN', name: 'Saint Kitts and Nevis', phoneCode: '+1' },
  { code: 'LC', name: 'Saint Lucia', phoneCode: '+1' },
  { code: 'VC', name: 'Saint Vincent and the Grenadines', phoneCode: '+1' },
  { code: 'WS', name: 'Samoa', phoneCode: '+685' },
  { code: 'SM', name: 'San Marino', phoneCode: '+378' },
  { code: 'ST', name: 'Sao Tome and Principe', phoneCode: '+239' },
  { code: 'SA', name: 'Saudi Arabia', phoneCode: '+966' },
  { code: 'SN', name: 'Senegal', phoneCode: '+221' },
  { code: 'RS', name: 'Serbia', phoneCode: '+381' },
  { code: 'SC', name: 'Seychelles', phoneCode: '+248' },
  { code: 'SL', name: 'Sierra Leone', phoneCode: '+232' },
  { code: 'SG', name: 'Singapore', phoneCode: '+65' },
  { code: 'SK', name: 'Slovakia', phoneCode: '+421' },
  { code: 'SI', name: 'Slovenia', phoneCode: '+386' },
  { code: 'SB', name: 'Solomon Islands', phoneCode: '+677' },
  { code: 'SO', name: 'Somalia', phoneCode: '+252' },
  { code: 'ZA', name: 'South Africa', phoneCode: '+27' },
  { code: 'ES', name: 'Spain', phoneCode: '+34' },
  { code: 'LK', name: 'Sri Lanka', phoneCode: '+94' },
  { code: 'SD', name: 'Sudan', phoneCode: '+249' },
  { code: 'SR', name: 'Suriname', phoneCode: '+597' },
  { code: 'SE', name: 'Sweden', phoneCode: '+46' },
  { code: 'CH', name: 'Switzerland', phoneCode: '+41' },
  { code: 'SY', name: 'Syria', phoneCode: '+963' },
  { code: 'TW', name: 'Taiwan', phoneCode: '+886' },
  { code: 'TJ', name: 'Tajikistan', phoneCode: '+992' },
  { code: 'TZ', name: 'Tanzania', phoneCode: '+255' },
  { code: 'TH', name: 'Thailand', phoneCode: '+66' },
  { code: 'TL', name: 'Timor-Leste', phoneCode: '+670' },
  { code: 'TG', name: 'Togo', phoneCode: '+228' },
  { code: 'TO', name: 'Tonga', phoneCode: '+676' },
  { code: 'TT', name: 'Trinidad and Tobago', phoneCode: '+1' },
  { code: 'TN', name: 'Tunisia', phoneCode: '+216' },
  { code: 'TR', name: 'Turkey', phoneCode: '+90' },
  { code: 'TM', name: 'Turkmenistan', phoneCode: '+993' },
  { code: 'TV', name: 'Tuvalu', phoneCode: '+688' },
  { code: 'UG', name: 'Uganda', phoneCode: '+256' },
  { code: 'UA', name: 'Ukraine', phoneCode: '+380' },
  { code: 'AE', name: 'United Arab Emirates', phoneCode: '+971' },
  { code: 'GB', name: 'United Kingdom', phoneCode: '+44' },
  { code: 'US', name: 'United States', phoneCode: '+1' },
  { code: 'UY', name: 'Uruguay', phoneCode: '+598' },
  { code: 'UZ', name: 'Uzbekistan', phoneCode: '+998' },
  { code: 'VU', name: 'Vanuatu', phoneCode: '+678' },
  { code: 'VA', name: 'Vatican City', phoneCode: '+379' },
  { code: 'VE', name: 'Venezuela', phoneCode: '+58' },
  { code: 'VN', name: 'Vietnam', phoneCode: '+84' },
  { code: 'YE', name: 'Yemen', phoneCode: '+967' },
  { code: 'ZM', name: 'Zambia', phoneCode: '+260' },
  { code: 'ZW', name: 'Zimbabwe', phoneCode: '+263' },
  { code: 'OT', name: 'Other', phoneCode: '0' },
];

// Searchable Select Component
interface SearchableSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  label?: string;
  required?: boolean;
  includeOther?: boolean;
  onOtherSelect?: () => void;
}

const SearchableSelect: React.FC<SearchableSelectProps> = ({
  options,
  value,
  onChange,
  placeholder,
  required,
  includeOther = false,
  onOtherSelect
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const filteredOptions = options.filter(option =>
    option.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSelect = (option: string) => {
    if (option === 'Other' && onOtherSelect) {
      onOtherSelect();
    } else {
      onChange(option);
    }
    setIsOpen(false);
    setSearchTerm('');
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        className="w-full bg-white/10 border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base cursor-pointer focus:border-[#0E9BF0] focus:outline-none transition-all flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={value ? 'text-white' : 'text-white/30'}>
          {value || placeholder}
        </span>
        <ChevronRight className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-90' : ''}`} />
      </div>

      {isOpen && (
        <div className="absolute z-50 w-full mt-1 bg-[#1C2E4A] border border-white/20 rounded-lg shadow-xl overflow-hidden">
          <div className="p-2 border-b border-white/10">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-white/40" />
              <input
                type="text"
                className="w-full bg-white/5 border border-white/20 rounded-lg px-8 py-2 text-white text-sm placeholder-white/30 focus:border-[#0E9BF0] focus:outline-none"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
              />
            </div>
          </div>
          <div className="max-h-60 overflow-y-auto">
            {filteredOptions.length > 0 ? (
              <>
                {filteredOptions.map((option) => (
                  <div
                    key={option}
                    className="px-4 py-2 hover:bg-white/10 cursor-pointer text-white text-sm transition-colors"
                    onClick={() => handleSelect(option)}
                  >
                    {option}
                  </div>
                ))}
                {includeOther && !filteredOptions.includes('Other') && (
                  <div
                    className="px-4 py-2 hover:bg-white/10 cursor-pointer text-white text-sm transition-colors border-t border-white/10 mt-1 pt-2"
                    onClick={() => handleSelect('Other')}
                  >
                    + Other (Specify)
                  </div>
                )}
              </>
            ) : (
              <div className="px-4 py-2 text-white/40 text-sm">No options found</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default function WorkWithUsPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showCustomExpertise, setShowCustomExpertise] = useState(false);

  // Form state
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    country: '',
    phoneCode: '+91',
    experienceLevel: '',
    expertiseArea: '',
    customExpertise: '',
    otherExpertise: '',
    lookingFor: '',
    rate: '',
    portfolioLink: '',
    specialisations: '',
    availability: '',
    extraInfo: ''
  });

  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [portfolioFile, setPortfolioFile] = useState<File | null>(null);
  const [resumeFileName, setResumeFileName] = useState('');
  const [portfolioFileName, setPortfolioFileName] = useState('');

  // Handle country change - auto update phone code
  const handleCountryChange = (countryName: string) => {
    const selectedCountry = countries.find(c => c.name === countryName);

    setFormData(prev => ({
      ...prev,
      country: countryName,
      phoneCode: selectedCountry ? selectedCountry.phoneCode : '+91'
    }));
  };

  // Handle phone input change - only digits
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/\D/g, '');
    setFormData(prev => ({ ...prev, phone: value }));
  };

  // Expertise options
  const expertiseOptions = [
    'GoHighLevel CRM Setup',
    'Sales Funnel Development',
    'Workflow Automation',
    'Lead Generation System',
    'AI Chatbot Automation',
    'Website Development',
    'Landing Page Design',
    'Appointment Booking System',
    'Email & SMS Automation',
    'Pipeline Management',
    'SaaS Snapshot Setup',
    'White Label SaaS Setup',
    'Facebook Ads Integration',
    'Google Ads Integration',
    'Reputation Management',
    'Calendar & Scheduling Setup',
    'Custom API Integrations',
    'SEO & Local SEO',
    'Website Speed Optimization',
    'Not Sure Yet / Need Consultation'
  ];

  // Looking for options
  const lookingForOptions = [
    'Full-time',
    'Part-time',
    'Freelancer / Contract',
    'Project basis'
  ];

  const stats = [
    { id: 1, num: '6', label: 'Countries served', color: 'text-[#F8D000]', icon: Globe },
    { id: 2, num: '50+', label: 'Active clients', color: 'text-[#0E9BF0]', icon: Users },
    { id: 3, num: '200+', label: 'Projects delivered', color: 'text-[#25C97D]', icon: Award },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (type: 'resume' | 'portfolio', file: File | null) => {
    if (type === 'resume') {
      setResumeFile(file);
      setResumeFileName(file?.name || '');
    } else {
      setPortfolioFile(file);
      setPortfolioFileName(file?.name || '');
    }
  };

  const handleExpertiseChange = (value: string) => {
    if (value === 'Other') {
      setShowCustomExpertise(true);
      setFormData(prev => ({ ...prev, expertiseArea: '', customExpertise: '' }));
    } else {
      setShowCustomExpertise(false);
      setFormData(prev => ({ ...prev, expertiseArea: value, customExpertise: '' }));
    }
  };

  const goToStep = (step: number) => {
    setCurrentStep(step);
    document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  // In the submitForm function, update this section:
  const submitForm = async () => {
    setIsSubmitting(true);

    const submitData = new FormData();
    submitData.append('firstName', formData.firstName);
    submitData.append('lastName', formData.lastName);
    submitData.append('email', formData.email);
    // Send full phone number with code
    const fullPhoneNumber = `${formData.phoneCode}${formData.phone}`;
    submitData.append('phone', fullPhoneNumber);
    submitData.append('country', formData.country);
    submitData.append('experienceLevel', formData.experienceLevel);

    // Handle expertise - send both the selected value and custom if exists
    let expertiseValue = formData.expertiseArea;
    if (showCustomExpertise && formData.customExpertise) {
      expertiseValue = 'Other';
      submitData.append('customExpertise', formData.customExpertise); // Send custom expertise separately
    } else if (formData.expertiseArea === 'Not Sure Yet / Need Consultation' && formData.otherExpertise) {
      expertiseValue = `Other: ${formData.otherExpertise}`;
    }

    submitData.append('expertiseArea', expertiseValue);
    submitData.append('lookingFor', formData.lookingFor);
    submitData.append('rate', formData.rate);
    submitData.append('portfolioLink', formData.portfolioLink);
    submitData.append('specialisations', formData.specialisations);
    submitData.append('availability', formData.availability);
    submitData.append('extraInfo', formData.extraInfo);

    if (resumeFile) submitData.append('resume', resumeFile);
    if (portfolioFile) submitData.append('portfolio', portfolioFile);

    // ... rest of the code
  };

  const getProgressPercent = () => {
    if (currentStep === 1) return 33;
    if (currentStep === 2) return 66;
    return 100;
  };

  const steps = [
    { id: 1, title: 'Personal Info', icon: User, color: '#F8D000', bgColor: 'bg-[#F8D000]', textColor: 'text-[#1C2E4A]' },
    { id: 2, title: 'Expertise', icon: Brain, color: '#0E9BF0', bgColor: 'bg-[#0E9BF0]', textColor: 'text-white' },
    { id: 3, title: 'Rate & Docs', icon: DollarSign, color: '#25C97D', bgColor: 'bg-[#25C97D]', textColor: 'text-[#1C2E4A]' },
  ];

  return (
    <div className="min-h-screen bg-[#1C2E4A] overflow-x-hidden relative">
      {/* Hero Section */}
      <div className="relative z-5 max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-12 pt-12 sm:pt-16 md:pt-20 pb-8 sm:pb-12">
        <div className="inline-flex items-center gap-2 bg-[#F8D000]/10 border border-[#F8D000]/40 text-[#F8D000] text-xs sm:text-sm font-medium tracking-wider uppercase px-3 sm:px-4 py-1 rounded-full mb-6 sm:mb-8">
          <TrendingUp className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          Now Onboarding Developers
        </div>
        <h1 className="font-poppins font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight mb-4 sm:mb-6 text-white px-2">
          Join the Army of<br />
          <span className="text-[#0E9BF0]">GHL Developers</span><br />
          at <span className="text-white">GHL </span><span className="text-[#0E9BF0]">Scale </span><span className="text-[#25C97D]">Up</span>
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-white/60 max-w-xl mx-auto leading-relaxed font-light px-4">
          We work with the best GoHighLevel builders in the world. Projects come in constantly and we need developers who are ready to move fast and build right.
        </p>
      </div>

      {/* 3-Step Stepper */}
      <div className="relative z-5 max-w-xl sm:max-w-2xl mx-auto mb-8 sm:mb-12 md:mb-16 px-4 sm:px-6 md:px-12">
        <div className="flex flex-row items-start justify-between gap-1 sm:gap-2 md:gap-4">
          {steps.map((step, index) => (
            <div key={step.id} className="flex flex-1 flex-col items-center gap-1.5 sm:gap-2 relative">
              <div className={`w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center shadow-lg ${step.bgColor} ${step.textColor} z-10 transition-all duration-300 ${currentStep >= step.id ? 'scale-100' : 'scale-95 opacity-70'}`}>
                <step.icon className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
              </div>
              <div className="font-poppins font-semibold text-[10px] sm:text-xs md:text-sm text-white/80 text-center leading-tight">
                {step.title}
              </div>
              {index < steps.length - 1 && (
                <>
                  <div className={`absolute top-5 sm:top-6 md:top-7 left-[60%] right-[-60%] h-0.5 transition-all duration-300 z-0 hidden sm:block ${currentStep > step.id ? 'bg-gradient-to-r from-[#25C97D] to-[#0E9BF0]' : 'bg-white/20'}`}></div>
                  <div className={`absolute top-5 left-[55%] right-[-55%] h-0.5 transition-all duration-300 z-0 block sm:hidden ${currentStep > step.id ? 'bg-gradient-to-r from-[#25C97D] to-[#0E9BF0]' : 'bg-white/20'}`}></div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Section */}
      <div id="application-form" className="relative z-5 max-w-2xl mx-auto px-4 sm:px-6 md:px-12 pb-16 sm:pb-20">
        {!isSuccess ? (
          <div className="bg-white/5 border border-white/15 rounded-xl sm:rounded-2xl backdrop-blur-md overflow-hidden shadow-xl">
            {/* Form Header */}
            <div className="bg-gradient-to-br from-[#1C2E4A] to-[#0d1b2e] px-4 sm:px-6 md:px-10 py-5 sm:py-6 md:py-8 border-b border-white/10">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3 sm:gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-[#F8D000] rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                    <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-[#1C2E4A]" />
                  </div>
                  <div>
                    <h2 className="font-poppins font-bold text-lg sm:text-xl text-white">Developer Application</h2>
                    <p className="text-xs sm:text-sm text-white/50">Step {currentStep} of 3</p>
                  </div>
                </div>
                <div className="hidden sm:flex items-center gap-2">
                  {[1, 2, 3].map(step => (
                    <div
                      key={step}
                      className={`w-2 h-2 rounded-full transition-all ${currentStep >= step ? 'bg-[#F8D000]' : 'bg-white/20'}`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Form Body */}
            <div className="p-4 sm:p-6 md:p-10">
              {/* Progress Bar */}
              <div className="h-1.5 bg-white/10 rounded-full mb-8 overflow-hidden">
                <div className="h-full bg-gradient-to-r from-[#F8D000] via-[#0E9BF0] to-[#25C97D] transition-all duration-300 rounded-full" style={{ width: `${getProgressPercent()}%` }}></div>
              </div>

              {/* Step 1 - Personal Information */}
              {currentStep === 1 && (
                <div className="animate-fadeUp">
                  <div className="flex items-center gap-2 mb-2">
                    <User className="w-5 h-5 text-[#F8D000]" />
                    <div className="font-poppins font-bold text-lg sm:text-xl text-white">Personal Information</div>
                  </div>
                  <div className="text-xs sm:text-sm text-white/50 mb-5 sm:mb-7">Tell us who you are and how to reach you.</div>

                  <div className="space-y-4 sm:space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      <div>
                        <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-1.5 sm:mb-2">First Name *</label>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base placeholder-white/30 focus:border-[#0E9BF0] focus:outline-none transition-all autofill:bg-transparent autofill:text-white"
                          placeholder="First name"
                          required
                          autoComplete="given-name"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-1.5 sm:mb-2">Last Name *</label>
                        <input
                          type="text"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full bg-white/10 border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base placeholder-white/30 focus:border-[#0E9BF0] focus:outline-none transition-all autofill:bg-transparent autofill:text-white"
                          placeholder="Last name"
                          required
                          autoComplete="family-name"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-1.5 sm:mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base placeholder-white/30 focus:border-[#0E9BF0] focus:outline-none transition-all autofill:bg-transparent autofill:text-white"
                        placeholder="you@email.com"
                        required
                        autoComplete="email"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-1.5 sm:mb-2">Country *</label>
                      <SearchableSelect
                        options={countries.map(c => c.name)}
                        value={formData.country}
                        onChange={handleCountryChange}
                        placeholder="Select country"
                        required
                      />
                    </div>

                    {/* Phone Section - Clean and Simple */}
                    <div>
                      <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-1.5 sm:mb-2">WhatsApp / Phone Number *</label>
                      <div className="relative">
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/70 text-sm sm:text-base pointer-events-none">
                          {formData.phoneCode}
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handlePhoneChange}
                          className="w-full bg-white/10 border border-white/20 rounded-lg sm:rounded-xl pl-16 sm:pl-20 pr-3 sm:pr-4 py-2.5 sm:py-3 text-white text-sm sm:text-base placeholder-white/30 focus:border-[#0E9BF0] focus:outline-none transition-all autofill:bg-transparent autofill:text-white"
                          placeholder="9876543210"
                          required
                          autoComplete="tel"
                        />
                      </div>
                      <p className="text-xs text-white/30 mt-1">Enter number without country code</p>
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-1.5 sm:mb-2">GHL Experience Level *</label>
                      <select
                        name="experienceLevel"
                        value={formData.experienceLevel}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:border-[#0E9BF0] focus:outline-none transition-all cursor-pointer autofill:bg-transparent autofill:text-white"
                        required
                      >
                        <option value="" className="bg-[#1C2E4A] text-white">Select level</option>
                        <option value="Beginner (0–6 months)" className="bg-[#1C2E4A] text-white">Beginner (0–6 months)</option>
                        <option value="Intermediate (6–18 months)" className="bg-[#1C2E4A] text-white">Intermediate (6–18 months)</option>
                        <option value="Advanced (1.5–3 years)" className="bg-[#1C2E4A] text-white">Advanced (1.5–3 years)</option>
                        <option value="Expert (3+ years)" className="bg-[#1C2E4A] text-white">Expert (3+ years)</option>
                      </select>
                    </div>
                  </div>

                  <div className="flex justify-end mt-6 sm:mt-8">
                    <button
                      onClick={() => goToStep(2)}
                      className="bg-gradient-to-r from-[#F8D000] to-[#e6b800] text-[#1C2E4A] font-poppins font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:translate-y-[-2px] hover:shadow-lg transition-all flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center"
                    >
                      Next: Your Expertise <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 2 - Expertise & Skills */}
              {currentStep === 2 && (
                <div className="animate-fadeUp">
                  <div className="flex items-center gap-2 mb-2">
                    <Brain className="w-5 h-5 text-[#0E9BF0]" />
                    <div className="font-poppins font-bold text-lg sm:text-xl text-white">Your Expertise</div>
                  </div>
                  <div className="text-xs sm:text-sm text-white/50 mb-5 sm:mb-7">Tell us about your skills and specialisations.</div>

                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-1.5 sm:mb-2">Area of Expertise *</label>
                      <SearchableSelect
                        options={[...expertiseOptions]}
                        value={showCustomExpertise ? 'Other' : formData.expertiseArea}
                        onChange={handleExpertiseChange}
                        placeholder="Select your primary expertise"
                        required
                        includeOther={true}
                      />

                      {showCustomExpertise && (
                        <div className="mt-3 animate-fadeUp">
                          <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-1.5 sm:mb-2">Please specify your expertise *</label>
                          <input
                            type="text"
                            name="customExpertise"
                            value={formData.customExpertise}
                            onChange={handleInputChange}
                            className="w-full bg-white/10 border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base placeholder-white/30 focus:border-[#0E9BF0] focus:outline-none transition-all"
                            placeholder="e.g., Shopify Integration, Custom API Development, etc."
                            autoFocus
                          />
                          <p className="text-xs text-white/30 mt-1">Please describe your area of expertise</p>
                        </div>
                      )}

                      {formData.expertiseArea === 'Not Sure Yet / Need Consultation' && !showCustomExpertise && (
                        <div className="mt-3">
                          <input
                            type="text"
                            name="otherExpertise"
                            value={formData.otherExpertise}
                            onChange={handleInputChange}
                            className="w-full bg-white/10 border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base placeholder-white/30 focus:border-[#0E9BF0] focus:outline-none transition-all"
                            placeholder="Please specify your expertise area"
                          />
                        </div>
                      )}
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-1.5 sm:mb-2">Are you looking for *</label>
                      <select
                        name="lookingFor"
                        value={formData.lookingFor}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:border-[#0E9BF0] focus:outline-none transition-all cursor-pointer autofill:bg-transparent autofill:text-white"
                        required
                      >
                        <option value="" className="bg-[#1C2E4A] text-white">Select option</option>
                        {lookingForOptions.map(option => (
                          <option key={option} value={option} className="bg-[#1C2E4A] text-white">{option}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-1.5 sm:mb-2">Your GHL specialisations</label>
                      <textarea
                        name="specialisations"
                        value={formData.specialisations}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full bg-white/10 border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base placeholder-white/30 focus:border-[#0E9BF0] focus:outline-none transition-all resize-vertical"
                        placeholder="e.g. Workflow automations, CRM setup, AI chatbots, funnel building, API integrations, white-labelling..."
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6 sm:mt-8">
                    <button
                      onClick={() => goToStep(1)}
                      className="bg-white/5 border border-white/20 text-white/70 font-poppins font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:text-white hover:border-white/30 transition-all order-2 sm:order-1 text-sm sm:text-base"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={() => goToStep(3)}
                      className="bg-gradient-to-r from-[#0E9BF0] to-[#0a7acc] text-white font-poppins font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:translate-y-[-2px] hover:shadow-lg transition-all flex items-center gap-2 text-sm sm:text-base w-full sm:w-auto justify-center"
                    >
                      Next: Rate & Documents <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              {/* Step 3 - Rate & Documents */}
              {currentStep === 3 && (
                <div className="animate-fadeUp">
                  <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-5 h-5 text-[#25C97D]" />
                    <div className="font-poppins font-bold text-lg sm:text-xl text-white">Rate & Documents</div>
                  </div>
                  <div className="text-xs sm:text-sm text-white/50 mb-5 sm:mb-7">Share your expectations and supporting documents.</div>

                  <div className="space-y-4 sm:space-y-6">
                    <div>
                      <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-1.5 sm:mb-2">Rate Expectation *</label>
                      <input
                        type="text"
                        name="rate"
                        value={formData.rate}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base placeholder-white/30 focus:border-[#0E9BF0] focus:outline-none transition-all autofill:bg-transparent autofill:text-white"
                        placeholder="e.g., $30/hour or $3000/month"
                        required
                        autoComplete="off"
                      />
                      <p className="text-xs text-white/30 mt-1">Expected salary or hourly rate</p>
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-1.5 sm:mb-2">Availability *</label>
                      <select
                        name="availability"
                        value={formData.availability}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base focus:border-[#0E9BF0] focus:outline-none transition-all cursor-pointer autofill:bg-transparent autofill:text-white"
                        required
                      >
                        <option value="" className="bg-[#1C2E4A] text-white">Select availability</option>
                        <option value="Immediately available" className="bg-[#1C2E4A] text-white">Immediately available</option>
                        <option value="Available within 1 week" className="bg-[#1C2E4A] text-white">Available within 1 week</option>
                        <option value="Part-time (weekends / evenings)" className="bg-[#1C2E4A] text-white">Part-time (weekends / evenings)</option>
                        <option value="Project-by-project basis" className="bg-[#1C2E4A] text-white">Project-by-project basis</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-1.5 sm:mb-2">Upload Resume / CV *</label>
                      <div className="border-2 border-dashed border-white/20 rounded-lg sm:rounded-xl p-6 sm:p-8 text-center hover:border-[#F8D000] transition-all cursor-pointer relative bg-white/5">
                        <input
                          type="file"
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          accept=".pdf,.doc,.docx"
                          onChange={(e) => handleFileChange('resume', e.target.files?.[0] || null)}
                          required
                        />
                        <Upload className="w-8 h-8 mx-auto mb-2 text-white/40" />
                        <div className="text-xs sm:text-sm text-white/70"><strong className="text-[#F8D000]">Click to upload</strong> or drag & drop</div>
                        <div className="text-xs text-white/30 mt-1">PDF, DOC, DOCX — max 10MB</div>
                        {resumeFileName && <div className="text-xs sm:text-sm text-[#25C97D] mt-2 flex items-center justify-center gap-1"><CheckCircle className="w-4 h-4" /> ✓ {resumeFileName}</div>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-1.5 sm:mb-2">Upload Portfolio (optional)</label>
                      <div className="border-2 border-dashed border-white/20 rounded-lg sm:rounded-xl p-6 sm:p-8 text-center hover:border-[#F8D000] transition-all cursor-pointer relative bg-white/5">
                        <input
                          type="file"
                          className="absolute inset-0 opacity-0 cursor-pointer"
                          accept=".pdf,.png,.jpg,.zip"
                          onChange={(e) => handleFileChange('portfolio', e.target.files?.[0] || null)}
                        />
                        <FolderOpen className="w-8 h-8 mx-auto mb-2 text-white/40" />
                        <div className="text-xs sm:text-sm text-white/70"><strong className="text-[#F8D000]">Click to upload</strong> or drag & drop</div>
                        <div className="text-xs text-white/30 mt-1">PDF, images, ZIP — max 25MB</div>
                        {portfolioFileName && <div className="text-xs sm:text-sm text-[#25C97D] mt-2 flex items-center justify-center gap-1"><CheckCircle className="w-4 h-4" /> ✓ {portfolioFileName}</div>}
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-1.5 sm:mb-2">Portfolio / LinkedIn URL (optional)</label>
                      <input
                        type="url"
                        name="portfolioLink"
                        value={formData.portfolioLink}
                        onChange={handleInputChange}
                        className="w-full bg-white/10 border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base placeholder-white/30 focus:border-[#0E9BF0] focus:outline-none transition-all autofill:bg-transparent autofill:text-white"
                        placeholder="https://yoursite.com or linkedin.com/in/you"
                        autoComplete="off"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium tracking-wide text-white/50 uppercase mb-1.5 sm:mb-2">Anything else? (optional)</label>
                      <textarea
                        name="extraInfo"
                        value={formData.extraInfo}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full bg-white/10 border border-white/20 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 text-white text-sm sm:text-base placeholder-white/30 focus:border-[#0E9BF0] focus:outline-none transition-all resize-vertical"
                        placeholder="Tools you use, working style, languages spoken..."
                      />
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between gap-3 mt-6 sm:mt-8">
                    <button
                      onClick={() => goToStep(2)}
                      className="bg-white/5 border border-white/20 text-white/70 font-poppins font-semibold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:text-white hover:border-white/30 transition-all order-2 sm:order-1 text-sm sm:text-base"
                    >
                      ← Back
                    </button>
                    <button
                      onClick={submitForm}
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-[#25C97D] to-[#1a9a5e] text-[#1C2E4A] font-poppins font-bold px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl hover:translate-y-[-2px] hover:shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed order-1 sm:order-2 text-sm sm:text-base"
                    >
                      {isSubmitting ? 'Submitting...' : <><CheckCircle className="w-4 h-4" /> Submit Application</>}
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="bg-white/5 border border-white/15 rounded-xl sm:rounded-2xl backdrop-blur-md p-6 sm:p-8 md:p-16 text-center shadow-xl">
            <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-[#25C97D] to-[#1a9a5e] rounded-full flex items-center justify-center mx-auto mb-5 sm:mb-6 shadow-lg">
              <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-[#1C2E4A]" />
            </div>
            <h3 className="font-poppins font-extrabold text-xl sm:text-2xl md:text-3xl text-white mb-2 sm:mb-3">You're In the Pool!</h3>
            <p className="text-white/50 text-sm sm:text-base max-w-md mx-auto mb-6 sm:mb-8 px-2">
              We've got your application. Projects drop in constantly — we'll reach out the moment something fits your profile.
            </p>
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              <div className="bg-white/5 border border-white/10 rounded-full px-3 sm:px-4 py-1.5 text-xs text-white/60 flex items-center gap-1"><Send className="w-3 h-3" /> Email confirmation sent</div>
              <div className="bg-white/5 border border-white/10 rounded-full px-3 sm:px-4 py-1.5 text-xs text-white/60 flex items-center gap-1"><TrendingUp className="w-3 h-3" /> Projects matched fast</div>
              <div className="bg-white/5 border border-white/10 rounded-full px-3 sm:px-4 py-1.5 text-xs text-white/60 flex items-center gap-1"><Globe className="w-3 h-3" /> Global clients</div>
            </div>
          </div>
        )}
      </div>

      {/* Trust Strip */}
      <div className="relative z-5 border-t border-white/10 py-8 sm:py-10 md:py-12 max-w-4xl mx-auto px-4 sm:px-6 md:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
          {stats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.id} className="flex flex-col items-center text-center gap-1.5 sm:gap-2">
                <Icon className={`w-6 h-6 sm:w-8 sm:h-8 ${stat.color}`} />
                <div className={`font-poppins font-extrabold text-2xl sm:text-3xl md:text-4xl ${stat.color}`}>
                  {stat.num}
                </div>
                <div className="text-xs sm:text-sm text-white/50">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeUp {
          animation: fadeUp 0.4s ease-out forwards;
        }
        
        select option {
          background-color: #1C2E4A !important;
          color: white !important;
          padding: 8px !important;
        }
        
        /* Fix for browser autocomplete styles */
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active,
        select:-webkit-autofill,
        textarea:-webkit-autofill {
          -webkit-box-shadow: 0 0 0 1000px rgba(255, 255, 255, 0.05) inset !important;
          -webkit-text-fill-color: white !important;
          caret-color: white !important;
          transition: background-color 5000s ease-in-out 0s;
        }
        
        /* Ensure autofill background matches our design */
        input:-webkit-autofill {
          background-color: transparent !important;
        }
        
        @media (max-width: 640px) {
          button, 
          input, 
          select, 
          textarea {
            min-height: 44px;
          }
          
          input, select, textarea {
            font-size: 16px !important;
          }
        }
      `}</style>
    </div>
  );
}