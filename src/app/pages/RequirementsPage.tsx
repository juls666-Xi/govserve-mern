import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Award, FileText, Download, CheckCircle } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';

export function RequirementsPage() {
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
            <FileText className="h-12 w-12" />
            <h1 className="text-4xl font-bold">Document Requirements</h1>
          </div>
          <p className="text-xl text-blue-100 max-w-3xl">
            Complete guide to all required documents for each assistance program. Make sure to prepare these before applying.
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* General Requirements */}
          <Card className="mb-8">
            <CardHeader className="bg-gray-50">
              <CardTitle className="text-2xl">General Requirements (All Programs)</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <p className="text-gray-600 mb-6">
                The following documents are required for all assistance programs. Please prepare these basic requirements before proceeding with your application:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Valid Government-issued ID (e.g., PhilID, Passport, Driver\'s License, SSS/GSIS ID, Voter\'s ID)',
                  'Birth Certificate (PSA/NSO authenticated copy)',
                  'Barangay Certificate of Residency (not older than 3 months)',
                  'Certificate of Indigency or Certificate of Low Income',
                  'Proof of Income or Certificate of No Income',
                  'Recent 2x2 ID Picture (white background)',
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Program-Specific Requirements */}
          <Tabs defaultValue="medical" className="space-y-6">
            <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
              <TabsTrigger value="medical">Medical</TabsTrigger>
              <TabsTrigger value="livelihood">Livelihood</TabsTrigger>
              <TabsTrigger value="educational">Educational</TabsTrigger>
              <TabsTrigger value="housing">Housing</TabsTrigger>
            </TabsList>

            <TabsContent value="medical">
              <Card>
                <CardHeader>
                  <CardTitle>Medical Assistance - Specific Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Required Documents:</h4>
                    <ul className="space-y-2">
                      {[
                        'Medical Certificate or Doctor\'s Request for Financial Assistance',
                        'Hospital Bill or Official Billing Statement',
                        'Laboratory Results and Medical Records',
                        'Prescription (for medicine assistance)',
                        'PhilHealth Member Data Record (MDR) or proof of non-coverage',
                        'Income Tax Return (ITR) of patient or family breadwinner',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FileText className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                    <p className="text-sm text-yellow-900">
                      <strong>Important Note:</strong> For emergency medical cases, you may submit initial requirements and complete remaining documents within 7 days of approval.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="livelihood">
              <Card>
                <CardHeader>
                  <CardTitle>Livelihood Assistance - Specific Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Required Documents:</h4>
                    <ul className="space-y-2">
                      {[
                        'Business Plan or Livelihood Proposal (template available for download)',
                        'Barangay Business Clearance (if existing business)',
                        'Income Tax Return (ITR) or Certificate of No Income',
                        'Skills Training Certificate (if applicable)',
                        'Project Costing or Budget Breakdown',
                        'Sworn Statement of Livelihood Commitment',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FileText className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-900 mb-2">
                      <strong>Business Plan Template:</strong>
                    </p>
                    <Button variant="outline" size="sm">
                      <Download className="h-4 w-4 mr-2" />
                      Download Business Plan Template
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="educational">
              <Card>
                <CardHeader>
                  <CardTitle>Educational Assistance - Specific Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Student Documents:</h4>
                    <ul className="space-y-2">
                      {[
                        'Certificate of Enrollment or Registration Form (current school year)',
                        'Report Card or Transcript of Records (most recent)',
                        'School ID or Student Number',
                        'Assessment of Fees or Tuition Bill',
                        'Certificate of Good Moral Character',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FileText className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Parent/Guardian Documents:</h4>
                    <ul className="space-y-2">
                      {[
                        'Valid Government-issued ID of parent/guardian',
                        'Income Tax Return (ITR) or Certificate of Employment',
                        'Latest Pay Slips or Proof of Income (3 months)',
                        'Marriage Certificate (if applicable)',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FileText className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                    <p className="text-sm text-green-900">
                      <strong>Scholarship Renewal:</strong> Continuing scholars must submit updated grades and enrollment certificate each semester/school year.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="housing">
              <Card>
                <CardHeader>
                  <CardTitle>Housing Assistance - Specific Requirements</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Basic Housing Documents:</h4>
                    <ul className="space-y-2">
                      {[
                        'Marriage Certificate (if married)',
                        'Certificate of No Property Holdings or Tax Declaration',
                        'Lot Ownership Documents or Certificate of Lot Award',
                        'Income Tax Return (ITR) or Certificate of Employment',
                        'Latest Pay Slips (3 months)',
                      ].map((item, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <FileText className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">Additional Requirements (by Program Type):</h4>
                    <div className="space-y-3">
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <p className="font-semibold text-sm text-gray-900 mb-1">For Construction Assistance:</p>
                        <p className="text-sm text-gray-600">Building Permit, Construction Estimate, Site Plan</p>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <p className="font-semibold text-sm text-gray-900 mb-1">For Repair/Improvement:</p>
                        <p className="text-sm text-gray-600">Photos of Current Housing Condition, Repair Estimate</p>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <p className="font-semibold text-sm text-gray-900 mb-1">For Emergency Assistance:</p>
                        <p className="text-sm text-gray-600">Barangay Certificate of Calamity, Incident Report</p>
                      </div>
                      <div className="p-3 bg-orange-50 rounded-lg">
                        <p className="font-semibold text-sm text-gray-900 mb-1">For Relocation:</p>
                        <p className="text-sm text-gray-600">Relocation Notice, Eviction Order (if applicable)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>

          {/* Document Guidelines */}
          <Card className="mt-8">
            <CardHeader className="bg-gray-50">
              <CardTitle>Document Submission Guidelines</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Accepted File Formats:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• PDF (Portable Document Format) - Recommended</li>
                    <li>• JPG/JPEG (Image format)</li>
                    <li>• PNG (Image format)</li>
                    <li>• Maximum file size: 5MB per document</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Document Quality Requirements:</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Clear and readable (no blurred images)</li>
                    <li>• Complete pages (no cut-off information)</li>
                    <li>• Properly oriented (not upside down or sideways)</li>
                    <li>• Original or certified true copies</li>
                  </ul>
                </div>
              </div>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-200">
                <p className="text-sm text-blue-900">
                  <strong>Tip:</strong> Organize your documents in a folder before uploading. Name your files clearly (e.g., "Birth_Certificate.pdf", "Valid_ID.jpg") for easier tracking.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* CTA */}
          <Card className="mt-8 p-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center">
            <h3 className="text-2xl font-semibold mb-4">Ready to Apply?</h3>
            <p className="mb-6 text-blue-100">
              Make sure you have all the required documents prepared before starting your application.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/register">
                <Button size="lg" variant="secondary">Create Account & Apply</Button>
              </Link>
              <Link to="/faq">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                  View FAQs
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
