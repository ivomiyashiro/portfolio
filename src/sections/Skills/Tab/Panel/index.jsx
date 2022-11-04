import { AllPanel } from './AllPanel';
import { FrontEndPanel } from './FrontEndPanel';
import { BackEndPanel } from './BackEndPanel';
import { OthersPanel } from './OthersPanel';
import { Div } from './styles';

export const Panel = ({ activeTab }) => {
  const logoSize = '60px';
  return (
    <Div>
      {
        activeTab === 'All'
        &&
        <div className='animate__animated animate__fadeIn'>
          <AllPanel logoSize={ logoSize } />
        </div>
      }
      {
        activeTab === 'FrontEnd'
        &&
        <div className='animate__animated animate__fadeIn'>
          <FrontEndPanel logoSize={ logoSize } />
        </div>
      }
      {
        activeTab === 'BackEnd'
        &&
        <div className='animate__animated animate__fadeIn'>
          <BackEndPanel logoSize={ logoSize } />
        </div>
      }
      {
        activeTab === 'Others'
        &&
        <div className='animate__animated animate__fadeIn'>
          <OthersPanel logoSize={ logoSize } />
        </div>
      }
    </Div>
  );
};
