import { Card } from '../../../Card';
import { CssLogo, HtmlLogo, JsLogo, MongoDBLogo, NextLogo, NodeLogo, TailwindLogo, PostgresqlLogo, ReactLogo, SassLogo, TypeScriptLogo, GitLogo, PythonLogo, ShopifyLogo, GraphQLLogo, WordPressLogo, FigmaLogo } from '../../../../../components/logos';
import { Li, Ul } from '../styles';

export const AllPanel = ({ logoSize }) => {
  return (
    <Ul>
      <Li>
        <Card
          name="HTML"
          icon={ <HtmlLogo width={ logoSize } height={ logoSize } /> }
        />
      </Li>
      <Li>
        <Card 
          name="CSS"
          icon={ <CssLogo width={ logoSize } height={ logoSize } /> }
        />
      </Li>
      <Li>
        <Card 
          name="JavaScript"
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
          name="React"
          icon={ <ReactLogo width={ logoSize } height={ logoSize } /> }
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
          name="Tailwind"
          icon={ <TailwindLogo width={ logoSize } height={ logoSize } /> }
        />
      </Li>
      <Li>
        <Card 
          name="Sass"
          icon={ <SassLogo width={ logoSize } height={ logoSize } /> }
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
      <Li>
        <Card 
          name="Git"
          icon={ <GitLogo width={ logoSize } height={ logoSize } /> }
        />
      </Li>
      <Li>
        <Card 
          name="Python"
          icon={ <PythonLogo width={ logoSize } height={ logoSize } /> }
        />
      </Li>
      <Li>
        <Card 
          name="Shopify"
          icon={ <ShopifyLogo width={ logoSize } height={ logoSize } /> }
        />
      </Li>
      <Li>
        <Card 
          name="WordPress"
          icon={ <WordPressLogo width={ logoSize } height={ logoSize } /> }
        />
      </Li>
      <Li>
        <Card 
          name="Figma"
          icon={ <FigmaLogo width={ logoSize } height={ logoSize } /> }
        />
      </Li>
    </Ul>
  );
};
