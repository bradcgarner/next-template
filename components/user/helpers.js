import { parseQueryString } from 'browser-helpers';

const REACT_APP_MODEL_URL = process.env.REACT_APP_MODEL_URL;

export const getAuthToken = () => {
  let authToken = typeof window !== 'undefined' && window.localStorage ? window.localStorage.authToken : null ;
  if(!authToken){
    const parsed = parseQueryString();
    if(typeof parsed.authToken === 'string'){
      authToken = parsed.authToken;
    }
  }
  return authToken;
};

export const getSubscription = () => {
  let hasSubscription = 
    typeof window !== 'undefined' && 
    window.localStorage ? 
    window.localStorage.hasSubscription === 'true' : 
    null ;

  if(!hasSubscription){
    const parsed = parseQueryString();
    if(parsed.subscription === 'true'){
      hasSubscription = true;
    }
  }
  return hasSubscription;
};


export const fetchContent = path => {
  const authToken = getAuthToken();

  const url = `${REACT_APP_MODEL_URL}/api/pages/${path}`;
  const init = {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${authToken}`,
    },
  };
  return fetch(url, init)
    .then(dataReturned=>{
      if(!dataReturned.ok){
        return {
          error: dataReturned.statusText,
          status: dataReturned.status || 400};
      }
      if(dataReturned.status === 204){
        return {
          error: 'no content',
          status: 204
        };
      }
      return dataReturned.json();
    })
    .then(data=>{
      return data;
    })
    .catch(error=>{
      console.error('error attempting to fetch content',error);
      return {error: 'error attempting to fetch content'};
    });
};

export const relogin = () => {
  const authToken = getAuthToken();

  if(!authToken){
    // console.log('no authToken, not attempting relogin');
    const requireLogin = true;
    return requireLogin;
  }
  const url = `${REACT_APP_MODEL_URL}/api/auth/relogin`;
  const init = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({authToken,site:'purple-roof.com'}), // site needed to determine to which site we want to re-login, since multiple sites use the same function
  };
  return fetch(url, init)
    .then(dataReturned=>{
      if(!dataReturned.ok){
        return {status: dataReturned.status || 400};
      }
      if(dataReturned.status === 204){
        return {status: 204};
      }
      return dataReturned.json();
    })
    .then(data=>{
      let requireLogin = true;
      if(data.authToken){
        if(typeof window !== 'undefined' && window.localStorage &&
          typeof window.localStorage.setItem === 'function'){
          window.localStorage.setItem('authToken',  data.authToken);
        }
        requireLogin = false;
      }
      return requireLogin;
    })
    .catch(error=>{
      console.error('error attempting to re-login',error);
      return false;
    });
}

export const requestPwReset = email => {
  const url=`${REACT_APP_MODEL_URL}/api/auth/pwreset`
  const headers = {
    'Content-Type': 'application/json',
  }
  const init = {
    method: 'POST',
    headers,
    body: JSON.stringify({email,site:'purple-roof.com'}),
  }
  return fetch(url, init)
  .then(userReturned=>{
    if(!userReturned.ok){
      return Promise.reject(userReturned.statusText);
    }
    return userReturned.json();
  })
  .then(user=>{
    return user;
  })
  .catch(error=>{
    return {
      error: true,
      message: `Error: ${error}`,
    };    
  })
}

export const setNewPassword = user => {
  const userId = user.id;
  if(!userId){
    // console.log('no user id, not setting new password');
    return;
  }
  const url=`${REACT_APP_MODEL_URL}/api/users/${userId}/pw`
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${user.authToken}`,
  }
  const init = {
    method: 'PUT',
    headers,
    body: JSON.stringify({...user,site: 'purple-roof.com'}),
  }
  return fetch(url, init)
  .then(userReturned=>{
    if(!userReturned.ok){
      return Promise.reject(userReturned.statusText);
    }
    return userReturned.json();
  })
  .then(user=>{
    if(!user.pwReset){
      if(user.authToken){
        window.localStorage.setItem('authToken',  user.authToken);
      }
    }
    return {...user}; 
  })
  .catch(error=>{
    // console.error('error attempting to reset password', error);
    return {error};
  });
}

export const login = (username, password) => {
  const url=`${REACT_APP_MODEL_URL}/api/auth/login`
  const headers = {
    'Content-Type': 'application/json',
  }
  const init = {
    method: 'POST',
    headers,
    body: JSON.stringify({username, password}),
  }
  return fetch(url, init)
  .then(userReturned=>{
    if(!userReturned.ok){
      return Promise.reject(userReturned.statusText);
    }
    return userReturned.json();
  })
  .then(user=>{
    if(!user.pwReset){
      window.localStorage.setItem('authToken', user.authToken);
    }
    return {...user}; 
  })
  .catch(error=>{
    // console.error('error attempting to log in', error);
    return {error};
  });
};

export const logout = () => {
  window.localStorage.removeItem('authToken');
  window.location.assign('https://www.purple-roof.com');
  console.log('authToken is removed from local storage')
};

export const getRegistrationInfo = () => {
  const url=`${REACT_APP_MODEL_URL}/api/users-public`
  return fetch(url)
  .then(dataReturned=>{
    return dataReturned.json();
  })
};

export const postUser = user => {
  const url=`${REACT_APP_MODEL_URL}/api/users-public`
  const headers = {
    'Content-Type': 'application/json',
  }
  const init = {
    method: 'POST',
    headers,
    body: JSON.stringify(user),
  }
  return fetch(url, init)
  .then(userReturned=>{
    return userReturned.json();
  })
};