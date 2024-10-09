import { createContext, SetStateAction, useState, ReactNode } from "react";

interface TestContextType {
    testString: string,
    setTestString: React.Dispatch<SetStateAction<string>>
}

interface TestContextProviderProps {
    children: ReactNode
}

const TestContext = createContext<TestContextType | undefined>(undefined)

const TestContextProvider = ({children}: TestContextProviderProps) => {
    const [testString, setTestString] = useState<string>("")

    return (
        <TestContext.Provider value={{testString, setTestString}}>
            {children}
        </TestContext.Provider>
    )

}

export {TestContext, TestContextProvider} 