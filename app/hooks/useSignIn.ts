import { AuthServices } from "./../services/auth.services";
import { IAuth } from "./../types/auth.types";
import { useMutation } from "react-query";

export const useSignIn = () => {
  const { isLoading,mutateAsync } = useMutation("signin", (user:IAuth) =>
    AuthServices.signIn(user),
    {
      onError: (error:any) => {
        alert(error.message)
      },
      onSuccess: (data:any)=>{
        localStorage.setItem('token',`Bearer ${data.data.values.token}`)
      }
    }
  );
  return {isLoading,mutateAsync}
};
