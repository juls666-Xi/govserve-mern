// Mock database for applications
export type AssistanceType = 
  | 'Financial Assistance'
  | 'Medical Assistance'
  | 'Educational Assistance'
  | 'Burial Assistance'
  | 'Food Assistance'
  | 'Housing Assistance';

export type ApplicationStatus = 
  | 'Pending'
  | 'Under Review'
  | 'Documents Incomplete'
  | 'Approved'
  | 'Rejected'
  | 'Ready for Claim'
  | 'Claimed';

export interface Document {
  id: string;
  name: string;
  type: string;
  size: number;
  uploadedAt: string;
  url: string; // Mock URL for preview
}

export interface Application {
  id: string;
  applicantId: string;
  applicantName: string;
  applicantEmail: string;
  assistanceType: AssistanceType;
  status: ApplicationStatus;
  description: string;
  amount?: number;
  documents: Document[];
  createdAt: string;
  updatedAt: string;
  reviewedBy?: string;
  reviewNotes?: string;
  appointmentDate?: string;
  appointmentTime?: string;
}

export interface Appointment {
  id: string;
  applicantId: string;
  applicantName: string;
  date: string;
  time: string;
  purpose: string;
  status: 'Scheduled' | 'Completed' | 'Cancelled';
  createdAt: string;
}

export interface Notification {
  id: string;
  userId: string;
  title: string;
  message: string;
  type: 'info' | 'success' | 'warning' | 'error';
  read: boolean;
  createdAt: string;
}

const APPLICATIONS_KEY = 'gov_assist_applications';
const APPOINTMENTS_KEY = 'gov_assist_appointments';
const NOTIFICATIONS_KEY = 'gov_assist_notifications';

// Demo applications
const demoApplications: Application[] = [
  {
    id: 'APP-2026-001',
    applicantId: '3',
    applicantName: 'John Dela Cruz',
    applicantEmail: 'applicant@email.com',
    assistanceType: 'Medical Assistance',
    status: 'Under Review',
    description: 'Request for medical assistance for dialysis treatment',
    amount: 50000,
    documents: [
      {
        id: 'doc1',
        name: 'Valid_ID.pdf',
        type: 'application/pdf',
        size: 245000,
        uploadedAt: new Date(2026, 2, 10).toISOString(),
        url: '#',
      },
      {
        id: 'doc2',
        name: 'Medical_Certificate.pdf',
        type: 'application/pdf',
        size: 512000,
        uploadedAt: new Date(2026, 2, 10).toISOString(),
        url: '#',
      },
    ],
    createdAt: new Date(2026, 2, 10).toISOString(),
    updatedAt: new Date(2026, 2, 12).toISOString(),
  },
  {
    id: 'APP-2026-002',
    applicantId: '3',
    applicantName: 'John Dela Cruz',
    applicantEmail: 'applicant@email.com',
    assistanceType: 'Financial Assistance',
    status: 'Approved',
    description: 'Emergency financial assistance for family needs',
    amount: 15000,
    documents: [
      {
        id: 'doc3',
        name: 'Valid_ID.pdf',
        type: 'application/pdf',
        size: 245000,
        uploadedAt: new Date(2026, 1, 5).toISOString(),
        url: '#',
      },
      {
        id: 'doc4',
        name: 'Certificate_of_Indigency.pdf',
        type: 'application/pdf',
        size: 312000,
        uploadedAt: new Date(2026, 1, 5).toISOString(),
        url: '#',
      },
    ],
    createdAt: new Date(2026, 1, 5).toISOString(),
    updatedAt: new Date(2026, 1, 20).toISOString(),
    reviewedBy: 'Admin User',
    reviewNotes: 'All requirements met. Approved for processing.',
  },
];

// Initialize if not exists
if (!localStorage.getItem(APPLICATIONS_KEY)) {
  localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(demoApplications));
}

if (!localStorage.getItem(APPOINTMENTS_KEY)) {
  localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify([]));
}

if (!localStorage.getItem(NOTIFICATIONS_KEY)) {
  localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify([]));
}

