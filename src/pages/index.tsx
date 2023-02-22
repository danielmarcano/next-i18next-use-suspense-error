import { HomeView } from "$/views/Home";
import { GetStaticProps, NextPage } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  return <HomeView />;
};

export default Home;

// Uncomment this getStaticProps function, to prevent infinite Network calls when switching between languages
// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale as string, ['common', 'home'])),
//     },
//   };
// };
