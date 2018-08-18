'use strict';

/**
 * material-ui-credit-card-icons
 * https://github.com/codefoundries/material-ui-credit-card-icons
 *
 * Copyright (c) 2016 Code Foundries, Aleksandar Chalakov
 * Licensed under the MIT license.
 */

 import React from 'react';

 export IconAmericanExpress   from './Icon_AmericanExpress';
 export IconCreditCardOutline from './Icon_CreditCardOutline';
 export IconDinersClub        from './Icon_DinersClub';
 export IconDiscover          from './Icon_Discover';
 export IconJCB               from './Icon_JCB';
 export IconMasterCard        from './Icon_MasterCard';
 export IconVisa              from './Icon_Visa';


 import IconAmericanExpress   from './Icon_AmericanExpress';
 import IconCreditCardOutline from './Icon_CreditCardOutline';
 import IconDinersClub        from './Icon_DinersClub';
 import IconDiscover          from './Icon_Discover';
 import IconJCB               from './Icon_JCB';
 import IconMasterCard        from './Icon_MasterCard';
 import IconVisa              from './Icon_Visa';


export function getCreditCardIconByName( iconName )
{
  if( iconName == 'AmericanExpress' ) { return <IconAmericanExpress /> }
  if( iconName == 'DinersClub' )      { return <IconDinersClub /> }
  if( iconName == 'Discover' )        { return <IconDiscover /> }
  if( iconName == 'JCB' )             { return <IconJCB /> }
  if( iconName == 'MasterCard' )      { return <IconMasterCard /> }
  if( iconName == 'Visa' )            { return <IconVisa /> }
                                        return <IconCreditCardOutline />;
}
