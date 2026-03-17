// Mock authentication system using localStorage
export type UserRole = 'applicant' | 'admin' | 'staff';

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  createdAt: string;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}

// Initialize with some demo users
const demoUsers: Array<User & { password: string }> = [
  {
    id: '1',
    email: 'admin@gov.ph',
    password: 'admin123',
    name: 'Admin User',
    role: 'admin',
    createdAt: new Date().toISOString(),
  },
  {
    id: '2',
    email: 'staff@gov.ph',
    password: 'staff123',
    name: 'Staff Member',
    role: 'staff',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    email: 'applicant@email.com',
    password: 'applicant123',
    name: 'John Dela Cruz',
    role: 'applicant',
    createdAt: new Date().toISOString(),
  },
];

// Store users in localStorage
const USERS_KEY = 'gov_assist_users';
const CURRENT_USER_KEY = 'gov_assist_current_user';

// Initialize users if not exists
if (!localStorage.getItem(USERS_KEY)) {
  localStorage.setItem(USERS_KEY, JSON.stringify(demoUsers));
}

export const authService = {
  // Login
  login: async (email: string, password: string): Promise<User> => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const user = users.find((u: typeof demoUsers[0]) => u.email === email && u.password === password);
    
    if (!user) {
      throw new Error('Invalid email or password');
    }

    const { password: _, ...userWithoutPassword } = user;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
    return userWithoutPassword;
  },

  // Register
  register: async (email: string, password: string, name: string): Promise<User> => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    
    if (users.find((u: typeof demoUsers[0]) => u.email === email)) {
      throw new Error('Email already registered');
    }

    const newUser = {
      id: Date.now().toString(),
      email,
      password,
      name,
      role: 'applicant' as UserRole,
      createdAt: new Date().toISOString(),
    };

    users.push(newUser);
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    const { password: _, ...userWithoutPassword } = newUser;
    localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
    return userWithoutPassword;
  },

  // Logout
  logout: () => {
    localStorage.removeItem(CURRENT_USER_KEY);
  },

  // Get current user
  getCurrentUser: (): User | null => {
    const user = localStorage.getItem(CURRENT_USER_KEY);
    return user ? JSON.parse(user) : null;
  },

  // Reset password
  resetPassword: async (email: string): Promise<void> => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const user = users.find((u: typeof demoUsers[0]) => u.email === email);
    
    if (!user) {
      throw new Error('Email not found');
    }

    // In a real app, this would send an email
    // For demo, we just log it
    console.log(`Password reset link sent to ${email}`);
  },

  // Update user profile
  updateProfile: async (userId: string, updates: Partial<User>): Promise<User> => {
    const users = JSON.parse(localStorage.getItem(USERS_KEY) || '[]');
    const userIndex = users.findIndex((u: typeof demoUsers[0]) => u.id === userId);
    
    if (userIndex === -1) {
      throw new Error('User not found');
    }

    users[userIndex] = { ...users[userIndex], ...updates };
    localStorage.setItem(USERS_KEY, JSON.stringify(users));

    const currentUser = authService.getCurrentUser();
    if (currentUser && currentUser.id === userId) {
      const { password: _, ...userWithoutPassword } = users[userIndex];
      localStorage.setItem(CURRENT_USER_KEY, JSON.stringify(userWithoutPassword));
      return userWithoutPassword;
    }

    const { password: _, ...userWithoutPassword } = users[userIndex];
    return userWithoutPassword;
  },
};
