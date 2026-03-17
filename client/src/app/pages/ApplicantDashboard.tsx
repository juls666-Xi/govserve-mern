import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { applicationService, Application } from '../lib/mockDatabase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { FileText, Calendar, Clock, CheckCircle, XCircle, AlertCircle, Plus } from 'lucide-react';

export function ApplicantDashboard() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [applications, setApplications] = useState<Application[]>([]);
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    approved: 0,
    rejected: 0,
  });

  useEffect(() => {
    loadApplications();
  }, []);

  const loadApplications = async () => {
    if (!user) return;

    const apps = await applicationService.getApplications({ applicantId: user.id });
    setApplications(apps.slice(0, 5)); // Latest 5

    setStats({
      total: apps.length,
      pending: apps.filter(a => a.status === 'Pending' || a.status === 'Under Review').length,
      approved: apps.filter(a => a.status === 'Approved' || a.status === 'Ready for Claim').length,
      rejected: apps.filter(a => a.status === 'Rejected').length,
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Under Review':
        return 'bg-blue-100 text-blue-800';
      case 'Approved':
      case 'Ready for Claim':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl">Welcome back, {user?.name}!</h1>
          <p className="text-gray-600 mt-1">Here's an overview of your applications</p>
        </div>
        <Button onClick={() => navigate('/apply')} size="lg">
          <Plus className="h-5 w-5 mr-2" />
          New Application
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Total Applications</CardTitle>
            <FileText className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{stats.total}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Pending</CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{stats.pending}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Approved</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{stats.approved}</div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Rejected</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{stats.rejected}</div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="cursor-pointer hover:border-blue-500 transition-colors" onClick={() => navigate('/apply')}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-blue-600" />
              Apply for Assistance
            </CardTitle>
            <CardDescription>Submit a new application for government assistance</CardDescription>
          </CardHeader>
        </Card>

        <Card className="cursor-pointer hover:border-blue-500 transition-colors" onClick={() => navigate('/applications')}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-blue-600" />
              Track Applications
            </CardTitle>
            <CardDescription>View and monitor your application status</CardDescription>
          </CardHeader>
        </Card>

        <Card className="cursor-pointer hover:border-blue-500 transition-colors" onClick={() => navigate('/appointments')}>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              Schedule Appointment
            </CardTitle>
            <CardDescription>Book an appointment with our office</CardDescription>
          </CardHeader>
        </Card>
      </div>

      {/* Recent Applications */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>Recent Applications</CardTitle>
            <Button variant="link" onClick={() => navigate('/applications')}>
              View All
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          {applications.length === 0 ? (
            <div className="text-center py-8 text-gray-500">
              <FileText className="h-12 w-12 mx-auto mb-3 opacity-50" />
              <p>No applications yet</p>
              <Button className="mt-4" onClick={() => navigate('/apply')}>
                Submit Your First Application
              </Button>
            </div>
          ) : (
            <div className="space-y-4">
              {applications.map((app) => (
                <div
                  key={app.id}
                  className="flex items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer"
                  onClick={() => navigate(`/applications/${app.id}`)}
                >
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <div>
                        <p className="font-medium">{app.id}</p>
                        <p className="text-sm text-gray-600">{app.assistanceType}</p>
                      </div>
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Submitted {new Date(app.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                  <Badge className={getStatusColor(app.status)}>{app.status}</Badge>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
