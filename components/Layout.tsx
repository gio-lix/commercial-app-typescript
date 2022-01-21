import {FC} from "react"
import Head from 'next/head';
import Header from "./items/Header";
import Footer from "./items/Footer";
import {useRouter} from "next/router";

interface ILayout {
    title?: string,
    keywords?: string,
    description?: string
    hideSideMenu?: boolean
}

const Layout: FC<ILayout> = ({children, hideSideMenu, keywords, title, description}) => {
    return (
        <>
            <div>
                <Head>
                    <title>{title}</title>
                    <meta name='keywords' content={keywords}/>
                    <meta name='description' content={description}/>
                </Head>
                <Header/>
                <div>
                    {children}
                </div>
                {hideSideMenu && <Footer/>}
            </div>
        </>
    )
}
export default Layout
Layout.defaultProps = {
    title: 'E-Commerce',
    keywords: 'Shop',
    description: 'Gothic Shop'
}