const Layout = (props: any) => {
  return (
    <div className="min-h-screen flex">
      <div className="m-auto max-w-lg">{props.children}</div>
    </div>
  );
};

export default Layout;
