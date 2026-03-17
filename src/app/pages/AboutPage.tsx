import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Award, Target, Eye, Heart, Users, TrendingUp, CheckCircle } from 'lucide-react';

export function AboutPage() {
  const stats = [
    { label: 'Families Assisted', value: '50,000+', icon: Users },
    { label: 'Applications Processed', value: '120,000+', icon: CheckCircle },
    { label: 'Success Rate', value: '85%', icon: TrendingUp },
    { label: 'Years of Service', value: '15+', icon: Heart },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We serve with empathy and understanding, recognizing the dignity of every person who seeks our help.',
    },
    {
      icon: CheckCircle,
      title: 'Integrity',
      description: 'We uphold the highest standards of honesty, transparency, and accountability in all our operations.',
    },
    {
      icon: Users,
      title: 'Service Excellence',
      description: 'We are committed to providing efficient, responsive, and quality service to all citizens.',
    },
    {
      icon: Award,
      title: 'Fairness',
      description: 'We ensure equal opportunity and non-discrimination in the delivery of assistance programs.',
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
          <h1 className="text-4xl font-bold mb-4">About Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Dedicated to serving Filipino citizens through accessible, efficient, and transparent government assistance programs.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <stat.icon className="h-8 w-8 text-blue-600 mx-auto mb-2" />
                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Target className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-2xl">Our Mission</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  To provide accessible, efficient, and responsive government assistance to Filipino citizens in need, 
                  empowering them to overcome challenges and improve their quality of life through comprehensive support 
                  programs in health, education, livelihood, and housing. We strive to serve with integrity, compassion, 
                  and excellence, ensuring that no one is left behind in our nation's progress.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Eye className="h-8 w-8 text-green-600" />
                  </div>
                  <CardTitle className="text-2xl">Our Vision</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  A Philippines where every citizen has equal access to government assistance and support services, 
                  where poverty is alleviated through sustainable programs, and where technology bridges the gap between 
                  government and people. We envision a society where families are empowered to achieve self-sufficiency, 
                  children have access to quality education, and communities thrive through collaborative development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About the Office */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">About the Government Assistance Office</h2>
            <div className="space-y-4 text-gray-600">
              <p>
                The Government Assistance Office was established in 2011 with the primary mandate of providing social welfare 
                services and assistance programs to Filipino citizens in need. Over the past 15 years, we have grown from a 
                small office serving a few thousand beneficiaries to a comprehensive assistance hub that has helped over 50,000 
                families across various programs.
              </p>
              <p>
                Our office operates under the principles of transparency, accountability, and service excellence. We work closely 
                with local government units, barangays, and community organizations to identify families in need and deliver 
                assistance effectively. Our programs are designed based on the actual needs of our communities, with regular 
                assessments and improvements to ensure maximum impact.
              </p>
              <p>
                In 2025, we launched this online portal to make our services more accessible and efficient. Citizens can now 
                apply for assistance from the comfort of their homes, track their application status in real-time, and receive 
                updates through digital notifications. This digital transformation has significantly reduced processing times 
                and improved transparency in our operations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Core Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="p-4 bg-blue-100 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <value.icon className="h-8 w-8 text-blue-600" />
                  </div>
                  <CardTitle>{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Overview */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Medical Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Financial support for medical expenses, covering hospitalization, surgeries, medicines, dialysis, 
                  chemotherapy, and other health-related needs for families who cannot afford medical care.
                </p>
                <Link to="/programs/medical">
                  <Button variant="link" className="p-0">Learn more →</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Livelihood Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Business capital, skills training, and employment support to help individuals and families achieve 
                  financial independence through sustainable income-generating activities.
                </p>
                <Link to="/programs/livelihood">
                  <Button variant="link" className="p-0">Learn more →</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Educational Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Scholarships and educational support for elementary, high school, and college students from low-income 
                  families, ensuring that every child has access to quality education.
                </p>
                <Link to="/programs/educational">
                  <Button variant="link" className="p-0">Learn more →</Button>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Housing Assistance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Support for housing construction, home improvement, rental subsidies, and emergency shelter to help 
                  families secure safe and decent living conditions.
                </p>
                <Link to="/programs/housing">
                  <Button variant="link" className="p-0">Learn more →</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="bg-gradient-to-r from-blue-600 to-blue-800 text-white p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h3>
            <p className="text-xl mb-8 text-blue-100">
              Whether you need assistance or want to learn more about our programs, we're here to help.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/programs">
                <Button size="lg" variant="secondary">View All Programs</Button>
              </Link>
              <Link to="/contact">
                <Button size="lg" variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                  Contact Us
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}
