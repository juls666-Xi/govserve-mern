import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Home as HomeIcon, Award, CheckCircle, FileText, Clock, DollarSign } from 'lucide-react';

export function HousingAssistancePage() {
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
      <section className="bg-gradient-to-r from-orange-600 to-orange-800 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-4">
            <HomeIcon className="h-12 w-12" />
            <h1 className="text-4xl font-bold">Housing Assistance Program</h1>
          </div>
          <p className="text-xl text-orange-100 max-w-3xl">
            Programs to help qualified Filipino families secure affordable housing, home improvement assistance, and shelter support for a safe and decent place to live.
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
                    The Housing Assistance Program aims to provide every Filipino family with access to safe, decent, and affordable housing. 
                    We recognize that having a home is a basic human right and a foundation for family stability and progress.
                  </p>
                  <p className="text-gray-600">
                    Our program offers various forms of housing assistance including financial aid for home construction, home improvement 
                    and repair grants, rental subsidies for homeless families, relocation assistance for informal settlers, and emergency 
                    shelter support for disaster-affected families.
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
                      'Must be a Filipino citizen aged 21 years old and above',
                      'Must be a resident of the covered jurisdiction for at least 1 year',
                      'Must not own any residential property (for housing construction assistance)',
                      'Must demonstrate stable source of income or livelihood',
                      'Family income must fall within the low-income or economic housing category',
                      'Must be willing to comply with housing program requirements and amortization (if applicable)',
                      'Priority given to families with children, senior citizens, persons with disabilities, and disaster victims',
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
                      <h4 className="font-semibold text-gray-900 mb-3">Housing Assistance Types:</h4>
                      
                      <div className="space-y-4">
                        <div className="border-l-4 border-blue-600 pl-4">
                          <h5 className="font-semibold text-gray-800 mb-1">Housing Construction Assistance</h5>
                          <p className="text-sm text-gray-600 mb-2">
                            Financial assistance or housing materials for building a basic housing unit. Includes site development, 
                            foundation, walls, roofing, flooring, and basic utilities connection.
                          </p>
                          <p className="text-sm font-semibold text-blue-600">Up to ₱150,000 per family</p>
                        </div>

                        <div className="border-l-4 border-green-600 pl-4">
                          <h5 className="font-semibold text-gray-800 mb-1">Home Improvement & Repair Program</h5>
                          <p className="text-sm text-gray-600 mb-2">
                            Grants for repairing damaged houses, improving substandard housing, or renovating unsafe structures. 
                            Covers roofing repair, wall reconstruction, flooring, electrical wiring, and plumbing.
                          </p>
                          <p className="text-sm font-semibold text-green-600">Up to ₱50,000 per household</p>
                        </div>

                        <div className="border-l-4 border-purple-600 pl-4">
                          <h5 className="font-semibold text-gray-800 mb-1">Rental Subsidy Program</h5>
                          <p className="text-sm text-gray-600 mb-2">
                            Monthly rental assistance for homeless families or those displaced due to disasters, urban development, 
                            or eviction. Provided for a limited period while family secures permanent housing.
                          </p>
                          <p className="text-sm font-semibold text-purple-600">₱3,000 - ₱5,000 per month (up to 6 months)</p>
                        </div>

                        <div className="border-l-4 border-orange-600 pl-4">
                          <h5 className="font-semibold text-gray-800 mb-1">Relocation Assistance</h5>
                          <p className="text-sm text-gray-600 mb-2">
                            Support for families relocating from danger zones or informal settlements. Includes moving costs, 
                            temporary shelter, and livelihood assistance during transition period.
                          </p>
                          <p className="text-sm font-semibold text-orange-600">Up to ₱30,000 per family</p>
                        </div>

                        <div className="border-l-4 border-red-600 pl-4">
                          <h5 className="font-semibold text-gray-800 mb-1">Emergency Shelter Assistance</h5>
                          <p className="text-sm text-gray-600 mb-2">
                            Immediate housing support for families affected by natural disasters, fires, or emergencies. 
                            Provides temporary shelter, emergency repair kits, and basic housing materials.
                          </p>
                          <p className="text-sm font-semibold text-red-600">Up to ₱75,000 per affected family</p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-orange-50 p-4 rounded-lg">
                      <p className="text-sm text-orange-900">
                        <strong>Payment Terms:</strong> Some housing assistance may require affordable monthly amortization 
                        or community service participation depending on the program type and total assistance value.
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
                      <h5 className="font-semibold text-gray-900 mb-3">Basic Requirements:</h5>
                      <ul className="space-y-3">
                        {[
                          'Valid Government-issued ID (applicant and spouse)',
                          'Birth Certificate (PSA/NSO Copy)',
                          'Marriage Certificate (if married)',
                          'Barangay Certificate of Residency',
                          'Certificate of Indigency or Low Income',
                          'Income Tax Return (ITR) or Certificate of Employment',
                          'Proof of Income (pay slips, business permits, etc.)',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <FileText className="h-5 w-5 text-blue-600 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h5 className="font-semibold text-gray-900 mb-3">Additional Requirements (Depending on Program Type):</h5>
                      <ul className="space-y-3">
                        {[
                          'Certificate of No Property Holdings or Tax Declaration',
                          'Lot Ownership Documents or Certificate of Lot Award',
                          'Building Permit or Construction Estimate (for construction assistance)',
                          'Photos of Current Housing Condition (for repair program)',
                          'Barangay Certificate of Calamity (for emergency assistance)',
                          'Relocation Notice or Eviction Order (for relocation assistance)',
                        ].map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <FileText className="h-5 w-5 text-orange-600 mt-0.5 flex-shrink-0" />
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
              <Card className="bg-orange-50 border-orange-200">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <DollarSign className="h-5 w-5" />
                    Financial Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold text-gray-900">Construction:</p>
                      <p className="text-gray-600">Up to ₱150,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Repair/Improvement:</p>
                      <p className="text-gray-600">Up to ₱50,000</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Rental Subsidy:</p>
                      <p className="text-gray-600">₱3,000-₱5,000/month</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Emergency Shelter:</p>
                      <p className="text-gray-600">Up to ₱75,000</p>
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
                      <p className="font-semibold text-gray-900">Regular Applications:</p>
                      <p className="text-gray-600">20-30 business days</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">Emergency Cases:</p>
                      <p className="text-gray-600">3-5 business days</p>
                    </div>
                    <div className="bg-red-50 p-3 rounded border border-red-200">
                      <p className="text-red-800">
                        <strong>Note:</strong> Emergency shelter assistance for disaster victims is prioritized for immediate processing.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Program Benefits</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="text-sm text-gray-600 space-y-2">
                    <li>• Affordable payment terms</li>
                    <li>• Technical assistance</li>
                    <li>• Construction supervision</li>
                    <li>• Quality materials</li>
                    <li>• Community development</li>
                    <li>• Property security</li>
                    <li>• Safe neighborhoods</li>
                    <li>• Access to basic utilities</li>
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
                      <span className="font-semibold text-orange-600">1.</span>
                      Create an account or login
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-orange-600">2.</span>
                      Choose your housing assistance type
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-orange-600">3.</span>
                      Complete the application form
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-orange-600">4.</span>
                      Upload required documents
                    </li>
                    <li className="flex gap-2">
                      <span className="font-semibold text-orange-600">5.</span>
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
