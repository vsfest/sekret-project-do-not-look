import React from 'react'
import styled from 'styled-components'
import { CSS, JS, Decompress } from '../data'

import Headline from './components/Headline'
import Copy from './components/Copy'
import { LinkThemed } from './components/Links'

const Schedule = styled.div`
  display: flex;
  flex-wrap: wrap;
  text-align: center;
`

const Conference = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.secondary};
  padding: 30px;
  margin-right: 15px;
  margin-bottom: 30px;
  width: 100%;
  text-align: left;

  p {
    margin: 0;
  }

  @media (min-width: 700px) {
    width: calc(33% - 15px);
  }

  a {
    color: ${props => props.theme.primary};

    &:hover {
      color: ${props => props.theme.primaryHover};
    }
  }
`

export default () => {
  return (
    <div>
      <Headline>Schedule & Tickets</Headline>
      <p>
        The conference is a part of a bigger family of events.{' '}
        <strong>
          Limited Early Bird tickets available till December 1.
        </strong>{' '}
        <LinkThemed href={CSS.titoLink}>Purchase a pass &rarr;</LinkThemed>
      </p>
      <Copy>Our programme will be announced by January 2018.</Copy>
      <Schedule>
        <Conference {...CSS}>
          <LinkThemed href={CSS.url}>
            <div>
              <p>{CSS.title}</p>
              <span>{CSS.date}</span>
            </div>
          </LinkThemed>
        </Conference>

        <Conference {...JS}>
          <LinkThemed href={JS.url}>
            <div>
              <p>{JS.title}</p>
              <p>{JS.date}</p>
            </div>
          </LinkThemed>
        </Conference>

        <Conference {...Decompress}>
          <LinkThemed href={Decompress.url}>
            <div>
              <p>{Decompress.title}</p>
              <p>{Decompress.date}</p>
            </div>
          </LinkThemed>
        </Conference>
      </Schedule>
    </div>
  )
}
