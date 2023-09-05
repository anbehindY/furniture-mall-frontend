import { createContext } from 'react';

export const DashboardContext = createContext();

export const DashboardProvider = (data) => {
  const { children } = data;

  const Verifylogin = () => true;

  return (
    <DashboardContext.Provider value={{ Verifylogin }}>
      {children}
    </DashboardContext.Provider>
  );
};
export default DashboardProvider;
