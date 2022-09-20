import { AppProvider } from './Context';
import Header from './Header';
import Footer from './Footer';

export const LayoutCoffeeBreak = ({children, headerFooter}) => {
  const { header, footer } = headerFooter || {};

  return (

    <AppProvider>

      <Header data={header}/>

      <main>
        {children}
      </main>

      <Footer data={footer}/>

    </AppProvider>
  )
}