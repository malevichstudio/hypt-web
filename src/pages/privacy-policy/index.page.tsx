import { Text } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';

import { Layout } from '../../components';
import { client } from '../../graphql/client/client';
import {
  GetStaticPageQuery,
  GetStaticPageQueryVariables,
  StaticPage as StaticPageType,
} from '../../graphql/generated';
import { GET_STATIC_PAGE } from '../../graphql/queries/get-static-page.gql';

export const getServerSideProps: GetServerSideProps = async () => {
  const pageData = await client.query<
    GetStaticPageQuery,
    GetStaticPageQueryVariables
  >({
    query: GET_STATIC_PAGE,
    variables: {
      url: 'privacy-policy',
    },
  });

  return {
    props: {
      pageData: pageData.data.getStaticPage,
    },
  };
};

type Props = {
  pageData: StaticPageType;
};

export default function PrivacyPolicy({ pageData }: Props) {
  const contentPage = JSON.parse(pageData.content);

  return (
    <>
      <Head>
        <title>{pageData.title}</title>
        <meta name='description' content={pageData.description} />
      </Head>
      <Layout headerPosition='static'>
        <Text
          as='h1'
          mb='3'
          fontSize='lg'
          fontFamily='medium'
          textAlign='center'
        >
          {pageData.title}
        </Text>
        <Text>{contentPage.text}</Text>
      </Layout>
    </>
  );
}
