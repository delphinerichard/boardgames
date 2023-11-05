import {
  PropsWithChildren,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDVGqBbT7UOGBJiZXJ3WIjcLuK4_cvepyw",
  authDomain: "boardgames-8ea30.firebaseapp.com",
  projectId: "boardgames-8ea30",
  storageBucket: "boardgames-8ea30.appspot.com",
  messagingSenderId: "1068851627616",
  appId: "1:1068851627616:web:4d454196eae718db612505",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

type UserContextValue = {
  isLoading: boolean;
  user: User | null;
  invalidateUser: () => void;
};

const UserContext = createContext<UserContextValue>({
  isLoading: true,
  user: null,
  invalidateUser: () => {},
});

export function useUser() {
  return useContext(UserContext);
}

export const Consumer = UserContext.Consumer;

type UserProviderProps = PropsWithChildren<{}>;
export const Provider = function UserProvider(props: UserProviderProps) {
  const [user, setUser] = useState<User | null>(auth.currentUser);
  const [isDataValid, setDataValid] = useState<boolean>(false);
  const [isLoading, setLoading] = useState(!user);

  const fetchMe = useCallback(async function ({
    signal,
  }: {
    signal?: AbortSignal;
  }) {
    setLoading(true);
    try {
      const currentUser = await auth.currentUser;
      if (currentUser) {
        setUser(currentUser);
      }
    } catch (error) {
      if (error instanceof Error && error.name === "AbortError") {
        return;
      }
      console.dir(error);
    }
    setDataValid(true);
  },
  []);

  useEffect(
    function () {
      if (isDataValid) return;
      const abortController = new AbortController();
      fetchMe({ signal: abortController.signal });
      return function () {
        abortController.abort();
      };
    },
    [fetchMe, isDataValid]
  );

  const invalidateUser = useCallback(function () {
    setDataValid(false);
  }, []);

  const providerValue = useMemo(
    function () {
      return {
        isLoading: isLoading || !isDataValid,
        user,
        invalidateUser,
      };
    },
    [isLoading, isDataValid, user, invalidateUser]
  );

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user);
      setLoading(false);
    } else {
      setUser(null);
      setLoading(false);
    }
  });

  return (
    <UserContext.Provider value={providerValue}>
      {props.children}
    </UserContext.Provider>
  );
};
