import * as React from 'react' ;
import ImageHeader from '../components/common/ImageHeader/imageHeader';
import ContectDetails from '../components/contactUs/contectDetails/contactDetails';
import WriteToUs from '../components/contactUs/writeToUs/writeToUs';
import Layout from '../components/layout';
import Seo from '../components/seo';
import FixWidth from '../widthTemplate/widthTemplate';


const ContectUsPage = () => {
    return(
        <FixWidth>
            <Layout>
                <Seo title="Contact Us" />
                <ImageHeader pageName="Contact Us" quotes="Help people, even when you know they can't help you back" />
                <ContectDetails />
                <WriteToUs />
            </Layout>
        </FixWidth>
    )
}

export default ContectUsPage ;