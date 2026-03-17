import { Link } from 'react-router';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Award, Phone, Mail, MapPin, Clock, Facebook, Twitter, MessageCircle } from 'lucide-react';

export function ContactPage() {
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
          <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            Get in touch with our team. We're here to help you with your questions and concerns about our assistance programs.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {/* Phone */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-blue-100 rounded-lg">
                    <Phone className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle>Phone</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <p className="text-sm text-gray-500">Main Office</p>
                  <p className="text-lg font-semibold text-gray-900">(02) 1234-5678</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Hotline (Toll-free)</p>
                  <p className="text-lg font-semibold text-gray-900">1-800-GOV-ASSIST</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Mobile</p>
                  <p className="text-lg font-semibold text-gray-900">+63 917-123-4567</p>
                </div>
              </CardContent>
            </Card>

            {/* Email */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-green-100 rounded-lg">
                    <Mail className="h-6 w-6 text-green-600" />
                  </div>
                  <CardTitle>Email</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <div>
                  <p className="text-sm text-gray-500">General Inquiries</p>
                  <p className="text-base font-semibold text-gray-900">assistance@gov.ph</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Application Support</p>
                  <p className="text-base font-semibold text-gray-900">support@gov.ph</p>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Technical Issues</p>
                  <p className="text-base font-semibold text-gray-900">techsupport@gov.ph</p>
                </div>
              </CardContent>
            </Card>

            {/* Address */}
            <Card>
              <CardHeader>
                <div className="flex items-center gap-3">
                  <div className="p-3 bg-orange-100 rounded-lg">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <CardTitle>Office Address</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-2">
                <p className="text-gray-900 font-semibold">Government Assistance Office</p>
                <p className="text-gray-600">
                  123 Government Center<br />
                  Ermita, Manila<br />
                  Metro Manila 1000<br />
                  Philippines
                </p>
                <Button variant="link" className="p-0 h-auto">
                  View on Google Maps →
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Office Hours */}
          <Card className="mb-12">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="p-3 bg-purple-100 rounded-lg">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle>Office Hours</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Regular Schedule</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Monday - Friday:</span>
                      <span className="font-semibold">8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday:</span>
                      <span className="font-semibold">9:00 AM - 12:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday & Holidays:</span>
                      <span className="font-semibold">Closed</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Hotline Hours</h4>
                  <div className="space-y-2 text-gray-600">
                    <div className="flex justify-between">
                      <span>Phone & Email Support:</span>
                      <span className="font-semibold">24/7 Available</span>
                    </div>
                    <p className="text-sm bg-blue-50 p-3 rounded-lg mt-3">
                      <strong className="text-blue-900">Note:</strong> Our online portal is accessible 24/7. 
                      You can submit applications anytime, and our staff will process them during office hours.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Media & Online Channels */}
          <Card className="mb-12">
            <CardHeader>
              <CardTitle>Connect With Us Online</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-blue-100 rounded-lg">
                    <Facebook className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Facebook</p>
                    <p className="text-sm text-gray-600">@GovAssistPortal</p>
                    <Button variant="link" className="p-0 h-auto text-sm">Visit Page →</Button>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-sky-100 rounded-lg">
                    <Twitter className="h-5 w-5 text-sky-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Twitter</p>
                    <p className="text-sm text-gray-600">@GovAssistPH</p>
                    <Button variant="link" className="p-0 h-auto text-sm">Follow Us →</Button>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <MessageCircle className="h-5 w-5 text-green-600" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">Live Chat</p>
                    <p className="text-sm text-gray-600">Available on website</p>
                    <Button variant="link" className="p-0 h-auto text-sm">Start Chat →</Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Quick Links */}
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Need Help?</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Link to="/faq" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    Frequently Asked Questions
                  </Button>
                </Link>
                <Link to="/requirements" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    Document Requirements
                  </Button>
                </Link>
                <Link to="/programs" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    View All Programs
                  </Button>
                </Link>
                <Link to="/register" className="block">
                  <Button variant="outline" className="w-full justify-start">
                    Create an Account
                  </Button>
                </Link>
              </CardContent>
            </Card>

            <Card className="bg-blue-50 border-blue-200">
              <CardHeader>
                <CardTitle>Walk-In Assistance</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-600">
                  Prefer to visit in person? Our staff is ready to assist you at our office. Please bring all required documents and arrive during office hours.
                </p>
                <div className="space-y-2 text-sm">
                  <p className="font-semibold text-gray-900">Before You Visit:</p>
                  <ul className="list-disc list-inside text-gray-600 space-y-1">
                    <li>Check program requirements online</li>
                    <li>Prepare all necessary documents</li>
                    <li>Bring valid ID</li>
                    <li>Arrive early to avoid long queues</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Feedback Section */}
          <Card className="mt-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white">
            <CardHeader>
              <CardTitle className="text-white">We Value Your Feedback</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-6 text-blue-100">
                Your feedback helps us improve our services. If you have suggestions, complaints, or compliments, 
                please don't hesitate to reach out to us through any of our contact channels.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="secondary">Submit Feedback</Button>
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-blue-600">
                  File a Complaint
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}