export const applicationService = {
  // Create application
  createApplication: async (data: Omit<Application, 'id' | 'createdAt' | 'updatedAt' | 'status'>): Promise<Application> => {
    const applications = JSON.parse(localStorage.getItem(APPLICATIONS_KEY) || '[]');
    const year = new Date().getFullYear();
    const count = applications.length + 1;
    
    const newApplication: Application = {
      ...data,
      id: `APP-${year}-${count.toString().padStart(3, '0')}`,
      status: 'Pending',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };

    applications.push(newApplication);
    localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(applications));

    // Create notification
    notificationService.createNotification({
      userId: data.applicantId,
      title: 'Application Submitted',
      message: `Your application for ${data.assistanceType} has been submitted successfully.`,
      type: 'success',
    });

    return newApplication;
  },

  // Get all applications
  getApplications: async (filters?: {
    applicantId?: string;
    status?: ApplicationStatus;
    assistanceType?: AssistanceType;
    searchQuery?: string;
  }): Promise<Application[]> => {
    let applications = JSON.parse(localStorage.getItem(APPLICATIONS_KEY) || '[]');

    if (filters?.applicantId) {
      applications = applications.filter((app: Application) => app.applicantId === filters.applicantId);
    }

    if (filters?.status) {
      applications = applications.filter((app: Application) => app.status === filters.status);
    }

    if (filters?.assistanceType) {
      applications = applications.filter((app: Application) => app.assistanceType === filters.assistanceType);
    }

    if (filters?.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      applications = applications.filter((app: Application) => 
        app.id.toLowerCase().includes(query) ||
        app.applicantName.toLowerCase().includes(query) ||
        app.applicantEmail.toLowerCase().includes(query)
      );
    }

    return applications.sort((a: Application, b: Application) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  },

  // Get application by ID
  getApplicationById: async (id: string): Promise<Application | null> => {
    const applications = JSON.parse(localStorage.getItem(APPLICATIONS_KEY) || '[]');
    return applications.find((app: Application) => app.id === id) || null;
  },

  // Update application
  updateApplication: async (id: string, updates: Partial<Application>): Promise<Application> => {
    const applications = JSON.parse(localStorage.getItem(APPLICATIONS_KEY) || '[]');
    const index = applications.findIndex((app: Application) => app.id === id);

    if (index === -1) {
      throw new Error('Application not found');
    }

    applications[index] = {
      ...applications[index],
      ...updates,
      updatedAt: new Date().toISOString(),
    };

    localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(applications));

    // Create notification for status changes
    if (updates.status) {
      const app = applications[index];
      notificationService.createNotification({
        userId: app.applicantId,
        title: 'Application Status Updated',
        message: `Your application ${app.id} status has been updated to: ${updates.status}`,
        type: updates.status === 'Approved' ? 'success' : updates.status === 'Rejected' ? 'error' : 'info',
      });
    }

    return applications[index];
  },

  // Delete application
  deleteApplication: async (id: string): Promise<void> => {
    let applications = JSON.parse(localStorage.getItem(APPLICATIONS_KEY) || '[]');
    applications = applications.filter((app: Application) => app.id !== id);
    localStorage.setItem(APPLICATIONS_KEY, JSON.stringify(applications));
  },

  // Get statistics
  getStatistics: async (): Promise<{
    total: number;
    pending: number;
    underReview: number;
    approved: number;
    rejected: number;
    readyForClaim: number;
    claimed: number;
    byAssistanceType: Record<AssistanceType, number>;
  }> => {
    const applications = JSON.parse(localStorage.getItem(APPLICATIONS_KEY) || '[]');

    const stats = {
      total: applications.length,
      pending: 0,
      underReview: 0,
      approved: 0,
      rejected: 0,
      readyForClaim: 0,
      claimed: 0,
      byAssistanceType: {} as Record<AssistanceType, number>,
    };

    applications.forEach((app: Application) => {
      switch (app.status) {
        case 'Pending':
          stats.pending++;
          break;
        case 'Under Review':
          stats.underReview++;
          break;
        case 'Approved':
          stats.approved++;
          break;
        case 'Rejected':
          stats.rejected++;
          break;
        case 'Ready for Claim':
          stats.readyForClaim++;
          break;
        case 'Claimed':
          stats.claimed++;
          break;
      }

      stats.byAssistanceType[app.assistanceType] = (stats.byAssistanceType[app.assistanceType] || 0) + 1;
    });

    return stats;
  },
};

