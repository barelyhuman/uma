declare const _default: {
  createRenderFunction: typeof createRenderFunction;
  createRoute: typeof createRoute;
};

export default _default;

declare function createRoute({ handler, errorHandler, route }: {
  handler: any;
  errorHandler: any;
  route: any;
}, scope: any, config: any): void;
declare function createRenderFunction({ createApp, routes }: {
  createApp: any;
  routes: any;
}): ({ req, reply, app: server }: {
  req: any;
  reply: any;
  app: any;
}) => Promise<{
  element: any;
  hydration: string;
}>;
