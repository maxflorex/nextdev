import { MyContext } from './Context';

function MyProvider({ children, value }) {
    return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
}

export default MyProvider;
