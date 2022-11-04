import { SectionTitle } from '../../components';
import { Layout, SectionLayout } from '../../styles';
import { A, Date, Div, H3, Li, List, ListItem, Span, Ul, Wrapper } from './styles';

export const Experience = ({ innerRef, isVisible }) => {
  return (
    <SectionLayout id='experience' ref={ innerRef }>
      <Layout maxWidth="800px" isVisible={ isVisible }>
        <SectionTitle>
          Profesional Experience
        </SectionTitle>
        <Div>
          <Ul>
            <Li>
              <Wrapper>
                <H3>Web Developer</H3><Span> @ </Span><A href="https://www.ryutech.cl/" target="_blank">Ryutech</A>
              </Wrapper>
              <Date>
                Dicember 2020 - Today
              </Date>
              <List>
                <ListItem>
                  Development and mantainance Ryutech's e-commerce using technologies such as React, Next.js, TypeScript, Styled Components and states managers like Context API.
                </ListItem>
                <ListItem>
                  Consumption of the Shopify Storefront API to fetch data using technologies such as GraphQL and Apollo Client.
                </ListItem>
                <ListItem>
                  Control and versioning of the aplication using Git and Github.
                </ListItem>
                <ListItem>
                  Maintainance of the old Ryutech's web site built with Shopify, using technologies such as HTML, CSS, JavaScript and Liquid.
                </ListItem>
              </List>
            </Li>
            <Li>
              <Wrapper>
                <H3>Administrative</H3><Span> @ </Span><A href="https://www.ryutech.cl/" target="_blank">Ryutech</A>
              </Wrapper>
              <Date>
                August 2017 - Dicember 2020
              </Date>
              <List>
                <ListItem>
                  Managment of the products's price and stock published on different market places such as Mercado Libre, Linio and Shopify.
                </ListItem>
                <ListItem>
                  Maintenance and control of the history of sales produced from the different market places.
                </ListItem>
                <ListItem>
                  Analysis of prices and commercial behavior of the competition.
                </ListItem>
                <ListItem>
                  Customer support through social media.
                </ListItem>
              </List>
            </Li>
          </Ul>
        </Div>
      </Layout>
    </SectionLayout>
  );
};
