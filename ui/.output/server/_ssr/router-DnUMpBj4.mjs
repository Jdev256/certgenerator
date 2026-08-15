import { o as __toESM } from "../_runtime.mjs";
import { O as require_react } from "../_libs/@floating-ui/react+[...].mjs";
import { _ as Link, f as createRouter, g as createRootRouteWithContext, h as createFileRoute, l as Scripts, m as lazyRouteComponent, p as Outlet, u as HeadContent, v as useRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { c as Button, d as ListItem, i as Collapse, l as Navbar, m as require_jsx_runtime, n as IconButton, o as Card, p as Typography, r as Drawer, u as List } from "../_libs/@material-tailwind/react+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
import { a as ForwardRef$1, i as ForwardRef$2, n as ForwardRef$6, o as ForwardRef$4, r as ForwardRef, s as ForwardRef$5, t as ForwardRef$3 } from "../_libs/heroicons__react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DnUMpBj4.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CRw2pd1Z.css";
function MainNavbar({ user, onLogout, children }) {
	const [openNav, setOpenNav] = (0, import_react.useState)(false);
	const [openDrawer, setOpenDrawer] = (0, import_react.useState)(false);
	const canAccessGenerator = Boolean(user?.is_active);
	(0, import_react.useEffect)(() => {
		const handleResize = () => {
			if (window.innerWidth >= 960) {
				setOpenNav(false);
				setOpenDrawer(false);
			}
		};
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Navbar, {
			className: "mx-auto w-full max-w-screen-xl px-4 py-2 lg:px-8 lg:py-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Typography, {
						as: "a",
						href: "/",
						type: "small",
						className: "mx-2 flex items-center gap-2 py-1 font-bold text-blue-600",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef, { className: "h-6 w-6" }), "CertGenerate"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden lg:ml-auto lg:mr-2 lg:block",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
							className: "flex items-center gap-x-6",
							children: [canAccessGenerator && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Typography, {
								as: "a",
								href: "/generator",
								type: "small",
								className: "flex items-center gap-1 p-1 font-medium text-blue-gray-900 transition-colors hover:text-blue-500",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$1, { className: "h-4 w-4" }), "Generator"]
							}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Typography, {
								as: "a",
								href: "/validate",
								type: "small",
								className: "flex items-center gap-1 p-1 font-medium text-blue-gray-900 transition-colors hover:text-blue-500",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$2, { className: "h-4 w-4" }), "Validar"]
							}) })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hidden items-center gap-x-2 lg:flex",
						children: !user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							as: "a",
							href: "/login",
							variant: "ghost",
							size: "sm",
							color: "secondary",
							children: "Login"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							as: "a",
							href: "/register",
							variant: "solid",
							size: "sm",
							color: "primary",
							children: "Registro"
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							onClick: onLogout,
							variant: "outline",
							size: "sm",
							color: "error",
							children: "Sair"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
						size: "sm",
						variant: "ghost",
						color: "secondary",
						onClick: () => setOpenNav(!openNav),
						className: "ml-auto grid lg:hidden",
						children: openNav ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$3, { className: "h-5 w-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$4, { className: "h-5 w-5" })
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Collapse, {
				open: openNav,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 rounded-lg border border-blue-gray-50 p-2 lg:hidden",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(List, { children: [
						canAccessGenerator && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ListItem, {
							as: "a",
							href: "/generator",
							onClick: () => setOpenNav(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$1, { className: "mr-3 h-5 w-5" }), "Generator"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ListItem, {
							as: "a",
							href: "/validate",
							onClick: () => setOpenNav(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$2, { className: "mr-3 h-5 w-5" }), "Validar"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "my-3 border-blue-gray-50" }),
						!user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ListItem, {
							as: "a",
							href: "/login",
							onClick: () => setOpenNav(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$5, { className: "mr-3 h-5 w-5" }), "Login"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ListItem, {
							as: "a",
							href: "/register",
							onClick: () => setOpenNav(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$6, { className: "mr-3 h-5 w-5" }), "Registro"]
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ListItem, {
							onClick: () => {
								setOpenNav(false);
								onLogout?.();
							},
							className: "text-red-500",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$5, { className: "mr-3 h-5 w-5 text-red-500" }), "Sair"]
						})
					] })
				})
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
			className: "w-full flex-1",
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer, {
			open: openDrawer,
			onClose: () => setOpenDrawer(false),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Overlay, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Drawer.Panel, {
				placement: "left",
				className: "p-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
					color: "secondary",
					shadow: false,
					className: "h-full w-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-6 flex items-center justify-between border-b border-gray-100 p-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Typography, {
							type: "h5",
							color: "secondary",
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef, { className: "h-6 w-6 text-blue-600" }), "CertGenerate"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconButton, {
							size: "sm",
							variant: "ghost",
							color: "secondary",
							onClick: () => setOpenDrawer(false),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$3, { className: "h-5 w-5" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(List, { children: [
						canAccessGenerator && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ListItem, {
							as: "a",
							href: "/generator",
							onClick: () => setOpenDrawer(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$1, { className: "mr-3 h-5 w-5" }), "Generator"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ListItem, {
							as: "a",
							href: "/validate",
							onClick: () => setOpenDrawer(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$2, { className: "mr-3 h-5 w-5" }), "Validar"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("hr", { className: "my-3 border-blue-gray-50" }),
						!user ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ListItem, {
							as: "a",
							href: "/login",
							onClick: () => setOpenDrawer(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$5, { className: "mr-3 h-5 w-5" }), "Login"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ListItem, {
							as: "a",
							href: "/register",
							onClick: () => setOpenDrawer(false),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$6, { className: "mr-3 h-5 w-5" }), "Registro"]
						})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(ListItem, {
							onClick: () => {
								setOpenDrawer(false);
								onLogout?.();
							},
							className: "text-red-500",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ForwardRef$5, { className: "mr-3 h-5 w-5 text-red-500" }), "Sair"]
						})
					] })]
				})
			}) })
		})
	] });
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$2 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "CertGenerate" },
			{
				name: "description",
				content: "Emissão e validação de certificados digitais."
			},
			{
				property: "og:title",
				content: "CertGenerate"
			},
			{
				property: "og:description",
				content: "Emissão e validação de certificados digitais."
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			},
			{
				name: "twitter:site",
				content: "@Lovable"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.ico",
			type: "image/x-icon"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$2.useRouteContext();
	const [user, setUser] = (0, import_react.useState)({
		id: 1,
		name: "Jonata",
		is_active: true
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "flex min-h-screen flex-col",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MainNavbar, {
				user,
				onLogout: () => setUser(null),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			})
		})
	});
}
var $$splitComponentImporter$1 = () => import("./routes-BTLELrXL.mjs");
var Route$1 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "CertGenerate — Emissão e validação de certificados" },
		{
			name: "description",
			content: "Plataforma para emitir, organizar e validar certificados digitais com verificação pública por código."
		},
		{
			property: "og:title",
			content: "CertGenerate — Certificados digitais"
		},
		{
			property: "og:description",
			content: "Emita, organize e valide certificados digitais com verificação pública por código."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./validate-B3afK5M2.mjs");
var Route = createFileRoute("/validate")({
	head: () => ({ meta: [
		{ title: "Validar documento — CertGenerate" },
		{
			name: "description",
			content: "Verifique a autenticidade de um certificado informando o código de verificação impresso no documento."
		},
		{
			property: "og:title",
			content: "Validar documento — CertGenerate"
		},
		{
			property: "og:description",
			content: "Verifique a autenticidade de um certificado pelo código de verificação."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var rootRouteChildren = {
	IndexRoute: Route$1.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$2
	}),
	ValidateRoute: Route.update({
		id: "/validate",
		path: "/validate",
		getParentRoute: () => Route$2
	})
};
var routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
