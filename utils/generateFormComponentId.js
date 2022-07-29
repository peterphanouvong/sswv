const toSnakeCase = (str) => {
  const res = str.replace(/([A-Z])/g, " $1");
  return res.split(" ").join("_").toLowerCase();
};

export const generateFormComponentId = (component, name, label, piece) => {
  return toSnakeCase(`${component} ${name} ${label} ${piece || ""}`);
};
