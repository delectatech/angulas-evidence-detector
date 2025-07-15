export class CommentDetail {
  body: string = '';
  date: string = '';
  label: 'gulas' = 'gulas';
  source: string = '';
}

export class Comments {
  elvers_count: number = 0;
  north_elvers_count: number = 0;
  details: CommentDetail[] = [];
}

export enum MenuType {
  GOOGLE = 'GOOGLE',
  WEB_IMG = 'WEB_IMG',
  PDF = 'PDF',
  HTML = 'HTML',
}

export class MenuDetail {
  md5: string = '';
  date: string = '';
  label: 'gulas' = 'gulas';
  type: MenuType = MenuType.GOOGLE;
  sourceLink: string = '';
}

export class Menus {
  elvers_count: number = 0;
  north_elvers_count: number = 0;
  details: MenuDetail[] = [];
}

export class Links {
  tripAdvisorUrl: string | null = null;
  googleUrl: string = '';
  elTenedorUrl: string | null = null;
  facebookUrl: string | null = null;
  twitterUrl: string | null = null;
  instagramUrl: string | null = null;
  michelinUrl: string | null = null;
  yelpUrl: string | null = null;
  glovoUrl: string | null = null;
  justEatUrl: string | null = null;
  uberEatsUrl: string | null = null;
  guruUrl: string | null = null;
}

export class Restaurant {
  restaurantUidentifier: string = '';
  name: string = '';
  streetAddress: string = '';
  numberAddress: string | null = null;
  provinceName: string = '';
  regionName: string = '';
  cityName: string = '';
  postalCode: string = '';
  cityUidentifier: string = '';
  provinceUidentifier: string = '';
  regionUidentifier: string = '';
  postalCodeUidentifier: string = '';
  links: Links = new Links();
  comments: Comments = new Comments();
  menus: Menus = new Menus();
  score: number = 0;
}

export class RestaurantDataTable extends Restaurant {
  // Additional properties for table display
  score_progressBar?: string;
  total_images?: number;
  total_comments?: number;
}

export interface RestaurantResponse {
  start: number;
  recordsTotal: number;
  recordsFiltered: number;
  data?: RestaurantDataTable[];
}

export class RestaurantDetail extends Restaurant {
  // Any additional properties specific to detail view
}
