import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { applicationService, Application, ApplicationStatus, AssistanceType } from '../lib/mockDatabase';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '../components/ui/dialog';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { FileText, Search, Eye } from 'lucide-react';
import { toast } from 'sonner';

export function AdminApplications() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [applications, setApplications] = useState<Application[]>([]);
  const [filteredApplications, setFilteredApplications] = useState<Application[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [statusFilter, setStatusFilter] = useState<ApplicationStatus | 'all'>('all');
  const [typeFilter, setTypeFilter] = useState<AssistanceType | 'all'>('all');
  const [selectedApp, setSelectedApp] = useState<Application | null>(null);
  const [isReviewDialogOpen, setIsReviewDialogOpen] = useState(false);
  const [reviewStatus, setReviewStatus] = useState<ApplicationStatus>('Approved');
  const [reviewNotes, setReviewNotes] = useState('');

  useEffect(() => {
    loadApplications();
  }, []);

  useEffect(() => {
    filterApplications();
  }, [applications, searchQuery, statusFilter, typeFilter]);

  const loadApplications = async () => {
    const apps = await applicationService.getApplications({});
    setApplications(apps);
  };

  const filterApplications = () => {
    let filtered = [...applications];

    if (searchQuery) {
      filtered = filtered.filter(app =>
        app.id.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.applicantName.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.applicantEmail.toLowerCase().includes(searchQuery.toLowerCase())
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

  const handleReview = (app: Application) => {
    setSelectedApp(app);
    setReviewStatus('Approved');
    setReviewNotes('');
    setIsReviewDialogOpen(true);
  };

  const handleSubmitReview = async () => {
    if (!selectedApp || !user) return;

    try {
      await applicationService.updateApplication(selectedApp.id, {
        status: reviewStatus,
        reviewedBy: user.name,
        reviewNotes,
      });

      toast.success('Application reviewed successfully');
      setIsReviewDialogOpen(false);
      loadApplications();
    } catch (error) {
      toast.error('Failed to submit review');
    }
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
      <div>
        <h1 className="text-3xl">Manage Applications</h1>
        <p className="text-gray-600 mt-1">Review and process assistance applications</p>
      </div>

      {/* Filters */}
      <Card>
        <CardContent className="pt-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Search by ID, name, or email..."
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

      {/* Applications Table */}
      <Card>
        <CardHeader>
          <CardTitle>Applications ({filteredApplications.length})</CardTitle>
        </CardHeader>
        <CardContent>
          {filteredApplications.length === 0 ? (
            <div className="text-center py-12 text-gray-500">
              <FileText className="h-16 w-16 mx-auto mb-4 opacity-50" />
              <p className="text-lg">No applications found</p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-2">ID</th>
                    <th className="text-left py-3 px-2">Applicant</th>
                    <th className="text-left py-3 px-2">Type</th>
                    <th className="text-left py-3 px-2">Amount</th>
                    <th className="text-left py-3 px-2">Status</th>
                    <th className="text-left py-3 px-2">Date</th>
                    <th className="text-left py-3 px-2">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filteredApplications.map((app) => (
                    <tr key={app.id} className="border-b hover:bg-gray-50">
                      <td className="py-3 px-2 font-medium">{app.id}</td>
                      <td className="py-3 px-2">
                        <div>
                          <p className="font-medium text-sm">{app.applicantName}</p>
                          <p className="text-xs text-gray-500">{app.applicantEmail}</p>
                        </div>
                      </td>
                      <td className="py-3 px-2 text-sm">{app.assistanceType}</td>
                      <td className="py-3 px-2 text-sm">
                        {app.amount ? `₱${app.amount.toLocaleString()}` : '-'}
                      </td>
                      <td className="py-3 px-2">
                        <Badge className={getStatusColor(app.status)}>{app.status}</Badge>
                      </td>
                      <td className="py-3 px-2 text-sm">
                        {new Date(app.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-3 px-2">
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => navigate(`/admin/applications/${app.id}`)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="default"
                            size="sm"
                            onClick={() => handleReview(app)}
                            disabled={app.status === 'Approved' || app.status === 'Rejected'}
                          >
                            Review
                          </Button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Review Dialog */}
      <Dialog open={isReviewDialogOpen} onOpenChange={setIsReviewDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Review Application</DialogTitle>
            <DialogDescription>
              {selectedApp?.id} - {selectedApp?.applicantName}
            </DialogDescription>
          </DialogHeader>
          <div className="space-y-4 mt-4">
            <div className="space-y-2">
              <Label>Decision *</Label>
              <Select value={reviewStatus} onValueChange={(value) => setReviewStatus(value as ApplicationStatus)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Under Review">Under Review</SelectItem>
                  <SelectItem value="Documents Incomplete">Documents Incomplete</SelectItem>
                  <SelectItem value="Approved">Approve</SelectItem>
                  <SelectItem value="Rejected">Reject</SelectItem>
                  <SelectItem value="Ready for Claim">Ready for Claim</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label>Notes</Label>
              <Textarea
                placeholder="Add review notes or feedback..."
                value={reviewNotes}
                onChange={(e) => setReviewNotes(e.target.value)}
                rows={4}
              />
            </div>

            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => setIsReviewDialogOpen(false)}
                className="flex-1"
              >
                Cancel
              </Button>
              <Button onClick={handleSubmitReview} className="flex-1">
                Submit Review
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
