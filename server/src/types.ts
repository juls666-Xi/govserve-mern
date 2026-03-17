// User types
export interface IUser {
  _id?: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  role: 'user' | 'admin';
  phone?: string;
  address?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Application types
export interface IApplication {
  _id?: string;
  userId: string;
  programType: string;
  status: 'draft' | 'submitted' | 'under_review' | 'approved' | 'rejected';
  details: Record<string, any>;
  createdAt?: Date;
  updatedAt?: Date;
}

// Appointment types
export interface IAppointment {
  _id?: string;
  userId: string;
  date: Date;
  type: string;
  status: 'scheduled' | 'completed' | 'cancelled';
  notes?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

// Notification types
export interface INotification {
  _id?: string;
  userId: string;
  message: string;
  type: 'info' | 'warning' | 'error' | 'success';
  read: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

// JWT Payload
export interface IJWTPayload {
  userId: string;
  email: string;
  role: string;
}
