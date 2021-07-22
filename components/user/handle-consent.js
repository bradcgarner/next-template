import { 
  dateDelta,
  convertTimestampToString,
  convertStringToTimestamp } from 'conjunction-junction';
import content               from '../../helpers/content';

const privacy      = content.privacy || {} ;
const lastUpdate   = privacy.lastUpdate;
const lastUpdateTs = privacy.lastUpdateTs;

export const hasConsented = (userAccount=false) => {
  // userAccount = true if we are checking for user accounts
  // i.e. partners or detention modeler
  // userAccount = false = just regular cookies

  if(typeof window !== 'undefined' && window.localStorage){

    const hasEverConsented = 
      userAccount ?
      window.localStorage.userAccountConsent :
      window.localStorage.consented ;

    const consentTs = 
      hasEverConsented ?
      convertStringToTimestamp(`${hasEverConsented} 23:59:59`):
      null;

    const minutesSinceConsent = dateDelta(lastUpdateTs, consentTs);
    const consentIsRecent = consentTs ?
    minutesSinceConsent > 0:
      false ;
    // console.log({hasEverConsented,minutesSinceConsent,consentIsRecent,lastUpdateTs})
    
    const consented = 
      consentIsRecent &&
      window.localStorage.userStats &&
      window.localStorage.userHistory &&
      window.localStorage.consented;

    return consented;
  }

  return false;
};

export const toggleConsent = (userAccount=false) => {
  if(typeof window !== 'undefined' && window.localStorage){
    
    const consented = hasConsented(userAccount);

    if(!consented){
      if(userAccount){
        window.localStorage.setItem('userAccountConsent',lastUpdate);
      }
      window.localStorage.setItem('userStats',true);
      window.localStorage.setItem('userHistory',true);
      window.localStorage.setItem('consented',
        convertTimestampToString(new Date(), 'yyyy-mm-dd'));
      return true;

    } else {
      window.localStorage.removeItem('userAccountConsent');
      window.localStorage.removeItem('userStats');
      window.localStorage.removeItem('userHistory');
      window.localStorage.removeItem('consented');
      return false;
    }  
  }

}