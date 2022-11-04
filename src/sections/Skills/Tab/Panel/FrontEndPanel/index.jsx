import React from 'react';
import { CssLogo, HtmlLogo, JsLogo, NextLogo, ReactLogo, SassLogo, TailwindLogo, TypeScriptLogo } from '../../../../../components/logos';
import { Card } from '../../../Card';
import { Li, Ul } from '../styles';

export const FrontEndPanel = ({ logoSize }) => {
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
          name="Next"
          icon={ <TailwindLogo width={ logoSize } height={ logoSize } /> }
        />
      </Li>
      <Li>
        <Card 
          name="Next"
          icon={ <SassLogo width={ logoSize } height={ logoSize } /> }
        />
      </Li>
    </Ul>
  );
};
