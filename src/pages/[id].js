import React, {useEffect, useState}from 'react';
import Search from '../component/Search/Search';
import * as Realm from 'realm-web';
import Headlines from '../component/Headlines/Headlines';

const AricleDetails = () => {
    const [headlines, setHeadlines] = useState([]); 

    useEffect( () => { 
        async function fetchData() {
            const APP_ID = "9jahive-frontend-dev-skada";
            const app = new Realm.App({ id: APP_ID })
            const credentials = Realm.Credentials.anonymous();
        try {
            const user = await app.logIn(credentials);
            const allHeadlines = await user.functions.getAllHeadlines();
            // const oneHeadline = await user.functions.getOneHeadline();
            setHeadlines(allHeadlines);
            console.log("Successfully logged in!", user.id)
        }catch(err){
            console.error("Failed to log in", err.message)
            console.error(err);
        }
        }
       fetchData() 
    }, []);
    return (
        <div>
            <Search />
            <Headlines headlines={headlines} />
        </div>
    )
}
