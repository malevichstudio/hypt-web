import React from 'react';

import { client } from '../graphql/client/client';
import * as GENERATED from '../graphql/generated';
import { GET_AD } from '../graphql/queries/get-ad.gql';
import { GET_ARTICLES } from '../graphql/queries/get-articles.gql';
import { GET_ARTICLES_BY_CATEGORY_IDS } from '../graphql/queries/get-articles-by-category-ids.gql';
import { GET_EVENTS } from '../graphql/queries/get-events.gql';
import { GET_MAIN_SLIDER } from '../graphql/queries/get-main-slider.gql';
import { GET_OFFERS } from '../graphql/queries/get-offers.gql';
import { GET_VENUES } from '../graphql/queries/get-venues.gql';
import { HomePageProps } from '../types';
import Home from './home/home.page';

export async function getServerSideProps() {
  const slider = await client.query<
    GENERATED.GetMainSliderQuery,
    GENERATED.GetMainSliderQueryVariables
  >({
    query: GET_MAIN_SLIDER,
  });
  const articlesByCategoryIds = await client.query<
    GENERATED.GetArticlesByCategoryIdsQuery,
    GENERATED.GetArticlesByCategoryIdsQueryVariables
  >({
    query: GET_ARTICLES_BY_CATEGORY_IDS,
    variables: {
      ids: [1, 2, 3, 4],
      limit: 3,
    },
  });
  const articles = await client.query<
    GENERATED.GetArticlesQuery,
    GENERATED.GetArticlesQueryVariables
  >({
    query: GET_ARTICLES,
    variables: {
      limit: 10,
    },
  });
  const events = await client.query<
    GENERATED.GetEventsQuery,
    GENERATED.GetEventsQueryVariables
  >({
    query: GET_EVENTS,
    variables: {
      input: {
        isUpcoming: true,
        limit: 10,
      },
    },
  });
  const venues = await client.query<
    GENERATED.GetVenuesQuery,
    GENERATED.GetVenuesQueryVariables
  >({
    query: GET_VENUES,
    variables: {
      categoryId: 14,
      limit: 10,
    },
  });
  const offers = await client.query<
    GENERATED.GetOffersQuery,
    GENERATED.GetOffersQueryVariables
  >({
    query: GET_OFFERS,
    variables: {
      categoryId: 11,
      limit: 4,
    },
  });
  const topBanner = await client.query<
    GENERATED.GetAdQuery,
    GENERATED.GetAdQueryVariables
  >({
    query: GET_AD,
    variables: {
      position: {
        page: GENERATED.PositionPage.Main,
        level: GENERATED.PositionLevel.Top,
      },
    },
  });
  const middleBanner = await client.query<
    GENERATED.GetAdQuery,
    GENERATED.GetAdQueryVariables
  >({
    query: GET_AD,
    variables: {
      position: {
        page: GENERATED.PositionPage.Main,
        level: GENERATED.PositionLevel.Middle,
      },
    },
  });
  const bottomBanner = await client.query<
    GENERATED.GetAdQuery,
    GENERATED.GetAdQueryVariables
  >({
    query: GET_AD,
    variables: {
      position: {
        page: GENERATED.PositionPage.Main,
        level: GENERATED.PositionLevel.Bottom,
      },
    },
  });

  return {
    props: {
      slider: slider?.data.getMainSlider,
      articlesByCategoryIds:
        articlesByCategoryIds.data.getArticlesByCategoryIds,
      articles: articles?.data?.getArticles?.rows,
      events: events.data.getEvents?.rows,
      venues: venues.data.getVenues?.rows,
      offers: offers.data.getOffers?.rows,
      topBanner: topBanner.data.getAd,
      middleBanner: middleBanner.data.getAd,
      bottomBanner: bottomBanner.data.getAd,
    },
  };
}

export default function Index({
  slider,
  articles,
  articlesByCategoryIds,
  events,
  venues,
  offers,
  topBanner,
  middleBanner,
  bottomBanner,
}: HomePageProps) {
  return (
    <Home
      slider={slider}
      articles={articles}
      articlesByCategoryIds={articlesByCategoryIds}
      events={events}
      venues={venues}
      offers={offers}
      topBanner={topBanner}
      middleBanner={middleBanner}
      bottomBanner={bottomBanner}
    />
  );
}
