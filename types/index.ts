// Service types
export type ServiceLevel = 'zaklad' | 'rust' | 'pro';
export type ServiceType = 'web' | 'marketing' | 'automatizace' | 'obsah';

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  level: ServiceLevel;
  type: ServiceType;
  price: number | null;
  priceNote?: string;
  priceType: 'yearly' | 'monthly' | 'one-time' | 'custom';
  features: string[];
  isPopular?: boolean;
}

// Contact form types
export interface ContactFormData {
  name: string;
  email: string;
  role: 'makler' | 'poradce' | 'jine';
  message: string;
  service?: string;
}

// Order form types
export interface OrderFormData {
  name: string;
  email: string;
  role: 'makler' | 'poradce';
  note?: string;
  serviceName: string;
}

// Module types
export interface Module {
  id: string;
  icon: string;
  title: string;
  description: string;
  features: string[];
  href: string;
}

// Step types
export interface Step {
  number: number;
  title: string;
  description: string;
}

// Feature types
export interface Feature {
  icon: string;
  title: string;
  description: string;
}

// CRM types (for future)
export interface Client {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'makler' | 'poradce' | 'jine';
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  source: string;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Lead {
  id: string;
  clientId: string;
  serviceName: string;
  status: 'pending' | 'in_progress' | 'completed' | 'cancelled';
  value?: number;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

// API Response types
export interface ApiResponse<T> {
  data?: T;
  error?: string;
  success: boolean;
}

// Pagination types
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}
