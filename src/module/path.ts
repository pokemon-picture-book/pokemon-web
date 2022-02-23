import fs from 'fs';

export const getPaths = (dirName: string): string[] => {
    const dirNames = fs.readdirSync(dirName);
    return dirNames.flatMap((dn) => {
        const path = `${dirName}/${dn}`;
        const stat = fs.statSync(path);
        if (stat.isDirectory()) {
            return getPaths(path);
        }
        return path;
    });
};
