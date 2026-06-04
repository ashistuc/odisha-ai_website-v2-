import React, { useState, useMemo } from 'react';
import { Lightbulb, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { useLanguage } from '../contexts/LanguageContext';

const AIProjectIdeaForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    projectTitle: '',
    sector: '',
    description: '',
    impact: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [submitted, setSubmitted] = useState(false);
  const { isOdia } = useLanguage();

  // Validation functions
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone) => {
    // Indian phone number: 10 digits, optionally with +91 or 0 prefix
    const phoneRegex = /^(\+91[\-\s]?)?[0]?(91)?[6789]\d{9}$/;
    const cleanPhone = phone.replace(/[\s\-]/g, '');
    return phoneRegex.test(cleanPhone) || (cleanPhone.length === 10 && /^[6789]\d{9}$/.test(cleanPhone));
  };

  // Validate all fields
  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return isOdia ? 'ନାମ ଆବଶ୍ୟକ' : 'Name is required';
        if (value.trim().length < 2) return isOdia ? 'ନାମ ଅତି ଛୋଟ' : 'Name is too short';
        return '';
      case 'email':
        if (!value.trim()) return isOdia ? 'ଇମେଲ୍ ଆବଶ୍ୟକ' : 'Email is required';
        if (!validateEmail(value)) return isOdia ? 'ଅବୈଧ ଇମେଲ୍ ଠିକଣା' : 'Invalid email address';
        return '';
      case 'phone':
        if (!value.trim()) return isOdia ? 'ଫୋନ୍ ନମ୍ବର ଆବଶ୍ୟକ' : 'Phone number is required';
        if (!validatePhone(value)) return isOdia ? 'ଅବୈଧ ଫୋନ୍ ନମ୍ବର (10 ଅଙ୍କ ଆବଶ୍ୟକ)' : 'Invalid phone number (10 digits required)';
        return '';
      case 'projectTitle':
        if (!value.trim()) return isOdia ? 'ପ୍ରକଳ୍ପ ଶିରୋନାମା ଆବଶ୍ୟକ' : 'Project title is required';
        return '';
      case 'sector':
        if (!value) return isOdia ? 'କ୍ଷେତ୍ର ବାଛନ୍ତୁ' : 'Please select a sector';
        return '';
      case 'description':
        if (!value.trim()) return isOdia ? 'ପ୍ରକଳ୍ପ ବର୍ଣ୍ଣନା ଆବଶ୍ୟକ' : 'Project description is required';
        if (value.trim().length < 50) return isOdia ? 'ବର୍ଣ୍ଣନା ଅତି ଛୋଟ (ଅତିକମରେ 50 ଅକ୍ଷର)' : 'Description is too short (minimum 50 characters)';
        return '';
      case 'impact':
        if (!value.trim()) return isOdia ? 'ପ୍ରଭାବ ବର୍ଣ୍ଣନା ଆବଶ୍ୟକ' : 'Expected impact is required';
        return '';
      default:
        return '';
    }
  };

  // Check if form is valid
  const isFormValid = useMemo(() => {
    const requiredFields = ['name', 'email', 'phone', 'projectTitle', 'sector', 'description', 'impact'];
    return requiredFields.every(field => {
      const error = validateField(field, formData[field]);
      return !error;
    });
  }, [formData, isOdia]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    // Validate on change if field was touched
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({
        ...prev,
        [name]: error
      }));
    }
  };

  // Special handler for phone input - only allow numbers and phone characters
  const handlePhoneChange = (e) => {
    const { value } = e.target;
    // Only allow digits, +, -, spaces
    const filteredValue = value.replace(/[^0-9+\-\s]/g, '');
    setFormData(prev => ({
      ...prev,
      phone: filteredValue
    }));

    if (touched.phone) {
      const error = validateField('phone', filteredValue);
      setErrors(prev => ({
        ...prev,
        phone: error
      }));
    }
  };

  // Prevent non-numeric key presses on phone field
  const handlePhoneKeyDown = (e) => {
    // Allow: backspace, delete, tab, escape, enter, and navigation keys
    if (
      e.key === 'Backspace' ||
      e.key === 'Delete' ||
      e.key === 'Tab' ||
      e.key === 'Escape' ||
      e.key === 'Enter' ||
      e.key === 'ArrowLeft' ||
      e.key === 'ArrowRight' ||
      e.key === 'ArrowUp' ||
      e.key === 'ArrowDown' ||
      e.key === 'Home' ||
      e.key === 'End' ||
      e.key === '+' ||
      e.key === '-' ||
      e.key === ' ' ||
      (e.ctrlKey && (e.key === 'a' || e.key === 'c' || e.key === 'v' || e.key === 'x'))
    ) {
      return;
    }
    // Block if not a number
    if (!/[0-9]/.test(e.key)) {
      e.preventDefault();
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({
      ...prev,
      [name]: true
    }));

    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate all fields
    const newErrors = {};
    const requiredFields = ['name', 'email', 'phone', 'projectTitle', 'sector', 'description', 'impact'];
    requiredFields.forEach(field => {
      const error = validateField(field, formData[field]);
      if (error) newErrors[field] = error;
    });

    setErrors(newErrors);
    setTouched(requiredFields.reduce((acc, field) => ({ ...acc, [field]: true }), {}));

    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // Form is valid, submit
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        organization: '',
        projectTitle: '',
        sector: '',
        description: '',
        impact: ''
      });
      setErrors({});
      setTouched({});
    }, 3000);
  };

  const sectors = [
    'Healthcare',
    'Agriculture',
    'Education',
    'Governance',
    'Disaster Management',
    'Manufacturing',
    'Transportation',
    'Financial Services',
    'Environment',
    'Other'
  ];

  // Helper component for error message
  const ErrorMessage = ({ error }) => {
    if (!error) return null;
    return (
      <p className="mt-1 text-sm text-red-500 flex items-center gap-1">
        <AlertCircle className="w-3.5 h-3.5" />
        {error}
      </p>
    );
  };

  if (submitted) {
    return (
      <Card className="border-2 border-green-400 bg-green-50">
        <CardContent className="p-12 text-center">
          <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            {isOdia ? 'ଆପଣଙ୍କ ଦାଖଲ ପାଇଁ ଧନ୍ୟବାଦ!' : 'Thank You for Your Submission!'}
          </h3>
          <p className="text-gray-600">
            {isOdia ? 'ଆପଣଙ୍କ ନବସୃଜନମୂଳକ AI ପ୍ରକଳ୍ପ ଧାରଣା ପ୍ରାପ୍ତ ହୋଇଛି। ଆମ ଦଳ ଏହାକୁ ସମୀକ୍ଷା କରି ଶୀଘ୍ର ଆପଣଙ୍କ ସହ ଯୋଗାଯୋଗ କରିବେ।' : 'Your innovative AI project idea has been received. Our team will review it and get back to you soon.'}
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div>
      <div className="text-center mb-12">
        <Badge className="bg-orange-100 text-orange-700 hover:bg-orange-200 mb-4 px-4 py-2">
          <Lightbulb className="w-4 h-4 mr-2" />
          {isOdia ? 'ନବସୃଜନ କେନ୍ଦ୍ର' : 'Innovation Hub'}
        </Badge>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {isOdia ? 'ଆପଣଙ୍କ ' : 'Share Your '}<span className="bg-gradient-to-r from-orange-600 to-orange-600 bg-clip-text text-transparent">{isOdia ? 'ନବସୃଜନମୂଳକ AI ପ୍ରକଳ୍ପ ଧାରଣା ଶେୟାର କରନ୍ତୁ' : 'Innovative AI Project Idea'}</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          {isOdia ? 'ଏକ ଅଦ୍ଭୁତପୂର୍ବAI ସମାଧାନ ଅଛି? ଆପଣଙ୍କ ଧାରଣା ଦାଖଲ କରନ୍ତୁ ଏବଂ ଓଡ଼ିଶାର AI ଇକୋସିଷ୍ଟମରୁ ସମର୍ଥନ ପାଆନ୍ତୁ' : 'Have a groundbreaking AI solution? Submit your idea and get support from Odisha\'s AI ecosystem'}
        </p>
      </div>

      <Card className="border-2 border-gray-200 shadow-xl max-w-4xl mx-auto">
        <CardContent className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {isOdia ? 'ପୂର୍ଣ୍ଣ ନାମ' : 'Full Name'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${errors.name && touched.name
                    ? 'border-red-400 focus:border-red-500'
                    : 'border-gray-300 focus:border-orange-500'
                    }`}
                  placeholder={isOdia ? 'ଆପଣଙ୍କ ପୂର୍ଣ୍ଣ ନାମ ଲେଖନ୍ତୁ' : 'Enter your full name'}
                />
                <ErrorMessage error={touched.name && errors.name} />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {isOdia ? 'ଇମେଲ୍ ଠିକଣା' : 'Email Address'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${errors.email && touched.email
                    ? 'border-red-400 focus:border-red-500'
                    : 'border-gray-300 focus:border-orange-500'
                    }`}
                  placeholder="your.email@example.com"
                />
                <ErrorMessage error={touched.email && errors.email} />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {isOdia ? 'ଫୋନ୍ ନମ୍ବର' : 'Phone Number'} <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handlePhoneChange}
                  onKeyDown={handlePhoneKeyDown}
                  onBlur={handleBlur}
                  inputMode="numeric"
                  pattern="[0-9+\-\s]*"
                  maxLength={15}
                  className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${errors.phone && touched.phone
                    ? 'border-red-400 focus:border-red-500'
                    : 'border-gray-300 focus:border-orange-500'
                    }`}
                  placeholder="+91 XXXXX XXXXX"
                />
                <ErrorMessage error={touched.phone && errors.phone} />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  {isOdia ? 'ସଂସ୍ଥା / ପ୍ରତିଷ୍ଠାନ' : 'Organization / Institution'}
                </label>
                <input
                  type="text"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors"
                  placeholder={isOdia ? 'ଆପଣଙ୍କ ସଂସ୍ଥା ନାମ (ଐଚ୍ଛିକ)' : 'Your organization name (optional)'}
                />
              </div>
            </div>

            {/* Project Information */}
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {isOdia ? 'ପ୍ରକଳ୍ପ ଶିରୋନାମା' : 'Project Title'} <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="projectTitle"
                value={formData.projectTitle}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${errors.projectTitle && touched.projectTitle
                  ? 'border-red-400 focus:border-red-500'
                  : 'border-gray-300 focus:border-orange-500'
                  }`}
                placeholder={isOdia ? 'ଆପଣଙ୍କ ପ୍ରକଳ୍ପର ଏକ ଆକର୍ଷଣୀୟ ଶିରୋନାମା ଦିଅନ୍ତୁ' : 'Give your project a catchy title'}
              />
              <ErrorMessage error={touched.projectTitle && errors.projectTitle} />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {isOdia ? 'ଲକ୍ଷ୍ୟ କ୍ଷେତ୍ର' : 'Target Sector'} <span className="text-red-500">*</span>
              </label>
              <select
                name="sector"
                value={formData.sector}
                onChange={handleChange}
                onBlur={handleBlur}
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${errors.sector && touched.sector
                  ? 'border-red-400 focus:border-red-500'
                  : 'border-gray-300 focus:border-orange-500'
                  }`}
              >
                <option value="">{isOdia ? 'ଏକ କ୍ଷେତ୍ର ବାଛନ୍ତୁ' : 'Select a sector'}</option>
                {sectors.map((sector) => (
                  <option key={sector} value={sector}>{sector}</option>
                ))}
              </select>
              <ErrorMessage error={touched.sector && errors.sector} />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {isOdia ? 'ପ୍ରକଳ୍ପ ବର୍ଣ୍ଣନା' : 'Project Description'} <span className="text-red-500">*</span>
              </label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleChange}
                onBlur={handleBlur}
                rows="5"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${errors.description && touched.description
                  ? 'border-red-400 focus:border-red-500'
                  : 'border-gray-300 focus:border-orange-500'
                  }`}
                placeholder={isOdia ? 'ଆପଣଙ୍କ AI ପ୍ରକଳ୍ପ ଧାରଣା, ଏହା ସମାଧାନ କରୁଥିବା ସମସ୍ୟା ଏବଂ ଏହା କିପରି କାମ କରେ ବର୍ଣ୍ଣନା କରନ୍ତୁ...' : 'Describe your AI project idea, the problem it solves, and how it works...'}
              />
              <ErrorMessage error={touched.description && errors.description} />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                {isOdia ? 'ଆଶାକୃତ ପ୍ରଭାବ' : 'Expected Impact'} <span className="text-red-500">*</span>
              </label>
              <textarea
                name="impact"
                value={formData.impact}
                onChange={handleChange}
                onBlur={handleBlur}
                rows="3"
                className={`w-full px-4 py-3 border-2 rounded-lg focus:outline-none transition-colors ${errors.impact && touched.impact
                  ? 'border-red-400 focus:border-red-500'
                  : 'border-gray-300 focus:border-orange-500'
                  }`}
                placeholder={isOdia ? 'ଆପଣଙ୍କ ପ୍ରକଳ୍ପ ସମାଜ, ଅର୍ଥନୀତି କିମ୍ବା ଶାସନ ଉପରେ କ\'ଣ ପ୍ରଭାବ ପକାଇବ?' : 'What impact will your project have on society, economy, or governance?'}
              />
              <ErrorMessage error={touched.impact && errors.impact} />
            </div>

            <div className="flex items-center justify-center pt-4">
              <Button
                type="submit"
                size="lg"
                disabled={!isFormValid}
                className={`px-12 shadow-lg transition-all duration-300 ${isFormValid
                  ? 'bg-gradient-to-r from-orange-600 to-orange-600 hover:from-orange-700 hover:to-orange-700 text-white hover:shadow-xl cursor-pointer'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  }`}
              >
                {isOdia ? 'ଆପଣଙ୍କ ଧାରଣା ଦାଖଲ କରନ୍ତୁ' : 'Submit Your Idea'}
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </div>

            {!isFormValid && Object.keys(touched).length > 0 && (
              <p className="text-center text-sm text-gray-500">
                {isOdia ? 'ଦାଖଲ କରିବା ପୂର୍ବରୁ ଦୟାକରି ସମସ୍ତ ଆବଶ୍ୟକ ଫିଲ୍ଡ ଭରନ୍ତୁ' : 'Please fill all required fields to enable submission'}
              </p>
            )}
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AIProjectIdeaForm;
