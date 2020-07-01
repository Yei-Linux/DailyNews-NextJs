import React from "react";
import Head from "next/head";

const HeadLayout = () => {
  return (
    <Head>
      <title>DailyNews</title>
      <link
        rel="stylesheet"
        href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      ></link>

    <script src="https://kit.fontawesome.com/2bd8f9c084.js" crossorigin="anonymous"></script>
    </Head>
  );
};

export default HeadLayout;
