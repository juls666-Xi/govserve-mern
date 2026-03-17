import { useState } from 'react';
import { useNavigate } from 'react-router';
import { useAuth } from '../contexts/AuthContext';
import { applicationService, AssistanceType, Document } from '../lib/mockDatabase';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Alert, AlertDescription } from '../components/ui/alert';
import { Upload, X, FileText, CheckCircle, AlertCircle } from 'lucide-react';
import { toast } from 'sonner';

export function ApplyPage() {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [assistanceType, setAssistanceType] = useState<AssistanceType | ''>('');
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [documents, setDocuments] = useState<Document[]>([]);

  const assistanceTypes: AssistanceType[] = [
    'Financial Assistance',
    'Medical Assistance',
    'Educational Assistance',
    'Burial Assistance',
    'Food Assistance',
    'Housing Assistance',
  ];

  const requiredDocuments = [
    'Valid ID (Government-issued)',
    'Proof of Residency (Barangay Certificate)',
    'Certificate of Indigency',
    'Medical Certificate (for medical assistance)',
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    const newDocs: Document[] = Array.from(files).map(file => ({
      id: `doc-${Date.now()}-${Math.random()}`,
      name: file.name,
      type: file.type,
      size: file.size,
      uploadedAt: new Date().toISOString(),
      url: URL.createObjectURL(file),
    }));

    setDocuments([...documents, ...newDocs]);
  };

  const removeDocument = (id: string) => {
    setDocuments(documents.filter(doc => doc.id !== id));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user || !assistanceType) return;

    if (documents.length === 0) {
      toast.error('Please upload at least one required document');
      return;
    }

    setIsSubmitting(true);

    try {
      await applicationService.createApplication({
        applicantId: user.id,
        applicantName: user.name,
        applicantEmail: user.email,
        assistanceType: assistanceType as AssistanceType,
        description,
        amount: amount ? parseFloat(amount) : undefined,
        documents,
      });

      toast.success('Application submitted successfully!');
      navigate('/applications');
    } catch (error) {
      toast.error('Failed to submit application');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div>
        <h1 className="text-3xl">Apply for Assistance</h1>
        <p className="text-gray-600 mt-1">Fill out the form below to submit your application</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Application Details */}
        <Card>
          <CardHeader>
            <CardTitle>Application Details</CardTitle>
            <CardDescription>Provide information about the assistance you need</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="assistanceType">Type of Assistance *</Label>
              <Select value={assistanceType} onValueChange={(value) => setAssistanceType(value as AssistanceType)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select assistance type" />
                </SelectTrigger>
                <SelectContent>
                  {assistanceTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description">Description *</Label>
              <Textarea
                id="description"
                placeholder="Describe your situation and why you need assistance..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={5}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="amount">Requested Amount (Optional)</Label>
              <Input
                id="amount"
                type="number"
                placeholder="₱ 0.00"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <p className="text-sm text-gray-500">Leave blank if not applicable</p>
            </div>
          </CardContent>
        </Card>

        {/* Document Upload */}
        <Card>
          <CardHeader>
            <CardTitle>Required Documents</CardTitle>
            <CardDescription>Upload the required documents (PDF, JPG, PNG)</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <p className="font-medium mb-2">Please prepare the following documents:</p>
                <ul className="list-disc list-inside space-y-1 text-sm">
                  {requiredDocuments.map((doc, index) => (
                    <li key={index}>{doc}</li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>

            <div className="space-y-4">
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors">
                <input
                  type="file"
                  id="file-upload"
                  className="hidden"
                  accept=".pdf,.jpg,.jpeg,.png"
                  multiple
                  onChange={handleFileUpload}
                />
                <label htmlFor="file-upload" className="cursor-pointer">
                  <Upload className="h-12 w-12 mx-auto text-gray-400 mb-3" />
                  <p className="text-gray-600">Click to upload or drag and drop</p>
                  <p className="text-sm text-gray-500 mt-1">PDF, JPG, PNG (Max 5MB each)</p>
                </label>
              </div>

              {documents.length > 0 && (
                <div className="space-y-2">
                  <Label>Uploaded Documents ({documents.length})</Label>
                  {documents.map((doc) => (
                    <div key={doc.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <FileText className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="text-sm font-medium">{doc.name}</p>
                          <p className="text-xs text-gray-500">
                            {(doc.size / 1024).toFixed(2)} KB
                          </p>
                        </div>
                      </div>
                      <Button
                        type="button"
                        variant="ghost"
                        size="sm"
                        onClick={() => removeDocument(doc.id)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Applicant Information */}
        <Card>
          <CardHeader>
            <CardTitle>Applicant Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>Full Name</Label>
                <Input value={user?.name} disabled />
              </div>
              <div className="space-y-2">
                <Label>Email</Label>
                <Input value={user?.email} disabled />
              </div>
            </div>
            <Alert>
              <CheckCircle className="h-4 w-4" />
              <AlertDescription>
                Make sure your profile information is up to date before submitting.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>

        {/* Submit */}
        <div className="flex gap-3">
          <Button
            type="button"
            variant="outline"
            onClick={() => navigate('/')}
            className="flex-1"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            disabled={isSubmitting || !assistanceType || !description}
            className="flex-1"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Application'}
          </Button>
        </div>
      </form>
    </div>
  );
}
