export enum Action {
  Manage = 'Manage',
  Create = 'Create',
  Read = 'Read',
  Update = 'Update',
  Delete = 'Delete',
  Event = 'Event',

  // Delete = 'delete',
  // Delete = 'delete',
}
// ['pending', 'active', 'completed', 'cancelled'] 
export enum ProductTypeEnum {
  CROP = 'Crop',
  LIVESTOCK = 'Livestock',
  
}
export enum BusinessTypeEnum {
  FARMER = 'farmer',
  SUPPLIER = 'supplier',
  
}
export enum FarmStatusEnum {
  NOTACTIVE = 'notActive',
  PENDING = 'pending',
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  DEACTIVATED = 'deactivated',
  REJECTED = 'rejected',
}

export enum ProductStatusEnum {
  NOTACTIVE = 'notActive',
  PENDING = 'pending',
  ACTIVE = 'active',
  SUSPENDED = 'suspended',
  DEACTIVATED = 'deactivated',
  REJECTED = 'rejected',
}
