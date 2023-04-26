import React, { useState, useEffect } from "react";
import Search from "../component/Search/Search";
import * as Realm from "realm-web";
import { useLocation } from "react-router-dom";
import Headlines from "../component/Headlines/Headlines";

const Home = () => {
  const [headlines, setHeadlines] = useState([]);
  const { search } = useLocation();
  const query = new URLSearchParams(search).get("term");

  useEffect(() => {
    async function fetchData() {
      const APP_ID = "9jahive-frontend-dev-skada";
      const app = new Realm.App({ id: APP_ID });
      const credentials = Realm.Credentials.anonymous();
      try {
        const user = await app.logIn(credentials);
        const search = await user.functions.generalSearch(query);
        setHeadlines(search);
        console.log("Successfully logged in!", user.id);
      } catch (err) {
        console.error("Failed to log in", err.message);
        console.error(err);
      }
    }
    fetchData();
  }, [query]);

  return (
    <div>
      <Search />
      <Headlines headlines={headlines} />
    </div>
  );
};

export default Home;
