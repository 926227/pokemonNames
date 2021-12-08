export const NamesList = ({ names }: { names: string[] }): JSX.Element => {
  return (
    <ul>
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  );
};
