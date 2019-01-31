import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Landing from '../components/landing'
import Bloglist from '../components/bloglist'
import TechStack from '../components/techstacks'


const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={['gatsby', 'application', 'react', 'bulma', 'github']}
    />
    <Landing />
    <TechStack />
    <section className="hero">
      <div className="columns">
        <div className="container hero-body">
          <div className="tabs">
            <ul>
              <li className="is-active">
                <Link to="/blog">Blog</Link>
              </li>
              <li title="coming soon">
                <Link to="/">Side Projects</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <Bloglist />
  </Layout>
)

export default IndexPage