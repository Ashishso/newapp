import React,{useEffect} from 'react';


const Loader = () => {

    const [isLoading, setIsLoading] = React.useState(true); 
    const [userToken, setUserToken] = React.useState(null);
     
 const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('ashish');
      setIsLoading(false);
    },
     signOut: () => {
       setUserToken(null);
       setIsLoading(false);
     },
      signUp: () => {
        setUserToken('ashish');
        setIsLoading(false);
      },
 }));

  useEffect (() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if(isLoading)  {
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
       <ActivityIndicator size="large" color="#009387" /> 
    <View> 
    );
  }

   return (
    
   )
}
export default Loader;