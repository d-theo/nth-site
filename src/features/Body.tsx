interface Props {
  children: React.ReactNode;
}
export function Body(props: Props) {
  return <div className="app-body">{props.children}</div>;
}
