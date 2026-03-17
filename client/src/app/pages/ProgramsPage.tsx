import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Heart, Briefcase, GraduationCap, Home as HomeIcon, ArrowRight, Award } from 'lucide-react';

export function ProgramsPage() {
  const programs = [
    {
      id: 'medical',
      icon: Heart,
      title: 'Medical Assistance Program',
      description: 'Financial support for medical expenses, hospitalization, and treatment costs',
      color: 'text-red-600',
      bgColor: 'bg-red-50',
      link: '/programs/medical',
    },
    {
      id: 'livelihood',
      icon: Briefcase,
      title: 'Livelihood Assistance Program',
      description: 'Support for small business development and skills training',
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      link: '/programs/livelihood',
    },
    {
      id: 'educational',
      icon: GraduationCap,
      title: 'Educational Assistance Program',
      description: 'Scholarships and educational support for students',
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      link: '/programs/educational',
    },
    {
      id: 'housing',
      icon: HomeIcon,
      title: 'Housing Assistance Program',
      description: 'Programs to help families secure affordable housing',
      color: 'text-orange-600',
      bgColor: 'bg-orange-50',
      link: '/programs/housing',
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
          <h1 className="text-4xl font-bold mb-4">Assistance Programs</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Explore our comprehensive assistance programs designed to support Filipino citizens in various aspects of life. 
            Choose the program that best fits your needs.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {programs.map((program) => (
              <Card key={program.id} className="hover:shadow-xl transition-all">
                <CardHeader>
                  <div className={`${program.bgColor} ${program.color} w-16 h-16 rounded-lg flex items-center justify-center mb-4`}>
                    <program.icon className="h-8 w-8" />
                  </div>
                  <CardTitle className="text-2xl">{program.title}</CardTitle>
                  <CardDescription className="text-base">{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Link to={program.link}>
                    <Button className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle>Ready to Apply?</CardTitle>
                <CardDescription>
                  Create an account or login to start your application process
                </CardDescription>
              </CardHeader>
              <CardContent className="flex gap-4 justify-center">
                <Link to="/register">
                  <Button size="lg">Create Account</Button>
                </Link>
                <Link to="/login">
                  <Button size="lg" variant="outline">Login</Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
