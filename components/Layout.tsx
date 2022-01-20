import {FC} from "react"
import Head from 'next/head';
import Header from "./items/Header";
import Footer from "./items/Footer";
import {useRouter} from "next/router";

interface ILayout {
    title?: string,
    keywords?: string,
    description?: string
}

const Layout: FC<ILayout> = ({children, keywords, title, description}) => {
    const {pathname} = useRouter()
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
                {pathname === '/' && <Footer/>}
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