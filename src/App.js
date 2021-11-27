import './App.css';
// import Head from 'react/head'
import Navbar from './components/navbar'
import Overlay from './components/overlay'
import Sidebar from './components/sidebar'
import Header from './components/header'
import AboutSection from './sections/about-section'
import ServicesSection from './sections/services-section'
import PricingSection from './sections/pricing-section'
import CallAction from './sections/action-section'
import BlogSection from './sections/blog-section'
import ClientSection from './sections/clients-section'
import ContactSection from './sections/contact-section'
import FooterSection from './sections/footer-section'
import FooterScripts from './components/footerscripts'

export default function Home() {
  return (
    <div>
      <head>
        <meta charSet="utf-8" />
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

        <title>Abdulrahman Adil | Business Template</title>
      </head>
      <Navbar />
      <Sidebar />
      <Overlay />
      <Header />
      <AboutSection />
      <ServicesSection />
      <PricingSection />
      <CallAction />
      <BlogSection />
      <ClientSection />
      <ContactSection />
      <FooterSection />
      <FooterScripts />

    </div>
  )
}
