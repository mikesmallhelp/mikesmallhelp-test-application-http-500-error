import React, { useState } from 'react';
import PageTemplate from './PageTemplate';

const FrontPage = ({ pageDirectory, showLogoutLink = false }: { pageDirectory: string, showLogoutLink?: boolean }) => {
    const [loading, setLoading] = useState(true);

    const content = (
        <div>
            <a href='/working-page'>Page 1</a>
            <a href={`/${pageDirectory}`}>Page 2, where a HTTP 500 error occurs</a>
        </div>
    );

    return (
        <>
            <PageTemplate title={'Test application'} content={content} 
                   loading={loading} setLoading={setLoading} showLogoutLink={showLogoutLink}/>
        </>
    );
};

export default FrontPage;