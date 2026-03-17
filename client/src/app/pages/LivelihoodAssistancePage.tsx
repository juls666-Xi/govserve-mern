import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Briefcase, Award, CheckCircle, FileText, Clock, DollarSign } from 'lucide-react';

export function LivelihoodAssistancePage() {
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
              <Link to="/programs">
                <Button variant="ghost">All Programs</Button>
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
            <Briefcase className="h-12 w-12" />
            <h1 className="text-4xl font-bold">Livelihood Assistance Program</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            Support for small business development, skills training, and employment programs to help Filipino citizens achieve financial independence and sustainable income.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Overview */}
            <div className="lg:col-span-2 space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Program Overview</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-gray-600">
                    The Livelihood Assistance Program empowers Filipino citizens through business capital support, skills development training, 
                    and employment facilitation. This program is designed to help individuals and families break the cycle of poverty by 
                    providing them with the tools and resources needed to generate sustainable income.
                  </p>
                  <p className="text-gray-600">
                    Whether you're looking to start a small business, enhance your professional skills, or find stable employment, 
                    our program offers comprehensive support including financial assistance, training programs, business mentorship, 
                    and job placement services.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Eligibility Requirements</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      'Must be a Filipino citizen aged 18-65 years old',
                      'Must be a resident of the covered jurisdiction',
                      'Must demonstrate commitment to entrepreneurship or employment',
                      'Must have a viable business plan or skills development goal',
                      'Must not have existing livelihood assistance from other government programs',
                      'Priority given to women, solo parents, persons with disabilities, and indigenous peoples',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Coverage and Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Program Components:</h4>
                      
                      <div className="space-y-4">
                        <div className="border-l-4 border-blue-600 pl-4">
                          <h5 className="font-semibold text-gray-800 mb-1">Business Capital Assistance</h5>
                          <p className="text-sm text-gray-600">
                            Seed capital for starting or expanding micro and small enterprises in sectors such as food service, 
                            retail, agriculture, handicrafts, and service-based businesses.
                          </p>
                        </div>

                        <div className="border-l-4 border-green-600 pl-4">
                          <h5 className="font-semibold text-gray-800 mb-1">Skills Training Programs</h5>
                          <p className="text-sm text-gray-600">
                            Free vocational and technical skills training in areas like welding, electrical work, plumbing, 
                            cosmetology, food processing, computer literacy, and digital marketing.
                          </p>
                        </div>

                        <div className="border-l-4 border-purple-600 pl-4">
                          <h5 className="font-semibold text-gray-800 mb-1">Business Development Services</h5>
                          <p className="text-sm text-gray-600">
                            Mentorship, business planning assistance, financial literacy training, and marketing support to 
                            help entrepreneurs succeed.
                          </p>
                        </div>

                        <div className="border-l-4 border-orange-600 pl-4">
                          <h5 className="font-semibold text-gray-800 mb-1">Employment Facilitation</h5>
                          <p className="text-sm text-gray-600">
                            Job matching services, employment counseling, and connections with potential employers in both 
                            private and public sectors.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-900">
                        <strong>Maximum Assistance:</strong> Up to ₱50,000 for business capital, plus free skills training 
                        valued at ₱15,000-₱30,000 depending on the program.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Required Documents</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {[
                      'Valid Government-issued ID',
                      'Barangay Certificate of Residency',
                      'Business Plan or Livelihood Proposal (for business capital assistance)',
                      'Income Tax Return (ITR) or Certificate of No Income',
                      'Barangay Business Clearance (if existing business)',
                      'Skills Training Certificate (if applicable)',
                      'Birth Certificate',
                      'Certificate of Indigency (for low-income applicants)',
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <FileText className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-600">{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Financial Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900">Micro Enterprise:</p>
                      <p className="text-gray-600">₱10,000 - ₱25,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Small Enterprise:</p>
                      <p className="text-gray-600">₱25,000 - ₱50,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Skills Training:</p>
                      <p className="text-gray-600">Free (Fully subsidized)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    Processing Time
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900">Application Review:</p>
                      <p className="text-gray-600">10-15 business days</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Skills Training:</p>
                      <p className="text-gray-600">2-6 weeks (varies by program)</p>
                    </div>
                    <div className="bg-green-50 p-3 rounded border border-green-200">
                      <p className="text-green-800">
                        <strong>Note:</strong> Successful applicants may need to attend orientation and sign agreements.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Available Training Programs</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Food Processing & Culinary</li>
                    <li>• Welding & Metalwork</li>
                    <li>• Electrical Installation</li>
                    <li>• Plumbing & Pipe Fitting</li>
                    <li>• Beauty & Cosmetology</li>
                    <li>• Automotive Servicing</li>
                    <li>• Computer Literacy</li>
                    <li>• Digital Marketing</li>
                    <li>• Garments & Tailoring</li>
                    <li>• Agriculture & Farming</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>How to Apply</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <ol className="space-y-2 text-sm text-gray-600">
                    <li className="flex gap-2">
                      <span className="font-semibold text-blue-600">1.</span>
                      Create an account or login
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-blue-600">2.</span>
                      Prepare your business plan
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-blue-600">3.</span>
                      Complete the application form
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-blue-600">4.</span>
                      Upload required documents
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-blue-600">5.</span>
                      Submit and track your application
                    </li>
                  </ol>
                  <Link to="/register" className="block">
                    <Button className="w-full">Apply Now</Button>
                  </Link>
                  <Link to="/requirements" className="block">
                    <Button variant="outline" className="w-full">View All Requirements</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
