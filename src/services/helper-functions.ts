export const mapEnumToOptions = <T extends Record<string, string>>(
  enumObject: T,
  ignore: (keyof T)[] = [],
) => {
  return Object.keys(enumObject)
    .filter((key) => !ignore.includes(key as keyof T)) // Exclude ignored keys
    .map((key) => ({
      label: key,
      value: enumObject[key as keyof T], // Ensure type safety when accessing values
    }));
};
