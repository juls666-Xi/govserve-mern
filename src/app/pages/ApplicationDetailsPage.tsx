import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router';
import { applicationService, Application } from '../lib/mockDatabase';
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Separator } from '../components/ui/separator';
import { ArrowLeft, FileText, Calendar, User, DollarSign, AlertCircle } from 'lucide-react';

export function ApplicationDetailsPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [application, setApplication] = useState<Application | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadApplication();
  }, [id]);

  const loadApplication = async () => {
    if (!id) return;
    
    try {
      const app = await applicationService.getApplicationById(id);
      setApplication(app);
    } catch (error) {
      console.error('Failed to load application:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getStatusColor = (status: string) => {
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

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
      </div>
    );
  }

  if (!application) {
    return (
      <div className="text-center py-12">
        <AlertCircle className="h-16 w-16 mx-auto mb-4 text-gray-400" />
        <h2 className="text-2xl mb-2">Application Not Found</h2>
        <p className="text-gray-600 mb-6">The application you're looking for doesn't exist.</p>
        <Button onClick={() => navigate('/applications')}>
          Back to Applications
        </Button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="icon" onClick={() => navigate('/applications')}>
          <ArrowLeft className="h-5 w-5" />
        </Button>
        <div className="flex-1">
          <h1 className="text-3xl">Application Details</h1>
          <p className="text-gray-600 mt-1">{application.id}</p>
        </div>
        <Badge className={`${getStatusColor(application.status)} text-base px-4 py-2`}>
          {application.status}
        </Badge>
      </div>

      {/* Application Information */}
      <Card>
        <CardHeader>
          <CardTitle>Application Information</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <FileText className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="text-sm text-gray-600">Assistance Type</p>
                <p className="font-medium">{application.assistanceType}</p>
              </div>
            </div>

            {application.amount && (
              <div className="flex items-start gap-3">
                <DollarSign className="h-5 w-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="text-sm text-gray-600">Requested Amount</p>
                  <p className="font-medium">₱{application.amount.toLocaleString()}</p>
                </div>
              </div>
            )}

            <div className="flex items-start gap-3">
              <User className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="text-sm text-gray-600">Applicant</p>
                <p className="font-medium">{application.applicantName}</p>
                <p className="text-sm text-gray-500">{application.applicantEmail}</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <Calendar className="h-5 w-5 text-blue-600 mt-0.5" />
              <div>
                <p className="text-sm text-gray-600">Submitted</p>
                <p className="font-medium">{new Date(application.createdAt).toLocaleDateString()}</p>
                <p className="text-sm text-gray-500">
                  Last updated: {new Date(application.updatedAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          </div>

          <Separator />

          <div>
            <p className="text-sm text-gray-600 mb-2">Description</p>
            <p className="text-sm whitespace-pre-wrap">{application.description}</p>
          </div>
        </CardContent>
      </Card>

      {/* Documents */}
      <Card>
        <CardHeader>
          <CardTitle>Uploaded Documents ({application.documents.length})</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-2">
            {application.documents.map((doc) => (
              <div key={doc.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3">
                  <FileText className="h-5 w-5 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium">{doc.name}</p>
                    <p className="text-xs text-gray-500">
                      {(doc.size / 1024).toFixed(2)} KB • Uploaded {new Date(doc.uploadedAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <Button variant="outline" size="sm">
                  View
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Review Notes (if available) */}
      {application.reviewNotes && (
        <Card>
          <CardHeader>
            <CardTitle>Review Notes</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              {application.reviewedBy && (
                <p className="text-sm text-gray-600">
                  Reviewed by: <span className="font-medium">{application.reviewedBy}</span>
                </p>
              )}
              <p className="text-sm whitespace-pre-wrap">{application.reviewNotes}</p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Appointment (if scheduled) */}
      {application.appointmentDate && (
        <Card>
          <CardHeader>
            <CardTitle>Scheduled Appointment</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-blue-600" />
              <div>
                <p className="font-medium">
                  {new Date(application.appointmentDate).toLocaleDateString()}
                </p>
                {application.appointmentTime && (
                  <p className="text-sm text-gray-600">{application.appointmentTime}</p>
                )}
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Status Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Status Timeline</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className="h-2 w-2 rounded-full bg-blue-600"></div>
                <div className="flex-1 w-px bg-blue-200"></div>
              </div>
              <div className="flex-1 pb-4">
                <p className="font-medium">Application Submitted</p>
                <p className="text-sm text-gray-600">
                  {new Date(application.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>

            <div className="flex gap-3">
              <div className="flex flex-col items-center">
                <div className={`h-2 w-2 rounded-full ${
                  application.status !== 'Pending' ? 'bg-blue-600' : 'bg-gray-300'
                }`}></div>
                {application.status !== 'Pending' && application.status !== 'Under Review' && (
                  <div className="flex-1 w-px bg-blue-200"></div>
                )}
              </div>
              <div className="flex-1 pb-4">
                <p className="font-medium">Under Review</p>
                {application.status !== 'Pending' && (
                  <p className="text-sm text-gray-600">
                    {new Date(application.updatedAt).toLocaleDateString()}
                  </p>
                )}
              </div>
            </div>

            {(application.status === 'Approved' || application.status === 'Ready for Claim' || application.status === 'Claimed') && (
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="h-2 w-2 rounded-full bg-green-600"></div>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-green-600">Approved</p>
                  <p className="text-sm text-gray-600">
                    {new Date(application.updatedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            )}

            {application.status === 'Rejected' && (
              <div className="flex gap-3">
                <div className="flex flex-col items-center">
                  <div className="h-2 w-2 rounded-full bg-red-600"></div>
                </div>
                <div className="flex-1">
                  <p className="font-medium text-red-600">Rejected</p>
                  <p className="text-sm text-gray-600">
                    {new Date(application.updatedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
