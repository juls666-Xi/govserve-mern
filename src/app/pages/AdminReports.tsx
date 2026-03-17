import { useState, useEffect } from 'react';
import { applicationService } from '../lib/mockDatabase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Download, FileText, TrendingUp, Users, DollarSign } from 'lucide-react';
import { toast } from 'sonner';

export function AdminReports() {
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
  const [reportType, setReportType] = useState('overview');

  useEffect(() => {
    loadStatistics();
  }, []);

  const loadStatistics = async () => {
    const statistics = await applicationService.getStatistics();
    setStats(statistics);
  };

  const statusData = [
    { name: 'Pending', value: stats.pending, color: '#FCD34D' },
    { name: 'Under Review', value: stats.underReview, color: '#60A5FA' },
    { name: 'Approved', value: stats.approved, color: '#34D399' },
    { name: 'Rejected', value: stats.rejected, color: '#F87171' },
    { name: 'Ready for Claim', value: stats.readyForClaim, color: '#A78BFA' },
    { name: 'Claimed', value: stats.claimed, color: '#9CA3AF' },
  ];

  const assistanceTypeData = Object.entries(stats.byAssistanceType).map(([name, value]) => ({
    name: name.replace(' Assistance', ''),
    value,
  }));

  // Mock monthly data
  const monthlyData = [
    { month: 'Jan', applications: 15, approved: 12, rejected: 2 },
    { month: 'Feb', applications: 22, approved: 18, rejected: 3 },
    { month: 'Mar', applications: 8, approved: 5, rejected: 2 },
  ];

  const handleExportPDF = () => {
    toast.success('Generating PDF report...');
    // In a real app, this would generate and download a PDF
    setTimeout(() => {
      toast.success('Report downloaded successfully');
    }, 1500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 print:space-y-4">
      <div className="flex justify-between items-center print:hidden">
        <div>
          <h1 className="text-3xl">Reports & Analytics</h1>
          <p className="text-gray-600 mt-1">Generate and view statistical reports</p>
        </div>
        <div className="flex gap-2">
          <Select value={reportType} onValueChange={setReportType}>
            <SelectTrigger className="w-48">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="overview">Overview Report</SelectItem>
              <SelectItem value="monthly">Monthly Report</SelectItem>
              <SelectItem value="assistance">Assistance Types</SelectItem>
            </SelectContent>
          </Select>
          <Button variant="outline" onClick={handlePrint}>
            <FileText className="h-4 w-4 mr-2" />
            Print
          </Button>
          <Button onClick={handleExportPDF}>
            <Download className="h-4 w-4 mr-2" />
            Export PDF
          </Button>
        </div>
      </div>

      {/* Report Header */}
      <div className="hidden print:block text-center mb-8">
        <h1 className="text-2xl font-bold">Government Assistance Program</h1>
        <h2 className="text-xl">Statistical Report</h2>
        <p className="text-gray-600">Generated on {new Date().toLocaleDateString()}</p>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 print:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Total Applications</CardTitle>
            <FileText className="h-4 w-4 text-gray-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{stats.total}</div>
            <p className="text-xs text-gray-500">All time submissions</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Approval Rate</CardTitle>
            <TrendingUp className="h-4 w-4 text-green-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">
              {stats.total > 0 ? ((stats.approved / stats.total) * 100).toFixed(1) : 0}%
            </div>
            <p className="text-xs text-gray-500">{stats.approved} approved</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Pending Review</CardTitle>
            <Users className="h-4 w-4 text-yellow-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{stats.pending + stats.underReview}</div>
            <p className="text-xs text-gray-500">Needs attention</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm">Claimed</CardTitle>
            <DollarSign className="h-4 w-4 text-blue-500" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl">{stats.claimed}</div>
            <p className="text-xs text-gray-500">Successfully processed</p>
          </CardContent>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 print:gap-4">
        {/* Status Distribution */}
        <Card className="print:break-inside-avoid">
          <CardHeader>
            <CardTitle>Application Status Distribution</CardTitle>
            <CardDescription>Current status breakdown of all applications</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={statusData.filter(d => d.value > 0)}
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
        <Card className="print:break-inside-avoid">
          <CardHeader>
            <CardTitle>Applications by Assistance Type</CardTitle>
            <CardDescription>Distribution of requested assistance types</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={assistanceTypeData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" angle={-45} textAnchor="end" height={100} />
                <YAxis />
                <Tooltip />
                <Bar dataKey="value" fill="#3B82F6" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Monthly Trend */}
        <Card className="lg:col-span-2 print:break-inside-avoid">
          <CardHeader>
            <CardTitle>Monthly Application Trends</CardTitle>
            <CardDescription>Application submissions and decisions over time</CardDescription>
          </CardHeader>
          <CardContent>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={monthlyData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="applications" stroke="#3B82F6" strokeWidth={2} name="Total Applications" />
                <Line type="monotone" dataKey="approved" stroke="#34D399" strokeWidth={2} name="Approved" />
                <Line type="monotone" dataKey="rejected" stroke="#F87171" strokeWidth={2} name="Rejected" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      {/* Detailed Statistics Table */}
      <Card className="print:break-inside-avoid">
        <CardHeader>
          <CardTitle>Detailed Statistics</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="text-left py-3 px-4">Status</th>
                  <th className="text-right py-3 px-4">Count</th>
                  <th className="text-right py-3 px-4">Percentage</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-3 px-4">Pending</td>
                  <td className="text-right py-3 px-4">{stats.pending}</td>
                  <td className="text-right py-3 px-4">
                    {stats.total > 0 ? ((stats.pending / stats.total) * 100).toFixed(1) : 0}%
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Under Review</td>
                  <td className="text-right py-3 px-4">{stats.underReview}</td>
                  <td className="text-right py-3 px-4">
                    {stats.total > 0 ? ((stats.underReview / stats.total) * 100).toFixed(1) : 0}%
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Approved</td>
                  <td className="text-right py-3 px-4">{stats.approved}</td>
                  <td className="text-right py-3 px-4">
                    {stats.total > 0 ? ((stats.approved / stats.total) * 100).toFixed(1) : 0}%
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Rejected</td>
                  <td className="text-right py-3 px-4">{stats.rejected}</td>
                  <td className="text-right py-3 px-4">
                    {stats.total > 0 ? ((stats.rejected / stats.total) * 100).toFixed(1) : 0}%
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Ready for Claim</td>
                  <td className="text-right py-3 px-4">{stats.readyForClaim}</td>
                  <td className="text-right py-3 px-4">
                    {stats.total > 0 ? ((stats.readyForClaim / stats.total) * 100).toFixed(1) : 0}%
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="py-3 px-4">Claimed</td>
                  <td className="text-right py-3 px-4">{stats.claimed}</td>
                  <td className="text-right py-3 px-4">
                    {stats.total > 0 ? ((stats.claimed / stats.total) * 100).toFixed(1) : 0}%
                  </td>
                </tr>
                <tr className="font-bold">
                  <td className="py-3 px-4">Total</td>
                  <td className="text-right py-3 px-4">{stats.total}</td>
                  <td className="text-right py-3 px-4">100%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
