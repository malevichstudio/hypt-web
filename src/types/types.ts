import {
  Ad,
  Article,
  Attraction,
  Event,
  Maybe,
  ModelNameOrder,
  Offer,
  Venue,
} from '../graphql/generated';

export type SelectOptionType = {
  value: number;
  label: string;
};

export enum ModalType {
  login = 'login',
  registration = 'registration',
  guest = 'guest',
  'reset-password' = 'reset-password',
  'new-password' = 'new-password',
  verify = 'verify',
  interests = 'interests',
}

export enum SortType {
  asc = 'ASC',
  desc = 'DESC',
}

export type MainSliderType = Venue & Event & Attraction;

export type HomePageProps = {
  slider: MainSliderType[];
  articles: Article[];
  articlesByCategoryIds: Array<Article[]>;
  events: Event[];
  venues: Venue[];
  offers: Offer[];
  topBanner: Ad;
  middleBanner: Ad;
  bottomBanner: Ad;
};

export type SelectedFileType = {
  preview: string;
  name: string;
};

export type CalendarEventType = {
  id: string | number;
  name: string;
  description: string;
  img: string;
};

export enum FileTypes {
  image = 'image',
  video = 'video',
}

export type LocationType = {
  placeId: string;
  locationName: string;
};

export type PromocodeInfoType = {
  id: number;
  discount: number;
};

export type SeatInfoType = {
  sector?: string;
  row?: number;
  place?: number;
  hall?: string;
  area?: string;
  table?: string;
};

export type OrderItemType = {
  id?: Maybe<number>;
  title?: Maybe<string>;
  date: string | null;
  image?: Maybe<string>;
  price?: Maybe<number>;
  address?: Maybe<string>;
  sector?: Maybe<string>;
  row?: number;
  place?: number;
  discount?: number | null;
  customerId?: number;
  orderId?: number;
  hall?: Maybe<string>;
  area?: Maybe<string>;
  table?: Maybe<string>;
  modelName?: ModelNameOrder;
  ticketType?: string | null;
  startTime?: string | null;
  description?: string | null;
};
