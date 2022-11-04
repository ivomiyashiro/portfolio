import React from 'react';
import { GraphQLLogo, JsLogo, MongoDBLogo, NextLogo, NodeLogo, PostgresqlLogo, ReactLogo, TypeScriptLogo } from '../../../../../components/logos';
import { Card } from '../../../Card';
import { Li, Ul } from '../styles';

export const BackEndPanel = ({ logoSize }) => {
  return (
    <Ul>
      <Li>
        <Card 
          name="React"
          icon={ <JsLogo width={ logoSize } height={ logoSize } /> }
        />
      </Li>
      <Li>
        <Card 
          name="TypeScript"
          icon={ <TypeScriptLogo width={ logoSize } height={ logoSize } /> }
        />
      </Li>
      <Li>
        <Card 
          name="Next"
          icon={ <NextLogo width={ logoSize } height={ logoSize } /> }
        />
      </Li>
      <Li>
        <Card 
          name="Node"
          icon={ <NodeLogo width={ logoSize } height={ logoSize } /> }
        />
      </Li>
      <Li>
        <Card 
          name="MongoDB"
          icon={ <MongoDBLogo width={ logoSize } height={ logoSize } /> }
        />
      </Li>
      <Li>
        <Card 
          name="PostgreSQL"
          icon={ <PostgresqlLogo width={ logoSize } height={ logoSize } /> }
        />
      </Li>
      <Li>
        <Card 
          name="GraphQL"
          icon={ <GraphQLLogo width={ logoSize } height={ logoSize } /> }
        />
      </Li>
    </Ul>
  );
};
