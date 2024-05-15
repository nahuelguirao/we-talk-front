import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

//LOADING CONTEXT
interface ContextProps {
  isLoading: boolean;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export const LoadingContext = createContext<ContextProps>({
  isLoading: false,
  setIsLoading: () => {},
});

//LOADING PROVIDER
interface Props {
  children: ReactNode;
}

export const LoadingContextProvider = ({ children }: Props) => {
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {children}
    </LoadingContext.Provider>
  );
};
