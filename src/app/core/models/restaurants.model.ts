export class RestaurantDataTable {
  account_id: number = 0;
  account_uidentifier: string = '';
  account_name: string = '';
  user_email: string = '';
  account_created_at: string = '';
  organisation_name: string | null = '';
  organisation_uidentifier: string | null = '';
  owns_default_account: boolean = false;
  plan_type: string = '';
  account_enabled: boolean = false;
  account_notify_on_login: boolean = false;
}

export interface RestaurantResponse {
  start: number;
  recordsTotal: number;
  recordsFiltered: number;
  data?: RestaurantDataTable[];
}

export class RestaurantDetail {
  account_id: number = 0;
  account_uidentifier: string = '';
  account_name: string = '';
  user_email: string = '';
  account_created_at: string = '';
  organisation_name: string = '';
  organisation_uidentifier: string = '';
  plan__name: string = '';
  account_last_access: string = '';
  account_free_trial_status: string = '';
  account_is_default: boolean = false;
  account_is_pilot: boolean = false;
  owner_name: string = '';
  owner_email: string = '';
  account_type: string = '';
}
