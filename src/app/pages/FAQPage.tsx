import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
import { Award, HelpCircle } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';

export function FAQPage() {
  const faqCategories = [
    {
      category: 'General Questions',
      questions: [
        {
          question: 'Who can apply for government assistance programs?',
          answer: 'All Filipino citizens who meet the specific eligibility requirements of each program can apply. Priority is given to low-income families, senior citizens, persons with disabilities, solo parents, and other vulnerable sectors. Each program has its own set of criteria regarding age, residency, income level, and other qualifications.',
        },
        {
          question: 'Is there a fee to apply for assistance?',
          answer: 'No. All government assistance programs are completely FREE. We do not charge any application fees, processing fees, or service fees. Be wary of individuals or groups asking for payment in exchange for assistance or expedited processing.',
        },
        {
          question: 'Can I apply for multiple assistance programs at the same time?',
          answer: 'Yes, you can apply for multiple programs as long as you meet the eligibility requirements for each. However, some programs may have restrictions on receiving simultaneous assistance. We will inform you during the application process if there are any conflicts.',
        },
        {
          question: 'How do I know if my application was received?',
          answer: 'Once you submit your application online, you will receive an immediate confirmation with a reference number. You can use this reference number to track your application status through your dashboard. You will also receive email notifications at each stage of the process.',
        },
      ],
    },
    {
      category: 'Application Process',
      questions: [
        {
          question: 'How do I apply for assistance?',
          answer: 'You can apply through our online portal by following these steps: (1) Create an account or login, (2) Select the assistance program you need, (3) Complete the application form with accurate information, (4) Upload all required documents in clear, readable format (PDF, JPG, or PNG), (5) Submit your application and save your reference number. You can also apply in-person at our office during business hours.',
        },
        {
          question: 'What documents do I need to prepare?',
          answer: 'Required documents vary by program, but commonly needed items include: valid government-issued ID, birth certificate, barangay certificate of residency, proof of income or certificate of indigency, and program-specific documents. Please check the specific requirements page for each program before applying.',
        },
        {
          question: 'Can I submit documents after my initial application?',
          answer: 'Yes, you can upload additional documents or missing requirements through your dashboard even after submitting your initial application. However, incomplete applications may experience delays in processing. We recommend submitting all required documents upon initial application.',
        },
        {
          question: 'How long does it take to process my application?',
          answer: 'Processing time varies by program: Medical assistance (7-14 business days, 24-48 hours for emergencies), Livelihood assistance (10-15 business days), Educational assistance (15-20 business days for new, 7-10 for renewals), Housing assistance (20-30 business days, 3-5 for emergencies). Emergency cases are always prioritized.',
        },
      ],
    },
    {
      category: 'Eligibility & Requirements',
      questions: [
        {
          question: 'What is considered "low-income" for eligibility purposes?',
          answer: 'Income thresholds vary by program and family size. Generally, families earning below the regional minimum wage or those with income below the poverty threshold are considered low-income. Some programs use specific income brackets. Your local barangay can issue a Certificate of Indigency or Low Income to support your application.',
        },
        {
          question: 'Do I need to be a registered voter to apply?',
          answer: 'No, voter registration is not required. However, you must be a Filipino citizen and a resident of our jurisdiction for the required period (typically 1 year, but varies by program). Proof of residency through a barangay certificate is usually sufficient.',
        },
        {
          question: 'What if I don\'t have all the required documents?',
          answer: 'Contact our office for assistance. We can guide you on how to obtain missing documents or suggest alternative documents that may be acceptable. Some documents can be requested from your barangay, while others may be obtained from government agencies like PSA or BIR.',
        },
        {
          question: 'Can non-residents apply for assistance?',
          answer: 'Most programs require applicants to be residents of our jurisdiction for at least 1 year. However, emergency assistance (such as for disaster victims or medical emergencies) may have more flexible residency requirements. Contact our office for specific guidance on your situation.',
        },
      ],
    },
    {
      category: 'Application Status & Follow-up',
      questions: [
        {
          question: 'How do I check the status of my application?',
          answer: 'Login to your account and go to your dashboard where you can view all your applications and their current status. Each application will show whether it is Pending, Under Review, Approved, or Rejected. You will also receive email notifications when there are updates to your application status.',
        },
        {
          question: 'What does each application status mean?',
          answer: 'Pending: Your application has been received and is in queue for review. Under Review: Our staff is currently evaluating your application and documents. Approved: Your application has been approved and assistance will be processed. Rejected: Your application did not meet the requirements (you will receive a detailed explanation). Completed: You have received the assistance.',
        },
        {
          question: 'Why was my application rejected?',
          answer: 'Applications may be rejected for various reasons including: incomplete or missing documents, not meeting eligibility requirements, providing false or inaccurate information, exceeding income thresholds, or budget limitations. You will receive a detailed explanation of the rejection reason and guidance on whether you can reapply.',
        },
        {
          question: 'Can I appeal a rejected application?',
          answer: 'Yes, you can file an appeal within 30 days of rejection by submitting additional supporting documents or clarifications through our office. Appeals are reviewed by a different evaluator. You can also reapply after addressing the issues that led to rejection.',
        },
      ],
    },
    {
      category: 'Assistance & Support',
      questions: [
        {
          question: 'How will I receive the assistance if approved?',
          answer: 'Delivery method depends on the program: Financial assistance is typically released through bank transfer, check, or cash card. Material assistance (like educational supplies or housing materials) may be delivered directly or picked up at our office. Medical assistance may be paid directly to the healthcare provider. Specific release procedures will be communicated upon approval.',
        },
        {
          question: 'How long after approval will I receive assistance?',
          answer: 'For financial assistance, release typically occurs within 5-10 business days after approval. Material assistance may take 10-15 business days for procurement and delivery. Emergency assistance is prioritized for immediate release. You will be notified of the exact release schedule.',
        },
        {
          question: 'What should I do if I don\'t receive the assistance after approval?',
          answer: 'First, check your application status in your dashboard for any updates or additional requirements. If your application shows as "Approved" and the expected release date has passed, contact our office immediately at (02) 1234-5678 or email assistance@gov.ph with your reference number.',
        },
        {
          question: 'Who can I contact if I need help with my application?',
          answer: 'You can reach us through: Phone: (02) 1234-5678 (Monday-Friday, 8AM-5PM), Email: assistance@gov.ph, Walk-in: Government Assistance Office, 123 Government Center, Manila (Monday-Friday 8AM-5PM, Saturday 9AM-12PM). Our staff will be happy to assist you with any questions or concerns.',
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link to="/" className="flex items-center">
              <Award className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">Gov Assist Portal</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/">
                <Button variant="ghost">Back to Home</Button>
              </Link>
              <Link to="/login">
                <Button>Login</Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <HelpCircle className="h-12 w-12" />
            <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            Find answers to common questions about our assistance programs, application process, eligibility requirements, and more.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">{category.category}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((faq, questionIndex) => (
                    <AccordionItem key={questionIndex} value={`item-${categoryIndex}-${questionIndex}`}>
                      <AccordionTrigger className="text-left">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-gray-600">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            ))}
          </div>

          {/* Contact CTA */}
          <Card className="mt-12 p-8 bg-blue-50 border-blue-200 text-center">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">Still have questions?</h3>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our support team is here to help you.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <Button size="lg">Contact Support</Button>
              </Link>
              <Link to="/register">
                <Button size="lg" variant="outline">Create an Account</Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
