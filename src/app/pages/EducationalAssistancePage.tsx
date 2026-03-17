import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { GraduationCap, Award, CheckCircle, FileText, Clock, DollarSign } from 'lucide-react';

export function EducationalAssistancePage() {
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
      <section className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <GraduationCap className="h-12 w-12" />
            <h1 className="text-4xl font-bold">Educational Assistance Program</h1>
          </div>
          <p className="text-xl text-green-100 max-w-3xl">
            Scholarships and educational support for students from low-income families to pursue their academic goals and achieve a brighter future through education.
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
                    The Educational Assistance Program provides financial support to deserving students who demonstrate academic potential 
                    but lack the financial means to continue their education. We believe that every Filipino child deserves access to quality 
                    education regardless of their family's economic status.
                  </p>
                  <p className="text-gray-600">
                    Our program covers tuition fees, school supplies, uniforms, transportation allowances, and other education-related expenses 
                    for elementary, high school, and college students. We also provide special assistance for technical-vocational courses and 
                    professional licensing review programs.
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
                      'Must be enrolled or incoming student in an accredited educational institution',
                      'Must maintain satisfactory academic performance (General Weighted Average of 85% or higher)',
                      'Family income must not exceed the program\'s maximum threshold',
                      'Must demonstrate financial need through required documents',
                      'Priority given to honor students, children of solo parents, and indigenous students',
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
                      <h4 className="font-semibold text-gray-900 mb-3">Educational Levels Covered:</h4>
                      
                      <div className="space-y-4">
                        <div className="border-l-4 border-blue-600 pl-4">
                          <h5 className="font-semibold text-gray-800 mb-1">Elementary Level</h5>
                          <p className="text-sm text-gray-600 mb-2">
                            Coverage: School supplies, uniforms, shoes, bags, and transportation allowance
                          </p>
                          <p className="text-sm font-semibold text-blue-600">Up to ₱5,000 per school year</p>
                        </div>

                        <div className="border-l-4 border-green-600 pl-4">
                          <h5 className="font-semibold text-gray-800 mb-1">High School Level</h5>
                          <p className="text-sm text-gray-600 mb-2">
                            Coverage: Tuition fees (for private schools), school supplies, uniforms, project materials, and allowances
                          </p>
                          <p className="text-sm font-semibold text-green-600">Up to ₱15,000 per school year</p>
                        </div>

                        <div className="border-l-4 border-purple-600 pl-4">
                          <h5 className="font-semibold text-gray-800 mb-1">College Level</h5>
                          <p className="text-sm text-gray-600 mb-2">
                            Coverage: Tuition fees, enrollment fees, books, thesis/research expenses, and monthly allowance
                          </p>
                          <p className="text-sm font-semibold text-purple-600">Up to ₱40,000 per school year</p>
                        </div>

                        <div className="border-l-4 border-orange-600 pl-4">
                          <h5 className="font-semibold text-gray-800 mb-1">Technical-Vocational Courses</h5>
                          <p className="text-sm text-gray-600 mb-2">
                            Coverage: Full course fees, materials, certification fees, and training allowance
                          </p>
                          <p className="text-sm font-semibold text-orange-600">Up to ₱25,000 per course</p>
                        </div>

                        <div className="border-l-4 border-red-600 pl-4">
                          <h5 className="font-semibold text-gray-800 mb-1">Review Programs (Board Exams)</h5>
                          <p className="text-sm text-gray-600 mb-2">
                            Coverage: Review center fees, review materials, and board exam fees
                          </p>
                          <p className="text-sm font-semibold text-red-600">Up to ₱20,000 per applicant</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-green-50 p-4 rounded-lg">
                      <p className="text-sm text-green-900">
                        <strong>Renewal Policy:</strong> Scholars must maintain good academic standing and submit renewal documents 
                        each semester/school year to continue receiving assistance.
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
                  <div className="space-y-4">
                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">For All Applicants:</h5>
                      <ul className="space-y-3">
                        {[
                          'Birth Certificate (NSO/PSA Copy)',
                          'Valid Government-issued ID (or Parent\'s ID for minors)',
                          'Barangay Certificate of Residency',
                          'Certificate of Indigency or Low Income',
                          'Income Tax Return (ITR) or Certificate of No Income (parents/guardians)',
                          'Recent 2x2 ID Picture',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <FileText className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Additional Documents (For Students):</h5>
                      <ul className="space-y-3">
                        {[
                          'Certificate of Enrollment or Registration Form',
                          'Report Card or Transcript of Records (latest)',
                          'School ID or Student Number',
                          'Assessment of Fees or Tuition Bill',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <FileText className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Financial Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900">Elementary:</p>
                      <p className="text-gray-600">Up to ₱5,000/year</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">High School:</p>
                      <p className="text-gray-600">Up to ₱15,000/year</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">College:</p>
                      <p className="text-gray-600">Up to ₱40,000/year</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Tech-Voc:</p>
                      <p className="text-gray-600">Up to ₱25,000/course</p>
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
                      <p className="font-semibold text-gray-900">New Applications:</p>
                      <p className="text-gray-600">15-20 business days</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Renewal Applications:</p>
                      <p className="text-gray-600">7-10 business days</p>
                    </div>
                    <div className="bg-yellow-50 p-3 rounded border border-yellow-200">
                      <p className="text-yellow-800">
                        <strong>Tip:</strong> Apply at least 1 month before the start of school year for faster processing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Scholarship Responsibilities</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Maintain 85% GWA or higher</li>
                    <li>• Submit grades each semester</li>
                    <li>• Attend scholar meetings</li>
                    <li>• Participate in community service</li>
                    <li>• No major disciplinary cases</li>
                    <li>• Complete required forms on time</li>
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
                      <span className="font-semibold text-green-600">1.</span>
                      Create an account or login
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-green-600">2.</span>
                      Prepare all required documents
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-green-600">3.</span>
                      Complete the application form
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-green-600">4.</span>
                      Upload clear copies of documents
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-green-600">5.</span>
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