export const appointmentService = {
  // Create appointment
  createAppointment: async (data: Omit<Appointment, 'id' | 'createdAt'>): Promise<Appointment> => {
    const appointments = JSON.parse(localStorage.getItem(APPOINTMENTS_KEY) || '[]');
    
    const newAppointment: Appointment = {
      ...data,
      id: `APT-${Date.now()}`,
      createdAt: new Date().toISOString(),
    };

    appointments.push(newAppointment);
    localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(appointments));

    // Create notification
    notificationService.createNotification({
      userId: data.applicantId,
      title: 'Appointment Scheduled',
      message: `Your appointment has been scheduled for ${data.date} at ${data.time}.`,
      type: 'success',
    });

    return newAppointment;
  },

  // Get appointments
  getAppointments: async (applicantId?: string): Promise<Appointment[]> => {
    let appointments = JSON.parse(localStorage.getItem(APPOINTMENTS_KEY) || '[]');

    if (applicantId) {
      appointments = appointments.filter((apt: Appointment) => apt.applicantId === applicantId);
    }

    return appointments.sort((a: Appointment, b: Appointment) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  },

  // Update appointment
  updateAppointment: async (id: string, updates: Partial<Appointment>): Promise<Appointment> => {
    const appointments = JSON.parse(localStorage.getItem(APPOINTMENTS_KEY) || '[]');
    const index = appointments.findIndex((apt: Appointment) => apt.id === id);

    if (index === -1) {
      throw new Error('Appointment not found');
    }

    appointments[index] = { ...appointments[index], ...updates };
    localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(appointments));

    return appointments[index];
  },

  // Delete appointment
  deleteAppointment: async (id: string): Promise<void> => {
    let appointments = JSON.parse(localStorage.getItem(APPOINTMENTS_KEY) || '[]');
    appointments = appointments.filter((apt: Appointment) => apt.id !== id);
    localStorage.setItem(APPOINTMENTS_KEY, JSON.stringify(appointments));
  },
};

export const notificationService = {
  // Create notification
  createNotification: (data: Omit<Notification, 'id' | 'createdAt' | 'read'>): void => {
    const notifications = JSON.parse(localStorage.getItem(NOTIFICATIONS_KEY) || '[]');
    
    const newNotification: Notification = {
      ...data,
      id: `NOT-${Date.now()}`,
      read: false,
      createdAt: new Date().toISOString(),
    };

    notifications.push(newNotification);
    localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notifications));
  },

  // Get notifications
  getNotifications: (userId: string): Notification[] => {
    let notifications = JSON.parse(localStorage.getItem(NOTIFICATIONS_KEY) || '[]');
    notifications = notifications.filter((notif: Notification) => notif.userId === userId);
    return notifications.sort((a: Notification, b: Notification) => 
      new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime()
    );
  },

  // Mark as read
  markAsRead: (id: string): void => {
    const notifications = JSON.parse(localStorage.getItem(NOTIFICATIONS_KEY) || '[]');
    const index = notifications.findIndex((notif: Notification) => notif.id === id);

    if (index !== -1) {
      notifications[index].read = true;
      localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notifications));
    }
  },

  // Mark all as read
  markAllAsRead: (userId: string): void => {
    const notifications = JSON.parse(localStorage.getItem(NOTIFICATIONS_KEY) || '[]');
    notifications.forEach((notif: Notification) => {
      if (notif.userId === userId) {
        notif.read = true;
      }
    });
    localStorage.setItem(NOTIFICATIONS_KEY, JSON.stringify(notifications));
  },

  // Get unread count
  getUnreadCount: (userId: string): number => {
    const notifications = JSON.parse(localStorage.getItem(NOTIFICATIONS_KEY) || '[]');
    return notifications.filter((notif: Notification) => notif.userId === userId && !notif.read).length;
  },
};
