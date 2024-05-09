
import React from 'react';
import { CARD_IMG_URL } from '../../utils/Constants';

const Grocerycard = (props) => {
  const { groceryData } = props;
  const { displayName, imageId } = groceryData;

  

  return (
    <div className="relative flex justify-center items-center flex-col flex-wrap w-[160px] p-2">
      <img
        className="w-[100%] h-[100%]  object-cover bg-transparent  rounded-md"
        src={CARD_IMG_URL+imageId}
        alt="grocery"
        
      />
      <div 
      style={{
  paddingTop: '6px',
  WebkitFontSmoothing: 'antialiased',
  fontFamily: 'Basis_Grotesque_Pro',
  fontWeight: 500,
  fontSize: '18px',
  lineHeight: '16px',
  letterSpacing: '-0.3px',
  color: 'rgba(2, 6, 12, 0.75)',
  overflow: 'hidden',
  width: '100%',
  display: '-webkit-box',
  overflowWrap: 'break-word',
  WebkitLineClamp: 2,
  WebkitBoxOrient: 'vertical',
  minHeight: 'calc(32px)'
}}>
  <h2>{displayName}</h2>
</div>

    </div>
  );
};

export default Grocerycard;
