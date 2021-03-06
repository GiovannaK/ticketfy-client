import * as React from 'react';
import SwiperCore, {
  Navigation, Autoplay,
} from 'swiper';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import 'react-toastify/dist/ReactToastify.min.css';
import { ToastContainer } from 'react-toastify';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ProfileProvider } from '../context/ProfileContext';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-coverflow';
import theme from '../theme/theme';

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_CLIENT_KEY as string);
const reactQueryClient = new QueryClient();

export default function MyApp(props: AppProps) {
  const { Component, pageProps } = props;
  SwiperCore.use([Navigation, Autoplay]);
  return (
    <>
      <Head>
        <title>TicketFy</title>
        <link href="/favicon.ico" rel="icon" />
        <meta content="minimum-scale=1, initial-scale=1, width=device-width" name="viewport" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <QueryClientProvider client={reactQueryClient}>
          <ProfileProvider>
            <Elements stripe={stripePromise}>
              <Component {...pageProps} />
              <ToastContainer
                position="bottom-left"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
              />
            </Elements>
          </ProfileProvider>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}
