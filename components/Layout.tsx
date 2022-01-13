import {FC} from "react"
import Head from 'next/head';
import Header from "./items/Header";

interface ILayout {
    title?: string,
    keywords?: string,
    description?: string
}
const Layout: FC<ILayout> = ({children,keywords, title, description}) => {
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