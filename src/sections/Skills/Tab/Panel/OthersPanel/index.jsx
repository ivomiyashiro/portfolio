import { FigmaLogo, GitLogo, PythonLogo, ShopifyLogo, WordPressLogo } from '../../../../../components/logos';
import { Card } from '../../../Card';
import { Li, Ul } from '../styles';

export const OthersPanel = ({ logoSize }) => {
  return (
    <Ul>
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
