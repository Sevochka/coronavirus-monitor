const splitCamelCaseToString = (s: string) => {
  return s
    .split(/(?=[A-Z])/)
    .map((p) => {
      return p.charAt(0).toUpperCase() + p.slice(1);
    })
    .join(' ');
};

export default splitCamelCaseToString;