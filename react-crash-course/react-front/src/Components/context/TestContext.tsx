import { createContext, ReactNode, useState } from "react";

interface TestType {
    testString : string,
    setTestString: React.Dispatch<React.SetStateAction<string>>
}

interface TestContextProviderProps {
    children: ReactNode
}

const TestContext = createContext<TestType | undefined>(undefined)





const TestContextProvider = ({children} :TestContextProviderProps) => {

    const [testString, setTestString] = useState<string>("")

    return(
        <TestContext.Provider value={{testString, setTestString}}>
            {children}
        </TestContext.Provider>
    )
}

export {TestContext, TestContextProvider}