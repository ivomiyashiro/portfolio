import { Div, Li, Ul } from './styles';

export const Nav = ({ activeTab, handleActiveTab }) => {

  const handleClick = (tabName) => {
    handleActiveTab(tabName);
  };

  return (
    <Div>
      <Ul>
        <Li onClick={ () =>  handleClick('All') } isActive={ activeTab === 'All' }>All</Li>
        <Li onClick={ () =>  handleClick('FrontEnd') } isActive={ activeTab === 'FrontEnd' }>FrontEnd</Li>
        <Li onClick={ () =>  handleClick('BackEnd') } isActive={ activeTab === 'BackEnd' }>BackEnd</Li>
        <Li onClick={ () =>  handleClick('Others') } isActive={ activeTab === 'Others' }>Others</Li>
      </Ul>
    </Div>
  );
};
