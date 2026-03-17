import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Heart, Award, CheckCircle, FileText, Clock, DollarSign } from 'lucide-react';

export function MedicalAssistancePage() {
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
      <section className="bg-gradient-to-r from-red-600 to-red-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <Heart className="h-12 w-12" />
            <h1 className="text-4xl font-bold">Medical Assistance Program</h1>
          </div>
          <p className="text-xl text-red-100 max-w-3xl">
            Financial aid for medical expenses, hospitalization, and treatment costs for qualified individuals and families in need of medical support.
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
                    The Medical Assistance Program provides financial support to Filipino citizens who are facing medical emergencies, 
                    chronic illnesses, or require hospitalization but lack sufficient financial resources. This program aims to ensure 
                    that no one is denied access to necessary medical care due to financial constraints.
                  </p>
                  <p className="text-gray-600">
                    Our assistance covers a wide range of medical needs including hospital bills, laboratory tests, medicines, 
                    surgical procedures, dialysis treatments, chemotherapy, and other life-saving medical interventions.
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
                      'Must be a Filipino citizen',
                      'Must be a resident of the covered jurisdiction',
                      'Must demonstrate financial need through income documentation',
                      'Medical condition must be validated by a licensed physician',
                      'Must not have existing health insurance coverage for the specific medical need',
                      'Priority given to senior citizens, persons with disabilities, and indigent families',
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
                      <h4 className="font-semibold text-gray-900 mb-2">Medical Services Covered:</h4>
                      <ul className="grid md:grid-cols-2 gap-2 text-gray-600">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          Hospitalization expenses
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          Surgical procedures
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          Laboratory and diagnostic tests
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          Prescription medicines
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          Dialysis treatments
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          Chemotherapy sessions
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          Emergency medical care
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                          Medical consultations
                        </li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg">
                      <p className="text-sm text-blue-900">
                        <strong>Maximum Assistance:</strong> Up to ₱100,000 per beneficiary per calendar year, 
                        subject to available budget and case evaluation.
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
                      'Valid Government-issued ID (both applicant and patient if different)',
                      'Medical Certificate or Doctor\'s Request for Financial Assistance',
                      'Hospital Bill or Billing Statement',
                      'Laboratory Results and Medical Records',
                      'Barangay Certificate of Residency or Indigency',
                      'Income Tax Return (ITR) or Certificate of No Income',
                      'Proof of Income (Pay slips, employment certificate, etc.)',
                      'PhilHealth Member Data Record (MDR) or proof of non-coverage',
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
              <Card className="bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Financial Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-700 mb-4">
                    Assistance amount varies based on:
                  </p>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Medical need severity</li>
                    <li>• Total cost of treatment</li>
                    <li>• Family income level</li>
                    <li>• Available program budget</li>
                  </ul>
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
                      <p className="font-semibold text-gray-900">Regular Cases:</p>
                      <p className="text-gray-600">7-14 business days</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Emergency Cases:</p>
                      <p className="text-gray-600">24-48 hours</p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                      <p className="text-yellow-800">
                        <strong>Note:</strong> Emergency medical cases are prioritized for faster processing.
                      </p>
                    </div>
                  </div>
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
                      Complete the application form
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-blue-600">3.</span>
                      Upload required documents
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-blue-600">4.</span>
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
