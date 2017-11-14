import React from 'react'
import styled from 'styled-components'

import Headline from './components/Headline'
import HeadlineSmall from './components/HeadlineSmall'
import Copy from './components/Copy'
import { LinkThemed } from './components/Links'
import { SectionCentered } from './components/Section'

const SponsorContainer = styled.div`
  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
  }
`

const Sponsor = styled.div`
  &:not(:only-child) {
    @media (min-width: 768px) {
      margin-right: 30px;
    }
  }

  a {
    display: table;
    padding: 40px;
    margin: 30px 0;
    justify-content: center;
    background-color: ${props => props.theme.secondary};
    vertical-align: middle;

    @media (max-width: 768px) {
      width: 100%;
    }

    &:hover {
      img {
        opacity: 0.5;
      }
    }
  }

  img {
    ${props => (props.tier === 'main' ? 'height: 60px;' : 'height: 40px;')};
    max-width: 100%;
    display: table-cell;
    transition: all 0.2s ease;

    @media (max-width: 768px) {
      margin: 0 auto;
    }
  }
`

export default ({ sponsors, contact }) => {
  const communitySponsors = sponsors.filter(
    sponsor => sponsor.tier === 'community'
  )

  const supporterSponsors = sponsors.filter(
    sponsor => sponsor.tier === 'supporter'
  )

  const diversitySponsors = sponsors.filter(
    sponsor => sponsor.tier === 'diversity'
  )

  const mainSponsors = sponsors.filter(sponsor => sponsor.tier === 'main')

  const mediaPartners = sponsors.filter(sponsor => sponsor.tier === 'media')

  return (
    <div>
      <Headline>Sponsors</Headline>

      <Copy>
        As a registered not-for-profit event we’re looking for organizations and
        individuals, who are willing to enable us to run the best, accessible
        and inclusive conference possible. If you can help,{' '}
        <LinkThemed href={`mailto:${contact.sponsorship}`}>
          reach out for more details
        </LinkThemed>. We’d love to work with you.
      </Copy>

      <Copy>We’re thankful for our patrons:</Copy>
      <SectionCentered>
        {mainSponsors.length ? (
          <HeadlineSmall>Main Sponsors</HeadlineSmall>
        ) : null}
        <SponsorContainer>
          {mainSponsors.map((sponsor, i) => {
            return (
              <Sponsor key={i} {...sponsor}>
                <a href={sponsor.url}>
                  <img src={sponsor.image} alt={sponsor.name} />
                </a>
              </Sponsor>
            )
          })}
        </SponsorContainer>

        {supporterSponsors.length ? (
          <HeadlineSmall>Supporter Sponsors</HeadlineSmall>
        ) : null}
        <SponsorContainer>
          {supporterSponsors.map((sponsor, i) => {
            return (
              <Sponsor key={i} {...sponsor}>
                <a href={sponsor.url}>
                  <img src={sponsor.image} alt={sponsor.name} />
                </a>
              </Sponsor>
            )
          })}
        </SponsorContainer>

        {communitySponsors.length ? (
          <HeadlineSmall>Community Sponsors</HeadlineSmall>
        ) : null}
        <SponsorContainer>
          {communitySponsors.map((sponsor, i) => {
            return (
              <Sponsor key={i} {...sponsor}>
                <a href={sponsor.url}>
                  <img src={sponsor.image} alt={sponsor.name} />
                </a>
              </Sponsor>
            )
          })}
        </SponsorContainer>

        {diversitySponsors.length ? (
          <HeadlineSmall>Diversity Sponsors</HeadlineSmall>
        ) : null}
        <SponsorContainer>
          {diversitySponsors.map((sponsor, i) => {
            return (
              <Sponsor key={i} {...sponsor}>
                <a href={sponsor.url}>
                  <img src={sponsor.image} alt={sponsor.name} />
                </a>
              </Sponsor>
            )
          })}
        </SponsorContainer>

        {mediaPartners.length ? (
          <HeadlineSmall>Media Partners</HeadlineSmall>
        ) : null}
        <SponsorContainer>
          {mediaPartners.map((sponsor, i) => {
            return (
              <Sponsor key={i} {...sponsor}>
                <a href={sponsor.url}>
                  <img src={sponsor.image} alt={sponsor.name} />
                </a>
              </Sponsor>
            )
          })}
        </SponsorContainer>
      </SectionCentered>
    </div>
  )
}
