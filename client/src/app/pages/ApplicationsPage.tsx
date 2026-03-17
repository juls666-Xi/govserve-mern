import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { applicationService, Application, ApplicationStatus, AssistanceType } from '../lib/mockDatabase';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { FileText, Search, Filter, Plus } from 'lucide-react';

export function ApplicationsPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [applications, setApplications] = useState<Application[]>([]);
  const [filteredApplications, setFilteredApplications] = useState<Application[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | 'all'>('all');
  const [typeFilter, setTypeFilter] = useState<AssistanceType | 'all'>('all');

  useEffect(() => {
    loadApplications();
  }, []);

  useEffect(() => {
    filterApplications();
  }, [applications, searchQuery, statusFilter, typeFilter]);

  const loadApplications = async () => {
    if (!user) return;
    const apps = await applicationService.getApplications({ applicantId: user.id });
    setApplications(apps);
  };

  const filterApplications = () => {
    let filtered = [...applications];

    if (searchQuery) {
      filtered = filtered.filter(app =>
        app.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.assistanceType.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (statusFilter !== 'all') {
      filtered = filtered.filter(app => app.status === statusFilter);
    }

    if (typeFilter !== 'all') {
      filtered = filtered.filter(app => app.assistanceType === typeFilter);
    }

    setFilteredApplications(filtered);
  };

  const getStatusColor = (status: ApplicationStatus) => {
    switch (status) {
      case 'Pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'Under Review':
        return 'bg-blue-100 text-blue-800';
      case 'Documents Incomplete':
        return 'bg-orange-100 text-orange-800';
      case 'Approved':
        return 'bg-green-100 text-green-800';
      case 'Rejected':
        return 'bg-red-100 text-red-800';
      case 'Ready for Claim':
        return 'bg-purple-100 text-purple-800';
      case 'Claimed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl">My Applications</h1>
          <p className="text-gray-600 mt-1">Track and manage your assistance applications</p>
        </div>
        <Button onClick={() => navigate('/apply')}>
          <Plus className="h-5 w-5 mr-2" />
          New Application
        </Button>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by ID or type..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={statusFilter} onValueChange={(value) => setStatusFilter(value as ApplicationStatus | 'all')}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Statuses</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Under Review">Under Review</SelectItem>
                <SelectItem value="Documents Incomplete">Documents Incomplete</SelectItem>
                <SelectItem value="Approved">Approved</SelectItem>
                <SelectItem value="Rejected">Rejected</SelectItem>
                <SelectItem value="Ready for Claim">Ready for Claim</SelectItem>
                <SelectItem value="Claimed">Claimed</SelectItem>
              </SelectContent>
            </Select>

            <Select value={typeFilter} onValueChange={(value) => setTypeFilter(value as AssistanceType | 'all')}>
              <SelectTrigger>
                <SelectValue placeholder="Filter by type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="Financial Assistance">Financial Assistance</SelectItem>
                <SelectItem value="Medical Assistance">Medical Assistance</SelectItem>
                <SelectItem value="Educational Assistance">Educational Assistance</SelectItem>
                <SelectItem value="Burial Assistance">Burial Assistance</SelectItem>
                <SelectItem value="Food Assistance">Food Assistance</SelectItem>
                <SelectItem value="Housing Assistance">Housing Assistance</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Applications List */}
      <Card>
        <CardHeader>
          <CardTitle>
            Applications ({filteredApplications.length})
          </CardTitle>
        </CardHeader>
        <CardContent>
          {filteredApplications.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <FileText className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No applications found</p>
              <p className="text-sm mt-1">Try adjusting your filters or submit a new application</p>
            </div>
          ) : (
            <div className="space-y-3">
              {filteredApplications.map((app) => (
                <div
                  key={app.id}
                  className="flex flex-col md:flex-row md:items-center justify-between p-4 border rounded-lg hover:bg-gray-50 cursor-pointer transition-colors"
                  onClick={() => navigate(`/applications/${app.id}`)}
                >
                  <div className="flex-1 space-y-1">
                    <div className="flex items-center gap-3">
                      <FileText className="h-5 w-5 text-blue-600" />
                      <div>
                        <p className="font-medium">{app.id}</p>
                        <p className="text-sm text-gray-600">{app.assistanceType}</p>
                      </div>
                    </div>
                    <div className="text-sm text-gray-500 ml-8">
                      <p>Submitted: {new Date(app.createdAt).toLocaleDateString()}</p>
                      <p>Last updated: {new Date(app.updatedAt).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="mt-3 md:mt-0 ml-8 md:ml-0">
                    <Badge className={getStatusColor(app.status)}>{app.status}</Badge>
                    {app.amount && (
                      <p className="text-sm text-gray-600 mt-1">₱{app.amount.toLocaleString()}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
