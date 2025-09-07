
export enum UserType {
  USER = 'user',
  ADMIN = 'admin',
  CUSTOMER= 'customer',
  FARMER= 'farmer',
  SUPER_ADMIN = 'super_admin',
}

export enum UserStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
  PENDING = 'pending',
  SUSPENDED = 'suspended',
}

export enum OtpType {
  EMAIL_VERIFICATION = 'EmailVerification',
  PHONE_VERIFICATION = 'PhoneVerification',
  PASSWORD_RESET = 'PasswordReset',
  TWO_FACTOR_AUTHENTICATION = '2fa',
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  OTHER = 'other',
}