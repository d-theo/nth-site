import { Header } from "./Header";
import { Outlet } from "react-router-dom";
import { Body } from "./Body";

export function Layout() {
  return (
    <>
      <Header></Header>
      <Body>
        <Outlet />
      </Body>
    </>
  );
}
