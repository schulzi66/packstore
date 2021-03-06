const tempPackages: string[] = ['chalk', 'chalk-animation', 'cors', 'dotenv', 'express', 'figlet', 'gradient-string'];

export const findAll = async (): Promise<string[]> => tempPackages;

export const addPackage = async (packageToAdd: string): Promise<string> => {
  tempPackages.push(packageToAdd);
  return packageToAdd;
};

export const removePackage = async (packageToRemove: string) => {
  tempPackages.splice(
    tempPackages.findIndex((x) => x === packageToRemove),
    1
  );
};
