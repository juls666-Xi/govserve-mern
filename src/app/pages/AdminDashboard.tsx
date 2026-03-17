import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { applicationService, Application, appointmentService, Appointment } from '../lib/mockDatabase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import { FileText, Users, Clock, CheckCircle, XCircle, Calendar, TrendingUp } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

export function AdminDashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    underReview: 0,
    approved: 0,
    rejected: 0,
    readyForClaim: 0,
    claimed: 0,
    byAssistanceType: {} as Record<string, number>,
  });
  const [recentApplications, setRecentApplications] = useState<Application[]>([]);
  const [upcomingAppointments, setUpcomingAppointments] = useState<Appointment[]>([]);

  useEffect(() => {
    loadDashboardData();
  }, []);

  const loadDashboardData = async () => {
    const statistics = await applicationService.getStatistics();
    setStats(statistics);

    const apps = await applicationService.getApplications({});
    setRecentApplications(apps.slice(0, 5));

    const appointments = await appointmentService.getAppointments();
    setUpcomingAppointments(appointments.filter(a => a.status === 'Scheduled').slice(0, 5));
  };

  const statusData = [
    { name: 'Pending', value: stats.pending, color: '#FCD34D' },
    { name: 'Under Review', value: stats.underReview, color: '#60A5FA' },
    { name: 'Approved', value: stats.approved, color: '#34D399' },
    { name: 'Rejected', value: stats.rejected, color: '#F87171' },
  ];

  const assistanceTypeData = Object.entries(stats.byAssistanceType).map(([name, value]) => ({
    name: name.replace(' Assistance', ''),
    value,
  }));

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Under Review':
        return 'bg-blue-100 text-blue-800';
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl">Admin Dashboard</h1>
        <p className="text-gray-600 mt-1">Overview of government assistance applications</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Total Applications</CardTitle>
            <FileText className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{stats.total}</div>
            <p className="text-xs text-gray-500 mt-1">All time</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Pending Review</CardTitle>
            <Clock className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{stats.pending + stats.underReview}</div>
            <p className="text-xs text-gray-500 mt-1">Needs attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Approved</CardTitle>
            <CheckCircle className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{stats.approved}</div>
            <p className="text-xs text-gray-500 mt-1">
              {stats.total > 0 ? ((stats.approved / stats.total) * 100).toFixed(1) : 0}% approval rate
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Rejected</CardTitle>
            <XCircle className="h-4 w-4 text-red-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{stats.rejected}</div>
            <p className="text-xs text-gray-500 mt-1">
              {stats.total > 0 ? ((stats.rejected / stats.total) * 100).toFixed(1) : 0}% rejection rate
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Status Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Application Status Distribution</CardTitle>
            <CardDescription>Current status of all applications</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusData}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {statusData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Assistance Type Distribution */}
        <Card>
          <CardHeader>
            <CardTitle>Applications by Type</CardTitle>
            <CardDescription>Distribution of assistance types requested</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={assistanceTypeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={80} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Applications */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Recent Applications</CardTitle>
              <button
                onClick={() => navigate('/admin/applications')}
                className="text-sm text-blue-600 hover:underline"
              >
                View All
              </button>
            </div>
          </CardHeader>
          <CardContent>
            {recentApplications.length === 0 ? (
              <p className="text-center text-gray-500 py-8">No applications yet</p>
            ) : (
              <div className="space-y-3">
                {recentApplications.map((app) => (
                  <div
                    key={app.id}
                    className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 cursor-pointer"
                    onClick={() => navigate(`/admin/applications/${app.id}`)}
                  >
                    <div className="flex-1">
                      <p className="font-medium text-sm">{app.id}</p>
                      <p className="text-xs text-gray-600">{app.applicantName}</p>
                      <p className="text-xs text-gray-500">{app.assistanceType}</p>
                    </div>
                    <Badge className={getStatusColor(app.status)}>{app.status}</Badge>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Upcoming Appointments */}
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle>Upcoming Appointments</CardTitle>
              <button
                onClick={() => navigate('/admin/appointments')}
                className="text-sm text-blue-600 hover:underline"
              >
                View All
              </button>
            </div>
          </CardHeader>
          <CardContent>
            {upcomingAppointments.length === 0 ? (
              <p className="text-center text-gray-500 py-8">No upcoming appointments</p>
            ) : (
              <div className="space-y-3">
                {upcomingAppointments.map((apt) => (
                  <div key={apt.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex items-center gap-3">
                      <Calendar className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium text-sm">{apt.applicantName}</p>
                        <p className="text-xs text-gray-600">
                          {new Date(apt.date).toLocaleDateString()} at {apt.time}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
