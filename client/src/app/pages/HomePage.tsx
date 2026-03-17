import { Link } from "react-router";
import { useAuth } from "../contexts/AuthContext";
import { Button } from "../components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card";
import {
  FileText,
  UserCheck,
  Calendar,
  Bell,
  Heart,
  Briefcase,
  GraduationCap,
  Home as HomeIcon,
  CheckCircle,
  Upload,
  Search,
  Award,
} from "lucide-react";

export function HomePage() {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = "/";
  };

  const assistancePrograms = [
    {
      icon: Heart,
      title: "Medical Assistance",
      description:
        "Financial aid for medical expenses, hospitalization, and treatment costs for qualified individuals and families.",
    },
    {
      icon: Briefcase,
      title: "Livelihood Assistance",
      description:
        "Support for small business development, skills training, and employment programs to help citizens achieve financial independence.",
    },
    {
      icon: GraduationCap,
      title: "Educational Assistance",
      description:
        "Scholarships and educational support for students from low-income families to pursue their academic goals.",
    },
    {
      icon: HomeIcon,
      title: "Housing Assistance",
      description:
        "Programs to help qualified families secure affordable housing and home improvement assistance.",
    },
  ];

  const howItWorksSteps = [
    {
      icon: UserCheck,
      title: "Register Your Account",
      description:
        "Create a secure account with your personal information to get started with the application process.",
    },
    {
      icon: FileText,
      title: "Submit Application",
      description:
        "Fill out the online application form for your chosen assistance program with accurate information.",
    },
    {
      icon: Upload,
      title: "Upload Documents",
      description:
        "Upload required supporting documents such as IDs, proof of income, and other relevant files.",
    },
    {
      icon: Search,
      title: "Track Your Status",
      description:
        "Monitor your application status in real-time and receive notifications about updates.",
    },
  ];

  const announcements = [
    {
      date: "March 10, 2026",
      title: "New Educational Assistance Program",
      description:
        "We are pleased to announce a new scholarship program for undergraduate students. Applications are now open!",
    },
    {
      date: "March 5, 2026",
      title: "Extended Office Hours",
      description:
        "Our office will be extending service hours during peak application season. Visit us Monday to Saturday, 8AM-6PM.",
    },
    {
      date: "February 28, 2026",
      title: "Online System Upgrade",
      description:
        "Our online application system has been upgraded with new features for better user experience and faster processing.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Award className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-xl font-semibold text-gray-900">
                Gov Assist Portal
              </span>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Home
              </a>
              <Link
                to="/programs"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Assistance Programs
              </Link>
              <Link
                to="/requirements"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                How to Apply
              </Link>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Contact
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              {user ? (
                <>
                  <Link
                    to={
                      user.role === "applicant"
                        ? "/dashboard"
                        : "/admin"
                    }
                  >
                    <Button variant="outline">Dashboard</Button>
                  </Link>
                  <Button
                    onClick={handleLogout}
                    variant="ghost"
                  >
                    Logout
                  </Button>
                </>
              ) : (
                <>
                  <Link to="/login">
                    <Button variant="outline">Login</Button>
                  </Link>
                  <Link to="/register">
                    <Button>Register</Button>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Government Assistance Made Easy
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Apply for government assistance programs online.
                Fast, secure, and accessible to all Filipino
                citizens seeking support.
              </p>
              <div className="flex flex-wrap gap-4">
                {user ? (
                  <Link
                    to={
                      user.role === "applicant"
                        ? "/apply"
                        : "/admin"
                    }
                  >
                    <Button size="lg" variant="secondary">
                      {user.role === "applicant"
                        ? "Apply Now"
                        : "Go to Dashboard"}
                    </Button>
                  </Link>
                ) : (
                  <>
                    <Link to="/register">
                      <Button size="lg" variant="secondary">
                        Apply Now
                      </Button>
                    </Link>
                    <Link to="/login">
                      <Button
                        size="lg"
                        variant="outline"
                        className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600"
                      >
                        Login
                      </Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <FileText className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm">Easy Application</p>
                  </div>
                  <div className="text-center">
                    <CheckCircle className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm">Quick Processing</p>
                  </div>
                  <div className="text-center">
                    <Bell className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm">Real-time Updates</p>
                  </div>
                  <div className="text-center">
                    <Calendar className="h-12 w-12 mx-auto mb-2" />
                    <p className="text-sm">Track Status</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assistance Programs Section */}
      <section id="programs" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Available Assistance Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer various assistance programs designed to
              support Filipino citizens in different aspects of
              life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {assistancePrograms.map((program, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-shadow"
              >
                <CardHeader>
                  <program.icon className="h-12 w-12 text-blue-600 mb-4" />
                  <CardTitle>{program.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>
                    {program.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link to="/programs">
              <Button variant="outline" size="lg">
                View All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* How to Apply Section */}
      <section id="how-to-apply" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              How to Apply
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Follow these simple steps to apply for government
              assistance programs.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorksSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="relative">
                  <div className="bg-blue-600 text-white rounded-full h-16 w-16 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-8 w-8" />
                  </div>
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 w-20 h-20 bg-blue-100 rounded-full -z-10"></div>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            {!user && (
              <Link to="/register">
                <Button size="lg">Get Started Now</Button>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Latest Announcements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Stay updated with the latest news and
              announcements from our office.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {announcements.map((announcement, index) => (
              <Card key={index}>
                <CardHeader>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                    <Bell className="h-4 w-4" />
                    <span>{announcement.date}</span>
                  </div>
                  <CardTitle className="text-xl">
                    {announcement.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">
                    {announcement.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Contact Us
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Have questions? Our team is here to help you
                with your application and inquiries.
              </p>

              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Office Address
                  </h3>
                  <p className="text-gray-600">
                    Government Assistance Office
                    <br />
                    123 Government Center, Manila, Philippines
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Office Hours
                  </h3>
                  <p className="text-gray-600">
                    Monday - Friday: 8:00 AM - 5:00 PM
                    <br />
                    Saturday: 9:00 AM - 12:00 PM
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">
                    Contact Information
                  </h3>
                  <p className="text-gray-600">
                    Phone: (02) 1234-5678
                    <br />
                    Email: assistance@gov.ph
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 rounded-lg p-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                Quick Links
              </h3>
              <div className="space-y-3">
                <Link
                  to="/register"
                  className="block text-blue-600 hover:text-blue-800"
                >
                  → Create an Account
                </Link>
                <Link
                  to="/login"
                  className="block text-blue-600 hover:text-blue-800"
                >
                  → Login to Your Account
                </Link>
                <a
                  href="#programs"
                  className="block text-blue-600 hover:text-blue-800"
                >
                  → View Assistance Programs
                </a>
                <a
                  href="#how-to-apply"
                  className="block text-blue-600 hover:text-blue-800"
                >
                  → Learn How to Apply
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Award className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-lg font-semibold">
                  Gov Assist Portal
                </span>
              </div>
              <p className="text-gray-400 text-sm">
                Making government assistance accessible to all
                Filipino citizens.
              </p>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                Quick Links
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#home" className="hover:text-white">
                    Home
                  </a>
                </li>
                <li>
                  <Link
                    to="/programs"
                    className="hover:text-white"
                  >
                    Programs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/requirements"
                    className="hover:text-white"
                  >
                    How to Apply
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <Link
                    to="/login"
                    className="hover:text-white"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="hover:text-white"
                  >
                    Register
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-white">
                    FAQs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white"
                  >
                    About Us
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-4">
                Contact Info
              </h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>123 Government Center</li>
                <li>Manila, Philippines</li>
                <li>Phone: (02) 1234-5678</li>
                <li>Email: assistance@gov.ph</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; 2026 Government Assistance Portal. All
              rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}