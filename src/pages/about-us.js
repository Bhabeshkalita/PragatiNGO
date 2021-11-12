import * as React from 'react' ;
// import AboutHeader from '../components/common/ImageHeader/imageHeader';
import DiscoverUs from '../components/AboutUs/DiscoverUs/discoverUs';
import MissionVission from '../components/AboutUs/MissionVission/missionVission';
import WhatWeCare from '../components/AboutUs/whatWeCare/whatWeCare';
import Donate from '../components/common/donate/donate';
import Layout from '../components/layout';
import Seo from '../components/seo';
import FixWidth from '../widthTemplate/widthTemplate';
import ImageHeader from '../components/common/ImageHeader/imageHeader';

const AboutUsPage = () => {
    return(
        <FixWidth>
            <Layout>
                <Seo title="AboutUS" />
                <ImageHeader pageName="About Us" quotes="Helping people by charity is the most human thing we can do" />
                <DiscoverUs />
                <MissionVission />
                <WhatWeCare />
                <Donate />
            </Layout>
        </FixWidth>
    )
}

export default AboutUsPage ;