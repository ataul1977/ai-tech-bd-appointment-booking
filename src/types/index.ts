export type ServiceCategory =
  | 'ai-engineering'
  | 'software-architecture'
  | 'cloud-devops'
  | 'cybersecurity'
  | 'enterprise-consulting';

export interface Service {
  id: string;
  title: string;
  category: ServiceCategory;
  description: string;
  durationMinutes: number;
  price: number;
  depositAmount: number;
  depositPercentage: number;
  popular?: boolean;
  staffIds: string[];
  features: string[];
}

export interface StaffSchedule {
  dayOfWeek: number;
  startTime: string;
  endTime: string;
  isAvailable: boolean;
}

export interface StaffMember {
  id: string;
  name: string;
  role: string;
  department: string;
  email: string;
  phone: string;
  avatar: string;
  bio: string;
  rating: number;
  reviewsCount: number;
  specialties: string[];
  schedule: StaffSchedule[];
  isOnLeave?: boolean;
}

export type AppointmentStatus =
  | 'confirmed'
  | 'in-progress'
  | 'completed'
  | 'cancelled'
  | 'rescheduled';

export type PaymentMethod = 'none' | 'direct' | 'card' | 'bkash' | 'nagad' | 'stripe';

export interface PaymentDetails {
  depositAmount?: number;
  totalAmount?: number;
  currency?: 'USD' | 'BDT';
  paymentStatus?: 'not_required' | 'paid' | 'pending' | 'refunded';
  paymentMethod?: PaymentMethod;
  transactionId?: string;
  paidAt?: string;
  receiptNumber?: string;
  emailDeliveryStatus?: 'delivered' | 'sent' | 'pending';
  emailDispatchedAt?: string;
}

export interface ClientInfo {
  name: string;
  email: string;
  phone: string;
  company?: string;
  notes?: string;
  meetingFormat: 'online-meet' | 'in-person-dhaka' | 'phone';
}

export interface DispatchRecipientLog {
  id: string;
  channel: 'email' | 'sms' | 'specialist_portal' | 'operations_ledger';
  recipient: string;
  recipientRole: string;
  subject: string;
  status: 'delivered' | 'sent' | 'processing' | 'failed';
  timestamp: string;
  details: string;
}

export interface CustomPackageOption {
  id: string;
  name: string;
  price: number;
  durationMinutes: number;
  description: string;
}

export interface NotificationLog {
  id: string;
  appointmentId: string;
  type: 'sms' | 'email';
  recipient: string;
  title: string;
  content: string;
  sentAt: string;
  status: 'delivered' | 'sent' | 'scheduled' | 'failed';
  triggerType: 'booking-confirmed' | 'reminder-24h' | 'reminder-2h' | 'manual-blast';
}

export interface Appointment {
  id: string;
  bookingRef: string;
  serviceId: string;
  staffId: string;
  date: string;
  timeSlot: string;
  status: AppointmentStatus;
  client: ClientInfo;
  payment: PaymentDetails;
  createdAt: string;
  updatedAt: string;
  smsReminderSent: boolean;
  emailConfirmationSent: boolean;
  meetingLink?: string;
  dispatches?: DispatchRecipientLog[];
}

export type SupportedLanguage = 'en' | 'bn' | 'ar' | 'es';

export interface TimeSlot {
  time: string;
  available: boolean;
  isLockedByOther?: boolean;
  lockedUntil?: number;
}

export interface AdminUser {
  id: string;
  userId: string;
  email: string;
  name: string;
  role: string;
  lastLogin: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  content: string;
  rating: number;
  serviceTag: string;
  date: string;
  verified?: boolean;
}

export interface BookingSlotConfig {
  slotDurationMinutes: number;
  startHour: string;
  endHour: string;
  customSlots: string[];
  blockedDates: string[];
  blockedSlots: Record<string, string[]>;
}
